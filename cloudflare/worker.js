import { DurableObject } from 'cloudflare:workers';
import {
  cloneJson,
  sanitizeSharedState,
  prepareNextSnapshot
} from '../lib/state-pure.mjs';
import seedPayload from '../netlify/seed-state.json';

const MAX_BODY_BYTES = 2 * 1024 * 1024;
const WS_BACKUP_POLL_MS = 15000;

function corsHeaders(extra = {}) {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    ...extra
  };
}

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders()
  });
}

function getSeedDefaults() {
  const src = seedPayload && seedPayload.shared ? seedPayload.shared : seedPayload;
  return cloneJson(src || {});
}

export class ClubStateDO extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.ctx.blockConcurrencyWhile(async () => {
      this.ctx.storage.sql.exec(`
        CREATE TABLE IF NOT EXISTS shared_state (
          id TEXT PRIMARY KEY,
          version INTEGER NOT NULL,
          data TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );
      `);
    });
  }

  getSnapshot() {
    const defaults = getSeedDefaults();
    const row = this.ctx.storage.sql
      .exec('SELECT version, data, updated_at FROM shared_state WHERE id = ?', 'global')
      .toArray()[0];

    if (!row) {
      const now = new Date().toISOString();
      this.ctx.storage.sql.exec(
        'INSERT INTO shared_state (id, version, data, updated_at) VALUES (?, ?, ?, ?)',
        'global',
        1,
        JSON.stringify(defaults),
        now
      );
      return {
        version: 1,
        shared: defaults,
        updatedAt: now
      };
    }

    return {
      version: Number(row.version || 1),
      shared: sanitizeSharedState(JSON.parse(row.data), defaults),
      updatedAt: row.updated_at || new Date().toISOString()
    };
  }

  broadcastState(snapshot, clientId) {
    const msg = JSON.stringify({
      type: 'state',
      version: snapshot.version,
      clientId: clientId || '',
      shared: snapshot.shared,
      updatedAt: snapshot.updatedAt
    });
    for (const ws of this.ctx.getWebSockets()) {
      try {
        ws.send(msg);
      } catch (_) {}
    }
  }

  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    const url = new URL(request.url);
    const p = url.pathname;

    if (p === '/api/ws') {
      const upgrade = request.headers.get('Upgrade') || '';
      if (upgrade.toLowerCase() !== 'websocket') {
        return jsonResponse(426, { ok: false, error: 'Expected WebSocket upgrade' });
      }
      const pair = new WebSocketPair();
      const client = pair[0];
      const server = pair[1];
      this.ctx.acceptWebSocket(server);
      const snap = this.getSnapshot();
      try {
        server.send(JSON.stringify({
          type: 'state',
          version: snap.version,
          clientId: '',
          shared: snap.shared,
          updatedAt: snap.updatedAt
        }));
      } catch (_) {}
      return new Response(null, { status: 101, webSocket: client });
    }

    if (p === '/api/health' && request.method === 'GET') {
      const snap = this.getSnapshot();
      return jsonResponse(200, {
        ok: true,
        engine: 'cloudflare-do-sqlite',
        syncMode: 'ws',
        wsPath: '/api/ws',
        pollIntervalMs: WS_BACKUP_POLL_MS,
        version: snap.version,
        clients: this.ctx.getWebSockets().length,
        updatedAt: snap.updatedAt
      });
    }

    if (p === '/api/state' && request.method === 'GET') {
      const snap = this.getSnapshot();
      const sinceVer = Number(url.searchParams.get('since') || 0);
      if (Number.isFinite(sinceVer) && sinceVer > 0 && snap.version <= sinceVer) {
        return jsonResponse(200, {
          ok: true,
          syncMode: 'ws',
          wsPath: '/api/ws',
          pollIntervalMs: WS_BACKUP_POLL_MS,
          unchanged: true,
          version: snap.version,
          updatedAt: snap.updatedAt
        });
      }
      return jsonResponse(200, {
        ok: true,
        syncMode: 'ws',
        wsPath: '/api/ws',
        pollIntervalMs: WS_BACKUP_POLL_MS,
        ...snap
      });
    }

    if (p === '/api/state' && (request.method === 'POST' || request.method === 'PUT')) {
      const raw = await request.text();
      if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
        return jsonResponse(413, { ok: false, error: 'Payload too large' });
      }
      let body;
      try {
        body = raw ? JSON.parse(raw) : {};
      } catch (_) {
        return jsonResponse(400, { ok: false, error: 'Invalid JSON body' });
      }
      if (!body || typeof body.shared !== 'object' || !body.shared) {
        return jsonResponse(400, { ok: false, error: 'Missing shared state object' });
      }

      const current = this.getSnapshot();
      const result = prepareNextSnapshot(current, body.shared, {
        reason: body.reason || 'manual',
        baseVersion: body.baseVersion,
        period: body.period
      });

      if (result.conflict) {
        return jsonResponse(409, {
          ok: false,
          conflict: true,
          syncMode: 'ws',
          wsPath: '/api/ws',
          pollIntervalMs: WS_BACKUP_POLL_MS,
          ...result.snapshot
        });
      }

      this.ctx.storage.sql.exec(
        'UPDATE shared_state SET version = ?, data = ?, updated_at = ? WHERE id = ?',
        result.snapshot.version,
        JSON.stringify(result.snapshot.shared),
        result.snapshot.updatedAt,
        'global'
      );

      this.broadcastState(result.snapshot, body.clientId || '');
      return jsonResponse(200, {
        ok: true,
        syncMode: 'ws',
        wsPath: '/api/ws',
        pollIntervalMs: WS_BACKUP_POLL_MS,
        ...result.snapshot
      });
    }

    if (p === '/api/reset' && request.method === 'POST') {
      const current = this.getSnapshot();
      const next = {
        version: current.version + 1,
        shared: getSeedDefaults(),
        updatedAt: new Date().toISOString()
      };
      this.ctx.storage.sql.exec(
        'UPDATE shared_state SET version = ?, data = ?, updated_at = ? WHERE id = ?',
        next.version,
        JSON.stringify(next.shared),
        next.updatedAt,
        'global'
      );
      this.broadcastState(next, 'server-reset');
      return jsonResponse(200, {
        ok: true,
        syncMode: 'ws',
        wsPath: '/api/ws',
        pollIntervalMs: WS_BACKUP_POLL_MS,
        ...next
      });
    }

    if (p === '/api/events' && request.method === 'GET') {
      return jsonResponse(200, {
        ok: true,
        sse: false,
        syncMode: 'ws',
        wsPath: '/api/ws',
        pollIntervalMs: WS_BACKUP_POLL_MS
      });
    }

    return jsonResponse(404, { ok: false, error: 'Unknown API endpoint' });
  }

  async webSocketMessage(ws, message) {
    if (message === 'ping') {
      try { ws.send('pong'); } catch (_) {}
    }
  }

  async webSocketClose() {}
  async webSocketError() {}
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      const id = env.CLUB_DO.idFromName('global');
      const stub = env.CLUB_DO.get(id);
      return stub.fetch(request);
    }
    return env.ASSETS.fetch(request);
  }
};

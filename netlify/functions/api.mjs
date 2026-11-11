import path from 'node:path';
import { getStore } from '@netlify/blobs';
import stateCore from '../../lib/state-core.js';

const { loadSeededSharedState, sanitizeSharedState, prepareNextSnapshot } = stateCore;

const STORE_NAME = '6eclub-state';
const STATE_KEY = 'global';
const MAX_BODY_BYTES = 2 * 1024 * 1024;
const POLL_INTERVAL_MS = 1500;

let cachedDefaults = null;
function getDefaults() {
  if (!cachedDefaults) {
    cachedDefaults = loadSeededSharedState(process.cwd());
  }
  return cachedDefaults;
}

function buildHeaders(extra = {}) {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'CDN-Cache-Control': 'no-store',
    ...extra
  };
}

function jsonResponse(status, body, extraHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: buildHeaders(extraHeaders)
  });
}

async function readOrSeedState(store) {
  const defaults = getDefaults();
  let entry = await store.getWithMetadata(STATE_KEY, { type: 'json', consistency: 'strong' });

  if (!entry || !entry.data || !entry.data.shared) {
    const initial = {
      version: 1,
      shared: defaults,
      updatedAt: new Date().toISOString()
    };
    await store.setJSON(STATE_KEY, initial, {
      onlyIfNew: true,
      metadata: { version: 1, updatedAt: initial.updatedAt }
    });
    entry = await store.getWithMetadata(STATE_KEY, { type: 'json', consistency: 'strong' });
    if (!entry || !entry.data || !entry.data.shared) {
      return { snapshot: initial, etag: undefined };
    }
  }

  return {
    snapshot: {
      version: Number(entry.data.version || 1),
      shared: sanitizeSharedState(entry.data.shared, defaults),
      updatedAt: entry.data.updatedAt || new Date().toISOString()
    },
    etag: entry.etag
  };
}

async function handleGetState(store, url) {
  const sinceRaw = url.searchParams.get('since');
  if (sinceRaw !== null && sinceRaw !== '') {
    const sinceVer = Number(sinceRaw);
    if (Number.isFinite(sinceVer) && sinceVer > 0) {
      const meta = await store.getMetadata(STATE_KEY, { consistency: 'strong' });
      const currentMetaVer = Number(meta && meta.metadata && meta.metadata.version ? meta.metadata.version : 0);
      if (currentMetaVer && currentMetaVer <= sinceVer) {
        return jsonResponse(200, {
          ok: true,
          syncMode: 'poll',
          pollIntervalMs: POLL_INTERVAL_MS,
          unchanged: true,
          version: currentMetaVer,
          updatedAt: meta.metadata.updatedAt || new Date().toISOString()
        });
      }
    }
  }

  const { snapshot } = await readOrSeedState(store);
  return jsonResponse(200, {
    ok: true,
    syncMode: 'poll',
    pollIntervalMs: POLL_INTERVAL_MS,
    ...snapshot
  });
}

async function handleSaveState(store, req) {
  const raw = await req.text();
  if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
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

  const opts = {
    reason: body.reason || 'manual',
    baseVersion: body.baseVersion,
    period: body.period
  };

  for (let attempt = 0; attempt < 4; attempt++) {
    const { snapshot, etag } = await readOrSeedState(store);
    const result = prepareNextSnapshot(snapshot, body.shared, opts);
    if (result.conflict) {
      return jsonResponse(409, {
        ok: false,
        conflict: true,
        syncMode: 'poll',
        pollIntervalMs: POLL_INTERVAL_MS,
        ...result.snapshot
      });
    }

    const writeOpts = {
      metadata: {
        version: result.snapshot.version,
        updatedAt: result.snapshot.updatedAt
      }
    };
    if (etag) writeOpts.onlyIfMatch = etag;

    const writeRes = await store.setJSON(STATE_KEY, result.snapshot, writeOpts);
    if (writeRes && writeRes.modified) {
      return jsonResponse(200, {
        ok: true,
        syncMode: 'poll',
        pollIntervalMs: POLL_INTERVAL_MS,
        ...result.snapshot
      });
    }
  }

  return jsonResponse(409, { ok: false, error: 'Concurrent state write conflict, please retry' });
}

async function handleResetState(store) {
  const defaults = getDefaults();
  const { snapshot } = await readOrSeedState(store);
  const next = {
    version: Number(snapshot.version || 0) + 1,
    shared: defaults,
    updatedAt: new Date().toISOString()
  };
  await store.setJSON(STATE_KEY, next, {
    metadata: { version: next.version, updatedAt: next.updatedAt }
  });
  return jsonResponse(200, {
    ok: true,
    syncMode: 'poll',
    pollIntervalMs: POLL_INTERVAL_MS,
    ...next
  });
}

export function createApiHandler(storeFactory = () => getStore({ name: STORE_NAME, consistency: 'strong' })) {
  return async (req) => {
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: buildHeaders() });
    }

    const url = new URL(req.url);
    const subPath = url.pathname.replace(/^\/\.netlify\/functions\/api/, '/api');

    try {
      const store = storeFactory();

      if (subPath === '/api/health' && req.method === 'GET') {
        const { snapshot } = await readOrSeedState(store);
        return jsonResponse(200, {
          ok: true,
          engine: 'netlify-blobs',
          syncMode: 'poll',
          pollIntervalMs: POLL_INTERVAL_MS,
          version: snapshot.version,
          clients: 0,
          updatedAt: snapshot.updatedAt
        });
      }

      if (subPath === '/api/state' && req.method === 'GET') {
        return await handleGetState(store, url);
      }

      if (subPath === '/api/state' && (req.method === 'POST' || req.method === 'PUT')) {
        return await handleSaveState(store, req);
      }

      if (subPath === '/api/reset' && req.method === 'POST') {
        return await handleResetState(store);
      }

      if (subPath === '/api/events' && req.method === 'GET') {
        return jsonResponse(200, {
          ok: true,
          sse: false,
          syncMode: 'poll',
          pollIntervalMs: POLL_INTERVAL_MS
        });
      }

      return jsonResponse(404, { ok: false, error: 'Unknown API endpoint: ' + subPath });
    } catch (err) {
      return jsonResponse(500, {
        ok: false,
        error: err && err.message ? err.message : 'Internal server error'
      });
    }
  };
}

export default createApiHandler();

export const config = {
  path: '/api/*'
};

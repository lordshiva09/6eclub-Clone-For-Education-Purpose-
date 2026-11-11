'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const {
  cloneJson,
  loadClubDataDefaults,
  sanitizeSharedState,
  prepareNextSnapshot
} = require('./lib/state-core');

const ROOT_DIR = __dirname;
const DB_DIR = path.join(ROOT_DIR, 'db');
const SQLITE_PATH = path.join(DB_DIR, 'club.db');
const JSON_FALLBACK_PATH = path.join(DB_DIR, 'shared-state.json');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = Number(process.env.PORT || 3000);
const MAX_BODY_BYTES = 2 * 1024 * 1024;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const BLOCKED_PREFIXES = ['/db/', '/extracted_raw/', '/lib/', '/netlify/', '/scripts/', '/dist/', '/node_modules/'];
const BLOCKED_FILES = new Set(['/server.js', '/package.json', '/package-lock.json', '/netlify.toml', '/.netlifyignore', '/.gitignore']);

function createStore(defaultShared) {
  fs.mkdirSync(DB_DIR, { recursive: true });
  const nowIso = () => new Date().toISOString();

  // Prefer Node built-in SQLite (Node >= 22.5 / Node 24)
  try {
    const { DatabaseSync } = require('node:sqlite');
    const db = new DatabaseSync(SQLITE_PATH);
    db.exec('PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000;');
    db.exec(`
      CREATE TABLE IF NOT EXISTS shared_state (
        id TEXT PRIMARY KEY,
        version INTEGER NOT NULL,
        data TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `);

    const selectStmt = db.prepare('SELECT version, data, updated_at FROM shared_state WHERE id = ?');
    const insertStmt = db.prepare('INSERT INTO shared_state (id, version, data, updated_at) VALUES (?, ?, ?, ?)');
    const updateStmt = db.prepare('UPDATE shared_state SET version = ?, data = ?, updated_at = ? WHERE id = ?');

    let row = selectStmt.get('global');
    if (!row) {
      let seedData = defaultShared;
      // Migrate JSON file state if it exists from an older runtime
      if (fs.existsSync(JSON_FALLBACK_PATH)) {
        try {
          const parsed = JSON.parse(fs.readFileSync(JSON_FALLBACK_PATH, 'utf8'));
          if (parsed && parsed.shared) seedData = sanitizeSharedState(parsed.shared, defaultShared);
        } catch (_) {}
      }
      insertStmt.run('global', 1, JSON.stringify(seedData), nowIso());
      row = selectStmt.get('global');
    }

    const getSnapshot = () => {
      const r = selectStmt.get('global');
      return {
        version: Number(r.version),
        shared: sanitizeSharedState(JSON.parse(r.data), defaultShared),
        updatedAt: r.updated_at
      };
    };

    return {
      engine: 'sqlite',
      dbPath: SQLITE_PATH,
      getSnapshot,
      saveShared(incomingShared, opts = {}) {
        const current = getSnapshot();
        const result = prepareNextSnapshot(current, incomingShared, opts);
        if (result.conflict) return result;
        updateStmt.run(result.snapshot.version, JSON.stringify(result.snapshot.shared), result.snapshot.updatedAt, 'global');
        return result;
      },
      reset() {
        const current = getSnapshot();
        const nextVersion = current.version + 1;
        const ts = nowIso();
        const fresh = cloneJson(defaultShared);
        updateStmt.run(nextVersion, JSON.stringify(fresh), ts, 'global');
        return { version: nextVersion, shared: fresh, updatedAt: ts };
      },
      close() {
        db.close();
      }
    };
  } catch (err) {
    // Atomic JSON file fallback for Node 18/20 runtimes without node:sqlite
    const writeAtomic = (obj) => {
      const tmp = JSON_FALLBACK_PATH + '.tmp.' + process.pid;
      fs.writeFileSync(tmp, JSON.stringify(obj, null, 2), 'utf8');
      fs.renameSync(tmp, JSON_FALLBACK_PATH);
    };
    if (!fs.existsSync(JSON_FALLBACK_PATH)) {
      writeAtomic({ version: 1, shared: cloneJson(defaultShared), updatedAt: nowIso() });
    }
    const getSnapshot = () => {
      const parsed = JSON.parse(fs.readFileSync(JSON_FALLBACK_PATH, 'utf8'));
      return {
        version: Number(parsed.version || 1),
        shared: sanitizeSharedState(parsed.shared, defaultShared),
        updatedAt: parsed.updatedAt || nowIso()
      };
    };
    return {
      engine: 'json-file (' + err.message + ')',
      dbPath: JSON_FALLBACK_PATH,
      getSnapshot,
      saveShared(incomingShared, opts = {}) {
        const current = getSnapshot();
        const result = prepareNextSnapshot(current, incomingShared, opts);
        if (result.conflict) return result;
        writeAtomic(result.snapshot);
        return result;
      },
      reset() {
        const current = getSnapshot();
        const next = {
          version: current.version + 1,
          shared: cloneJson(defaultShared),
          updatedAt: nowIso()
        };
        writeAtomic(next);
        return next;
      },
      close() {}
    };
  }
}

const defaultShared = loadClubDataDefaults(ROOT_DIR);
const store = createStore(defaultShared);
const sseClients = new Set();

function sendSsePayload(res, eventName, payload) {
  res.write(`event: ${eventName}\ndata: ${JSON.stringify(payload)}\n\n`);
}

function broadcastState(snapshot, clientId) {
  const payload = {
    version: snapshot.version,
    clientId: clientId || '',
    shared: snapshot.shared,
    updatedAt: snapshot.updatedAt
  };
  for (const res of sseClients) {
    try {
      sendSsePayload(res, 'state', payload);
    } catch (_) {
      sseClients.delete(res);
    }
  }
}

function setCorsAndNoStore(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
}

function sendJson(res, status, obj) {
  setCorsAndNoStore(res);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on('data', (chunk) => {
      total += chunk.length;
      if (total > MAX_BODY_BYTES) {
        const err = new Error('Payload too large');
        err.statusCode = 413;
        reject(err);
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8').trim();
        resolve(raw ? JSON.parse(raw) : {});
      } catch (_) {
        const err = new Error('Invalid JSON body');
        err.statusCode = 400;
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

function serveStaticFile(req, res, urlPath) {
  let cleanPath = '/';
  try {
    cleanPath = decodeURIComponent(urlPath.split('?')[0] || '/');
  } catch (_) {
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }

  if (cleanPath === '/' || cleanPath === '') cleanPath = '/index.html';
  else if (/^\/admin\/?$/i.test(cleanPath)) cleanPath = '/admin.html';

  const lower = cleanPath.toLowerCase();
  if (
    lower.split('/').some((seg) => seg.startsWith('.')) ||
    BLOCKED_FILES.has(lower) ||
    BLOCKED_PREFIXES.some((prefix) => lower.startsWith(prefix))
  ) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  let filePath = path.resolve(ROOT_DIR, '.' + cleanPath);
  if (!filePath.startsWith(ROOT_DIR + path.sep) && filePath !== path.join(ROOT_DIR, 'index.html')) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    // SPA fallback to index.html for routes without extension
    if (!path.extname(cleanPath)) {
      filePath = path.join(ROOT_DIR, 'index.html');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME_TYPES[ext] || 'application/octet-stream';
  const cacheHeader = (ext === '.html' || ext === '.js' || ext === '.css')
    ? 'no-store, no-cache, must-revalidate'
    : 'public, max-age=604800';

  res.writeHead(200, {
    'Content-Type': mime,
    'Cache-Control': cacheHeader
  });

  if (req.method === 'HEAD') {
    res.end();
    return;
  }

  const stream = fs.createReadStream(filePath);
  stream.on('error', () => {
    if (!res.headersSent) res.writeHead(500);
    res.end();
  });
  stream.pipe(res);
}

const server = http.createServer(async (req, res) => {
  const urlPath = (req.url || '/').split('?')[0];

  if (urlPath.startsWith('/api/')) {
    if (req.method === 'OPTIONS') {
      setCorsAndNoStore(res);
      res.writeHead(204);
      res.end();
      return;
    }

    if (urlPath === '/api/health' && req.method === 'GET') {
      const snap = store.getSnapshot();
      sendJson(res, 200, {
        ok: true,
        engine: store.engine,
        syncMode: 'sse',
        version: snap.version,
        clients: sseClients.size,
        updatedAt: snap.updatedAt
      });
      return;
    }

    if (urlPath === '/api/state' && req.method === 'GET') {
      const snap = store.getSnapshot();
      const queryPart = (req.url || '').split('?')[1] || '';
      const sinceVer = Number(new URLSearchParams(queryPart).get('since') || 0);
      if (Number.isFinite(sinceVer) && sinceVer > 0 && snap.version <= sinceVer) {
        sendJson(res, 200, { ok: true, syncMode: 'sse', unchanged: true, version: snap.version, updatedAt: snap.updatedAt });
        return;
      }
      sendJson(res, 200, { ok: true, syncMode: 'sse', ...snap });
      return;
    }

    if (urlPath === '/api/state' && (req.method === 'POST' || req.method === 'PUT')) {
      try {
        const body = await readJsonBody(req);
        if (!body || typeof body.shared !== 'object' || !body.shared) {
          sendJson(res, 400, { ok: false, error: 'Missing shared state object' });
          return;
        }
        const result = store.saveShared(body.shared, {
          reason: body.reason || 'manual',
          baseVersion: body.baseVersion,
          period: body.period
        });
        if (result.conflict) {
          sendJson(res, 409, { ok: false, conflict: true, ...result.snapshot });
          return;
        }
        broadcastState(result.snapshot, body.clientId || '');
        sendJson(res, 200, { ok: true, ...result.snapshot });
      } catch (err) {
        sendJson(res, err.statusCode || 500, { ok: false, error: err.message });
      }
      return;
    }

    if (urlPath === '/api/reset' && req.method === 'POST') {
      const snap = store.reset();
      broadcastState(snap, 'server-reset');
      sendJson(res, 200, { ok: true, ...snap });
      return;
    }

    if (urlPath === '/api/events' && req.method === 'GET') {
      setCorsAndNoStore(res);
      res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no'
      });
      res.write(': connected\n\n');
      sseClients.add(res);
      sendSsePayload(res, 'state', { ...store.getSnapshot(), clientId: '' });

      req.on('close', () => {
        sseClients.delete(res);
      });
      return;
    }

    sendJson(res, 404, { ok: false, error: 'Unknown API endpoint' });
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Method Not Allowed');
    return;
  }

  serveStaticFile(req, res, req.url || '/');
});

const keepAliveTimer = setInterval(() => {
  for (const res of sseClients) {
    try {
      res.write(': ping\n\n');
    } catch (_) {
      sseClients.delete(res);
    }
  }
}, 25000);
keepAliveTimer.unref();

function getLanUrls(port) {
  const urls = [];
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const info of nets[name] || []) {
      if (info && info.family === 'IPv4' && !info.internal) {
        urls.push(`http://${info.address}:${port}`);
      }
    }
  }
  return urls;
}

server.listen(PORT, HOST, () => {
  const snap = store.getSnapshot();
  console.log(`\n6E.CLUB Server running (${store.engine})`);
  console.log(`Database : ${store.dbPath} (version ${snap.version})`);
  console.log(`Local    : http://127.0.0.1:${PORT}`);
  for (const lan of getLanUrls(PORT)) {
    console.log(`Mobile   : ${lan}`);
  }
  console.log('');
});

function shutdown() {
  clearInterval(keepAliveTimer);
  for (const res of sseClients) {
    try { res.end(); } catch (_) {}
  }
  sseClients.clear();
  server.close(() => {
    try { store.close(); } catch (_) {}
    process.exit(0);
  });
  setTimeout(() => process.exit(0), 2000).unref();
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

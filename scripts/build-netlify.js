'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { loadClubDataDefaults, sanitizeSharedState, cloneJson } = require('../lib/state-core');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const DB_DIR = path.join(ROOT_DIR, 'db');
const SQLITE_PATH = path.join(DB_DIR, 'club.db');
const JSON_FALLBACK_PATH = path.join(DB_DIR, 'shared-state.json');
const SEED_PATH = path.join(ROOT_DIR, 'netlify', 'seed-state.json');

const STATIC_FILES = ['index.html', 'admin.html'];
const STATIC_DIRS = ['css', 'js', 'assets'];

function copyDirClean(srcDir, dstDir) {
  fs.mkdirSync(dstDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const src = path.join(srcDir, entry.name);
    const dst = path.join(dstDir, entry.name);
    if (entry.isDirectory()) {
      copyDirClean(src, dst);
    } else if (entry.isFile()) {
      fs.copyFileSync(src, dst);
    }
  }
}

function readLocalDbSeed(defaults) {
  if (fs.existsSync(SQLITE_PATH)) {
    try {
      const { DatabaseSync } = require('node:sqlite');
      const db = new DatabaseSync(SQLITE_PATH, { readOnly: true });
      try {
        const row = db.prepare('SELECT data FROM shared_state WHERE id = ?').get('global');
        if (row && row.data) {
          return sanitizeSharedState(JSON.parse(row.data), defaults);
        }
      } finally {
        db.close();
      }
    } catch (_) {}
  }
  if (fs.existsSync(JSON_FALLBACK_PATH)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(JSON_FALLBACK_PATH, 'utf8'));
      if (parsed && parsed.shared) {
        return sanitizeSharedState(parsed.shared, defaults);
      }
    } catch (_) {}
  }
  return null;
}

function build() {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  fs.mkdirSync(DIST_DIR, { recursive: true });

  for (const file of STATIC_FILES) {
    const src = path.join(ROOT_DIR, file);
    if (!fs.existsSync(src)) {
      throw new Error('Missing required static file: ' + file);
    }
    fs.copyFileSync(src, path.join(DIST_DIR, file));
  }

  for (const dir of STATIC_DIRS) {
    const src = path.join(ROOT_DIR, dir);
    if (!fs.existsSync(src)) {
      throw new Error('Missing required static directory: ' + dir);
    }
    copyDirClean(src, path.join(DIST_DIR, dir));
  }

  fs.mkdirSync(path.dirname(SEED_PATH), { recursive: true });
  const defaults = loadClubDataDefaults(ROOT_DIR);
  const localSeed = readLocalDbSeed(defaults);

  if (localSeed) {
    fs.writeFileSync(SEED_PATH, JSON.stringify({ shared: localSeed }, null, 2), 'utf8');
  } else if (!fs.existsSync(SEED_PATH)) {
    fs.writeFileSync(SEED_PATH, JSON.stringify({ shared: cloneJson(defaults) }, null, 2), 'utf8');
  }

  console.log('Netlify build ready in', DIST_DIR);
}

build();

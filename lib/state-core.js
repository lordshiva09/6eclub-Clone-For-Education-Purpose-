'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {
  SHARED_KEYS,
  cloneJson,
  buildDefaultsFromClubData,
  sanitizeSharedState,
  prepareNextSnapshot
} = require('./state-pure.mjs');

function resolveFirstExisting(candidates) {
  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  return '';
}

function loadClubDataDefaults(rootDir) {
  const roots = [
    rootDir,
    process.cwd(),
    path.resolve(__dirname, '..')
  ].filter(Boolean);

  const dataFile = resolveFirstExisting(roots.map((r) => path.join(r, 'js', 'data.js')));
  if (!dataFile) {
    throw new Error('Could not locate js/data.js');
  }
  const code = fs.readFileSync(dataFile, 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: dataFile });
  return buildDefaultsFromClubData(sandbox.window.CLUB_DATA);
}

function loadSeededSharedState(rootDir) {
  const baseDefaults = loadClubDataDefaults(rootDir);
  const roots = [
    rootDir,
    process.cwd(),
    path.resolve(__dirname, '..')
  ].filter(Boolean);
  const seedFile = resolveFirstExisting(
    roots.map((r) => path.join(r, 'netlify', 'seed-state.json'))
  );
  if (seedFile) {
    try {
      const parsed = JSON.parse(fs.readFileSync(seedFile, 'utf8'));
      const candidate = parsed && parsed.shared ? parsed.shared : parsed;
      if (candidate && typeof candidate === 'object') {
        return sanitizeSharedState(candidate, baseDefaults);
      }
    } catch (_) {}
  }
  return baseDefaults;
}

module.exports = {
  SHARED_KEYS,
  cloneJson,
  loadClubDataDefaults,
  loadSeededSharedState,
  sanitizeSharedState,
  prepareNextSnapshot
};

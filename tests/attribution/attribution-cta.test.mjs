import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

test('lo snippet di attribuzione e nel layout (same-origin) e il file pubblico esiste', () => {
  assert.match(read('apps/demo/app/layout.tsx'), /<Script src="\/scala-attribution\.js" strategy="afterInteractive" \/>/);
  assert.ok(fs.statSync(path.join(root, 'apps/demo/public/scala-attribution.js')).size > 1000);
});

test('nessun CTA con query punta a app.get-scala.com/login?', () => {
  const bad = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
      const rel = path.join(dir, e.name);
      if (e.isDirectory()) { if (!['node_modules', '.next'].includes(e.name)) walk(rel); }
      else if (/\.(tsx?|jsx?|mdx?)$/.test(e.name) && /app\.get-scala\.com\/login\?/.test(read(rel))) bad.push(rel);
    }
  })('apps');
  assert.deepEqual(bad, []);
});

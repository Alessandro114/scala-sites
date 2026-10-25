#!/usr/bin/env node
// sitekit validate|render|audit <site.json> [outDir]  |  build-samples <outDir>  |  preview <dir> [port]
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { validateSite, renderSite, auditHtml, moderate } from '../src/index.mjs'
import { SAMPLES } from '../src/samples.mjs'
const [cmd, a, b] = process.argv.slice(2)
const write = (dir, files) => { for (const [p, c] of Object.entries(files)) { const f = path.join(dir, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, c) } }
const load = (f) => JSON.parse(fs.readFileSync(f, 'utf8'))
if (cmd === 'validate') { const r = validateSite(load(a)); console.log(JSON.stringify(r, null, 2)); process.exit(r.ok ? 0 : 1) }
else if (cmd === 'render') { const s = load(a); const r = renderSite(s, { mode: 'preview' }); write(b || 'out', r.files); console.log(`${Object.keys(r.files).length} file, index ${r.meta.bytes} byte, moderazione:`, JSON.stringify(moderate(s))) }
else if (cmd === 'audit') { const r = auditHtml(fs.readFileSync(a, 'utf8')); console.log(JSON.stringify(r, null, 2)); process.exit(r.ok ? 0 : 1) }
else if (cmd === 'build-samples') { for (const s of SAMPLES) { const r = renderSite(s, { mode: 'preview' }); write(path.join(a, s.template), r.files); const au = auditHtml(r.files['index.html']); console.log(s.template.padEnd(22), String(r.meta.bytes).padStart(6), 'byte', au.ok ? 'audit OK' : 'audit KO ' + JSON.stringify(au.issues)) } }
else if (cmd === 'preview') { const root = path.resolve(a || 'out'); const port = +(b || 8099); http.createServer((q, r) => { let p = path.join(root, decodeURIComponent(q.url.split('?')[0])); if (p.endsWith('/')) p += 'index.html'; if (!p.startsWith(root) || !fs.existsSync(p)) { r.writeHead(404); return r.end('404') } r.writeHead(200, { 'content-type': p.endsWith('.html') ? 'text/html; charset=utf-8' : 'text/plain', 'x-robots-tag': 'noindex' }); r.end(fs.readFileSync(p)) }).listen(port, '127.0.0.1', () => console.log('http://127.0.0.1:' + port)) }
else if (cmd === 'editor') { const root = path.resolve(import.meta.dirname, '..'); const port = +(a || 8110); const T = { '.html': 'text/html; charset=utf-8', '.mjs': 'text/javascript', '.css': 'text/css' }; http.createServer((q, r) => { let u = decodeURIComponent(q.url.split('?')[0]); if (u === '/') { r.writeHead(302, { location: '/editor/' }); return r.end() } if (u === '/editor/') u = '/editor/index.html'; const f = path.join(root, u); if (!f.startsWith(root) || !/^\/(editor|src|vendor)\//.test(u) || !fs.existsSync(f)) { r.writeHead(404); return r.end('404') } r.writeHead(200, { 'content-type': T[path.extname(f)] || 'text/plain', 'x-robots-tag': 'noindex' }); r.end(fs.readFileSync(f)) }).listen(port, '127.0.0.1', () => console.log('editor su http://127.0.0.1:' + port)) }
else { console.error('uso: sitekit validate|render|audit|build-samples|preview'); process.exit(2) }

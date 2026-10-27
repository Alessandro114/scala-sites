import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import http from 'node:http'
import { execFileSync, spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'

export const E2E = !!process.env.SITEKIT_E2E
export const ROOT = path.resolve(import.meta.dirname, '../..')
export const PUBLIC = path.resolve(ROOT, '../../apps/demo/public')   // l'artefatto che va in produzione (Vercel serve public/)
export const HEADERS = JSON.parse(fs.readFileSync(path.join(ROOT, 'editor-headers.json'), 'utf8'))
const CHROME = process.env.SITEKIT_CHROME || '/home/ale/.cache/ms-playwright/chromium-1217/chrome-linux64/chrome'
const MIME = { '.html': 'text/html; charset=utf-8', '.mjs': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.txt': 'text/plain', '.xml': 'application/xml', '.json': 'application/json' }

// Server statico locale. /editor serve l'artefatto reale con gli STESSI header di next.config.js (CSP compresa).
export function serve(rootDir, { editorHeaders = false, post } = {}) {
  const srv = http.createServer(async (q, r) => {
    const u = decodeURIComponent(q.url.split('?')[0])
    if (q.method === 'POST' && post) return post(q, r)
    let p = u === '/editor' ? '/editor/index.html' : u.endsWith('/') ? u + 'index.html' : u
    const f = path.join(rootDir, p)
    if (!f.startsWith(rootDir) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end('404') }
    const h = { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }
    if (editorHeaders && (u === '/editor' || u.startsWith('/editor/'))) Object.assign(h, HEADERS)
    r.writeHead(200, h); r.end(fs.readFileSync(f))
  })
  return new Promise((res) => srv.listen(0, '127.0.0.1', () => res({ srv, base: `http://127.0.0.1:${srv.address().port}`, close: () => new Promise((x) => srv.close(x)) })))
}

// Chromium headless LOCALE. Ogni richiesta non locale viene abortita e registrata: i test falliscono se ce n'e' anche una.
export async function launch({ width = 390, height = 844 } = {}) {
  const { chromium } = createRequire('/home/ale/scala-vetrina/package.json')('playwright-core')
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] })
  const ctx = await browser.newContext({ viewport: { width, height }, acceptDownloads: true, isMobile: width < 700 })
  const log = { external: [], errors: [] }
  await ctx.route('**/*', (r) => { const u = r.request().url(); if (!/^(http:\/\/127\.0\.0\.1|blob:|data:|about:)/.test(u)) { log.external.push(u); return r.abort() } r.continue() })
  const page = await ctx.newPage()
  page.on('pageerror', (e) => log.errors.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') log.errors.push(m.text()) })
  return { browser, ctx, page, log, newPage: async () => { const p = await ctx.newPage(); p.on('pageerror', (e) => log.errors.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') log.errors.push(m.text()) }); return p } }
}

export function unzip(zipPath, outDir) {
  fs.mkdirSync(outDir, { recursive: true })
  execFileSync('python3', ['-c', 'import zipfile,sys;z=zipfile.ZipFile(sys.argv[1]);assert z.testzip() is None;z.extractall(sys.argv[2])', zipPath, outDir])
  return outDir
}
export const tmp = (n) => fs.mkdtempSync(path.join(os.tmpdir(), `sitekit-${n}-`))

// Postgres 16 usa e getta su porta casuale, in una cartella temporanea. Mai un database reale.
export function startPg() {
  const bin = '/usr/lib/postgresql/16/bin', dir = tmp('pg'), port = 40000 + Math.floor(Math.random() * 20000)
  execFileSync(`${bin}/initdb`, ['-D', dir, '-A', 'trust', '-U', 'postgres'], { stdio: 'ignore' })
  const r = spawnSync(`${bin}/pg_ctl`, ['-D', dir, '-o', `-p ${port} -k ${dir} -c listen_addresses=127.0.0.1`, '-l', path.join(dir, 'log'), '-w', 'start'], { stdio: 'ignore' })
  if (r.status !== 0) throw new Error('postgres usa e getta non avviato')
  return { url: `postgres://postgres@127.0.0.1:${port}/postgres`, stop: () => { spawnSync(`${bin}/pg_ctl`, ['-D', dir, '-m', 'immediate', 'stop'], { stdio: 'ignore' }); fs.rmSync(dir, { recursive: true, force: true }) } }
}
export const pgClient = (url) => new (createRequire('/home/ale/scala-backend/package.json')('pg').Client)({ connectionString: url })

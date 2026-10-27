// E2E dell'editor in Chromium headless LOCALE su server locale (127.0.0.1). Si esegue solo con SITEKIT_E2E=1.
// Nessuna richiesta esterna ammessa: ogni URL non locale fa fallire il test.
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import http from 'node:http'
import { execFileSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { auditHtml } from '../src/index.mjs'
const T = process.env.SITEKIT_E2E ? test : test.skip
const CHROME = process.env.SITEKIT_CHROME || path.join(os.homedir(), '.cache/ms-playwright/chromium-1217/chrome-linux64/chrome')
const root = path.resolve(import.meta.dirname, '..')
const MIME = { '.html': 'text/html; charset=utf-8', '.mjs': 'text/javascript', '.css': 'text/css' }
let srv, base, browser, ctx, page, dl

T('avvio server locale e browser', async () => {
  srv = http.createServer((q, r) => { let u = q.url.split('?')[0]; if (u === '/editor/') u = '/editor/index.html'; const f = path.join(root, u); if (!f.startsWith(root) || !fs.existsSync(f) || !/^\/(editor|src|vendor)\//.test(u)) { r.writeHead(404); return r.end() } r.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'text/plain' }); r.end(fs.readFileSync(f)) })
  await new Promise((r) => srv.listen(0, '127.0.0.1', r)); base = `http://127.0.0.1:${srv.address().port}`
  const { chromium } = createRequire(process.env.SITEKIT_PW_PKG || path.join(os.homedir(), 'scala-vetrina/package.json'))('playwright-core')
  browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] })
  ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true, isMobile: true })
  page = await ctx.newPage(); page.external = []; page.errors = []
  await ctx.route('**/*', (r) => { const u = r.request().url(); if (!/^(http:\/\/127\.0\.0\.1|blob:|data:|about:)/.test(u)) { page.external.push(u); return r.abort() } r.continue() })
  page.on('pageerror', (e) => page.errors.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') page.errors.push(m.text()) })
  await page.goto(base + '/editor/')
})
T('compilazione: anteprima live, ore, servizi, foto con alt', async () => {
  await page.selectOption('#template', 'parrucchiere')
  await page.fill('#name', 'Salone Prova'); await page.fill('#legal_name', 'Prova S.r.l.'); await page.fill('#vat_id', 'IT00000000000')
  await page.fill('#street', 'Via Test 1'); await page.fill('#postal_code', '20121'); await page.fill('#city', 'Milano'); await page.fill('#province', 'mi')
  await page.fill('#phone', '+39 000 0000000'); await page.fill('#email', 'info@prova.invalid')
  await page.fill('#free_text', 'Taglio e colore su appuntamento.')
  await page.click('#add-hours'); await page.click('#add-service'); await page.fill('#sn0', 'Taglio donna'); await page.fill('#sp0', '30 €')
  await page.setInputFiles('#photos', path.join(import.meta.dirname, 'fixtures-foto.png'))
  await page.waitForSelector('#pa0'); await page.fill('#pa0', 'La sala del salone')
  await page.waitForTimeout(700)
  const html = await page.frameLocator('#frame').locator('html').innerHTML()
  assert.match(html, /Salone Prova/); assert.match(html, /Taglio donna/); assert.match(html, /La sala del salone/); assert.match(html, /ANTEPRIMA/); assert.match(html, /da verificare/)
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), 390, 'nessun overflow orizzontale a 390 px')
  await page.screenshot({ path: process.env.SITEKIT_SHOT || path.join(os.tmpdir(), 'editor-390.png'), fullPage: true })
})
T('export senza conferma: ZIP valido, noindex, foto dentro, nessun banner', async () => {
  const [d] = await Promise.all([page.waitForEvent('download'), page.click('#export')])
  const f = path.join(os.tmpdir(), 'sito-e2e.zip'); await d.saveAs(f); dl = f
  const out = execFileSync('python3', ['-c', `import zipfile,sys;z=zipfile.ZipFile(sys.argv[1]);assert z.testzip() is None;print(' '.join(sorted(z.namelist())));print(z.read('index.html').decode())`, f]).toString()
  assert.match(out, /assets\/foto-1\.webp/); assert.match(out, /LEGGIMI-PUBBLICA\.txt/); assert.match(out, /site\.json/)
  assert.match(out, /noindex,nofollow/); assert.ok(!/ANTEPRIMA|class="tbv"/.test(out)); assert.ok(auditHtml(out.split('\n').slice(1).join('\n')).ok)
})
T('con conferma + indirizzo: indicizzabile con sitemap; riapertura da site.json', async () => {
  await page.check('#confirm_all'); await page.fill('#base_url', 'https://www.prova.example'); await page.waitForTimeout(600)
  const [d] = await Promise.all([page.waitForEvent('download'), page.click('#export')]); const f = path.join(os.tmpdir(), 'sito-e2e2.zip'); await d.saveAs(f)
  const out = execFileSync('python3', ['-c', `import zipfile,sys;z=zipfile.ZipFile(sys.argv[1]);print(' '.join(z.namelist()));print(z.read('index.html').decode()[:900]);open(sys.argv[2],'wb').write(z.read('site.json'))`, f, path.join(os.tmpdir(), 'site-e2e.json')]).toString()
  assert.match(out, /sitemap\.xml/); assert.match(out, /index,follow/); assert.match(out, /canonical/)
  await page.click('#reset', { noWaitAfter: true }).catch(() => {}); // reset usa confirm(): lo gestiamo sotto
})
T('riapri site.json ripristina i dati', async () => {
  page.on('dialog', (x) => x.accept())
  await page.click('#reset'); assert.equal(await page.inputValue('#name'), '')
  await page.setInputFiles('#import', path.join(os.tmpdir(), 'site-e2e.json')); await page.waitForTimeout(500)
  assert.equal(await page.inputValue('#name'), 'Salone Prova'); assert.equal(await page.inputValue('#city'), 'Milano')
})
T('nessuna richiesta esterna, nessun errore in console', async () => {
  assert.deepEqual(page.external, []); assert.deepEqual(page.errors, [])
})
T('chiusura', async () => { await browser?.close(); srv?.close() })

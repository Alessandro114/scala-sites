// E2E dell'ARTEFATTO di produzione (apps/demo/public/editor) servito con gli header reali (CSP inclusa). Solo con SITEKIT_E2E=1.
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { E2E, ROOT, PUBLIC, HEADERS, serve, launch, unzip, tmp } from './helpers/env.mjs'
import { TEMPLATES } from '../src/templates.mjs'
import { auditHtml } from '../src/guard.mjs'
const T = E2E ? test : test.skip

test('artefatto in public/editor allineato ai sorgenti (sync-editor --check)', () => {
  const r = spawnSync('node', [path.join(ROOT, 'scripts/sync-editor.mjs'), '--check'], { encoding: 'utf8' })
  assert.equal(r.status, 0, r.stderr + r.stdout)
})
test('header dell’editor: noindex, CSP senza terze parti, nessun unsafe-eval', () => {
  assert.match(HEADERS['X-Robots-Tag'], /noindex/); const csp = HEADERS['Content-Security-Policy']
  assert.ok(!/https?:|\*|unsafe-eval/.test(csp.replace(/'unsafe-inline'/g, '')), csp); assert.match(csp, /default-src 'none'/); assert.match(csp, /frame-ancestors 'none'/)
})

let S, B, dir = tmp('art')
// SITEKIT_EDITOR_BASE=http://127.0.0.1:3099 prova lo stesso identico test sul server Next reale (next start) invece che sul server statico locale
T('avvio', async () => { S = process.env.SITEKIT_EDITOR_BASE ? { base: process.env.SITEKIT_EDITOR_BASE, close: async () => {} } : await serve(PUBLIC, { editorHeaders: true }); B = await launch({ width: 390 }); await B.page.goto(S.base + '/editor') })
T('/editor e /editor/ rispondono, con gli header di sicurezza', async () => {
  for (const u of ['/editor', '/editor/index.html', '/editor/app.mjs']) { const r = await fetch(S.base + u); assert.equal(r.status, 200, u); assert.match(r.headers.get('x-robots-tag'), /noindex/); assert.ok(r.headers.get('content-security-policy')) }
})
T('l’editor parte sotto CSP: 10 tipi, nessun errore, nessuna richiesta esterna', async () => {
  assert.equal(await B.page.locator('#template option').count(), 10); assert.deepEqual(B.log.errors, []); assert.deepEqual(B.log.external, [])
  assert.equal(await B.page.evaluate(() => document.documentElement.scrollWidth), 390)
})

// per ogni template: compila minimo, scarica ZIP, apri il sito ESPORTATO e controllalo (mobile + desktop)
for (const t of TEMPLATES) {
  T(`template ${t.id}: editor -> ZIP -> sito esportato valido`, async () => {
    const p = B.page; await p.goto(S.base + '/editor'); await p.evaluate(() => localStorage.clear()); await p.reload()
    await p.selectOption('#template', t.id)
    await p.fill('#name', `Attivita Prova ${t.id}`); await p.fill('#street', 'Via Prova 1'); await p.fill('#postal_code', '10100'); await p.fill('#city', 'Torino'); await p.fill('#province', 'to')
    await p.fill('#phone', '+39 000 0000000'); await p.fill('#email', 'info@prova.invalid'); await p.fill('#free_text', 'Testo di prova scritto dal titolare.')
    await p.click('#add-hours'); await p.click('#add-service'); await p.fill('#sn0', 'Voce di prova')
    await p.waitForTimeout(500)
    const [d] = await Promise.all([p.waitForEvent('download'), p.click('#export')]); const z = path.join(dir, `${t.id}.zip`); await d.saveAs(z)
    const out = unzip(z, path.join(dir, t.id))
    for (const f of ['index.html', 'privacy/index.html', 'cookie/index.html', 'robots.txt', '_headers', 'LEGGIMI-PUBBLICA.txt', 'site.json']) assert.ok(fs.existsSync(path.join(out, f)), f)
    for (const f of ['index.html', 'privacy/index.html', 'cookie/index.html']) { const a = auditHtml(fs.readFileSync(path.join(out, f), 'utf8'), { page: f }); assert.deepEqual(a.issues.filter((i) => i.sev === 'error'), [], `${t.id} ${f}`) }
    const html = fs.readFileSync(path.join(out, 'index.html'), 'utf8'); assert.match(html, /noindex,nofollow/); assert.ok(!/ANTEPRIMA|class="tbv"/.test(html))
    const E = await serve(out)
    for (const [w, h] of [[390, 844], [1280, 800]]) {
      const X = await launch({ width: w, height: h }); await X.page.goto(E.base + '/')
      const m = await X.page.evaluate(() => {
        const ids = new Set([...document.querySelectorAll('[id]')].map((e) => e.id))
        const brokenAnchors = [...document.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute('href').slice(1)).filter((i) => !ids.has(i))
        const small = [...document.querySelectorAll('nav a, .btn, summary, button, input:not([type=hidden]):not([type=checkbox]), textarea, footer a')].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height < 43.5 && !e.closest('.hp') }).map((e) => e.textContent.trim().slice(0, 20))
        let ld = 0; for (const s of document.querySelectorAll('script[type="application/ld+json"]')) { JSON.parse(s.textContent); ld++ }
        return { overflow: document.documentElement.scrollWidth > innerWidth, brokenAnchors, small, ld, h1: document.querySelectorAll('h1').length, links: [...document.querySelectorAll('a[href^="tel:"],a[href^="https://wa.me/"],a[href^="mailto:"]')].map((a) => a.getAttribute('href')) }
      })
      assert.equal(m.overflow, false, `${t.id} overflow a ${w}px`); assert.deepEqual(m.brokenAnchors, []); assert.deepEqual(m.small, [], `${t.id} controlli < 44px a ${w}px`); assert.ok(m.ld >= 1); assert.equal(m.h1, 1)
      assert.ok(m.links.some((l) => l.startsWith('tel:+390000000000')), 'tel'); assert.ok(m.links.some((l) => /^https:\/\/wa\.me\/390000000000\?text=/.test(l)), 'wa.me'); assert.ok(m.links.some((l) => l.startsWith('mailto:info@prova.invalid')))
      assert.deepEqual(X.log.external, [], `${t.id}: richieste esterne`); assert.deepEqual(X.log.errors, [], `${t.id}: errori in console`)
      for (const pth of ['privacy/', 'cookie/']) { const r = await X.page.goto(E.base + '/' + pth); assert.equal(r.status(), 200); assert.match(await X.page.title(), /Informativa|Cookie/) }
      await X.browser.close()
    }
    // navigazione da tastiera: il primo Tab porta al link "Vai al contenuto"
    const K = await launch({ width: 1280 }); await K.page.goto(E.base + '/'); await K.page.keyboard.press('Tab'); assert.equal(await K.page.evaluate(() => document.activeElement.className), 'skip'); await K.browser.close()
    await E.close()
  })
}
T('chiusura', async () => { await B?.browser.close(); await S?.close() })

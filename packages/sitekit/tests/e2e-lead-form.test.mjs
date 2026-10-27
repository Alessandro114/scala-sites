// E2E form -> CRM: sito esportato in modalita' "form" nel browser, endpoint che usa il contratto REALE (lead.mjs) su Postgres usa e getta.
// Prova cio' che conta: consenso, tenant risolto lato server, rollback, spam, iniezioni. Solo con SITEKIT_E2E=1.
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { E2E, serve, launch, tmp, startPg, pgClient } from './helpers/env.mjs'
import { SAMPLES } from '../src/samples.mjs'
import { buildExport, validateLead, buildLeadStatements, runLeadStatements, CONSENT_VERSION } from '../src/index.mjs'
const T = E2E ? test : test.skip
const TENANT = '11111111-1111-1111-1111-111111111111', OWNER = '33333333-3333-3333-3333-333333333333', SITE = '44444444-4444-4444-4444-444444444444', OTHER = '22222222-2222-2222-2222-222222222222'
let pg, admin, app, S, B
const site = structuredClone(SAMPLES[0]); site.lead = { mode: 'form' }

async function handler(q, r) {
  const m = /^\/api\/public\/sites\/([a-z0-9-]+)\/leads$/.exec(q.url.split('?')[0])
  if (!m) { r.writeHead(404); return r.end() }
  let raw = ''; for await (const c of q) raw += c
  const body = Object.fromEntries(new URLSearchParams(raw))
  const s = (await admin.query('SELECT id, tenant_id, owner_user_id, slug FROM sites WHERE slug=$1', [m[1]])).rows[0]   // tenant SOLO dal server
  if (!s) { r.writeHead(404); return r.end() }
  const v = validateLead(body, { businessName: site.business.name })
  if (v.spam) { r.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return r.end('<p>Grazie, abbiamo ricevuto la richiesta.</p>') }  // il bot non scopre il filtro
  if (!v.ok) { r.writeHead(400, { 'content-type': 'text/plain' }); return r.end('richiesta non valida: ' + v.errors.join(',')) }
  await runLeadStatements(app, buildLeadStatements({ tenantId: s.tenant_id, ownerUserId: s.owner_user_id, siteId: s.id, siteSlug: s.slug, v, ip: q.headers['x-forwarded-for'] || '93.184.216.34', userAgent: q.headers['user-agent'] }))
  r.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); r.end('<p>Grazie, abbiamo ricevuto la richiesta.</p>')
}
const count = async (t, where = 'true') => { await app.query(`SELECT set_config('app.current_tenant', $1, false)`, [TENANT]); return (await app.query(`SELECT count(*)::int n FROM ${t} WHERE ${where}`)).rows[0].n }

T('avvio: Postgres usa e getta + sito esportato in modalita’ form', async () => {
  pg = startPg(); admin = pgClient(pg.url); await admin.connect()
  await admin.query('CREATE ROLE app_rt LOGIN'); for (const f of ['test_prerequisites', '001_sites_mvp']) await admin.query(fs.readFileSync(path.join(import.meta.dirname, `../sql/${f}.sql`), 'utf8'))
  await admin.query(`INSERT INTO sites (id, tenant_id, owner_user_id, slug, doc, preview_nonce) VALUES ($1,$2,$3,$4,'{}','n')`, [SITE, TENANT, OWNER, site.slug])
  await admin.query('GRANT USAGE ON SCHEMA public TO app_rt; GRANT ALL ON ALL TABLES IN SCHEMA public TO app_rt')
  app = pgClient(pg.url); await app.connect(); await app.query('SET ROLE app_rt')
  const out = tmp('form'); const z = buildExport(site); for (const [f, c] of Object.entries(z.files)) { fs.mkdirSync(path.dirname(path.join(out, f)), { recursive: true }); fs.writeFileSync(path.join(out, f), c) }
  S = await serve(out, { post: (q, r) => handler(q, r).catch((e) => { r.writeHead(500); r.end(String(e)) }) }); B = await launch({ width: 390 })
  await B.page.goto(S.base + '/#s-request')
})
T('il modulo ha etichette visibili, consenso obbligatorio e marketing NON spuntato', async () => {
  const p = B.page
  for (const id of ['f-name', 'f-phone', 'f-email', 'f-msg', 'f-consent', 'f-mkt']) assert.ok(await p.locator(`label[for="${id}"]`).isVisible(), id)
  assert.equal(await p.isChecked('#f-mkt'), false); assert.equal(await p.getAttribute('#f-consent', 'required'), ''); assert.match(await p.textContent('label[for=f-consent]'), /Acconsento a essere ricontattato da Trattoria Esempio/)
})
T('senza consenso il browser blocca l’invio: nessuna riga', async () => {
  const p = B.page; await p.fill('#f-name', 'Mario'); await p.fill('#f-phone', '333 1234567'); await p.fill('#f-msg', 'Vorrei prenotare'); await p.click('button[type=submit]'); await p.waitForTimeout(300)
  assert.equal(await count('crm_contacts'), 0); assert.match(p.url(), /#s-request$/)
})
T('invio con consenso: pagina di conferma + contatto, consenso e prova nel DB (solo consenso di contatto)', async () => {
  const p = B.page; await p.check('#f-consent'); await Promise.all([p.waitForNavigation(), p.click('button[type=submit]')])
  assert.match(await p.textContent('body'), /abbiamo ricevuto la richiesta/)
  assert.equal(await count('crm_contacts', `source='site_form' AND email_consent=false AND name='Mario' AND tags=ARRAY['sito:${site.slug}']`), 1)
  assert.equal(await count('consent_history', `consent_type='site_contact_request' AND action='given' AND host(ip_address)='93.184.216.0'`), 1); assert.equal(await count('consent_history', `consent_type='marketing_email'`), 0)
  await app.query(`SELECT set_config('app.current_tenant', $1, false)`, [TENANT]); const ev = (await app.query('SELECT * FROM site_lead_events')).rows[0]
  assert.equal(ev.consent_text_version, CONSENT_VERSION); assert.equal(ev.marketing_consent, false); assert.equal(ev.site_id, SITE); assert.equal(ev.tenant_id, TENANT); assert.match(ev.consent_text_sha256, /^[0-9a-f]{64}$/)
})
T('con casella marketing: consenso marketing registrato e email_consent=true', async () => {
  const p = B.page; await p.goto(S.base + '/#s-request'); await p.fill('#f-name', 'Anna'); await p.fill('#f-email', 'ANNA@prova.invalid'); await p.fill('#f-msg', 'Info'); await p.check('#f-consent'); await p.check('#f-mkt'); await Promise.all([p.waitForNavigation(), p.click('button[type=submit]')])
  assert.equal(await count('crm_contacts', `name='Anna' AND email='anna@prova.invalid' AND email_consent=true`), 1); assert.equal(await count('consent_history', `consent_type='marketing_email'`), 1)
})
const post = (slug, body) => fetch(`${S.base}/api/public/sites/${slug}/leads`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(body) })
const ok = { name: 'X', phone: '333 1234567', message: 'm', consent: '1', consent_version: CONSENT_VERSION }
T('POST diretti: senza consenso 400, versione errata 400, sito sconosciuto 404, nessuna riga in piu’', async () => {
  const n = await count('crm_contacts')
  assert.equal((await post(site.slug, { ...ok, consent: '' })).status, 400); assert.equal((await post(site.slug, { ...ok, consent_version: 'v0' })).status, 400); assert.equal((await post(site.slug, { ...ok, phone: '', email: '' })).status, 400)
  assert.equal((await post('sito-che-non-esiste', ok)).status, 404); assert.equal(await count('crm_contacts'), n)
})
T('honeypot e link-spam: risposta identica (200) ma nessuna riga', async () => {
  const n = await count('crm_contacts'); assert.equal((await post(site.slug, { ...ok, website: 'http://spam' })).status, 200); assert.equal((await post(site.slug, { ...ok, message: 'http://a.it http://b.it http://c.it' })).status, 200); assert.equal(await count('crm_contacts'), n)
})
T('tenant nel body ignorato; iniezione SQL salvata come testo; l’altro tenant non vede nulla', async () => {
  const r = await post(site.slug, { ...ok, name: "x'); DROP TABLE crm_contacts;--", tenant_id: OTHER }); assert.equal(r.status, 200)
  assert.equal(await count('crm_contacts', `name LIKE 'x''); DROP TABLE%'`), 1)
  await app.query(`SELECT set_config('app.current_tenant', $1, false)`, [OTHER]); assert.equal((await app.query('SELECT count(*)::int n FROM crm_contacts')).rows[0].n, 0)
  assert.equal((await admin.query(`SELECT count(*)::int n FROM crm_contacts WHERE tenant_id=$1`, [OTHER])).rows[0].n, 0)
})
T('nessuna richiesta esterna, nessun errore', async () => { assert.deepEqual(B.log.external, []); assert.deepEqual(B.log.errors.filter((e) => !/400|404/.test(e)), []) })
T('chiusura', async () => { await B?.browser.close(); await S?.close(); await app?.end(); await admin?.end(); pg?.stop() })

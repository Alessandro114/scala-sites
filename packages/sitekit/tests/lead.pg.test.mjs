// Integrazione su Postgres USA E GETTA. Si esegue solo con SITEKIT_PG_URL (mai puntarlo a prod/dev89).
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire } from 'node:module'
import { validateLead, buildLeadStatements, runLeadStatements, CONSENT_VERSION } from '../src/index.mjs'
const url = process.env.SITEKIT_PG_URL
const T = url ? test : test.skip
const TA = '11111111-1111-1111-1111-111111111111', TB = '22222222-2222-2222-2222-222222222222', U = '33333333-3333-3333-3333-333333333333', S = '44444444-4444-4444-4444-444444444444'
let pg, c
T('setup', async () => {
  { const u = new URL(url); if (!['127.0.0.1', 'localhost', '::1', '[::1]'].includes(u.hostname) || u.searchParams.has('host') || u.searchParams.has('hostaddr')) throw new Error('SITEKIT_PG_URL deve essere locale (host letto dall\u2019URL)') }
  pg = createRequire('/home/ale/scala-backend/package.json')('pg'); c = new pg.Client({ connectionString: url }); await c.connect()
  await c.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public; DROP ROLE IF EXISTS app_rt; CREATE ROLE app_rt LOGIN; ')
  for (const f of ['test_prerequisites', '001_sites_mvp']) await c.query(fs.readFileSync(new URL(`../sql/${f}.sql`, import.meta.url), 'utf8'))
  await c.query(`INSERT INTO sites (id, tenant_id, owner_user_id, slug, doc, preview_nonce) VALUES ('${S}','${TA}','${U}','bar-prova','{}','n')`)
  await c.query('GRANT USAGE ON SCHEMA public TO app_rt'); await c.query('GRANT ALL ON ALL TABLES IN SCHEMA public TO app_rt'); await c.query('SET ROLE app_rt')
})
T('lead valido: contatto + 2 consensi + evento con retention 24 mesi, in una transazione', async () => {
  const v = validateLead({ name: 'Mario', email: 'M@x.it', message: 'Vorrei info', consent: '1', marketing: '1', consent_version: CONSENT_VERSION }, { businessName: 'Bar Prova' })
  const r = await runLeadStatements(c, buildLeadStatements({ tenantId: TA, ownerUserId: U, siteId: S, siteSlug: 'bar-prova', v, ip: '93.184.216.34', userAgent: 'Mozilla' }))
  await c.query(`SELECT set_config('app.current_tenant', $1, false)`, [TA])
  const ct = (await c.query('SELECT * FROM crm_contacts WHERE id=$1', [r.contactId])).rows[0]
  assert.equal(ct.source, 'site_form'); assert.equal(ct.email, 'm@x.it'); assert.equal(ct.email_consent, true); assert.deepEqual(ct.tags, ['sito:bar-prova'])
  const ch = (await c.query('SELECT consent_type, host(ip_address) ip FROM consent_history WHERE contact_id=$1 ORDER BY consent_type', [r.contactId])).rows
  assert.deepEqual(ch.map((x) => x.consent_type), ['marketing_email', 'site_contact_request']); assert.ok(ch.every((x) => x.ip === '93.184.216.0'))
  const ev = (await c.query(`SELECT consent_text_sha256, marketing_consent, host(ip_truncated) ip, retention_until > now() + interval '23 months' AS long_enough, retention_until < now() + interval '25 months' AS not_too_long FROM site_lead_events WHERE contact_id=$1`, [r.contactId])).rows[0]
  assert.equal(ev.consent_text_sha256, v.consent.text_sha256); assert.equal(ev.ip, '93.184.216.0'); assert.ok(ev.long_enough && ev.not_too_long)
})
T('senza marketing: niente consenso marketing e email_consent=false', async () => {
  const v = validateLead({ name: 'Anna', phone: '333 1234567', message: 'Ciao', consent: '1', consent_version: CONSENT_VERSION }, { businessName: 'Bar Prova' })
  const r = await runLeadStatements(c, buildLeadStatements({ tenantId: TA, ownerUserId: U, siteId: S, siteSlug: 'bar-prova', v, ip: '2001:db8:85a3:8d3::1', userAgent: null }))
  await c.query(`SELECT set_config('app.current_tenant', $1, false)`, [TA])
  assert.equal((await c.query('SELECT email_consent FROM crm_contacts WHERE id=$1', [r.contactId])).rows[0].email_consent, false)
  assert.equal((await c.query(`SELECT count(*)::int n FROM consent_history WHERE contact_id=$1 AND consent_type='marketing_email'`, [r.contactId])).rows[0].n, 0)
})
T('il tenant impostato nella transazione non resta sulla connessione', async () => {
  await c.query("SELECT set_config('app.current_tenant','',false)"); assert.equal((await c.query('SELECT count(*)::int n FROM crm_contacts')).rows[0].n, 0)
})
T('RLS: un altro tenant non vede ne’ scrive i contatti del primo; fallimento = rollback totale', async () => {
  await c.query(`SELECT set_config('app.current_tenant', $1, false)`, [TB]); assert.equal((await c.query('SELECT count(*)::int n FROM crm_contacts')).rows[0].n, 0)
  await c.query(`SELECT set_config('app.current_tenant', $1, false)`, [TA]); assert.equal((await c.query('SELECT count(*)::int n FROM crm_contacts')).rows[0].n, 2)
  const before = (await c.query('SELECT count(*)::int n FROM crm_contacts')).rows[0].n
  const v = validateLead({ name: 'Z', phone: '333 1234567', message: 'k', consent: '1', consent_version: CONSENT_VERSION }, { businessName: 'B' })
  const st = buildLeadStatements({ tenantId: TA, ownerUserId: U, siteId: '99999999-9999-9999-9999-999999999999', siteSlug: 'x', v, ip: '1.1.1.1' }) // site_id inesistente -> l'ultimo INSERT fallisce
  await assert.rejects(runLeadStatements(c, st)); assert.equal((await c.query('SELECT count(*)::int n FROM crm_contacts')).rows[0].n, before)
})
T('teardown', async () => { await c.end() })

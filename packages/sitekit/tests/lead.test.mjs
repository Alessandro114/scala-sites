import test from 'node:test'
import assert from 'node:assert/strict'
import { validateLead, truncateIp, buildLeadStatements, CONSENT_VERSION, previewToken, verifyPreviewToken, newPreviewNonce, checkQuota, QUOTA } from '../src/index.mjs'
const ok = { name: 'Mario', phone: '333 1234567', message: 'Ciao', consent: '1', consent_version: CONSENT_VERSION }
test('lead: consenso obbligatorio, versione nota, almeno un recapito, honeypot', () => {
  assert.equal(validateLead(ok, { businessName: 'Bar' }).ok, true)
  assert.deepEqual(validateLead({ ...ok, consent: undefined }, { businessName: 'Bar' }).errors, ['consent'])
  assert.ok(validateLead({ ...ok, phone: '' }, {}).errors.includes('contact'))
  assert.ok(validateLead({ ...ok, consent_version: 'v0' }, {}).errors.includes('consent_version'))
  assert.equal(validateLead({ ...ok, website: 'http://spam' }, {}).spam, true)
  assert.equal(validateLead({ ...ok, message: 'http://a.it http://b.it http://c.it' }, {}).spam, true)
})
test('lead: il testo di consenso e il suo hash viaggiano con il lead; il marketing e’ separato e facoltativo', () => {
  const v = validateLead(ok, { businessName: 'Bar Prova' }); assert.match(v.consent.text, /Bar Prova/); assert.equal(v.consent.text_sha256.length, 64); assert.equal(v.marketing, false)
  assert.equal(validateLead({ ...ok, marketing: '1' }, { businessName: 'B' }).marketing, true)
})
test('IP troncato (v4 /24, v6 /48, v4-mapped)', () => {
  assert.equal(truncateIp('93.184.216.34'), '93.184.216.0'); assert.equal(truncateIp('::ffff:10.1.2.3'), '10.1.2.0'); assert.equal(truncateIp('2001:db8:85a3:8d3:1319:8a2e:370:7344'), '2001:db8:85a3::'); assert.equal(truncateIp(undefined), null)
})
test('statement: il tenant e’ un parametro server-side, mai un campo del form; il corpo del form non finisce nel SQL', () => {
  const v = validateLead({ ...ok, name: "x'); DROP TABLE crm_contacts;--", tenant_id: 'ALTRO' }, { businessName: 'B' })
  const st = buildLeadStatements({ tenantId: 'T1', ownerUserId: 'U1', siteId: 'S1', siteSlug: 'bar', v, ip: '1.2.3.4', userAgent: 'ua' })
  assert.ok(st.every((s) => !s.text.includes('DROP'))); assert.ok(!JSON.stringify(st).includes('ALTRO')); assert.equal(st[0].values[0], 'T1')
})
test('anteprima: token non indovinabile, verificabile, revocabile cambiando il nonce', () => {
  const n = newPreviewNonce(), t = previewToken('S1', n, 'segreto')
  assert.ok(verifyPreviewToken('S1', n, t, 'segreto')); assert.ok(!verifyPreviewToken('S2', n, t, 'segreto')); assert.ok(!verifyPreviewToken('S1', newPreviewNonce(), t, 'segreto')); assert.ok(!verifyPreviewToken('S1', n, t, 'altro'))
})
test('quote', () => {
  assert.equal(checkQuota({ sites: QUOTA.sitesPerUser }, 'create_site').allowed, false); assert.equal(checkQuota({ sites: 2 }, 'create_site').allowed, true)
  assert.equal(checkQuota({ generationsToday: 5 }, 'generate').allowed, false); assert.equal(checkQuota({ fileBytes: 9 * 1024 * 1024 }, 'upload').allowed, false)
})

// Contratto lead sito -> CRM del titolare, con consenso GDPR esplicito. Nessuna dipendenza da pg: produce {text, values}.
//   POST /api/public/sites/:siteId/leads  (rotta pubblica: DA REGISTRARE in PUBLIC_ROUTES solo al momento dell'implementazione nel backend)
// Il tenant NON arriva mai dal client: si risolve lato server da siteId. Nessun dato di terzi viene letto dal CRM.
import { createHash } from 'node:crypto'
import { CONSENT_VERSION, RETENTION_MONTHS, consentText } from './legal.mjs'
import { QUOTA } from './guard.mjs'

const PHONE = /^\+?[0-9 ()./-]{6,20}$/, EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const sha256 = (s) => createHash('sha256').update(s).digest('hex')

// IPv4: ultimo ottetto a 0 (/24). IPv6: tengo i primi 48 bit (/48). Risultato valido per il tipo INET.
export function truncateIp(ip) {
  if (!ip) return null
  const v4 = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.\d{1,3}$/.exec(ip); if (v4) return `${v4[1]}.${v4[2]}.${v4[3]}.0`
  const m = /^::ffff:(\d+\.\d+\.\d+)\.\d+$/i.exec(ip); if (m) return `${m[1]}.0`
  if (ip.includes(':')) { const parts = ip.split(':'); if (parts.includes('')) { const i = parts.indexOf(''); const head = parts.slice(0, i); return [...head, '', ''].slice(0, 3).join(':').replace(/:+$/, '') + '::' } return parts.slice(0, 3).join(':') + '::' }
  return null
}

export function validateLead(body, { businessName, locale = 'it' } = {}) {
  const errors = []
  const s = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max)
  const lead = { name: s(body.name, 80), phone: s(body.phone, 20), email: s(body.email, 120).toLowerCase(), message: s(body.message, 1000) }
  if (s(body.website, 100)) return { ok: false, spam: true, errors: ['honeypot'] }
  if (!lead.name) errors.push('name')
  if (!lead.message) errors.push('message')
  if (!lead.phone && !lead.email) errors.push('contact')
  if (lead.phone && !PHONE.test(lead.phone)) errors.push('phone')
  if (lead.email && !EMAIL.test(lead.email)) errors.push('email')
  const accepted = ['1', 'true', 'on', true, 1].includes(body.consent)
  if (!accepted) errors.push('consent')
  if (body.consent_version !== CONSENT_VERSION) errors.push('consent_version')
  if ((lead.message.match(/https?:\/\//gi) || []).length > 2) return { ok: false, spam: true, errors: ['links'] }
  if (errors.length) return { ok: false, errors }
  const text = consentText(businessName, locale)
  return { ok: true, lead, marketing: ['1', 'true', 'on', true, 1].includes(body.marketing), consent: { text, text_sha256: sha256(text), version: CONSENT_VERSION } }
}

// Tutto in UNA transazione, nell'ordine: contatto -> prove di consenso -> evento sito. tenant_id viene da `site`, risolto lato server.
export function buildLeadStatements({ tenantId, ownerUserId, siteId, siteSlug, v, ip, userAgent, now = new Date() }) {
  const ipT = truncateIp(ip), retention = new Date(now); retention.setUTCMonth(retention.getUTCMonth() + RETENTION_MONTHS)
  const tag = `sito:${siteSlug}`
  return [
    { text: `SELECT set_config('app.current_tenant', $1, true)`, values: [tenantId] },
    { name: 'contact', text: `INSERT INTO crm_contacts (tenant_id, user_id, name, email, phone, source, status, notes, tags, email_consent, email_consent_given_at, email_consent_source, email_consent_version)
      VALUES ($1,$2,$3,NULLIF($4,''),NULLIF($5,''),'site_form','lead',$6,ARRAY[$7],$8,CASE WHEN $8 THEN now() END,CASE WHEN $8 THEN 'site_form' END,CASE WHEN $8 THEN 1 END) RETURNING id`,
      values: [tenantId, ownerUserId, v.lead.name, v.lead.email, v.lead.phone, v.lead.message, tag, v.marketing] },
    { name: 'consent_contact', text: `INSERT INTO consent_history (tenant_id, contact_id, consent_type, action, version, ip_address, source)
      VALUES ($1,$2,'site_contact_request','given',1,$3::inet,$4)`, values: [tenantId, '$contact.id', ipT, `site:${siteSlug}`], needsContactId: true },
    ...(v.marketing ? [{ name: 'consent_marketing', text: `INSERT INTO consent_history (tenant_id, contact_id, consent_type, action, version, ip_address, source)
      VALUES ($1,$2,'marketing_email','given',1,$3::inet,$4)`, values: [tenantId, '$contact.id', ipT, `site:${siteSlug}`], needsContactId: true }] : []),
    { name: 'event', text: `INSERT INTO site_lead_events (tenant_id, site_id, contact_id, consent_text_sha256, consent_text_version, marketing_consent, ip_truncated, user_agent_sha256, retention_until)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, values: [tenantId, siteId, '$contact.id', v.consent.text_sha256, v.consent.version, v.marketing, ipT, userAgent ? sha256(userAgent) : null, retention.toISOString()], needsContactId: true },
  ]
}
// Esegue gli statement con un client che espone query(text, values) (pg.Client). BEGIN/COMMIT gestiti qui.
export async function runLeadStatements(client, statements) {
  await client.query('BEGIN')
  try {
    let contactId = null
    for (const st of statements) {
      const values = st.values.map((x) => x === '$contact.id' ? contactId : x)
      const r = await client.query(st.text, values)
      if (st.name === 'contact') contactId = r.rows[0].id
    }
    await client.query('COMMIT'); return { contactId }
  } catch (e) { await client.query('ROLLBACK'); throw e }
}
export { QUOTA }

// Editor nel browser: nessun backend, nessun invio di dati. Stato -> draftSite -> renderSite -> iframe; esporta lo ZIP.
import { TEMPLATES, getTemplate } from '../src/templates.mjs'
import { draftSite } from '../src/draft.mjs'
import { renderSite } from '../src/render.mjs'
import { buildExport, prepareExport } from '../src/export.mjs'
import { CLIENT_THEMES } from '../src/theme.mjs'
import { DAYS, UI } from '../src/i18n.mjs'
import { esc } from '../src/html.mjs'

const $ = (id) => document.getElementById(id)
const KEY = 'scala-sites-editor-v1'
const blank = () => ({ template: 'ristorante', name: '', legal_name: '', vat_id: '', street: '', postal_code: '', city: '', province: '', phone: '', whatsapp: '', email: '', maps_url: '', service_area: '', free_text: '', hours: [], services: [], theme: '', accent: '', use_accent: false, lead_mode: 'links', base_url: '', confirm_all: false, photos: [] })
let st = blank()
const assets = {}          // 'assets/foto-1.webp' -> Uint8Array
const urls = {}            // 'assets/foto-1.webp' -> object URL (solo anteprima)
let site = null, timer = null

const load = () => { try { const j = localStorage.getItem(KEY); if (j) st = { ...blank(), ...JSON.parse(j), photos: [] } } catch {} }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ ...st, photos: [] })) } catch {} }

function toFacts() {
  const g = st, t = getTemplate(g.template)
  const num = (s) => String(s || '').trim()
  const facts = {
    name: num(g.name), legal_name: num(g.legal_name) || undefined, vat_id: num(g.vat_id) || undefined,
    phone: num(g.phone) || undefined, whatsapp: num(g.whatsapp) || num(g.phone) || undefined, email: num(g.email) || undefined,
    free_text: num(g.free_text), maps_url: num(g.maps_url) || undefined, accent: g.use_accent ? g.accent : undefined,
    service_area: num(g.service_area) ? num(g.service_area).split(',').map((x) => x.trim()).filter(Boolean) : undefined,
    hours: g.hours.filter((h) => h.days.length && h.opens && h.closes),
    services: g.services.filter((s) => num(s.name)).map((s) => ({ name: num(s.name), ...(num(s.description) ? { description: num(s.description) } : {}), ...(num(s.price) ? { price: num(s.price) } : {}) })),
    gallery: g.photos.map((p) => ({ src: p.path, alt: num(p.alt) || '', width: p.w, height: p.h })).filter((p) => p.alt),
  }
  if (num(g.street) || num(g.city)) facts.address = { street: num(g.street), postal_code: num(g.postal_code), city: num(g.city), province: num(g.province).toUpperCase(), country: 'IT' }
  if (!facts.hours.length) delete facts.hours
  return { facts, t }
}

async function build() {
  const { facts, t } = toFacts()
  if (!facts.name) { site = null; return }
  const { site: s, notes } = await draftSite({ facts, templateId: st.template })
  s.slug = (s.slug || 'sito').replace(/^-+|-+$/g, '') || 'sito'; if (s.slug.length < 3) s.slug = (s.slug + '-sito').slice(0, 41)
  if (st.theme) s.brand.theme = st.theme
  s.lead = { mode: st.lead_mode }
  if (st.confirm_all) { s.compliance.content_reviewed = true; s.compliance.flags = []; s.seo.indexable = true }
  if (s.compliance.regulated && s.compliance.regulated !== 'none') s.compliance.regulated_ack = st.confirm_all
  s.editor_state = { v: 1, state: { ...st, photos: st.photos.map((p) => ({ path: p.path, alt: p.alt, w: p.w, h: p.h })) } }
  site = { s, notes, facts, t }
}

function renderPreview() {
  if (!site) { $('frame').srcdoc = '<p style="font:16px system-ui;padding:24px">Scrivi il nome della tua attività per vedere l’anteprima.</p>'; return null }
  try {
    let html = renderSite({ ...site.s, editor_state: undefined }, { mode: 'preview' }).files['index.html']
    for (const [p, u] of Object.entries(urls)) html = html.split(`src="${p}"`).join(`src="${u}"`)
    $('frame').srcdoc = html
    return null
  } catch (e) { $('frame').srcdoc = ''; return e }
}

function renderReview(err) {
  const el = $('review'), out = []
  if (!site) return void (el.innerHTML = '<p class="note">Compila il nome per iniziare.</p>')
  if (err) out.push(`<p class="err">Da correggere: ${esc((err.errors || [{ path: '', msg: err.message }]).map((e) => (e.path ? e.path + ': ' : '') + e.msg).join('; '))}</p>`)
  const flags = site.s.compliance.flags
  if (flags.length && !st.confirm_all) out.push(`<p class="warn"><strong>Da verificare (${flags.length}):</strong></p><ul>${flags.map((p) => `<li>${esc(describe(p))}</li>`).join('')}</ul>`)
  if (site.notes.length) out.push(`<p><strong>Cosa manca (non lo inventiamo):</strong></p><ul>${site.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>`)
  const p = prepareExport(site.s, { assets, baseUrl: st.base_url || undefined })
  if (p.errors.length) out.push(`<p class="err">Non si può ancora scaricare: ${esc(p.errors.join('; '))}</p>`)
  else out.push(`<p class="ok">Il sito è pronto da scaricare.</p>`)
  el.innerHTML = out.join('')
}
const describe = (path) => { let v = site.s; for (const k of path.split('.')) v = v?.[k]; return `${path.replace('sections.', 'sezione ').replace('.items.', ' · voce ')}: “${String(v ?? '').slice(0, 80)}”` }

function hoursUI() {
  $('hours').innerHTML = st.hours.map((h, i) => `<div class="hrow" data-i="${i}"><div class="days" role="group" aria-label="Giorni della fascia ${i + 1}">${DAYS.map((d) => `<label><input type="checkbox" data-k="day" data-d="${d}" ${h.days.includes(d) ? 'checked' : ''}> ${UI.it.days[d]}</label>`).join('')}</div>
  <div class="times"><div class="field"><label for="ho${i}">Apre</label><input id="ho${i}" type="time" data-k="opens" value="${esc(h.opens)}"></div><div class="field"><label for="hc${i}">Chiude</label><input id="hc${i}" type="time" data-k="closes" value="${esc(h.closes)}"></div><button type="button" class="btn btn-secondary" data-k="rm-hours">Togli</button></div></div>`).join('')
}
function servicesUI() {
  $('services').innerHTML = st.services.map((s, i) => `<div class="srow" data-i="${i}"><div class="field"><label for="sn${i}">Nome</label><input id="sn${i}" data-k="sname" maxlength="80" value="${esc(s.name)}"></div><div class="field"><label for="sd${i}">Descrizione (facoltativa)</label><input id="sd${i}" data-k="sdesc" maxlength="300" value="${esc(s.description || '')}"></div><div class="field"><label for="sp${i}">Prezzo (facoltativo, es. 12 €)</label><input id="sp${i}" data-k="sprice" maxlength="30" value="${esc(s.price || '')}"></div><button type="button" class="btn btn-secondary" data-k="rm-service">Togli</button></div>`).join('')
}
function photosUI() {
  $('photo-list').innerHTML = st.photos.map((p, i) => `<div class="prow pimg" data-i="${i}"><img src="${esc(urls[p.path] || '')}" alt=""><div class="field" style="flex:1;margin:0"><label for="pa${i}">Descrivi la foto (obbligatorio, serve a chi non la vede)</label><input id="pa${i}" data-k="palt" maxlength="140" value="${esc(p.alt)}"></div><button type="button" class="btn btn-secondary" data-k="rm-photo">Togli</button></div>`).join('')
}

function fill() {
  $('template').innerHTML = TEMPLATES.map((t) => `<option value="${t.id}">${esc(t.label)}</option>`).join('')
  $('theme').innerHTML = `<option value="">Consigliati per questa attività</option>` + CLIENT_THEMES.map((t) => `<option value="${t}">${t}</option>`).join('')
  for (const k of ['template', 'name', 'legal_name', 'vat_id', 'street', 'postal_code', 'city', 'province', 'phone', 'whatsapp', 'email', 'maps_url', 'service_area', 'free_text', 'theme', 'lead_mode', 'base_url']) $(k).value = st[k] ?? ''
  if (st.accent) $('accent').value = st.accent; $('use-accent').checked = !!st.use_accent; $('confirm_all').checked = !!st.confirm_all
  hoursUI(); servicesUI(); photosUI(); help()
}
const help = () => { const t = getTemplate(st.template); $('tpl-help').textContent = t ? `Ti chiederemo: ${t.ask.join('; ')}.` : ''; $('services-legend').firstChild.textContent = `4. ${t.servicesTitle} ` }

function refresh() { clearTimeout(timer); timer = setTimeout(async () => { save(); await build(); renderReview(renderPreview()) }, 250) }

// foto: ridimensiona a max 1600 px e converte in WebP nel browser
async function addPhoto(file) {
  const bmp = await createImageBitmap(file), sc = Math.min(1, 1600 / Math.max(bmp.width, bmp.height)), w = Math.round(bmp.width * sc), h = Math.round(bmp.height * sc)
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h; cv.getContext('2d').drawImage(bmp, 0, 0, w, h)
  const blob = await new Promise((r) => cv.toBlob(r, 'image/webp', 0.82)); if (!blob) throw new Error('conversione non riuscita')
  if (blob.size > 8 * 1024 * 1024) throw new Error('foto troppo pesante')
  let n = 1; while (assets[`assets/foto-${n}.webp`]) n++
  const path = `assets/foto-${n}.webp`; assets[path] = new Uint8Array(await blob.arrayBuffer()); urls[path] = URL.createObjectURL(blob)
  st.photos.push({ path, alt: '', w, h })
}

document.addEventListener('input', (e) => {
  const t = e.target, row = t.closest('[data-i]'), i = row ? +row.dataset.i : -1, k = t.dataset.k
  if (k === 'opens' || k === 'closes') st.hours[i][k] = t.value
  else if (k === 'day') { const d = t.dataset.d, a = st.hours[i].days; t.checked ? a.includes(d) || a.push(d) : a.splice(a.indexOf(d), 1); st.hours[i].days = DAYS.filter((x) => a.includes(x)) }
  else if (k === 'sname') st.services[i].name = t.value; else if (k === 'sdesc') st.services[i].description = t.value; else if (k === 'sprice') st.services[i].price = t.value
  else if (k === 'palt') st.photos[i].alt = t.value
  else if (t.id === 'use-accent') st.use_accent = t.checked
  else if (t.id === 'confirm_all') st.confirm_all = t.checked
  else if (t.id in st && t.id !== 'photos') { st[t.id] = t.value; if (t.id === 'template') { help(); st.theme = '' ; $('theme').value = '' } }
  else return
  refresh()
})
document.addEventListener('click', (e) => {
  const k = e.target.dataset?.k, i = +e.target.closest('[data-i]')?.dataset.i
  if (e.target.id === 'add-hours') { st.hours.push({ days: ['lun', 'mar', 'mer', 'gio', 'ven'], opens: '09:00', closes: '18:00' }); hoursUI() }
  else if (e.target.id === 'add-service') { st.services.push({ name: '' }); servicesUI() }
  else if (k === 'rm-hours') { st.hours.splice(i, 1); hoursUI() } else if (k === 'rm-service') { st.services.splice(i, 1); servicesUI() }
  else if (k === 'rm-photo') { const p = st.photos.splice(i, 1)[0]; delete assets[p.path]; URL.revokeObjectURL(urls[p.path]); delete urls[p.path]; photosUI() }
  else if (e.target.id === 'reset') { if (confirm('Ricominciare da capo? I dati inseriti andranno persi.')) { st = blank(); for (const p of Object.keys(assets)) delete assets[p]; for (const u of Object.values(urls)) URL.revokeObjectURL(u); fill(); refresh() } return }
  else if (e.target.id === 'export') return doExport()
  else if (e.target.id === 'open-preview') { if (!site) return; const html = $('frame').srcdoc; window.open(URL.createObjectURL(new Blob([html], { type: 'text/html' })), '_blank', 'noopener'); return }
  else return
  refresh()
})
$('photos').addEventListener('change', async (e) => {
  for (const f of e.target.files) { try { await addPhoto(f) } catch (err) { $('msg').innerHTML = `<p class="err">${esc(f.name)}: ${esc(err.message)}</p>` } }
  e.target.value = ''; photosUI(); refresh()
})
$('import').addEventListener('change', async (e) => {
  try { const j = JSON.parse(await e.target.files[0].text()); if (!j.editor_state?.state) throw new Error('file non riconosciuto'); st = { ...blank(), ...j.editor_state.state, photos: [] }; fill(); $('msg').innerHTML = '<p class="ok">Sito riaperto. Le foto vanno caricate di nuovo.</p>'; refresh() } catch (err) { $('msg').innerHTML = `<p class="err">${esc(err.message)}</p>` }
})
function doExport() {
  if (!site) { $('msg').innerHTML = '<p class="err">Scrivi prima il nome dell’attività.</p>'; return }
  try {
    const r = buildExport(site.s, { assets, baseUrl: st.base_url || undefined })
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([r.zip], { type: 'application/zip' })); a.download = `sito-${site.s.slug}.zip`; document.body.append(a); a.click(); a.remove()
    $('msg').innerHTML = `<p class="ok">Scaricato: sito-${esc(site.s.slug)}.zip (${Object.keys(r.files).length} file). Dentro trovi LEGGIMI-PUBBLICA.txt.</p>${r.warnings.map((w) => `<p class="warn">${esc(w)}</p>`).join('')}`
  } catch (err) { $('msg').innerHTML = `<p class="err">${esc(err.message)}</p>` }
}
load(); fill(); refresh()
window.__editor = { get site() { return site }, get state() { return st } } // utile ai test e2e

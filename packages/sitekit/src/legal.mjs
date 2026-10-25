// Informativa privacy e pagina cookie generate dai campi `compliance.controller`.
// Sono MODELLI: prima dell'apertura pubblica li fa validare un professionista (richiesta separata). Il testo lo dichiara.
import { esc } from './html.mjs'

export const CONSENT_VERSION = 'v1-2026-10'
export const RETENTION_MONTHS = 24 // richieste di contatto: cancellate dopo 24 mesi dall'ultimo scambio

export function consentText(name, locale = 'it') {
  return (locale === 'en' ? 'I agree to be contacted by {name} to answer this request. I have read the privacy notice.' : 'Acconsento a essere ricontattato da {name} per rispondere a questa richiesta. Ho letto l\u2019informativa privacy.').replace('{name}', name)
}

export function privacyHtml(site) {
  const c = site.compliance?.controller || {}, b = site.business
  const name = c.name || b.legal_name || b.name
  const addr = c.address || (b.address ? `${b.address.street}, ${b.address.postal_code} ${b.address.city} (${(b.address.province || '').toUpperCase()})` : '')
  return `<h1>Informativa privacy</h1>
<p><strong>Modello generato automaticamente. Il titolare deve verificarlo prima di considerarlo definitivo.</strong></p>
<h2>Titolare del trattamento</h2>
<p>${esc(name)}${c.vat_id || b.vat_id ? ', P. IVA ' + esc(c.vat_id || b.vat_id) : ''}${addr ? ', ' + esc(addr) : ''}. Contatto privacy: ${c.email ? `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : 'indicato nei contatti del sito'}.</p>
<h2>Quali dati trattiamo e perche\u2019</h2>
<p>Se compili il modulo di contatto trattiamo nome, telefono e/o email e il messaggio, <strong>solo per risponderti</strong> (misure precontrattuali e legittimo interesse a rispondere alle richieste, art. 6.1 b/f GDPR). Se scegli la casella facoltativa per le novita\u2019, usiamo i tuoi recapiti anche per comunicazioni promozionali (consenso, art. 6.1 a), revocabile in ogni momento.</p>
<p>Registriamo il testo e la versione del consenso che hai accettato, la data e un indirizzo IP <strong>troncato</strong> (ultimi bit azzerati) come prova del consenso.</p>
<h2>Per quanto tempo</h2>
<p>Le richieste sono conservate per ${RETENTION_MONTHS} mesi dall\u2019ultimo scambio, poi cancellate. Le prove di consenso per lo stesso periodo.</p>
<h2>Chi li riceve</h2>
<p>Il titolare. I dati sono gestiti per suo conto da S.C.A.L.A. (responsabile del trattamento, art. 28 GDPR) con server nell\u2019Unione Europea. Nessuna vendita dei dati, nessuna profilazione, nessun trasferimento extra-UE di questi dati.</p>
<h2>I tuoi diritti</h2>
<p>Accesso, rettifica, cancellazione, limitazione, opposizione, portabilita\u2019, revoca del consenso: scrivi al contatto privacy qui sopra. Puoi proporre reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).</p>
<h2>Navigazione</h2>
<p>Questo sito non usa cookie, non usa strumenti di analisi di terzi, non carica font o script da altri siti.</p>`
}

export function cookieHtml() {
  return `<h1>Cookie</h1><p>Questo sito <strong>non installa cookie</strong> e non usa tracciamenti. Non c\u2019e\u2019 nulla da accettare o rifiutare. Se in futuro il titolare attivasse strumenti che li richiedono, comparira\u2019 un avviso con il rifiuto come scelta predefinita.</p>`
}

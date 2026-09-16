'use client'

import { useEffect, useRef } from 'react'
import './labrace.css'

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'S.C.A.L.A. AI OS',
  alternateName: 'DineOS',
  description:
    'DineOS è il verticale AI di S.C.A.L.A. per ristoranti e hospitality: prenotazioni H24, no-show management, yield management camere, pipeline eventi, food cost, SARA WhatsApp.',
  url: 'https://get-scala.com',
  email: 'ale@get-scala.com',
  sameAs: ['https://get-scala.com'],
  makesOffer: {
    '@type': 'Offer',
    name: 'DineOS — Piattaforma AI per La Brace',
    priceCurrency: 'EUR',
    price: '4000',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '4000',
      priceCurrency: 'EUR',
      unitText: 'MONTH',
    },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Cosa cambia dalla proposta di giugno?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il frame è cambiato completamente: non vendiamo risparmio software, vendiamo ricavi recuperati. No-show, commissioni OTA, eventi persi, yield management, cross-sell: il ROI stimato è €143-232K/anno contro €48K di canone annuo.",
      },
    },
    {
      '@type': 'Question',
      name: 'Posso testare il sistema prima di impegnarmi per 2 anni?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì, per questo esiste la Fase 1: 3 mesi a €1.500/mese con KPI misurabili (no-show rate, tempo risposta, prenotazioni fuori orario). Se i KPI non migliorano del 30%, ne parliamo prima di passare alla Fase 2.",
      },
    },
    {
      '@type': 'Question',
      name: "Il setup include la presenza di qualcuno on-site?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì: 2 giorni on-site a La Brace. Giorno 1: audit sistemi, mappatura flussi, interviste team. Giorno 2: configurazione live, SARA attiva su WhatsApp in giornata, formazione staff.",
      },
    },
    {
      '@type': 'Question',
      name: 'SARA può gestire prenotazioni per gruppi e banchetti?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prenotazioni oltre 20 pax vengono escalate direttamente ad Aristide — SARA raccoglie i dati (data, tipo evento, numero ospiti, budget) e genera un pre-preventivo, ma la chiusura rimane umana.",
      },
    },
    {
      '@type': 'Question',
      name: 'Il sistema gestisce anche le 28 camere hotel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì, dalla Fase 2: yield management (pricing dinamico stagionale/settimanale), channel management semplificato, cross-sell automatico camera↔ristorante, RevPAR e ADR in dashboard real-time.",
      },
    },
  ],
}

// ─────────────────────────────────────────────
// BODY HTML
// ─────────────────────────────────────────────
const BODY_HTML = `

<!-- ═══════ NAV ═══════ -->
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="#hero" class="nav-logo">
      <div class="mark">S</div>
      S.C.A.L.A.<span class="nav-logo-sep">/</span><span class="nav-logo-sub">DineOS</span>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="#roi">ROI</a>
      <a href="#piattaforma">Piattaforma</a>
      <a href="#sara">SARA</a>
      <a href="#pricing">Offerta</a>
      <a href="#contatti" class="nav-cta">Parliamone</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ═══════ HERO ═══════ -->
<section class="hero" id="hero">
  <div class="hero-bg" aria-hidden="true"></div>

  <div class="hero-eyebrow">DineOS — Preparato per La Brace · Forcola</div>

  <h1>I coperti che state lasciando<br>sul tavolo <em>ogni settimana</em>.</h1>

  <p class="hero-sub">
    Ogni no-show non gestito, ogni prenotazione che arriva fuori orario, ogni evento che risponde in 24 ore: soldi che escono. DineOS li recupera. Con numeri misurabili dopo 90 giorni.
  </p>

  <div class="hero-actions">
    <a href="#contatti" class="btn-primary">Parliamo di numeri</a>
    <a href="/labrace/preventivo" class="btn-secondary">Vedi preventivo</a>
  </div>

  <div class="hero-roi">
    <div class="roi-item">
      <div class="roi-val">€48-73K</div>
      <div class="roi-label">no-show recuperati / anno</div>
    </div>
    <div class="roi-item">
      <div class="roi-val">€32-52K</div>
      <div class="roi-label">eventi aggiuntivi / anno</div>
    </div>
    <div class="roi-item">
      <div class="roi-val">€30-56K</div>
      <div class="roi-label">yield management camere</div>
    </div>
    <div class="roi-item">
      <div class="roi-val">198-383%</div>
      <div class="roi-label">ROI stimato</div>
    </div>
  </div>
</section>

<!-- ═══════ ROI ═══════ -->
<section id="roi">
  <div class="wrap">
    <div class="section-eyebrow">Il frame corretto</div>
    <h2 class="section-title">Non risparmi di software.<br><em>Ricavi che state perdendo.</em></h2>
    <p class="section-desc">La proposta di giugno era costruita sul risparmio dei gestionali. Aveva ragione che non tornava. Questo è il calcolo corretto — fatelo con i vostri numeri reali.</p>

    <div class="roi-table-wrap">
      <table class="roi-table">
        <thead>
          <tr>
            <th>Leva di ricavo</th>
            <th>Come funziona</th>
            <th>Stima annua</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>No-show recuperati</strong></td>
            <td class="muted">SARA reminder T-24h + T-2h. Ogni no-show evitato = coperto + camera non persi. Con 3-5 no-show/settimana a €150-200 medi.</td>
            <td>€ 48.640 – 72.960</td>
          </tr>
          <tr>
            <td><strong>Prenotazioni dirette vs OTA</strong></td>
            <td class="muted">SARA risponde H24 su WhatsApp. Ogni prenotazione diretta evita 15-20% di commissione Booking.com/TheFork.</td>
            <td>€ 7.860 – 15.600</td>
          </tr>
          <tr>
            <td><strong>+2 eventi/anno intercettati</strong></td>
            <td class="muted">Lead-to-response &lt;1h = 7× più probabilità di chiudere (HBR). Pipeline AI risponde ai preventivi entro 60 minuti anche di notte.</td>
            <td>€ 32.400 – 51.840</td>
          </tr>
          <tr>
            <td><strong>Cross-sell camera↔ristorante</strong></td>
            <td class="muted">SARA propone cena a chi prenota camera, camera a chi prenota cena. Upsell automatico, personalizzato.</td>
            <td>€ 13.680 – 20.520</td>
          </tr>
          <tr>
            <td><strong>Yield management stagionale</strong></td>
            <td class="muted">+5-8% RevPAR su 28 camere. ADR attuale ~€110 vs benchmark €120-160. Ogni +€10 RevPAR = +€102K/anno (28 cam × 365 × €10).</td>
            <td>€ 30.660 – 56.000</td>
          </tr>
          <tr>
            <td><strong>Staff riportato in sala</strong></td>
            <td class="muted">SARA gestisce le chiamate per prenotazioni (stima 2-3h/gg). Staff torna a servire tavoli — qualità servizio e recensioni migliorano.</td>
            <td>€ 10.080 – 15.120</td>
          </tr>
          <tr class="total">
            <td>Totale ricavi recuperabili</td>
            <td></td>
            <td>€ 143K – 232K / anno</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="font-size:12.5px; color:var(--c-muted); margin-top:12px; line-height:1.6;">
      Stime conservative basate su: fatturato La Brace €4.387M, 28 camere, ADR ~€110, occupancy ~60%, eventi ~8/anno. Dati bilancio Osteria Del Conte SRL (P.IVA 00570240143). Il vostro canone annuo è €48.000 — anche solo il 35% del ROI minimo è breakeven.
    </p>

    <!-- EVIDENCE BOX -->
    <div class="evidence-box">
      <div class="ev-icon">📊</div>
      <div class="ev-body">
        <div class="ev-title">I compiti fatti sui vostri numeri reali</div>
        <p class="ev-desc">Abbiamo ricostruito la struttura dei ricavi di La Brace dal bilancio depositato: ristorante, hotel, eventi, bar, colazioni. I KPI che non avete in dashboard — RevPAR, no-show rate, lead-to-response time, repeat rate — e dove ogni punto percentuale vale in euro. Non sono stime di settore: sono i vostri numeri.</p>
        <a href="/labrace/preventivo" class="ev-link">Vedi il piano dettagliato →</a>
      </div>
    </div>

    <!-- GARANZIA NO-SHOW -->
    <div class="guarantee-box">
      <div class="guar-head">
        <span class="guar-icon">✓</span>
        <strong>Sul no-show: trasparenza totale</strong>
      </div>
      <p>Non garantiamo una percentuale specifica senza conoscere il vostro tasso attuale. Quello che facciamo: misuriamo il vostro tasso di partenza nelle prime 2 settimane, poi misuriamo dopo 60 giorni di reminder automatici. I ristoranti che implementano reminder T-24h + T-2h riducono il no-show dal 40% al 60% (Hopt.io, 2024, campione 340 ristoranti italiani). Se siete all'8%, il target è 4-5%. Se siete al 12%, il target è 5-7%. <strong>Il KPI dopo 90 giorni lo vediamo insieme, numeri alla mano.</strong></p>
    </div>
  </div>
</section>

<!-- ═══════ ENTRY POINT ═══════ -->
<section id="entry" style="background:var(--c-raised);">
  <div class="wrap">
    <div class="section-eyebrow">Nessun impegno a scatola chiusa</div>
    <h2 class="section-title">Tre modi di partire.<br><em>Sceglie lei il rischio che accetta.</em></h2>

    <div class="entry-grid">
      <div class="entry-card entry-card-highlight">
        <div class="ec-badge">Raccomandato</div>
        <div class="ec-option">Opzione A</div>
        <h3>Workshop on-site — 2 giorni</h3>
        <div class="ec-price">€ 2.000</div>
        <p>Due giorni a La Brace. Usciamo con: architettura integrazione validata (cassa, POS, HR), preventivo definitivo, piano tecnico firmato. Zero impegno sul canone dopo. Se poi non si va avanti, il workshop vale €5.000 di consulenza.</p>
        <div class="ec-includes">
          <div>✓ Audit sistemi esistenti (cassa, POS, gestionale)</div>
          <div>✓ Configurazione live SARA WhatsApp</div>
          <div>✓ Preventivo definitivo con integrazioni validate</div>
          <div>✓ Trasferta e vitto inclusi</div>
        </div>
      </div>
      <div class="entry-card">
        <div class="ec-option">Opzione B</div>
        <h3>Fase 1 — Solo booking e no-show</h3>
        <div class="ec-price">€ 1.500 <span>/mese × 3</span></div>
        <p>SARA attiva su WhatsApp, reminder automatici, booking H24. KPI dopo 90 giorni: se il no-show rate non scende, si esce senza penale. Poi si decide se proseguire con Fase 2.</p>
        <div class="ec-includes">
          <div>✓ Setup €2.000 (inclusa configurazione + 2gg on-site)</div>
          <div>✓ KPI target verificati insieme a 90 giorni</div>
          <div>✓ Exit senza penale se KPI non raggiunti</div>
        </div>
      </div>
      <div class="entry-card">
        <div class="ec-option">Opzione C</div>
        <h3>Piattaforma completa — Founding Partner</h3>
        <div class="ec-price">€ 4.000 <span>/mese</span></div>
        <p>Full DineOS dal giorno 1: ristorante, hotel, eventi, yield, food cost, loyalty. Prezzo bloccato 24 mesi. Unica struttura hospitality in Valtellina.</p>
        <div class="ec-includes">
          <div>✓ Tutti i moduli DineOS attivi</div>
          <div>✓ Ambassador program: €500 credit per cliente referrato</div>
          <div>✓ Prezzo bloccato — nessun adeguamento ISTAT</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ PIATTAFORMA ═══════ -->
<section id="piattaforma">
  <div class="wrap">
    <div class="section-eyebrow">DineOS — moduli verticali</div>
    <h2 class="section-title">Ristorante, hotel, eventi.<br>Un solo sistema.</h2>
    <p class="section-desc">Fase 1 attiva i moduli critici per recupero immediato. Fase 2 apre tutto: yield management, hotel, eventi, loyalty, food cost.</p>

    <div class="module-grid">
      <div class="module-card">
        <span class="module-icon">📅</span>
        <h3>Booking Engine H24</h3>
        <p>Gestione prenotazioni digitale completa. SARA risponde su WhatsApp anche alle 23:00, conferma, modifica, cancella. Il telefono smette di squillare per prenotazioni.</p>
        <span class="tag">✓ Fase 1</span>
      </div>
      <div class="module-card">
        <span class="module-icon">🚫</span>
        <h3>No-show Management</h3>
        <p>Reminder automatico T-24h e T-2h via WhatsApp. Tracking no-show per cliente (blacklist automatica dopo N). Da 8-12% a meno del 4% — misurato dopo 90 giorni.</p>
        <span class="tag">✓ Fase 1</span>
      </div>
      <div class="module-card">
        <span class="module-icon">⭐</span>
        <h3>Review Management</h3>
        <p>Monitoraggio Google Maps e TripAdvisor. Risposta AI alle recensioni positive. Escalation a Aristide per negative con reclamo. +0.1 stelle = +2.8% RevPAR (Cornell University).</p>
        <span class="tag">✓ Fase 1</span>
      </div>
      <div class="module-card">
        <span class="module-icon">💰</span>
        <h3>Yield Management Camere</h3>
        <p>Pricing dinamico per stagione, giorno, evento. ADR attuale ~€110 vs benchmark €120-160. RevPAR e occupancy in dashboard real-time. Ogni +€10 RevPAR = +€102K/anno.</p>
        <span class="tag tag-new">✦ Fase 2</span>
      </div>
      <div class="module-card">
        <span class="module-icon">🎪</span>
        <h3>Pipeline Eventi &amp; Banqueting</h3>
        <p>Risposta preventivi entro 1 ora anche di notte (HBR: 7× conversione). Pipeline AI: lead → preventivo → followup → conferma. Cross-sell eventi → pernottamento automatico.</p>
        <span class="tag tag-new">✦ Fase 2</span>
      </div>
      <div class="module-card">
        <span class="module-icon">🍽️</span>
        <h3>Food Cost Analyzer</h3>
        <p>Margine per piatto, ottimizzazione menu, alert soglie ingredienti. Integrazione con cassa esistente. "Qual è il piatto più redditizio del menu?" — risposta in 30 secondi.</p>
        <span class="tag tag-new">✦ Fase 2</span>
      </div>
      <div class="module-card">
        <span class="module-icon">🏨</span>
        <h3>Hotel Management</h3>
        <p>28 camere: check-in/out digitale, channel management semplificato, cross-sell automatico camera→cena e cena→camera. Loyalty program clienti ricorrenti.</p>
        <span class="tag tag-new">✦ Fase 2</span>
      </div>
      <div class="module-card">
        <span class="module-icon">📊</span>
        <h3>Analytics Full Hospitality</h3>
        <p>RevPAR, ADR, RevPASH, occupancy per turno, conversion eventi, food cost per categoria, CLV clienti, coperti per server. I KPI che i migliori hotel del mondo guardano ogni mattina.</p>
        <span class="tag tag-new">✦ Fase 2</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ SARA ═══════ -->
<section id="sara">
  <div class="wrap">
    <div class="section-eyebrow">SARA — DineOS Agent</div>
    <h2 class="section-title">Non risponde solo.<br><em>Prenota, ricorda, gestisce.</em></h2>
    <p class="section-desc">SARA conosce il menu stagionale, i tavoli, gli orari, le allergie frequenti de La Brace. Risponde come un membro del team, scala a lei solo quando serve.</p>

    <div class="sara-grid">
      <div>
        <div class="sara-panel">
          <div class="sara-panel-header">
            <div class="dots">
              <div class="dot dot-r"></div>
              <div class="dot dot-y"></div>
              <div class="dot dot-g"></div>
            </div>
            <span style="margin-left:auto;">SARA · La Brace · WhatsApp · 22:14</span>
          </div>
          <div class="sara-chat">
            <span class="msg-meta">Cliente</span>
            <div class="msg msg-in">Buonasera, vorrei prenotare per sabato sera, siamo 6 persone. C'è disponibilità? Abbiamo una persona celiaca.</div>
            <div class="msg msg-out">Buonasera! Sabato 19 settembre ho disponibilità alle 20:00 e alle 21:00 per 6 persone. Quale preferisce? Il nostro menu offre diverse opzioni per celiaci — la informeremo al tavolo.</div>
            <div class="msg msg-in">Perfetto, 20:00. Mi chiamo Marco Bianchi, 3391234567</div>
            <div class="msg msg-out">Prenotazione confermata, Marco! Sabato 19/9 alle 20:00 per 6 persone. Riceverà un promemoria domani sera e sabato pomeriggio. A presto!</div>
            <span class="msg-meta">Prenotazione creata · Promemoria schedulati · Staff notificato allergia celiaco</span>
          </div>
        </div>
      </div>

      <div>
        <p style="font-size:15px; color:var(--c-muted); line-height:1.7; margin-bottom:28px;">
          Allergia segnalata, prenotazione confermata, reminder automatici programmati: <strong style="color:var(--c-white);">tutto in 90 secondi, alle 22:14, senza che nessuno del suo staff abbia alzato il telefono.</strong>
        </p>
        <div style="display:flex; flex-direction:column; gap:0;">
          <div class="tool-row">
            <span class="tool-name">check_availability</span>
            <span class="tool-desc">Verifica coperti liberi per data/ora/pax — H24</span>
            <span class="tool-risk risk-low">AUTO</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">book_table</span>
            <span class="tool-desc">Crea prenotazione reale nel DB da messaggio WA</span>
            <span class="tool-risk risk-med">Semi-auto</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">send_reminder</span>
            <span class="tool-desc">WA automatico T-24h e T-2h — no-show da 10% a &lt;4%</span>
            <span class="tool-risk risk-low">AUTO</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">suggest_upsell</span>
            <span class="tool-desc">Piatto del giorno / evento speciale — scontrino +€4-7</span>
            <span class="tool-risk risk-low">AUTO</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">handle_review</span>
            <span class="tool-desc">Risponde recensioni Google/TripAdvisor in automatico</span>
            <span class="tool-risk risk-med">Approvazione</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">trigger_loyalty</span>
            <span class="tool-desc">Reward dopo N visite + reactivation inattivi 6 mesi</span>
            <span class="tool-risk risk-med">Semi-auto</span>
          </div>
        </div>
        <div style="background:var(--c-amber-bg); border:1px solid var(--c-amber-bd); border-radius:6px; padding:12px 14px; margin-top:16px; font-size:12.5px; color:var(--c-text); line-height:1.6;">
          <strong style="color:var(--c-amber);">Escalation sempre ad Aristide:</strong> prenotazioni >20 pax, allergie gravi, reclami negativi, richieste rimborso, VIP senza storico.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ PRICING ═══════ -->
<section id="pricing">
  <div class="wrap">
    <div class="section-eyebrow">Offerta — Due Fasi</div>
    <h2 class="section-title">Prova di fuoco prima,<br>piena potenza dopo.</h2>
    <p class="section-desc">3 mesi per dimostrare i numeri. KPI misurabili. Se non migliorano, ne parliamo prima di procedere.</p>

    <div class="setup-card">
      <div>
        <div class="setup-label">Setup — 2 giorni on-site inclusi</div>
        <div class="setup-desc">Giorno 1: audit sistemi + mappatura flussi. Giorno 2: configurazione live, SARA attiva su WA, formazione staff.</div>
      </div>
      <div class="setup-price">€ 2.000</div>
    </div>

    <div class="phase-grid">
      <div class="phase-card">
        <div class="phase-eyebrow">Mesi 1–3</div>
        <h3>Fase 1 — Prova di Fuoco</h3>
        <div class="phase-price">€ 1.500<small>/mese</small></div>
        <ul>
          <li>Booking engine H24</li>
          <li>SARA su WhatsApp attiva</li>
          <li>No-show management (reminder T-24h/T-2h)</li>
          <li>Review monitoring + risposta</li>
          <li>Dashboard KPI base</li>
          <li>Support agent H24 + escalation Ale</li>
          <li>Affiancamento settimanale</li>
        </ul>
      </div>
      <div class="phase-card highlighted">
        <div class="phase-eyebrow">Mesi 4–24</div>
        <h3>Fase 2 — Full Control</h3>
        <div class="phase-price">€ 4.000<small>/mese</small></div>
        <ul>
          <li>Tutto Fase 1 confermato</li>
          <li>Yield management camere</li>
          <li>Pipeline eventi &amp; banqueting</li>
          <li>Hotel management (28 camere)</li>
          <li>Food cost analyzer</li>
          <li>Cross-sell automatico</li>
          <li>Loyalty program</li>
          <li>Analytics full hospitality</li>
          <li>QBR trimestrale + 2h/mese evolutive</li>
        </ul>
      </div>
    </div>

    <div class="total-bar">
      <div>
        <div class="total-bar-label">Investimento totale 24 mesi</div>
        <div class="total-bar-sub">€2.000 setup + €4.500 Fase 1 + €84.000 Fase 2 = €90.500</div>
      </div>
      <div class="total-bar-val">€ 90.500</div>
    </div>

    <div style="margin-top:12px; padding:16px 20px; background:var(--c-teal-bg); border:1px solid rgba(42,190,170,.22); border-radius:8px;">
      <p style="font-size:13px; color:var(--c-text); line-height:1.6;">
        <strong style="color:var(--c-teal);">Garanzia Fase 1:</strong> se dopo 90 giorni il no-show rate non è sceso di almeno il 30%, ne parliamo prima di passare alla Fase 2. KPI misurati su dati reali che portiamo insieme dal Giorno 1.
      </p>
    </div>
  </div>
</section>

<!-- ═══════ SUPPORTO ═══════ -->
<section id="supporto">
  <div class="wrap">
    <div class="section-eyebrow">Supporto</div>
    <h2 class="section-title">Aristide non rimane<br>mai solo con il sistema.</h2>

    <div class="support-levels">
      <div class="support-level">
        <div class="slvl-num">1</div>
        <div>
          <div class="slvl-title">SARA Support in piattaforma — H24</div>
          <div class="slvl-desc">Conosce il setup specifico de La Brace: menu stagionale, tavoli, orari, HACCP, workflow eventi. "Come modifico gli allergeni per il menu autunnale?" → risposta in 30 secondi. Non risponde come un FAQ generico — sa come avete configurato il sistema.</div>
        </div>
      </div>
      <div class="support-level">
        <div class="slvl-num">2</div>
        <div>
          <div class="slvl-title">Ticket formale — SLA 4h/24h</div>
          <div class="slvl-desc">Per problemi tecnici, integrazioni con POS/cassa esistente, anomalie dati. 1 click dalla piattaforma, tracking dashboard, chiuso con nota di risoluzione.</div>
        </div>
      </div>
      <div class="support-level">
        <div class="slvl-num">3</div>
        <div>
          <div class="slvl-title">Ale diretto — WhatsApp + QBR trimestrale</div>
          <div class="slvl-desc">Per urgenze, personalizzazioni, nuove funzionalità. 2h/mese evolutive incluse in Fase 2. QBR trimestrale (1h call): review RevPAR, no-show rate, conversion eventi, ottimizzazioni.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ CONTATTI ═══════ -->
<section id="contatti">
  <div class="wrap">
    <div class="section-eyebrow">Prossimi passi</div>
    <h2 class="section-title">5 numeri e il ROI<br>diventa il <em>suo</em> ROI.</h2>
    <p class="section-desc">Quanti no-show a settimana? Quanto paghi di commissioni OTA? Quante ore al telefono per prenotazioni? In 10 minuti calcoliamo il ROI sul suo specifico caso — non stime generiche.</p>

    <div class="contact-grid">
      <div class="contact-card contact-card-primary">
        <h3>✍ Firma il contratto online</h3>
        <p>Contratto DineOS pronto per la firma digitale — 3 minuti, valido EIDAS. L'addebito SEPA RID parte solo dopo la firma, nessun anticipo.</p>
        <a href="/labrace/preventivo" class="btn-primary">Apri preventivo e firma →</a>
      </div>
      <div class="contact-card">
        <h3>🖥️ Accedi alla demo</h3>
        <p>L'istanza DineOS configurata per La Brace è già attiva — sala, hotel, eventi, SARA WhatsApp, no-show. Giri in completa autonomia.</p>
        <a href="https://sites.get-scala.com/demo/aristide" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="display:inline-block;">Guida demo →</a>
      </div>
      <div class="contact-card">
        <h3>📋 Preventivo dettagliato</h3>
        <p>Setup voce per voce, Fase 1 vs Fase 2, tabella ROI completa con tutte le leve, condizioni contrattuali.</p>
        <a href="/labrace/preventivo" class="btn-secondary" style="display:inline-block;">Apri preventivo →</a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ FOOTER ═══════ -->
<footer class="site-footer">
  <div class="wrap">
    <p>S.C.A.L.A. AI OS · <a href="mailto:ale@get-scala.com">ale@get-scala.com</a> · <a href="https://get-scala.com">get-scala.com</a></p>
    <p style="margin-top:6px;">Proposta riservata a La Brace · settembre 2026 · prezzi IVA esclusa</p>
  </div>
</footer>

`

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function LaTracePage() {
  const orgLdRef = useRef<HTMLScriptElement>(null)
  const faqLdRef = useRef<HTMLScriptElement>(null)

  useEffect(() => {
    if (orgLdRef.current) orgLdRef.current.textContent = JSON.stringify(orgJsonLd)
    if (faqLdRef.current) faqLdRef.current.textContent = JSON.stringify(faqJsonLd)

    const nav = document.getElementById('nav')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })

    const toggle = document.getElementById('navToggle')
    const links  = document.getElementById('navLinks')
    const onToggle = () => {
      const open = links?.classList.toggle('open')
      toggle?.setAttribute('aria-expanded', String(open))
    }
    toggle?.addEventListener('click', onToggle)
    links?.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => { links.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false') })
    )

    return () => {
      window.removeEventListener('scroll', onScroll)
      toggle?.removeEventListener('click', onToggle)
    }
  }, [])

  return (
    <>
      <script ref={orgLdRef} type="application/ld+json" />
      <script ref={faqLdRef} type="application/ld+json" />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  )
}

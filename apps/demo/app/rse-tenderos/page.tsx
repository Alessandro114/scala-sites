'use client'

import { useEffect, useRef } from 'react'
import './rse-tenderos.css'

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'S.C.A.L.A. AI OS',
  alternateName: 'TenderOS',
  description:
    'TenderOS è il modulo verticale di S.C.A.L.A. AI OS per la gestione AI-powered di gare e bandi europei e italiani: radar su 16+ fonti, parsing automatico dei disciplinari, gap analysis, agente autonomo e assistente SARA su WhatsApp.',
  url: 'https://get-scala.com',
  email: 'ale@get-scala.com',
  sameAs: ['https://get-scala.com'],
  makesOffer: {
    '@type': 'Offer',
    name: 'TenderOS — Piattaforma AI per gare e bandi',
    priceCurrency: 'EUR',
    price: '5000',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '5000',
      priceCurrency: 'EUR',
      unitText: 'MONTH',
    },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Come si integra con i sistemi esistenti di RSE?', acceptedAnswer: { '@type': 'Answer', text: 'TenderOS si integra via API REST con i sistemi documentali esistenti, senza richiedere migrazione dati.' } },
    { '@type': 'Question', name: "Quanto tempo richiede l'onboarding?", acceptedAnswer: { '@type': 'Answer', text: 'Setup piattaforma in 2-3 settimane, operativo dalla quarta settimana.' } },
    { '@type': 'Question', name: 'I dati sono sicuri?', acceptedAnswer: { '@type': 'Answer', text: 'Infrastruttura in UE, crittografia in transito e a riposo, accesso RBAC, conforme GDPR.' } },
    { '@type': 'Question', name: 'Serve formazione per il team?', acceptedAnswer: { '@type': 'Answer', text: 'Onboarding con due sessioni da 90 minuti e referente dedicato nei primi 30 giorni.' } },
    { '@type': 'Question', name: 'Possiamo provare TenderOS prima di impegnarci?', acceptedAnswer: { '@type': 'Answer', text: 'Sì, con una demo live personalizzata e gap analysis dimostrativa gratuita, senza impegno.' } },
    { '@type': 'Question', name: 'Come gestite la supervisione umana?', acceptedAnswer: { '@type': 'Answer', text: 'Ogni bozza resta in stato da rivedere finché un ricercatore o PM non la approva, con tre livelli di autonomia configurabili.' } },
  ],
}

// ─────────────────────────────────────────────
// STATIC MARKUP (ported 1:1 from the approved design mock)
// ─────────────────────────────────────────────
const BODY_HTML = `

<!-- ═══════ NAV ═══════ -->
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="#hero" class="nav-logo">
      <div class="mark">S</div>
      S.C.A.L.A.<span class="nav-logo-sep">/</span><span class="nav-logo-sub">TenderOS</span>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="#moduli">Moduli</a>
      <a href="#connettori">Connettori</a>
      <a href="#come-funziona">Come funziona</a>
      <a href="#sara">SARA</a>
      <a href="#pricing">Pricing</a>
      <a href="#contatti" class="nav-cta">Richiedi Demo</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ═══════ HERO ═══════ -->
<section class="hero" id="hero">
  <svg class="hero-circuit" viewBox="0 0 400 400" fill="none" stroke="#2563eb" stroke-width="1.2" aria-hidden="true">
    <path d="M20 60 H140 L170 90 V180 M170 90 H260 L290 60 H380" opacity=".5"/>
    <path d="M40 200 H120 V320 L150 350 H260" opacity=".4"/>
    <path d="M300 140 V260 L340 300 V380" opacity=".4"/>
    <circle cx="140" cy="60" r="4" fill="#d4a017" stroke="none"/>
    <circle cx="170" cy="180" r="4" fill="#2563eb" stroke="none"/>
    <circle cx="290" cy="60" r="4" fill="#2563eb" stroke="none"/>
    <circle cx="120" cy="320" r="4" fill="#d4a017" stroke="none"/>
    <circle cx="300" cy="260" r="4" fill="#2563eb" stroke="none"/>
    <circle cx="340" cy="300" r="4" fill="#d4a017" stroke="none"/>
  </svg>
  <div class="hero-content">
    <div class="hero-eyebrow">AI Operating System per Gare e Bandi</div>
    <h1 class="hero-title">
      TENDER<br>
      <span>OS</span>
    </h1>
    <p class="hero-sub">Il sistema operativo AI che trasforma la gestione di bandi e gare europee per RSE.</p>
    <div class="hero-actions">
      <a href="#contatti" class="btn-primary">
        Richiedi Demo
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>
      <a href="#moduli" class="btn-ghost">Scopri i moduli</a>
    </div>
    <div class="hero-certs">
      <div class="hero-cert"><span class="dot"></span>16+ Fonti</div>
      <div class="hero-cert"><span class="dot"></span>AI-Powered</div>
      <div class="hero-cert"><span class="dot"></span>Enterprise</div>
    </div>
  </div>
</section>

<!-- ═══════ STATS ═══════ -->
<section class="stats">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item reveal">
        <div class="stat-number" data-target="16" data-suffix="+">0</div>
        <div class="stat-label">Fonti monitorate</div>
      </div>
      <div class="stat-item reveal">
        <div class="stat-number" data-target="70" data-prefix="-" data-suffix="%">0</div>
        <div class="stat-label">Tempo preparazione</div>
      </div>
      <div class="stat-item reveal">
        <div class="stat-number">24/7</div>
        <div class="stat-label">Monitoring attivo</div>
      </div>
      <div class="stat-item reveal">
        <div class="stat-number" data-target="82">0</div>
        <div class="stat-label">Progetti EU gestiti</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ IL PROBLEMA ═══════ -->
<section class="section" id="sfida">
  <div class="container">
    <div class="reveal">
      <div class="section-eyebrow">Il problema</div>
      <h2 class="section-title">La sfida di gestire<br>€100M+ di funding</h2>
    </div>
    <div class="about-grid">
      <div class="about-text reveal">
        <p>
          RSE gestisce oggi <strong>82 progetti europei attivi</strong> distribuiti su decine di programmi diversi — Horizon Europe, LIFE, PNRR, bandi ARERA, Interreg — ciascuno con il proprio portale, il proprio formato di disciplinare, le proprie scadenze e i propri criteri di valutazione.
        </p>
        <p>
          Il monitoraggio delle opportunità è oggi <strong>manuale</strong>: ricercatori e project manager controllano portali diversi uno per uno, con il rischio concreto di perdere bandi rilevanti pubblicati su fonti meno presidiate. Ogni nuova proposta richiede <strong>settimane di lavoro</strong> per leggere il disciplinare, estrarre i criteri di valutazione e verificare la coerenza della documentazione tecnica RSE con quanto richiesto.
        </p>
        <p>
          La gap analysis — il confronto tra ciò che RSE può offrire e ciò che il bando richiede — viene fatta <strong>a mano, criterio per criterio</strong>, con margini di errore umano su una posta in gioco che vale, per singola gara, da centinaia di migliaia a diversi milioni di euro.
        </p>
      </div>
      <div class="about-image reveal">
        <svg viewBox="0 0 400 500" fill="none" stroke="#2563eb" stroke-width="1" aria-hidden="true">
          <path d="M30 60 H160 L190 90 V220 M190 90 H310 L340 60" opacity=".6"/>
          <path d="M50 250 H150 V400 L180 430 H320" opacity=".45"/>
          <path d="M260 150 V300 L300 340 V450" opacity=".45"/>
          <path d="M40 420 H220" opacity=".3"/>
          <circle cx="160" cy="60" r="4.5" fill="#d4a017" stroke="none"/>
          <circle cx="190" cy="220" r="4.5" fill="#2563eb" stroke="none"/>
          <circle cx="340" cy="60" r="4.5" fill="#2563eb" stroke="none"/>
          <circle cx="150" cy="400" r="4.5" fill="#d4a017" stroke="none"/>
          <circle cx="260" cy="150" r="4.5" fill="#2563eb" stroke="none"/>
          <circle cx="300" cy="340" r="4.5" fill="#d4a017" stroke="none"/>
        </svg>
        <div class="about-image-value">82</div>
        <div class="about-image-label">Progetti EU attivi RSE</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ MODULI ═══════ -->
<section class="section" id="moduli" style="background: var(--bg-alt);">
  <div class="container">
    <div class="reveal">
      <div class="section-eyebrow">Moduli</div>
      <h2 class="section-title">Un sistema operativo,<br>non un tool in più</h2>
      <p class="section-desc">Sei moduli integrati che coprono l'intero ciclo di vita di una gara: dalla scoperta dell'opportunità alla consegna della proposta finale.</p>
    </div>
    <div class="services-grid">

      <div class="service-card reveal">
        <div class="service-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="16" cy="16" r="12"/><circle cx="16" cy="16" r="7"/><circle cx="16" cy="16" r="1.8" fill="currentColor"/><path d="M16 16L25.5 8.5" stroke-linecap="round"/><circle cx="22" cy="11" r="1.4" fill="currentColor" stroke="none"/></svg></div>
        <h3 class="service-name">Radar AI</h3>
        <p class="service-desc">Connettori automatici a 16+ fonti EU e Italia, con filtro AI semantico che seleziona solo i bandi rilevanti per il mandato di ricerca RSE.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3h10l6 6v20H9z"/><path d="M19 3v6h6"/><path d="M12 17h8M12 21h8M12 25h5"/></svg></div>
        <h3 class="service-name">Parser Disciplinare</h3>
        <p class="service-desc">Upload del bando → estrazione automatica di criteri di valutazione, punteggi e scadenze in 3 minuti, senza lettura manuale del PDF.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 28V6M4 28h24"/><rect x="8" y="18" width="4" height="10"/><rect x="15" y="12" width="4" height="16"/><rect x="22" y="8" width="4" height="20"/><path d="M9 9l3 3 5-6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3 class="service-name">Gap Analyzer</h3>
        <p class="service-desc">RAG engine che confronta la documentazione tecnica RSE con i criteri del bando e restituisce uno score per ogni sub-criterio, gap evidenziati.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="5" cy="16" r="3"/><circle cx="16" cy="6" r="3"/><circle cx="16" cy="26" r="3"/><circle cx="27" cy="16" r="3"/><path d="M8 16h5M19 16h5M13.5 8.5l1.2 5M13.5 23.5l1.2-5"/></svg></div>
        <h3 class="service-name">Agente Autonomo</h3>
        <p class="service-desc">Pipeline a 6 step — Parse → Research → Draft → Gap Check → Iterate → Output — con supervisione umana obbligatoria prima di ogni invio.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 26l1.6-5.2A11 11 0 1112 27z"/><circle cx="11.5" cy="16" r="1.3" fill="currentColor" stroke="none"/><circle cx="16.5" cy="16" r="1.3" fill="currentColor" stroke="none"/><circle cx="21.5" cy="16" r="1.3" fill="currentColor" stroke="none"/></svg></div>
        <h3 class="service-name">SARA WhatsApp</h3>
        <p class="service-desc">Assistente gare 24/7 via WhatsApp: alert scadenze, stato pipeline e gap score a portata di messaggio, per tutto il team.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="12" height="10" rx="1"/><rect x="17" y="3" width="12" height="6" rx="1"/><rect x="17" y="11" width="12" height="14" rx="1"/><rect x="3" y="15" width="12" height="10" rx="1"/></svg></div>
        <h3 class="service-name">Dashboard Unificata</h3>
        <p class="service-desc">Vista aggregata su tutte le gare RSE: KPI, scadenze in avvicinamento, gap score, stato pipeline — un solo pannello di controllo.</p>
      </div>

    </div>
  </div>
</section>

<!-- ═══════ DASHBOARD DEMO ═══════ -->
<section class="section" id="dashboard-demo">
  <div class="container">
    <div class="reveal">
      <div class="section-eyebrow">Dashboard</div>
      <h2 class="section-title">Il portfolio gare<br>a colpo d'occhio</h2>
      <p class="section-desc">Vista aggregata su scadenze, importi e gap score. Esempio con 8 gare rappresentative del portfolio RSE.</p>
    </div>
    <div class="dash-wrap reveal scroll-x">
      <table class="dash-table">
        <thead>
          <tr>
            <th>Gara</th>
            <th>Programma</th>
            <th>Importo</th>
            <th>Scadenza</th>
            <th>Stato</th>
            <th>Gap Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="dash-name">TwinEU Phase 2</td>
            <td>Horizon Europe</td>
            <td>€1.2M</td>
            <td>15/10/2026</td>
            <td><span class="pill pill-lavorazione">In lavorazione</span></td>
            <td class="dash-score">8.2/10</td>
          </tr>
          <tr>
            <td class="dash-name">GRID-SAFE Storage</td>
            <td>LIFE Programme</td>
            <td>€680K</td>
            <td>30/11/2026</td>
            <td><span class="pill pill-presentata">Presentata</span></td>
            <td class="dash-score">7.5/10</td>
          </tr>
          <tr>
            <td class="dash-name">RdS 2025-27 Smart Grid</td>
            <td>ARERA/MASE</td>
            <td>€4.8M</td>
            <td>22/09/2026</td>
            <td><span class="pill pill-lavorazione">In lavorazione</span></td>
            <td class="dash-score">9.1/10</td>
          </tr>
          <tr>
            <td class="dash-name">Alpine H2 Corridor</td>
            <td>Interreg Alpine</td>
            <td>€420K</td>
            <td>18/12/2026</td>
            <td><span class="pill pill-nuova">Nuova</span></td>
            <td class="dash-score">—</td>
          </tr>
          <tr>
            <td class="dash-name">PNRR M2C2 Storage</td>
            <td>MiSE</td>
            <td>€2.1M</td>
            <td>05/10/2026</td>
            <td><span class="pill pill-aggiudicata">Aggiudicata</span></td>
            <td class="dash-score">8.8/10</td>
          </tr>
          <tr>
            <td class="dash-name">Nuclear Decom Safety</td>
            <td>Horizon Europe</td>
            <td>€890K</td>
            <td>—</td>
            <td><span class="pill pill-aggiudicata">Aggiudicata</span></td>
            <td class="dash-score">8.4/10</td>
          </tr>
          <tr>
            <td class="dash-name">Clean Energy Islands</td>
            <td>Innovation Fund</td>
            <td>€1.5M</td>
            <td>15/01/2027</td>
            <td><span class="pill pill-nuova">Nuova</span></td>
            <td class="dash-score">—</td>
          </tr>
          <tr>
            <td class="dash-name">E-Mobility Grid Impact</td>
            <td>CETPartnership</td>
            <td>€350K</td>
            <td>20/11/2026</td>
            <td><span class="pill pill-lavorazione">In lavorazione</span></td>
            <td class="dash-score">7.9/10</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="dash-note reveal">Dati dimostrativi — configurabile su portfolio reale RSE.</p>
  </div>
</section>

<!-- ═══════ CONNETTORI ═══════ -->
<section class="section" id="connettori" style="background: var(--bg-alt);">
  <div class="container">
    <div class="reveal">
      <div class="section-eyebrow">Connettori</div>
      <h2 class="section-title">16+ fonti,<br>un unico radar</h2>
      <p class="section-desc">Copertura europea e italiana su tutti i canali rilevanti per il mandato di ricerca energetica di RSE.</p>
    </div>
    <div class="conn-grid">
      <div class="reveal">
        <div class="conn-col-title"><span class="flag">🇪🇺</span> Fonti EU</div>
        <div class="conn-list">
          <div class="conn-row"><span class="conn-name">TED — Tenders Electronic Daily</span><span class="conn-freq daily">Daily</span></div>
          <div class="conn-row"><span class="conn-name">CORDIS</span><span class="conn-freq weekly">Weekly</span></div>
          <div class="conn-row"><span class="conn-name">EC Funding &amp; Tenders Portal</span><span class="conn-freq daily">Daily</span></div>
          <div class="conn-row"><span class="conn-name">Innovation Fund</span><span class="conn-freq weekly">Weekly</span></div>
          <div class="conn-row"><span class="conn-name">LIFE Programme</span><span class="conn-freq weekly">Weekly</span></div>
          <div class="conn-row"><span class="conn-name">CEF Energy</span><span class="conn-freq weekly">Weekly</span></div>
          <div class="conn-row"><span class="conn-name">CETPartnership</span><span class="conn-freq weekly">Weekly</span></div>
          <div class="conn-row"><span class="conn-name">Interreg</span><span class="conn-freq weekly">Weekly</span></div>
        </div>
      </div>
      <div class="reveal">
        <div class="conn-col-title"><span class="flag">🇮🇹</span> Fonti Italia</div>
        <div class="conn-list">
          <div class="conn-row"><span class="conn-name">ANAC</span><span class="conn-freq daily">Daily</span></div>
          <div class="conn-row"><span class="conn-name">SimoG</span><span class="conn-freq weekly">Weekly</span></div>
          <div class="conn-row"><span class="conn-name">MePA / CONSIP</span><span class="conn-freq weekly">Weekly</span></div>
          <div class="conn-row"><span class="conn-name">MASE</span><span class="conn-freq daily">Daily</span></div>
          <div class="conn-row"><span class="conn-name">MiSE / MIMIT</span><span class="conn-freq daily">Daily</span></div>
          <div class="conn-row"><span class="conn-name">GSE</span><span class="conn-freq weekly">Weekly</span></div>
          <div class="conn-row"><span class="conn-name">ARERA</span><span class="conn-freq weekly">Weekly</span></div>
          <div class="conn-row"><span class="conn-name">Regione Lombardia</span><span class="conn-freq daily">Daily</span></div>
        </div>
      </div>
    </div>
    <div class="conn-banner reveal">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
      <span>Filtro AI semantico → solo bandi rilevanti per RSE arrivano in dashboard.</span>
    </div>
  </div>
</section>

<!-- ═══════ COME FUNZIONA ═══════ -->
<section class="section" id="come-funziona">
  <div class="container">
    <div class="reveal">
      <div class="section-eyebrow">Come funziona</div>
      <h2 class="section-title">Dal disciplinare alla proposta,<br>un percorso tracciato</h2>
    </div>
    <div class="flow-grid">
      <div class="flow-step reveal">
        <div class="flow-num">01</div>
        <h3 class="flow-name">Upload</h3>
        <p class="flow-desc">Il team carica il disciplinare di gara nella piattaforma, in qualsiasi formato lo riceva.</p>
      </div>
      <div class="flow-step reveal">
        <div class="flow-num">02</div>
        <h3 class="flow-name">Parsing AI</h3>
        <p class="flow-desc">Estrazione automatica di criteri di valutazione, punteggi e scadenze in pochi minuti.</p>
      </div>
      <div class="flow-step reveal">
        <div class="flow-num">03</div>
        <h3 class="flow-name">Vector Search</h3>
        <p class="flow-desc">Ricerca semantica nella knowledge base RSE: progetti pregressi, CV, referenze tecniche.</p>
      </div>
      <div class="flow-step reveal">
        <div class="flow-num">04</div>
        <h3 class="flow-name">Draft</h3>
        <p class="flow-desc">Bozza di risposta generata per ogni sub-criterio, pronta per la revisione del team.</p>
      </div>
      <div class="flow-step reveal">
        <div class="flow-num">05</div>
        <h3 class="flow-name">Gap Analysis</h3>
        <p class="flow-desc">Score 0-10 per sub-criterio, gap evidenziati rispetto alla documentazione disponibile.</p>
      </div>
      <div class="flow-step reveal">
        <div class="flow-num">06</div>
        <h3 class="flow-name">Iterate</h3>
        <p class="flow-desc">Ciclo automatico di miglioramento sui gap sotto soglia (&lt;8/10), fino ad approvazione umana finale.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ SARA WHATSAPP ═══════ -->
<section class="sara-section" id="sara">
  <div class="container">
    <div class="reveal">
      <div class="section-eyebrow" style="color: var(--gold);">SARA</div>
      <h2 class="section-title" style="color: var(--hero-text);">Il vostro assistente gare,<br>sempre reperibile</h2>
      <p class="section-desc" style="color: var(--hero-muted);">SARA vive su WhatsApp e risponde a tutto il team RSE in tempo reale, senza dover aprire la dashboard.</p>
    </div>
    <div class="sara-grid">
      <div class="wa-mock reveal">
        <div class="wa-mock-head">
          <div class="av">S</div>
          <div>
            <div class="nm">SARA · TenderOS</div>
            <div class="st">● online</div>
          </div>
        </div>
        <div class="wa-bubble user"><span class="who">Tu</span>Stato gara TwinEU?</div>
        <div class="wa-bubble sara"><span class="who">SARA</span>TwinEU Phase 2 (Digital Twin Grid) — gap score 8.2/10. Scadenza 15/10/2026 (41 giorni). 2 sub-criteri sotto soglia.</div>
        <div class="wa-bubble user"><span class="who">Tu</span>Scadenze questa settimana?</div>
        <div class="wa-bubble sara"><span class="who">SARA</span>1 gara critica: RdS 2025-27 Smart Grid scade 22/09 — 18 giorni. Score 9.1/10, pronta per revisione finale.</div>
      </div>
      <div class="sara-features reveal">
        <div class="sara-feature">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></div>
          <div><h4>Disponibile 24/7</h4><p>Nessun orario ufficio: SARA risponde in ogni momento, anche fuori dai turni del team.</p></div>
        </div>
        <div class="sara-feature">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M12 8v5l3 2"/></svg></div>
          <div><h4>Alert automatici 15/7/3 giorni</h4><p>Promemoria scadenze scalati su tre soglie, così nessuna gara arriva mai all'ultimo momento.</p></div>
        </div>
        <div class="sara-feature">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h6"/></svg></div>
          <div><h4>3 livelli di autonomia</h4><p>Assistito, semi-autonomo, autonomo con approvazione finale sempre obbligatoria.</p></div>
        </div>
        <div class="sara-feature">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h4l3-8 4 16 3-8h2"/></svg></div>
          <div><h4>Escalation intelligente</h4><p>Quando serve una decisione umana, SARA la segnala al referente giusto — non decide da sola.</p></div>
        </div>
        <div class="sara-feature">
          <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v12H8l-4 4V4z"/><path d="M8 9h8M8 13h5"/></svg></div>
          <div><h4>Log completo</h4><p>Ogni azione, ogni risposta, ogni decisione AI è tracciata e consultabile per audit interno.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ ROI & PRICING ═══════ -->
<section class="section" id="pricing">
  <div class="container">
    <div class="reveal">
      <div class="section-eyebrow">ROI &amp; Pricing</div>
      <h2 class="section-title">Un sistema operativo enterprise,<br>non una linea di spesa</h2>
    </div>
    <div class="roi-grid">
      <div class="roi-card cost reveal">
        <h3>Il costo di NON averlo</h3>
        <ul class="roi-list">
          <li><span class="mk">✕</span> Una gara persa vale, in media, tra €500K e €2M di funding non acquisito</li>
          <li><span class="mk">✕</span> ~40 ore/persona per preparare ogni singola proposta, a mano</li>
          <li><span class="mk">✕</span> 3-5 persone impegnate su lavoro ripetitivo di ricerca ed estrazione</li>
          <li><span class="mk">✕</span> Rischio concreto di scadenze mancate su fonti meno presidiate</li>
        </ul>
      </div>
      <div class="roi-card gain reveal">
        <h3>Con TenderOS</h3>
        <ul class="roi-list">
          <li><span class="mk">✓</span> -70% tempo di preparazione per proposta</li>
          <li><span class="mk">✓</span> Zero scadenze mancate, monitoraggio 24/7 su 16+ fonti</li>
          <li><span class="mk">✓</span> +15-25% punteggio tecnico grazie alla gap analysis sistematica</li>
          <li><span class="mk">✓</span> Team liberato per il lavoro di ricerca ad alto valore, non copia-incolla</li>
        </ul>
      </div>
    </div>

    <div class="pricing-card reveal">
      <div>
        <div class="pricing-eyebrow">Piattaforma TenderOS</div>
        <div class="pricing-amount">€2.500<small> /mese</small></div>
        <div class="pricing-setup">Piattaforma completa, fino a <strong>25 utenti</strong> · + <strong>€7.500</strong> setup una tantum (onboarding, integrazione, migrazione dati)</div>
        <a href="#contatti" class="btn-primary">Richiedi Demo</a>
      </div>
      <div class="pricing-tco">
        <div class="pricing-tco-row them">
          <span class="lbl">Tool frammentati (TCO equivalente)</span>
          <span class="val">€12-18K<small>/mese</small></span>
        </div>
        <div class="pricing-tco-row us">
          <span class="lbl">TenderOS — piattaforma unificata</span>
          <span class="val">€2.500<small>/mese</small></span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ FAQ ═══════ -->
<section class="section" id="faq" style="background: var(--bg-alt);">
  <div class="container">
    <div class="reveal">
      <div class="section-eyebrow">Domande frequenti</div>
      <h2 class="section-title">Risposte chiare<br>per un ente di ricerca</h2>
    </div>
    <div class="faq-list">

      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">
          Come si integra con i sistemi esistenti di RSE?
          <svg class="arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div class="faq-a"><div class="faq-a-inner">TenderOS si integra via API REST con i sistemi documentali esistenti — non richiede migrazione dati. I documenti di gara e la knowledge base tecnica restano dove sono e vengono indicizzati in sola lettura dal motore RAG per la gap analysis.</div></div>
      </div>

      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">
          Quanto tempo richiede l'onboarding?
          <svg class="arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div class="faq-a"><div class="faq-a-inner">Setup piattaforma in 2-3 settimane: configurazione dei connettori sulle 16+ fonti, caricamento della knowledge base RSE (referenze progetti, competenze, casi studio) e due sessioni di training per il team. Operativo dalla quarta settimana.</div></div>
      </div>

      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">
          I dati sono sicuri?
          <svg class="arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div class="faq-a"><div class="faq-a-inner">Infrastruttura in UE, crittografia in transito e a riposo, nessun dato RSE utilizzato per addestrare modelli di terze parti. Accesso RBAC per utente e per progetto, log di audit completo su ogni azione, conforme GDPR — requisito imprescindibile trattando documentazione di progetti EU sensibili.</div></div>
      </div>

      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">
          Serve formazione per il team?
          <svg class="arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div class="faq-a"><div class="faq-a-inner">L'interfaccia è pensata per ricercatori e project manager, non per tecnici. Onboarding con due sessioni da 90 minuti, referente dedicato nei primi 30 giorni, documentazione e video tutorial inclusi nel setup.</div></div>
      </div>

      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">
          Possiamo provare TenderOS prima di impegnarci?
          <svg class="arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div class="faq-a"><div class="faq-a-inner">Sì: organizziamo una demo live personalizzata su 2-3 gare reali (o storiche) del portfolio RSE, con gap analysis dimostrativa gratuita su un disciplinare a scelta del team. Nessun impegno prima della firma del contratto.</div></div>
      </div>

      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false">
          Come gestite la supervisione umana?
          <svg class="arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div class="faq-a"><div class="faq-a-inner">L'agente autonomo non invia mai nulla senza revisione umana: ogni bozza resta in stato "da rivedere" finché un ricercatore o PM non la approva. Tre livelli di autonomia configurabili (assistito, semi-autonomo, autonomo con approvazione finale obbligatoria) e log completo di ogni azione AI per audit interno.</div></div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════ CONTATTI ═══════ -->
<section class="contact-section" id="contatti">
  <div class="container">
    <div class="reveal">
      <div class="section-eyebrow" style="color: var(--gold);">Contatti</div>
      <h2 class="section-title" style="color: var(--hero-text);">Parliamo del<br>portfolio gare RSE</h2>
    </div>
    <div class="contact-grid">
      <form class="contact-form reveal" onsubmit="event.preventDefault(); this.querySelector('.btn-submit').textContent='Inviato ✓'; this.querySelector('.btn-submit').style.background='#25d366';">
        <div class="form-row">
          <div class="form-field">
            <label for="name">Nome e cognome</label>
            <input type="text" id="name" required placeholder="Mario Rossi">
          </div>
          <div class="form-field">
            <label for="role">Ruolo</label>
            <input type="text" id="role" placeholder="Project Manager, Ricercatore...">
          </div>
        </div>
        <div class="form-field">
          <label for="email">Email</label>
          <input type="email" id="email" required placeholder="mario.rossi@rse-web.it">
        </div>
        <div class="form-field">
          <label for="topic">Motivo del contatto</label>
          <select id="topic">
            <option value="">Seleziona un'opzione</option>
            <option>Demo live</option>
            <option>Informazioni commerciali</option>
            <option>Partnership</option>
            <option>Altro</option>
          </select>
        </div>
        <div class="form-field">
          <label for="msg">Messaggio</label>
          <textarea id="msg" placeholder="Raccontateci il vostro portfolio gare, le fonti che monitorate oggi e le principali criticità..."></textarea>
        </div>
        <button type="submit" class="btn-submit">Invia richiesta</button>
      </form>
      <div class="contact-info reveal">
        <h3>Referente</h3>
        <div class="contact-line">
          <svg class="ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="6" r="3.5"/><path d="M3 18c0-4 3-6 7-6s7 2 7 6"/></svg>
          <div>Alessandro Binda</div>
        </div>
        <div class="contact-line">
          <svg class="ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"/><path d="M2 5l8 6 8-6"/></svg>
          <div><a href="mailto:ale@get-scala.com">ale@get-scala.com</a></div>
        </div>
        <div class="contact-line">
          <svg class="ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="8"/><path d="M6 10h8M10 6v8"/></svg>
          <div><a href="https://get-scala.com" target="_blank" rel="noopener">get-scala.com</a></div>
        </div>
        <div class="contact-line">
          <svg class="ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="8"/><path d="M10 5v5l3 3"/></svg>
          <div>Rispondiamo entro <span style="color: var(--gold);">24 ore lavorative</span></div>
        </div>
        <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.08);">
          <div style="font-size: .72rem; letter-spacing: .15em; text-transform: uppercase; color: var(--hero-muted); margin-bottom: 12px;">S.C.A.L.A. AI OS · Enterprise</div>
          <div style="font-size: .85rem; color: var(--hero-muted); line-height: 1.6;">TenderOS è un modulo verticale della piattaforma S.C.A.L.A. AI OS — l'AI Operating System enterprise per la gestione di processi complessi.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ FOOTER ═══════ -->
<footer class="footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-copy">© 2026 S.C.A.L.A. AI OS · get-scala.com</div>
      <div class="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Cookie</a>
        <a href="#hero">Torna su</a>
      </div>
    </div>
  </div>
</footer>

<!-- ═══════ WHATSAPP FAB ═══════ -->
<a href="https://wa.me/393518891442?text=Buongiorno%2C%20vorrei%20richiedere%20una%20demo%20di%20TenderOS%20per%20RSE." class="wa-fab" target="_blank" rel="noopener" aria-label="Scrivici su WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>
`

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function RseTenderosPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const cleanups: Array<() => void> = []

    // Nav scroll
    const nav = root.querySelector<HTMLElement>('#nav')
    const onScroll = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 60)
    }
    if (nav) {
      window.addEventListener('scroll', onScroll, { passive: true })
      cleanups.push(() => window.removeEventListener('scroll', onScroll))
    }

    // Mobile toggle
    const toggle = root.querySelector<HTMLElement>('#navToggle')
    const links = root.querySelector<HTMLElement>('#navLinks')
    const onToggleClick = () => {
      const open = links?.classList.toggle('open')
      toggle?.setAttribute('aria-expanded', String(!!open))
    }
    if (toggle && links) {
      toggle.addEventListener('click', onToggleClick)
      cleanups.push(() => toggle.removeEventListener('click', onToggleClick))

      const linkEls = links.querySelectorAll('a')
      const onLinkClick = () => links.classList.remove('open')
      linkEls.forEach((a) => a.addEventListener('click', onLinkClick))
      cleanups.push(() => linkEls.forEach((a) => a.removeEventListener('click', onLinkClick)))
    }

    // Reveal on scroll
    const reveals = root.querySelectorAll('.reveal')
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            revealObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    reveals.forEach((el) => revealObs.observe(el))
    cleanups.push(() => revealObs.disconnect())

    // Counter animation (supports data-prefix and data-suffix)
    const counters = root.querySelectorAll<HTMLElement>('[data-target]')
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target as HTMLElement
          const target = parseInt(el.dataset.target || '0', 10)
          const prefix = el.dataset.prefix || ''
          const suffix = el.dataset.suffix || ''
          const dur = 1800
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            el.textContent = prefix + Math.round(target * ease) + suffix
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          counterObs.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    counters.forEach((el) => counterObs.observe(el))
    cleanups.push(() => counterObs.disconnect())

    // FAQ accordion
    const faqButtons = root.querySelectorAll<HTMLElement>('.faq-q')
    const onFaqClick = (btn: HTMLElement) => () => {
      const item = btn.parentElement
      const open = item?.classList.contains('open')
      root.querySelectorAll('.faq-item.open').forEach((i) => {
        i.classList.remove('open')
        i.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false')
      })
      if (!open && item) {
        item.classList.add('open')
        btn.setAttribute('aria-expanded', 'true')
      }
    }
    const faqHandlers: Array<[HTMLElement, () => void]> = []
    faqButtons.forEach((btn) => {
      const handler = onFaqClick(btn)
      btn.addEventListener('click', handler)
      faqHandlers.push([btn, handler])
    })
    cleanups.push(() => faqHandlers.forEach(([btn, handler]) => btn.removeEventListener('click', handler)))

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import './immobilcapital.css'

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'S.C.A.L.A. AI OS',
  alternateName: 'PropertyOS',
  description:
    'PropertyOS è il verticale AI di S.C.A.L.A. per agenzie immobiliari luxury: CRM, portfolio dinamico, matching AI, SARA H24 in IT/EN/ES, booking visite con Koro Calendar.',
  url: 'https://get-scala.com',
  email: 'ale@get-scala.com',
  sameAs: ['https://get-scala.com'],
  makesOffer: {
    '@type': 'Offer',
    name: 'PropertyOS — Piattaforma AI per immobiliare luxury',
    priceCurrency: 'EUR',
    price: '797',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '797',
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
      name: 'Quanto tempo richiede il setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quattro settimane: SARA attiva su WhatsApp dalla prima, il sistema di booking visite dalla seconda, il CRM configurato dalla terza, handover completo alla quarta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Il sistema si integra con il mio sito web attuale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì: book.get-scala.com fornisce un widget di prenotazione visite che si integra nel sito esistente con un solo snippet — il vostro fornitore branding lo installa in 5 minuti.',
      },
    },
    {
      '@type': 'Question',
      name: 'SARA risponde in inglese ai clienti internazionali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì. SARA è configurata in IT/EN/ES e calibrata sul tono luxury di ImmobilCapital. Un buyer da Dubai che scrive alle 23 riceve una risposta professionale in inglese in 30 secondi.",
      },
    },
    {
      '@type': 'Question',
      name: 'Posso controllare cosa fa l\'agente autonomo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì, con Autonomy Gate v2: livello OBSERVE (ogni azione va approvata), SEMI-AUTO (azioni a basso rischio eseguite, altre in coda), FULL-AUTO. Si sceglie il livello e si cambia in qualsiasi momento.",
      },
    },
    {
      '@type': 'Question',
      name: 'Cosa succede se ho bisogno di aiuto dopo il go-live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tre livelli: SARA Support in piattaforma (risponde H24 sul setup specifico ImmobilCapital), ticket formale con SLA 4h, escalation diretta ad Ale via WhatsApp per urgenze e personalizzazioni.',
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
      S.C.A.L.A.<span class="nav-logo-sep">/</span><span class="nav-logo-sub">PropertyOS</span>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="#piattaforma">Piattaforma</a>
      <a href="#sara">SARA</a>
      <a href="#roi">ROI</a>
      <a href="#portali">Portali</a>
      <a href="#pricing">Pricing</a>
      <a href="#contatti" class="nav-cta">Chiudi a settembre</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ═══════ HERO ═══════ -->
<section class="hero" id="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-grid" aria-hidden="true"></div>

  <div class="hero-eyebrow">PropertyOS — Preparato per ImmobilCapital</div>

  <h1>Il tuo portfolio luxury,<br><em>gestito da un agente AI</em><br>mentre dormi.</h1>

  <p class="hero-sub">
    Da Milano a Dubai, da Verbier a Miami: PropertyOS centralizza ogni immobile, ogni lead, ogni trattativa in un'unica piattaforma. SARA risponde H24 in italiano, inglese e spagnolo. L'agente autonomo qualifica, abbina, prenota — anche alle 23:47 quando i buyer internazionali scrivono.
  </p>

  <div class="hero-actions">
    <a href="#demo" class="btn-primary">Accedi alla demo live →</a>
    <a href="#pricing" class="btn-secondary">Vedi l'offerta settembre</a>
  </div>

  <div class="hero-stats">
    <div class="hstat">
      <div class="hstat-val">H24</div>
      <div class="hstat-label">SARA risponde</div>
    </div>
    <div class="hstat">
      <div class="hstat-val">30"</div>
      <div class="hstat-label">risposta media</div>
    </div>
    <div class="hstat">
      <div class="hstat-val">IT/EN/ES</div>
      <div class="hstat-label">lingue attive</div>
    </div>
    <div class="hstat hstat-roi">
      <div class="hstat-val">1×</div>
      <div class="hstat-label">closing ripaga tutto</div>
    </div>
  </div>
</section>

<!-- ═══════ PIATTAFORMA ═══════ -->
<section id="piattaforma">
  <div class="wrap">
    <div class="section-eyebrow">PropertyOS — 22 moduli</div>
    <h2 class="section-title">Ogni immobile. Ogni lead.<br>Ogni trattativa. In un posto solo.</h2>
    <p class="section-desc">Sostituisce CRM separato, firma digitale, rendering, analisi di mercato, calendario visite, report mensili. Tutto calibrato per il mercato luxury multi-paese.</p>

    <div class="module-grid">
      <div class="module-card">
        <span class="module-icon">🏛️</span>
        <h3>Portfolio Dinamico Multi-mercato</h3>
        <p>IT / Dubai / CH / USA in un'unica dashboard. Filtri per mercato, tipologia, prezzo, metratura. Aggiornamento in autonomia — importiamo noi il portfolio esistente nel setup.</p>
        <span class="tag">Multi-valuta EUR/USD/CHF/AED</span>
      </div>
      <div class="module-card">
        <span class="module-icon">🎯</span>
        <h3>CRM + Pipeline Visuale</h3>
        <p>Ogni lead, ogni trattativa, ogni nota archiviata e trovabile in 5 secondi. Pipeline kanban: dalla prima richiesta al compromesso. Stage personalizzati per il workflow ImmobilCapital.</p>
        <span class="tag">Sostituisce Salesforce €200-400/mese</span>
      </div>
      <div class="module-card">
        <span class="module-icon">🤖</span>
        <h3>Matching AI Lead ↔ Immobile</h3>
        <p>Il sistema propone ai lead nel CRM gli immobili corrispondenti ai loro criteri — anche quelli che non hanno chiesto. Budget, zona, tipologia, tempi: abbinamento automatico.</p>
        <span class="tag chip-new">Agente autonomo</span>
      </div>
      <div class="module-card">
        <span class="module-icon">📄</span>
        <h3>NDA Automatico + Firma Digitale</h3>
        <p>Generazione e firma in 2 minuti. Zero avvocati, zero carta, zero attese. Documenti archiviati per ogni immobile e cliente, con ricerca full-text.</p>
        <span class="tag">Integrato — no add-on</span>
      </div>
      <div class="module-card">
        <span class="module-icon">🖼️</span>
        <h3>AI Render — 20 rendering/mese</h3>
        <p>Rendering fotorealistici da foto reali: utile per immobili in ristrutturazione o da valorizzare. A mercato: €50-100 per render, 20/mese = €1.000–2.000 di valore incluso nel canone.</p>
        <span class="tag chip-inc">Incluso nel canone</span>
      </div>
      <div class="module-card">
        <span class="module-icon">📊</span>
        <h3>Brand Studio + Analisi Concorrenza</h3>
        <p>Brochure, one-pager, email template con il vostro brand. Più: report trimestrale su Engel&amp;Völkers, Lionard, RE/MAX Luxury nei vostri mercati chiave.</p>
        <span class="tag">Quarterly report incluso</span>
      </div>
      <div class="module-card">
        <span class="module-icon">📈</span>
        <h3>Dashboard Direttore</h3>
        <p>KPI cross-mercato in tempo reale: lead generati per paese, tasso conversione, pipeline per valore, commissioni maturate. Reportistica mensile automatica.</p>
        <span class="tag">10 utenti inclusi</span>
      </div>
      <div class="module-card">
        <span class="module-icon">🔍</span>
        <h3>Valutazione AI Immobile</h3>
        <p>Stima comparativa automatica per zona e tipologia. Utile quando un potenziale acquirente chiede "quanto vale?" — risposta in 60 secondi, dati aggiornati.</p>
        <span class="tag">Integrazione LandIQ</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ SARA ═══════ -->
<section id="sara">
  <div class="wrap">
    <div class="section-eyebrow">SARA — PropertyOS Agent</div>
    <h2 class="section-title">Non un chatbot.<br>Un agente che <em>agisce</em>.</h2>
    <p class="section-desc">Dall'agosto 2026, SARA è passata da assistente conversazionale ad agente autonomo: non risponde solo, esegue azioni reali nel CRM e nell'agenda — con il suo controllo su ogni decisione.</p>

    <div class="sara-grid">
      <div>
        <div class="sara-panel">
          <div class="sara-panel-header">
            <div class="dots">
              <div class="dot dot-r"></div>
              <div class="dot dot-y"></div>
              <div class="dot dot-g"></div>
            </div>
            <span class="sara-panel-title">SARA · WhatsApp · 23:47</span>
          </div>
          <div class="sara-chat">
            <span class="msg-meta">Ahmed Al-Rashid · Dubai</span>
            <div class="msg msg-in">Hi, I'm looking for a 3BR luxury apartment in Milan, budget around 2.5M EUR, ready within 6 months. Can you help?</div>
            <div class="msg msg-out">Buonasera Ahmed, sono SARA di ImmobilCapital. Ho trovato 3 immobili che corrispondono esattamente al suo profilo. Le invio le schede ora.</div>
            <div class="msg msg-in">Great, send them. Also, can we schedule a visit for next week?</div>
            <div class="msg msg-out">Perfetto. Ho verificato la disponibilità e ho liberi mercoledì 17/9 alle 10:00 o giovedì 18/9 alle 15:30. Quale preferisce? La invito all'agenda e invio la conferma.</div>
            <span class="msg-meta">Visita prenotata · CRM aggiornato · PDF inviati — automatico</span>
          </div>
        </div>
      </div>

      <div>
        <p style="font-size:15px; color:var(--c-muted); line-height:1.7; margin-bottom:28px;">
          Un buyer da Dubai scrive alle 23:47. SARA non solo risponde in inglese: <strong style="color:var(--c-white);">qualifica il lead, abbina i 3 immobili giusti, invia le schede PDF, propone due slot di visita e aggiorna il CRM.</strong> Tu la mattina trovi tutto fatto.
        </p>
        <div class="sara-tools">
          <div class="tool-row">
            <span class="tool-name">match_lead_property</span>
            <span class="tool-desc">Matching AI lead↔immobile, PDF inviato automatico</span>
            <span class="tool-risk risk-low">AUTO</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">qualify_lead</span>
            <span class="tool-desc">Score budget / urgenza / motivazione prima che lo veda</span>
            <span class="tool-risk risk-low">AUTO</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">send_listing_pdf</span>
            <span class="tool-desc">Genera e invia scheda PDF dell'immobile via WhatsApp</span>
            <span class="tool-risk risk-low">AUTO</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">schedule_visit</span>
            <span class="tool-desc">Prenota visita sugli slot liberi dell'agente reale</span>
            <span class="tool-risk risk-med">Approvazione</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">follow_up_cold</span>
            <span class="tool-desc">Ricontatta lead inattivo dopo 7 gg — nessun lead perso</span>
            <span class="tool-risk risk-med">Approvazione</span>
          </div>
          <div class="tool-row">
            <span class="tool-name">notify_price_change</span>
            <span class="tool-desc">Ribasso immobile → avvisa tutti i lead interessati</span>
            <span class="tool-risk risk-med">Approvazione</span>
          </div>
        </div>
        <p style="font-size:12.5px; color:var(--c-dim); margin-top:16px; line-height:1.6;">
          Autonomy Gate v2 — sceglie il livello: OBSERVE (tutto in coda approvazione), SEMI-AUTO (azioni basse auto, altre in coda), FULL-AUTO. Cambiabile in qualsiasi momento dalla dashboard.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ BOOKING ═══════ -->
<section id="booking">
  <div class="wrap">
    <div class="section-eyebrow">book.get-scala.com + Koro Calendar</div>
    <h2 class="section-title">Il sito esistente diventa<br>una macchina di <em>appuntamenti</em>.</h2>
    <p class="section-desc">Il suo fornitore branding mantiene il controllo del sito. Noi aggiungiamo un widget di prenotazione visite che porta SARA e il calendario direttamente al cliente — un snippet, 5 minuti di lavoro per loro.</p>

    <div class="booking-highlight">
      <div class="booking-flow">
        <div class="flow-step">
          <div class="flow-num">1</div>
          <div class="flow-content">
            <h4>Lead apre il sito e clicca "Prenota visita"</h4>
            <p>Widget book.get-scala.com embedded — personalizzato con logo e colori ImmobilCapital. Sceglie immobile, data, orario.</p>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">2</div>
          <div class="flow-content">
            <h4>Koro Calendar verifica la disponibilità reale</h4>
            <p>Sincronizzato con l'agenda degli agenti PropertyOS. Mostra solo gli slot effettivamente liberi — zero doppie prenotazioni.</p>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">3</div>
          <div class="flow-content">
            <h4>SARA conferma via WhatsApp in 30 secondi</h4>
            <p>Il lead riceve conferma personalizzata. L'agente riceve notifica nel CRM. Promemoria automatico T-24h e T-1h.</p>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">4</div>
          <div class="flow-content">
            <h4>Il lead entra in pipeline CRM automaticamente</h4>
            <p>Nome, contatto, immobile di interesse, data visita: tutto in PropertyOS, pronto per la mattina.</p>
          </div>
        </div>
      </div>

      <div>
        <p style="font-size:14px; color:var(--c-muted); line-height:1.7; margin-bottom:20px;">
          Soluzione alternativa separata: <strong style="color:var(--c-white);">Calendly/SimplyBook €24–60/mese + Zapier €45/mese + gestione manuale CRM.</strong> Qui è tutto automatico e integrato nel canone.
        </p>
        <div style="background:var(--c-surface); border:1px solid var(--c-border2); border-radius:8px; padding:20px 22px;">
          <p style="font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--c-gold); margin-bottom:12px;">Cosa il lead vede sul vostro sito</p>
          <div style="background:var(--c-raised); border-radius:6px; padding:16px; font-size:13px; color:var(--c-muted);">
            <div style="color:var(--c-white); font-weight:600; margin-bottom:8px;">📅 Prenota una visita</div>
            <div style="margin-bottom:6px;">Immobile: Brera, Milano — €2.800.000</div>
            <div style="margin-bottom:10px;">Scegli data e orario disponibile:</div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <span style="background:var(--c-gold-bg); border:1px solid var(--c-gold-bdr); color:var(--c-gold); padding:5px 12px; border-radius:4px; font-size:12px;">Mer 17/9 · 10:00</span>
              <span style="background:rgba(255,255,255,.04); border:1px solid var(--c-border2); color:var(--c-muted); padding:5px 12px; border-radius:4px; font-size:12px;">Gio 18/9 · 15:30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ ROI ═══════ -->
<section id="roi" class="roi-section">
  <div class="wrap">
    <div class="section-eyebrow">Il conto che conta</div>
    <h2 class="section-title roi-title">Una mediazione in più all'anno.<br><em>Sistema ripagato. Tre volte.</em></h2>

    <div class="roi-hero-box">
      <div class="roi-math">
        <div class="roi-line">
          <span class="roi-label">Commissione media su un immobile luxury (2% su €2.5M)</span>
          <span class="roi-val roi-pos">€ 50.000</span>
        </div>
        <div class="roi-line">
          <span class="roi-label">Investimento totale PropertyOS — 24 mesi</span>
          <span class="roi-val roi-neg">− € 20.128</span>
        </div>
        <div class="roi-divider"></div>
        <div class="roi-line roi-result-line">
          <span class="roi-label"><strong>Utile netto con 1 solo closing aggiuntivo</strong></span>
          <span class="roi-val roi-final">+ € 29.872</span>
        </div>
      </div>
      <p class="roi-note">1 solo immobile chiuso in più nei prossimi 24 mesi — che SARA ha catturato di notte mentre dormivi — e il sistema è ripagato per intero. Dal secondo closing in avanti: profitto puro.</p>
    </div>

    <div class="roi-grid">
      <div class="roi-card">
        <div class="roi-card-icon">🌙</div>
        <h3>Lead persi di notte</h3>
        <p>Un buyer da Dubai scrive alle 23:47. Senza SARA: risposta il giorno dopo, se va bene. Il buyer ha già scritto a Engel&Völkers e Lionard. Con SARA: qualificato, abbinato, scheda inviata, visita proposta — tutto in automatico mentre dormi.</p>
        <div class="roi-card-stat">€80K–160K di commissioni a rischio ogni anno da lead notturni non gestiti</div>
      </div>
      <div class="roi-card">
        <div class="roi-card-icon">📊</div>
        <h3>Il costo dell'inazione</h3>
        <p>2 lead/mese persi per risposta lenta o assente. Con una conversione del 10% (conservativa per luxury) e commissione media €60K: <strong>€144.000/anno che escono dalla tua pipeline</strong> verso i competitor che rispondono prima.</p>
        <div class="roi-card-stat">€144K/anno di commissioni perse = 7× il costo del sistema</div>
      </div>
      <div class="roi-card">
        <div class="roi-card-icon">⚡</div>
        <h3>Breakeven: meno di un mese</h3>
        <p>Il costo mensile del sistema a regime è €797. Una singola visita qualificata che si chiude in compromesso porta €45K–90K di commissione. Il breakeven non si misura in mesi — si misura in una trattativa.</p>
        <div class="roi-card-stat">ROI = pari con 1 closing · puro profitto dal secondo in avanti</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ PORTALI ═══════ -->
<section id="portali" class="portali-section">
  <div class="wrap">
    <div class="section-eyebrow">Multipubblicatore — In arrivo</div>
    <h2 class="section-title">Un annuncio dentro SCALA.<br><em>Tutti i portali fuori.</em></h2>
    <p class="section-desc">Gestisci la pubblicazione su Idealista, Immobiliare.it e tutti i portali luxury da dentro PropertyOS — un click, tutti i canali aggiornati in sincronia. Nessun login multiplo, nessuna scheda da ricopiare a mano.</p>

    <div class="portali-grid">
      <div class="portali-card portali-card-main">
        <div class="portali-logo">🏠</div>
        <div class="portali-name">Idealista</div>
        <div class="portali-status status-coming">In integrazione</div>
      </div>
      <div class="portali-card portali-card-main">
        <div class="portali-logo">🔑</div>
        <div class="portali-name">Immobiliare.it</div>
        <div class="portali-status status-coming">In integrazione</div>
      </div>
      <div class="portali-card">
        <div class="portali-logo">🌍</div>
        <div class="portali-name">LuxuryEstate</div>
        <div class="portali-status status-planned">Pianificato</div>
      </div>
      <div class="portali-card">
        <div class="portali-logo">✈️</div>
        <div class="portali-name">James Edition</div>
        <div class="portali-status status-planned">Pianificato</div>
      </div>
    </div>

    <div class="portali-value-box">
      <div class="pv-row">
        <span class="pv-icon">📍</span>
        <div>
          <strong>Centralizzazione deal multi-mercato</strong>
          <p>Pipeline IT · Dubai · CH · USA in un'unica vista. NDA automatico, CRM unificato, conversazioni SARA per ogni lead — indipendentemente dal portale di provenienza o dal paese dell'immobile.</p>
        </div>
      </div>
      <div class="pv-row">
        <span class="pv-icon">⚙️</span>
        <div>
          <strong>I Founding Partner entrano oggi e usano l'integrazione portali appena è live</strong>
          <p>Chi firma a settembre accede automaticamente alle nuove integrazioni senza costi aggiuntivi. Prezzo bloccato, feature evolutive incluse per tutta la durata del contratto.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ DEMO ═══════ -->
<section id="demo" class="demo-section">
  <div class="wrap">
    <div class="section-eyebrow">Ambiente demo attivo</div>
    <h2 class="section-title">Tocca con mano PropertyOS.<br><em>Dati reali. Nessuna guida.</em></h2>
    <p class="section-desc">L'ambiente demo è già configurato con il profilo ImmobilCapital: 6 immobili luxury (Milano, Dubai, Lugano, Roma, NY, Ginevra), 5 clienti CRM attivi, 5 valutazioni AI e 4 conversazioni SARA. Gira liberamente.</p>

    <div class="demo-card">
      <div class="demo-card-left">
        <div class="demo-badge">
          <span class="demo-dot"></span>
          Ambiente attivo ora
        </div>
        <h3>Accedi a PropertyOS</h3>
        <p>Entra con la tua email aziendale — il sistema ti manda un codice OTP, nessuna password da ricordare.</p>
        <div class="demo-access-steps">
          <div class="das-step">
            <span class="das-num">1</span>
            <span>Apri il link qui sotto</span>
          </div>
          <div class="das-step">
            <span class="das-num">2</span>
            <span>Inserisci <strong>info@immobilcapital.com</strong></span>
          </div>
          <div class="das-step">
            <span class="das-num">3</span>
            <span>Controlla l'email → copia il codice OTP</span>
          </div>
          <div class="das-step">
            <span class="das-num">4</span>
            <span>Sei dentro — gira liberamente</span>
          </div>
        </div>
        <a href="https://app.get-scala.com/demo?token=86dec68217f031c64a980404e344185deb855e17adb00e510f86f956c3e976a6&v=propertyos" target="_blank" rel="noopener noreferrer" class="btn-primary demo-cta">Entra in PropertyOS →</a>
        <p class="demo-note">Hai la guida passo-passo su <a href="https://sites.get-scala.com/demo/andrea" target="_blank">sites.get-scala.com/demo/andrea</a></p>
      </div>
      <div class="demo-card-right">
        <div class="demo-preloaded">
          <div class="demo-preloaded-title">Cosa trovi dentro</div>
          <div class="demo-items">
            <div class="di-row"><span class="di-val">6</span><span class="di-label">immobili IT · Dubai · Lugano · NY · Ginevra</span></div>
            <div class="di-row"><span class="di-val">5</span><span class="di-label">clienti CRM attivi (Ahmed, Dmitri, Francesca, Marcus, Sarah)</span></div>
            <div class="di-row"><span class="di-val">5</span><span class="di-label">valutazioni AI completate con comparabili</span></div>
            <div class="di-row"><span class="di-val">4</span><span class="di-label">conversazioni SARA WhatsApp (Dubai, NDA, visita, investor)</span></div>
            <div class="di-row"><span class="di-val">∞</span><span class="di-label">Annunci → multipubblicatore portali</span></div>
          </div>
        </div>
        <div class="demo-contact">
          <p>Domande mentre giri?</p>
          <a href="mailto:ale@get-scala.com?subject=PropertyOS Demo — ImmobilCapital">ale@get-scala.com</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ PRICING ═══════ -->
<section id="pricing">
  <div class="wrap">
    <div class="section-eyebrow">Investimento</div>
    <h2 class="section-title">Ramp "Founding Partner" —<br>rischio zero, valore immediato.</h2>

    <!-- URGENCY BOX -->
    <div class="urgency-box">
      <div class="urgency-icon">🔒</div>
      <div class="urgency-body">
        <div class="urgency-title">Offerta Founding Partner — solo settembre 2026</div>
        <div class="urgency-list">
          <div class="urgency-item"><span class="ui-check">✓</span> Prezzo bootcamp €497/mese bloccato per 24 mesi — dal prossimo onboarding si parte da €797 dal giorno 1 (<strong>€1.800 di risparmio nei 6 mesi di bootcamp</strong>)</div>
          <div class="urgency-item"><span class="ui-check">✓</span> Setup dilazionato: €1.400 al kickoff + €1.400 al go-live (settimana 4) — nessun cash out prima che il sistema sia live</div>
          <div class="urgency-item"><span class="ui-check">✓</span> Accesso all'integrazione portali (Idealista, Immobiliare.it) inclusa senza costi aggiuntivi al rilascio</div>
          <div class="urgency-item"><span class="ui-check">✓</span> Garanzia KPI 90 giorni — se dopo 3 mesi il tempo di risposta ai lead non scende sotto 60 secondi e il tasso di qualifica non migliora, ne parliamo prima di procedere</div>
          <div class="urgency-item"><span class="ui-check">✓</span> Affiancamento settimanale diretto con Ale per tutta la durata del bootcamp</div>
        </div>
      </div>
    </div>

    <div class="pricing-ramp">
      <div class="ramp-phase">
        <div class="phase-period">Setup · una tantum</div>
        <div>
          <div class="phase-name">Configurazione + Integrazione booking</div>
          <div class="phase-desc">4 settimane: PropertyOS configurato, CRM popolato, SARA attiva su WhatsApp W1, book.get-scala + Koro Calendar live W2, 2 sessioni di formazione, handover completo W4.</div>
          <div class="phase-dilazione">
            <span class="dil-badge">💳 Dilazione inclusa</span>
            <span class="dil-text">€1.400 al kickoff · €1.400 al go-live (W4) — zero anticipo prima che funzioni</span>
          </div>
        </div>
        <div class="phase-price dim">€ 2.800</div>
      </div>
      <div class="ramp-phase">
        <div class="phase-period">Mesi 1–6</div>
        <div>
          <div class="phase-name">Bootcamp Period</div>
          <div class="phase-desc">Tier Core ufficiale: piattaforma completa + SARA + booking, con affiancamento settimanale. Nessuna riduzione di funzionalità — è il tier di partenza di tutti i clienti.</div>
        </div>
        <div>
          <div class="phase-price" style="color:var(--c-teal);">€ 497<small>/mese</small></div>
          <div class="phase-price-note">Founding Partner · solo mesi 1–6 · poi €797</div>
        </div>
      </div>
      <div class="ramp-phase">
        <div class="phase-period">Mesi 7–24</div>
        <div>
          <div class="phase-name">Full Partnership</div>
          <div class="phase-desc">Agente autonomo in modalità scelta (OBSERVE/SEMI-AUTO/FULL-AUTO), 2h/mese evolutive incluse, report concorrenza trimestrale, check-in mensile 30 min con Ale. Portali multipubblicatore attivi.</div>
        </div>
        <div class="phase-price">€ 797<small>/mese</small></div>
      </div>

      <div class="ramp-total">
        <div>
          <div class="ramp-total-label">Totale contratto 24 mesi</div>
          <div style="font-size:12.5px; color:var(--c-muted); margin-top:2px;">€2.800 setup (2 tranche) + €2.982 mesi 1-6 + €14.346 mesi 7-24</div>
        </div>
        <div class="ramp-total-val">€ 20.128</div>
      </div>

      <div style="margin-top:16px; padding:16px 20px; background:var(--c-teal-bg); border:1px solid rgba(46,196,182,.22); border-radius:8px;">
        <p style="font-size:13px; color:var(--c-text); line-height:1.6;">
          <strong style="color:var(--c-teal);">Confronto strumenti separati:</strong> CRM RE €200-400/mese + AI render €1.000-2.000/mese + assistente WA €200-300/mese + booking €70-100/mese + Success Manager €500-800/mese = <strong>€1.970–3.600/mese separato.</strong> Tu paghi €797 con tutto integrato — inclusi portali multipubblicatore.
        </p>
      </div>

      <div style="margin-top:12px; padding:14px 20px; background:rgba(255,255,255,.02); border:1px solid var(--c-border2); border-radius:8px;">
        <p style="font-size:12.5px; color:var(--c-muted); line-height:1.6;">
          Contratto 24 mesi · prezzo bloccato, nessun adeguamento ISTAT · disdetta senza penale attivabile dopo il 6° mese con 60 giorni di preavviso scritto · pagamento esclusivamente via SEPA RID mensile, addebito il 1° del mese · IVA esclusa · WA Business API Meta: add-on €39/mese (costo Meta, non incluso).
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ SUPPORTO ═══════ -->
<section id="supporto">
  <div class="wrap">
    <div class="section-eyebrow">Supporto — Preso per mano</div>
    <h2 class="section-title">Tre livelli.<br>Nessuna domanda senza risposta.</h2>
    <p class="section-desc">Non un call center. Un sistema a tre livelli dove ogni dubbio trova risposta in meno di 30 secondi — o viene escalato direttamente a me.</p>

    <div class="support-levels">
      <div class="support-level">
        <div class="slvl-num">1</div>
        <div>
          <div class="slvl-title">SARA Support in piattaforma — H24</div>
          <div class="slvl-desc">In ogni sezione di PropertyOS: un assistente AI che conosce il setup specifico ImmobilCapital. "Come aggiungo un immobile da Dubai?" → risposta in 30 secondi, sempre contestuale al vostro workflow. Non risponde come un FAQ generico — sa come avete configurato il sistema.</div>
        </div>
      </div>
      <div class="support-level">
        <div class="slvl-num">2</div>
        <div>
          <div class="slvl-title">Ticket formale — SLA 4h risposta, 24h risoluzione</div>
          <div class="slvl-desc">Per problemi tecnici complessi. 1 click dalla piattaforma, tracking in dashboard. Ogni ticket chiuso con nota di risoluzione — mai "dovrebbe funzionare ora" senza spiegazione.</div>
        </div>
      </div>
      <div class="support-level">
        <div class="slvl-num">3</div>
        <div>
          <div class="slvl-title">Ale diretto — WhatsApp + check-in mensile</div>
          <div class="slvl-desc">Per personalizzazioni, urgenze, nuove funzionalità richieste. Incluso: 2h/mese evolutive (quello che chiede, lo sviluppo). Check-in mensile 30 min: review KPI, ottimizzazioni, preview novità in arrivo.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ CONTATTI ═══════ -->
<section id="contatti">
  <div class="wrap">
    <div class="section-eyebrow">Prossimi passi</div>
    <h2 class="section-title">Pronti a chiudere?</h2>
    <p class="section-desc">Il ramp Bootcamp a €497/mese è riservato ai Founding Partner di settembre. Dal prossimo onboarding si parte da €797 dal giorno 1 — senza bootcamp.</p>

    <div class="contact-grid">
      <div class="contact-card contact-card-primary">
        <h3>✍ Firma il contratto online</h3>
        <p>Contratto digitale valido EIDAS — lo firmi in 3 minuti dal link qui sotto. L'addebito RID parte solo dopo la firma. Nessun anticipo, nessun bonifico manuale.</p>
        <a href="/immobilcapital/preventivo" class="btn-primary">Apri preventivo e firma →</a>
      </div>
      <div class="contact-card">
        <h3>🖥️ Accedi alla demo</h3>
        <p>Gira PropertyOS in autonomia — dati reali precaricati. Usa <strong>info@immobilcapital.com</strong> come email di accesso, il codice OTP arriva in casella.</p>
        <a href="https://app.get-scala.com/demo?token=86dec68217f031c64a980404e344185deb855e17adb00e510f86f956c3e976a6&v=propertyos" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="display:inline-block;">Entra in PropertyOS →</a>
      </div>
      <div class="contact-card">
        <h3>📋 Preventivo dettagliato</h3>
        <p>Tutte le voci del canone esplicate voce per voce, setup week-by-week, tabella confronto strumenti separati vs pacchetto SCALA.</p>
        <a href="/immobilcapital/preventivo" class="btn-secondary" style="display:inline-block;">Apri preventivo →</a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ FOOTER ═══════ -->
<footer class="site-footer">
  <div class="wrap">
    <p>S.C.A.L.A. AI OS · <a href="mailto:ale@get-scala.com">ale@get-scala.com</a> · <a href="https://get-scala.com">get-scala.com</a></p>
    <p style="margin-top:6px;">Proposta riservata a ImmobilCapital · settembre 2026 · prezzi IVA esclusa</p>
  </div>
</footer>

`

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function ImmobilCapitalPage() {
  const orgLdRef  = useRef<HTMLScriptElement>(null)
  const faqLdRef  = useRef<HTMLScriptElement>(null)

  useEffect(() => {
    if (orgLdRef.current)  orgLdRef.current.textContent  = JSON.stringify(orgJsonLd)
    if (faqLdRef.current)  faqLdRef.current.textContent  = JSON.stringify(faqJsonLd)

    // Nav scroll
    const nav = document.getElementById('nav')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Mobile nav toggle
    const toggle = document.getElementById('navToggle')
    const links  = document.getElementById('navLinks')
    const onToggle = () => {
      const open = links?.classList.toggle('open')
      toggle?.setAttribute('aria-expanded', String(open))
    }
    toggle?.addEventListener('click', onToggle)

    // Smooth-close mobile nav on link click
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
      <script ref={orgLdRef}  type="application/ld+json" />
      <script ref={faqLdRef}  type="application/ld+json" />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  )
}

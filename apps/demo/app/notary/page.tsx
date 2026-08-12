'use client'

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem, BookingSlot } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  charcoal: '#1f2937',
  charcoalDark: '#111827',
  charcoalMid: '#2d3748',
  gold: '#c9a84c',
  goldLight: '#d9bc70',
  goldDim: '#a08030',
  parchment: '#f5f0e0',
  parchmentDark: '#ede6cc',
  black: '#0a0a0a',
  textLight: '#9ca3af',
  textMid: '#6b7280',
  white: '#ffffff',
} as const

const S = {
  pageBg: { backgroundColor: C.charcoalDark, color: C.parchment } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  parchment: { color: C.parchment } as React.CSSProperties,
  muted: { color: C.textLight } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Studio Notarile Ferretti',
  description: 'Notaio a Milano — atti immobiliari, successioni, società',
  url: 'https://notaioferretti.example.com',
  locale: 'it',
  vertical: 'notaryos',
  theme: 'classic',
  branding: { primaryColor: C.charcoal, accentColor: C.gold },
  contact: {
    phone: '+39 02 1234 5678',
    email: 'segreteria@notaioferretti.it',
    whatsapp: '+390212345678',
    address: 'Via Montenapoleone 12, 20121 Milano',
    coordinates: { lat: 45.4654, lng: 9.1859 },
  },
  social: {
    instagram: 'notaioferretti',
    facebook: 'https://facebook.com/notaioferretti',
  },
  seo: {
    title: 'Studio Notarile Ferretti — Notaio Milano',
    description: 'Studio notarile a Milano. Atti immobiliari, successioni, società, procure.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  { name: 'Atti Immobiliari', icon: '🏛️', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop', desc: 'Compravendita, permuta, donazione, ipoteche, mutui e cancellazione di gravami. Assistenza completa dalla proposta al rogito.' },
  { name: 'Successioni', icon: '📜', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop', desc: 'Dichiarazioni di successione, accettazione o rinuncia all\'eredità, divisioni ereditarie e testamenti.' },
  { name: 'Diritto Societario', icon: '🏢', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop', desc: 'Costituzione di SRL, SPA, cooperative. Modifiche statutarie, aumenti di capitale, fusioni e scioglimenti.' },
  { name: 'Procure', icon: '✍️', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop', desc: 'Procure speciali e generali per atti notarili, immobiliari, bancari e amministrativi. Legalizzazione e apostille.' },
  { name: 'Testamenti', icon: '⚖️', image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop', desc: 'Testamento olografo, pubblico e segreto. Consulenza sulla pianificazione successoria e protezione del patrimonio.' },
  { name: 'Autenticazioni', icon: '🔏', image: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=600&h=400&fit=crop', desc: 'Autenticazione di firme, copie conformi, traduzione giurata, legalizzazione documenti per l\'estero.' },
]

const process = [
  { step: '01', title: 'Appuntamento', desc: 'Prenotate online o per telefono. Prima consulenza senza impegno.' },
  { step: '02', title: 'Documenti', desc: 'Vi inviamo la lista completa dei documenti necessari per il vostro atto.' },
  { step: '03', title: 'Istruttoria', desc: 'Verifica di conformità, visure ipotecarie e catastali, controllo urbanistico.' },
  { step: '04', title: 'Rogito', desc: 'Lettura e firma dell\'atto notarile. Trascrizione e registrazione automatica.' },
]

const requiredDocuments = [
  'Documento di identità valido',
  'Codice fiscale / Tessera sanitaria',
  'Stato di famiglia (estratto atto di nascita)',
  'Certificato di residenza',
  'Visura catastale dell\'immobile',
  'Planimetria catastale aggiornata',
  'Atto di provenienza dell\'immobile',
  'APE — Attestato di Prestazione Energetica',
]

const reviews: Review[] = [
  { id: '1', author: 'Famiglia Moretti', rating: 5, text: 'Abbiamo acquistato la nostra prima casa tramite lo Studio Ferretti. Professionalità e disponibilità straordinarie. Ci hanno guidato passo dopo passo senza mai farci sentire soli.', date: '2026-07-08', source: 'google', verified: true },
  { id: '2', author: 'Dott. A. Conti', rating: 5, text: 'Ho costituito la mia SRL in pochi giorni. Studio efficiente, preparato, con tariffe trasparenti comunicate dall\'inizio. Altamente consigliato.', date: '2026-07-20', source: 'google', verified: true },
  { id: '3', author: 'Maria G.', rating: 5, text: 'La gestione della successione dei miei genitori era una situazione complessa. Il Notaio Ferretti ha risolto tutto con competenza e grande sensibilità umana.', date: '2026-07-30', source: 'google', verified: true },
  { id: '4', author: 'Studio Arch. Bellini', rating: 5, text: 'Collaboriamo con lo Studio Ferretti per tutti i rogiti dei nostri clienti. Tempi rapidi, massima precisione, assistenza post-atto impeccabile.', date: '2026-08-02', source: 'google', verified: true },
  { id: '5', author: 'Ing. P. Romano', rating: 5, text: 'Per la compravendita di un immobile commerciale, professionalità al massimo livello. Trasparenza sulle spese, zero sorprese. Tornerò certamente.', date: '2026-07-15', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Come posso prenotare un appuntamento?', answer: 'Potete prenotare online tramite questa pagina, telefonare al nostro numero o inviare un messaggio WhatsApp. La segreteria vi risponde entro 2 ore nei giorni lavorativi.' },
  { question: 'Quanto costa un atto notarile?', answer: 'Le tariffe notarili sono regolate per legge (D.M. 265/2012) e dipendono dal valore dell\'atto e dalla sua complessità. Vi comunichiamo un preventivo preciso in fase di consulenza, senza sorprese.' },
  { question: 'Qual è la differenza tra notaio e avvocato?', answer: 'Il notaio è un pubblico ufficiale che redige atti con fede pubblica (validi erga omnes), come rogiti e costituzioni societarie. L\'avvocato rappresenta le parti in giudizio. In molti casi collaboriamo con professionisti legali.' },
  { question: 'Posso fare una procura senza venire in studio?', answer: 'Per alcune tipologie di procura è possibile ricevere il notaio a domicilio o in ospedale. Contattateci per verificare la fattibilità nel vostro caso specifico.' },
  { question: 'Quanto tempo richiede una compravendita immobiliare?', answer: 'I tempi variano in base alla complessità: da 2 settimane per atti semplici a 45-60 giorni per situazioni che richiedono verifiche urbanistiche o ipotecarie approfondite.' },
  { question: 'Offrite consulenza in lingua straniera?', answer: 'Sì. Il nostro studio assiste clienti internazionali in inglese e francese. Per atti da utilizzare all\'estero provvediamo alla legalizzazione e all\'apostille.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 2 },
  { id: '2', date: today, time: '10:30', available: true, spotsLeft: 1 },
  { id: '3', date: today, time: '15:00', available: true, spotsLeft: 3 },
  { id: '4', date: today, time: '16:30', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const notaryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Studio Notarile Ferretti',
  description: 'Studio notarile a Milano. Atti immobiliari, successioni, costituzione societaria.',
  url: 'https://notaioferretti.example.com',
  telephone: '+39 02 1234 5678',
  email: 'segreteria@notaioferretti.it',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Montenapoleone 12',
    addressLocality: 'Milano',
    postalCode: '20121',
    addressCountry: 'IT',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.4654, longitude: 9.1859 },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '€€€',
}

const notaryFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.black}f0`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.gold}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4">
          {/* Gold seal logo */}
          <div className="w-10 h-10 flex items-center justify-center text-xs font-bold tracking-wider"
            style={{ border: `1.5px solid ${C.gold}`, borderRadius: '50%', color: C.gold }}>N</div>
          <div>
            <div className="font-light tracking-[0.2em] text-xs uppercase" style={S.gold}>Studio Notarile</div>
            <div className="font-medium tracking-wide text-sm" style={S.parchment}>Ferretti</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Servizi', 'Procedura', 'Documenti', 'Contatti'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300"
              style={{ color: C.textLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.parchment)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textLight)}
            >
              {item}
            </a>
          ))}
          <a href="#appuntamento"
            className="border px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.black; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold; }}
          >
            Prenota
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: C.charcoalDark }}>
      <style>{`
        @keyframes sealReveal {
          0% { opacity: 0; transform: scale(0.6) rotate(-20deg); }
          60% { transform: scale(1.05) rotate(-5deg); }
          100% { opacity: 1; transform: scale(1) rotate(-8deg); }
        }
        @keyframes goldGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(201,168,76,0.1), inset 0 0 20px rgba(201,168,76,0.05); }
          50% { box-shadow: 0 0 40px rgba(201,168,76,0.2), inset 0 0 30px rgba(201,168,76,0.08); }
        }
        @keyframes quillDraw {
          from { stroke-dashoffset: 200; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 0.4; }
        }
        @keyframes scalesBalance {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .seal-emboss {
          animation: sealReveal 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
          opacity: 0;
        }
        .gold-glow { animation: goldGlow 4s ease-in-out infinite; }
        .quill-path {
          stroke-dasharray: 200;
          animation: quillDraw 2s ease-out 1.5s forwards;
          opacity: 0;
        }
        .scales-icon { animation: scalesBalance 6s ease-in-out infinite; }
      `}</style>

      {/* Parchment texture via CSS grain */}
      <div className="absolute inset-0 pointer-events-none grain opacity-30" />

      {/* Decorative vertical gold line */}
      <div className="absolute left-[42%] top-0 bottom-0 w-px hidden lg:block" style={{ backgroundColor: `${C.gold}15` }} />

      {/* Background scales of justice — decorative */}
      <div className="absolute right-[5%] bottom-[10%] text-[12rem] opacity-[0.03] pointer-events-none scales-icon select-none">⚖</div>

      {/* Quill pen SVG decoration */}
      <div className="absolute right-[10%] top-[20%] opacity-20 pointer-events-none hidden lg:block">
        <svg width="120" height="160" viewBox="0 0 120 160">
          <path className="quill-path" d="M 20,140 C 30,100 60,60 100,20 M 20,140 L 30,130 M 25,135 L 15,125"
            fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center w-full">
        {/* Left: text */}
        <div className="stagger-children">
          <p className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-8" style={S.gold}>
            Studio Notarile &middot; Milano dal 1978
          </p>

          <h1 className="mb-8">
            {['Officiale.', 'Preciso.', 'Di Fiducia.'].map((w, i) => (
              <span key={w}
                className="reveal-clip-up block font-extralight leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: C.parchment, animationDelay: `${i * 0.15}s` }}>
                {w}
              </span>
            ))}
          </h1>

          <div className="reveal-up text-lg font-light leading-relaxed max-w-xl mb-8" style={{ color: C.textLight, animationDelay: '0.5s' }}>
            <p className="text-xl italic mb-4" style={S.gold}>&ldquo;Notaio Dott. Marco Ferretti&rdquo;</p>
            Pubblico Ufficiale iscritto al Ruolo dei Notai del Distretto di Milano.
            Assistenza completa su atti immobiliari, successioni e diritto societario.
            Quarantasei anni di tradizione e innovazione.
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.65s' }}>
            <a href="#appuntamento"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.gold, color: C.gold }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.black; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold; }}
            >
              Prenota Appuntamento
            </a>
            <a href="#servizi"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: C.textLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.parchment)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textLight)}
            >
              I Nostri Servizi
            </a>
          </div>
        </div>

        {/* Right: gold seal embossing */}
        <div className="seal-emboss hidden lg:flex flex-col items-center gap-6">
          <div
            className="gold-glow relative w-56 h-56 flex items-center justify-center"
            style={{
              borderRadius: '50%',
              border: `3px solid ${C.gold}`,
              background: `radial-gradient(ellipse at center, ${C.charcoalMid} 0%, ${C.charcoalDark} 70%)`,
            }}
          >
            {/* Outer ring */}
            <div className="absolute inset-2 rounded-full" style={{ border: `1px solid ${C.gold}44` }} />
            <div className="absolute inset-4 rounded-full" style={{ border: `1px dashed ${C.gold}22` }} />
            {/* Content */}
            <div className="text-center z-10">
              <div className="text-5xl mb-1" style={S.gold}>⚖</div>
              <div className="text-xs tracking-[0.4em] uppercase mt-2" style={{ color: C.goldLight }}>Notaio</div>
              <div className="text-sm font-light tracking-widest mt-0.5" style={S.gold}>Ferretti</div>
              <div className="text-xs tracking-wider mt-1" style={{ color: C.textLight }}>Milano</div>
            </div>
          </div>
          {/* Credentials */}
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] uppercase mb-1" style={S.gold}>Distretto di Milano</div>
            <div className="text-xs" style={{ color: C.textLight }}>Iscritto al Ruolo · N. 1024</div>
          </div>
        </div>
      </div>

      {/* Trust stats bottom bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 gap-8 text-center"
          style={{ borderTop: `1px solid ${C.gold}22` }}>
          {[
            { n: '46', label: 'Anni di attività' },
            { n: '18.000+', label: 'Atti rogati' },
            { n: '4.9★', label: 'Valutazione Google' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl font-extralight" style={S.gold}>{s.n}</div>
              <div className="text-xs tracking-wider mt-1" style={{ color: C.textLight }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────
export default function NotaryPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(notaryJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(notaryFaqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.gold }} />

      <Navbar />
      <Hero />

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-4 overflow-hidden" style={{ backgroundColor: C.gold }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Atti Immobiliari', 'Successioni', 'Diritto Societario', 'Procure', 'Testamenti', 'Autenticazioni', 'Legalizzazioni', 'Consulenza'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-light tracking-[0.2em] uppercase" style={{ color: C.black }}>{item}</span>
                  <span style={{ color: `${C.black}55` }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVIZI
          ═══════════════════════════════════════ */}
      <section id="servizi" className="py-24 md:py-32 px-6 md:px-16 grain" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Cosa Facciamo</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.parchment}>I Nostri Servizi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((svc, i) => (
              <div key={svc.name}
                className="reveal-up group relative overflow-hidden cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s`, borderRadius: '2px', border: `1px solid ${C.gold}22` }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={svc.image} alt={svc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.charcoalDark}dd, transparent 60%)` }} />
                  <span className="absolute bottom-3 left-4 text-2xl">{svc.icon}</span>
                </div>
                <div className="p-5" style={{ backgroundColor: C.charcoalMid }}>
                  <h3 className="text-base font-medium mb-2" style={S.parchment}>{svc.name}</h3>
                  <p className="text-sm leading-relaxed" style={S.muted}>{svc.desc}</p>
                  <a href="#appuntamento"
                    className="mt-4 inline-block text-xs tracking-[0.2em] uppercase transition-colors duration-200"
                    style={S.gold}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.goldLight)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.gold)}
                  >
                    Richiedi Informazioni →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCEDURA
          ═══════════════════════════════════════ */}
      <section id="procedura" className="py-24 px-6 md:px-16" style={{ backgroundColor: C.charcoalDark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Come Funziona</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.parchment}>Il Nostro Processo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {process.map((step, i) => (
              <div key={step.step} className="reveal-up relative text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[65%] w-full h-px" style={{ backgroundColor: `${C.gold}22` }} />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center text-sm font-light"
                    style={{ border: `1px solid ${C.gold}`, color: C.gold, borderRadius: '50%' }}>{step.step}</div>
                  <h3 className="font-medium mb-2" style={S.parchment}>{step.title}</h3>
                  <p className="text-sm" style={S.muted}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DOCUMENTI
          ═══════════════════════════════════════ */}
      <section id="documenti" className="py-20 px-6 md:px-16 grain" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Cosa Portare</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-6" style={S.parchment}>Documenti Necessari</h2>
            <p className="font-light leading-relaxed mb-8" style={S.muted}>
              Per un atto di compravendita immobiliare. Per altri tipi di atti, vi invieremo una lista personalizzata
              dopo il primo colloquio.
            </p>
            <a href="#appuntamento"
              className="border px-8 py-3 text-sm tracking-[0.18em] uppercase transition-all duration-300"
              style={{ borderColor: C.gold, color: C.gold }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.black; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold; }}
            >
              Prenota una Consulenza
            </a>
          </div>
          <div className="reveal-right grid grid-cols-1 gap-3">
            {requiredDocuments.map((doc, i) => (
              <div key={doc} className="flex items-center gap-4 p-3"
                style={{ backgroundColor: `${C.gold}08`, border: `1px solid ${C.gold}20`, borderRadius: '2px' }}>
                <span className="text-xs font-bold" style={S.gold}>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm" style={S.parchment}>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TARIFFE
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ backgroundColor: C.charcoalDark }}>
        <div className="max-w-3xl mx-auto text-center reveal-up">
          <div className="text-4xl mb-6" style={S.gold}>⚖</div>
          <h2 className="text-3xl md:text-4xl font-extralight mb-4" style={S.parchment}>Trasparenza sui Costi</h2>
          <p className="font-light leading-relaxed mb-8" style={S.muted}>
            Le tariffe notarili sono regolate dal D.M. 265/2012 e dipendono dalla natura e dal valore dell&rsquo;atto.
            Vi forniremo un preventivo dettagliato e vincolante prima di procedere. Nessuna sorpresa, nessun onere nascosto.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Tariffe di Legge', icon: '⚖️', desc: 'Regolate D.M. 265/2012' },
              { label: 'Preventivo Vincolante', icon: '📋', desc: 'Prima di ogni atto' },
              { label: 'Zero Sorprese', icon: '✅', desc: 'Trasparenza garantita' },
            ].map((item) => (
              <div key={item.label} className="p-4 text-center"
                style={{ backgroundColor: `${C.gold}08`, border: `1px solid ${C.gold}20`, borderRadius: '2px' }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs font-medium mb-1" style={S.gold}>{item.label}</div>
                <div className="text-xs" style={S.muted}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOCATION
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-16 grain" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal-up">
          {[
            { icon: '📍', label: 'Indirizzo', value: 'Via Montenapoleone 12\n20121 Milano' },
            { icon: '🅿️', label: 'Parcheggio', value: 'Garage Montenapoleone (150m)\nEntrée da Via della Spiga' },
            { icon: '🚇', label: 'Metro', value: 'MM3 Montenapoleone (2 min)\nMM1 San Babila (4 min)' },
          ].map((loc) => (
            <div key={loc.label} className="flex gap-4 items-start">
              <span className="text-2xl">{loc.icon}</span>
              <div>
                <div className="text-xs tracking-[0.3em] uppercase mb-1" style={S.gold}>{loc.label}</div>
                <div className="text-sm font-light whitespace-pre-line" style={S.parchment}>{loc.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="appuntamento" className="py-24 md:py-32 px-6 md:px-16 grain" style={{ backgroundColor: C.charcoalDark }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Primo Colloquio</p>
            <h2 className="text-4xl font-extralight mb-6" style={S.parchment}>Prenota un<br />Appuntamento</h2>
            <p className="font-light leading-relaxed mb-8" style={S.muted}>
              Prima consulenza gratuita e senza impegno. Spiegheremo la procedura, i tempi e i costi
              in modo chiaro, prima di procedere con qualsiasi atto.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Orari', detail: 'Lun–Ven 09:00–18:00' },
                { label: 'Telefono', detail: '+39 02 1234 5678' },
                { label: 'Email', detail: 'segreteria@notaioferretti.it' },
                { label: 'Lingue', detail: 'Italiano · English · Français' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.gold}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.gold}>{info.label}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="it" slots={mockSlots} socialProof={{ count: 62, label: 'appuntamenti prenotati questo mese' }}
              vertical="notaryos" onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden grain" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Cosa Dicono di Noi</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.parchment}>Testimonianze</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="it" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={{ backgroundColor: C.charcoalDark }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Domande Frequenti</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.parchment}>Hai Domande?</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="NotaryOS" locale="it" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="it" />
      <WhatsAppCTA phoneNumber="+390212345678" message="Salve, vorrei prenotare un appuntamento con il Notaio Ferretti" vertical="notaryos" />
    </div>
  )
}

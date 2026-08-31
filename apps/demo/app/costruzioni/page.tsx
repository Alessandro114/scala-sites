'use client'

import Image from 'next/image'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem, BookingSlot } from '@scala-sites/core/lib/types'
import { useState, useEffect, useRef } from 'react'

// ─────────────────────────────────────────────
// PALETTE — Campanian tuff stone + carbon
// ─────────────────────────────────────────────
const C = {
  carbon: '#141210',
  basalt: '#2a2722',
  tufo: '#b89a52',
  tufoHover: '#a0863e',
  pietra: '#7a6f5f',
  calce: '#f5f1eb',
  intonaco: '#ebe6dd',
  cemento: '#d0cbc3',
  heroMuted: '#9a9080',
  white: '#f0ece5',
  border: '#3a3630',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'GF Costruzioni SRL',
  description: 'Impresa edile certificata SOA dal 2000 — edilizia civile, industriale, hospitality',
  url: 'https://sites.get-scala.com/costruzioni',
  locale: 'it',
  vertical: 'construction',
  theme: 'classic',
  branding: { primaryColor: C.carbon, accentColor: C.tufo },
  contact: {
    phone: '+393885708610',
    email: 'gfcostruzionisrl@alice.it',
    whatsapp: '+393885708610',
    address: 'Via Taro 8, 81039 Villa Literno (CE)',
    coordinates: { lat: 40.9996, lng: 14.0776 },
  },
  social: {
    facebook: 'https://www.facebook.com/ediliziageneraleristrutturazioni/',
  },
  seo: {
    title: 'GF Costruzioni SRL | Impresa Edile Certificata SOA — Villa Literno',
    description: 'Impresa edile certificata SOA dal 2000. Edilizia civile, industriale, hospitality, ristrutturazioni, restauro, lavori stradali a Villa Literno e in Campania.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    name: 'Edilizia residenziale',
    desc: 'Costruzione di edifici residenziali, villette unifamiliari e plurifamiliari, complessi abitativi. Dalla prima pietra alla consegna chiavi in mano.',
    icon: '🏠',
  },
  {
    name: 'Edilizia industriale',
    desc: 'Capannoni, stabilimenti produttivi, strutture commerciali e logistiche. Costruzioni prefabbricate e tradizionali su misura per ogni esigenza produttiva.',
    icon: '🏭',
  },
  {
    name: 'Hospitality',
    desc: 'Realizzazione e ristrutturazione di hotel, resort, B&B, stabilimenti balneari e strutture ricettive. Competenza specifica nel settore turistico campano.',
    icon: '🏨',
  },
  {
    name: 'Ristrutturazioni',
    desc: 'Interventi di rinnovo completo su edifici esistenti: rifacimento facciate, cappotto termico, riqualificazione energetica, adeguamento sismico e impiantistico.',
    icon: '🔨',
  },
  {
    name: 'Restauro conservativo',
    desc: 'Recupero e restauro di edifici storici, palazzi d\'epoca, rustici e beni vincolati. Interventi rispettosi dell\'identità architettonica originale.',
    icon: '🏛️',
  },
  {
    name: 'Lavori stradali',
    desc: 'Pavimentazioni, asfaltature, urbanizzazioni primarie e secondarie, movimenti terra, scavi e opere di sistemazione del territorio.',
    icon: '🛤️',
  },
]

const portfolio = [
  { label: 'Complesso "Le Palme"', cat: 'Residenziale', loc: 'Villa Literno (CE)', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80' },
  { label: 'Stabilimento produttivo', cat: 'Industriale', loc: 'Zona ASI Aversa Nord', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80' },
  { label: 'Palazzo storico', cat: 'Restauro', loc: 'Centro storico, Caserta', image: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=800&h=600&fit=crop&q=80' },
  { label: 'Resort Litorale Domitio', cat: 'Hospitality', loc: 'Castel Volturno (CE)', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&q=80' },
  { label: 'Riqualificazione urbana', cat: 'Urbanizzazione', loc: 'Giugliano in Campania', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80' },
  { label: 'Edilizia scolastica', cat: 'Pubblico', loc: 'Provincia di Caserta', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80' },
]

const reviews: Review[] = [
  { id: '1', author: 'Marco R.', rating: 5, text: 'Ristrutturazione completa del nostro appartamento a Caserta. Lavoro impeccabile, tempi rispettati e preventivo onesto. La garanzia decennale ci ha dato ulteriore sicurezza.', date: '2026-06-15', source: 'google', verified: true },
  { id: '2', author: 'Anna P.', rating: 5, text: 'Ci hanno costruito la villetta da zero. Dalla progettazione alla consegna chiavi in mano, tutto perfetto. Personale competente e sempre disponibile per chiarimenti.', date: '2026-07-10', source: 'google', verified: true },
  { id: '3', author: 'Giuseppe M.', rating: 5, text: 'Impresa seria e affidabile. Hanno realizzato il capannone industriale per la nostra azienda con grande professionalità. Certificazione SOA ben meritata.', date: '2026-07-28', source: 'google', verified: true },
  { id: '4', author: 'Lucia T.', rating: 4, text: 'Restauro del nostro palazzo d\'epoca nel centro storico. Lavoro delicato gestito con competenza. Piccolo ritardo per il maltempo ma tutto risolto alla perfezione.', date: '2026-06-25', source: 'google', verified: true },
  { id: '5', author: 'Roberto D.', rating: 5, text: 'Cappotto termico e rifacimento facciata del condominio. Hanno gestito anche tutte le pratiche per il bonus. Prezzo competitivo e risultato eccellente.', date: '2026-08-05', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Offrite sopralluoghi gratuiti?', answer: 'Sì. Il sopralluogo e il preventivo sono completamente gratuiti e senza impegno per qualsiasi tipo di intervento. Un nostro tecnico visiterà il sito, valuterà le condizioni e vi fornirà un preventivo dettagliato entro 48 ore.' },
  { question: 'Che certificazioni avete?', answer: 'Possediamo la Certificazione SOA rilasciata da UNISOA, che ci abilita alla partecipazione a gare d\'appalto pubbliche, e il Certificato di Qualità dell\'Istituto Europeo di Certificazione ISE-CERT. Tutto il personale è qualificato e in regola con le normative di sicurezza vigenti.' },
  { question: 'In quali zone operate?', answer: 'Operiamo principalmente in Campania con focus sulle province di Caserta e Napoli. Per cantieri di grandi dimensioni o contratti commerciali significativi, siamo disponibili a operare su tutto il territorio nazionale.' },
  { question: 'Quali sono i tempi medi di realizzazione?', answer: 'I tempi variano in base alla complessità: una ristrutturazione di un appartamento richiede 60-90 giorni, una villetta nuova 6-8 mesi, un cantiere industriale 8-12 mesi. Ogni preventivo include un cronoprogramma dettagliato con le milestone di avanzamento.' },
  { question: 'Gestite anche le pratiche burocratiche?', answer: 'Sì. Ci occupiamo dell\'intero iter burocratico: permessi di costruire, SCIA, CILA, pratiche catastali, certificazioni energetiche e collaudi. Collaboriamo con professionisti di fiducia per garantire la conformità a tutte le normative vigenti.' },
  { question: 'Offrite garanzia sui lavori?', answer: 'Tutti i nostri lavori sono coperti da garanzia decennale sulla struttura, come previsto dalla legge. Offriamo inoltre garanzie aggiuntive sui materiali utilizzati (da 5 a 30 anni a seconda del prodotto) e assistenza post-intervento per qualsiasi necessità.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 2 },
  { id: '2', date: today, time: '11:00', available: true, spotsLeft: 3 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 1 },
  { id: '4', date: today, time: '16:00', available: true, spotsLeft: 4 },
]

const processSteps = [
  { num: '01', name: 'Sopralluogo', desc: 'Analisi del sito, rilievo delle condizioni esistenti e raccolta delle esigenze. Gratuito e senza impegno.' },
  { num: '02', name: 'Progettazione', desc: 'Piano di lavoro dettagliato con tempistiche, costi e specifiche dei materiali. Preventivo trasparente e completo.' },
  { num: '03', name: 'Realizzazione', desc: 'Esecuzione con materiali certificati, personale qualificato e supervisione costante. Aggiornamenti regolari sullo stato dei lavori.' },
  { num: '04', name: 'Consegna', desc: 'Collaudo finale, documentazione completa e garanzia su tutti i lavori eseguiti. Assistenza post-consegna inclusa.' },
]

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  pageBg: { backgroundColor: C.calce, color: C.carbon } as React.CSSProperties,
  heroBg: { backgroundColor: C.carbon } as React.CSSProperties,
  sectionAlt: { backgroundColor: C.intonaco } as React.CSSProperties,
  tufo: { color: C.tufo } as React.CSSProperties,
  muted: { color: C.heroMuted } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  pietra: { color: C.pietra } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'GF Costruzioni SRL',
  description: 'Impresa edile certificata SOA dal 2000. Edilizia civile, industriale, hospitality, ristrutturazioni, restauro, lavori stradali a Villa Literno e in Campania.',
  url: 'https://sites.get-scala.com/costruzioni',
  telephone: '+393885708610',
  email: 'gfcostruzionisrl@alice.it',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Taro 8',
    addressLocality: 'Villa Literno',
    addressRegion: 'CE',
    postalCode: '81039',
    addressCountry: 'IT',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 40.9996, longitude: 14.0776 },
  foundingDate: '2008',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '20:00' },
  ],
  sameAs: ['https://www.facebook.com/ediliziageneraleristrutturazioni/'],
  areaServed: { '@type': 'State', name: 'Campania' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-31',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─────────────────────────────────────────────
// COUNTER HOOK
// ─────────────────────────────────────────────
function useCounter(target: number, suffix = '', duration = 1800) {
  const [value, setValue] = useState('0' + suffix)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    if (!ref.current || counted.current) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || counted.current) return
        counted.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(target * ease) + suffix)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      },
      { threshold: 0.5 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, suffix, duration])

  return { ref, value }
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = ['Chi siamo', 'Servizi', 'Realizzazioni', 'Processo']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? 'rgba(20,18,16,.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,.06)' : 'none',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex justify-between items-center h-[72px]">
        <a href="#" className="flex items-center gap-3">
          <div
            className="w-9 h-9 flex items-center justify-center text-sm tracking-wide"
            style={{ backgroundColor: C.tufo, color: C.carbon, fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            GF
          </div>
          <span
            className="text-[1.05rem] tracking-wide"
            style={{ color: C.white, fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            GF Costruzioni
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-xs tracking-[0.12em] uppercase transition-colors duration-300"
              style={{ color: C.heroMuted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.heroMuted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contatti"
            className="px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300"
            style={{ border: `1px solid ${C.tufo}`, color: C.tufo }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.tufo
              e.currentTarget.style.color = C.carbon
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.tufo
            }}
          >
            Preventivo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col justify-between w-7 h-5 z-[110]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block h-[2px] transition-transform duration-300" style={{ backgroundColor: C.white, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span className="block h-[2px] transition-opacity duration-300" style={{ backgroundColor: C.white, opacity: menuOpen ? 0 : 1 }} />
          <span className="block h-[2px] transition-transform duration-300" style={{ backgroundColor: C.white, transform: menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }} />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7"
            style={{ backgroundColor: C.carbon }}
          >
            {[...navItems, 'Contatti'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-lg tracking-[0.1em] uppercase"
                style={{ color: C.white }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={S.heroBg}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&h=1200&fit=crop&q=80"
          alt="GF Costruzioni — edilizia professionale"
          fill
          className="object-cover"
          style={{ opacity: 0.12 }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${C.carbon}f0 0%, ${C.carbon}cc 50%, ${C.basalt}e8 100%)` }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(90deg, rgba(184,154,82,.04) 0, rgba(184,154,82,.04) 1px, transparent 1px, transparent 120px),
            repeating-linear-gradient(0deg, rgba(184,154,82,.03) 0, rgba(184,154,82,.03) 1px, transparent 1px, transparent 120px)
          `,
        }}
      />

      {/* Circle accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -120,
          right: -80,
          width: 500,
          height: 500,
          border: '1px solid rgba(184,154,82,.08)',
          borderRadius: '50%',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-12 pt-[clamp(100px,14vh,160px)]">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-7">
          <div className="w-10 h-px" style={{ backgroundColor: C.tufo }} />
          <span
            className="text-xs font-medium tracking-[0.25em] uppercase"
            style={S.tufo}
          >
            Impresa edile certificata
          </span>
        </div>

        {/* Title */}
        <h1
          className="leading-[0.92] mb-3"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(3.2rem, 8vw, 7rem)',
            letterSpacing: '-.02em',
            color: C.white,
          }}
        >
          GF<br />
          <span style={{ color: C.tufo }}>Costruzioni</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-12 max-w-[560px]"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            color: C.heroMuted,
          }}
        >
          Costruiamo il futuro con la solidità di venticinque anni di esperienza
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#contatti"
            className="inline-flex items-center gap-2.5 px-9 py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300"
            style={{ backgroundColor: C.tufo, color: C.carbon }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.tufoHover
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = C.tufo
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Preventivo gratuito
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#realizzazioni"
            className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300"
            style={{ border: '1px solid rgba(240,236,229,.2)', color: C.white }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.tufo
              e.currentTarget.style.color = C.tufo
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(240,236,229,.2)'
              e.currentTarget.style.color = C.white
            }}
          >
            I nostri lavori
          </a>
        </div>

        {/* Certs bottom */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-14 sm:mt-0 sm:absolute sm:bottom-12">
          {['Certificazione SOA', 'Qualità ISE-CERT', 'Dal 2000'].map((cert) => (
            <div key={cert} className="flex items-center gap-2 text-[0.7rem] tracking-[0.15em] uppercase" style={S.muted}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.tufo }} />
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────
function Stats() {
  const c1 = useCounter(25, '+')
  const c2 = useCounter(500, '+')
  const c3 = useCounter(100, '%')
  const c4 = useCounter(3)

  const stats = [
    { ref: c1.ref, value: c1.value, label: 'Anni di esperienza' },
    { ref: c2.ref, value: c2.value, label: 'Progetti completati' },
    { ref: c3.ref, value: c3.value, label: 'Garanzia lavori' },
    { ref: c4.ref, value: c4.value, label: 'Certificazioni attive' },
  ]

  return (
    <section className="py-14" style={{ backgroundColor: C.intonaco, borderTop: `1px solid ${C.cemento}`, borderBottom: `1px solid ${C.cemento}` }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              ref={s.ref}
              className="text-center px-4"
              style={i > 0 ? { borderLeft: `1px solid ${C.cemento}` } : undefined}
            >
              <div
                className="leading-none mb-2"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  color: C.tufo,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {s.value}
              </div>
              <div className="text-xs font-medium tracking-[0.08em] uppercase" style={{ color: C.pietra }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// CHI SIAMO
// ─────────────────────────────────────────────
function About() {
  return (
    <section id="chi-siamo" className="py-[clamp(72px,10vw,120px)]" style={S.pageBg}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={S.tufo}>
          Chi siamo
        </div>
        <h2
          className="mb-5"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.15,
            textWrap: 'balance' as any,
          }}
        >
          Una storia di solidità<br />costruita nel tempo
        </h2>

        <div className="grid md:grid-cols-2 gap-[clamp(40px,6vw,80px)] mt-12 items-start">
          <div className="space-y-5">
            <p className="text-base leading-[1.8]" style={{ color: C.pietra }}>
              <strong style={{ color: C.carbon }}>GF Costruzioni SRL</strong> nasce nel 2008 con l&apos;obiettivo di portare a termine ogni progetto con personale specializzato e supervisione costante dei lavori, garantendo la piena soddisfazione del committente.
            </p>
            <p className="text-base leading-[1.8]" style={{ color: C.pietra }}>
              Nel 2009 acquisiamo il ramo d&apos;azienda della Cooperativa Master Farbe a.r.l., i cui fondatori erano gli stessi soci di GF Costruzioni e che operava nel settore delle costruzioni già dal 2000. Questo ci ha permesso di consolidare <strong style={{ color: C.carbon }}>oltre venticinque anni di esperienza</strong> nel settore.
            </p>
            <p className="text-base leading-[1.8]" style={{ color: C.pietra }}>
              Oggi siamo un&apos;impresa certificata <strong style={{ color: C.carbon }}>SOA</strong> e con <strong style={{ color: C.carbon }}>Sistema Qualità ISE-CERT</strong>, specializzata in edilizia civile, industriale e nel settore hospitality. Operiamo su tutto il territorio campano con cantieri in provincia di Caserta, Napoli e oltre.
            </p>
          </div>

          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: '4/5' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop&q=80"
              alt="GF Costruzioni — cantiere attivo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(20,18,16,.6) 0%, transparent 40%)' }}
            />
            <div
              className="absolute bottom-6 left-6 text-[0.7rem] tracking-[0.2em] uppercase z-10"
              style={{ color: 'rgba(240,236,229,.7)' }}
            >
              Cantiere attivo · Villa Literno
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
function Services() {
  return (
    <section id="servizi" className="py-[clamp(72px,10vw,120px)]" style={S.sectionAlt}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={S.tufo}>
          Servizi
        </div>
        <h2
          className="mb-5"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.15,
            textWrap: 'balance' as any,
          }}
        >
          Competenze trasversali,<br />qualità verticale
        </h2>
        <p className="text-[1.05rem] leading-[1.7] max-w-[620px]" style={{ color: C.pietra }}>
          Dalla fondazione alla copertura, dalla demolizione al restauro conservativo: ogni fase del ciclo edilizio con un unico interlocutore.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {services.map((s) => (
            <div
              key={s.name}
              className="group relative overflow-hidden p-[clamp(28px,3vw,40px)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${C.cemento}`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.tufo)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.cemento)}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] origin-left transition-transform duration-400 scale-x-0 group-hover:scale-x-100"
                style={{ backgroundColor: C.tufo }}
              />

              <div className="text-3xl mb-5">{s.icon}</div>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                {s.name}
              </h3>
              <p className="text-sm leading-[1.7]" style={{ color: C.pietra }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PORTFOLIO
// ─────────────────────────────────────────────
function Portfolio() {
  return (
    <section id="realizzazioni" className="py-[clamp(72px,10vw,120px)]" style={S.pageBg}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={S.tufo}>
          Realizzazioni
        </div>
        <h2
          className="mb-12"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.15,
          }}
        >
          Progetti che parlano<br />per noi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoRows: '280px' }}>
          {portfolio.map((p, i) => (
            <div
              key={p.label}
              className="relative overflow-hidden cursor-pointer group"
              style={{
                gridRow: i === 0 ? 'span 2' : undefined,
                gridColumn: i === 3 ? 'span 2' : undefined,
              }}
            >
              <Image
                src={p.image}
                alt={`${p.cat} — ${p.label}`}
                fill
                className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-[clamp(16px,3vw,28px)]"
                style={{ background: 'linear-gradient(to top, rgba(20,18,16,.85) 0%, rgba(20,18,16,.1) 60%)' }}
              >
                <div className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-1" style={S.tufo}>
                  {p.cat}
                </div>
                <div
                  className="text-[1.15rem]"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#f0ece5' }}
                >
                  {p.label}
                </div>
                <div className="text-sm mt-1" style={{ color: 'rgba(240,236,229,.55)' }}>
                  {p.loc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PROCESS
// ─────────────────────────────────────────────
function Process() {
  return (
    <section id="processo" className="py-[clamp(72px,10vw,120px)]" style={S.sectionAlt}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={S.tufo}>
          Come lavoriamo
        </div>
        <h2
          className="mb-14"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.15,
          }}
        >
          Dall&apos;idea alla consegna,<br />un percorso chiaro
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div
              key={step.num}
              className="py-8 px-[clamp(16px,2.5vw,32px)]"
              style={i > 0 ? { borderLeft: `1px solid ${C.cemento}` } : undefined}
            >
              <div
                className="leading-none mb-4 opacity-35"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '2.8rem',
                  color: C.tufo,
                }}
              >
                {step.num}
              </div>
              <h3
                className="text-[1.15rem] mb-2.5"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                {step.name}
              </h3>
              <p className="text-[0.88rem] leading-[1.65]" style={{ color: C.pietra }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contatti" className="py-[clamp(72px,10vw,120px)]" style={S.heroBg}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={S.tufo}>
          Contatti
        </div>
        <h2
          className="mb-12"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.15,
            color: C.white,
          }}
        >
          Parliamo del<br />vostro progetto
        </h2>

        <div className="grid md:grid-cols-2 gap-[clamp(40px,6vw,80px)]">
          {/* Form */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-semibold tracking-[0.15em] uppercase" style={S.muted}>Nome e cognome</label>
                <input
                  type="text"
                  required
                  placeholder="Mario Rossi"
                  className="px-4 py-3.5 text-sm transition-colors duration-300 focus:outline-none"
                  style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', color: C.white }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = C.tufo)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)')}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-semibold tracking-[0.15em] uppercase" style={S.muted}>Telefono</label>
                <input
                  type="tel"
                  required
                  placeholder="+39 333 000 0000"
                  className="px-4 py-3.5 text-sm transition-colors duration-300 focus:outline-none"
                  style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', color: C.white }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = C.tufo)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] font-semibold tracking-[0.15em] uppercase" style={S.muted}>Email</label>
              <input
                type="email"
                required
                placeholder="mario@esempio.it"
                className="px-4 py-3.5 text-sm transition-colors duration-300 focus:outline-none"
                style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', color: C.white }}
                onFocus={(e) => (e.currentTarget.style.borderColor = C.tufo)}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)')}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] font-semibold tracking-[0.15em] uppercase" style={S.muted}>Tipo di intervento</label>
              <select
                className="px-4 py-3.5 text-sm transition-colors duration-300 focus:outline-none"
                style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', color: C.white }}
                onFocus={(e) => (e.currentTarget.style.borderColor = C.tufo)}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)')}
              >
                <option value="">Seleziona un servizio</option>
                <option>Edilizia residenziale</option>
                <option>Edilizia industriale</option>
                <option>Hospitality</option>
                <option>Ristrutturazione</option>
                <option>Restauro conservativo</option>
                <option>Lavori stradali</option>
                <option>Altro</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] font-semibold tracking-[0.15em] uppercase" style={S.muted}>Descrizione del progetto</label>
              <textarea
                placeholder="Descrivete brevemente il vostro progetto, la zona e le tempistiche desiderate..."
                rows={4}
                className="px-4 py-3.5 text-sm transition-colors duration-300 focus:outline-none resize-y"
                style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', color: C.white }}
                onFocus={(e) => (e.currentTarget.style.borderColor = C.tufo)}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)')}
              />
            </div>
            <button
              type="submit"
              className="self-start px-10 py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-colors duration-300"
              style={{ backgroundColor: submitted ? '#25d366' : C.tufo, color: C.carbon }}
              onMouseEnter={(e) => !submitted && (e.currentTarget.style.backgroundColor = C.tufoHover)}
              onMouseLeave={(e) => !submitted && (e.currentTarget.style.backgroundColor = C.tufo)}
            >
              {submitted ? 'Inviato ✓' : 'Invia richiesta'}
            </button>
          </form>

          {/* Info */}
          <div>
            <h3
              className="text-xl mb-6"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: C.white }}
            >
              Dove trovarci
            </h3>

            {[
              { icon: '📍', text: <span>Via Taro 8<br />81039 Villa Literno (CE)</span> },
              { icon: '✉️', text: <a href="mailto:gfcostruzionisrl@alice.it" className="transition-colors duration-300" style={{ color: C.white }} onMouseEnter={(e) => (e.currentTarget.style.color = C.tufo)} onMouseLeave={(e) => (e.currentTarget.style.color = C.white)}>gfcostruzionisrl@alice.it</a> },
              { icon: '📞', text: <a href="tel:+393885708610" className="transition-colors duration-300" style={{ color: C.white }} onMouseEnter={(e) => (e.currentTarget.style.color = C.tufo)} onMouseLeave={(e) => (e.currentTarget.style.color = C.white)}>+39 388 570 8610</a> },
              { icon: '🕐', text: <span>Lun — Sab: 08:00 – 20:00<br /><span style={{ color: C.tufo }}>Domenica chiuso</span></span> },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3.5 mb-5 text-[0.95rem]" style={S.muted}>
                <span className="text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                <div>{item.text}</div>
              </div>
            ))}

            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
              <div className="text-[0.72rem] tracking-[0.15em] uppercase mb-3" style={S.muted}>
                P.IVA 03456060619
              </div>
              <a
                href="https://www.facebook.com/ediliziageneraleristrutturazioni/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300"
                style={{ color: C.heroMuted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.tufo)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.heroMuted)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// FAQ SECTION (custom, not shared component — Italian content)
// ─────────────────────────────────────────────
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-[clamp(72px,10vw,120px)]" style={S.pageBg}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={S.tufo}>
          Domande frequenti
        </div>
        <h2
          className="mb-10"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.15,
          }}
        >
          Risposte chiare<br />per decisioni sicure
        </h2>

        <div className="max-w-[760px]">
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${C.cemento}` }}>
              <button
                className="w-full flex justify-between items-center py-[22px] text-left transition-colors duration-300"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.08rem' }}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.tufo)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                aria-expanded={openIdx === i}
              >
                {faq.question}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke={C.tufo}
                  strokeWidth="1.5"
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{ transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0)' }}
                >
                  <path d="M5 7.5l5 5 5-5" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: openIdx === i ? 300 : 0 }}
              >
                <div className="pb-6 text-[0.95rem] leading-[1.7]" style={{ color: C.pietra }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function CostruzioniPage() {
  return (
    <div style={S.pageBg}>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <FAQSection />
      <div style={{ backgroundColor: C.intonaco, padding: 'clamp(72px, 10vw, 120px) 0' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={S.tufo}>
            Recensioni
          </div>
          <h2
            className="mb-10"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.15,
            }}
          >
            La fiducia dei nostri clienti
          </h2>
          <ReviewCarousel reviews={reviews} locale="it" />
        </div>
      </div>
      <Contact />

      {/* Footer */}
      <footer className="py-10" style={{ backgroundColor: C.carbon, borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-4">
          <div className="text-sm" style={S.muted}>
            © 2024 GF Costruzioni SRL · P.IVA 03456060619 · Villa Literno (CE)
          </div>
          <div className="flex gap-6">
            {['Privacy', 'Cookie'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs tracking-[0.1em] uppercase transition-colors duration-300"
                style={{ color: C.heroMuted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.heroMuted)}
              >
                {l}
              </a>
            ))}
            <a
              href="#"
              className="text-xs tracking-[0.1em] uppercase transition-colors duration-300"
              style={{ color: C.heroMuted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.heroMuted)}
            >
              Torna su
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <WhatsAppCTA phoneNumber="+393885708610" message="Buongiorno, vorrei informazioni sui vostri servizi di costruzione." vertical="construction" />
    </div>
  )
}

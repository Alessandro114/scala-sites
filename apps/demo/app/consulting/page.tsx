'use client'
import Image from 'next/image';

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
  navy: '#1e293b',
  navyDark: '#0f172a',
  navyMid: '#243550',
  white: '#ffffff',
  offWhite: '#f8fafc',
  lightGrey: '#f1f5f9',
  accentBlue: '#2563eb',
  accentBlueDark: '#1d4ed8',
  accentBlueLight: '#3b82f6',
  gold: '#d4af37',
  goldLight: '#e2c453',
  goldDim: '#b8942c',
  textGrey: '#64748b',
  textMuted: '#94a3b8',
  border: '#e2e8f0',
} as const

const S = {
  pageBg: { backgroundColor: C.white, color: C.navy } as React.CSSProperties,
  navy: { color: C.navy } as React.CSSProperties,
  blue: { color: C.accentBlue } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.textGrey } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Vantage Partners',
  description: 'Strategy, execution, and results for ambitious organisations',
  url: 'https://vantagepartners.example.com',
  locale: 'en',
  vertical: 'consultos',
  theme: 'light',
  branding: { primaryColor: C.navy, accentColor: C.accentBlue },
  contact: {
    phone: '+44 20 7946 3200',
    email: 'enquiries@vantagepartners.com',
    whatsapp: '+442079463200',
    address: 'One Canada Square, Canary Wharf, London E14 5AB',
    coordinates: { lat: 51.5055, lng: -0.0235 },
  },
  social: {
    instagram: 'vantagepartners',
    facebook: 'https://facebook.com/vantagepartners',
  },
  seo: {
    title: 'Vantage Partners — Strategy. Execution. Results.',
    description: 'Boutique management consulting. Strategy, Operations, Digital Transformation, M&A, Sustainability, and HR.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const practices = [
  { name: 'Strategy', icon: '♟', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop', desc: 'Corporate strategy, competitive positioning, portfolio optimisation, market entry, and board-level advisory.' },
  { name: 'Operations', icon: '⚙', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop', desc: 'Process redesign, supply chain optimisation, cost reduction, and operational excellence programmes.' },
  { name: 'Digital Transformation', icon: '⚡', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop', desc: 'Technology strategy, ERP selection, AI adoption roadmaps, and enterprise digital change management.' },
  { name: 'M&A Advisory', icon: '🤝', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop', desc: 'Buy-side and sell-side due diligence, integration planning, carve-outs, and post-merger value creation.' },
  { name: 'Sustainability', icon: '🌱', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop', desc: 'ESG strategy, net-zero roadmaps, CSRD/TCFD reporting, supplier sustainability, and impact measurement.' },
  { name: 'HR & Organisation', icon: '👥', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop', desc: 'Organisational design, talent strategy, leadership development, culture change, and workforce planning.' },
]

const approach = [
  { phase: '01', title: 'Diagnose', desc: 'We go deep before we recommend. Interviews, data analysis, benchmarking — we understand the real problem, not just the presenting symptom.', icon: '🔍' },
  { phase: '02', title: 'Design', desc: 'With your leadership team, we co-create solutions that are ambitious but grounded in operational reality. No off-the-shelf frameworks.', icon: '📐' },
  { phase: '03', title: 'Deliver', desc: 'We stay for implementation. Our team works alongside yours to ensure the strategy lands — not just in documents, but in behaviour.', icon: '🚀' },
  { phase: '04', title: 'Measure', desc: 'Everything we do is tied to measurable outcomes. We track, report, and adjust until the result is real.', icon: '📊' },
]

const caseStudies = [
  { sector: 'FMCG', client: 'UK Consumer Goods (£800M)', title: '£42M in operational savings identified', desc: 'End-to-end supply chain redesign across 6 factories. Implemented in 18 months with zero production disruption.', metric: '+24% EBITDA margin' },
  { sector: 'Financial Services', client: 'Regional Asset Manager', title: 'Digital platform launched in 9 months', desc: 'Full digital transformation strategy for a £2Bn AUM manager. New client portal, automated reporting, and CRM integration.', metric: '40% reduction in ops cost' },
  { sector: 'Healthcare', client: 'Private Hospital Group', title: 'Post-merger integration across 8 sites', desc: 'M&A integration following a £120M acquisition. Unified clinical systems, HR structure, and procurement in 12 months.', metric: '£18M synergies year 1' },
]

const team = [
  { name: 'Dr. Claire Ashworth', title: 'Managing Partner', bg: 'McKinsey · BCG · Harvard Business School', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop' },
  { name: 'James Pemberton', title: 'Partner — Strategy & M&A', bg: 'Deloitte · Goldman Sachs · INSEAD', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop' },
  { name: 'Priya Nair', title: 'Partner — Digital & Operations', bg: 'Accenture · Amazon · Oxford', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop' },
  { name: 'Thomas Renard', title: 'Partner — Sustainability & ESG', bg: 'EY · CDP · Sciences Po Paris', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop' },
]

const industries = ['Financial Services', 'Healthcare', 'FMCG & Retail', 'Industrial & Manufacturing', 'Energy & Utilities', 'Technology', 'Private Equity', 'Public Sector', 'Professional Services', 'Real Estate', 'Media', 'Education']

const reviews: Review[] = [
  { id: '1', author: 'CEO, FTSE 250 Retailer', rating: 5, text: 'Vantage didn\'t hand us a presentation and disappear. They sent a team that worked alongside ours for six months and made the change actually happen. That\'s rare.', date: '2026-07-12', source: 'google', verified: true },
  { id: '2', author: 'CFO, PE-Backed Healthcare Group', rating: 5, text: 'The M&A integration work was extraordinary. They spotted £18M in synergies in the first 30 days that we hadn\'t modelled. Paid for themselves ten times over.', date: '2026-07-25', source: 'google', verified: true },
  { id: '3', author: 'Chair, Regional Asset Manager', rating: 5, text: 'Claire and James have an unusual combination: genuine intellectual rigor and the ability to bring a sceptical board with them. We\'ve worked with them three times.', date: '2026-08-02', source: 'google', verified: true },
  { id: '4', author: 'COO, Global FMCG Manufacturer', rating: 5, text: 'The supply chain project was the largest transformation programme we\'d ever attempted. Vantage managed the complexity without losing the business — extraordinary programme management.', date: '2026-07-20', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How are your fees structured?', answer: 'Fees are project-based or retainer-based depending on engagement type. We quote transparently after an initial scoping call — no surprise extras. Day rates range from £2,500 for Senior Consultant to £6,000 for Partner-led advisory.' },
  { question: 'What size organisations do you work with?', answer: 'We work with organisations from £20M to £2Bn+ in revenue. Our sweet spot is ambitious mid-market companies and PE-backed businesses where impact is fast and measurable.' },
  { question: 'Do you implement, or just advise?', answer: 'Both. We can design the strategy and hand over, or we can stay for full implementation. Many clients engage us for 6-18 months to see programmes through to measurable results.' },
  { question: 'How quickly can an engagement start?', answer: 'For most engagements we can begin within 2 weeks of contract signature. For urgent situations — M&A due diligence, crisis response — we can mobilise in 48 hours.' },
  { question: 'Do you have sector specialists?', answer: 'Yes. Each partner leads a sector practice. We do not staff projects with generalists alone — every engagement includes a partner with deep sector experience.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 2 },
  { id: '2', date: today, time: '11:00', available: true, spotsLeft: 1 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 3 },
  { id: '4', date: today, time: '16:30', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const consultJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Vantage Partners',
  description: 'Boutique management consulting firm. Strategy, Operations, Digital Transformation, M&A.',
  url: 'https://vantagepartners.example.com',
  telephone: '+44 20 7946 3200',
  email: 'enquiries@vantagepartners.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'One Canada Square',
    addressLocality: 'London',
    postalCode: 'E14 5AB',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5055, longitude: -0.0235 },
}

const consultFaqJsonLd = {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ borderBottom: `1px solid ${C.border}`, boxShadow: '0 1px 8px rgba(15,23,42,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="flex items-end gap-0.5">
            <div className="w-3 h-5" style={{ backgroundColor: C.accentBlue }} />
            <div className="w-3 h-7" style={{ backgroundColor: C.navy }} />
            <div className="w-3 h-4" style={{ backgroundColor: C.gold }} />
          </div>
          <span className="font-semibold tracking-tight text-base" style={S.navy}>Vantage Partners</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Practices', 'Approach', 'Team', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-sm transition-colors duration-200"
              style={S.muted}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.navy)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textGrey)}
            >
              {item}
            </a>
          ))}
          <a href="#contact"
            className="px-6 py-2.5 text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: C.accentBlue, color: C.white, borderRadius: '2px' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.accentBlueDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.accentBlue)}
          >
            Get in Touch
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <style>{`
        @keyframes wordReveal {
          from { opacity: 0; transform: translateY(40px); clip-path: inset(0 0 100% 0); }
          to { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0% 0); }
        }
        @keyframes triReveal {
          from { opacity: 0; transform: scale(0.8) rotate(0deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes logoStrip {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
        .word-stagger { animation: wordReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .word-1 { animation-delay: 0.2s; }
        .word-2 { animation-delay: 0.45s; }
        .word-3 { animation-delay: 0.7s; }
        .tri-reveal { animation: triReveal 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        .logo-strip { animation: logoStrip 0.6s ease-out forwards; opacity: 0; }
        .divider-line { animation: lineGrow 0.8s ease-out 1.2s forwards; transform: scaleX(0); transform-origin: left; }
      `}</style>

      {/* Large geometric background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Navy large rectangle — right side */}
        <div className="absolute top-0 right-0 w-[45%] h-full" style={{ backgroundColor: C.navyDark }} />

        {/* Gold accent triangle CSS shape */}
        <div className="tri-reveal absolute" style={{
          top: '40%', right: '43%',
          width: 0, height: 0,
          borderTop: '80px solid transparent',
          borderBottom: '80px solid transparent',
          borderLeft: `120px solid ${C.gold}`,
          animationDelay: '1s',
        }} />

        {/* Blue accent rectangle */}
        <div className="tri-reveal absolute w-8 h-32" style={{
          top: '20%', right: '44.5%',
          backgroundColor: C.accentBlue,
          animationDelay: '1.2s',
        }} />

        {/* Small gold dots */}
        {[[70, 30], [75, 50], [85, 20], [90, 65]].map(([x, y], i) => (
          <div key={i} className="tri-reveal absolute w-2 h-2 rounded-full"
            style={{ left: `${x}%`, top: `${y}%`, backgroundColor: C.gold, opacity: 0.4, animationDelay: `${1.4 + i * 0.1}s` }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: headline */}
        <div>
          <p className="word-stagger word-1 text-xs tracking-[0.4em] uppercase mb-8" style={S.muted}>
            Management Consulting &middot; London &amp; Global
          </p>

          <h1 className="mb-8">
            <span className="word-stagger word-1 block font-extralight tracking-tight"
              style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: C.navy, lineHeight: 1.05 }}>Strategy.</span>
            <span className="word-stagger word-2 block font-extralight tracking-tight"
              style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: C.accentBlue, lineHeight: 1.05 }}>Execution.</span>
            <span className="word-stagger word-3 block font-extralight tracking-tight"
              style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: C.gold, lineHeight: 1.05 }}>Results.</span>
          </h1>

          <div className="divider-line h-0.5 w-24 mb-8" style={{ backgroundColor: C.accentBlue }} />

          <p className="logo-strip text-base font-light leading-relaxed max-w-lg mb-10" style={{ ...S.muted, animationDelay: '0.9s' }}>
            A boutique firm of senior practitioners from McKinsey, BCG, Deloitte, and Goldman Sachs.
            We help ambitious organisations navigate complexity and deliver measurable results.
          </p>

          <div className="logo-strip flex flex-wrap gap-4 mb-10" style={{ animationDelay: '1s' }}>
            <a href="#contact"
              className="px-10 py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300"
              style={{ backgroundColor: C.accentBlue, color: C.white }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.accentBlueDark)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.accentBlue)}
            >
              Speak to a Partner
            </a>
            <a href="#practices"
              className="border px-10 py-4 text-sm font-light tracking-[0.1em] uppercase transition-all duration-300"
              style={{ borderColor: C.textGrey, color: C.navy }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.navy; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.textGrey; }}
            >
              Our Practices
            </a>
          </div>

          {/* Client logo strip — placeholders */}
          <div className="logo-strip" style={{ animationDelay: '1.1s' }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={S.muted}>Trusted by leaders in</p>
            <div className="flex flex-wrap gap-3">
              {['FMCG', 'Financial Services', 'Healthcare', 'Private Equity', 'Energy', 'Technology'].map((sector) => (
                <span key={sector} className="text-xs px-3 py-1.5"
                  style={{ backgroundColor: C.lightGrey, color: C.textGrey, borderRadius: '2px' }}>
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: floating stats on navy background */}
        <div className="hidden lg:grid grid-cols-2 gap-4 relative">
          {[
            { n: '120+', l: 'Engagements Delivered', color: C.white },
            { n: '£2.4Bn', l: 'Value Created for Clients', color: C.gold },
            { n: '18', l: 'Years Average Partner Experience', color: C.white },
            { n: '97%', l: 'Clients Who Return', color: C.accentBlueLight },
          ].map((s, i) => (
            <div key={s.l}
              className="tri-reveal p-6"
              style={{ animationDelay: `${0.8 + i * 0.1}s`, backgroundColor: C.navyMid, borderRadius: '2px', border: `1px solid rgba(255,255,255,0.08)` }}>
              <div className="text-3xl font-extralight mb-2" style={{ color: s.color }}>{s.n}</div>
              <div className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.l}</div>
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
export default function ConsultingPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(consultJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(consultFaqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.accentBlue }} />

      <Navbar />
      <Hero />

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.navy }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Strategy', 'M&A Advisory', 'Digital Transformation', 'Operations', 'Sustainability & ESG', 'HR & Organisation', 'Private Equity', 'Board Advisory'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-light tracking-[0.2em] uppercase" style={S.white}>{item}</span>
                  <span style={{ color: C.gold }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRACTICES
          ═══════════════════════════════════════ */}
      <section id="practices" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.offWhite }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Our Practices</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.navy}>Where We Operate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {practices.map((p, i) => (
              <div key={p.name}
                className="reveal-up group bg-white overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${i * 0.08}s`, borderRadius: '2px', border: `1px solid ${C.border}` }}>
                <div className="relative h-44 overflow-hidden">
                  <Image src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.navyDark}cc, transparent 60%)` }} />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-xl" style={S.gold}>{p.icon}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2" style={S.navy}>{p.name}</h3>
                  <p className="text-sm leading-relaxed" style={S.muted}>{p.desc}</p>
                  <a href="#contact"
                    className="mt-4 inline-block text-xs tracking-[0.2em] uppercase transition-colors duration-200"
                    style={S.blue}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.accentBlueDark)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.accentBlue)}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          APPROACH
          ═══════════════════════════════════════ */}
      <section id="approach" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.navyDark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>How We Work</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>The Vantage Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 stagger-children">
            {approach.map((phase, i) => (
              <div key={phase.phase}
                className="reveal-up relative"
                style={{ animationDelay: `${i * 0.1}s` }}>
                {i < approach.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[65%] w-full h-px" style={{ backgroundColor: `${C.gold}33` }} />
                )}
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <div className="text-xs font-medium tracking-widest mb-2" style={S.gold}>PHASE {phase.phase}</div>
                  <h3 className="text-lg font-light mb-3" style={S.white}>{phase.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CASE STUDIES
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: C.lightGrey }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Track Record</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.navy}>Results, Not Decks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {caseStudies.map((cs, i) => (
              <div key={cs.client}
                className="reveal-up bg-white p-8"
                style={{ animationDelay: `${i * 0.1}s`, borderRadius: '2px', border: `1px solid ${C.border}` }}>
                <div className="text-xs tracking-[0.3em] uppercase mb-2" style={S.blue}>{cs.sector}</div>
                <div className="text-sm mb-3" style={S.muted}>{cs.client}</div>
                <div className="h-px w-12 mb-4" style={{ backgroundColor: C.gold }} />
                <h3 className="text-lg font-semibold mb-3" style={S.navy}>{cs.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={S.muted}>{cs.desc}</p>
                <div className="text-2xl font-extralight" style={S.blue}>{cs.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEAM
          ═══════════════════════════════════════ */}
      <section id="team" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>The Partnership</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.navy}>Our Partners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {team.map((member, i) => (
              <div key={member.name} className="reveal-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="relative overflow-hidden mb-4 h-64">
                  <Image src={member.image} alt={member.name} className="w-full h-full object-cover" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.navyDark}cc, transparent 50%)` }} />
                </div>
                <h3 className="font-semibold mb-1" style={S.navy}>{member.name}</h3>
                <p className="text-sm mb-2" style={S.blue}>{member.title}</p>
                <p className="text-xs" style={S.muted}>{member.bg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INDUSTRIES
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ backgroundColor: C.navy }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase mb-8 text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>Industries We Serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="text-sm px-4 py-2"
                style={{ border: `1px solid rgba(255,255,255,0.15)`, color: 'rgba(255,255,255,0.7)', borderRadius: '2px' }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / BOOKING
          ═══════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.offWhite }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Initial Conversation</p>
            <h2 className="text-4xl font-extralight mb-6" style={S.navy}>Speak to a Partner</h2>
            <p className="leading-relaxed mb-8" style={S.muted}>
              Every initial conversation is partner-led. We will spend 45 minutes understanding
              your challenge before discussing how we might help.
            </p>
            <div className="space-y-5">
              {[
                { label: 'London Office', detail: 'One Canada Square, Canary Wharf, E14 5AB' },
                { label: 'Phone', detail: '+44 20 7946 3200' },
                { label: 'Email', detail: 'enquiries@vantagepartners.com' },
                { label: 'NDA', detail: 'Happy to sign before the first call if required' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.accentBlue}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.blue}>{info.label}</p>
                    <p className="text-sm" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 47, label: 'discovery calls booked this month' }}
              vertical="consultos" onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.navyDark }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Client Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>What Our Clients Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Before You Enquire</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.navy}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="ConsultingOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079463200" message="Hello Vantage Partners — I'd like to discuss a consulting engagement" vertical="consultos" />
    </div>
  )
}

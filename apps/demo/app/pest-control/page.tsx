'use client'

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type {
  SiteConfig,
  Review,
  FAQItem,
  BookingSlot,
} from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  darkGreen: '#0a1a0a',
  darkGreenMid: '#0f2410',
  darkGreenLight: '#162b16',
  safeGreen: '#22c55e',
  safeGreenDark: '#16a34a',
  amber: '#f59e0b',
  amberLight: '#fbbf24',
  red: '#ef4444',
  cream: '#f0fdf4',
  white: '#ffffff',
  muted: '#4b7a4b',
  mutedLight: '#6aaa6a',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'ShieldPest Control',
  description: 'Protect your property — BPCA certified pest control',
  url: 'https://shieldpest.example.com',
  locale: 'en',
  vertical: 'tradeos',
  theme: 'classic',
  branding: { primaryColor: C.darkGreen, accentColor: C.safeGreen },
  contact: {
    phone: '+44 800 456 7890',
    email: 'emergency@shieldpest.example.com',
    whatsapp: '+448004567890',
    address: '7 Vermin Lane, Birmingham B12 0AT',
    coordinates: { lat: 52.4862, lng: -1.8904 },
  },
  social: {
    instagram: 'shieldpestcontrol',
    facebook: 'https://facebook.com/shieldpestcontrol',
  },
  seo: {
    title: 'ShieldPest Control | BPCA Certified | 24/7 Emergency',
    description: 'BPCA-certified pest control for homes and businesses. Emergency same-day service. Rodents, wasps, bed bugs, and more.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const pests = [
  {
    name: 'Rodents',
    emoji: '🐀',
    signs: 'Droppings, gnaw marks, scratching at night, nests in loft/under floors.',
    treatment: 'Bait stations, traceability tracking, proofing, follow-up visits.',
    urgency: 'High',
  },
  {
    name: 'Insects',
    emoji: '🦟',
    signs: 'Cockroach casings, ant trails, flea bites, silverfish in bathrooms.',
    treatment: 'Targeted insecticide, residual spray, monitoring traps.',
    urgency: 'Medium',
  },
  {
    name: 'Birds',
    emoji: '🐦',
    signs: 'Roosting/nesting on ledges, accumulation of guano, noise and mess.',
    treatment: 'Spikes, netting, wire systems. All methods humane and legal.',
    urgency: 'Low',
  },
  {
    name: 'Wasps',
    emoji: '🐝',
    signs: 'Nest visible (under eaves, in loft, in ground). High wasp activity.',
    treatment: 'Professional nest treatment. Same-day service in most cases.',
    urgency: 'High',
  },
  {
    name: 'Bed Bugs',
    emoji: '🛏',
    signs: 'Itchy bites in clusters, blood spots on sheets, musty sweetish smell.',
    treatment: 'Heat treatment or chemical treatment over 2–3 visits. 100% effective.',
    urgency: 'Very High',
  },
  {
    name: 'Wildlife',
    emoji: '🦡',
    signs: 'Foxes, squirrels, moles, rabbits — damage to garden or structure.',
    treatment: 'Humane trapping and relocation per CRoW Act regulations.',
    urgency: 'Medium',
  },
]

const urgencyColors: Record<string, string> = {
  'Very High': C.red,
  'High': C.amber,
  'Medium': C.safeGreen,
  'Low': C.mutedLight,
}

const processSteps = [
  { step: '1', name: 'Call', desc: 'Call or WhatsApp — same-day emergency appointments available 24/7, 365 days a year.' },
  { step: '2', name: 'Inspect', desc: 'Our certified technician inspects your property, identifies the pest, and assesses the extent.' },
  { step: '3', name: 'Treat', desc: 'Targeted treatment using the safest approved methods. Safe for children and pets where specified.' },
  { step: '4', name: 'Prevent', desc: 'Proofing advice, monitoring visits, and ongoing contract support to stop recurrence.' },
]

const certifications = [
  { name: 'BPCA Member', desc: 'British Pest Control Association — the industry\'s primary professional body. Rigorous standards, regular auditing.' },
  { name: 'RSPH Level 2', desc: 'All technicians hold Royal Society for Public Health pest control qualification.' },
  { name: 'BASIS PROMPT', desc: 'Continuing professional development. Our knowledge is always up to date.' },
  { name: 'Safe Contractor', desc: 'Approved for commercial and public sector contracts across the UK.' },
]

const plans = [
  {
    name: 'One-Off Treatment',
    price: 'From £120',
    per: 'per visit',
    desc: 'Single pest problem, one or two treatments as required. Certificate provided.',
    included: ['Same-day availability', 'Treatment guarantee', 'Follow-up call', 'Written report'],
    featured: false,
  },
  {
    name: 'Annual Contract',
    price: '£35',
    per: '/month',
    desc: 'Unlimited call-outs for covered pests. Priority scheduling. Ideal for landlords and businesses.',
    included: ['Unlimited call-outs', 'Quarterly inspections', 'Proofing advice', 'Priority response', 'Compliance certificates', 'Dedicated technician'],
    featured: true,
  },
]

const reviews: Review[] = [
  { id: '1', author: 'Steve P.', rating: 5, text: 'Called at 11pm about a wasp nest in the garage ceiling. Technician arrived by 9am — 48 hours later there was no trace. Professional, efficient, and reasonably priced.', date: '2026-07-17', source: 'google', verified: true },
  { id: '2', author: 'Hannah T.', rating: 5, text: 'Bed bugs from a hotel stay. ShieldPest were discreet, thorough, and the heat treatment worked first time. No recurrence 3 months later. Can\'t thank them enough.', date: '2026-07-25', source: 'google', verified: true },
  { id: '3', author: 'Mark R.', rating: 5, text: 'I manage 12 rental properties. The annual contract is outstanding value — unlimited call-outs with a 4-hour emergency SLA. My tenants get a same-day response. It\'s made my life significantly easier.', date: '2026-08-01', source: 'trustpilot', verified: true },
  { id: '4', author: 'Claire B.', rating: 5, text: 'Mouse problem in the kitchen. They identified the entry point, treated, and proofed it in one visit. No more scratching. The technician was knowledgeable and put me at ease.', date: '2026-08-03', source: 'google', verified: true },
  { id: '5', author: 'James N.', rating: 4, text: 'Used for a restaurant inspection after a council flag. ShieldPest came same day, dealt with the issue, issued a compliance report, and we passed the re-inspection. Couldn\'t have asked for more.', date: '2026-07-29', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How quickly can you respond?', answer: 'For emergencies (wasps, rodents in a food premises, or bed bugs) we aim to respond within 2–4 hours during business hours, and within 4–6 hours at night. Same-day service is available 365 days a year, including bank holidays.' },
  { question: 'Are your treatments safe for children and pets?', answer: 'Yes. We always use the minimum effective treatment and select products appropriate to your household. We\'ll always advise you how long to keep children and pets out of treated areas — usually 2–4 hours.' },
  { question: 'How many visits will I need?', answer: 'For most insect infestations, 1–2 visits are sufficient. For rodents, we typically recommend 3 visits over 2–3 weeks to ensure complete eradication. Bed bug heat treatment is a single intensive visit. We never charge for more visits than are genuinely needed.' },
  { question: 'Do you offer a guarantee?', answer: 'Yes. If the pest problem returns within 30 days of our treatment, we\'ll return free of charge. For annual contract customers, this guarantee is unlimited and ongoing.' },
  { question: 'Is pest control discreet?', answer: 'Absolutely. Our vans are unmarked. Technicians wear plain work clothes by request. We understand the sensitivity around pest issues and we treat every job with complete discretion.' },
  { question: 'Can you treat commercial premises?', answer: 'Yes. We work extensively with restaurants, food manufacturers, schools, hotels, care homes, and office buildings. We provide full compliance documentation including service reports, chemical records, and risk assessments.' },
  { question: 'How do I know if I have bed bugs?', answer: 'Signs include itchy red bites in clusters or a line (usually on exposed skin), small blood spots on sheets or pillowcases, a faintly sweet musty odour, and tiny dark spots (excrement) on mattress seams. If in doubt, call us for a free phone assessment.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '08:00', available: true, spotsLeft: 1 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 2 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '13:00', available: true, spotsLeft: 3 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '16:00', available: true, spotsLeft: 1 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '19:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://shieldpest.example.com',
  name: 'ShieldPest Control',
  description: 'BPCA-certified pest control for homes and businesses across the Midlands. 24/7 emergency service.',
  url: 'https://shieldpest.example.com',
  telephone: '+44 800 456 7890',
  email: 'emergency@shieldpest.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Vermin Lane',
    addressLocality: 'Birmingham',
    postalCode: 'B12 0AT',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 52.4862, longitude: -1.8904 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
  ],
  priceRange: '££',
  sameAs: ['https://instagram.com/shieldpestcontrol'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
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
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.darkGreen}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.safeGreen}22` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* Shield icon */}
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
            <path d="M10 0L0 4v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V4L10 0Z" fill={C.safeGreen} />
            <path d="M6 12l3 3 5-5" stroke={C.darkGreen} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: C.cream, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 300 }}>
            ShieldPest
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Pests', 'Services', 'Plans', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.mutedLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.safeGreen)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.mutedLight)}
            >
              {item}
            </a>
          ))}
          <a
            href="tel:+448004567890"
            className="flex items-center gap-2 border px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300"
            style={{ borderColor: C.red, color: C.red }}
          >
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: C.red, animation: 'emergPulse 1.4s ease-in-out infinite' }} />
            Emergency
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// SHIELD CSS COMPONENT
// ─────────────────────────────────────────────
function ShieldBadge({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 80 96" fill="none">
      <path d="M40 0L0 16v32c0 22 17.2 42.8 40 48 22.8-5.2 40-26 40-48V16L40 0Z" fill={C.safeGreen} />
      <path d="M24 48l12 12 20-20" stroke={C.darkGreen} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PestOSDemoPage() {
  return (
    <div style={{ backgroundColor: C.darkGreen, color: C.cream }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.safeGreen }} />

      <style>{`
        @keyframes emergPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(2); opacity: 0.4; }
        }
        @keyframes shieldReveal {
          from { opacity: 0; transform: scale(0.8) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes pestFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(-6px) rotate(-3deg); }
        }
        @keyframes scanGrid {
          from { background-position: 0 0; }
          to { background-position: 60px 60px; }
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Professional Urgent
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${C.darkGreen} 0%, ${C.darkGreenMid} 60%, #0d220d 100%)` }}
      >
        {/* Animated grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${C.safeGreen}08 1px, transparent 1px), linear-gradient(90deg, ${C.safeGreen}08 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'scanGrid 20s linear infinite',
          }}
        />

        {/* Floating pest silhouettes — decorative */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {[
            { emoji: '🐀', top: '15%', right: '12%', size: '3rem', delay: '0s' },
            { emoji: '🐝', top: '65%', right: '5%', size: '2rem', delay: '1.2s' },
            { emoji: '🦟', bottom: '20%', left: '8%', size: '1.8rem', delay: '0.6s' },
            { emoji: '🐜', top: '40%', right: '20%', size: '1.5rem', delay: '2s' },
            { emoji: '🦗', bottom: '35%', right: '15%', size: '1.5rem', delay: '1.8s' },
          ].map((p) => (
            <div
              key={p.emoji}
              className="absolute hidden lg:block"
              style={{
                top: p.top,
                bottom: p.bottom,
                left: p.left,
                right: p.right,
                fontSize: p.size,
                opacity: 0.12,
                animation: `pestFloat 6s ease-in-out infinite ${p.delay}`,
              }}
            >
              {p.emoji}
            </div>
          ))}
        </div>

        {/* Green glow top right */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top right, ${C.safeGreen}12, transparent 60%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="stagger-children">
            {/* BPCA badge */}
            <div
              className="reveal-clip-up inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase"
              style={{ border: `1px solid ${C.safeGreen}44`, color: C.safeGreen, backgroundColor: `${C.safeGreen}11` }}
            >
              <span>&#10003;</span>
              BPCA Certified &middot; RSPH Qualified
            </div>

            <h1 className="mb-6">
              {['Protect', 'Your', 'Property.'].map((word, i) => (
                <span
                  key={word}
                  className="reveal-clip-up block font-black uppercase leading-[0.9]"
                  style={{
                    fontSize: 'clamp(3rem, 9vw, 7.5rem)',
                    color: i === 1 ? C.safeGreen : C.cream,
                    letterSpacing: '-0.02em',
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              className="reveal-up text-lg font-light leading-relaxed mb-10 max-w-xl"
              style={{ color: C.mutedLight, animationDelay: '0.45s' }}
            >
              BPCA-certified technicians. Same-day emergency response. Residential, commercial,
              and contract pest control across the West Midlands.
            </p>

            {/* Stats */}
            <div className="reveal-up flex flex-wrap gap-8 mb-12" style={{ animationDelay: '0.55s' }}>
              {[
                { n: '24/7', label: 'Emergency' },
                { n: '98%', label: '1st Visit Fix' },
                { n: 'BPCA', label: 'Certified' },
                { n: '12yr', label: 'Experience' },
              ].map((s) => (
                <div key={s.n}>
                  <div style={{ color: C.safeGreen, fontSize: '1.6rem', fontWeight: 800 }}>{s.n}</div>
                  <div style={{ color: C.mutedLight, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.65s' }}>
              <a
                href="tel:+448004567890"
                className="flex items-center gap-3 px-10 py-4 text-sm tracking-[0.15em] uppercase font-bold transition-all duration-300"
                style={{ backgroundColor: C.red, color: C.white }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dc2626' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.red }}
              >
                <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: C.white, animation: 'emergPulse 1.4s ease-in-out infinite' }} />
                Emergency Line
              </a>
              <a
                href="#contact"
                className="border-2 px-10 py-4 text-sm tracking-[0.15em] uppercase font-light transition-all duration-300"
                style={{ borderColor: C.safeGreen, color: C.safeGreen }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.safeGreen
                  e.currentTarget.style.color = C.darkGreen
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = C.safeGreen
                }}
              >
                Book Inspection
              </a>
            </div>
          </div>

          {/* Right: Shield + service area */}
          <div
            className="hidden md:flex flex-col items-center justify-center gap-8"
            style={{ animation: 'shieldReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both' }}
          >
            <ShieldBadge size={180} />
            <div className="text-center">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: C.mutedLight }}>Coverage Area</p>
              <p className="text-sm font-light" style={{ color: C.safeGreen }}>
                Birmingham &middot; Coventry &middot; Wolverhampton<br />
                Solihull &middot; Dudley &middot; Walsall
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. PESTS GRID — Identification Guide
          ═══════════════════════════════════════ */}
      <section id="pests" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.darkGreenMid }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.safeGreen }}>Identification Guide</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={{ color: C.cream }}>Pests We Treat</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {pests.map((pest, i) => (
              <div
                key={pest.name}
                className="reveal-up rounded-xl p-8 group cursor-default transition-all duration-400"
                style={{
                  backgroundColor: C.darkGreenLight,
                  border: `1px solid ${C.safeGreen}18`,
                  animationDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${C.safeGreen}44`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${C.safeGreen}11`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${C.safeGreen}18`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div style={{ fontSize: '2.5rem' }}>{pest.emoji}</div>
                  <div
                    className="text-xs tracking-[0.15em] uppercase px-3 py-1 rounded-full font-bold"
                    style={{
                      backgroundColor: `${urgencyColors[pest.urgency]}22`,
                      color: urgencyColors[pest.urgency],
                    }}
                  >
                    {pest.urgency}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: C.cream }}>{pest.name}</h3>
                <div className="mb-3">
                  <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: C.safeGreen }}>Signs</p>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.mutedLight }}>{pest.signs}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: C.amber }}>Treatment</p>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.mutedLight }}>{pest.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. COMMERCIAL vs RESIDENTIAL SPLIT
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.darkGreen }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              type: 'Residential',
              desc: 'Discreet, unmarked vans. Safe treatments for families with children and pets. Same-day service. Written guarantee on every job.',
              items: ['Houses & Flats', 'Student Accommodation', 'HMOs & Landlord Properties', 'Care Homes', 'Schools'],
              img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
              accent: C.safeGreen,
            },
            {
              type: 'Commercial',
              desc: 'Full compliance documentation. Risk assessments, chemical usage records, and COSHH sheets. Scheduled contracts for peace of mind.',
              items: ['Restaurants & Cafes', 'Food Manufacturing', 'Hotels & Hospitality', 'Offices & Warehouses', 'Retail Premises'],
              img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
              accent: C.amber,
            },
          ].map((s, i) => (
            <div
              key={s.type}
              className="reveal-up rounded-2xl overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.type}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.4) saturate(0.4)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${C.darkGreenLight}ee, transparent 60%)` }}
                />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-black uppercase" style={{ color: s.accent }}>{s.type}</h3>
                </div>
              </div>
              <div className="p-8" style={{ backgroundColor: C.darkGreenLight }}>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: C.mutedLight }}>{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-light"
                      style={{ color: C.cream }}
                    >
                      <span style={{ color: s.accent, fontWeight: 700 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. EMERGENCY PROCESS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.darkGreenMid }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.safeGreen }}>How It Works</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ color: C.cream }}>Emergency Process</h2>
          </div>
          <div className="relative">
            <div
              className="absolute top-10 left-[10%] right-[10%] h-[2px] hidden md:block pointer-events-none"
              style={{ background: `linear-gradient(90deg, ${C.safeGreen}44, ${C.safeGreen}88, ${C.safeGreen}44)` }}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 stagger-children">
              {processSteps.map((step, i) => (
                <div key={step.step} className="reveal-up text-center" style={{ animationDelay: `${i * 0.12}s` }}>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black"
                    style={{
                      backgroundColor: C.safeGreen,
                      color: C.darkGreen,
                      position: 'relative',
                      zIndex: 1,
                      boxShadow: `0 0 0 6px ${C.safeGreen}22`,
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: C.cream }}>{step.name}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.mutedLight }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. CERTIFICATIONS
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: C.darkGreen }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.safeGreen }}>Accreditations</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase" style={{ color: C.cream }}>Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="reveal-up rounded-xl p-8 text-center"
                style={{
                  backgroundColor: C.darkGreenLight,
                  border: `1px solid ${C.safeGreen}22`,
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <ShieldBadge size={44} />
                <h3 className="text-sm font-bold mb-3 mt-4 tracking-[0.05em]" style={{ color: C.safeGreen }}>{cert.name}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: C.mutedLight }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. SERVICE CONTRACT PLANS
          ═══════════════════════════════════════ */}
      <section id="plans" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.darkGreenMid }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.safeGreen }}>Ongoing Protection</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ color: C.cream }}>Service Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {plans.map((p, i) => (
              <div
                key={p.name}
                className="reveal-up rounded-2xl p-10"
                style={{
                  backgroundColor: p.featured ? C.safeGreen : C.darkGreenLight,
                  border: p.featured ? `2px solid ${C.safeGreen}` : `1px solid ${C.safeGreen}22`,
                  transform: p.featured ? 'scale(1.03)' : 'scale(1)',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {p.featured && (
                  <div
                    className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-1 rounded-full mb-6 font-bold"
                    style={{ backgroundColor: C.darkGreen, color: C.safeGreen }}
                  >
                    Best Value
                  </div>
                )}
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: p.featured ? C.darkGreen : C.cream }}
                >
                  {p.name}
                </h3>
                <div
                  className="flex items-end gap-1 mb-2"
                  style={{ color: p.featured ? C.darkGreen : C.safeGreen }}
                >
                  <span className="text-4xl font-black">{p.price}</span>
                  <span className="text-sm mb-1">{p.per}</span>
                </div>
                <p
                  className="text-sm font-light leading-relaxed mb-6"
                  style={{ color: p.featured ? `${C.darkGreen}cc` : C.mutedLight }}
                >
                  {p.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {p.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-light"
                      style={{ color: p.featured ? C.darkGreenMid : C.cream }}
                    >
                      <span style={{ color: p.featured ? C.darkGreen : C.safeGreen, fontWeight: 700 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center border px-6 py-3 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300"
                  style={{
                    borderColor: p.featured ? C.darkGreen : C.safeGreen,
                    color: p.featured ? C.darkGreen : C.safeGreen,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = p.featured ? C.darkGreen : C.safeGreen
                    e.currentTarget.style.color = p.featured ? C.safeGreen : C.darkGreen
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = p.featured ? C.darkGreen : C.safeGreen
                  }}
                >
                  Get Protected
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.darkGreen }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.safeGreen }}>Customer Feedback</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ color: C.cream }}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.darkGreenMid }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.safeGreen }}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ color: C.cream }}>FAQ</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. EMERGENCY CONTACT / BOOKING
          ═══════════════════════════════════════ */}
      <section id="contact" className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: C.darkGreen }}>
        {/* Red emergency glow */}
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top right, ${C.red}18, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="reveal-left">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase"
              style={{ backgroundColor: `${C.red}22`, color: C.red, border: `1px solid ${C.red}33` }}
            >
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: C.red, animation: 'emergPulse 1.4s ease-in-out infinite' }} />
              24/7 Emergency Available
            </div>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.safeGreen }}>Get Help Now</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8" style={{ color: C.cream }}>
              Emergency<br />Contact
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: C.mutedLight }}>
              Call, WhatsApp, or book online. For emergencies — always call first.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Emergency Line', detail: '+44 800 456 7890 — 24/7, 365 days', urgent: true },
                { title: 'Response Time', detail: '2–4 hours for emergencies. Same-day standard.' },
                { title: 'Coverage', detail: 'Birmingham, Coventry, Wolverhampton, Solihull & surrounds.' },
                { title: 'Pricing', detail: 'One-off from £120. No surprise fees. Fixed quotes only.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div
                    className="w-1 min-h-[40px] rounded-full flex-shrink-0"
                    style={{ backgroundColor: info.urgent ? `${C.red}88` : `${C.safeGreen}55` }}
                  />
                  <div>
                    <p
                      className="text-xs tracking-[0.2em] uppercase mb-1"
                      style={{ color: info.urgent ? C.red : C.safeGreen }}
                    >
                      {info.title}
                    </p>
                    <p className="text-sm font-light" style={{ color: C.mutedLight }}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 204, label: 'properties protected this month' }}
              vertical="tradeos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA
        phoneNumber="+448004567890"
        message="Hi! I need pest control — can you help?"
        vertical="tradeos"
      />
    </div>
  )
}

'use client'
import Image from 'next/image';

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
  black: '#111111',
  darkBg: '#161616',
  darkCard: '#1e1e1e',
  blue: '#3b82f6',
  blueDark: '#2563eb',
  blueGlow: '#60a5fa',
  yellow: '#eab308',
  yellowLight: '#facc15',
  white: '#f8fafc',
  muted: '#64748b',
  mutedLight: '#94a3b8',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'VoltPro Electrical',
  description: 'NICEIC approved electricians — 24/7 emergency service',
  url: 'https://voltpro.example.com',
  locale: 'en',
  vertical: 'tradeos',
  theme: 'classic',
  branding: { primaryColor: C.black, accentColor: C.blue },
  contact: {
    phone: '+44 800 123 4567',
    email: 'jobs@voltpro.example.com',
    whatsapp: '+448001234567',
    address: '22 Industrial Way, Manchester M12 6FT',
    coordinates: { lat: 53.4808, lng: -2.2426 },
  },
  social: {
    instagram: 'voltproelectrical',
    facebook: 'https://facebook.com/voltproelectrical',
  },
  seo: {
    title: 'VoltPro Electrical | NICEIC Approved | 24/7 Emergency',
    description: 'Licensed NICEIC electricians. Rewiring, fuse boxes, EV chargers, fire alarms. 24/7 emergency call-out across Greater Manchester.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    name: 'Full Rewiring',
    desc: 'Complete house rewiring to 18th edition IET wiring regulations. Certificated and guaranteed.',
    price: 'From £2,500',
    icon: '🏠',
    urgent: false,
  },
  {
    name: 'Fuse Box Upgrades',
    desc: 'Replace old fuse boards with modern consumer units featuring RCD protection. Required before selling.',
    price: 'From £450',
    icon: '⚡',
    urgent: false,
  },
  {
    name: 'Lighting Design',
    desc: 'Downlighters, feature lighting, smart dimmers, and energy-efficient LED conversions throughout your home.',
    price: 'Free quote',
    icon: '💡',
    urgent: false,
  },
  {
    name: 'EV Charger Install',
    desc: 'Home EV charger installation. OZEV-approved installer. Government grant available (up to £350).',
    price: 'From £600',
    icon: '🔌',
    urgent: false,
  },
  {
    name: 'Fire Alarms',
    desc: 'Grade D1 and Grade A interlinked alarm systems for domestic and commercial. Insurance-compliant.',
    price: 'From £180',
    icon: '🚨',
    urgent: false,
  },
  {
    name: 'PAT Testing',
    desc: 'Portable Appliance Testing for landlords, businesses, and schools. Same-day certificate issued.',
    price: 'From £75',
    icon: '🔍',
    urgent: false,
  },
]

const projects = [
  { label: 'Victorian Terrace Rewire', location: 'Didsbury', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
  { label: 'Office Fit-Out', location: 'City Centre', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
  { label: 'EV Charge Point', location: 'Chorlton', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop' },
  { label: 'Smart Lighting System', location: 'Salford', image: 'https://images.unsplash.com/photo-1565538420870-da08ff96a207?w=600&h=400&fit=crop' },
  { label: 'Fuse Board Upgrade', location: 'Stretford', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop' },
  { label: 'Commercial Fire Alarm', location: 'Deansgate', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop' },
]

const certifications = [
  { name: 'NICEIC Approved', desc: 'Domestic Installer & Approved Contractor — the highest level of competency in electrical work.' },
  { name: '18th Edition IET', desc: 'All works carried out to the latest edition of BS 7671 Wiring Regulations.' },
  { name: 'OZEV Approved', desc: 'Office for Zero Emission Vehicles approved for government-funded EV charge point installations.' },
  { name: 'Part P Certified', desc: 'Building regulations certification issued directly. No council inspection required.' },
]

const serviceAreas = ['Manchester', 'Salford', 'Stretford', 'Chorlton', 'Didsbury', 'Stockport', 'Trafford', 'Eccles', 'Oldham', 'Bolton']

const reviews: Review[] = [
  { id: '1', author: 'Paul M.', rating: 5, text: 'Had the whole house rewired. VoltPro were immaculate — they protected every floor, hoovered after themselves, and finished a day early. Certificate same day.', date: '2026-07-14', source: 'google', verified: true },
  { id: '2', author: 'Sandra K.', rating: 5, text: 'Called at 11pm — trip switch wouldn\'t reset and I have a baby at home. An engineer arrived in 40 minutes. Fixed in 20. The callout fee was more than fair.', date: '2026-07-20', source: 'google', verified: true },
  { id: '3', author: 'Tom R.', rating: 5, text: 'EV charger installed and OZEV grant sorted — they handled all the paperwork. Flawless tidy job, Zappi charger works perfectly.', date: '2026-08-01', source: 'google', verified: true },
  { id: '4', author: 'Helen B.', rating: 5, text: 'Booked a fuse board upgrade for a property I\'m selling. Done in one day, Part P certificate issued and sent to the council automatically. Brilliant service.', date: '2026-08-03', source: 'trustpilot', verified: true },
  { id: '5', author: 'James F.', rating: 4, text: 'Quick quote, fair price, quality finish on the lighting install. No mess, no fuss. Will use again for the other properties.', date: '2026-07-28', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Are you NICEIC approved?', answer: 'Yes. VoltPro is an NICEIC Approved Contractor — the highest level of accreditation for electrical contractors in the UK. You can verify our registration on the NICEIC website using our registration number NIC23456.' },
  { question: 'Do you offer a guarantee on your work?', answer: 'All electrical work comes with a 5-year workmanship guarantee, in addition to any manufacturer warranties on parts. We also issue an Electrical Installation Certificate for all new works.' },
  { question: 'How much does a full rewire cost?', answer: 'A typical 3-bedroom semi-detached house rewire costs £2,500–£4,000 depending on the size, number of circuits, and existing installation. We\'ll give you a fixed price after a free site visit — no surprises.' },
  { question: 'Can you install an EV charger and claim the OZEV grant?', answer: 'Yes. We are an OZEV-approved installer, which means you can claim the £350 EVHS grant through us. We handle all the grant paperwork — you don\'t need to do anything except choose your charger.' },
  { question: 'Do I need to be home during the work?', answer: 'For most jobs yes, someone over 18 must be present. For return visits or agreed access arrangements, we can use a keysafe. We\'ll always call 30 minutes before arrival.' },
  { question: 'How fast is your 24/7 emergency service?', answer: 'Our guaranteed response time for emergency call-outs is 60 minutes within 10 miles of Manchester city centre. We carry the most common fuse boards, MCBs, and RCDs on every van to resolve issues on the first visit.' },
  { question: 'Do you work on commercial properties?', answer: 'Yes. We work across domestic, commercial, and light industrial premises. We have full public liability insurance (£5m) and employers liability (£10m). Risk assessments and method statements available on request.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '08:00', available: true, spotsLeft: 2 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 1 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '13:00', available: true, spotsLeft: 3 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '15:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://voltpro.example.com',
  name: 'VoltPro Electrical',
  description: 'NICEIC approved electricians in Manchester. Rewiring, fuse box upgrades, EV charger installation, fire alarms, and 24/7 emergency call-out.',
  url: 'https://voltpro.example.com',
  telephone: '+44 800 123 4567',
  email: 'jobs@voltpro.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 Industrial Way',
    addressLocality: 'Manchester',
    postalCode: 'M12 6FT',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 53.4808, longitude: -2.2426 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '13:00' },
  ],
  priceRange: '££',
  sameAs: ['https://instagram.com/voltproelectrical'],
}

const faqJsonLd = {
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
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.black}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.blue}22` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* Lightning bolt logo */}
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
            <path d="M12 0L0 14h8L6 24L20 10h-8L12 0Z" fill={C.yellow} />
          </svg>
          <span style={{ color: C.white, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 300 }}>
            VoltPro
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Projects', 'Areas', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.mutedLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.blueGlow)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.mutedLight)}
            >
              {item}
            </a>
          ))}
          <a
            href="tel:+448001234567"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2"
            style={{ borderColor: C.yellow, color: C.yellow }}
          >
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: C.yellow, animation: 'emergencyPulse 1.5s ease-in-out infinite' }} />
            24/7 Emergency
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function ElectricOSDemoPage() {
  return (
    <div style={{ backgroundColor: C.black, color: C.white }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.yellow }} />

      <style>{`
        @keyframes boltStrike {
          0% { opacity: 0; transform: scaleY(0) translateY(-30px); }
          15% { opacity: 1; transform: scaleY(1) translateY(0); }
          30% { opacity: 0.3; }
          45% { opacity: 1; }
          80% { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0.8; }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 8px ${C.yellow}88); }
          50% { filter: drop-shadow(0 0 24px ${C.yellow}cc) drop-shadow(0 0 48px ${C.yellow}44); }
        }
        @keyframes emergencyPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }
        @keyframes statCount {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanLine {
          0% { top: -2px; }
          100% { top: 100%; }
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Bold Industrial
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: C.black }}
      >
        {/* Electric grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${C.blue} 1px, transparent 1px), linear-gradient(90deg, ${C.blue} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Blue glow blob — top right */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top right, ${C.blue}18 0%, transparent 60%)` }}
        />

        {/* Lightning bolt — large decorative */}
        <div
          className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
          style={{ animation: 'glowPulse 3s ease-in-out infinite' }}
        >
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
            <path
              d="M80 0L10 110h50L30 200L120 80H70L80 0Z"
              fill={C.yellow}
              style={{ animation: 'boltStrike 4s ease-out infinite' }}
            />
            <path
              d="M80 0L10 110h50L30 200L120 80H70L80 0Z"
              fill={`${C.yellow}44`}
              style={{ filter: `blur(12px)` }}
            />
          </svg>
        </div>

        {/* Scan line effect */}
        <div
          className="absolute left-0 right-0 h-[2px] pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${C.blue}44, transparent)`,
            animation: 'scanLine 8s linear infinite',
          }}
        />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl pt-28 pb-20">
          {/* NICEIC badge */}
          <div
            className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase"
            style={{ border: `1px solid ${C.blue}44`, color: C.blueGlow, backgroundColor: `${C.blue}11` }}
          >
            <span style={{ color: C.yellow }}>&#10003;</span>
            NICEIC Approved Contractor
          </div>

          <h1 className="mb-6">
            {['Licensed &', 'Trusted', 'Since 2005.'].map((line, i) => (
              <div
                key={i}
                className="reveal-clip-up block font-black uppercase leading-[0.95]"
                style={{
                  fontSize: 'clamp(3rem, 9vw, 8rem)',
                  color: i === 1 ? C.yellow : C.white,
                  letterSpacing: '-0.02em',
                  animationDelay: `${i * 0.12}s`,
                }}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </h1>

          <p
            className="reveal-up text-lg font-light leading-relaxed mb-10 max-w-lg"
            style={{ color: C.mutedLight, animationDelay: '0.45s' }}
          >
            NICEIC approved electricians across Greater Manchester.
            Domestic, commercial, and emergency — available 24 hours, 365 days.
          </p>

          {/* Stats bar */}
          <div
            className="reveal-up flex flex-wrap gap-10 mb-12"
            style={{ animationDelay: '0.55s' }}
          >
            {[
              { n: '10,000+', label: 'Jobs Completed' },
              { n: 'NICEIC', label: 'Approved' },
              { n: '5-Year', label: 'Guarantee' },
              { n: '60min', label: 'Emergency Response' },
            ].map((s) => (
              <div key={s.n}>
                <div style={{ color: C.yellow, fontSize: '1.75rem', fontWeight: 800 }}>{s.n}</div>
                <div style={{ color: C.mutedLight, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.65s' }}>
            <a
              href="tel:+448001234567"
              className="flex items-center gap-3 px-10 py-4 text-sm tracking-[0.15em] uppercase font-bold transition-all duration-300"
              style={{ backgroundColor: C.yellow, color: C.black }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.yellowLight }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.yellow }}
            >
              <span>&#128222;</span>
              Call Now — Free Quote
            </a>
            <a
              href="#book"
              className="border-2 px-10 py-4 text-sm tracking-[0.15em] uppercase font-light transition-all duration-300"
              style={{ borderColor: C.blue, color: C.blue }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.blue
                e.currentTarget.style.color = C.white
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.blue
              }}
            >
              Book Online
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. EMERGENCY BANNER
          ═══════════════════════════════════════ */}
      <section
        className="relative py-6 overflow-hidden"
        style={{ backgroundColor: C.yellow }}
      >
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['24/7 Emergency Call-Out', '60-Minute Response', 'No Call-Out Charge After 5pm', 'All Work Certificated', 'Fixed-Price Quotes', '5-Year Guarantee'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: C.black }}>{item}</span>
                  <span style={{ color: `${C.black}44`, fontSize: '1.2rem' }}>⚡</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.darkBg }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>What We Do</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={{ color: C.white }}>Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="reveal-up rounded-xl p-8 group cursor-default transition-all duration-400"
                style={{
                  backgroundColor: C.darkCard,
                  border: `1px solid ${C.blue}18`,
                  animationDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${C.blue}55`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${C.blue}18`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${C.blue}18`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: C.white }}>{s.name}</h3>
                <p className="text-sm font-light leading-relaxed mb-4" style={{ color: C.mutedLight }}>{s.desc}</p>
                <span className="text-sm font-bold" style={{ color: C.yellow }}>{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. RECENT PROJECTS
          ═══════════════════════════════════════ */}
      <section id="projects" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.black }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={{ color: C.white }}>Recent Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {projects.map((p, i) => (
              <div
                key={p.label}
                className="reveal-up relative overflow-hidden rounded-xl group cursor-pointer"
                style={{ height: '260px', animationDelay: `${i * 0.08}s` }}
              >
                <Image src={p.image}
                  alt={p.label}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                  style={{ filter: 'brightness(0.65)' }} width={1200} height={800} />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, ${C.black}cc, transparent 60%)` }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="inline-block text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-2"
                    style={{ backgroundColor: `${C.blue}33`, color: C.blueGlow }}
                  >
                    {p.location}
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: C.white }}>{p.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. CERTIFICATIONS
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: C.darkBg }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>Accreditations</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase" style={{ color: C.white }}>Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="reveal-up rounded-xl p-6 text-center"
                style={{
                  backgroundColor: C.darkCard,
                  border: `1px solid ${C.yellow}22`,
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 text-lg font-bold"
                  style={{ backgroundColor: `${C.yellow}22`, color: C.yellow }}
                >
                  &#10003;
                </div>
                <h3 className="text-sm font-bold mb-3 tracking-[0.05em]" style={{ color: C.yellow }}>{cert.name}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: C.mutedLight }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. SERVICE AREAS
          ═══════════════════════════════════════ */}
      <section id="areas" className="py-16 px-6 md:px-16" style={{ backgroundColor: C.black }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between reveal-up">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: C.blue }}>Coverage</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase" style={{ color: C.white }}>Service Areas</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="px-4 py-2 rounded-lg text-sm font-light"
                  style={{ border: `1px solid ${C.blue}33`, color: C.blueGlow }}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. PRICING TRANSPARENCY
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16" style={{ background: `linear-gradient(180deg, ${C.darkBg}, ${C.black})` }}>
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>No Surprises</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-12" style={{ color: C.white }}>Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { service: 'Call-Out Fee', price: '£75', note: 'Diagnostic visit, credited if you proceed' },
              { service: 'Full Rewire', price: 'From £2,500', note: '3-bed semi, including Part P certificate' },
              { service: 'Fuse Board', price: 'From £450', note: '12-way consumer unit with RCD, fitted' },
            ].map((item) => (
              <div
                key={item.service}
                className="rounded-xl p-8"
                style={{ backgroundColor: C.darkCard, border: `1px solid ${C.blue}22` }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: C.mutedLight }}>{item.service}</p>
                <p className="text-3xl font-black mb-3" style={{ color: C.yellow }}>{item.price}</p>
                <p className="text-xs font-light" style={{ color: C.mutedLight }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.darkBg }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>Customer Feedback</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ color: C.white }}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.black }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ color: C.white }}>FAQ</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="ElectricOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. CONTACT / BOOKING
          ═══════════════════════════════════════ */}
      <section id="contact" className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: C.darkBg }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at bottom left, ${C.blue}11, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>Get a Quote</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8" style={{ color: C.white }}>
              Book a<br />Visit
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: C.mutedLight }}>
              Free site visits for rewires and larger jobs. Fixed price given on-site, no obligation.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Office Hours', detail: 'Mon–Fri 07:00–18:00 | Sat 08:00–13:00' },
                { title: '24/7 Emergency', detail: 'Call +44 800 123 4567 — 60-min response guaranteed' },
                { title: 'Locations', detail: 'Based in Manchester. Covering all of Greater Manchester.' },
                { title: 'Pricing', detail: 'Fixed quotes. No hidden fees. Part P included.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.blue}55` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: C.blue }}>{info.title}</p>
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
              socialProof={{ count: 87, label: 'jobs booked this month' }}
              vertical="tradeos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA
        phoneNumber="+448001234567"
        message="Hi! I need an electrician — can I get a free quote?"
        vertical="tradeos"
      />
    </div>
  )
}

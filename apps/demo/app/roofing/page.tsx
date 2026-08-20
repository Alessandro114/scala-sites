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
  dark: '#1e293b',
  darkAlt: '#0f172a',
  slate: '#475569',
  slateLight: '#64748b',
  offWhite: '#f8fafc',
  brick: '#b91c1c',
  brickLight: '#dc2626',
  muted: '#94a3b8',
  border: '#334155',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'SteelCap Roofing',
  description: 'Built to last — expert roofing with a 25-year guarantee',
  url: 'https://steelcaproofing.example.com',
  locale: 'en',
  vertical: 'roofos',
  theme: 'classic',
  branding: { primaryColor: C.dark, accentColor: C.brick },
  contact: {
    phone: '+44 20 7946 0334',
    email: 'info@steelcaproofing.com',
    whatsapp: '+442079460334',
    address: '7 Builders Lane, Croydon, London CR0 2AE',
    coordinates: { lat: 51.3762, lng: -0.1016 },
  },
  social: {
    instagram: 'steelcaproofing',
    facebook: 'https://facebook.com/steelcaproofing',
  },
  seo: {
    title: 'SteelCap Roofing | Expert Roofing Contractors — 25-Year Guarantee',
    description: 'Professional roofing specialists. Free survey. 25-year guarantee.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    name: 'Flat Roofs',
    desc: 'EPDM, GRP fibreglass and felt flat roof installation, repair and replacement. 20+ year warranties.',
    price: 'From £800',
    icon: '▬',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    name: 'Pitched Roofs',
    desc: 'Full re-roofing, ridge tile repairs, broken tile replacement and partial re-roofing.',
    price: 'From £5,000',
    icon: '△',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=400&fit=crop',
  },
  {
    name: 'Guttering',
    desc: 'uPVC, cast iron and aluminium gutter installation, repairs, clearing and downpipe replacement.',
    price: 'From £200',
    icon: '╚',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  },
  {
    name: 'Chimney Repair',
    desc: 'Repointing, flashing replacement, pot repairs, capping and full chimney rebuilds.',
    price: 'From £350',
    icon: '⬛',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&h=400&fit=crop',
  },
  {
    name: 'Roof Windows',
    desc: 'Velux and bespoke roof window installation, flashing kits and blind fitting.',
    price: 'From £600',
    icon: '⬜',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&h=400&fit=crop',
  },
  {
    name: 'Emergency Repair',
    desc: 'Same-day emergency call-outs for storm damage, leaks and urgent structural issues.',
    price: 'From £200',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1533779183510-8f55a55f3a6d?w=600&h=400&fit=crop',
  },
]

const materials = [
  {
    name: 'Natural Slate',
    origin: 'Welsh & Spanish slate',
    lifespan: '100+ years',
    desc: 'The premium choice. Frost-resistant, fire-proof and visually timeless.',
    color: C.slate,
  },
  {
    name: 'Concrete Tile',
    origin: 'UK manufactured',
    lifespan: '50–60 years',
    desc: 'Affordable and durable. Wide colour range to match any aesthetic.',
    color: C.slateLight,
  },
  {
    name: 'EPDM Rubber',
    origin: 'Synthetic rubber membrane',
    lifespan: '50+ years',
    desc: 'The modern flat roof standard. Seamless, UV-stable, and recyclable.',
    color: C.dark,
  },
  {
    name: 'GRP Fibreglass',
    origin: 'Glass-reinforced polyester',
    lifespan: '30+ years',
    desc: 'Rigid, waterproof, and walkable. Ideal for terraces and extensions.',
    color: C.darkAlt,
  },
]

const portfolio = [
  { src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=600&fit=crop', label: 'Victorian Terrace Re-Roof', before: true },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', label: 'Commercial Flat Roof' },
  { src: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600&fit=crop', label: 'Chimney Restoration' },
  { src: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&h=600&fit=crop', label: 'Velux Installation' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', label: 'Detached House Re-Tiling' },
  { src: 'https://images.unsplash.com/photo-1533779183510-8f55a55f3a6d?w=800&h=600&fit=crop', label: 'Storm Damage Repair' },
]

const reviews: Review[] = [
  { id: '1', author: 'David K.', rating: 5, text: 'Complete re-roof on our 1930s semi. Spotless workmanship, fair price and they finished two days early. The 25-year guarantee sealed it for us.', date: '2026-07-18', source: 'google', verified: true },
  { id: '2', author: 'Patricia M.', rating: 5, text: 'Emergency call-out on a Saturday after storm damage. Had someone on-site within 3 hours. Temporary fix that night, full repair Monday. Exceptional.', date: '2026-07-30', source: 'google', verified: true },
  { id: '3', author: 'Gary T.', rating: 5, text: 'Third roofer I got a quote from. First two tried to sell me a full re-roof. SteelCap diagnosed it as a repair job — saved me £4,000. Honest company.', date: '2026-08-02', source: 'google', verified: true },
  { id: '4', author: 'Wendy P.', rating: 4, text: 'EPDM flat roof on extension. Clean install, no mess left behind. Minor communication hiccup at the start but they sorted it immediately.', date: '2026-07-12', source: 'google', verified: true },
  { id: '5', author: 'Stuart B.', rating: 5, text: 'Chimney rebuild after subsidence crack. Structural work is solid and visually indistinguishable from the original. Heritage bricks sourced perfectly.', date: '2026-07-25', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do you offer a free survey?', answer: 'Yes. We provide a free, no-obligation roof survey and written quote for all jobs over £500. A surveyor will visit, assess your roof from ground level and by drone or ladder access, and provide a full report within 24 hours.' },
  { question: 'What does your 25-year guarantee cover?', answer: 'Our workmanship guarantee covers the installation quality and waterproofing integrity for 25 years. Materials carry manufacturer warranties ranging from 10 to 50 years depending on the product specified. Both are fully transferable if you sell the property.' },
  { question: 'Are you insured and accredited?', answer: 'Yes. We carry £5M public liability insurance and £2M employers\' liability. We are members of the National Federation of Roofing Contractors (NFRC) and TrustMark registered. All operatives hold CSCS cards.' },
  { question: 'How long does a full re-roof take?', answer: 'A typical 3-bedroom semi-detached house takes 3–5 working days for a full re-roof. Flat roof replacements are usually completed in 1–2 days. We work around weather forecasts to avoid starting in rain.' },
  { question: 'Do you remove and dispose of old materials?', answer: 'Absolutely. All waste materials including old tiles, felt, lead and timber are removed and disposed of responsibly. We are fully licensed waste carriers. Skips are only used when necessary and always positioned to minimise disruption.' },
  { question: 'Can you work on listed buildings or conservation areas?', answer: 'Yes, we have extensive experience working on listed and heritage properties. We source matching materials, prepare planning documentation where required, and liaise with conservation officers on your behalf.' },
  { question: 'What areas do you cover?', answer: 'We cover all London boroughs, Surrey, Kent, Essex and Hertfordshire. For large commercial contracts, we travel further. Contact us for a coverage confirmation.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '08:00', available: true, spotsLeft: 2 },
  { id: '2', date: today, time: '10:00', available: true, spotsLeft: 3 },
  { id: '3', date: today, time: '13:00', available: true, spotsLeft: 1 },
  { id: '4', date: today, time: '15:00', available: true, spotsLeft: 4 },
]

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  pageBg: { backgroundColor: C.darkAlt, color: C.offWhite } as React.CSSProperties,
  sectionDark: { backgroundColor: C.dark } as React.CSSProperties,
  sectionDeep: { backgroundColor: C.darkAlt } as React.CSSProperties,
  brick: { color: C.brick } as React.CSSProperties,
  brickLight: { color: C.brickLight } as React.CSSProperties,
  white: { color: C.offWhite } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  slate: { color: C.slateLight } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SteelCap Roofing',
  description: 'Expert roofing contractors — flat roofs, pitched roofs, guttering, chimney repair. 25-year guarantee.',
  url: 'https://steelcaproofing.example.com',
  telephone: '+44 20 7946 0334',
  email: 'info@steelcaproofing.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Builders Lane',
    addressLocality: 'Croydon, London',
    postalCode: 'CR0 2AE',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.3762, longitude: -0.1016 },
  priceRange: '££',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '17:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark" style={{ borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '14px solid transparent',
              borderRight: '14px solid transparent',
              borderBottom: `24px solid ${C.brick}`,
              filter: `drop-shadow(0 0 8px ${C.brick}88)`,
            }}
          />
          <span className="font-light tracking-[0.25em] text-sm uppercase" style={{ color: C.offWhite }}>
            SteelCap Roofing
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Materials', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.offWhite)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-400"
            style={{ borderColor: C.brick, color: C.brick, borderRadius: 2 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.brick
              e.currentTarget.style.color = C.offWhite
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.brick
            }}
          >
            Free Survey
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
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: C.darkAlt }}
    >
      <style>{`
        @keyframes rain-drop {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(60px); opacity: 0; }
        }
        @keyframes sun-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes wind-sweep {
          0% { transform: scaleX(0) translateX(-50%); opacity: 0; }
          50% { transform: scaleX(1) translateX(0); opacity: 0.6; }
          100% { transform: scaleX(0) translateX(50%); opacity: 0; }
        }
        .rain-drop {
          position: absolute;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(144,164,184,0.5));
          animation: rain-drop 1.2s linear infinite;
        }
        .sun-ray { animation: sun-pulse 2.5s ease-in-out infinite; }
        .wind-line {
          position: absolute;
          height: 1px;
          background: rgba(148,163,184,0.3);
          animation: wind-sweep 2s ease-in-out infinite;
        }
      `}</style>

      {/* Diagonal split — roofline angle clip-path */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(175deg, ${C.slate}22 0%, transparent 60%)`,
          clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 50%)',
        }}
      />

      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1800&h=1200&fit=crop&q=85"
          alt="SteelCap Roofing — professional roofing services"
          className="w-full h-full object-cover"
          style={{ opacity: 0.15 }} width={1200} height={800} />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${C.darkAlt}f0 0%, ${C.darkAlt}cc 50%, ${C.dark}e8 100%)` }}
        />
      </div>

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(168deg, ${C.brick}22 0%, transparent 40%)`,
          clipPath: 'polygon(0 0, 45% 0, 0 100%)',
        }}
      />

      {/* Weather icons — top right */}
      <div className="absolute top-28 right-12 hidden md:flex gap-8 items-center">
        {/* Rain */}
        <div className="relative w-16 h-16 flex flex-col items-center justify-end gap-1">
          {[0,1,2,3,4].map((i) => (
            <div
              key={i}
              className="rain-drop"
              style={{
                height: 12,
                left: `${i * 20}%`,
                top: 20,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
          <div style={{ fontSize: 28, opacity: 0.5 }}>🌧</div>
        </div>
        {/* Sun */}
        <div className="sun-ray" style={{ fontSize: 28, opacity: 0.5 }}>☀️</div>
        {/* Wind lines */}
        <div className="relative w-16 h-8 overflow-hidden">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="wind-line"
              style={{
                width: `${60 + i * 20}%`,
                top: `${i * 12}px`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-16 stagger-children">
        <div className="max-w-3xl">
          <p className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-8" style={{ color: C.brick }}>
            London&rsquo;s Trusted Roofers &middot; Est. 2001
          </p>

          <h1 className="mb-8">
            {['Built', 'to Last.'].map((word, i) => (
              <span
                key={word}
                className="reveal-clip-up block font-black leading-[0.88] tracking-tight uppercase"
                style={{
                  color: C.offWhite,
                  fontSize: 'clamp(4rem, 11vw, 9rem)',
                  animationDelay: `${i * 0.15}s`,
                  letterSpacing: '-0.03em',
                  textShadow: `2px 4px 0 ${C.darkAlt}`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="reveal-up text-lg font-light leading-relaxed max-w-xl mb-10"
            style={{ color: C.muted, animationDelay: '0.35s' }}
          >
            From emergency storm repairs to complete re-roofs — SteelCap delivers watertight results
            backed by a 25-year guarantee. No shortcuts. No subcontractors. No surprises.
          </p>

          {/* Guarantee badge */}
          <div
            className="reveal-up inline-flex items-center gap-4 mb-10 px-6 py-4"
            style={{
              animationDelay: '0.45s',
              background: `${C.brick}15`,
              border: `1px solid ${C.brick}44`,
              borderRadius: 8,
            }}
          >
            <div style={{ fontSize: 32 }}>🛡</div>
            <div>
              <div className="text-lg font-light" style={{ color: C.offWhite }}>25-Year Guarantee</div>
              <div className="text-xs tracking-widest uppercase" style={{ color: C.muted }}>Fully transferable • Fully insured</div>
            </div>
          </div>

          {/* Before/after thumbnail strip */}
          <div
            className="reveal-up flex gap-3 mb-10 overflow-x-auto pb-2"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { label: 'Before', src: 'https://images.unsplash.com/photo-1533779183510-8f55a55f3a6d?w=300&h=200&fit=crop' },
              { label: 'After', src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=300&h=200&fit=crop' },
              { label: 'After', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop' },
            ].map((img, i) => (
              <div key={i} className="relative flex-shrink-0 rounded-lg overflow-hidden" style={{ width: 120, height: 80 }}>
                <Image src={img.src} alt={img.label} className="w-full h-full object-cover" width={1200} height={800} />
                <div
                  className="absolute bottom-1 left-1 text-[10px] tracking-widest uppercase px-2 py-0.5"
                  style={{
                    background: img.label === 'Before' ? `${C.slate}cc` : `${C.brick}cc`,
                    color: C.offWhite,
                    borderRadius: 4,
                  }}
                >
                  {img.label}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
            <a
              href="#contact"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.brick, color: C.brick, borderRadius: 4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.brick
                e.currentTarget.style.color = C.offWhite
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.brick
              }}
            >
              Book Free Survey
            </a>
            <a
              href="tel:+442079460334"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.offWhite)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              Emergency Line: +44 20 7946 0334
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function RoofingPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.brick }} />

      <Navbar />
      <Hero />

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.brick }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Flat Roofs', 'Pitched Roofs', 'Emergency Repair', 'Guttering', 'Chimney Repair', 'Roof Windows', '25yr Guarantee', 'Free Survey'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm tracking-[0.2em] uppercase font-light" style={{ color: C.offWhite }}>{item}</span>
                  <span className="text-base" style={{ color: `${C.offWhite}55` }}>△</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brick}>What We Do</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Roofing Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="reveal-up group relative overflow-hidden rounded-xl"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  background: `rgba(255,255,255,0.03)`,
                  border: `1px solid ${C.border}`,
                  transition: 'border-color 0.4s, transform 0.4s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${C.brick}55`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={svc.image} alt={svc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.dark}, transparent)` }} />
                </div>
                <div className="p-6">
                  <div className="text-xl mb-3" style={{ color: C.brick }}>{svc.icon}</div>
                  <h3 className="text-lg font-light mb-2" style={S.white}>{svc.name}</h3>
                  <p className="text-sm font-light leading-relaxed mb-4" style={S.muted}>{svc.desc}</p>
                  <div className="text-sm font-light" style={{ color: C.brick }}>{svc.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MATERIALS
          ═══════════════════════════════════════ */}
      <section id="materials" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brick}>Materials Guide</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>What We Use</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {materials.map((mat, i) => (
              <div
                key={mat.name}
                className="reveal-up p-8 rounded-xl"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  background: `rgba(255,255,255,0.04)`,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full mb-5 flex items-center justify-center"
                  style={{ backgroundColor: mat.color, boxShadow: `0 0 20px ${mat.color}44` }}
                />
                <h3 className="text-base font-light mb-1" style={S.white}>{mat.name}</h3>
                <div className="text-xs tracking-wider uppercase mb-3" style={{ color: C.brick }}>{mat.lifespan}</div>
                <p className="text-xs font-light leading-relaxed mb-3" style={S.muted}>{mat.desc}</p>
                <p className="text-xs" style={{ color: C.slateLight }}>{mat.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PORTFOLIO
          ═══════════════════════════════════════ */}
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brick}>Our Projects</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Portfolio</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {portfolio.map((img, i) => (
              <div
                key={i}
                className="reveal-up group relative overflow-hidden rounded-xl"
                style={{ height: 260, animationDelay: `${i * 0.07}s` }}
              >
                <Image src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1200} height={800} />
                <div
                  className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(to top, ${C.darkAlt}dd, transparent)` }}
                >
                  <span className="text-sm tracking-[0.15em] uppercase font-light" style={{ color: C.offWhite }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INSURANCE & GUARANTEE
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16" style={{ background: `linear-gradient(135deg, ${C.brick}11, ${C.dark})`, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🛡', title: '25-Year Guarantee', sub: 'Workmanship & waterproofing' },
            { icon: '📋', title: 'NFRC Member', sub: 'National Federation of Roofers' },
            { icon: '💼', title: '£5M Liability', sub: 'Fully insured — always' },
            { icon: '✅', title: 'TrustMark Reg.', sub: 'Government-endorsed quality' },
          ].map((badge) => (
            <div
              key={badge.title}
              className="reveal-up text-center p-6 rounded-xl"
              style={{ background: `rgba(255,255,255,0.04)`, border: `1px solid ${C.border}` }}
            >
              <div className="text-3xl mb-3">{badge.icon}</div>
              <div className="text-sm font-light mb-1" style={S.white}>{badge.title}</div>
              <div className="text-xs" style={S.muted}>{badge.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FREE SURVEY CTA */}
      <section className="py-16 px-6 md:px-16 text-center" style={S.sectionDeep}>
        <div className="max-w-2xl mx-auto reveal-up">
          <h2 className="text-3xl md:text-4xl font-extralight mb-6" style={S.white}>
            Not Sure What Your Roof Needs?
          </h2>
          <p className="text-base font-light mb-8" style={S.muted}>
            Our surveyors will assess your roof thoroughly — no obligation, no pressure,
            written quote within 24 hours.
          </p>
          <a
            href="#contact"
            className="inline-block border-2 px-12 py-5 text-sm tracking-[0.2em] uppercase transition-all duration-400"
            style={{ borderColor: C.brick, color: C.brick, borderRadius: 4 }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.brick; e.currentTarget.style.color = C.offWhite }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.brick }}
          >
            Book Your Free Survey
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brick}>Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extralight" style={S.white}>Transparent Pricing</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
            {[
              { item: 'Tile Repair', price: 'From £200' },
              { item: 'Gutter Clear & Repair', price: 'From £150' },
              { item: 'Chimney Repoint', price: 'From £350' },
              { item: 'Full Re-Roof', price: 'From £5,000' },
            ].map((p, i) => (
              <div
                key={p.item}
                className="reveal-up p-5 rounded-xl text-center"
                style={{ animationDelay: `${i * 0.07}s`, background: `rgba(255,255,255,0.04)`, border: `1px solid ${C.border}` }}
              >
                <div className="text-xl font-light mb-2" style={{ color: C.brick }}>{p.price}</div>
                <div className="text-xs tracking-wider uppercase" style={S.muted}>{p.item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brick}>What Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brick}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="RoofingOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / BOOKING
          ═══════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16 grain overflow-hidden" style={S.sectionDeep}>
        <div className="blob absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none" style={{ backgroundColor: C.brick, filter: 'blur(100px)' }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brick}>Book a Survey</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.white}>
              Get Your<br />Free Survey
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              No call centres. You speak directly with our surveyors. Quote guaranteed within 24 hours.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Hours', detail: 'Mon–Fri 07:30–17:30 | Sat 08:00–14:00' },
                { title: 'Emergency', detail: '24/7 emergency callout line — storm, leaks, structural' },
                { title: 'Coverage', detail: 'All London, Surrey, Kent, Essex, Hertfordshire' },
                { title: 'Guarantee', detail: '25-year workmanship guarantee — fully transferable' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.brick}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.brick}>{info.title}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 178, label: 'surveys booked this month' }}
              vertical="roofos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460334" message="Hi! I'd like to book a free roof survey" vertical="roofos" />
    </div>
  )
}

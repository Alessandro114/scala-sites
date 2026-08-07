'use client'

import { useState } from 'react'
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
  navy: '#1e3a5f',
  navyDark: '#0f2035',
  navyLight: '#2a4f80',
  orange: '#ea580c',
  orangeLight: '#f97316',
  white: '#ffffff',
  offWhite: '#f1f5f9',
  muted: '#94a3b8',
  border: '#2a4f80',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'SwiftMove',
  description: 'Moving made simple — professional removals across the UK',
  url: 'https://swiftmove.example.com',
  locale: 'en',
  vertical: 'moveos',
  theme: 'modern',
  branding: { primaryColor: C.navy, accentColor: C.orange },
  contact: {
    phone: '+44 20 7946 0555',
    email: 'info@swiftmove.com',
    whatsapp: '+442079460555',
    address: '34 Logistics Park, Wembley, London HA0 1JH',
    coordinates: { lat: 51.5528, lng: -0.2817 },
  },
  social: {
    instagram: 'swiftmoveremovals',
    facebook: 'https://facebook.com/swiftmoveremovals',
  },
  seo: {
    title: 'SwiftMove | Professional Removal & Moving Services',
    description: 'Stress-free moving. Home moves, office relocations, international removals, packing, storage.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    name: 'Home Moves',
    desc: 'Full house removals handled by our professional team. We disassemble, pack, move and reassemble.',
    price: 'From £350',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    name: 'Office Relocations',
    desc: 'Out-of-hours office moves to minimise business disruption. IT equipment specialists included.',
    price: 'From £600',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    name: 'International',
    desc: 'Door-to-door international shipping. Full customs documentation and insurance included.',
    price: 'POA',
    icon: '✈',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop',
  },
  {
    name: 'Packing Services',
    desc: 'Professional packing with premium materials. Fragile, antiques and artwork specialists.',
    price: 'From £150',
    icon: '📦',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  },
  {
    name: 'Storage',
    desc: 'Secure, climate-controlled storage units. Short and long-term with 24/7 CCTV.',
    price: 'From £45/wk',
    icon: '🔒',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
  },
  {
    name: 'Man & Van',
    desc: 'Single items, student moves and small loads. Hourly or half-day rates available.',
    price: 'From £60/hr',
    icon: '🚐',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
  },
]

const process = [
  { step: '01', title: 'Book', desc: 'Get an instant quote online or via WhatsApp. Confirm with a small deposit.' },
  { step: '02', title: 'Pack', desc: 'Our team arrives with all materials. We pack everything safely and efficiently.' },
  { step: '03', title: 'Move', desc: 'Loaded and transported in our GPS-tracked vehicles. Real-time updates.' },
  { step: '04', title: 'Unpack', desc: 'Everything placed exactly where you want it. Zero mess left behind.' },
]

const fleet = [
  { name: 'Transit Van', capacity: '10–15 items', icon: '🚐', desc: 'Studio flats, single rooms, student moves' },
  { name: 'Luton Van', capacity: '30–40 items', icon: '🚚', desc: '1–2 bed apartments, full room clearances' },
  { name: 'Articulated HGV', capacity: '80+ items', icon: '🚛', desc: 'Large houses, office relocations, full estates' },
]

const reviews: Review[] = [
  { id: '1', author: 'Anna T.', rating: 5, text: 'Moved a 3-bed house in one day. The team was faster and more careful than I could have imagined. Not a single scratch. Will never use anyone else.', date: '2026-07-22', source: 'google', verified: true },
  { id: '2', author: 'Marcus L.', rating: 5, text: 'Office relocation for 25 people over a weekend. Back to full operation Monday morning. SwiftMove executed it flawlessly.', date: '2026-07-29', source: 'google', verified: true },
  { id: '3', author: 'Claire B.', rating: 5, text: 'International move to Germany. All customs paperwork handled, everything arrived on time and in perfect condition. Remarkable service.', date: '2026-08-04', source: 'google', verified: true },
  { id: '4', author: 'Paul K.', rating: 4, text: 'Used the packing service for the first time — complete game changer. They packed our entire 4-bed in 4 hours. Fragile items all safe.', date: '2026-07-15', source: 'google', verified: true },
  { id: '5', author: 'Sophie N.', rating: 5, text: 'Man and van for a student move. Incredibly professional for such a small job. Friendly driver, on time, no hidden charges. Brilliant.', date: '2026-07-31', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How do I get a quote?', answer: 'Fill in our online form with your bedrooms, floors and distance — you\'ll get an instant estimate. For a precise quote, we offer a free virtual survey where our team does a video walkthrough of your property.' },
  { question: 'Do you provide packing materials?', answer: 'Yes! We supply all boxes, bubble wrap, packing tape, wardrobe boxes, mattress covers and furniture wraps. Our packing service includes all materials at no extra charge. You can also purchase materials separately for a DIY pack.' },
  { question: 'Are my belongings insured during the move?', answer: 'All moves include £10,000 basic goods-in-transit cover. We recommend our premium £50,000 cover for larger moves or high-value items, which includes antiques, art and electronics. Full details on request.' },
  { question: 'Do you move on weekends and bank holidays?', answer: 'Yes, we operate 7 days a week including bank holidays. Weekend moves carry a small surcharge — details are shown transparently in your quote before you confirm.' },
  { question: 'How far in advance should I book?', answer: 'We recommend 4–6 weeks for large home moves, 2–3 weeks for smaller moves and 2+ weeks for office relocations. That said, we often accommodate short-notice bookings — contact us and we\'ll do our best.' },
  { question: 'Do you offer storage if there\'s a gap between moves?', answer: 'Absolutely. Our secure, climate-controlled storage units are available from one day to several years. We can store your belongings during a gap and deliver to your new address when you\'re ready.' },
  { question: 'What areas do you cover?', answer: 'SwiftMove operates across the UK. We handle London and Home Counties daily, with regular runs to Birmingham, Manchester, Edinburgh and Bristol. For international moves, we ship to 60+ countries.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '08:00', available: true, spotsLeft: 2 },
  { id: '2', date: today, time: '09:00', available: true, spotsLeft: 3 },
  { id: '3', date: today, time: '11:00', available: true, spotsLeft: 1 },
  { id: '4', date: today, time: '13:00', available: true, spotsLeft: 4 },
  { id: '5', date: today, time: '15:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  pageBg: { backgroundColor: C.navyDark, color: C.white } as React.CSSProperties,
  sectionDark: { backgroundColor: C.navy } as React.CSSProperties,
  sectionDeep: { backgroundColor: C.navyDark } as React.CSSProperties,
  orange: { color: C.orange } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SwiftMove',
  description: 'Professional removal and moving services across the UK — home moves, office relocations, storage.',
  url: 'https://swiftmove.example.com',
  telephone: '+44 20 7946 0555',
  email: 'info@swiftmove.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '34 Logistics Park',
    addressLocality: 'Wembley, London',
    postalCode: 'HA0 1JH',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5528, longitude: -0.2817 },
  priceRange: '££',
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
// QUOTE CALCULATOR
// ─────────────────────────────────────────────
const estimateMap: Record<string, Record<string, number>> = {
  'Studio': { 'Local (<10 mi)': 180, 'Regional (10-50 mi)': 280, 'National (50+ mi)': 450 },
  '1 Bedroom': { 'Local (<10 mi)': 280, 'Regional (10-50 mi)': 380, 'National (50+ mi)': 600 },
  '2 Bedrooms': { 'Local (<10 mi)': 400, 'Regional (10-50 mi)': 550, 'National (50+ mi)': 850 },
  '3 Bedrooms': { 'Local (<10 mi)': 580, 'Regional (10-50 mi)': 780, 'National (50+ mi)': 1200 },
  '4+ Bedrooms': { 'Local (<10 mi)': 850, 'Regional (10-50 mi)': 1100, 'National (50+ mi)': 1800 },
}

function QuoteCalculator() {
  const [bedrooms, setBedrooms] = useState('2 Bedrooms')
  const [distance, setDistance] = useState('Local (<10 mi)')
  const estimate = estimateMap[bedrooms]?.[distance] ?? 500

  return (
    <div
      className="rounded-2xl p-8"
      style={{
        background: `rgba(255,255,255,0.06)`,
        backdropFilter: 'blur(12px)',
        border: `1px solid ${C.orange}33`,
      }}
    >
      <h3 className="text-lg font-light mb-6" style={{ color: C.white }}>
        Quick Quote Calculator
      </h3>
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-xs tracking-widest uppercase mb-2 block" style={{ color: C.orange }}>
            Bedrooms
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full py-3 px-4 text-sm rounded-lg appearance-none outline-none"
            style={{
              background: `rgba(255,255,255,0.08)`,
              border: `1px solid ${C.border}`,
              color: C.white,
            }}
          >
            {Object.keys(estimateMap).map((b) => (
              <option key={b} value={b} style={{ background: C.navyDark }}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs tracking-widest uppercase mb-2 block" style={{ color: C.orange }}>
            Distance
          </label>
          <select
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full py-3 px-4 text-sm rounded-lg appearance-none outline-none"
            style={{
              background: `rgba(255,255,255,0.08)`,
              border: `1px solid ${C.border}`,
              color: C.white,
            }}
          >
            {['Local (<10 mi)', 'Regional (10-50 mi)', 'National (50+ mi)'].map((d) => (
              <option key={d} value={d} style={{ background: C.navyDark }}>{d}</option>
            ))}
          </select>
        </div>
      </div>
      <div
        className="rounded-xl p-5 text-center mb-6"
        style={{ background: `${C.orange}15`, border: `1px solid ${C.orange}33` }}
      >
        <div className="text-xs tracking-widest uppercase mb-1" style={{ color: C.muted }}>
          Estimated Price
        </div>
        <div className="text-4xl font-extralight" style={{ color: C.orange }}>
          from £{estimate}
        </div>
        <div className="text-xs mt-1" style={{ color: C.muted }}>
          Final quote after free survey
        </div>
      </div>
      <a
        href="#booking"
        className="block text-center py-3 text-sm tracking-[0.15em] uppercase transition-all duration-400"
        style={{
          background: C.orange,
          color: C.white,
          borderRadius: 8,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = C.orangeLight }}
        onMouseLeave={(e) => { e.currentTarget.style.background = C.orange }}
      >
        Get Exact Quote
      </a>
    </div>
  )
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark" style={{ borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-black tracking-tight text-lg" style={{ color: C.orange }}>Swift</span>
          <span className="font-light tracking-tight text-lg" style={{ color: C.white }}>Move</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Process', 'Fleet', 'Booking'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-400"
            style={{ borderColor: C.orange, color: C.orange, borderRadius: 2 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.orange
              e.currentTarget.style.color = C.white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.orange
            }}
          >
            Get a Quote
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
      style={{ background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navy} 60%, ${C.navyLight} 100%)` }}
    >
      <style>{`
        @keyframes truck-move {
          0% { transform: translateX(-80px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 80px)); opacity: 0; }
        }
        @keyframes arrow-flow {
          0% { opacity: 0; transform: translateX(-10px); }
          50% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(10px); }
        }
        @keyframes motion-blur {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.08; }
        }
        .truck-anim {
          animation: truck-move 8s linear infinite;
          position: absolute;
          bottom: 60px;
          font-size: 36px;
        }
        .arrow-anim {
          display: inline-block;
          animation: arrow-flow 1.5s ease-in-out infinite;
        }
        .arrow-anim:nth-child(2) { animation-delay: 0.3s; }
        .arrow-anim:nth-child(3) { animation-delay: 0.6s; }
        .motion-stripe {
          position: absolute;
          height: 2px;
          border-radius: 2px;
          animation: motion-blur 3s ease-in-out infinite;
        }
      `}</style>

      {/* Motion blur diagonal stripes */}
      {[15, 30, 50, 70, 85].map((top, i) => (
        <div
          key={i}
          className="motion-stripe"
          style={{
            top: `${top}%`,
            left: '0',
            right: '0',
            background: `linear-gradient(to right, transparent, ${C.orange}66, transparent)`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Arrow patterns pointing right */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none opacity-5">
        <div className="flex gap-4 pr-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="text-6xl font-extralight" style={{ color: C.orange, transform: `rotate(-10deg)` }}>›</div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-16 grid grid-cols-1 md:grid-cols-[1fr_380px] gap-12 items-center">
        <div className="stagger-children">
          <div className="reveal-clip-up flex items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: C.orange }}>
              Professional Removals
            </span>
            <div className="flex">
              {['›', '›', '›'].map((a, i) => (
                <span key={i} className="arrow-anim text-sm" style={{ color: `${C.orange}${i === 0 ? '55' : i === 1 ? 'aa' : 'ff'}` }}>{a}</span>
              ))}
            </div>
          </div>

          <h1 className="mb-8">
            {['Moving', 'Made', 'Simple.'].map((word, i) => (
              <span
                key={word}
                className="reveal-clip-up block font-black leading-[0.88] tracking-tight uppercase"
                style={{
                  color: i === 2 ? C.orange : C.white,
                  fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                  animationDelay: `${i * 0.15}s`,
                  letterSpacing: '-0.03em',
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="reveal-up text-lg font-light leading-relaxed max-w-xl mb-10"
            style={{ color: C.muted, animationDelay: '0.5s' }}
          >
            From studio flats to 5-bed houses and full office relocations — our team handles
            everything so you can focus on your fresh start.
          </p>

          <div className="reveal-up flex flex-wrap gap-6 mb-12" style={{ animationDelay: '0.55s' }}>
            {[
              { val: '50K+', label: 'Moves Completed' },
              { val: '4.9★', label: 'Google Rating' },
              { val: '100%', label: 'Insured' },
            ].map((stat) => (
              <div key={stat.val} className="text-center">
                <div className="text-3xl font-extralight" style={{ color: C.orange }}>{stat.val}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: C.muted }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
            <a
              href="#booking"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.orange, color: C.orange, borderRadius: 4 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.orange
                e.currentTarget.style.color = C.white
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.orange
              }}
            >
              Book Your Move
            </a>
            <a
              href="#services"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Inline quote calculator */}
        <div className="reveal-right">
          <QuoteCalculator />
        </div>
      </div>

      {/* Animated truck */}
      <div className="truck-anim" style={{ zIndex: 5 }}>🚚</div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function MovingPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.orange }} />

      <Navbar />
      <Hero />

      {/* MARQUEE */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.orange }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Home Moves', 'Office Relocations', 'International', 'Packing Service', 'Secure Storage', 'Man & Van', 'GPS Tracked', 'Fully Insured'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm tracking-[0.2em] uppercase font-light" style={{ color: C.white }}>{item}</span>
                  <span className="text-sm" style={{ color: `${C.white}55` }}>›</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.orange}>What We Offer</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Moving Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="reveal-up group relative overflow-hidden rounded-xl"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  background: `rgba(255,255,255,0.04)`,
                  border: `1px solid ${C.border}`,
                  transition: 'border-color 0.4s, transform 0.4s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${C.orange}55`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={svc.image} alt={svc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.navy}, transparent)` }} />
                </div>
                <div className="p-6">
                  <div className="text-2xl mb-3">{svc.icon}</div>
                  <h3 className="text-lg font-light mb-2" style={S.white}>{svc.name}</h3>
                  <p className="text-sm font-light leading-relaxed mb-4" style={S.muted}>{svc.desc}</p>
                  <div className="text-sm font-light" style={{ color: C.orange }}>{svc.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.orange}>How It Works</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 stagger-children">
            {process.map((step, i) => (
              <div key={step.step} className="reveal-up relative" style={{ animationDelay: `${i * 0.1}s` }}>
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div
                    className="absolute top-8 left-1/2 w-full h-px hidden md:block"
                    style={{ background: `linear-gradient(to right, ${C.orange}44, ${C.border})` }}
                  />
                )}
                <div className="relative z-10 text-center px-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-light"
                    style={{
                      background: i === 0 ? C.orange : `rgba(255,255,255,0.06)`,
                      border: `2px solid ${i === 0 ? C.orange : C.border}`,
                      color: i === 0 ? C.white : C.muted,
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-base font-light mb-2" style={S.white}>{step.title}</h3>
                  <p className="text-xs font-light leading-relaxed" style={S.muted}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.orange}>Our Fleet</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Right Vehicle for the Job</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {fleet.map((v, i) => (
              <div
                key={v.name}
                className="reveal-up p-8 rounded-2xl text-center"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  background: `rgba(255,255,255,0.04)`,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-light mb-1" style={S.white}>{v.name}</h3>
                <div className="text-sm mb-3" style={{ color: C.orange }}>{v.capacity}</div>
                <p className="text-xs font-light" style={S.muted}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="py-16 px-6 md:px-16" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDark})`, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🛡', title: '£50K Cover', sub: 'Premium goods-in-transit' },
            { icon: '📍', title: 'GPS Tracked', sub: 'Real-time vehicle monitoring' },
            { icon: '✅', title: 'BAR Member', sub: 'British Association of Removers' },
            { icon: '⭐', title: '4.9 Stars', sub: '2,800+ verified reviews' },
          ].map((badge) => (
            <div key={badge.title} className="reveal-up text-center p-6 rounded-xl" style={{ background: `rgba(255,255,255,0.04)`, border: `1px solid ${C.border}` }}>
              <div className="text-3xl mb-3">{badge.icon}</div>
              <div className="text-sm font-light mb-1" style={S.white}>{badge.title}</div>
              <div className="text-xs" style={S.muted}>{badge.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.orange}>What Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.orange}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 grain overflow-hidden" style={S.sectionDeep}>
        <div className="blob absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none" style={{ backgroundColor: C.orange, filter: 'blur(120px)' }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.orange}>Free Quote</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.white}>
              Ready to Move?<br />Let&rsquo;s Talk.
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Get a no-obligation quote in minutes. We&rsquo;ll call you back within 2 hours to confirm details.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Hours', detail: 'Mon–Sat 07:00–19:00 | Sun 08:00–16:00' },
                { title: 'Emergency', detail: 'Same-day bookings available — call us directly' },
                { title: 'Insurance', detail: 'Up to £50K goods-in-transit cover included' },
                { title: 'Guarantee', detail: 'No hidden fees — price locked at quote' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.orange}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.orange}>{info.title}</p>
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
              socialProof={{ count: 312, label: 'moves booked this month' }}
              vertical="moveos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460555" message="Hi! I'd like a quote for a removal" vertical="moveos" />
    </div>
  )
}

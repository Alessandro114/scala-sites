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
  midnight: '#1e293b',
  nightDeep: '#0f172a',
  forest: '#166534',
  forestLight: '#16a34a',
  forestDim: '#14532d',
  amber: '#f59e0b',
  amberLight: '#fbbf24',
  amberDim: '#d97706',
  sky: '#93c5fd',
  skyDim: '#60a5fa',
  cream: '#f0f4f8',
  creamWarm: '#e8f0e0',
  white: '#ffffff',
  muted: '#64748b',
  mutedLight: '#94a3b8',
  treeLine: '#0d3320',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Starfield Camping & Glamping',
  description: 'Award-winning campsite — tent pitches, glamping bell tents, shepherd\'s huts and campervan hookups',
  url: 'https://starfieldcamping.example.com',
  locale: 'en',
  vertical: 'campositions',
  theme: 'outdoor',
  branding: { primaryColor: C.midnight, accentColor: C.amber },
  contact: {
    phone: '+44 1608 643 218',
    email: 'hello@starfieldcamping.com',
    whatsapp: '+441608643218',
    address: 'Starfield Farm, Bourton Road, Chipping Norton, Oxfordshire OX7 6SA',
    coordinates: { lat: 51.9387, lng: -1.5424 },
  },
  social: { instagram: 'starfieldcamping', facebook: 'https://facebook.com/starfieldcamping' },
  seo: { title: 'Starfield Camping | Under the Stars', description: 'Award-winning campsite in the Cotswolds. Book your pitch from £15/night.' },
}

// ─────────────────────────────────────────────
// PITCH TYPES
// ─────────────────────────────────────────────
const pitches = [
  {
    name: 'Standard Tent',
    price: '£15',
    unit: '/night',
    icon: '⛺',
    desc: 'Spacious grass pitches with easy access to shower block. Fire pits available to hire (£5/night).',
    amenities: ['Water point nearby', 'Fire pit hire available', 'Up to 6 persons', 'Recycling point'],
    color: C.forest,
    img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&h=500&fit=crop',
  },
  {
    name: 'Electric Hookup',
    price: '£22',
    unit: '/night',
    icon: '🔌',
    desc: 'Hardstanding pitches with 16A electric hookup. Perfect for small campers and those with electric cool boxes.',
    amenities: ['16A hookup', 'Hardstanding base', 'Drive-on access', 'Waste disposal'],
    color: C.skyDim,
    img: 'https://images.unsplash.com/photo-1587523049840-69de6be29a1b?w=700&h=500&fit=crop',
  },
  {
    name: 'Glamping Bell Tent',
    price: '£75',
    unit: '/night',
    icon: '🏕️',
    desc: 'Pre-pitched luxury 5m bell tents with real beds, rugs, lanterns and fairy lights. Pure wild comfort.',
    amenities: ['King or twin beds', 'Rugs & lighting', 'Welcome hamper', 'Dedicated fire pit'],
    color: C.amber,
    img: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=700&h=500&fit=crop',
    featured: true,
  },
  {
    name: "Shepherd's Hut",
    price: '£95',
    unit: '/night',
    icon: '🛖',
    desc: 'Restored Victorian shepherd\'s huts with wood-burning stove, proper bed, and an outdoor copper bath.',
    amenities: ['Wood-burning stove', 'En-suite copper bath', 'Breakfast provisions', 'Private terrace'],
    color: C.amberDim,
    img: 'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=700&h=500&fit=crop',
    featured: true,
  },
  {
    name: 'Campervan',
    price: '£20',
    unit: '/night',
    icon: '🚌',
    desc: 'Level hardstanding campervan pitches with 16A hookup, grey water disposal, and a dedicated motorhome point.',
    amenities: ['16A electric', 'Grey water disposal', 'Motorhome fresh water', 'Chemical toilet point'],
    color: C.forestLight,
    img: 'https://images.unsplash.com/photo-1596443976234-fb3b9b9caba5?w=700&h=500&fit=crop',
  },
]

// ─────────────────────────────────────────────
// FACILITIES
// ─────────────────────────────────────────────
const facilities = [
  { name: 'Hot Showers', detail: '8 individual shower cubicles, heated 24/7', icon: '🚿' },
  { name: 'On-site Shop', detail: 'Essentials, firewood, local produce, ice cream', icon: '🛒' },
  { name: 'Play Area', detail: 'Natural wood climbing frame, mud kitchen, wildflower area', icon: '🌻' },
  { name: 'Fire Pits', detail: 'Available on all grass pitches, logs from our wood store', icon: '🔥' },
  { name: 'WiFi Zone', detail: 'Free WiFi in the farm hub building. Off in the pitches by design.', icon: '📶' },
  { name: 'Laundry', detail: 'Washing machine and tumble dryer available — tokens from shop', icon: '👕' },
]

// ─────────────────────────────────────────────
// ACTIVITIES
// ─────────────────────────────────────────────
const activities = [
  { name: 'Hiking', desc: '8 waymarked trails from the site gate — 3km to 18km. Maps from reception.', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop' },
  { name: 'Fishing', desc: '2-acre wild pond stocked with carp. Day permits from £12. Rods available to hire.', img: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&h=400&fit=crop' },
  { name: 'Cycling', desc: 'Bike hire on site — adult, child and e-bike. 3 designated routes from 8km.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
  { name: 'Star Gazing', desc: 'We sit in a Dark Sky area. Join our Friday guided star gazing sessions — free for guests.', img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&h=400&fit=crop' },
]

// ─────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────
const gallery = [
  { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&h=500&fit=crop', label: 'The Meadow' },
  { src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=700&h=900&fit=crop', label: 'Bell Tent Interior', tall: true },
  { src: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=700&h=500&fit=crop', label: 'Night Sky' },
  { src: 'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=700&h=500&fit=crop', label: "Shepherd's Hut" },
  { src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&h=900&fit=crop', label: 'Morning Trail', tall: true },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&h=500&fit=crop', label: 'Campfire Evenings' },
]

// ─────────────────────────────────────────────
// SEASON CALENDAR
// ─────────────────────────────────────────────
const seasons = [
  { month: 'Mar', label: 'Open', note: 'Glamping opens', color: C.forestLight },
  { month: 'Apr', label: 'All Pitches', note: 'Season begins', color: C.forest },
  { month: 'May', label: 'Peak', note: 'Bank holidays busy', color: C.amber },
  { month: 'Jun', label: 'Peak', note: 'Long evenings', color: C.amber },
  { month: 'Jul', label: 'Full', note: 'Book early', color: C.amberDim },
  { month: 'Aug', label: 'Full', note: 'Book very early', color: C.amberDim },
  { month: 'Sep', label: 'Peak', note: 'Star gazing starts', color: C.amber },
  { month: 'Oct', label: 'Open', note: 'Glamping closes 31', color: C.forestLight },
  { month: 'Nov', label: 'Closed', note: '', color: C.muted },
]

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Fiona & Al G.', rating: 5, text: 'The shepherd\'s hut was one of the best nights we have ever had. Woke to birdsong, lit the stove, and had a long bath under the open sky. Pure magic.', date: '2026-07-21', source: 'google', verified: true },
  { id: '2', author: 'Tom H.', rating: 5, text: 'Came with 3 small kids. The natural play area kept them entertained for hours. The meadow pitches are enormous and you never feel on top of your neighbours.', date: '2026-08-01', source: 'tripadvisor', verified: true },
  { id: '3', author: 'Priya V.', rating: 5, text: 'Glamping newbie — the bell tent was perfectly set up and the welcome hamper was a beautiful touch. The star gazing session on Friday night was one of the highlights of our year.', date: '2026-07-26', source: 'google', verified: true },
  { id: '4', author: 'Jamie S.', rating: 4, text: 'Came solo in my van. The campervan pitch was excellent value. Facilities were impeccably clean. The on-site shop stocked everything I forgot to bring.', date: '2026-08-03', source: 'google', verified: true },
  { id: '5', author: 'The Andersons', rating: 5, text: 'Third time back. Starfield is our family\'s annual tradition now. The pond fishing is what seals it — the kids caught their first fish here. We will return until they stop letting us.', date: '2026-07-31', source: 'google', verified: true },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'When do you open and close?', answer: 'We open for glamping and shepherd\'s huts from March 1st. All pitches open April 1st through October 31st. The site closes fully on November 1st.' },
  { question: 'Are campfires allowed?', answer: 'Yes! We love campfires. Fire pits are available to hire for £5/night. Firewood is sold in the on-site shop. No fires directly on the grass — fire baskets only.' },
  { question: 'Can I bring my dog?', answer: 'Well-behaved dogs are very welcome on all tent and campervan pitches. Dogs are not permitted in the glamping tents or shepherd\'s huts. They must be kept on a lead at all times.' },
  { question: 'Is there a noise policy?', answer: 'Quiet hours are 22:30 to 07:30. We are a family site and expect all guests to respect this. Repeated noise complaints result in same-night removal without refund.' },
  { question: 'How far is the nearest shop or pub?', answer: 'Our on-site shop stocks essentials. The nearest pub (The Crown, Long Compton) is 3km away and serves excellent food. Chipping Norton town centre is 6km with supermarkets.' },
  { question: 'Do you have electric car charging?', answer: 'Yes — two Type 2 EV charge points are available in the car park, first-come first-served. Please ask at reception for the cable adapter.' },
  { question: 'What is your cancellation policy?', answer: 'Full refund 14+ days before arrival. 50% refund 7–14 days. No refund within 7 days. Glamping and hut bookings carry a non-refundable 20% deposit.' },
]

// ─────────────────────────────────────────────
// SLOTS
// ─────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '12:00', available: true, spotsLeft: 25 },
  { id: '2', date: today, time: '14:00', available: true, spotsLeft: 12 },
  { id: '3', date: today, time: '16:00', available: true, spotsLeft: 5 },
  { id: '4', date: today, time: '18:00', available: true, spotsLeft: 18 },
]

const S = {
  page: { backgroundColor: C.midnight, color: C.cream } as React.CSSProperties,
  night: { backgroundColor: C.nightDeep } as React.CSSProperties,
  midnight: { backgroundColor: C.midnight } as React.CSSProperties,
  amber: { color: C.amber } as React.CSSProperties,
  amberLight: { color: C.amberLight } as React.CSSProperties,
  sky: { color: C.sky } as React.CSSProperties,
  forest: { color: C.forest } as React.CSSProperties,
  forestLight: { color: C.forestLight } as React.CSSProperties,
  cream: { color: C.cream } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  mutedLight: { color: C.mutedLight } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://starfieldcamping.example.com',
  name: 'Starfield Camping & Glamping',
  description: 'Award-winning campsite in the Cotswolds — tent pitches, glamping, shepherd\'s huts, and campervan hookups.',
  url: 'https://starfieldcamping.example.com',
  telephone: '+44 1608 643 218',
  email: 'hello@starfieldcamping.com',
  priceRange: '£',
  image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&h=630&fit=crop',
  address: { '@type': 'PostalAddress', streetAddress: 'Starfield Farm, Bourton Road', addressLocality: 'Chipping Norton', postalCode: 'OX7 6SA', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.9387, longitude: -1.5424 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '08:00', closes: '22:00', validFrom: '2026-04-01', validThrough: '2026-10-31' }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '342' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.nightDeep}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.forest}44` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill={C.amber} opacity="0.9" />
          </svg>
          <span className="font-light tracking-[0.3em] text-sm uppercase" style={S.cream}>Starfield</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Pitches', 'Facilities', 'Activities', 'Gallery'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300" style={S.muted}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.amber)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >{item}</a>
          ))}
          <a href="#booking"
            className="px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300"
            style={{ backgroundColor: C.forest, color: C.cream, border: `1px solid ${C.forestLight}` }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.forestLight }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.forest }}
          >Book a Pitch</a>
        </div>
      </div>
    </nav>
  )
}

// CSS star component
function Stars({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const x = (i * 137.5 + 23) % 100
        const y = (i * 79.3 + 11) % 100
        const size = i % 3 === 0 ? 2.5 : i % 5 === 0 ? 2 : 1.5
        const delay = (i * 0.3) % 4
        const dur = 2 + (i % 3)
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: i % 7 === 0 ? C.amberLight : i % 5 === 0 ? C.sky : C.white,
              animation: `twinkle${i % 3} ${dur}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        )
      })}
    </>
  )
}

export default function CampingPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes twinkle0 { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.2;transform:scale(0.8)} }
        @keyframes twinkle1 { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:0.1;transform:scale(0.6)} }
        @keyframes twinkle2 { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:0.8;transform:scale(1.3)} }
        @keyframes campfireGlow {
          0%,100% { opacity:0.55; transform:scaleX(1) scaleY(1); }
          25% { opacity:0.7; transform:scaleX(1.1) scaleY(0.95); }
          50% { opacity:0.6; transform:scaleX(0.95) scaleY(1.05); }
          75% { opacity:0.65; transform:scaleX(1.05) scaleY(0.98); }
        }
        @keyframes tentSway {
          0%,100% { transform:rotate(0deg); }
          50% { transform:rotate(0.8deg); }
        }
        @keyframes skyGradient {
          0%,100% { opacity:1; }
          50% { opacity:0.85; }
        }
        .campfire-glow { animation:campfireGlow 2.5s ease-in-out infinite; }
        .tent-sway { animation:tentSway 6s ease-in-out infinite; }
        .sky-anim { animation:skyGradient 12s ease-in-out infinite; }
        .pitch-card:hover { transform:translateY(-4px); box-shadow:0 20px 50px rgba(0,0,0,0.5); }
        .pitch-card { transition:transform 0.3s ease, box-shadow 0.3s ease; }
        .activity-img:hover { transform:scale(1.04); }
        .activity-img { transition:transform 0.5s ease; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Night Sky
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Sky gradient background */}
        <div className="sky-anim absolute inset-0" style={{
          background: `linear-gradient(to bottom, ${C.nightDeep} 0%, ${C.midnight} 40%, ${C.forestDim} 80%, ${C.treeLine} 100%)`,
        }} />

        {/* Stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Stars count={20} />
        </div>

        {/* Campfire glow */}
        <div className="campfire-glow absolute bottom-24 left-1/2 -translate-x-1/2 w-72 h-40 pointer-events-none" style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 80%, ${C.amber}66, ${C.amberDim}33, transparent 70%)`,
          filter: 'blur(16px)',
        }} />

        {/* Tent silhouette (CSS triangle) */}
        <div className="tent-sway absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
          <div style={{ width: 0, height: 0, borderLeft: '60px solid transparent', borderRight: '60px solid transparent', borderBottom: `90px solid ${C.forestDim}` }} />
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-10" style={{ backgroundColor: C.treeLine }} />
        </div>

        {/* Tree line silhouette */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '80px' }}>
          {Array.from({ length: 24 }).map((_, i) => {
            const h = 30 + (i * 17 % 50)
            const x = (i * 4.5) % 100
            return (
              <div key={i} className="absolute bottom-0" style={{
                left: `${x}%`,
                width: 0, height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderBottom: `${h}px solid ${C.treeLine}`,
              }} />
            )
          })}
        </div>

        {/* Hero text */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto" style={{ paddingTop: '80px' }}>
          {/* Pitch type pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['Tent', 'Campervan', 'Glamping', 'Cabin'].map((type) => (
              <span key={type} className="text-xs tracking-[0.18em] uppercase px-4 py-1.5" style={{ border: `1px solid ${C.forest}88`, color: C.creamWarm, backgroundColor: `${C.forest}33` }}>
                {type}
              </span>
            ))}
          </div>

          <p className="text-xs tracking-[0.5em] uppercase mb-4" style={S.amber}>Chipping Norton, Oxfordshire</p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-none mb-6" style={S.cream}>
            Under the<br /><span style={S.amber}>Stars</span>
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto mb-12" style={S.mutedLight}>
            Certified Dark Sky site. 12 acres of meadow. 5 pitch types. Hiking, fishing, cycling
            and campfire evenings — from £15 a night.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#pitches"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-400"
              style={{ backgroundColor: C.forest, color: C.cream, border: `1px solid ${C.forestLight}` }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.forestLight }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.forest }}
            >Explore Pitches</a>
            <a href="#booking"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
              style={{ border: `1px solid ${C.amber}66`, color: C.amber }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.amber}11` }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >Book Now</a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10 justify-center text-center">
            {[
              { val: '12 ac', label: 'Meadow & woodland' },
              { val: '5', label: 'Pitch types' },
              { val: 'From £15', label: 'Per night' },
              { val: 'Dark Sky', label: 'Certified area' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="text-xl md:text-2xl font-extralight mb-1" style={S.amber}>{val}</div>
                <div className="text-xs tracking-[0.18em] uppercase" style={S.muted}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PITCH TYPES
          ═══════════════════════════════════════ */}
      <section id="pitches" className="py-24 md:py-32 px-6 md:px-16" style={S.night}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>Choose Your Style</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Pitches & Glamping</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {pitches.map((pitch, i) => (
              <div key={pitch.name} className={`pitch-card reveal-up relative overflow-hidden${pitch.featured ? ' lg:col-span-1' : ''}`}
                style={{ animationDelay: `${i * 0.08}s`, border: `1px solid ${pitch.color}44`, backgroundColor: '#1a2535' }}>
                {pitch.featured && (
                  <div className="absolute top-4 left-4 z-10 text-[10px] font-bold tracking-widest uppercase px-3 py-1" style={{ backgroundColor: pitch.color, color: C.nightDeep }}>
                    Most Popular
                  </div>
                )}
                <div className="relative h-52 overflow-hidden">
                  <img src={pitch.img} alt={pitch.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" style={{ filter: 'brightness(0.8)' }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #1a2535 0%, transparent 50%)` }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-light" style={S.cream}>{pitch.name}</h3>
                    <div>
                      <span className="text-xl font-extralight" style={{ color: pitch.color }}>{pitch.price}</span>
                      <span className="text-xs font-light" style={S.muted}>{pitch.unit}</span>
                    </div>
                  </div>
                  <p className="text-sm font-light leading-relaxed mb-4" style={S.mutedLight}>{pitch.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {pitch.amenities.map((a) => (
                      <span key={a} className="text-[10px] tracking-wide uppercase px-2 py-1" style={{ backgroundColor: `${pitch.color}18`, color: pitch.color }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FACILITIES
          ═══════════════════════════════════════ */}
      <section id="facilities" className="py-24 md:py-32 px-6 md:px-16" style={S.midnight}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.forestLight}>On Site</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Facilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {facilities.map((fac, i) => (
              <div key={fac.name} className="reveal-up flex gap-5 p-6"
                style={{ animationDelay: `${i * 0.08}s`, backgroundColor: '#1a2535', border: `1px solid ${C.forest}33` }}>
                <div className="text-3xl flex-shrink-0">{fac.icon}</div>
                <div>
                  <h3 className="text-base font-light mb-1" style={S.cream}>{fac.name}</h3>
                  <p className="text-sm font-light" style={S.mutedLight}>{fac.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ACTIVITIES
          ═══════════════════════════════════════ */}
      <section id="activities" className="py-24 md:py-32 px-6 md:px-16" style={S.night}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>Things To Do</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Activities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {activities.map((act, i) => (
              <div key={act.name} className="reveal-up flex gap-6 items-start" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-40 h-28 overflow-hidden flex-shrink-0" style={{ border: `1px solid ${C.forest}44` }}>
                  <img src={act.img} alt={act.name} className="activity-img w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-extralight mb-2" style={S.amber}>{act.name}</h3>
                  <p className="text-sm font-light leading-relaxed" style={S.mutedLight}>{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY
          ═══════════════════════════════════════ */}
      <section id="gallery" className="py-24 md:py-32 px-6 md:px-16" style={S.midnight}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sky}>Moments at Starfield</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {gallery.map((img, i) => (
              <div key={i} className="reveal-up relative overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s`, height: img.tall ? '400px' : '230px', border: `1px solid ${C.forest}33` }}>
                <img src={img.src} alt={img.label} className="activity-img w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end p-4" style={{ background: `linear-gradient(to top, ${C.nightDeep}bb, transparent 60%)` }}>
                  <span className="text-xs tracking-[0.2em] uppercase font-light" style={S.cream}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SEASON CALENDAR
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16" style={S.night}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>When To Visit</p>
            <h2 className="text-3xl font-extralight" style={S.cream}>Season Calendar</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2 stagger-children">
            {seasons.map((s, i) => (
              <div key={s.month} className="reveal-up text-center p-3" style={{ animationDelay: `${i * 0.05}s`, backgroundColor: '#1a2535', border: `1px solid ${s.color}44` }}>
                <div className="text-xs font-bold tracking-wider uppercase mb-1" style={{ color: s.color }}>{s.month}</div>
                <div className="text-[10px] tracking-wide mb-1" style={S.cream}>{s.label}</div>
                {s.note && <div className="text-[9px]" style={S.muted}>{s.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 relative overflow-hidden" style={S.midnight}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 0% 100%, ${C.forest}15, transparent)` }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>Book Your Pitch</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={S.cream}>Reserve Online</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.mutedLight}>
              Book direct — no booking fees. Instant confirmation by email.
              Arrival any day, minimum 2 nights for glamping and shepherd&rsquo;s huts.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Address', val: 'Starfield Farm, Bourton Road, Chipping Norton, OX7 6SA' },
                { label: 'Reception', val: '8:00–20:00 daily. Late arrivals by arrangement (ring ahead).' },
                { label: 'Arrival', val: 'After 12:00. Departure by 11:00.' },
                { label: 'Pitches', val: 'From £15 tent · £20 campervan · £75 bell tent · £95 shepherd\'s hut' },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: `${C.forest}88`, minHeight: '40px' }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.forestLight}>{label}</p>
                    <p className="text-sm font-light" style={S.mutedLight}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 217, label: 'pitches booked this month' }}
              vertical="campositions"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.night}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>Happy Campers</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.midnight}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="CampingOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+441608643218" message="Hi! I'd like to book a pitch at Starfield Camping" vertical="campositions" />
    </div>
  )
}

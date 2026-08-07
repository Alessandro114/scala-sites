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
  void: '#0a0a0a',
  dark: '#0f0f0f',
  darkAlt: '#141014',
  purple: '#6b21a8',
  purpleLight: '#7c3aed',
  purpleDim: '#4c1d95',
  gold: '#d4af37',
  goldDim: '#a8891f',
  red: '#991b1b',
  redLight: '#dc2626',
  cream: '#f0ead6',
  muted: '#6b6470',
  fog: '#c4b8cc',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'The Cryptex Escape Rooms',
  description: 'Award-winning escape rooms in London — 4 unique themed rooms',
  url: 'https://thecryptex.example.com',
  locale: 'en',
  vertical: 'escapeos',
  theme: 'dark',
  branding: { primaryColor: C.void, accentColor: C.purple },
  contact: {
    phone: '+44 20 7946 0321',
    email: 'book@thecryptex.com',
    whatsapp: '+442079460321',
    address: '17 Shaftesbury Avenue, Soho, London W1D 7EH',
    coordinates: { lat: 51.5131, lng: -0.1313 },
  },
  social: {
    instagram: 'thecryptexlondon',
    facebook: 'https://facebook.com/thecryptexlondon',
  },
  seo: {
    title: 'The Cryptex — Escape Rooms | Can You Escape?',
    description: 'Award-winning escape rooms in London. Book online.',
  },
}

// ─────────────────────────────────────────────
// ROOMS DATA
// ─────────────────────────────────────────────
interface Room {
  name: string
  theme: string
  difficulty: number
  capacity: string
  duration: string
  image: string
  desc: string
  tag?: string
}

const rooms: Room[] = [
  {
    name: 'The Vault',
    theme: 'Heist',
    difficulty: 4,
    capacity: '2–6 players',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    desc: 'You have 60 minutes to crack a legendary bank vault before the guards return. Every second counts.',
    tag: 'Most Popular',
  },
  {
    name: 'Haunted Manor',
    theme: 'Horror',
    difficulty: 5,
    capacity: '2–8 players',
    duration: '75 min',
    image: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=800&h=600&fit=crop',
    desc: 'An abandoned Victorian manor holds a dark secret. Survive the night and uncover the truth — if you dare.',
    tag: 'Scariest',
  },
  {
    name: 'Space Station',
    theme: 'Sci-Fi',
    difficulty: 3,
    capacity: '3–8 players',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    desc: 'A distress signal from Orbital Station Alpha. Repair the reactor before life support fails — the clock is ticking.',
  },
  {
    name: 'Prison Break',
    theme: 'Thriller',
    difficulty: 2,
    capacity: '2–6 players',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    desc: 'Wrongfully imprisoned. One hour to find the evidence and break free before the warden\u2019s rounds.',
    tag: 'Beginner Friendly',
  },
]

// ─────────────────────────────────────────────
// PACKAGES
// ─────────────────────────────────────────────
const packages = [
  {
    name: 'Team Building',
    price: '£30',
    unit: 'per person',
    min: '8 players min',
    perks: ['Dedicated host', 'Debrief session', 'Leaderboard entry', 'Refreshments included'],
    highlight: false,
  },
  {
    name: 'Birthday',
    price: '£25',
    unit: 'per person',
    min: '4 players min',
    perks: ['Birthday banner & decorations', 'Group photo', 'Complimentary drinks', 'Priority booking'],
    highlight: true,
  },
  {
    name: 'Corporate',
    price: '£35',
    unit: 'per person',
    min: '10 players min',
    perks: ['Exclusive venue hire', 'Custom challenges', 'Catering available', 'Branded certificates'],
    highlight: false,
  },
]

// ─────────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────────
const steps = [
  { step: '01', label: 'Book', desc: 'Choose your room and time slot online. Group size 2–8 players.' },
  { step: '02', label: 'Brief', desc: 'Arrive 15 min early. Your game master sets the scene and explains the rules.' },
  { step: '03', label: 'Play', desc: 'Solve puzzles, find clues, and work together to beat the clock.' },
  { step: '04', label: 'Escape', desc: 'Claim your glory on the leaderboard — or try again for a better time.' },
]

// ─────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────
const gallery = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop', label: 'The Vault' },
  { src: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=700&h=900&fit=crop', label: 'Haunted Manor', tall: true },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&h=500&fit=crop', label: 'Team Victory' },
  { src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&h=900&fit=crop', label: 'Puzzle Room', tall: true },
  { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&h=500&fit=crop', label: 'Space Station' },
  { src: 'https://images.unsplash.com/photo-1620326280280-c7efd3f93e65?w=700&h=500&fit=crop', label: 'Game Master\u2019s Control' },
]

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Marcus T.', rating: 5, text: 'The Haunted Manor genuinely terrified our group. We failed to escape but had the best time ever. The atmosphere is completely immersive — 10/10.', date: '2026-07-18', source: 'google', verified: true },
  { id: '2', author: 'Priya S.', rating: 5, text: 'Booked the Vault for a team building day and it was incredible. Our team who never communicate in the office suddenly became unstoppable.', date: '2026-07-25', source: 'tripadvisor', verified: true },
  { id: '3', author: 'Ollie R.', rating: 5, text: 'Space Station is perfectly balanced — challenging enough to feel epic but not frustrating. The set design rivals actual film sets.', date: '2026-08-02', source: 'google', verified: true },
  { id: '4', author: 'Fiona H.', rating: 5, text: 'Did Prison Break for a birthday and everyone loved it. The game master was hilarious and cheered us on the whole time.', date: '2026-08-05', source: 'google', verified: true },
  { id: '5', author: 'Dev K.', rating: 4, text: 'Third time visiting — done all 4 rooms now. The attention to detail in every puzzle is extraordinary. Already planning to go back for the new room.', date: '2026-07-30', source: 'google', verified: true },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'How many people can play?', answer: 'Our rooms accommodate 2–8 players. For larger corporate or team events, we can book multiple rooms running simultaneously.' },
  { question: 'Is it scary? I get nervous easily.', answer: 'Only Haunted Manor has genuine scare elements. The Vault, Space Station, and Prison Break are tense but not frightening. All game masters are trained to support anxious players.' },
  { question: 'What if we get totally stuck?', answer: 'Your game master monitors you throughout and can provide hints via an in-room screen. No one leaves without finishing — we want you to have a great experience.' },
  { question: 'Are the rooms suitable for children?', answer: 'We welcome players 12+ with adult supervision. Haunted Manor is 16+ only. Prison Break is ideal for family groups.' },
  { question: 'Can I book a private session?', answer: 'Absolutely. All sessions are private by default — you will never be grouped with strangers. Corporate hire of the entire venue is available.' },
  { question: 'What should I wear?', answer: 'Comfortable clothes and flat shoes. No formal attire needed. Some rooms involve crawling or crouching so dress accordingly.' },
  { question: 'Is there parking nearby?', answer: 'We are a 3-minute walk from Leicester Square station. Street parking is very limited — public transport is strongly recommended.' },
]

// ─────────────────────────────────────────────
// BOOKING SLOTS
// ─────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '10:00', available: true, spotsLeft: 6 },
  { id: '2', date: today, time: '11:30', available: true, spotsLeft: 4 },
  { id: '3', date: today, time: '13:00', available: true, spotsLeft: 8 },
  { id: '4', date: today, time: '14:30', available: true, spotsLeft: 2 },
  { id: '5', date: today, time: '16:00', available: true, spotsLeft: 6 },
  { id: '6', date: today, time: '17:30', available: true, spotsLeft: 5 },
  { id: '7', date: today, time: '19:00', available: true, spotsLeft: 8 },
  { id: '8', date: today, time: '20:30', available: true, spotsLeft: 3 },
]

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  page: { backgroundColor: C.void, color: C.cream } as React.CSSProperties,
  dark: { backgroundColor: C.dark } as React.CSSProperties,
  darkAlt: { backgroundColor: C.darkAlt } as React.CSSProperties,
  purple: { color: C.purple } as React.CSSProperties,
  purpleLight: { color: C.purpleLight } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  cream: { color: C.cream } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  fog: { color: C.fog } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://thecryptex.example.com',
  name: 'The Cryptex Escape Rooms',
  description: 'Award-winning escape rooms in London — 4 unique themed rooms for team building, birthdays, and corporate events.',
  url: 'https://thecryptex.example.com',
  telephone: '+44 20 7946 0321',
  email: 'book@thecryptex.com',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Shaftesbury Avenue, Soho',
    addressLocality: 'London',
    postalCode: 'W1D 7EH',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5131, longitude: -0.1313 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '10:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday','Saturday'], opens: '10:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '11:00', closes: '21:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '412' },
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
// COMPONENTS
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.void}ee`, borderBottom: `1px solid ${C.purple}33`, backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          {/* Keyhole icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="9" r="4" stroke={C.gold} strokeWidth="1.5" />
            <path d="M10 13l-2 7h8l-2-7" stroke={C.gold} strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span className="font-light tracking-[0.25em] text-sm uppercase" style={S.cream}>
            The Cryptex
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Rooms', 'Packages', 'How It Works', 'Gallery'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-400"
            style={{ backgroundColor: C.purple, color: C.cream, border: `1px solid ${C.purpleLight}` }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.purpleLight }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.purple }}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}

function DifficultyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1.5 items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: i <= level ? (level >= 4 ? C.red : level >= 3 ? C.gold : C.purple) : `${C.muted}44`,
          }}
        />
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function EscapeRoomPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          8% { opacity: 0.9; }
          9% { opacity: 0.4; }
          10% { opacity: 1; }
          50% { opacity: 0.95; }
          51% { opacity: 0.3; }
          52% { opacity: 1; }
          80% { opacity: 0.9; }
          81% { opacity: 0.5; }
          82% { opacity: 1; }
        }
        @keyframes countGlow {
          0%, 100% { text-shadow: 0 0 20px ${C.red}88, 0 0 40px ${C.red}44; }
          50% { text-shadow: 0 0 30px ${C.red}cc, 0 0 60px ${C.red}66, 0 0 80px ${C.red}22; }
        }
        @keyframes pulseKey {
          0%, 100% { transform: rotate(-5deg) scale(1); filter: drop-shadow(0 0 8px ${C.gold}66); }
          50% { transform: rotate(5deg) scale(1.05); filter: drop-shadow(0 0 20px ${C.gold}cc); }
        }
        @keyframes fogDrift {
          0% { transform: translateX(-5%) scaleX(1); opacity: 0.6; }
          50% { transform: translateX(3%) scaleX(1.05); opacity: 0.8; }
          100% { transform: translateX(-5%) scaleX(1); opacity: 0.6; }
        }
        @keyframes starFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .flicker-text { animation: flicker 4s infinite; }
        .count-glow { animation: countGlow 2s ease-in-out infinite; }
        .pulse-key { animation: pulseKey 3s ease-in-out infinite; }
        .fog-drift { animation: fogDrift 6s ease-in-out infinite; }
        .escape-card:hover { transform: translateY(-4px); transition: transform 0.3s ease; }
        .escape-card { transition: transform 0.3s ease; }
        .gallery-item:hover img { transform: scale(1.06); }
        .gallery-item img { transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Keyhole Spotlight
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: C.void }}
      >
        {/* Keyhole spotlight — CSS radial gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 280px 400px at 50% 40%, ${C.purpleDim}55 0%, transparent 70%),
              radial-gradient(circle 160px at 50% 32%, ${C.purple}33 0%, transparent 100%)
            `,
          }}
        />

        {/* Ambient corner fog */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 60% 50% at 0% 100%, ${C.red}18 0%, transparent 60%),
                       radial-gradient(ellipse 60% 50% at 100% 0%, ${C.purpleDim}22 0%, transparent 60%)`,
        }} />

        {/* Fog mist at bottom */}
        <div
          className="fog-drift absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${C.purpleDim}44 0%, ${C.void}00 100%)`,
            filter: 'blur(20px)',
          }}
        />

        {/* Central keyhole SVG element */}
        <div className="pulse-key mb-8 relative z-10">
          <svg width="80" height="110" viewBox="0 0 80 110" fill="none">
            <circle cx="40" cy="32" r="24" stroke={C.gold} strokeWidth="2" fill={`${C.gold}11`} />
            <circle cx="40" cy="32" r="14" fill={`${C.gold}22`} />
            <path d="M28 56l6 42h12l6-42" stroke={C.gold} strokeWidth="2" strokeLinejoin="round" fill={`${C.gold}11`} />
            <rect x="26" y="84" width="28" height="6" rx="3" fill={C.gold} opacity="0.6" />
          </svg>
        </div>

        {/* Countdown aesthetic */}
        <div
          className="count-glow relative z-10 font-mono text-5xl md:text-7xl font-light tracking-[0.25em] mb-4"
          style={{ color: C.red, fontVariantNumeric: 'tabular-nums' }}
        >
          00:60:00
        </div>

        <p className="relative z-10 text-xs tracking-[0.5em] uppercase mb-6" style={S.gold}>
          The Clock Is Ticking
        </p>

        <h1 className="relative z-10 text-center mb-6">
          <span
            className="flicker-text block text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-none"
            style={{ color: C.cream }}
          >
            Can You
          </span>
          <span
            className="flicker-text block text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-none"
            style={{ color: C.gold, animationDelay: '0.3s' }}
          >
            Escape?
          </span>
        </h1>

        <p
          className="relative z-10 text-center text-base md:text-lg font-light leading-relaxed max-w-md mb-12 px-6"
          style={S.fog}
        >
          4 immersive rooms. 60–75 minutes. No exits until you solve every puzzle.
          London&rsquo;s most thrilling escape experience since 2018.
        </p>

        {/* CTA row */}
        <div className="relative z-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#rooms"
            className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-400"
            style={{ backgroundColor: C.purple, color: C.cream, border: `1px solid ${C.purpleLight}` }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.purpleLight }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.purple }}
          >
            Choose Your Room
          </a>
          <a
            href="#booking"
            className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
            style={{ border: `1px solid ${C.gold}66`, color: C.gold }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.backgroundColor = `${C.gold}11` }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.gold}66`; e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            Book Now
          </a>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 mt-16 flex flex-wrap gap-10 justify-center text-center">
          {[
            { val: '4', label: 'Unique Rooms' },
            { val: '60–75', label: 'Minutes' },
            { val: '4,000+', label: 'Escapees' },
            { val: '38%', label: 'Escape Rate' },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-extralight mb-1" style={S.gold}>{val}</div>
              <div className="text-xs tracking-[0.2em] uppercase" style={S.muted}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ROOMS
          ═══════════════════════════════════════ */}
      <section id="rooms" className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Choose Your Challenge</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>The Rooms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {rooms.map((room, i) => (
              <div
                key={room.name}
                className="escape-card relative overflow-hidden group cursor-pointer reveal-up"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  border: `1px solid ${C.purple}33`,
                  backgroundColor: C.darkAlt,
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.darkAlt} 0%, transparent 60%)` }} />
                  {room.tag && (
                    <div
                      className="absolute top-4 right-4 text-[10px] tracking-wider uppercase px-3 py-1"
                      style={{ backgroundColor: C.purple, color: C.cream }}
                    >
                      {room.tag}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.purple}>{room.theme}</p>
                      <h3 className="text-2xl font-extralight" style={S.cream}>{room.name}</h3>
                    </div>
                    <DifficultyDots level={room.difficulty} />
                  </div>
                  <p className="text-sm font-light leading-relaxed mb-4" style={S.fog}>{room.desc}</p>
                  <div className="flex gap-6 text-xs tracking-[0.15em] uppercase" style={S.muted}>
                    <span>{room.capacity}</span>
                    <span style={{ color: `${C.muted}44` }}>|</span>
                    <span>{room.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
          ═══════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.void }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Your Journey</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 stagger-children">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="reveal-up relative flex flex-col items-center text-center px-6 py-8"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-14 left-1/2 w-full h-px"
                    style={{ background: `linear-gradient(to right, ${C.purple}66, ${C.purple}22)` }}
                  />
                )}
                <div
                  className="relative z-10 w-16 h-16 flex items-center justify-center mb-6 text-2xl font-extralight"
                  style={{
                    border: `1px solid ${C.purple}66`,
                    color: C.gold,
                    backgroundColor: `${C.purple}11`,
                  }}
                >
                  {step.step}
                </div>
                <h3 className="text-lg font-light tracking-wide mb-3" style={S.cream}>{step.label}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.fog}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GROUP PACKAGES
          ═══════════════════════════════════════ */}
      <section id="packages" className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>For Groups</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Group Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className="reveal-up flex flex-col p-8"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  border: `1px solid ${pkg.highlight ? C.gold : C.purple + '44'}`,
                  backgroundColor: pkg.highlight ? `${C.gold}08` : C.darkAlt,
                  position: 'relative',
                }}
              >
                {pkg.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase px-4 py-1"
                    style={{ backgroundColor: C.gold, color: C.void }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-light tracking-wide mb-2" style={pkg.highlight ? S.gold : S.cream}>{pkg.name}</h3>
                <div className="mb-1">
                  <span className="text-4xl font-extralight" style={pkg.highlight ? S.gold : S.cream}>{pkg.price}</span>
                  <span className="text-sm font-light ml-1" style={S.muted}>{pkg.unit}</span>
                </div>
                <p className="text-xs tracking-[0.15em] uppercase mb-6" style={S.muted}>{pkg.min}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex gap-3 text-sm font-light" style={S.fog}>
                      <span style={{ color: pkg.highlight ? C.gold : C.purple }}>&#10003;</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="block text-center py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    border: `1px solid ${pkg.highlight ? C.gold : C.purple}`,
                    color: pkg.highlight ? C.gold : C.cream,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = pkg.highlight ? C.gold : C.purple
                    e.currentTarget.style.color = C.void
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = pkg.highlight ? C.gold : C.cream
                  }}
                >
                  Enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY
          ═══════════════════════════════════════ */}
      <section id="gallery" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.void }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Inside The Cryptex</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Gallery</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="gallery-item reveal-up relative overflow-hidden"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  height: img.tall ? '420px' : '240px',
                  border: `1px solid ${C.purple}22`,
                }}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{ background: `linear-gradient(to top, ${C.void}bb, transparent 60%)` }}
                >
                  <span className="text-xs tracking-[0.2em] uppercase font-light" style={S.fog}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 relative overflow-hidden" style={S.dark}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 60% 60% at 80% 50%, ${C.purple}15, transparent)`,
        }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Reservations</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={S.cream}>Book Your<br />Escape</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.fog}>
              All sessions are fully private. Book online and receive confirmation instantly.
              Arrive 15 minutes before your time slot.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Location', val: '17 Shaftesbury Avenue, Soho, London W1D 7EH' },
                { label: 'Hours', val: 'Mon–Thu 10:00–22:00 | Fri–Sat 10:00–23:00 | Sun 11:00–21:00' },
                { label: 'Group Size', val: '2–8 players per room. Private sessions only.' },
                { label: 'Price from', val: '£25 per person — corporate enquiries welcome' },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: `${C.purple}55`, minHeight: '40px' }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.purpleLight}>{label}</p>
                    <p className="text-sm font-light" style={S.fog}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 4127, label: 'players have attempted escape' }}
              vertical="escapeos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.void }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>What Survivors Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460321" message="Hi! I'd like to book an escape room at The Cryptex" vertical="escapeos" />
    </div>
  )
}

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
  void: '#111111',
  dark: '#161616',
  darkCard: '#1a1a1a',
  pink: '#f472b6',
  pinkDim: '#db2777',
  blue: '#38bdf8',
  blueDim: '#0ea5e9',
  green: '#4ade80',
  greenDim: '#16a34a',
  yellow: '#facc15',
  white: '#ffffff',
  offWhite: '#f0f0f0',
  muted: '#6b7280',
  dimText: '#9ca3af',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'NeonStrike Bowling',
  description: 'London\'s most exciting bowling alley — 16 lanes, laser tag, arcade & great food',
  url: 'https://neonstrike.example.com',
  locale: 'en',
  vertical: 'bowlos',
  theme: 'neon',
  branding: { primaryColor: C.void, accentColor: C.pink },
  contact: {
    phone: '+44 20 7946 0777',
    email: 'hello@neonstrike.com',
    whatsapp: '+442079460777',
    address: '88 Leisure Way, Stratford, London E20 1ET',
    coordinates: { lat: 51.5420, lng: -0.0005 },
  },
  social: { instagram: 'neonstrikebowling', facebook: 'https://facebook.com/neonstrikebowling' },
  seo: { title: 'NeonStrike Bowling | Strike Your Fun', description: 'London\'s most exciting bowling alley. Book a lane online.' },
}

// ─────────────────────────────────────────────
// ACTIVITIES
// ─────────────────────────────────────────────
const activities = [
  {
    name: 'Bowling',
    price: 'From £6',
    unit: 'per game',
    icon: '🎳',
    desc: '16 state-of-the-art lanes with auto-scoring, bumpers for kids, and cosmic UV nights every Friday.',
    color: C.pink,
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
  },
  {
    name: 'Laser Tag',
    price: '£8',
    unit: 'per session',
    icon: '🔫',
    desc: 'Multi-level arena with fog machines, UV lighting, and battle royale mode for groups of up to 20.',
    color: C.blue,
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  },
  {
    name: 'Arcade',
    price: 'Pay to play',
    unit: 'tokens from £5',
    icon: '🕹️',
    desc: '60+ arcade machines, prize redemption, claw machines, and racing simulators for all ages.',
    color: C.green,
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
  },
  {
    name: 'Party Rooms',
    price: 'From £150',
    unit: 'room hire',
    icon: '🎉',
    desc: 'Private party rooms for 10–50 guests. Decorations, catering, dedicated host, and lane priority.',
    color: C.yellow,
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
  },
]

// ─────────────────────────────────────────────
// FOOD MENU
// ─────────────────────────────────────────────
const food = [
  { name: 'Strike Burger', desc: 'Double smash patty, cheddar, pickles, house sauce', price: '£13' },
  { name: 'Loaded Nachos', desc: 'Jalapeños, sour cream, salsa, guacamole, cheese', price: '£9' },
  { name: 'Pizza Slice', desc: 'Margherita or pepperoni — served by the slice', price: '£5' },
  { name: 'Chicken Strips', desc: '6-piece with dipping sauces, fries', price: '£11' },
  { name: 'Lane Sharing Platter', desc: 'Wings, mini burgers, fries — feeds 4', price: '£32' },
  { name: 'Neon Milkshake', desc: 'Strawberry, vanilla, chocolate, or salted caramel', price: '£6' },
  { name: 'Soft Drinks & Slushies', desc: 'Free refills on soft drinks', price: 'From £3' },
  { name: 'Craft Beer & Cocktails', desc: 'Rotating guest beers, signature neon cocktails', price: 'From £7' },
]

// ─────────────────────────────────────────────
// PARTY PACKAGES
// ─────────────────────────────────────────────
const parties = [
  {
    name: 'Kids Party',
    price: '£15',
    unit: 'per child',
    min: '8 kids min',
    perks: ['2 games bowling', 'Party room 2h', 'Burger & chips', 'Squash', 'Party bag'],
    color: C.green,
  },
  {
    name: 'Adult Party',
    price: '£20',
    unit: 'per person',
    min: '10 people min',
    perks: ['2 games bowling', 'Party room 3h', 'Sharing platters', '2 drinks each', 'Arcade tokens'],
    color: C.pink,
    highlight: true,
  },
  {
    name: 'Corporate',
    price: 'From £500',
    unit: 'full venue',
    min: 'Min 30 people',
    perks: ['Exclusive hire', 'All activities', 'Full catering', 'Custom branding', 'AV system'],
    color: C.blue,
  },
]

// ─────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────
const gallery = [
  { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&h=500&fit=crop', label: 'The Lanes' },
  { src: 'https://images.unsplash.com/photo-1484519716377-82e40cc0c636?w=700&h=900&fit=crop', label: 'Neon Night', tall: true },
  { src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=700&h=500&fit=crop', label: 'Arcade Zone' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&h=500&fit=crop', label: 'Party Time' },
  { src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&h=900&fit=crop', label: 'Laser Tag', tall: true },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&h=500&fit=crop', label: 'Group Fun' },
]

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Jake M.', rating: 5, text: 'Cosmic bowling on a Friday night was electric. The neon lights, the music, the atmosphere — our whole group was buzzing. Best night out in London.', date: '2026-07-19', source: 'google', verified: true },
  { id: '2', author: 'Sophie T.', rating: 5, text: 'My daughter\'s 9th birthday here was perfect. The staff decorated the party room beautifully and the kids absolutely loved the bowling. Will be back every year.', date: '2026-07-24', source: 'google', verified: true },
  { id: '3', author: 'Carlos R.', rating: 4, text: 'Laser tag arena is genuinely impressive — huge and properly designed. Could eat there every week, the sharing platter is incredible value.', date: '2026-08-01', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Natasha W.', rating: 5, text: 'Corporate event for 45 people. The team handled everything flawlessly. Food was excellent, the bowling competition got very competitive!', date: '2026-08-03', source: 'google', verified: true },
  { id: '5', author: 'Tyler H.', rating: 5, text: 'Kids Bowl Free before 4pm is the real deal. Brought my two kids for a tenner and they had the time of their lives. We stayed three hours.', date: '2026-07-30', source: 'google', verified: true },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'Do I need to book in advance?', answer: 'Booking is strongly recommended, especially weekends and school holidays. Walk-ins are welcome if lanes are available — check online for live availability.' },
  { question: 'What is Kids Bowl Free?', answer: 'Children under 12 bowl for free before 4pm on weekdays when accompanied by a paying adult. One child per paying adult, maximum 2 free games.' },
  { question: 'What shoes do I need?', answer: 'Bowling shoes are included in the lane booking price. Please bring socks — we do not provide them.' },
  { question: 'What are your cosmic UV night hours?', answer: 'Cosmic Bowling runs every Friday and Saturday from 9pm to midnight. Neon UV lighting, a DJ and special effects make it a completely different experience.' },
  { question: 'Can you cater for large groups?', answer: 'Yes — we regularly host groups of 100+. Contact our events team for exclusive hire, custom packages and catering options.' },
]

// ─────────────────────────────────────────────
// SLOTS
// ─────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '10:00', available: true, spotsLeft: 16 },
  { id: '2', date: today, time: '12:00', available: true, spotsLeft: 10 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 8 },
  { id: '4', date: today, time: '16:00', available: true, spotsLeft: 6 },
  { id: '5', date: today, time: '18:00', available: true, spotsLeft: 12 },
  { id: '6', date: today, time: '20:00', available: true, spotsLeft: 4 },
]

const S = {
  page: { backgroundColor: C.void, color: C.offWhite } as React.CSSProperties,
  dark: { backgroundColor: C.dark } as React.CSSProperties,
  darkCard: { backgroundColor: C.darkCard } as React.CSSProperties,
  pink: { color: C.pink } as React.CSSProperties,
  blue: { color: C.blue } as React.CSSProperties,
  green: { color: C.green } as React.CSSProperties,
  yellow: { color: C.yellow } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  dim: { color: C.dimText } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://neonstrike.example.com',
  name: 'NeonStrike Bowling',
  description: 'London\'s most exciting bowling alley — 16 lanes, laser tag, arcade & great food.',
  url: 'https://neonstrike.example.com',
  telephone: '+44 20 7946 0777',
  email: 'hello@neonstrike.com',
  priceRange: '££',
  image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop',
  address: { '@type': 'PostalAddress', streetAddress: '88 Leisure Way, Stratford', addressLocality: 'London', postalCode: 'E20 1ET', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5420, longitude: -0.0005 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '10:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday','Saturday'], opens: '10:00', closes: '00:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '10:00', closes: '21:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '1284' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.void}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.pink}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* Pin layout indicator */}
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-0.5 justify-center">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.pink }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.blue }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.green }} />
            </div>
            <div className="flex gap-0.5 justify-center">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.yellow }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.pink }} />
            </div>
            <div className="flex justify-center">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.blue }} />
            </div>
          </div>
          <span className="font-black text-base tracking-tight" style={S.white}>NEON<span style={S.pink}>STRIKE</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Activities', 'Food', 'Parties', 'Gallery'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.pink)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >{item}</a>
          ))}
          <a href="#booking"
            className="px-6 py-2.5 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${C.pink}, ${C.pinkDim})`, color: C.white }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            Book a Lane
          </a>
        </div>
      </div>
    </nav>
  )
}

export default function BowlingPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes pinWobble {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(6deg); }
          60% { transform: rotate(-4deg); }
          80% { transform: rotate(2deg); }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 8px currentColor); }
          50% { opacity: 0.8; filter: drop-shadow(0 0 20px currentColor) drop-shadow(0 0 40px currentColor); }
        }
        @keyframes laneStripe {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes badgeBounce {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-6px) rotate(-3deg); }
        }
        .pin-wobble { animation: pinWobble 1.5s ease-in-out infinite; animation-delay: var(--d, 0s); }
        .neon-pulse { animation: neonPulse 2s ease-in-out infinite; }
        .badge-bounce { animation: badgeBounce 2.5s ease-in-out infinite; }
        .activity-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .activity-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .food-item:hover { background-color: #222; }
        .food-item { transition: background-color 0.2s ease; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Retro Neon
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: C.void }}>
        {/* Neon lane stripes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[C.pink, C.blue, C.green, C.pink, C.blue].map((color, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{
                left: `${10 + i * 20}%`,
                width: '2px',
                background: `linear-gradient(to bottom, transparent, ${color}44, ${color}22, transparent)`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>

        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${C.pink}18, transparent)`, filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${C.blue}18, transparent)`, filter: 'blur(60px)' }} />

        {/* CSS bowling pin arrangement */}
        <div className="relative z-10 mb-10">
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-5">
              {[C.white, C.pink, C.blue, C.green].map((c, i) => (
                <div key={i} className="pin-wobble w-6 h-8 rounded-full" style={{ backgroundColor: c, animationDelay: `${i * 0.15}s`, filter: `drop-shadow(0 0 6px ${c}88)` }} />
              ))}
            </div>
            <div className="flex gap-5">
              {[C.yellow, C.white, C.pink].map((c, i) => (
                <div key={i} className="pin-wobble w-6 h-8 rounded-full" style={{ backgroundColor: c, animationDelay: `${0.6 + i * 0.15}s`, filter: `drop-shadow(0 0 6px ${c}88)` }} />
              ))}
            </div>
            <div className="flex gap-5">
              {[C.blue, C.green].map((c, i) => (
                <div key={i} className="pin-wobble w-6 h-8 rounded-full" style={{ backgroundColor: c, animationDelay: `${1.2 + i * 0.15}s`, filter: `drop-shadow(0 0 6px ${c}88)` }} />
              ))}
            </div>
            <div>
              <div className="pin-wobble w-6 h-8 rounded-full" style={{ backgroundColor: C.white, animationDelay: '1.5s', filter: `drop-shadow(0 0 6px ${C.white}88)` }} />
            </div>
          </div>
        </div>

        {/* Special offer badge */}
        <div
          className="badge-bounce relative z-10 mb-6 px-5 py-2.5 text-xs font-bold tracking-[0.2em] uppercase"
          style={{ background: `linear-gradient(135deg, ${C.yellow}, #e6b800)`, color: C.void, transform: 'rotate(-3deg)' }}
        >
          Kids Bowl Free Before 4pm
        </div>

        <h1 className="relative z-10 text-center mb-6">
          <span className="neon-pulse block text-5xl md:text-8xl font-black tracking-tight leading-none uppercase" style={{ color: C.white }}>Strike</span>
          <span className="neon-pulse block text-5xl md:text-8xl font-black tracking-tight leading-none uppercase" style={{ color: C.pink, animationDelay: '0.5s' }}>Your Fun</span>
        </h1>

        <p className="relative z-10 text-center text-base md:text-lg font-light leading-relaxed max-w-md mb-12 px-6" style={S.dim}>
          16 lanes. Laser tag. 60+ arcade games. Great food. London&rsquo;s ultimate entertainment centre
          for all ages, any occasion.
        </p>

        <div className="relative z-10 flex flex-wrap gap-4 justify-center">
          <a href="#booking"
            className="px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${C.pink}, ${C.pinkDim})`, color: C.white }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            Book a Lane
          </a>
          <a href="#activities"
            className="px-10 py-4 text-sm font-light tracking-[0.2em] uppercase transition-all duration-300"
            style={{ border: `1px solid ${C.blue}66`, color: C.blue }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.backgroundColor = `${C.blue}11` }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.blue}66`; e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            Explore Activities
          </a>
        </div>

        {/* Stats */}
        <div className="relative z-10 mt-16 flex flex-wrap gap-10 justify-center text-center">
          {[
            { val: '16', label: 'Bowling Lanes', color: C.pink },
            { val: '60+', label: 'Arcade Games', color: C.blue },
            { val: '500+', label: 'Capacity', color: C.green },
            { val: '7 Days', label: 'A Week', color: C.yellow },
          ].map(({ val, label, color }) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-black mb-1" style={{ color }}>{val}</div>
              <div className="text-xs tracking-[0.2em] uppercase" style={S.muted}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ACTIVITIES
          ═══════════════════════════════════════ */}
      <section id="activities" className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.pink}>What We Offer</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={S.white}>Activities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {activities.map((act, i) => (
              <div
                key={act.name}
                className="activity-card reveal-up relative overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s`, backgroundColor: C.darkCard, border: `1px solid ${act.color}33` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={act.img} alt={act.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.darkCard} 0%, transparent 60%)` }} />
                  <div
                    className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase px-3 py-1.5"
                    style={{ backgroundColor: act.color, color: C.void }}
                  >
                    {act.price} {act.unit}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase mb-2" style={{ color: act.color }}>{act.name}</h3>
                  <p className="text-sm font-light leading-relaxed" style={S.dim}>{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOD & DRINKS
          ═══════════════════════════════════════ */}
      <section id="food" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.void }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.green}>Fuel Up</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={S.white}>Food & Drinks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 reveal-up">
            {food.map((item, i) => (
              <div
                key={item.name}
                className="food-item flex justify-between items-start gap-4 px-6 py-5 cursor-default"
                style={{ borderBottom: `1px solid ${C.white}0a` }}
              >
                <div className="flex-1">
                  <h4 className="text-base font-bold mb-1" style={S.white}>{item.name}</h4>
                  <p className="text-sm font-light" style={S.muted}>{item.desc}</p>
                </div>
                <span className="font-bold text-sm flex-shrink-0 ml-4" style={S.green}>{item.price}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs tracking-[0.15em] uppercase mt-8" style={S.muted}>
            Full menu available to order lane-side. Allergen info on request.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PARTIES & EVENTS
          ═══════════════════════════════════════ */}
      <section id="parties" className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.yellow}>Celebrate With Us</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={S.white}>Parties & Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {parties.map((pkg, i) => (
              <div
                key={pkg.name}
                className="reveal-up flex flex-col p-8 relative"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  border: `2px solid ${pkg.color}${pkg.highlight ? 'ff' : '44'}`,
                  backgroundColor: pkg.highlight ? `${pkg.color}12` : C.darkCard,
                }}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest uppercase px-4 py-1" style={{ backgroundColor: pkg.color, color: C.void }}>
                    Best Seller
                  </div>
                )}
                <h3 className="text-xl font-black uppercase mb-1" style={{ color: pkg.color }}>{pkg.name}</h3>
                <div className="text-3xl font-black mb-1" style={S.white}>{pkg.price}</div>
                <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: pkg.color }}>{pkg.unit}</p>
                <p className="text-xs mb-6" style={S.muted}>{pkg.min}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.perks.map((p) => (
                    <li key={p} className="flex gap-3 text-sm font-light" style={S.dim}>
                      <span style={{ color: pkg.color }}>&#9679;</span>{p}
                    </li>
                  ))}
                </ul>
                <a href="#booking"
                  className="block text-center py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300"
                  style={{ border: `2px solid ${pkg.color}`, color: pkg.color }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = pkg.color; e.currentTarget.style.color = C.void }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = pkg.color }}
                >
                  Get a Quote
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
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>The Vibe</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={S.white}>Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {gallery.map((img, i) => (
              <div key={i} className="gallery-item reveal-up relative overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s`, height: img.tall ? '400px' : '230px', border: `1px solid ${C.pink}22` }}>
                <Image src={img.src} alt={img.label} className="w-full h-full object-cover" width={1200} height={800} />
                <div className="absolute inset-0 flex items-end p-4" style={{ background: `linear-gradient(to top, ${C.void}cc, transparent 60%)` }}>
                  <span className="text-xs tracking-[0.2em] uppercase font-bold" style={S.white}>{img.label}</span>
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
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 50% 60% at 100% 50%, ${C.pink}10, transparent)` }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.pink}>Reserve Your Lane</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6" style={S.white}>Book a Lane</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.dim}>
              Choose your game, pick your time, and we&rsquo;ll have your lane ready.
              Shoes included. Fun guaranteed.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Address', val: '88 Leisure Way, Stratford, London E20 1ET' },
                { label: 'Opening Times', val: 'Mon–Thu 10:00–22:00 | Fri–Sat 10:00–00:00 | Sun 10:00–21:00' },
                { label: 'Lanes', val: '16 lanes, max 6 players per lane' },
                { label: 'Pricing', val: 'From £6/game. Shoe hire included in all bookings.' },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: `${C.pink}55`, minHeight: '40px' }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.pink}>{label}</p>
                    <p className="text-sm font-light" style={S.dim}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 892, label: 'lanes booked this week' }}
              vertical="bowlos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.void }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.green}>Happy Strikers</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase" style={S.white}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.yellow}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={S.white}>FAQ</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="BowlingOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460777" message="Hi! I'd like to book a lane at NeonStrike" vertical="bowlos" />
    </div>
  )
}

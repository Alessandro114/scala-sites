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
  dark: '#0e0a08',
  velvet: '#1a0808',
  red: '#991b1b',
  redLight: '#dc2626',
  redDim: '#7f1d1d',
  gold: '#d4af37',
  goldDim: '#b8962e',
  cream: '#f5f0e0',
  creamDark: '#e8dcc4',
  parchment: '#d4c4a0',
  muted: '#7c6a5a',
  filmGray: '#3a3530',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'The Velvet Screen',
  description: 'An independent boutique cinema with 4 screens — where the magic of film lives on',
  url: 'https://thevelvetscreen.example.com',
  locale: 'en',
  vertical: 'cinemaos',
  theme: 'classic',
  branding: { primaryColor: C.dark, accentColor: C.gold },
  contact: {
    phone: '+44 20 7946 0444',
    email: 'hello@thevelvetscreen.com',
    whatsapp: '+442079460444',
    address: '12 Picture Lane, Bloomsbury, London WC1A 2TB',
    coordinates: { lat: 51.5197, lng: -0.1227 },
  },
  social: { instagram: 'thevelvetscreen', facebook: 'https://facebook.com/thevelvetscreen' },
  seo: { title: 'The Velvet Screen — Cinema | The Magic of Cinema', description: 'An independent cinema experience unlike any other. Book tickets online.' },
}

// ─────────────────────────────────────────────
// NOW SHOWING
// ─────────────────────────────────────────────
const nowShowing = [
  {
    title: 'The Cartographer',
    genre: 'Drama / Thriller',
    rating: 'PG-13',
    runtime: '2h 12m',
    times: ['13:00', '15:30', '18:00', '20:30'],
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop',
    desc: 'A mapmaker in 1930s Vienna uncovers a conspiracy hidden in the borders of a dying empire.',
    score: '94%',
  },
  {
    title: 'Beneath the Still Water',
    genre: 'Romance / Drama',
    rating: 'PG',
    runtime: '1h 58m',
    times: ['12:00', '14:30', '17:00', '19:30'],
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop',
    desc: 'Two strangers meet at a lakeside resort. What begins as distrust becomes something neither expected.',
    score: '88%',
  },
  {
    title: 'Last Light of Meridian',
    genre: 'Sci-Fi / Epic',
    rating: '12A',
    runtime: '2h 47m',
    times: ['11:00', '14:00', '17:15', '20:30'],
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
    desc: 'On a dying colony ship, one engineer has 48 hours to decide the fate of 10,000 souls.',
    score: '91%',
  },
  {
    title: 'The Perfumer',
    genre: 'Period / Mystery',
    rating: 'PG',
    runtime: '1h 52m',
    times: ['13:30', '16:00', '18:30'],
    poster: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop',
    desc: 'In 1890s Paris, a master perfumer is commissioned to recreate a scent that may unlock a murder.',
    score: '90%',
  },
]

const comingSoon = [
  { title: 'Iron Shore', genre: 'Action / Adventure', release: 'Aug 22', poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop' },
  { title: 'Sister Midnight', genre: 'Horror / Thriller', release: 'Sep 5', poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop' },
  { title: 'The Antwerp Heist', genre: 'Crime / Drama', release: 'Sep 19', poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=400&h=600&fit=crop' },
  { title: 'A Thousand Winters', genre: 'Romance / Drama', release: 'Oct 3', poster: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=600&fit=crop' },
]

const screens = [
  { name: 'Screen 1 — The Grand', capacity: 280, features: ['4K Laser', 'Dolby Atmos', 'Recliner seats'] },
  { name: 'Screen 2 — The Studio', capacity: 120, features: ['4K DCP', 'THX audio', 'Intimate setting'] },
  { name: 'Screen 3 — The Salon', capacity: 60, features: ['Digital 2K', 'Curated programme', 'Art house focus'] },
  { name: 'Screen 4 — The Preview', capacity: 40, features: ['Private hire', 'Full AV control', 'Catered events'] },
]

const memberships = [
  {
    name: 'Standard',
    price: '£10',
    unit: '/month',
    perks: ['2 tickets/month', '10% concessions discount', 'Early booking access', 'Monthly newsletter'],
    color: C.gold,
    highlight: false,
  },
  {
    name: 'Premium',
    price: '£18',
    unit: '/month',
    perks: ['Unlimited films', '20% concessions discount', '48h early booking', 'Guest ticket monthly', 'Private screening access'],
    color: C.red,
    highlight: true,
  },
]

const events = [
  { name: 'Kids Club', day: 'Saturdays 10:00', price: '£5/child', desc: 'Family films, activities, and a special kids menu. Under 2s free.' },
  { name: 'Seniors Matinee', day: 'Tuesdays 14:00', price: '£6/ticket', desc: 'Classic and contemporary films at discounted prices with complimentary tea.' },
  { name: 'Date Night', day: 'Fridays 20:00', price: '£35/pair', desc: 'Two tickets, two glasses of wine, and a curated late-night showing.' },
]

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Helena B.', rating: 5, text: 'The Grand screen with Dolby Atmos is an experience like no other. I had been avoiding multiplex cinemas for years — The Velvet Screen reminded me why I love film.', date: '2026-07-20', source: 'google', verified: true },
  { id: '2', author: 'Edmund C.', rating: 5, text: 'Took my parents to the Seniors Matinee and they adored it. The staff are wonderfully attentive and the hot drinks are served right to your seat.', date: '2026-07-28', source: 'tripadvisor', verified: true },
  { id: '3', author: 'Zara K.', rating: 5, text: 'Premium membership pays for itself in the first month. I come every week — the programme is always fresh, well-curated, and genuinely surprising.', date: '2026-08-01', source: 'google', verified: true },
  { id: '4', author: 'Patrick G.', rating: 4, text: 'Hired Screen 4 for a company launch. Flawless from catering to AV. Every guest said it was the most elegant event venue they had visited.', date: '2026-08-04', source: 'google', verified: true },
  { id: '5', author: 'Mina S.', rating: 5, text: 'Date Night package is genuinely romantic. The Salon cinema is intimate enough to feel exclusive — the wine is excellent and the film curation is inspired.', date: '2026-07-26', source: 'google', verified: true },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'How do I book tickets?', answer: 'Book online right here — choose your film, screen, date and time. Print your ticket or show on your phone. Members get 48h advance booking.' },
  { question: 'What is the membership and how do I join?', answer: 'We offer Standard (£10/month) and Premium (£18/month) memberships. Join online or in person at the box office. Cancel anytime with 30 days notice.' },
  { question: 'Is there food and drink?', answer: 'Our bar serves craft beer, wine, cocktails and premium soft drinks. The kiosk has freshly made popcorn, nachos, and seasonal snacks. Members receive a discount.' },
  { question: 'Can I hire a screen privately?', answer: 'Yes — Screen 4 is available for private hire from £400. Suitable for up to 40 guests with full catering. Contact our events team for larger screens.' },
  { question: 'Are children welcome?', answer: 'Absolutely. We follow BBFC certification strictly. Kids Club runs every Saturday at 10am with age-appropriate films and activities.' },
]

// ─────────────────────────────────────────────
// SLOTS
// ─────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '11:00', available: true, spotsLeft: 60 },
  { id: '2', date: today, time: '13:00', available: true, spotsLeft: 40 },
  { id: '3', date: today, time: '14:30', available: true, spotsLeft: 120 },
  { id: '4', date: today, time: '17:00', available: true, spotsLeft: 25 },
  { id: '5', date: today, time: '18:00', available: true, spotsLeft: 80 },
  { id: '6', date: today, time: '20:30', available: true, spotsLeft: 56 },
]

const S = {
  page: { backgroundColor: C.void, color: C.cream } as React.CSSProperties,
  dark: { backgroundColor: C.dark } as React.CSSProperties,
  velvet: { backgroundColor: C.velvet } as React.CSSProperties,
  red: { color: C.red } as React.CSSProperties,
  redLight: { color: C.redLight } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  cream: { color: C.cream } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  parchment: { color: C.parchment } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://thevelvetscreen.example.com',
  name: 'The Velvet Screen',
  description: 'An independent boutique cinema with 4 screens in Bloomsbury, London.',
  url: 'https://thevelvetscreen.example.com',
  telephone: '+44 20 7946 0444',
  email: 'hello@thevelvetscreen.com',
  priceRange: '££',
  image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=630&fit=crop',
  address: { '@type': 'PostalAddress', streetAddress: '12 Picture Lane, Bloomsbury', addressLocality: 'London', postalCode: 'WC1A 2TB', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5197, longitude: -0.1227 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '10:00', closes: '23:30' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '623' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.void}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.gold}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-light tracking-[0.35em] text-sm uppercase" style={{ color: C.gold }}>
          The Velvet Screen
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Now Showing', 'Coming Soon', 'Membership', 'Events'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300" style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >{item}</a>
          ))}
          <a href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.void }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
          >Book Tickets</a>
        </div>
      </div>
    </nav>
  )
}

export default function CinemaPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes filmGrain {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        @keyframes spotlightSweep {
          0%, 100% { opacity: 0.12; transform: rotate(-15deg) translateX(0); }
          50% { opacity: 0.18; transform: rotate(-10deg) translateX(40px); }
        }
        @keyframes filmStripScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .spotlight { animation: spotlightSweep 8s ease-in-out infinite; }
        .spotlight-2 { animation: spotlightSweep 10s ease-in-out infinite; animation-delay: 3s; }
        .film-strip-scroll { animation: filmStripScroll 12s linear infinite; }
        .poster-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 24px 48px rgba(0,0,0,0.6); }
        .poster-card { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease; }
        .coming-card:hover { border-color: ${C.gold}66 !important; }
        .coming-card { transition: border-color 0.3s ease; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Cinematic Letterbox
          ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.void, paddingTop: '80px' }}>
        {/* Film strip border top */}
        <div className="relative h-8 overflow-hidden" style={{ backgroundColor: C.filmGray }}>
          <div className="flex items-center h-full gap-1 px-2">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-6 h-5 rounded-sm" style={{ backgroundColor: C.void }} />
            ))}
          </div>
        </div>

        {/* Letterbox hero — wide, short aspect */}
        <div className="relative" style={{ height: 'clamp(280px, 40vw, 480px)' }}>
          <img
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=2400&h=800&fit=crop&q=90"
            alt="The Velvet Screen cinema interior"
            className="w-full h-full object-cover"
          />

          {/* Film grain overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            opacity: 0.4,
            mixBlendMode: 'overlay',
          }} />

          {/* Spotlight beams */}
          <div className="spotlight absolute top-0 left-1/4 w-48 h-full pointer-events-none" style={{
            background: `conic-gradient(from 180deg at 50% 0%, ${C.gold}33 0deg, transparent 30deg)`,
            transformOrigin: 'top center',
          }} />
          <div className="spotlight-2 absolute top-0 right-1/4 w-48 h-full pointer-events-none" style={{
            background: `conic-gradient(from 180deg at 50% 0%, ${C.gold}22 0deg, transparent 25deg)`,
            transformOrigin: 'top center',
          }} />

          {/* Heavy vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(ellipse 70% 100% at 50% 50%, transparent 30%, ${C.void}cc 100%)`,
          }} />

          {/* Letterbox bars */}
          <div className="absolute top-0 left-0 right-0 h-12" style={{ backgroundColor: C.void }} />
          <div className="absolute bottom-0 left-0 right-0 h-12" style={{ backgroundColor: C.void }} />

          {/* Hero text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <p className="text-xs tracking-[0.5em] uppercase mb-3" style={S.gold}>Est. 1947 · Bloomsbury, London</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-center tracking-[0.08em]" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
              The Magic of Cinema
            </h1>
          </div>
        </div>

        {/* Film strip border bottom */}
        <div className="relative h-8 overflow-hidden" style={{ backgroundColor: C.filmGray }}>
          <div className="flex items-center h-full gap-1 px-2">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-6 h-5 rounded-sm" style={{ backgroundColor: C.void }} />
            ))}
          </div>
        </div>

        {/* Tagline + now-showing pills */}
        <div className="py-12 px-6 flex flex-col items-center gap-6">
          <p className="text-base md:text-lg font-light text-center max-w-xl leading-relaxed" style={S.muted}>
            Four screens. One hundred years of cinema. An independent home for film lovers
            in the heart of London since 1947.
          </p>
          {/* Now Showing quick pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {nowShowing.map((film) => (
              <a key={film.title} href="#now-showing"
                className="text-xs tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300"
                style={{ border: `1px solid ${C.gold}44`, color: C.parchment }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.gold}44`; e.currentTarget.style.color = C.parchment }}
              >
                {film.title}
              </a>
            ))}
          </div>
          <a href="#booking"
            className="border px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-400"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.void }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
          >
            Book Tickets
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NOW SHOWING
          ═══════════════════════════════════════ */}
      <section id="now-showing" className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>On Screen Now</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>Now Showing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {nowShowing.map((film, i) => (
              <div key={film.title} className="poster-card reveal-up flex gap-5 p-5 cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s`, backgroundColor: C.velvet, border: `1px solid ${C.gold}22` }}>
                <img src={film.poster} alt={film.title} className="w-24 h-36 object-cover flex-shrink-0" style={{ filter: 'brightness(0.9)' }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-light leading-tight" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>{film.title}</h3>
                    <span className="text-xs font-light px-2 py-0.5 flex-shrink-0" style={{ border: `1px solid ${C.gold}55`, color: C.gold }}>{film.score}</span>
                  </div>
                  <p className="text-xs tracking-[0.12em] uppercase mb-1" style={S.gold}>{film.genre}</p>
                  <p className="text-xs mb-3" style={S.muted}>{film.rating} · {film.runtime}</p>
                  <p className="text-sm font-light leading-relaxed mb-4" style={S.parchment}>{film.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {film.times.map((t) => (
                      <a key={t} href="#booking"
                        className="text-xs px-3 py-1.5 transition-all duration-200"
                        style={{ border: `1px solid ${C.gold}44`, color: C.parchment }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.void; e.currentTarget.style.borderColor = C.gold }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.parchment; e.currentTarget.style.borderColor = `${C.gold}44` }}
                      >{t}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COMING SOON
          ═══════════════════════════════════════ */}
      <section id="coming-soon" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.void }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>Upcoming</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>Coming Soon</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 stagger-children">
            {comingSoon.map((film, i) => (
              <div key={film.title} className="coming-card reveal-up cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s`, border: `1px solid ${C.gold}22` }}>
                <div className="relative overflow-hidden" style={{ height: '280px' }}>
                  <img src={film.poster} alt={film.title} className="w-full h-full object-cover transition-transform duration-600 hover:scale-[1.04]" style={{ filter: 'brightness(0.7) saturate(0.8)' }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.void}cc, transparent 50%)` }} />
                  <div className="absolute bottom-3 left-3 text-xs font-light px-2 py-1" style={{ backgroundColor: C.red, color: C.cream }}>
                    {film.release}
                  </div>
                </div>
                <div className="p-4" style={{ backgroundColor: C.velvet }}>
                  <h4 className="text-base font-light mb-1" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>{film.title}</h4>
                  <p className="text-xs tracking-[0.1em] uppercase" style={S.muted}>{film.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SCREENS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Our Auditoriums</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>The Screens</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {screens.map((screen, i) => (
              <div key={screen.name} className="reveal-up p-6" style={{ animationDelay: `${i * 0.08}s`, backgroundColor: C.velvet, border: `1px solid ${C.gold}22` }}>
                <div className="text-3xl font-extralight mb-2" style={S.gold}>{screen.capacity}</div>
                <p className="text-xs tracking-[0.12em] uppercase mb-4" style={S.muted}>Seats</p>
                <h3 className="text-base font-light mb-4 leading-snug" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>{screen.name}</h3>
                <ul className="space-y-2">
                  {screen.features.map((f) => (
                    <li key={f} className="flex gap-2 text-xs font-light" style={S.parchment}>
                      <span style={S.gold}>&#8212;</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MEMBERSHIP
          ═══════════════════════════════════════ */}
      <section id="membership" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.void }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>Join Us</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>Membership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {memberships.map((mem, i) => (
              <div key={mem.name} className="reveal-up flex flex-col p-8 relative"
                style={{ animationDelay: `${i * 0.1}s`, border: `1px solid ${mem.color}${mem.highlight ? 'cc' : '44'}`, backgroundColor: mem.highlight ? `${mem.color}0a` : C.velvet }}>
                {mem.highlight && (
                  <div className="absolute -top-3 left-6 text-[10px] tracking-widest uppercase px-4 py-1" style={{ backgroundColor: C.red, color: C.cream }}>Most Popular</div>
                )}
                <h3 className="text-2xl font-extralight mb-2" style={{ color: mem.color, fontFamily: 'Georgia, serif' }}>{mem.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extralight" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>{mem.price}</span>
                  <span className="text-sm font-light ml-1" style={S.muted}>{mem.unit}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {mem.perks.map((p) => (
                    <li key={p} className="flex gap-3 text-sm font-light" style={S.parchment}>
                      <span style={{ color: mem.color }}>&#10003;</span>{p}
                    </li>
                  ))}
                </ul>
                <a href="#booking"
                  className="block text-center py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                  style={{ border: `1px solid ${mem.color}`, color: mem.color }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = mem.color; e.currentTarget.style.color = C.void }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = mem.color }}
                >Join Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EVENTS
          ═══════════════════════════════════════ */}
      <section id="events" className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Special Screenings</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {events.map((ev, i) => (
              <div key={ev.name} className="reveal-up p-7" style={{ animationDelay: `${i * 0.1}s`, border: `1px solid ${C.gold}33`, backgroundColor: C.velvet }}>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.gold}>{ev.day}</p>
                <h3 className="text-xl font-extralight mb-1" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>{ev.name}</h3>
                <p className="text-sm font-light mb-4" style={S.red}>{ev.price}</p>
                <p className="text-sm font-light leading-relaxed" style={S.parchment}>{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 relative overflow-hidden" style={{ backgroundColor: C.void }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 20% 50%, ${C.red}0d, transparent)` }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Box Office</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>Book Tickets</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Book directly online and collect at the box office or show your phone at the door. Members can book 48 hours in advance.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Address', val: '12 Picture Lane, Bloomsbury, London WC1A 2TB' },
                { label: 'Box Office Hours', val: 'Daily 10:00–23:30' },
                { label: 'Standard Ticket', val: '£14.50 adults | £10 children | £12 seniors' },
                { label: 'Private Hire', val: 'Screen 4 from £400 — contact us for larger screens' },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: `${C.gold}55`, minHeight: '40px' }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.gold}>{label}</p>
                    <p className="text-sm font-light" style={S.parchment}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 521, label: 'tickets sold this week' }}
              vertical="cinemaos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.dark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Our Audience</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.void }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="CinemaOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460444" message="Hi! I'd like to book tickets at The Velvet Screen" vertical="cinemaos" />
    </div>
  )
}

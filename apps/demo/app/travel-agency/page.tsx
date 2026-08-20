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
  sky: '#38bdf8',
  skyDark: '#0ea5e9',
  coral: '#f97316',
  coralLight: '#fb923c',
  sand: '#fde68a',
  sandLight: '#fef9c3',
  navy: '#1e3a5f',
  navyDark: '#0f1f33',
  navyMid: '#243f6a',
  white: '#ffffff',
  offWhite: '#f0f9ff',
  muted: '#7ea8c4',
  dark: '#0a1628',
} as const

const S = {
  pageBg: { backgroundColor: C.navyDark, color: C.white } as React.CSSProperties,
  sky: { color: C.sky } as React.CSSProperties,
  coral: { color: C.coral } as React.CSSProperties,
  sand: { color: C.sand } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Horizons Travel',
  description: 'Tailor-made holidays crafted by expert consultants',
  url: 'https://horizonstravel.example.com',
  locale: 'en',
  vertical: 'travelos',
  theme: 'light',
  branding: { primaryColor: C.navy, accentColor: C.coral },
  contact: {
    phone: '+44 20 7946 1200',
    email: 'hello@horizonstravel.com',
    whatsapp: '+442079461200',
    address: '18 Regent Street, London W1B 5TR',
    coordinates: { lat: 51.5099, lng: -0.1337 },
  },
  social: {
    instagram: 'horizonstraveluk',
    facebook: 'https://facebook.com/horizonstraveluk',
  },
  seo: {
    title: 'Horizons Travel — Discover Your Next Adventure',
    description: 'Expert travel consultants crafting tailor-made holidays worldwide.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const destinations = [
  { name: 'Europe', icon: '🗼', count: 48, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop', highlight: 'Paris, Rome, Santorini' },
  { name: 'Asia', icon: '⛩️', count: 35, image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&h=400&fit=crop', highlight: 'Tokyo, Bali, Vietnam' },
  { name: 'Americas', icon: '🌎', count: 29, image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop', highlight: 'Patagonia, NYC, Peru' },
  { name: 'Africa', icon: '🦁', count: 18, image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop', highlight: 'Safari, Morocco, Zanzibar' },
  { name: 'Oceania', icon: '🦘', count: 12, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', highlight: 'NZ, Australia, Fiji' },
  { name: 'Cruises', icon: '🚢', count: 22, image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=400&fit=crop', highlight: 'Mediterranean, Caribbean' },
]

const packages = [
  {
    name: 'Bali Escape',
    duration: '10 nights',
    price: 2890,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
    highlights: ['Ubud rice terraces', 'Seminyak beach', 'Temple ceremonies', 'Cooking class'],
    badge: 'Bestseller',
  },
  {
    name: 'Santorini Dreams',
    duration: '7 nights',
    price: 3450,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
    highlights: ['Oia sunset cruise', 'Wine tasting tour', 'Caldera views', 'Private villa'],
    badge: 'Romantic',
  },
  {
    name: 'Patagonia Trek',
    duration: '14 nights',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    highlights: ['Torres del Paine', 'Perito Moreno glacier', 'Gaucho estancia', 'Puma tracking'],
    badge: 'Adventure',
  },
  {
    name: 'Tokyo & Kyoto',
    duration: '12 nights',
    price: 4100,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
    highlights: ['Tsukiji fish market', 'Geisha district', 'Mount Fuji day trip', 'Tea ceremony'],
    badge: 'Cultural',
  },
]

const team = [
  { name: 'Sophia Chen', role: 'Asia & Pacific Specialist', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop', trips: 340 },
  { name: 'James Hargreaves', role: 'Americas & Safari Expert', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', trips: 280 },
  { name: 'Elena Petrova', role: 'Europe & Cruise Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop', trips: 410 },
]

const reviews: Review[] = [
  { id: '1', author: 'Rachel T.', rating: 5, text: 'Sophia planned our Bali honeymoon down to the last detail. Every hotel, every transfer — flawless. We didn\'t have to think about a single thing.', date: '2026-07-10', source: 'google', verified: true },
  { id: '2', author: 'David M.', rating: 5, text: 'The Patagonia trek was the trip of a lifetime. James thought of everything — including backup plans when weather changed. True professionals.', date: '2026-07-22', source: 'tripadvisor', verified: true },
  { id: '3', author: 'Priya S.', rating: 5, text: 'Booked a Japan itinerary for 4 people. Elena found us a ryokan with no English website that was the highlight of the whole trip. Extraordinary local knowledge.', date: '2026-08-01', source: 'google', verified: true },
  { id: '4', author: 'Ben & Clare W.', rating: 5, text: 'Third time using Horizons. They remember your preferences, they know your budget, and they find options that no algorithm would ever surface.', date: '2026-07-28', source: 'google', verified: true },
  { id: '5', author: 'Marcus L.', rating: 4, text: 'Group safari for 12 people, coordinated across 3 countries. Logistics that seemed impossible, handled without a fuss. Incredible team.', date: '2026-07-15', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do I need travel insurance?', answer: 'We strongly recommend it and can arrange comprehensive cover including medical, cancellation, and baggage protection. Ask your consultant for a quote.' },
  { question: 'How far in advance should I book?', answer: 'For peak season (summer/Christmas) we recommend 6-12 months ahead. For off-peak travel, 3 months is usually fine. We can sometimes arrange last-minute trips too.' },
  { question: 'Can you arrange tailor-made trips?', answer: 'Absolutely — it\'s our speciality. Tell us your dream destination, travel style, and budget and we\'ll craft a completely bespoke itinerary just for you.' },
  { question: 'Do you arrange group travel?', answer: 'Yes! We handle groups from 6 to 200 people — corporate retreats, family reunions, school trips, and incentive travel. Volume discounts apply.' },
  { question: 'What happens if my trip is cancelled?', answer: 'We work with ATOL and ABTA-protected operators, meaning your money is protected. Our team will immediately arrange alternatives or full refunds.' },
  { question: 'Can you book flights and hotels separately?', answer: 'Of course. Many clients use us purely for hotel bookings, flight searches, or visa assistance. You don\'t need to book a full package.' },
  { question: 'Do you offer honeymoon planning?', answer: 'Yes — honeymoons are one of our most popular services. We arrange room upgrades, sunset dinners, spa credits, and personal touches to make it unforgettable.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '10:30', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '15:30', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const travelJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Horizons Travel',
  description: 'Expert travel consultants crafting tailor-made holidays worldwide.',
  url: 'https://horizonstravel.example.com',
  telephone: '+44 20 7946 1200',
  email: 'hello@horizonstravel.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Regent Street',
    addressLocality: 'London',
    postalCode: 'W1B 5TR',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5099, longitude: -0.1337 },
  priceRange: '££-£££',
  openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00',
}

const travelFaqJsonLd = {
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
      style={{ backgroundColor: `${C.navyDark}ee`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.sky}22` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <span style={{ color: C.coral, fontSize: '1.4rem' }}>✈</span>
          <span className="font-light tracking-[0.25em] text-sm uppercase" style={S.white}>Horizons Travel</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Destinations', 'Packages', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a href="#booking"
            className="px-6 py-2.5 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300"
            style={{ backgroundColor: C.coral, color: C.white, borderRadius: '2px' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.coralLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.coral)}
          >
            Plan My Trip
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
const destinations_rotating = ['Bali', 'Santorini', 'Patagonia', 'Tokyo', 'Morocco', 'Maldives']

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: C.navyDark }}
    >
      {/* World map dots pattern — CSS */}
      <style>{`
        @keyframes planePath {
          0% { transform: translateX(-60px) translateY(0) rotate(15deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 60px)) translateY(-30px) rotate(15deg); opacity: 0; }
        }
        @keyframes destinationRotate {
          0%, 18% { opacity: 1; transform: translateY(0); }
          22%, 100% { opacity: 0; transform: translateY(-20px); }
        }
        @keyframes stampAppear {
          0% { opacity: 0; transform: rotate(-15deg) scale(0.7); }
          100% { opacity: 0.12; transform: rotate(-8deg) scale(1); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.4); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .destination-word { position: absolute; top: 0; left: 0; opacity: 0; animation: destinationRotate 1.8s ease-in-out infinite; }
        ${destinations_rotating.map((_, i) => `.destination-word:nth-child(${i + 1}) { animation-delay: ${i * 1.8}s; animation-duration: ${1.8 * destinations_rotating.length}s; }`).join('\n')}
        .map-dot { position: absolute; width: 4px; height: 4px; border-radius: 50%; background: ${C.sky}; animation: dotPulse 2s ease-in-out infinite; }
        .plane-trail { position: absolute; animation: planePath 12s linear infinite; }
        .passport-stamp { animation: stampAppear 1.5s ease-out forwards; }
        .float-card { animation: floatUp 4s ease-in-out infinite; }
        .float-card-2 { animation: floatUp 4s ease-in-out infinite; animation-delay: 1.5s; }
      `}</style>

      {/* World-map dot field (scattered circles representing cities) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '22%', left: '15%', delay: '0s' }, { top: '35%', left: '25%', delay: '0.4s' },
          { top: '28%', left: '42%', delay: '0.8s' }, { top: '40%', left: '55%', delay: '1.2s' },
          { top: '20%', left: '68%', delay: '0.3s' }, { top: '50%', left: '72%', delay: '0.7s' },
          { top: '55%', left: '30%', delay: '1.1s' }, { top: '60%', left: '48%', delay: '0.5s' },
          { top: '32%', left: '80%', delay: '0.9s' }, { top: '45%', left: '88%', delay: '1.4s' },
          { top: '70%', left: '20%', delay: '0.2s' }, { top: '65%', left: '60%', delay: '0.6s' },
          { top: '18%', left: '35%', delay: '1.0s' }, { top: '75%', left: '78%', delay: '1.6s' },
          { top: '42%', left: '10%', delay: '0.4s' }, { top: '25%', left: '58%', delay: '1.3s' },
        ].map((dot, i) => (
          <div key={i} className="map-dot" style={{ top: dot.top, left: dot.left, animationDelay: dot.delay, opacity: 0.4 }} />
        ))}
        {/* Connecting lines between dots */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }}>
          <line x1="15%" y1="22%" x2="25%" y2="35%" stroke={C.sky} strokeWidth="1" strokeDasharray="4 8" />
          <line x1="25%" y1="35%" x2="42%" y2="28%" stroke={C.sky} strokeWidth="1" strokeDasharray="4 8" />
          <line x1="42%" y1="28%" x2="55%" y2="40%" stroke={C.sky} strokeWidth="1" strokeDasharray="4 8" />
          <line x1="55%" y1="40%" x2="68%" y2="20%" stroke={C.sky} strokeWidth="1" strokeDasharray="4 8" />
          <line x1="68%" y1="20%" x2="80%" y2="32%" stroke={C.sky} strokeWidth="1" strokeDasharray="4 8" />
          <line x1="80%" y1="32%" x2="88%" y2="45%" stroke={C.sky} strokeWidth="1" strokeDasharray="4 8" />
        </svg>

        {/* Animated plane with dotted trail */}
        <div className="plane-trail" style={{ top: '38%', animationDelay: '2s' }}>
          <span style={{ fontSize: '1.4rem', color: C.coral, display: 'block' }}>✈</span>
        </div>
        <div className="plane-trail" style={{ top: '62%', animationDelay: '8s', fontSize: '1rem' }}>
          <span style={{ fontSize: '1rem', color: C.sky, display: 'block' }}>✈</span>
        </div>

        {/* Passport stamp decorative */}
        <div className="passport-stamp absolute top-[15%] right-[8%] w-32 h-32 flex items-center justify-center pointer-events-none"
          style={{ border: `3px solid ${C.coral}`, borderRadius: '50%', opacity: 0 }}>
          <div className="text-center">
            <div className="text-xs tracking-widest uppercase" style={{ color: C.coral }}>HORIZONS</div>
            <div className="text-2xl" style={{ color: C.coral }}>✈</div>
            <div className="text-xs tracking-widest uppercase" style={{ color: C.coral }}>TRAVEL</div>
          </div>
        </div>

        {/* Sky-to-coral gradient overlay */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 20% 50%, ${C.sky}18 0%, transparent 60%),
                       radial-gradient(ellipse at 80% 30%, ${C.coral}15 0%, transparent 50%),
                       radial-gradient(ellipse at 50% 80%, ${C.navy}80 0%, transparent 70%)`,
        }} />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="stagger-children">
          <p className="reveal-clip-up text-xs tracking-[0.4em] uppercase mb-6" style={S.coral}>
            Est. 2004 &middot; ATOL Protected &middot; ABTA Member
          </p>

          <h1 className="mb-6">
            <span className="reveal-clip-up block text-5xl md:text-7xl font-extralight leading-[1] tracking-tight mb-2" style={S.white}>
              Discover Your
            </span>
            <span className="reveal-clip-up block text-5xl md:text-7xl font-extralight leading-[1] tracking-tight mb-2" style={S.white}>
              Next Adventure
            </span>
            <span className="block text-5xl md:text-7xl font-light leading-[1] tracking-tight" style={{ color: C.sky }}>
              in{' '}
              <span className="relative inline-block" style={{ minWidth: '220px', display: 'inline-block' }}>
                {destinations_rotating.map((d, i) => (
                  <span key={d} className="destination-word" style={{ color: C.coral }}>{d}</span>
                ))}
              </span>
            </span>
          </h1>

          <p className="reveal-up text-base md:text-lg font-light leading-relaxed max-w-lg mb-10" style={{ ...S.muted, animationDelay: '0.45s' }}>
            Expert travel consultants crafting unforgettable journeys since 2004.
            From weekend escapes to round-the-world adventures — every trip, perfectly planned.
          </p>

          {/* Stats strip */}
          <div className="reveal-up flex flex-wrap gap-8 mb-10" style={{ animationDelay: '0.55s' }}>
            {[
              { n: '22K+', l: 'Holidays Booked' },
              { n: '96', l: 'Destinations' },
              { n: '4.9★', l: 'Average Rating' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-light" style={S.sky}>{s.n}</div>
                <div className="text-xs tracking-[0.15em] uppercase mt-0.5" style={S.muted}>{s.l}</div>
              </div>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.65s' }}>
            <a href="#packages"
              className="px-10 py-4 text-sm tracking-[0.18em] uppercase font-medium transition-all duration-300"
              style={{ backgroundColor: C.coral, color: C.white }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.coralLight)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.coral)}
            >
              Explore Packages
            </a>
            <a href="#booking"
              className="border px-10 py-4 text-sm tracking-[0.18em] uppercase font-light transition-all duration-300"
              style={{ borderColor: `${C.sky}66`, color: C.sky }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.sky; e.currentTarget.style.color = C.white; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.sky}66`; e.currentTarget.style.color = C.sky; }}
            >
              Talk to a Consultant
            </a>
          </div>
        </div>

        {/* Right: hero image with floating cards */}
        <div className="relative hidden lg:block">
          <div className="relative w-full h-[520px] overflow-hidden" style={{ borderRadius: '4px' }}>
            <Image src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&h=700&fit=crop&q=90"
              alt="Bali rice terraces at sunrise"
              className="w-full h-full object-cover" width={1200} height={800} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.navyDark}44, transparent 60%)` }} />
          </div>

          {/* Floating info cards */}
          <div className="float-card absolute -left-12 bottom-20 bg-white p-4 shadow-2xl" style={{ borderRadius: '4px', minWidth: '180px' }}>
            <div className="text-xs tracking-widest uppercase mb-1" style={{ color: C.coral }}>Next Departure</div>
            <div className="font-semibold" style={{ color: C.navyDark }}>Bali Escape</div>
            <div className="text-sm" style={{ color: C.muted }}>Sep 14 · 10 nights</div>
            <div className="text-sm font-bold mt-1" style={{ color: C.coral }}>from £2,890 pp</div>
          </div>

          <div className="float-card-2 absolute -right-8 top-16 p-4 shadow-2xl" style={{ backgroundColor: C.navy, borderRadius: '4px', minWidth: '160px' }}>
            <div className="text-xs tracking-widest uppercase mb-1" style={{ color: C.sky }}>Just Booked</div>
            <div className="font-light text-sm" style={{ color: C.white }}>Santorini Sunset</div>
            <div className="text-xs mt-1" style={{ color: C.muted }}>2 guests · Oct 2026</div>
          </div>
        </div>
      </div>

      {/* Language/destination pills */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-3">
          {['Europe', 'Asia', 'Americas', 'Africa', 'Oceania', 'Cruises', 'Honeymoons', 'Group Travel'].map((tag) => (
            <span key={tag}
              className="text-xs tracking-wider uppercase px-4 py-1.5 cursor-pointer transition-all duration-300"
              style={{ border: `1px solid ${C.sky}33`, color: C.muted, borderRadius: '100px' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.sky; e.currentTarget.style.color = C.white; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.sky}33`; e.currentTarget.style.color = C.muted; }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────
export default function TravelAgencyPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelFaqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.coral }} />

      <Navbar />
      <Hero />

      {/* ═══════════════════════════════════════
          MARQUEE — tag strip
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.coral }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Tailor-Made Holidays', 'ATOL Protected', 'Expert Consultants', 'Group Travel', 'Honeymoons', 'Cruise Specialists', 'Visa Assistance', '24/7 Support'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-light tracking-[0.2em] uppercase" style={{ color: C.white }}>{item}</span>
                  <span className="opacity-50" style={{ color: C.white }}>✈</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DESTINATIONS
          ═══════════════════════════════════════ */}
      <section id="destinations" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.navy }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sky}>Where We Go</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Explore the World</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {destinations.map((dest, i) => (
              <div key={dest.name}
                className="reveal-up relative group overflow-hidden cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s`, borderRadius: '4px', height: '280px' }}
              >
                <Image src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" width={1200} height={800} />
                <div className="absolute inset-0 transition-all duration-500"
                  style={{ background: `linear-gradient(to top, ${C.navyDark}dd 0%, ${C.navyDark}44 50%, transparent 100%)` }} />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{dest.icon}</span>
                    <span className="text-xs tracking-widest uppercase px-2 py-0.5" style={{ backgroundColor: `${C.sky}22`, color: C.sky }}>
                      {dest.count} tours
                    </span>
                  </div>
                  <h3 className="text-2xl font-light mb-1" style={S.white}>{dest.name}</h3>
                  <p className="text-xs" style={S.muted}>{dest.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED PACKAGES
          ═══════════════════════════════════════ */}
      <section id="packages" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.navyDark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.coral}>Featured Packages</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Hand-Picked Escapes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {packages.map((pkg, i) => (
              <div key={pkg.name}
                className="reveal-up relative group overflow-hidden cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s`, borderRadius: '4px' }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.navyDark}cc, transparent 50%)` }} />
                  <span className="absolute top-4 right-4 text-xs tracking-wider uppercase px-3 py-1 font-medium"
                    style={{ backgroundColor: C.coral, color: C.white, borderRadius: '2px' }}>
                    {pkg.badge}
                  </span>
                </div>
                <div className="p-6" style={{ backgroundColor: C.navyMid }}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-light" style={S.white}>{pkg.name}</h3>
                    <div className="text-right">
                      <div className="text-xs" style={S.muted}>from</div>
                      <div className="text-xl font-light" style={S.coral}>£{pkg.price.toLocaleString()}</div>
                      <div className="text-xs" style={S.muted}>per person</div>
                    </div>
                  </div>
                  <div className="text-sm mb-4" style={S.muted}>{pkg.duration}</div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((h) => (
                      <span key={h} className="text-xs px-2 py-1" style={{ backgroundColor: `${C.sky}15`, color: C.sky }}>
                        {h}
                      </span>
                    ))}
                  </div>
                  <a href="#booking"
                    className="mt-5 block text-center py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300"
                    style={{ border: `1px solid ${C.coral}66`, color: C.coral }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.coral; e.currentTarget.style.color = C.white; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.coral; }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TAILOR-MADE CTA
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ backgroundColor: C.coral }}>
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <div className="text-4xl mb-4">✈</div>
          <h2 className="text-3xl md:text-5xl font-extralight mb-4" style={S.white}>Can&apos;t Find Your Dream Trip?</h2>
          <p className="text-lg font-light mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Tell us where you want to go. Our consultants will design a completely
            personalised itinerary — flights, hotels, experiences, transfers.
          </p>
          <a href="#booking"
            className="inline-block px-12 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300"
            style={{ backgroundColor: C.white, color: C.coral }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.sand)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.white)}
          >
            Start Planning
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRAVEL INSURANCE
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16" style={{ backgroundColor: C.navy }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sky}>Travel Protection</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-6" style={S.white}>Your Holiday, Fully Protected</h2>
            <p className="font-light leading-relaxed mb-8" style={S.muted}>
              Every package we sell is ATOL and ABTA protected. We also offer comprehensive travel insurance covering medical emergencies, trip cancellation, baggage, and flight delays.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Medical Cover', 'Cancellation', 'Baggage Loss', 'Flight Delay', 'Covid Cover', 'Winter Sports'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span style={{ color: C.sky }}>✓</span>
                  <span className="text-sm font-light" style={S.muted}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            {[
              { label: 'ATOL Protected', icon: '🛡️', desc: 'Financial protection guarantee' },
              { label: 'ABTA Member', icon: '⭐', desc: 'Code of conduct compliance' },
              { label: '24/7 Assistance', icon: '📞', desc: 'Emergency support worldwide' },
              { label: 'Fast Claims', icon: '⚡', desc: 'Claims processed in 48hrs' },
            ].map((item) => (
              <div key={item.label} className="p-5" style={{ backgroundColor: `${C.sky}10`, border: `1px solid ${C.sky}20`, borderRadius: '4px' }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium mb-1" style={S.white}>{item.label}</div>
                <div className="text-xs" style={S.muted}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MEET THE TEAM
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: C.navyDark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.coral}>Our Experts</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Meet Your Consultants</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {team.map((member, i) => (
              <div key={member.name} className="reveal-up text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative mx-auto w-48 h-48 mb-6 overflow-hidden" style={{ borderRadius: '50%', border: `3px solid ${C.sky}33` }}>
                  <Image src={member.image} alt={member.name} className="w-full h-full object-cover" width={1200} height={800} />
                </div>
                <h3 className="text-xl font-light mb-1" style={S.white}>{member.name}</h3>
                <p className="text-sm mb-3" style={S.sky}>{member.role}</p>
                <p className="text-xs tracking-wider" style={S.muted}>{member.trips} trips planned</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.navy }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.coral}>Book a Consultation</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={S.white}>Tell Us Your<br />Dream Destination</h2>
            <p className="font-light leading-relaxed mb-10" style={S.muted}>
              A 30-minute consultation with one of our specialists. No obligation, no hard sell —
              just expert advice on your next adventure.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Office Hours', detail: 'Mon–Fri 09:00–18:00 | Sat 10:00–16:00' },
                { label: 'Emergency Line', detail: '24/7 for existing clients while abroad' },
                { label: 'Phone', detail: '+44 20 7946 1200' },
                { label: 'Walk-in Welcome', detail: '18 Regent Street, London W1B 5TR' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.sky}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.sky}>{info.label}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 183, label: 'consultations booked this month' }}
              vertical="travelos" onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.navyDark }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.coral}>Traveller Stories</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>What Our Clients Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.navy }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sky}>Got Questions?</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="TravelAgencyOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079461200" message="Hi! I'd like to plan a holiday with Horizons Travel" vertical="travelos" />
    </div>
  )
}

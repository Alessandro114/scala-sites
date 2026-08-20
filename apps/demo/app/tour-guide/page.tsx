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
  terra: '#c2703e',
  terraLight: '#d4845a',
  cream: '#faf5ef',
  creamDark: '#f0e8dc',
  olive: '#6b7c3f',
  oliveLight: '#7d9149',
  charcoal: '#2c2c2c',
  charcoalMid: '#3d3d3d',
  warmGray: '#7a6e63',
  lightGray: '#b8ada4',
  white: '#ffffff',
} as const

const S = {
  pageBg: { backgroundColor: C.cream, color: C.charcoal } as React.CSSProperties,
  terra: { color: C.terra } as React.CSSProperties,
  olive: { color: C.olive } as React.CSSProperties,
  charcoal: { color: C.charcoal } as React.CSSProperties,
  muted: { color: C.warmGray } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Marco Russo — Tour Guide',
  description: 'Expert local tour guide in Rome',
  url: 'https://marcorusso.example.com',
  locale: 'en',
  vertical: 'touros',
  theme: 'light',
  branding: { primaryColor: C.charcoal, accentColor: C.terra },
  contact: {
    phone: '+39 06 9876 5432',
    email: 'marco@romeguide.it',
    whatsapp: '+390698765432',
    address: 'Piazza Navona area, Rome, Italy',
    coordinates: { lat: 41.8986, lng: 12.4768 },
  },
  social: {
    instagram: 'marcorussorome',
    facebook: 'https://facebook.com/marcorussorome',
  },
  seo: {
    title: 'Marco Russo — See Rome Through Local Eyes',
    description: 'Expert local tour guide in Rome. Walking history tours, food tastings, architecture walks.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const tours = [
  { name: 'Walking History', price: 25, duration: '3 hrs', group: 'Max 12', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop', desc: 'Ancient Rome, the Forum, Colosseum exterior and hidden alleys only locals know.', icon: '🏛️' },
  { name: 'Food Tasting', price: 45, duration: '4 hrs', group: 'Max 8', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop', desc: 'Markets, trattorias, street food and a wine stop. The true taste of Rome.', icon: '🍕' },
  { name: 'Architecture Walk', price: 30, duration: '3.5 hrs', group: 'Max 10', image: 'https://images.unsplash.com/photo-1529154036614-a60975f5c760?w=600&h=400&fit=crop', desc: 'Baroque churches, Renaissance palazzi, Bernini fountains. An architect\'s dream.', icon: '⛪' },
  { name: 'Night Tour', price: 35, duration: '2.5 hrs', group: 'Max 12', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop', desc: 'Rome after dark — illuminated fountains, piazzas, and ghost stories of the city.', icon: '🌙' },
  { name: 'Private Tour', price: 120, duration: 'Flexible', group: 'Your group', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=400&fit=crop', desc: 'Fully customised itinerary. Your pace, your interests, your language.', icon: '👑', featured: true },
  { name: 'Day Trip', price: 85, duration: '8 hrs', group: 'Max 8', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=400&fit=crop', desc: 'Pompeii, Tivoli, or Orvieto — a full day out of Rome with a local guide.', icon: '🚐' },
]

const upcomingDates = [
  { tour: 'Walking History', date: 'Mon 11 Aug', time: '09:00', spots: 4, lang: 'EN' },
  { tour: 'Food Tasting', date: 'Tue 12 Aug', time: '18:00', spots: 2, lang: 'EN/IT' },
  { tour: 'Night Tour', date: 'Wed 13 Aug', time: '20:00', spots: 6, lang: 'EN/FR' },
  { tour: 'Architecture Walk', date: 'Thu 14 Aug', time: '10:00', spots: 3, lang: 'EN/DE' },
  { tour: 'Walking History', date: 'Sat 16 Aug', time: '09:00', spots: 1, lang: 'EN' },
  { tour: 'Day Trip — Pompeii', date: 'Sun 17 Aug', time: '07:30', spots: 5, lang: 'EN' },
]

const languages = [
  { flag: '🇬🇧', code: 'EN', label: 'English' },
  { flag: '🇮🇹', code: 'IT', label: 'Italiano' },
  { flag: '🇫🇷', code: 'FR', label: 'Français' },
  { flag: '🇩🇪', code: 'DE', label: 'Deutsch' },
]

const reviews: Review[] = [
  { id: '1', author: 'Sarah M. 🇬🇧', rating: 5, text: 'Marco has lived in Rome all his life and it shows. He took us to a trattoria so hidden we\'d never have found it. The food tour was the highlight of our entire trip.', date: '2026-07-18', source: 'tripadvisor', verified: true },
  { id: '2', author: 'Hans B. 🇩🇪', rating: 5, text: 'Ich habe viele Stadtführungen gemacht, aber Marco ist unübertroffen. Er spricht perfektes Deutsch und kennt jeden Stein Roms. Absolut empfehlenswert!', date: '2026-07-25', source: 'google', verified: true },
  { id: '3', author: 'Camille D. 🇫🇷', rating: 5, text: 'La visite nocturne était magique. Marco connaît les histoires derrière chaque fontaine, chaque palazzo. Un guide exceptionnel.', date: '2026-08-02', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Tom & Julie R. 🇺🇸', rating: 5, text: 'We did the private tour for our anniversary. Marco arranged a private gelato tasting and a glass of prosecco at sunset on the Pincio hill. Absolutely magical.', date: '2026-07-30', source: 'google', verified: true },
  { id: '5', author: 'Yuki T. 🇯🇵', rating: 5, text: 'Marco adjusted the whole tour when he learned I was an architecture student. He took me inside a church not on any tourist map. Extraordinary knowledge.', date: '2026-07-10', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How do I book a tour?', answer: 'Book directly on this page or send a WhatsApp message. You\'ll receive confirmation within 30 minutes and a full meeting point briefing 24 hours before.' },
  { question: 'What\'s included in the price?', answer: 'All tours include expert guidance, route planning, and entry to relevant outdoor sites. Food tours include all tastings and one glass of wine. Tickets to the Colosseum or Vatican can be arranged at extra cost.' },
  { question: 'Do you offer tours in languages other than English?', answer: 'Yes — Italian, French, and German at no extra cost. For other languages, please ask: I have a network of multilingual colleagues.' },
  { question: 'What happens if it rains?', answer: 'Rome is beautiful in any weather! Most tours continue as planned. In case of heavy rain, we can pivot to covered sites or reschedule at no charge.' },
  { question: 'Can I book a private tour for a group?', answer: 'Absolutely. Private tours are perfect for families, couples, and groups up to 20. I\'ll design a bespoke itinerary around your interests and pace.' },
  { question: 'Is the tour suitable for children and elderly?', answer: 'Yes! I always ask about mobility needs when booking. Rome has cobblestones, but all routes can be adapted. Kids love the history and ghost stories on the night tour.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 4 },
  { id: '2', date: today, time: '10:00', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '18:00', available: true, spotsLeft: 6 },
  { id: '4', date: today, time: '20:00', available: true, spotsLeft: 3 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const tourJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://marcorusso.example.com',
  name: 'Marco Russo — Rome Tour Guide',
  description: 'Expert local tour guide in Rome. Walking tours, food tastings, night tours, and private guided experiences.',
  url: 'https://marcorusso.example.com',
  telephone: '+39 06 9876 5432',
  email: 'marco@romeguide.it',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  priceRange: '£–£££',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rome',
    addressCountry: 'IT',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 41.8986, longitude: 12.4768 },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Rome Tours',
    itemListElement: tours.map((t) => ({
      '@type': 'Offer',
      name: t.name,
      description: t.desc,
      price: t.price,
      priceCurrency: 'GBP',
    })),
  },
}

const tourFaqJsonLd = {
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
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.charcoal}f2`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.terra}33` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <span style={{ color: C.terra, fontSize: '1.2rem' }}>◉</span>
          <span className="font-light tracking-[0.2em] text-sm uppercase" style={{ color: C.cream }}>Marco Russo</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Tours', 'About', 'Reviews', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300"
              style={{ color: C.lightGray }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.lightGray)}
            >
              {item}
            </a>
          ))}
          <a href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300"
            style={{ borderColor: C.terra, color: C.terra }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.terra; e.currentTarget.style.color = C.cream; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.terra; }}
          >
            Book a Tour
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
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: C.charcoal }}>
      <style>{`
        @keyframes routeDash {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pinDrop {
          0% { opacity: 0; transform: translateY(-20px) scale(0.5); }
          60% { transform: translateY(4px) scale(1.1); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .route-line {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: routeDash 3s ease-out 1s forwards;
        }
        .pin-drop { animation: pinDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        .pin-drop-1 { animation-delay: 1.5s; }
        .pin-drop-2 { animation-delay: 2s; }
        .pin-drop-3 { animation-delay: 2.5s; }
        .pin-drop-4 { animation-delay: 3s; }
        .stat-reveal { animation: countUp 0.6s ease-out forwards; opacity: 0; }
        .stat-reveal-1 { animation-delay: 0.5s; }
        .stat-reveal-2 { animation-delay: 0.7s; }
      `}</style>

      {/* Cinematic hero image with overlay */}
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&h=1000&fit=crop&q=90"
          alt="Rome streets — Marco Russo local tour guide"
          className="w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to right, ${C.charcoal}f0 0%, ${C.charcoal}cc 40%, ${C.charcoal}44 70%, transparent 100%)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to top, ${C.charcoal}cc 0%, transparent 50%)`,
        }} />
      </div>

      {/* Walking route decoration */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-48 h-64 hidden lg:block pointer-events-none">
        <svg viewBox="0 0 120 200" className="w-full h-full">
          <path
            className="route-line"
            d="M 60,20 C 60,20 80,50 60,80 S 40,110 60,140 S 80,165 60,185"
            fill="none" stroke={C.terra} strokeWidth="2" strokeDasharray="6 4"
          />
          {[{ cx: 60, cy: 20, delay: '1.5s' }, { cx: 60, cy: 80, delay: '2s' }, { cx: 60, cy: 140, delay: '2.5s' }, { cx: 60, cy: 185, delay: '3s' }].map((p, i) => (
            <g key={i} style={{ animationDelay: p.delay }}>
              <circle cx={p.cx} cy={p.cy} r="5" fill={C.terra} opacity="0" style={{
                animation: `pinDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${p.delay} forwards`,
              }} />
              <circle cx={p.cx} cy={p.cy} r="9" fill="none" stroke={C.terra} strokeWidth="1" opacity="0" style={{
                animation: `pinDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${p.delay} forwards`,
              }} />
            </g>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex flex-col justify-center">
        <div className="max-w-2xl stagger-children">
          {/* Language flags */}
          <div className="reveal-up flex gap-3 mb-8">
            {languages.map((l) => (
              <span key={l.code} className="flex items-center gap-1.5 text-xs tracking-wider px-3 py-1.5"
                style={{ backgroundColor: `${C.cream}15`, color: C.cream, border: `1px solid ${C.cream}20`, borderRadius: '2px' }}>
                <span>{l.flag}</span> {l.code}
              </span>
            ))}
          </div>

          <p className="reveal-clip-up text-xs tracking-[0.4em] uppercase mb-6" style={{ color: C.terra }}>
            Rome Local Expert &middot; Est. 2010
          </p>

          <h1 className="mb-8">
            <span className="reveal-clip-up block text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1] tracking-tight mb-2" style={{ color: C.cream }}>
              See Rome
            </span>
            <span className="reveal-clip-up block text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1] tracking-tight mb-2" style={{ color: C.cream }}>
              Through
            </span>
            <span className="reveal-clip-up block text-5xl md:text-7xl lg:text-8xl font-light leading-[1] tracking-tight" style={{ color: C.terra }}>
              Local Eyes
            </span>
          </h1>

          <p className="reveal-up text-lg font-light leading-relaxed mb-10" style={{ color: C.lightGray, animationDelay: '0.5s' }}>
            Born and raised in Rome. 15 years as a licensed guide. I know
            the restaurants with no English menu, the alleys that aren&rsquo;t on any map,
            and the stories they won&rsquo;t tell you at the Colosseum.
          </p>

          {/* Stats bar */}
          <div className="reveal-up flex flex-wrap gap-10 mb-10" style={{ animationDelay: '0.6s' }}>
            <div className="stat-reveal stat-reveal-1">
              <div className="text-3xl font-extralight" style={{ color: C.terra }}>2,000+</div>
              <div className="text-xs tracking-[0.2em] uppercase mt-1" style={{ color: C.lightGray }}>Tours Led</div>
            </div>
            <div className="w-px self-stretch" style={{ backgroundColor: `${C.cream}20` }} />
            <div className="stat-reveal stat-reveal-2">
              <div className="text-3xl font-extralight" style={{ color: C.terra }}>50,000+</div>
              <div className="text-xs tracking-[0.2em] uppercase mt-1" style={{ color: C.lightGray }}>Happy Travellers</div>
            </div>
            <div className="w-px self-stretch" style={{ backgroundColor: `${C.cream}20` }} />
            <div className="stat-reveal stat-reveal-1">
              <div className="text-3xl font-extralight" style={{ color: C.terra }}>4.9★</div>
              <div className="text-xs tracking-[0.2em] uppercase mt-1" style={{ color: C.lightGray }}>TripAdvisor</div>
            </div>
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.7s' }}>
            <a href="#tours"
              className="px-10 py-4 text-sm tracking-[0.18em] uppercase font-medium transition-all duration-300"
              style={{ backgroundColor: C.terra, color: C.cream }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.terraLight)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.terra)}
            >
              Explore Tours
            </a>
            <a href="#booking"
              className="border px-10 py-4 text-sm tracking-[0.18em] uppercase font-light transition-all duration-300"
              style={{ borderColor: `${C.cream}44`, color: C.cream }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${C.cream}44`)}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────
export default function TourGuidePage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourFaqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.terra }} />

      <Navbar />
      <Hero />

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-4 overflow-hidden" style={{ backgroundColor: C.charcoal }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Walking Tours', 'Food Tastings', 'Night Rome', 'Architecture', 'Private Tours', 'Multilingual', 'Day Trips', 'TripAdvisor #1'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-light tracking-[0.2em] uppercase" style={{ color: C.lightGray }}>{item}</span>
                  <span style={{ color: C.terra }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TOURS
          ═══════════════════════════════════════ */}
      <section id="tours" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.creamDark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.terra}>What I Offer</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.charcoal}>Tours &amp; Experiences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {tours.map((tour, i) => (
              <div key={tour.name}
                className="reveal-up bg-white group overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.08}s`, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={tour.image} alt={tour.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.charcoal}aa, transparent 60%)` }} />
                  {tour.featured && (
                    <span className="absolute top-3 right-3 text-xs tracking-wider uppercase px-2 py-1 font-medium"
                      style={{ backgroundColor: C.terra, color: C.cream }}>Popular</span>
                  )}
                  <span className="absolute bottom-3 left-3 text-2xl">{tour.icon}</span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium" style={S.charcoal}>{tour.name}</h3>
                    <span className="text-xl font-light" style={S.terra}>£{tour.price}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={S.muted}>{tour.desc}</p>
                  <div className="flex gap-4 text-xs" style={S.muted}>
                    <span>⏱ {tour.duration}</span>
                    <span>👥 {tour.group}</span>
                  </div>
                  <a href="#booking"
                    className="mt-4 block text-center py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300"
                    style={{ border: `1px solid ${C.terra}55`, color: C.terra }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.terra; e.currentTarget.style.color = C.cream; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.terra; }}
                  >
                    Book This Tour
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          UPCOMING DATES
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.terra}>Limited Spots</p>
            <h2 className="text-3xl md:text-4xl font-extralight" style={{ color: C.cream }}>Upcoming Departures</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {upcomingDates.map((d, i) => (
              <div key={i}
                className="reveal-up flex items-center gap-5 p-4 cursor-pointer transition-all duration-300"
                style={{ animationDelay: `${i * 0.06}s`, backgroundColor: `${C.cream}08`, border: `1px solid ${C.cream}15`, borderRadius: '2px' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${C.terra}55`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${C.cream}15`)}
              >
                <div className="text-2xl">🗓</div>
                <div className="flex-1">
                  <div className="font-medium text-sm" style={{ color: C.cream }}>{d.tour}</div>
                  <div className="text-xs mt-0.5" style={{ color: C.lightGray }}>{d.date} · {d.time} · {d.lang}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium" style={{ color: d.spots <= 2 ? C.terra : C.olive }}>{d.spots} spots</div>
                  <div className="text-xs" style={{ color: C.lightGray }}>left</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THE GUIDE
          ═══════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left relative">
            <div className="relative overflow-hidden" style={{ borderRadius: '4px' }}>
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=900&fit=crop&q=90"
                alt="Marco Russo — Rome tour guide"
                className="w-full h-[560px] object-cover" width={1200} height={800} />
              {/* Credential badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4"
                style={{ backgroundColor: C.charcoal, borderRadius: '4px' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-2xl" style={{ backgroundColor: C.terra, borderRadius: '50%' }}>🎖</div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: C.cream }}>Licensed Official Guide</div>
                    <div className="text-xs mt-0.5" style={{ color: C.lightGray }}>Lazio Region · No. 00432 · Since 2010</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={S.terra}>Your Guide</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.charcoal}>Marco Russo</h2>
            <blockquote className="text-2xl font-extralight italic leading-snug mb-8 pl-6"
              style={{ color: C.terra, borderLeft: `2px solid ${C.terra}44` }}>
              &ldquo;Rome has 3,000 years of stories. I&rsquo;ve spent 15 years
              learning how to tell them.&rdquo;
            </blockquote>
            <p className="font-light leading-relaxed mb-6" style={S.muted}>
              Born in Trastevere, raised in the shadow of the Pantheon. I studied History of Art
              at La Sapienza and have been a licensed guide since 2010. My tours aren&rsquo;t from
              a script — they&rsquo;re from a life lived here.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Languages', value: 'EN / IT / FR / DE' },
                { label: 'Experience', value: '15 years' },
                { label: 'Speciality', value: 'Ancient & Baroque Rome' },
                { label: 'Licence', value: 'Lazio Region #00432' },
              ].map((item) => (
                <div key={item.label} className="p-4" style={{ backgroundColor: C.creamDark, borderRadius: '2px' }}>
                  <div className="text-xs tracking-wider uppercase mb-1" style={S.terra}>{item.label}</div>
                  <div className="font-medium text-sm" style={S.charcoal}>{item.value}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] uppercase mb-3" style={S.muted}>What&rsquo;s Always Included</div>
              <div className="space-y-2">
                {['Licensed official guide', 'Printed route map', 'Emergency contact card', 'Post-tour restaurant recommendations', 'WhatsApp follow-up Q&A'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span style={{ color: C.olive }}>✓</span>
                    <span className="text-sm" style={S.muted}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GROUP DISCOUNTS
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ backgroundColor: C.olive }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal-up text-center">
          {[
            { group: 'Couples & Solo', size: '1–2 people', discount: 'Standard rate', note: 'All tours available' },
            { group: 'Small Groups', size: '3–6 people', discount: '10% off', note: 'Share the experience' },
            { group: 'Large Groups', size: '7+ people', discount: '20% off', note: 'Private group rate' },
          ].map((tier) => (
            <div key={tier.group} className="p-6" style={{ backgroundColor: `${C.cream}15`, borderRadius: '4px', border: `1px solid ${C.cream}25` }}>
              <div className="text-2xl font-extralight mb-2" style={{ color: C.cream || '#fde68a' }}>{tier.discount}</div>
              <div className="font-medium mb-1" style={{ color: C.cream }}>{tier.group}</div>
              <div className="text-sm mb-1" style={{ color: 'rgba(250,245,239,0.7)' }}>{tier.size}</div>
              <div className="text-xs" style={{ color: 'rgba(250,245,239,0.5)' }}>{tier.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.creamDark }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.terra}>Reserve Your Spot</p>
            <h2 className="text-4xl font-extralight mb-6" style={S.charcoal}>Book a Tour<br />with Marco</h2>
            <p className="font-light leading-relaxed mb-8" style={S.muted}>
              Select a tour type and preferred time. Confirmation within 30 minutes.
              Payment on the day — cash or card welcome.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Meeting Point', detail: 'Sent 24h before your tour via WhatsApp' },
                { label: 'Payment', detail: 'Cash or card on the day — no deposit required' },
                { label: 'Cancellation', detail: 'Free cancellation up to 48 hours before' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.terra}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.terra}>{info.label}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 94, label: 'tours booked this month' }}
              vertical="touros" onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.terra}>Traveller Reviews</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.cream }}>What Visitors Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.cream }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.terra}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.charcoal}>Before You Book</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="TourOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+390698765432" message="Ciao Marco! I'd like to book a tour in Rome" vertical="touros" />
    </div>
  )
}

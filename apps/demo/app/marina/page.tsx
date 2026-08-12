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
  navy: '#1e3a5f',
  navyDeep: '#0f2340',
  navyLight: '#2a4f7c',
  ocean: '#0077b6',
  oceanLight: '#0096c7',
  oceanDim: '#005f92',
  rope: '#f5ede1',
  ropeDark: '#e8d9c4',
  brass: '#b87333',
  brassLight: '#cd8b50',
  brassDim: '#96601c',
  white: '#ffffff',
  offWhite: '#f0f5fa',
  muted: '#7a8fa6',
  mutedLight: '#a8bccf',
  seafoam: '#90e0ef',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Saltwater Marina',
  description: '120-berth full-service marina with fuel dock, 35T crane, chandlery and boat services',
  url: 'https://saltwatermarina.example.com',
  locale: 'en',
  vertical: 'marinaos',
  theme: 'nautical',
  branding: { primaryColor: C.navy, accentColor: C.brass },
  contact: {
    phone: '+44 1202 741 892',
    email: 'harbour@saltwatermarina.com',
    whatsapp: '+441202741892',
    address: 'Harbour Road, Poole, Dorset BH15 1HJ',
    coordinates: { lat: 50.7139, lng: -1.9892 },
  },
  social: { instagram: 'saltwatermarina', facebook: 'https://facebook.com/saltwatermarina' },
  seo: { title: 'Saltwater Marina | Your Harbour of Choice', description: '120-berth full-service marina in Poole Harbour. Visitor berths, annual moorings, dry stack and boat services. Enquire online.' },
}

// ─────────────────────────────────────────────
// BERTHS & MOORINGS
// ─────────────────────────────────────────────
const berths = [
  {
    name: 'Visitor Berths',
    price: '£3',
    unit: '/ft/night',
    desc: 'Short-stay pontoon berths for visiting boats. Unlimited stays, book per night or per week. Includes shore power and water.',
    features: ['Shore power 16A', 'Fresh water', 'WiFi', 'Showers & toilets', 'Advance booking online'],
    color: C.ocean,
  },
  {
    name: 'Annual Berths',
    price: 'From £4,000',
    unit: '/year',
    desc: 'Secure your permanent home in our sheltered harbour. 12-month contract with priority renewal. Best value for regular sailors.',
    features: ['12-month contract', 'Shore power included', 'Gate fob access', 'Discounted services', 'Free tidal barometer'],
    color: C.brass,
    highlight: true,
  },
  {
    name: 'Dry Stack',
    price: '£2,500',
    unit: '/year',
    desc: 'Covered, secure dry stack storage for boats up to 8m LOA. Launch-on-demand within 90 minutes of calling ahead.',
    features: ['Under-cover storage', 'Launch on demand', 'Anti-fouling service', 'Wash-down on return', 'CCTV security'],
    color: C.navyLight,
  },
]

// ─────────────────────────────────────────────
// FACILITIES
// ─────────────────────────────────────────────
const facilities = [
  { name: 'Fuel Dock', detail: 'Diesel and petrol available 7 days. Bowser service for larger vessels.', icon: '⛽' },
  { name: 'Chandlery', detail: 'Fully stocked marine chandlery open 7 days. Major brands, expert advice.', icon: '⚓' },
  { name: '35T Crane', detail: 'Professional lift-out and launch service. Hardstanding and winter storage.', icon: '🏗️' },
  { name: 'Workshops', detail: 'Mechanical, electrical and GRP workshops on site. Approved marine engineers.', icon: '🔧' },
  { name: 'WiFi', detail: 'High-speed marina WiFi available throughout pontoons and facilities block.', icon: '📶' },
  { name: 'Showers & Toilets', detail: 'Premium shower block with laundry, hairdryers, and 24h card access.', icon: '🚿' },
]

// ─────────────────────────────────────────────
// BOAT SERVICES
// ─────────────────────────────────────────────
const boatServices = [
  {
    name: 'Maintenance & Repairs',
    desc: 'Full marine engineering, electrical, and GRP repair services. Lloyd\'s and BSS approved engineers on site.',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
  },
  {
    name: 'Winterisation',
    desc: 'Full vessel winterisation package — engine flush, antifreeze, shrink wrap, and extended storage. Book by October 15th.',
    img: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&h=400&fit=crop',
  },
  {
    name: 'Detailing & Valeting',
    desc: 'Professional hull and topsides cleaning, polish, anti-fouling, and interior valet. Pre-season and off-season packages.',
    img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&h=400&fit=crop',
  },
]

// ─────────────────────────────────────────────
// CHARTERS & EXCURSIONS
// ─────────────────────────────────────────────
const charters = [
  {
    name: 'Half-Day Sailing',
    price: '£240',
    capacity: 'Up to 8 guests',
    duration: '4 hours',
    desc: 'Explore Poole Harbour and Sandbanks with an RYA Yachtmaster skipper. Morning or afternoon sessions.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    name: 'Sunset Cruise',
    price: '£180',
    capacity: 'Up to 10 guests',
    duration: '2.5 hours',
    desc: 'Champagne sunset cruise around the world\'s second largest natural harbour. Perfect for special occasions.',
    img: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&h=400&fit=crop',
  },
  {
    name: 'Needles Passage',
    price: '£380',
    capacity: 'Up to 8 guests',
    duration: '6 hours',
    desc: 'Full-day passage to The Needles and back. Includes lunch provisions and a full safety brief.',
    img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=400&fit=crop',
  },
]

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Cpt. Richard M.', rating: 5, text: 'Based here for 6 years. The team looks after every boat as if it were their own. The 35T crane operators are exceptionally professional.', date: '2026-07-24', source: 'google', verified: true },
  { id: '2', author: 'Sara & Tom K.', rating: 5, text: 'First time visiting as a transit stop — ended up staying 3 nights because it was so well set up. The showers were spotless and the chandlery had everything we needed.', date: '2026-08-01', source: 'tripadvisor', verified: true },
  { id: '3', author: 'James P.', rating: 5, text: 'Dry stack is excellent value. 90-minute launch notice works perfectly for spontaneous days on the water. Staff always ready and helpful.', date: '2026-07-27', source: 'google', verified: true },
  { id: '4', author: 'The Whitmore Family', rating: 5, text: 'Booked the sunset cruise for our anniversary — flawless. The skipper was brilliant with our children and the champagne was a lovely touch.', date: '2026-08-03', source: 'google', verified: true },
  { id: '5', author: 'Derek F.', rating: 4, text: 'Winter storage and full-service package was seamless. Engine is running better than ever after the service. Will be back for summer.', date: '2026-07-19', source: 'google', verified: true },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'How do I book a visitor berth?', answer: 'Book online, by phone, or call ahead on VHF Channel 80. Berths are allocated on arrival. Weekend berths fill quickly — advance booking is strongly recommended.' },
  { question: 'What is the maximum LOA you can accommodate?', answer: 'Our visitor pontoons can accommodate vessels up to 15m LOA. The main harbour can take larger vessels — please contact us in advance for boats over 15m.' },
  { question: 'Is there 24-hour access?', answer: 'Yes. Annual berth holders have 24-hour gate fob access. Visitor berth guests receive a day access code. Night security patrols run 22:00–06:00.' },
  { question: 'Do you offer RIB and motorboat storage?', answer: 'Yes. Dry stack accepts powerboats and RIBs up to 8m. We also have hardstanding storage for winter periods. Contact us for larger vessels.' },
  { question: 'Can I fuel up on arrival?', answer: 'Yes — our fuel berth is on the outer pontoon. Diesel and petrol available. Hours: 08:00–18:00 daily (extended in summer). Bowser available for large vessels by appointment.' },
  { question: 'Do you have a waiting list for annual berths?', answer: 'We maintain a waiting list for annual berths. Join online — spaces do become available, especially over winter. We will contact you directly when a suitable berth is available.' },
]

// ─────────────────────────────────────────────
// SLOTS
// ─────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '08:00', available: true, spotsLeft: 12 },
  { id: '2', date: today, time: '10:00', available: true, spotsLeft: 8 },
  { id: '3', date: today, time: '12:00', available: true, spotsLeft: 5 },
  { id: '4', date: today, time: '14:00', available: true, spotsLeft: 10 },
  { id: '5', date: today, time: '16:00', available: true, spotsLeft: 6 },
  { id: '6', date: today, time: '18:00', available: true, spotsLeft: 3 },
]

const S = {
  page: { backgroundColor: C.navyDeep, color: C.rope } as React.CSSProperties,
  navy: { backgroundColor: C.navy } as React.CSSProperties,
  navyDeep: { backgroundColor: C.navyDeep } as React.CSSProperties,
  ocean: { color: C.ocean } as React.CSSProperties,
  oceanLight: { color: C.oceanLight } as React.CSSProperties,
  brass: { color: C.brass } as React.CSSProperties,
  brassLight: { color: C.brassLight } as React.CSSProperties,
  seafoam: { color: C.seafoam } as React.CSSProperties,
  rope: { color: C.rope } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  mutedLight: { color: C.mutedLight } as React.CSSProperties,
  offWhite: { color: C.offWhite } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://saltwatermarina.example.com',
  name: 'Saltwater Marina',
  description: '120-berth full-service marina in Poole Harbour with fuel dock, 35T crane, chandlery and boat services.',
  url: 'https://saltwatermarina.example.com',
  telephone: '+44 1202 741 892',
  email: 'harbour@saltwatermarina.com',
  priceRange: '£££',
  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop',
  address: { '@type': 'PostalAddress', streetAddress: 'Harbour Road', addressLocality: 'Poole', postalCode: 'BH15 1HJ', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 50.7139, longitude: -1.9892 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '07:00', closes: '20:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '214' },
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
      style={{ backgroundColor: `${C.navyDeep}f5`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.brass}33` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Anchor logo */}
        <a href="#" className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="3" stroke={C.brass} strokeWidth="1.5" />
            <line x1="12" y1="9" x2="12" y2="20" stroke={C.brass} strokeWidth="1.5" />
            <path d="M6 14c2 3 8 3 12 0" stroke={C.brass} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5" y1="12" x2="19" y2="12" stroke={C.brass} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-light tracking-[0.3em] text-sm uppercase" style={S.rope}>Saltwater Marina</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Berths', 'Facilities', 'Services', 'Charters'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300" style={S.muted}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.rope)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >{item}</a>
          ))}
          <a href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300"
            style={{ borderColor: C.brass, color: C.brass }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.brass; e.currentTarget.style.color = C.navyDeep }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.brass }}
          >Berth Enquiry</a>
        </div>
      </div>
    </nav>
  )
}

// Compass rose SVG (slowly rotating)
function CompassRose() {
  return (
    <div style={{ animation: 'compassSpin 40s linear infinite' }}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.6">
        {/* Cardinal points */}
        <polygon points="60,10 66,50 54,50" fill={C.rope} opacity="0.9" />
        <polygon points="60,110 66,70 54,70" fill={C.rope} opacity="0.4" />
        <polygon points="10,60 50,54 50,66" fill={C.rope} opacity="0.4" />
        <polygon points="110,60 70,54 70,66" fill={C.rope} opacity="0.4" />
        {/* Intercardinal points */}
        <polygon points="60,10 66,50 54,50" fill={C.brass} opacity="0.5" transform="rotate(45,60,60)" />
        <polygon points="60,10 66,50 54,50" fill={C.brass} opacity="0.3" transform="rotate(135,60,60)" />
        <polygon points="60,10 66,50 54,50" fill={C.brass} opacity="0.3" transform="rotate(225,60,60)" />
        <polygon points="60,10 66,50 54,50" fill={C.brass} opacity="0.3" transform="rotate(315,60,60)" />
        {/* Centre */}
        <circle cx="60" cy="60" r="8" fill={C.brass} opacity="0.8" />
        <circle cx="60" cy="60" r="4" fill={C.navyDeep} />
        {/* Ring */}
        <circle cx="60" cy="60" r="30" stroke={C.brass} strokeWidth="0.5" opacity="0.4" />
        <circle cx="60" cy="60" r="45" stroke={C.brass} strokeWidth="0.3" strokeDasharray="4 4" opacity="0.25" />
        {/* N marker */}
        <text x="56" y="8" fill={C.rope} fontSize="10" fontFamily="Georgia, serif" opacity="0.9">N</text>
      </svg>
    </div>
  )
}

// Wave animation div
function WaveBar() {
  return (
    <div className="relative overflow-hidden" style={{ height: '48px', backgroundColor: C.navyDeep }}>
      <svg width="100%" height="48" preserveAspectRatio="none" viewBox="0 0 1440 48">
        <path
          d="M0,24 C180,0 360,48 540,24 C720,0 900,48 1080,24 C1260,0 1440,48 1440,24 L1440,48 L0,48 Z"
          fill={C.ocean}
          opacity="0.35"
          style={{ animation: 'waveMove 6s ease-in-out infinite' }}
        />
        <path
          d="M0,32 C240,8 480,48 720,28 C960,8 1200,48 1440,28 L1440,48 L0,48 Z"
          fill={C.oceanLight}
          opacity="0.2"
          style={{ animation: 'waveMove 4s ease-in-out infinite reverse' }}
        />
      </svg>
    </div>
  )
}

export default function MarinaPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes compassSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes waveMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-60px); }
        }
        @keyframes waterShimmer {
          0%, 100% { opacity: 0.6; background-position: 0% 50%; }
          50% { opacity: 0.8; background-position: 100% 50%; }
        }
        @keyframes ropePattern {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes mast {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        .water-shimmer { animation: waterShimmer 6s ease-in-out infinite; }
        .mast-sway { animation: mast 8s ease-in-out infinite; transform-origin: bottom center; }
        .berth-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .berth-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .service-img:hover { transform: scale(1.05); }
        .service-img { transition: transform 0.5s ease; }
        .charter-card:hover { border-color: ${C.brass}88 !important; }
        .charter-card { transition: border-color 0.3s ease; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Nautical Luxury
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Ocean gradient background */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(165deg, ${C.navyDeep} 0%, ${C.navy} 40%, ${C.oceanDim} 80%, ${C.ocean}66 100%)`,
        }} />

        {/* Background marina image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1800&h=1200&fit=crop&q=85"
            alt="Saltwater Marina harbour"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Water shimmer overlay */}
        <div className="water-shimmer absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 80% 40% at 50% 80%, ${C.ocean}22, transparent 60%)`,
        }} />

        {/* Rope knot border pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${C.brass} 0, ${C.brass} 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }} />

        {/* Central content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Compass rose */}
          <div className="flex justify-center mb-8">
            <CompassRose />
          </div>

          <p className="text-xs tracking-[0.5em] uppercase mb-4" style={S.brass}>Poole Harbour, Dorset · Est. 1962</p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight mb-6" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>
            Your Harbour<br /><span style={S.brass}>of Choice</span>
          </h1>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-10 justify-center mb-10">
            {[
              { val: '120', label: 'Berths', unit: '' },
              { val: '15m', label: 'Max LOA', unit: '' },
              { val: '35T', label: 'Crane', unit: '' },
              { val: 'Full', label: 'Service', unit: '' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-extralight mb-1" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>{val}</div>
                <div className="text-xs tracking-[0.25em] uppercase" style={S.muted}>{label}</div>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-12" style={S.mutedLight}>
            A full-service marina in the heart of Poole Harbour. Visitor berths, annual moorings,
            dry stack storage, boat services, and day charter excursions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#berths"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-400"
              style={{ borderColor: C.brass, color: C.brass }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.brass; e.currentTarget.style.color = C.navyDeep }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.brass }}
            >View Berths</a>
            <a href="#booking"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
              style={{ backgroundColor: C.ocean, color: C.white, border: `1px solid ${C.oceanLight}` }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.oceanLight }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.ocean }}
            >Berth Enquiry</a>
          </div>
        </div>

        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveBar />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BERTHS & MOORINGS
          ═══════════════════════════════════════ */}
      <section id="berths" className="py-24 md:py-32 px-6 md:px-16" style={S.navy}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brass}>Your Home Port</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>Berths & Moorings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {berths.map((berth, i) => (
              <div key={berth.name} className="berth-card reveal-up flex flex-col p-8 relative"
                style={{ animationDelay: `${i * 0.1}s`, backgroundColor: C.navyDeep, border: `1px solid ${berth.color}${berth.highlight ? 'cc' : '44'}` }}>
                {berth.highlight && (
                  <div className="absolute -top-3 left-6 text-[10px] tracking-widest uppercase px-4 py-1" style={{ backgroundColor: C.brass, color: C.navyDeep }}>
                    Best Value
                  </div>
                )}
                <h3 className="text-xl font-extralight mb-2" style={{ color: berth.color, fontFamily: 'Georgia, serif' }}>{berth.name}</h3>
                <div className="mb-5">
                  <span className="text-3xl font-extralight" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>{berth.price}</span>
                  <span className="text-sm font-light ml-1" style={S.muted}>{berth.unit}</span>
                </div>
                <p className="text-sm font-light leading-relaxed mb-6" style={S.mutedLight}>{berth.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {berth.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm font-light" style={S.mutedLight}>
                      <span style={{ color: berth.color }}>&#9656;</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#booking"
                  className="block text-center py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                  style={{ border: `1px solid ${berth.color}88`, color: berth.color }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = berth.color; e.currentTarget.style.color = C.navyDeep; e.currentTarget.style.borderColor = berth.color }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = berth.color; e.currentTarget.style.borderColor = `${berth.color}88` }}
                >Enquire</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FACILITIES
          ═══════════════════════════════════════ */}
      <section id="facilities" className="py-24 md:py-32 px-6 md:px-16" style={S.navyDeep}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.oceanLight}>What We Offer</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>Marina Facilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {facilities.map((fac, i) => (
              <div key={fac.name} className="reveal-up flex gap-5 p-7"
                style={{ animationDelay: `${i * 0.08}s`, backgroundColor: `${C.navy}66`, border: `1px solid ${C.ocean}33` }}>
                <div className="text-3xl flex-shrink-0">{fac.icon}</div>
                <div>
                  <h3 className="text-base font-light mb-1" style={{ color: C.rope }}>{fac.name}</h3>
                  <p className="text-sm font-light" style={S.mutedLight}>{fac.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOAT SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={S.navy}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brass}>Expert Care</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>Boat Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {boatServices.map((svc, i) => (
              <div key={svc.name} className="reveal-up overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s`, border: `1px solid ${C.ocean}33`, backgroundColor: C.navyDeep }}>
                <div className="overflow-hidden h-48">
                  <img src={svc.img} alt={svc.name} className="service-img w-full h-full object-cover" style={{ filter: 'brightness(0.7) saturate(0.8)' }} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extralight mb-3" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>{svc.name}</h3>
                  <p className="text-sm font-light leading-relaxed" style={S.mutedLight}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHARTER & EXCURSIONS
          ═══════════════════════════════════════ */}
      <section id="charters" className="py-24 md:py-32 px-6 md:px-16" style={S.navyDeep}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.seafoam}>Set Sail</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>Charter & Excursions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {charters.map((charter, i) => (
              <div key={charter.name} className="charter-card reveal-up overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s`, border: `1px solid ${C.ocean}44`, backgroundColor: `${C.navy}55` }}>
                <div className="overflow-hidden h-52">
                  <img src={charter.img} alt={charter.name} className="service-img w-full h-full object-cover" style={{ filter: 'brightness(0.75) saturate(0.9)' }} />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-extralight flex-1 mr-3" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>{charter.name}</h3>
                    <span className="text-lg font-extralight flex-shrink-0" style={S.brass}>{charter.price}</span>
                  </div>
                  <div className="flex gap-4 text-xs tracking-[0.12em] uppercase mb-4" style={S.muted}>
                    <span>{charter.capacity}</span>
                    <span style={{ color: `${C.muted}44` }}>·</span>
                    <span>{charter.duration}</span>
                  </div>
                  <p className="text-sm font-light leading-relaxed mb-5" style={S.mutedLight}>{charter.desc}</p>
                  <a href="#booking"
                    className="inline-block text-xs tracking-[0.18em] uppercase transition-all duration-300 px-5 py-2.5"
                    style={{ border: `1px solid ${C.brass}66`, color: C.brass }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.brass; e.currentTarget.style.color = C.navyDeep }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.brass }}
                  >Enquire</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 relative overflow-hidden" style={S.navy}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 100% 50%, ${C.ocean}18, transparent)` }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brass}>Contact Harbour Master</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>Berth Enquiry</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.mutedLight}>
              For visitor berths, annual moorings, dry stack and charter bookings. Our harbour team will
              respond within 4 working hours. Also reachable on VHF Channel 80.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Address', val: 'Harbour Road, Poole, Dorset BH15 1HJ' },
                { label: 'Office Hours', val: 'Daily 07:00–20:00 · Security 24h' },
                { label: 'VHF', val: 'Channel 80 — Saltwater Marina' },
                { label: 'Visitor Rate', val: '£3/ft/night including shore power and water' },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: `${C.brass}55`, minHeight: '40px' }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.brassLight}>{label}</p>
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
              socialProof={{ count: 68, label: 'berths enquired this month' }}
              vertical="marinaos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.navyDeep}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brass}>Fellow Mariners</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.navy}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.brass}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.rope, fontFamily: 'Georgia, serif' }}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="MarinaOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+441202741892" message="Hi! I'd like to enquire about a berth at Saltwater Marina" vertical="marinaos" />
    </div>
  )
}

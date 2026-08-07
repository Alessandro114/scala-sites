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
  mahogany: '#2c1810',
  mahoganyDeep: '#1a120b',
  mahoganyMid: '#3d2015',
  cream: '#f5ede1',
  creamDark: '#e8ddd0',
  red: '#c0392b',
  gold: '#c9a84c',
  goldLight: '#d4b86a',
  tan: '#a07850',
  muted: '#8a7060',
  dimmed: '#6b5040',
} as const

const siteConfig: SiteConfig = {
  name: "Castello's Barber Shop",
  description: 'Traditional craft barbering since 1987',
  url: 'https://castellos.example.com',
  locale: 'en',
  vertical: 'barberos',
  theme: 'classic',
  branding: { primaryColor: C.mahogany, accentColor: C.gold },
  contact: {
    phone: '+44 20 7946 0445',
    email: 'gents@castellos.example.com',
    whatsapp: '+442079460445',
    address: '7 Marlborough Road, Kensington, London W8 4PH',
    coordinates: { lat: 51.5010, lng: -0.1910 },
  },
  social: { instagram: 'castellos_barber', facebook: 'https://facebook.com/castellosbarber' },
  seo: {
    title: "Castello's — Traditional Craft. Modern Style.",
    description: 'Classic barbering, skin fades and hot towel shaves in Kensington since 1987.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  { name: 'Classic Cut', price: '£22', duration: '30 min', desc: 'Scissors and comb, styled to perfection. Includes neck shave finish.' },
  { name: 'Skin Fade', price: '£25', duration: '35 min', desc: 'Zero to grade blended with precision. From low to bald — your call.' },
  { name: 'Beard Trim', price: '£15', duration: '20 min', desc: 'Shape, define and line-up. Finished with hot towel and oil.' },
  { name: 'Hot Towel Shave', price: '£30', duration: '45 min', desc: 'Straight razor, hot towel, pre-shave oil. The full traditional experience.' },
  { name: 'Cut & Beard', price: '£35', duration: '50 min', desc: 'Our most popular. Cut plus full beard service at a combined price.' },
  { name: 'Junior Cut', price: '£15', duration: '25 min', desc: 'For gents under 14. Patient, calm and thorough.' },
]

const barbers = [
  {
    name: 'Enzo Castello',
    role: 'Founder & Master Barber',
    exp: '37 years',
    specialty: 'Classic cuts, straight razor shave',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&facepad=3',
  },
  {
    name: 'Marcus Reid',
    role: 'Senior Barber',
    exp: '11 years',
    specialty: 'Skin fades, textured cuts',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&facepad=3',
  },
  {
    name: 'Kai Tanaka',
    role: 'Barber',
    exp: '6 years',
    specialty: 'Asian hair, precision fades',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&facepad=3',
  },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=700&fit=crop', label: 'Classic Cut' },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop', label: 'The Shop' },
  { src: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a9b4?w=600&h=400&fit=crop', label: 'Precision Fade' },
  { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=700&fit=crop', label: 'Beard Craft' },
  { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=400&fit=crop', label: 'Hot Towel' },
  { src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop', label: 'Tools of the Trade' },
]

const products = [
  { name: 'Castello Pomade', desc: 'Medium hold, high shine. Water-based, easy wash-out.', price: '£18' },
  { name: 'Beard Oil', desc: 'Jojoba & argan blend. Conditions and tames.', price: '£14' },
  { name: 'Shave Cream', desc: 'Traditional lather cream. Works with brush or hand.', price: '£16' },
  { name: 'Post-Shave Balm', desc: 'Cooling aloe & witch hazel. Soothes razor irritation.', price: '£12' },
]

const reviews: Review[] = [
  { id: '1', author: 'Oliver T.', rating: 5, text: "Been coming here for 8 years. Enzo knows exactly how I like my hair — I don't even need to say anything anymore. The hot towel shave is a religious experience.", date: '2026-07-18', source: 'google', verified: true },
  { id: '2', author: 'Amir S.', rating: 5, text: "Marcus does the best skin fade in West London, full stop. The attention to detail on the blend is obsessive in the best possible way.", date: '2026-07-30', source: 'google', verified: true },
  { id: '3', author: 'Tom B.', rating: 5, text: "Walked in without booking on a Saturday. Waited 15 minutes, which is nothing. Kai was brilliant with my thick hair. Best cut I've had in years.", date: '2026-08-04', source: 'yelp', verified: true },
  { id: '4', author: 'James C.', rating: 5, text: "The atmosphere alone is worth the visit. Dark wood, old leather chairs, Sinatra on the speakers. It's a proper barber shop. The Cut & Beard combo is exceptional value.", date: '2026-07-25', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do I need to book or can I walk in?', answer: 'Both! We accept walk-ins whenever chairs are free. Book online to guarantee your time slot, especially on weekends.' },
  { question: 'How long does a typical appointment take?', answer: 'Classic cuts take 30 minutes, skin fades 35–45 minutes, and the full hot towel shave experience is 45 minutes. Allow a little extra for busy periods.' },
  { question: 'Do you cut children\'s hair?', answer: 'Yes — our Junior Cut is for gents under 14. Our barbers are patient and experienced with younger clients.' },
  { question: 'What products do you use in the shop?', answer: 'We use our own Castello range plus premium brands including American Crew, Layrite, and Proraso. All products are available to buy in-store.' },
  { question: 'Is the loyalty card still running?', answer: 'Yes! Every 10th cut is free. Cards are stamped at the till — ask for yours on your first visit.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 2 },
  { id: '2', date: today, time: '10:30', available: true, spotsLeft: 3 },
  { id: '3', date: today, time: '12:00', available: true, spotsLeft: 1 },
  { id: '4', date: today, time: '14:00', available: true, spotsLeft: 2 },
  { id: '5', date: today, time: '15:30', available: true, spotsLeft: 3 },
  { id: '6', date: today, time: '17:00', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: "Castello's Barber Shop",
  description: 'Traditional craft barbering since 1987. Classic cuts, skin fades, hot towel shaves.',
  url: 'https://castellos.example.com',
  telephone: '+44 20 7946 0445',
  foundingDate: '1987',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Marlborough Road, Kensington',
    addressLocality: 'London',
    postalCode: 'W8 4PH',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5010, longitude: -0.1910 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '487' },
  priceRange: '££',
  openingHours: ['Mo-Fr 09:00-19:00', 'Sa 08:00-18:00'],
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
// STYLES
// ─────────────────────────────────────────────
const S = {
  page: { backgroundColor: C.mahoganyDeep, color: C.cream } as React.CSSProperties,
  dark: { backgroundColor: C.mahogany } as React.CSSProperties,
  darker: { backgroundColor: C.mahoganyDeep } as React.CSSProperties,
  mid: { backgroundColor: C.mahoganyMid } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  cream: { color: C.cream } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  red: { color: C.red } as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  BARBER POLE CSS ANIMATION
// ═══════════════════════════════════════════════
function BarberPole() {
  return (
    <div style={{ position: 'relative', width: '40px', height: '180px', borderRadius: '20px', overflow: 'hidden', border: `2px solid ${C.gold}44`, flexShrink: 0 }}>
      <style>{`
        @keyframes barberSpin {
          from { background-position: 0 0; }
          to   { background-position: 0 -120px; }
        }
      `}</style>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          #c0392b 0px, #c0392b 12px,
          #f5ede1 12px, #f5ede1 24px,
          #2a52be 24px, #2a52be 36px,
          #f5ede1 36px, #f5ede1 48px
        )`,
        animation: 'barberSpin 2s linear infinite',
        backgroundSize: '100% 120px',
      }} />
      {/* Glass overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.3), rgba(255,255,255,0.15), rgba(0,0,0,0.3))',
      }} />
    </div>
  )
}

// ═══════════════════════════════════════════════
//  SCISSORS SVG ICON
// ═══════════════════════════════════════════════
function ScissorsIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  )
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.mahoganyDeep}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.gold}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <ScissorsIcon size={20} />
          <span className="font-light tracking-[0.3em] text-sm uppercase" style={S.cream}>
            Castello&rsquo;s
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Barbers', 'Gallery', 'Booking'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.mahoganyDeep }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
          >
            Book a Chair
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function BarberOSDemoPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.gold }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Masculine Craft
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dark wood texture gradient */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 20% 50%, ${C.mahoganyMid} 0%, transparent 60%),
            linear-gradient(135deg, ${C.mahoganyDeep} 0%, ${C.mahogany} 50%, ${C.mahoganyDeep} 100%)
          `,
        }} />
        {/* Wood grain subtle lines */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(
            92deg,
            transparent 0px,
            transparent 60px,
            ${C.cream}04 60px,
            ${C.cream}04 61px
          )`,
        }} />
        {/* Gold glow */}
        <div className="absolute top-1/3 right-[5%] w-[600px] h-[600px] pointer-events-none" style={{
          background: `radial-gradient(circle, ${C.gold}0f 0%, transparent 65%)`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-center">
          {/* Left: Editorial content */}
          <div className="stagger-children">
            {/* Est. badge */}
            <div className="reveal-clip-up inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full"
              style={{ border: `1px solid ${C.gold}44`, backgroundColor: `${C.gold}0a` }}>
              <span className="text-xs tracking-[0.4em] uppercase" style={S.gold}>Est. 1987</span>
            </div>

            <h1 className="mb-6">
              {['Traditional', 'Craft.', 'Modern', 'Style.'].map((word, i) => (
                <span key={word}
                  className="reveal-clip-up block font-extralight leading-[0.95]"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: i % 2 === 1 ? C.gold : C.cream, animationDelay: `${i * 0.12}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="reveal-up text-base font-light leading-relaxed max-w-md mb-10" style={{ ...S.muted, animationDelay: '0.5s' }}>
              Four decades of honest barbering. Same chairs, same craft, same Marlborough Road address. Walk in as a stranger, leave as a regular.
            </p>

            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.65s' }}>
              <a href="#booking"
                className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
                style={{ backgroundColor: C.gold, color: C.mahoganyDeep }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goldLight)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.gold)}
              >
                Book a Chair
              </a>
              <a href="#services"
                className="border px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
                style={{ borderColor: `${C.cream}33`, color: C.muted }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${C.cream}66`; e.currentTarget.style.color = C.cream }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.cream}33`; e.currentTarget.style.color = C.muted }}
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Centre: Barber pole */}
          <div className="hidden md:flex justify-center items-center">
            <BarberPole />
          </div>

          {/* Right: Hero image */}
          <div className="reveal-right image-reveal rounded-2xl overflow-hidden hidden md:block" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&h=900&fit=crop"
              alt="Master barber at work"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.red }}>
        <div className="marquee">
          {[0, 1].map((d) => (
            <div key={d} className="flex items-center gap-8 px-4">
              {['Classic Cuts', 'Skin Fades', 'Hot Towel Shave', 'Beard Trim', 'Pass Plus', 'Loyalty Card', 'Walk-ins Welcome', 'Est. 1987'].map((item, i) => (
                <span key={`${d}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-light tracking-[0.2em] uppercase" style={{ color: C.cream }}>{item}</span>
                  <span style={{ color: `${C.cream}55` }}>&#x2726;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — 6 Cards
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>The Services</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>What We Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {services.map((svc, i) => (
              <div key={svc.name}
                className="reveal-up p-7 rounded-xl border transition-all duration-300 group cursor-pointer magnetic-card"
                style={{ backgroundColor: C.mahoganyMid, borderColor: `${C.gold}0f`, animationDelay: `${i * 0.07}s` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${C.gold}44`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${C.gold}0f`)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-light" style={S.cream}>{svc.name}</h3>
                  <span className="text-lg font-light" style={S.gold}>{svc.price}</span>
                </div>
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: C.tan }}>{svc.duration}</p>
                <p className="text-sm font-light leading-relaxed" style={S.muted}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BARBERS — 3 Profiles
          ═══════════════════════════════════════ */}
      <section id="barbers" className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>The Barbers</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {barbers.map((b, i) => (
              <div key={b.name} className="reveal-up group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-xl mb-6 image-reveal">
                  <img src={b.img} alt={b.name} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.mahoganyDeep}cc, transparent 60%)` }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${C.gold}22`, color: C.gold, border: `1px solid ${C.gold}44` }}>
                      {b.exp}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-light mb-1" style={S.cream}>{b.name}</h3>
                <p className="text-xs tracking-[0.3em] uppercase mb-3" style={S.gold}>{b.role}</p>
                <p className="text-sm font-light" style={S.muted}>{b.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY — 6 Shots
          ═══════════════════════════════════════ */}
      <section id="gallery" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Gallery</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>The Work</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {gallery.map((img, i) => (
              <div key={i} className="reveal-up image-reveal relative overflow-hidden rounded-xl group cursor-pointer" style={{ animationDelay: `${i * 0.08}s`, height: '260px' }}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, ${C.mahoganyDeep}cc, transparent)` }}>
                  <span className="text-sm tracking-[0.15em] uppercase font-light" style={S.cream}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRODUCTS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>The Range</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Castello Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {products.map((p, i) => (
              <div key={p.name} className="reveal-up p-6 rounded-xl text-center border" style={{ borderColor: `${C.gold}1a`, backgroundColor: C.mahoganyMid, animationDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${C.gold}22` }}>
                  <ScissorsIcon size={20} />
                </div>
                <h3 className="text-base font-light mb-2" style={S.cream}>{p.name}</h3>
                <p className="text-xs font-light leading-relaxed mb-3" style={S.muted}>{p.desc}</p>
                <p className="text-lg font-light" style={S.gold}>{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOYALTY + WALK-IN INFO
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          <div className="reveal-left p-8 rounded-xl border" style={{ borderColor: `${C.gold}33`, backgroundColor: `${C.gold}08` }}>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={S.gold}>Loyalty Programme</p>
            <h3 className="text-2xl font-light mb-4" style={S.cream}>Every 10th Cut, On Us</h3>
            <p className="text-sm font-light leading-relaxed" style={S.muted}>
              Collect a stamp each visit. Your loyalty card is stamped at the till on every visit &mdash; no app, no fuss. Ten stamps, one free cut. Simple as that.
            </p>
          </div>
          <div className="reveal-right p-8 rounded-xl border" style={{ borderColor: `${C.red}33`, backgroundColor: `${C.red}08` }}>
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={S.red}>Walk-ins</p>
            <h3 className="text-2xl font-light mb-4" style={S.cream}>Always Welcome</h3>
            <p className="text-sm font-light leading-relaxed" style={S.muted}>
              We keep walk-in chairs available throughout the day. Busy periods are Saturday mornings &mdash; book ahead to be safe. Weekday afternoons are usually quick.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.darker}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Reservations</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.cream}>Book Your Chair</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Book online or drop us a WhatsApp. We&rsquo;re at Marlborough Road Monday to Saturday.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Hours', detail: 'Mon–Fri 09:00–19:00 | Sat 08:00–18:00 | Sun closed' },
                { label: 'Location', detail: '7 Marlborough Road, Kensington W8 4PH' },
                { label: 'Walk-ins', detail: 'Welcome — chairs permitting' },
                { label: 'Contact', detail: '+44 20 7946 0445 | gents@castellos.example.com' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.gold}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.gold}>{info.label}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 203, label: 'cuts this month' }} vertical="barberos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.dark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>What They Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.darker}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>Good to Know</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460445" message="Hi! I'd like to book a chair at Castello's." vertical="barberos" />
    </div>
  )
}

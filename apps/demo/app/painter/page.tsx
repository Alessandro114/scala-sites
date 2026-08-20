'use client'
import Image from 'next/image';

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type {
  SiteConfig,
  Review,
  FAQItem,
  BookingSlot,
} from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  white: '#fafafa',
  offWhite: '#f4f4f5',
  blue: '#2563eb',
  blueDark: '#1d4ed8',
  blueLight: '#3b82f6',
  warmGrey: '#9ca3af',
  charcoal: '#1f2937',
  charcoalMid: '#374151',
  muted: '#6b7280',
  mutedLight: '#9ca3af',
  // Color swatch palette
  swatchCoral: '#f87171',
  swatchTeal: '#2dd4bf',
  swatchNavy: '#1e3a8a',
  swatchSage: '#86efac',
  swatchMustard: '#fbbf24',
  swatchSlate: '#64748b',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Brushstroke Decorators',
  description: 'Transform your space — professional painting & decorating',
  url: 'https://brushstroke.example.com',
  locale: 'en',
  vertical: 'tradeos',
  theme: 'classic',
  branding: { primaryColor: C.charcoal, accentColor: C.blue },
  contact: {
    phone: '+44 20 7890 1234',
    email: 'hello@brushstroke.example.com',
    whatsapp: '+442078901234',
    address: '16 Bermondsey Street, London SE1 3UJ',
    coordinates: { lat: 51.5007, lng: -0.0785 },
  },
  social: {
    instagram: 'brushstrokedecorators',
    facebook: 'https://facebook.com/brushstrokedecorators',
  },
  seo: {
    title: 'Brushstroke Decorators | Professional Painting & Decorating London',
    description: 'Professional painting and decorating in London. Interior, exterior, commercial, wallpapering, and free colour consultation.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    name: 'Interior Painting',
    desc: 'Living rooms, bedrooms, kitchens, and hallways. Perfect prep, premium paints, pristine finish.',
    price: 'Room from £350',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop',
  },
  {
    name: 'Exterior Painting',
    desc: 'House fronts, renders, timber, and masonry. Weather-resistant coatings that last 7–10 years.',
    price: 'House from £2,500',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    name: 'Commercial',
    desc: 'Offices, retail, hospitality, and industrial. Flexible scheduling including weekends and nights.',
    price: 'Call for quote',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    name: 'Wallpapering',
    desc: 'Feature walls, full rooms, murals, and commercial wallcoverings. We source and hang any paper.',
    price: 'Room from £280',
    image: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=600&h=400&fit=crop',
  },
  {
    name: 'Decorative Finishes',
    desc: 'Limewash, venetian plaster, colour washing, and rag rolling. Finishes that make rooms unique.',
    price: 'Quote on visit',
    image: 'https://images.unsplash.com/photo-1614438270398-4d2e8d4ca6de?w=600&h=400&fit=crop',
  },
  {
    name: 'Colour Consultation',
    desc: 'Not sure what colour? Our certified colour consultant visits your home and creates a bespoke scheme.',
    price: '£95 — free if you book',
    image: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=600&h=400&fit=crop',
  },
]

const portfolio = [
  { src: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=600&h=800&fit=crop', label: 'Bold Feature Wall', large: true },
  { src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop', label: 'Living Room Refresh' },
  { src: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=600&h=400&fit=crop', label: 'Colour Consultation' },
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=800&fit=crop', label: 'Kitchen Transform', large: true },
  { src: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=600&h=400&fit=crop', label: 'Bedroom Scheme' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop', label: 'Bathroom Tiles' },
  { src: 'https://images.unsplash.com/photo-1567016507263-1d45afba0f5e?w=600&h=400&fit=crop', label: 'Venetian Plaster' },
  { src: 'https://images.unsplash.com/photo-1611021061285-c4c09a217b42?w=600&h=400&fit=crop', label: 'Garden Room' },
]

const colorTrends = [
  { name: 'Warm Terracotta', swatch: '#c4532a', trend: 'Top trend 2026' },
  { name: 'Sage Green', swatch: '#86a96d', trend: 'Timeless classic' },
  { name: 'Deep Navy', swatch: C.swatchNavy, trend: 'Bold & editorial' },
  { name: 'Warm Stone', swatch: '#c4a882', trend: 'New neutral' },
  { name: 'Ink Blue', swatch: '#1e3f6e', trend: 'Rising fast' },
  { name: 'Chalk White', swatch: '#f5f2ed', trend: 'Always elegant' },
]

const processSteps = [
  { step: '01', name: 'Quote', desc: 'Free on-site quote within 24 hours. Fixed price given in writing — no surprises.' },
  { step: '02', name: 'Prep', desc: 'Full room protection, sanding, filling, and priming. The prep is what separates us.' },
  { step: '03', name: 'Paint', desc: 'Two full coats minimum with premium paints. We never rush. We never cut corners.' },
  { step: '04', name: 'Inspect', desc: 'Final walkthrough with you. We snag anything that isn\'t perfect before we leave.' },
]

const reviews: Review[] = [
  { id: '1', author: 'Katherine M.', rating: 5, text: 'The most meticulous painters I\'ve ever used. The prep work alone took a day — filling, sanding, two coats of primer. The finish on the kitchen is flawless.', date: '2026-07-18', source: 'google', verified: true },
  { id: '2', author: 'Steve D.', rating: 5, text: 'The colour consultation was worth every penny. We were going to paint everything grey — the consultant suggested warm stone in the living room and sage green in the hall. Completely transformed the flat.', date: '2026-07-26', source: 'google', verified: true },
  { id: '3', author: 'Naomi F.', rating: 5, text: 'Venetian plaster feature wall in the bedroom. I didn\'t think it was possible to make renting feel luxurious — they proved me wrong. Superb craftspeople.', date: '2026-08-02', source: 'trustpilot', verified: true },
  { id: '4', author: 'Marcus R.', rating: 5, text: 'Booked for a full house redecoration before putting it on the market. The estate agent added £30k to the valuation after seeing the photos. Best investment of the whole process.', date: '2026-08-04', source: 'google', verified: true },
  { id: '5', author: 'Priya K.', rating: 4, text: 'Done the nursery and two other bedrooms. Professional, on time, tidy. The brush control on the skirting boards is immaculate — you can see these are people who care.', date: '2026-07-29', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How much does it cost to have a room painted?', answer: 'A standard double bedroom (walls and ceiling, no furniture moving) starts at £350 including materials. Living rooms start at £450. We provide a fixed written quote after a free site visit — the price you\'re quoted is the price you pay.' },
  { question: 'What paint brands do you use?', answer: 'We primarily use Farrow & Ball, Little Greene, and Dulux Trade for interior work. For exterior masonry we use Sandtex or Dulux Weathershield. We can use any paint you specify, including design house paints.' },
  { question: 'Do you move furniture?', answer: 'Yes. We move and cover all furniture as part of our standard service. We use professional dust sheets on all floors and surfaces. We put everything back where we found it before we leave.' },
  { question: 'How long does it take to paint a house?', answer: 'A typical 3-bedroom semi takes 5–7 days for a full interior redecoration. We work Monday to Saturday, arriving at 08:00. You\'ll receive a daily update via WhatsApp with progress photos.' },
  { question: 'Can you match existing paint colours?', answer: 'Yes. Bring us a chip, a photo, or the original tin and we can match it. We use a computerised mixing system that\'s accurate to within 1 Delta-E (imperceptible to the human eye).' },
  { question: 'Do you offer a satisfaction guarantee?', answer: 'Absolutely. We come back within 30 days of completion to fix any snags, free of charge. We\'ve been in business for 17 years and our reputation is our business.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '09:00', available: true, spotsLeft: 2 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '11:00', available: true, spotsLeft: 1 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 3 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '16:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://brushstroke.example.com',
  name: 'Brushstroke Decorators',
  description: 'Professional painting and decorating in London. Interior, exterior, commercial, wallpapering, and colour consultation.',
  url: 'https://brushstroke.example.com',
  telephone: '+44 20 7890 1234',
  email: 'hello@brushstroke.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16 Bermondsey Street',
    addressLocality: 'London',
    postalCode: 'SE1 3UJ',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5007, longitude: -0.0785 },
  priceRange: '££',
  sameAs: ['https://instagram.com/brushstrokedecorators'],
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
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.white}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.charcoal}11` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* Paintbrush mark */}
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
            <rect x="8" y="0" width="4" height="14" rx="2" fill={C.charcoal} />
            <ellipse cx="10" cy="18" rx="5" ry="6" fill={C.blue} />
          </svg>
          <span style={{ color: C.charcoal, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 300 }}>
            Brushstroke
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Portfolio', 'Colours', 'Quote'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.charcoal)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#quote"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.blue, color: C.blue }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.blue
              e.currentTarget.style.color = C.white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.blue
            }}
          >
            Free Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PainterOSDemoPage() {
  return (
    <div style={{ backgroundColor: C.white, color: C.charcoal }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.blue }} />

      <style>{`
        @keyframes drip {
          0% { transform: translateY(-100%) scaleX(1); opacity: 0; }
          20% { opacity: 1; }
          70% { transform: translateY(0%) scaleX(1); }
          85% { transform: translateY(0%) scaleX(1.08) scaleY(1.06); }
          100% { transform: translateY(0%) scaleX(1) scaleY(1); opacity: 1; }
        }
        @keyframes swatchReveal {
          from { opacity: 0; transform: translateY(12px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes splitSlide {
          from { clip-path: inset(0 50% 0 0); }
          to { clip-path: inset(0 0% 0 0); }
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Color Swatch / Paint Drip
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: C.white }}>

        {/* Paint drip from top — in brand blue */}
        <div
          className="absolute top-0 left-0 right-0 h-[45vh] pointer-events-none overflow-hidden"
          style={{ animation: 'drip 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both' }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '100%',
              background: `linear-gradient(180deg, ${C.blue} 0%, ${C.charcoal} 100%)`,
              clipPath: 'polygon(0 0, 100% 0, 100% 80%, 60% 95%, 40% 85%, 20% 100%, 0 88%)',
            }}
          />
        </div>

        {/* Color swatch strip — right side */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col hidden lg:flex pointer-events-none" style={{ width: 60 }}>
          {[C.swatchCoral, C.swatchTeal, C.swatchNavy, C.swatchSage, C.swatchMustard, C.swatchSlate, C.charcoal, C.blue].map((color, i) => (
            <div
              key={color}
              className="flex-1"
              style={{
                backgroundColor: color,
                opacity: 0,
                animation: `swatchReveal 0.4s ease-out ${0.8 + i * 0.06}s forwards`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-36 pb-24 stagger-children">
          {/* Label */}
          <p className="reveal-clip-up text-xs tracking-[0.4em] uppercase mb-8" style={{ color: `${C.white}bb` }}>
            London &middot; Bermondsey &middot; Est. 2007
          </p>

          {/* Main headline — large split color */}
          <h1 className="mb-10">
            {[
              { text: 'Transform', light: true },
              { text: 'Your', light: true },
              { text: 'Space.', light: false },
            ].map((line, i) => (
              <span
                key={line.text}
                className="reveal-clip-up block font-extralight leading-[0.9]"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                  color: i < 2 ? C.white : C.charcoal,
                  letterSpacing: '-0.02em',
                  fontStyle: i === 2 ? 'italic' : 'normal',
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {line.text}
              </span>
            ))}
          </h1>

          {/* Below drip — on white background */}
          <p
            className="reveal-up text-lg font-light leading-relaxed mb-10 max-w-xl"
            style={{ color: C.charcoalMid, animationDelay: '0.55s' }}
          >
            Professional painters and decorators serving London since 2007.
            Interior, exterior, commercial — free quote within 24 hours.
          </p>

          {/* Color swatches — decorative */}
          <div className="reveal-up flex gap-3 mb-12" style={{ animationDelay: '0.65s' }}>
            {[C.swatchCoral, C.swatchTeal, C.swatchNavy, C.swatchSage, C.swatchMustard, C.swatchSlate].map((swatch, i) => (
              <div
                key={swatch}
                className="rounded-full cursor-pointer transition-transform duration-300 hover:scale-125"
                style={{ width: 32, height: 32, backgroundColor: swatch, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              />
            ))}
            <div
              className="rounded-full border-2 border-dashed flex items-center justify-center text-xs"
              style={{ width: 32, height: 32, borderColor: C.warmGrey, color: C.warmGrey }}
            >
              +
            </div>
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.75s' }}>
            <a
              href="#quote"
              className="px-10 py-4 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300"
              style={{ backgroundColor: C.blue, color: C.white }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.blueDark }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.blue }}
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="border px-10 py-4 text-sm tracking-[0.15em] uppercase font-light transition-all duration-300"
              style={{ borderColor: C.charcoal, color: C.charcoal }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.charcoal
                e.currentTarget.style.color = C.white
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.charcoal
              }}
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.offWhite }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>What We Do</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.charcoal }}>Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="reveal-up rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500"
                style={{ animationDelay: `${i * 0.08}s` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    style={{ filter: 'brightness(0.85)' }} width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.charcoal}aa, transparent)` }} />
                  <div className="absolute bottom-4 right-4">
                    <span
                      className="text-xs tracking-[0.15em] uppercase font-medium px-3 py-1.5"
                      style={{ backgroundColor: C.blue, color: C.white }}
                    >
                      {s.price}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-light mb-2" style={{ color: C.charcoal }}>{s.name}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. PORTFOLIO
          ═══════════════════════════════════════ */}
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blueLight }}>Our Work</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.white }}>Portfolio</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 stagger-children">
            {portfolio.map((img, i) => (
              <div
                key={i}
                className={`reveal-up relative overflow-hidden rounded-xl group cursor-pointer ${img.large ? 'col-span-2 row-span-2' : ''}`}
                style={{ height: img.large ? undefined : '200px', animationDelay: `${i * 0.07}s` }}
              >
                <Image src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  style={{ minHeight: img.large ? '420px' : '200px' }} width={1200} height={800} />
                <div
                  className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(to top, ${C.charcoal}cc, transparent)` }}
                >
                  <span className="text-sm font-light" style={{ color: C.white }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. COLOUR TRENDS
          ═══════════════════════════════════════ */}
      <section id="colours" className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: C.white }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>2026 Palette</p>
            <h2 className="text-3xl md:text-4xl font-extralight" style={{ color: C.charcoal }}>Colour Trends</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
            {colorTrends.map((c, i) => (
              <div
                key={c.name}
                className="reveal-up group cursor-pointer text-center"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div
                  className="w-full rounded-xl mb-4 transition-transform duration-300 group-hover:scale-[1.04] group-hover:shadow-lg"
                  style={{ height: 120, backgroundColor: c.swatch }}
                />
                <p className="text-sm font-light mb-1" style={{ color: C.charcoal }}>{c.name}</p>
                <p className="text-xs" style={{ color: C.warmGrey }}>{c.trend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. PROCESS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.offWhite }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>How It Works</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Our Process</h2>
          </div>
          <div className="relative">
            <div
              className="absolute top-10 left-[12%] right-[12%] h-[2px] hidden md:block pointer-events-none"
              style={{ background: `linear-gradient(90deg, ${C.blue}33, ${C.blue}66, ${C.blue}33)` }}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 stagger-children">
              {processSteps.map((step, i) => (
                <div key={step.step} className="reveal-up text-center" style={{ animationDelay: `${i * 0.12}s` }}>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-light"
                    style={{
                      backgroundColor: C.white,
                      border: `2px solid ${C.blue}`,
                      color: C.blue,
                      boxShadow: `0 0 0 6px ${C.blue}11`,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-light mb-3" style={{ color: C.charcoal }}>{step.name}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. PRICING ANCHOR
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-16" style={{ backgroundColor: C.blue }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-2" style={{ color: `${C.white}88` }}>Transparent Pricing</p>
            <h2 className="text-2xl md:text-3xl font-extralight" style={{ color: C.white }}>
              Room from £350 &middot; House from £2,500
            </h2>
          </div>
          <div className="reveal-right flex gap-4">
            <a
              href="#quote"
              className="border-2 px-8 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
              style={{ borderColor: C.white, color: C.white }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.white
                e.currentTarget.style.color = C.blue
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.white
              }}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>What Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.offWhite }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blue }}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="PainterOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. QUOTE / BOOKING
          ═══════════════════════════════════════ */}
      <section id="quote" className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: C.charcoal }}>
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top right, ${C.blue}22, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.blueLight }}>No Obligation</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={{ color: C.white }}>
              Get a Free<br />Quote
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: C.mutedLight }}>
              We visit, assess, and give you a fixed written quote &mdash; usually within 24 hours of your call.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Response Time', detail: 'Quote visit within 24–48 hours. Written quote same day.' },
                { title: 'Coverage', detail: 'Greater London and home counties within 30 miles.' },
                { title: 'Guarantee', detail: '30-day snag fix. No questions. No charge.' },
                { title: 'Hours', detail: 'Mon–Fri 08:00–18:00 | Sat 08:00–14:00' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.blue}55` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: C.blueLight }}>{info.title}</p>
                    <p className="text-sm font-light" style={{ color: C.mutedLight }}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 142, label: 'quotes requested this month' }}
              vertical="tradeos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA
        phoneNumber="+442078901234"
        message="Hi! I'd like a free quote from Brushstroke Decorators"
        vertical="tradeos"
      />
    </div>
  )
}

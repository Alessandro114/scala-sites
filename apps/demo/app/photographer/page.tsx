'use client'

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
import { generateLocalBusinessJsonLd, generateFAQJsonLd } from '@scala-sites/core/lib/seo'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  black:    '#0e0d0c',
  charcoal: '#1a1a1a',
  darkAlt:  '#141414',
  gold:     '#c9a84c',
  goldDim:  '#a8893e',
  warm:     '#f5f0eb',
  warmDim:  '#d8cfc5',
  muted:    '#8a8278',
  border:   '#2e2e2e',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Elena Vasquez Photography',
  description: 'Award-winning portrait, wedding & commercial photographer',
  url: 'https://elenavasquez.photo',
  locale: 'en',
  vertical: 'studioos',
  theme: 'dark',
  branding: { primaryColor: C.charcoal, accentColor: C.gold },
  contact: {
    phone: '+44 20 7946 1230',
    email: 'hello@elenavasquez.photo',
    whatsapp: '+442079461230',
    address: '18 Fitzroy Square, Fitzrovia, London W1T 6EJ',
    coordinates: { lat: 51.5234, lng: -0.1367 },
  },
  social: {
    instagram: 'elenavasquezphoto',
    facebook: 'https://facebook.com/elenavasquezphoto',
  },
  seo: {
    title: 'Elena Vasquez Photography | Portrait, Wedding & Commercial',
    description: 'Award-winning photographer in London specialising in wedding, portrait, and commercial photography.',
  },
}

// ─────────────────────────────────────────────
// DATA — Portfolio items
// ─────────────────────────────────────────────
type Category = 'Wedding' | 'Portrait' | 'Commercial' | 'Editorial'

interface PortfolioItem {
  id: string
  title: string
  category: Category
  image: string
  aspect: 'portrait' | 'landscape' | 'square'
}

const portfolio: PortfolioItem[] = [
  { id: '1', title: 'Sarah & James — Lake District', category: 'Wedding',    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1100&fit=crop', aspect: 'portrait' },
  { id: '2', title: 'Corporate Headshots — Deloitte', category: 'Commercial', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',  aspect: 'square' },
  { id: '3', title: 'Maya — Studio Portrait',         category: 'Portrait',   image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&h=950&fit=crop',  aspect: 'portrait' },
  { id: '4', title: 'Autumn Editorial — Vogue',       category: 'Editorial',  image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&h=700&fit=crop', aspect: 'landscape' },
  { id: '5', title: 'Tom & Lia — Tuscany',            category: 'Wedding',    image: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?w=800&h=1100&fit=crop', aspect: 'portrait' },
  { id: '6', title: 'Product — Aesop Campaign',       category: 'Commercial', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=800&fit=crop',  aspect: 'square' },
  { id: '7', title: 'Leo — Family Portrait',          category: 'Portrait',   image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=700&h=950&fit=crop',  aspect: 'portrait' },
  { id: '8', title: 'Spring/Summer — Elle UK',        category: 'Editorial',  image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&h=700&fit=crop', aspect: 'landscape' },
  { id: '9', title: 'Priya & Arjun — Mayfair',        category: 'Wedding',    image: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=800&h=1100&fit=crop', aspect: 'portrait' },
  { id: '10', title: 'Brand Identity — Soho Agency',  category: 'Commercial', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1000&h=700&fit=crop', aspect: 'landscape' },
  { id: '11', title: 'Zara — Boudoir Session',        category: 'Portrait',   image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&h=950&fit=crop',  aspect: 'portrait' },
  { id: '12', title: 'Winter Editorial — TANK Mag',   category: 'Editorial',  image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1100&fit=crop', aspect: 'portrait' },
]

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Sarah & James', rating: 5, text: "Elena captured our wedding day with such sensitivity and artistry. Every time we look at those images we feel the emotion all over again. She's genuinely extraordinary.", date: '2026-07-20', source: 'google', verified: true },
  { id: '2', author: 'Charlotte B.', rating: 5, text: "I've had portrait sessions before and always felt awkward in front of the camera. Elena made me feel completely at ease. The results were stunning — I actually recognised myself.", date: '2026-07-05', source: 'google', verified: true },
  { id: '3', author: 'Marcus (Deloitte)', rating: 5, text: 'We hired Elena for 80 corporate headshots across two days. Flawless execution, perfectly consistent lighting, and every single person on the team said she made them feel confident.', date: '2026-06-18', source: 'google', verified: true },
  { id: '4', author: 'Priya & Arjun', rating: 5, text: 'A photographer who truly understands light and emotion. Our wedding album is a work of art. We had over 200 guests comment on the photography quality. Worth every penny.', date: '2026-08-01', source: 'google', verified: true },
  { id: '5', author: 'Nadia F.', rating: 5, text: 'I commissioned Elena for an editorial campaign and the results exceeded the client brief by miles. Three of her shots went straight to our magazine cover shortlist.', date: '2026-07-29', source: 'google', verified: true },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'How far in advance should I book?', answer: 'For weddings, I recommend booking 12–18 months in advance as dates fill quickly. Portrait sessions can usually be scheduled within 2–4 weeks. Commercial projects depend on scope — contact me to discuss.' },
  { question: 'What is included in the wedding package?', answer: 'The Full Day package (£2,500) includes up to 10 hours of coverage, a dedicated second shooter, online gallery with 600+ edited images, and a private download link valid for 3 years. Engagement sessions can be added for £350.' },
  { question: 'How long until I receive my images?', answer: 'Portrait sessions: 7–14 days. Wedding galleries: 6–8 weeks. Commercial projects: agreed at brief stage, typically 5–10 business days for standard deliverables.' },
  { question: 'Do you travel for shoots?', answer: 'Yes. I regularly photograph weddings and editorial work across the UK and Europe. Travel within the M25 is included. For shoots beyond London, travel and accommodation costs are added at cost.' },
  { question: 'What file formats do you deliver?', answer: 'All images are delivered as high-resolution JPEGs (300 DPI), suitable for large print. RAW files are not included by default but can be licensed for an additional fee.' },
  { question: 'Do you offer prints or albums?', answer: 'Yes — I partner with a fine art print lab in Milan. Albums start from £450 (30 pages), and wall art prints from £85. All products are heirloom quality.' },
]

// ─────────────────────────────────────────────
// BOOKING SLOTS
// ─────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today,    time: '09:00', available: true,  spotsLeft: 1 },
  { id: '2', date: today,    time: '11:00', available: true,  spotsLeft: 1 },
  { id: '3', date: today,    time: '14:00', available: false, spotsLeft: 0 },
  { id: '4', date: today,    time: '16:00', available: true,  spotsLeft: 1 },
  { id: '5', date: tomorrow, time: '10:00', available: true,  spotsLeft: 1 },
  { id: '6', date: tomorrow, time: '13:00', available: true,  spotsLeft: 1 },
  { id: '7', date: tomorrow, time: '15:00', available: true,  spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessLd = generateLocalBusinessJsonLd(siteConfig)
const faqLd = generateFAQJsonLd(faqs)

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  page:       { backgroundColor: C.black,    color: C.warm }    as React.CSSProperties,
  dark:       { backgroundColor: C.charcoal }                   as React.CSSProperties,
  darkAlt:    { backgroundColor: C.darkAlt }                    as React.CSSProperties,
  gold:       { color: C.gold }                                  as React.CSSProperties,
  warm:       { color: C.warm }                                  as React.CSSProperties,
  muted:      { color: C.muted }                                 as React.CSSProperties,
  warmDim:    { color: C.warmDim }                               as React.CSSProperties,
  borderGold: { borderColor: C.gold }                            as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass-dark"
      style={{ borderBottom: `1px solid ${C.gold}22` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-light tracking-[0.25em] text-sm uppercase" style={S.warm}>
          Elena Vasquez
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Portfolio', 'Packages', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.warm)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.gold
              e.currentTarget.style.color = C.black
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.gold
            }}
          >
            Book a Session
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  APERTURE RING component (pure CSS animation)
// ═══════════════════════════════════════════════
function ApertureRing({ size = 320, color = C.gold }: { size?: number; color?: string }) {
  const blades = 8
  return (
    <div
      style={{
        width:  size,
        height: size,
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {/* Outer ring */}
      <div
        style={{
          position:    'absolute',
          inset:       0,
          borderRadius: '50%',
          border:       `1px solid ${color}44`,
          animation:    'spin 20s linear infinite',
        }}
      />
      {/* Inner ring */}
      <div
        style={{
          position:    'absolute',
          inset:       size * 0.08,
          borderRadius: '50%',
          border:       `1px solid ${color}33`,
          animation:    'spin 14s linear infinite reverse',
        }}
      />
      {/* Aperture blades */}
      {Array.from({ length: blades }).map((_, i) => (
        <div
          key={i}
          style={{
            position:        'absolute',
            top:             '50%',
            left:            '50%',
            width:           size * 0.42,
            height:          size * 0.042,
            backgroundColor: `${color}18`,
            border:          `1px solid ${color}22`,
            borderRadius:    2,
            transformOrigin: '0 50%',
            transform:       `translateY(-50%) rotate(${(i / blades) * 360}deg)`,
            animation:       `pulse-opacity 4s ease-in-out ${i * 0.5}s infinite alternate`,
          }}
        />
      ))}
      {/* Center dot */}
      <div
        style={{
          position:     'absolute',
          top:          '50%',
          left:         '50%',
          transform:    'translate(-50%, -50%)',
          width:        size * 0.06,
          height:       size * 0.06,
          borderRadius: '50%',
          backgroundColor: color,
          opacity:      0.6,
        }}
      />
      {/* Tick marks */}
      {Array.from({ length: 36 }).map((_, i) => (
        <div
          key={`tick-${i}`}
          style={{
            position:        'absolute',
            top:             '50%',
            left:            '50%',
            width:           i % 9 === 0 ? size * 0.06 : size * 0.03,
            height:          1,
            backgroundColor: `${color}${i % 9 === 0 ? '55' : '22'}`,
            transformOrigin: `0 50%`,
            transform:       `translateY(-50%) rotate(${i * 10}deg) translateX(${size * 0.44}px)`,
          }}
        />
      ))}
    </div>
  )
}

// ═══════════════════════════════════════════════
//  FILTER BAR
// ═══════════════════════════════════════════════
function FilterBar({
  active,
  onChange,
}: {
  active: string
  onChange: (cat: string) => void
}) {
  const cats = ['All', 'Wedding', 'Portrait', 'Commercial', 'Editorial']
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {cats.map((cat) => {
        const isActive = active === cat
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="text-xs tracking-[0.2em] uppercase px-5 py-2 transition-all duration-300"
            style={{
              border:          `1px solid ${isActive ? C.gold : C.border}`,
              color:           isActive ? C.black : C.muted,
              backgroundColor: isActive ? C.gold : 'transparent',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = C.gold
                e.currentTarget.style.color = C.warm
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = C.border
                e.currentTarget.style.color = C.muted
              }
            }}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function PhotographerPage() {
  // Client-side filter state (static render uses 'All')
  // We use a simple data-attribute approach for zero-JS filtering
  // via CSS attribute selectors — works in SSR too

  const localBusiness = localBusinessLd
  const faqSchema     = faqLd

  return (
    <div style={S.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Global keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-opacity {
          from { opacity: 0.2; }
          to   { opacity: 0.7; }
        }
        @keyframes float-thumb {
          0%, 100% { transform: translateY(0px) rotate(var(--r, 0deg)); }
          50%       { transform: translateY(-12px) rotate(var(--r, 0deg)); }
        }
        .thumb-float { animation: float-thumb 5s ease-in-out infinite; }
        .portfolio-item { transition: opacity 0.4s ease, transform 0.4s ease; }
        .filter-all    .portfolio-item { opacity: 1; }
        .filter-wedding    .portfolio-item:not([data-cat="Wedding"])    { opacity: 0.15; transform: scale(0.97); }
        .filter-portrait   .portfolio-item:not([data-cat="Portrait"])   { opacity: 0.15; transform: scale(0.97); }
        .filter-commercial .portfolio-item:not([data-cat="Commercial"]) { opacity: 0.15; transform: scale(0.97); }
        .filter-editorial  .portfolio-item:not([data-cat="Editorial"])  { opacity: 0.15; transform: scale(0.97); }
        .image-reveal:hover > div[style*="clip-path"] {
          clip-path: inset(0 0 0 0) !important;
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Full-bleed + Aperture + Thumbnails
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden grain"
        style={{ backgroundColor: C.black }}
      >
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1800&h=1200&fit=crop&q=90"
            alt="Elena Vasquez Photography studio"
            className="w-full h-full object-cover"
            style={{ opacity: 0.25 }}
          />
          {/* Radial vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, transparent 20%, ${C.black} 80%)`,
            }}
          />
        </div>

        {/* Floating portfolio thumbnails — left side */}
        <div
          className="hidden xl:flex flex-col gap-4 absolute left-8 top-1/2 -translate-y-1/2 z-20"
          aria-hidden
        >
          {[portfolio[0], portfolio[4], portfolio[8]].map((p, i) => (
            <div
              key={p.id}
              className="thumb-float overflow-hidden rounded-sm"
              style={{
                width:         80,
                height:        110,
                animationDelay: `${i * 1.4}s`,
                ['--r' as string]: `${i % 2 === 0 ? '-3deg' : '2deg'}`,
                border:        `1px solid ${C.gold}33`,
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Floating portfolio thumbnails — right side */}
        <div
          className="hidden xl:flex flex-col gap-4 absolute right-8 top-1/2 -translate-y-1/2 z-20"
          aria-hidden
        >
          {[portfolio[2], portfolio[6], portfolio[10]].map((p, i) => (
            <div
              key={p.id}
              className="thumb-float overflow-hidden rounded-sm"
              style={{
                width:         80,
                height:        110,
                animationDelay: `${i * 1.7 + 0.8}s`,
                ['--r' as string]: `${i % 2 === 0 ? '3deg' : '-2deg'}`,
                border:        `1px solid ${C.gold}33`,
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-6 py-32">
          {/* Aperture ring decoration */}
          <div className="mb-12 opacity-60" aria-hidden>
            <ApertureRing size={220} color={C.gold} />
          </div>

          <p
            className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-6"
            style={S.gold}
          >
            London &middot; Available Worldwide
          </p>

          <h1 className="mb-6">
            {['Elena', 'Vasquez'].map((word, i) => (
              <span
                key={word}
                className="reveal-clip-up block leading-[0.9] tracking-tight"
                style={{
                  color:          C.warm,
                  fontSize:       'clamp(4rem, 12vw, 10rem)',
                  fontWeight:     100,
                  fontFamily:     'Georgia, "Times New Roman", serif',
                  animationDelay: `${i * 0.2}s`,
                  letterSpacing:  '-0.02em',
                }}
              >
                {word}
              </span>
            ))}
            <span
              className="reveal-clip-up block text-base md:text-lg tracking-[0.4em] uppercase mt-4"
              style={{ ...S.gold, animationDelay: '0.45s', fontFamily: 'inherit', fontWeight: 300 }}
            >
              Photography
            </span>
          </h1>

          <p
            className="reveal-up max-w-lg text-base font-light leading-relaxed mt-6 mb-10"
            style={{ ...S.warmDim, animationDelay: '0.55s' }}
          >
            Portraits that reveal character. Weddings that tell the whole story.
            Campaigns that stop the scroll. Based in London.
          </p>

          {/* Stats */}
          <div
            className="reveal-up flex flex-wrap justify-center gap-10 mb-12 text-xs tracking-[0.2em] uppercase"
            style={{ ...S.muted, animationDelay: '0.65s' }}
          >
            <span className="flex flex-col items-center gap-1">
              <em className="not-italic text-2xl font-extralight" style={S.gold}>340+</em>
              <span>Weddings</span>
            </span>
            <span style={{ color: C.gold }}>|</span>
            <span className="flex flex-col items-center gap-1">
              <em className="not-italic text-2xl font-extralight" style={S.gold}>12</em>
              <span>Magazine Covers</span>
            </span>
            <span style={{ color: C.gold }}>|</span>
            <span className="flex flex-col items-center gap-1">
              <em className="not-italic text-2xl font-extralight" style={S.gold}>9</em>
              <span>Years Active</span>
            </span>
          </div>

          {/* CTAs */}
          <div
            className="reveal-up flex flex-wrap gap-4 justify-center"
            style={{ animationDelay: '0.75s' }}
          >
            <a
              href="#portfolio"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.gold, color: C.gold }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.gold
                e.currentTarget.style.color           = C.black
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color           = C.gold
              }}
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={S.muted}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.warm)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              Book a Session
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          aria-hidden
        >
          <span className="text-[10px] tracking-[0.3em] uppercase" style={S.muted}>Scroll</span>
          <div
            style={{
              width: 1,
              height: 40,
              background: `linear-gradient(to bottom, ${C.gold}, transparent)`,
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. PORTFOLIO MASONRY — Filterable
          ═══════════════════════════════════════ */}
      <section
        id="portfolio"
        className="relative py-24 md:py-32 px-6 md:px-16 grain filter-all"
        style={S.dark}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>
              Portfolio
            </p>
            <h2
              className="text-4xl md:text-6xl font-extralight mb-8"
              style={{ ...S.warm, fontFamily: 'Georgia, serif' }}
            >
              Selected Works
            </h2>
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {['All', 'Wedding', 'Portrait', 'Commercial', 'Editorial'].map((cat) => (
                <button
                  key={cat}
                  className="text-xs tracking-[0.2em] uppercase px-5 py-2 transition-all duration-300"
                  style={{ border: `1px solid ${C.border}`, color: C.muted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.gold
                    e.currentTarget.style.color       = C.warm
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border
                    e.currentTarget.style.color       = C.muted
                  }}
                  onClick={(e) => {
                    // Toggle active filter via parent class
                    const section = e.currentTarget.closest('section')!
                    section.className = section.className
                      .replace(/filter-\w+/, '')
                      .trim() + ` filter-${cat.toLowerCase()}`
                    // Update button styles
                    section.querySelectorAll('button').forEach((btn) => {
                      const isThis = btn === e.currentTarget
                      btn.setAttribute(
                        'style',
                        `border: 1px solid ${isThis ? C.gold : C.border}; color: ${isThis ? C.black : C.muted}; background-color: ${isThis ? C.gold : 'transparent'}; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; padding: 0.5rem 1.25rem; transition: all 0.3s;`
                      )
                    })
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry grid */}
          <div
            className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4"
            style={{ columnFill: 'balance' }}
          >
            {portfolio.map((item, i) => (
              <div
                key={item.id}
                data-cat={item.category}
                className="portfolio-item image-reveal relative group overflow-hidden rounded-sm mb-3 md:mb-4 break-inside-avoid reveal-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  style={{
                    display:   'block',
                    aspectRatio: item.aspect === 'portrait' ? '3/4' : item.aspect === 'landscape' ? '4/3' : '1/1',
                  }}
                />
                {/* Category chip */}
                <span
                  className="absolute top-3 left-3 text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: `${C.gold}cc`,
                    color:           C.black,
                  }}
                >
                  {item.category}
                </span>
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{
                    background: `linear-gradient(to top, ${C.black}cc, transparent)`,
                    clipPath:   'inset(100% 0 0 0)',
                  }}
                >
                  <span
                    className="text-xs tracking-[0.15em] uppercase font-light"
                    style={S.warm}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. PACKAGES
          ═══════════════════════════════════════ */}
      <section
        id="packages"
        className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden grain"
        style={S.darkAlt}
      >
        {/* Decorative gold blob */}
        <div
          className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none"
          style={{ backgroundColor: C.gold, filter: 'blur(120px)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>
              Investment
            </p>
            <h2
              className="text-4xl md:text-6xl font-extralight"
              style={{ ...S.warm, fontFamily: 'Georgia, serif' }}
            >
              Photography Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                name:     'Portrait Session',
                price:    '£500',
                sub:      'Half day · Up to 3 hours',
                icon:     '◎',
                features: [
                  'Studio or location shoot',
                  '1 outfit change',
                  '30+ edited high-res images',
                  'Private online gallery',
                  '2-week delivery',
                  'Print release included',
                ],
              },
              {
                name:     'Wedding Full Day',
                price:    '£2,500',
                sub:      'Up to 10 hours · Second shooter',
                icon:     '◉',
                featured: true,
                features: [
                  'Getting ready → first dance',
                  'Dedicated second shooter',
                  '600+ edited images',
                  'Private gallery (3 years)',
                  '6–8 week delivery',
                  'Engagement session (£350 add-on)',
                  'Same-day preview (10 shots)',
                ],
              },
              {
                name:     'Commercial Campaign',
                price:    '£5,000',
                sub:      'Full day · Creative direction',
                icon:     '◈',
                features: [
                  'Pre-production consultation',
                  'Moodboard & shot list',
                  'Studio + location options',
                  'Art direction on set',
                  '100+ retouched finals',
                  'Commercial usage licence',
                  '5 business day delivery',
                ],
              },
            ].map((pkg, i) => (
              <div
                key={pkg.name}
                className="reveal-up relative flex flex-col p-8 md:p-10 rounded-sm"
                style={{
                  animationDelay:  `${i * 0.12}s`,
                  backgroundColor: pkg.featured ? `${C.gold}11` : `${C.charcoal}88`,
                  border:          `1px solid ${pkg.featured ? C.gold : C.border}`,
                }}
              >
                {pkg.featured && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase px-4 py-1 rounded-full"
                    style={{ backgroundColor: C.gold, color: C.black }}
                  >
                    Most Popular
                  </span>
                )}
                <div className="text-3xl mb-4" style={S.gold} aria-hidden>{pkg.icon}</div>
                <p className="text-xs tracking-[0.3em] uppercase mb-2" style={S.muted}>{pkg.sub}</p>
                <h3 className="text-xl font-light mb-1" style={S.warm}>{pkg.name}</h3>
                <p
                  className="text-4xl font-extralight mb-8 mt-2"
                  style={{ ...S.gold, fontFamily: 'Georgia, serif' }}
                >
                  {pkg.price}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light" style={S.warmDim}>
                      <span style={S.gold} className="mt-0.5 flex-shrink-0">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="text-center text-xs tracking-[0.25em] uppercase py-3 px-6 transition-all duration-400"
                  style={{
                    border:          `1px solid ${pkg.featured ? C.gold : C.border}`,
                    color:           pkg.featured ? C.black : C.muted,
                    backgroundColor: pkg.featured ? C.gold : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = C.gold
                    e.currentTarget.style.color           = C.black
                    e.currentTarget.style.borderColor     = C.gold
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = pkg.featured ? C.gold : 'transparent'
                    e.currentTarget.style.color           = pkg.featured ? C.black : C.muted
                    e.currentTarget.style.borderColor     = pkg.featured ? C.gold : C.border
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
          4. ABOUT / BIO
          ═══════════════════════════════════════ */}
      <section
        id="about"
        className="relative py-24 md:py-40 px-6 md:px-16 overflow-hidden grain"
        style={S.dark}
      >
        <div
          className="blob absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
          style={{ backgroundColor: C.gold, filter: 'blur(140px)' }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-16 md:gap-24 items-center relative z-10">
          {/* Portrait */}
          <div className="reveal-left">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ border: `1px solid ${C.gold}33` }}
            >
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=900&fit=crop&q=90"
                alt="Elena Vasquez — photographer"
                className="w-full object-cover"
                style={{ maxHeight: 600 }}
              />
              {/* Gold corner accent */}
              <div
                className="absolute top-0 left-0 w-12 h-12 pointer-events-none"
                style={{
                  borderTop:  `2px solid ${C.gold}`,
                  borderLeft: `2px solid ${C.gold}`,
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
                style={{
                  borderBottom: `2px solid ${C.gold}`,
                  borderRight:  `2px solid ${C.gold}`,
                }}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="reveal-right">
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={S.gold}>
              About Elena
            </p>
            <h2
              className="text-4xl md:text-5xl font-extralight leading-tight mb-8"
              style={{ ...S.warm, fontFamily: 'Georgia, serif' }}
            >
              The eye behind<br />the lens
            </h2>
            <blockquote
              className="text-xl md:text-2xl font-extralight italic leading-snug mb-10 pl-6"
              style={{
                color:      C.gold,
                borderLeft: `2px solid ${C.gold}44`,
              }}
            >
              &ldquo;I don&rsquo;t photograph what I see &mdash; I photograph what I feel.&rdquo;
            </blockquote>
            <p className="text-base font-light leading-relaxed mb-6" style={S.warmDim}>
              Elena Vasquez began her career assisting legendary portraitist
              David Bailey before founding her own practice in 2016. Her work
              has appeared in British Vogue, Elle, The Sunday Times Magazine,
              and Campaign. She has photographed over 340 weddings across
              the UK and Europe, and counts Fortune 500 brands and emerging
              designers among her commercial clients.
            </p>
            <p className="text-base font-light leading-relaxed mb-10" style={S.warmDim}>
              Elena&rsquo;s signature style combines natural light with cinematic
              composition, creating images that feel both timeless and
              intensely personal. Her studio in Fitzrovia is available for
              portrait and product sessions.
            </p>
            {/* Accolades */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'BIPP Award', year: '2024' },
                { label: 'Vogue Feature', year: '2023' },
                { label: 'Wedding Photographer of the Year', year: '2022' },
                { label: 'Elle UK Commission', year: '2025' },
              ].map((a) => (
                <div
                  key={a.label}
                  className="p-4 rounded-sm"
                  style={{ border: `1px solid ${C.border}` }}
                >
                  <p className="text-xs tracking-widest uppercase mb-1" style={S.gold}>{a.year}</p>
                  <p className="text-sm font-light" style={S.warm}>{a.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. REVIEWS
          ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={S.darkAlt}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>
            Client Words
          </p>
          <h2
            className="text-4xl md:text-5xl font-extralight"
            style={{ ...S.warm, fontFamily: 'Georgia, serif' }}
          >
            Testimonials
          </h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. BOOKING / CONTACT
          ═══════════════════════════════════════ */}
      <section
        id="contact"
        className="relative py-24 md:py-32 px-6 md:px-16 grain overflow-hidden"
        style={S.dark}
      >
        <div
          className="blob absolute bottom-0 left-[10%] w-[400px] h-[400px] opacity-10 pointer-events-none"
          style={{ backgroundColor: C.gold, filter: 'blur(100px)' }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>
              Get in Touch
            </p>
            <h2
              className="text-4xl md:text-5xl font-extralight mb-8"
              style={{ ...S.warm, fontFamily: 'Georgia, serif' }}
            >
              Book Your<br />Session
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.warmDim}>
              Tell me a little about your project and I&rsquo;ll get back to you
              within 24 hours. For urgent enquiries, message me on WhatsApp.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Studio', value: '18 Fitzroy Square, Fitzrovia, London W1T 6EJ' },
                { label: 'Email',  value: 'hello@elenavasquez.photo' },
                { label: 'Phone',  value: '+44 20 7946 1230' },
                { label: 'Hours',  value: 'Mon–Sat, 9:00–19:00. Weekends by arrangement.' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div
                    className="w-1 min-h-[40px] rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: `${C.gold}44` }}
                  />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.gold}>{info.label}</p>
                    <p className="text-sm font-light" style={S.warmDim}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 89, label: 'sessions booked this month' }}
              vertical="studioos"
              onSubmit={async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. FAQ
          ═══════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 px-6 md:px-16 grain"
        style={S.darkAlt}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>
              Questions
            </p>
            <h2
              className="text-4xl md:text-5xl font-extralight"
              style={{ ...S.warm, fontFamily: 'Georgia, serif' }}
            >
              Frequently Asked
            </h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="+442079461230"
        message="Hi Elena! I'd like to enquire about a photography session."
        vertical="studioos"
      />
    </div>
  )
}

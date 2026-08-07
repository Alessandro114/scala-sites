'use client'

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem, BookingSlot } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE — CMYK
// ─────────────────────────────────────────────
const C = {
  ink: '#0a0a0a',
  inkSoft: '#141414',
  inkMid: '#1c1c1c',
  cyan: '#06b6d4',
  magenta: '#ec4899',
  yellow: '#eab308',
  keyBlack: '#0a0a0a',
  white: '#ffffff',
  offWhite: '#f8f8f8',
  lightGray: '#e5e5e5',
  midGray: '#6b6b6b',
} as const

const S = {
  pageBg: { backgroundColor: C.ink, color: C.white } as React.CSSProperties,
  sectionInk: { backgroundColor: C.ink } as React.CSSProperties,
  sectionSoft: { backgroundColor: C.inkSoft } as React.CSSProperties,
  sectionMid: { backgroundColor: C.inkMid } as React.CSSProperties,
  cyan: { color: C.cyan } as React.CSSProperties,
  magenta: { color: C.magenta } as React.CSSProperties,
  yellow: { color: C.yellow } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  offWhite: { color: C.offWhite } as React.CSSProperties,
  midGray: { color: C.midGray } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'ChromaPress Print Studio',
  description: 'Professional printing services that make an impact',
  url: 'https://chromapress.example.com',
  locale: 'en',
  vertical: 'printos',
  theme: 'bold',
  branding: { primaryColor: C.ink, accentColor: C.cyan },
  contact: {
    phone: '+44 20 7890 1234',
    email: 'orders@chromapress.com',
    whatsapp: '+442078901234',
    address: '28 Whitechapel Road, London E1 1EW',
    coordinates: { lat: 51.5175, lng: -0.0680 },
  },
  social: {
    instagram: 'chromapress_uk',
    facebook: 'https://facebook.com/chromapress',
  },
  seo: {
    title: 'ChromaPress Print Studio — Print That Makes an Impact',
    description: 'Professional printing for business cards, flyers, brochures, banners and more.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Rachel T.', rating: 5, text: 'Ordered 500 business cards — arrived in 48 hours and the colour accuracy is stunning. The matte laminate finish is exactly what I wanted. Will use again and again.', date: '2026-07-12', source: 'google', verified: true },
  { id: '2', author: 'Marcus J.', rating: 5, text: 'We needed 2,000 flyers for an event with 72-hour turnaround. ChromaPress delivered — colour-perfect, crisp, and ahead of deadline. Absolute lifesavers.', date: '2026-07-20', source: 'trustpilot', verified: true },
  { id: '3', author: 'Stella W.', rating: 5, text: 'The packaging they produced for our product launch was beautiful. The structural designer worked with us to get it exactly right. Premium quality at a fair price.', date: '2026-07-28', source: 'google', verified: true },
  { id: '4', author: 'Ben H.', rating: 4, text: 'Our branded banner for the trade show was perfect — vibrant colours, no banding, and incredibly fast delivery. The team was helpful with the artwork setup too.', date: '2026-08-02', source: 'google', verified: true },
  { id: '5', author: 'Priya K.', rating: 5, text: 'From upload to delivery in under 3 days. The online proofing tool is brilliant — I could see exactly how the brochure would look before print. Outstanding service.', date: '2026-08-04', source: 'trustpilot', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'What file formats do you accept?', answer: 'We accept PDF, AI, EPS, PSD, TIFF, and InDesign (IDML) files. All files should be supplied in CMYK colour mode at 300dpi minimum, with 3mm bleed and crop marks. Our prepress team checks every file before going to press.' },
  { question: 'How quickly can you print and deliver?', answer: 'Standard turnaround is 3-5 working days. Express 48-hour and Same-Day services are available on most products for an additional fee. Next-day delivery is available across mainland UK.' },
  { question: 'Do you offer proofing before I approve the print run?', answer: 'Yes. All orders include a free digital proof within 2 hours of upload. Physical colour proofs are available for orders over £500 at a flat £25 fee, credited back on final order.' },
  { question: 'What is the minimum order quantity?', answer: 'Minimum quantities vary by product. Business cards from 50, flyers from 100, brochures from 25, posters from 10. Bulk pricing kicks in at 500+ units with discounts up to 40%.' },
  { question: 'Do you print on recycled or eco-certified stock?', answer: 'Yes. We offer FSC-certified, recycled, and carbon-neutral stock options across all paper products at no extra lead time. We are ISO 14001 certified and offset 100% of our production carbon.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 5 },
  { id: '2', date: today, time: '10:30', available: true, spotsLeft: 3 },
  { id: '3', date: today, time: '13:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '14:30', available: true, spotsLeft: 2 },
  { id: '5', date: today, time: '16:00', available: true, spotsLeft: 6 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ChromaPress Print Studio',
  description: 'Professional printing services for business cards, flyers, brochures, banners, and packaging.',
  url: 'https://chromapress.example.com',
  telephone: '+44 20 7890 1234',
  email: 'orders@chromapress.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '28 Whitechapel Road',
    addressLocality: 'London',
    postalCode: 'E1 1EW',
    addressCountry: 'GB',
  },
  openingHours: 'Mo-Fr 08:00-18:00 Sa 09:00-14:00',
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
// CMYK HERO COMPONENT
// ─────────────────────────────────────────────
function CMYKStrips() {
  const strips = [
    { color: C.cyan, label: 'C', name: 'Cyan' },
    { color: C.magenta, label: 'M', name: 'Magenta' },
    { color: C.yellow, label: 'Y', name: 'Yellow' },
    { color: C.keyBlack, label: 'K', name: 'Key' },
  ]

  return (
    <div
      className="flex flex-col gap-0 absolute inset-0 opacity-25"
      style={{ pointerEvents: 'none' }}
    >
      {strips.map((s, i) => (
        <div
          key={s.label}
          className="flex-1 relative overflow-hidden"
          style={{
            backgroundColor: s.color,
            marginTop: i > 0 ? '-4px' : 0,
            mixBlendMode: 'screen',
          }}
        />
      ))}
      <style>{`
        @keyframes strip-slide {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

function RegistrationMarks() {
  const markStyle: React.CSSProperties = {
    position: 'absolute',
    width: 24,
    height: 24,
    opacity: 0.3,
  }
  const svgMark = (
    <svg viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="1">
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="0" x2="12" y2="24" />
      <line x1="0" y1="12" x2="24" y2="12" />
    </svg>
  )
  return (
    <>
      <div style={{ ...markStyle, top: 80, left: 24 }}>{svgMark}</div>
      <div style={{ ...markStyle, top: 80, right: 24 }}>{svgMark}</div>
      <div style={{ ...markStyle, bottom: 24, left: 24 }}>{svgMark}</div>
      <div style={{ ...markStyle, bottom: 24, right: 24 }}>{svgMark}</div>
    </>
  )
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `${C.ink}f0`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.white}11`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* CMYK logo mark */}
          <div className="flex gap-0.5">
            {[C.cyan, C.magenta, C.yellow, C.white].map((col, i) => (
              <div key={i} style={{ width: 8, height: 20, backgroundColor: col, borderRadius: 1, opacity: i === 3 ? 0.6 : 1 }} />
            ))}
          </div>
          <span className="text-sm font-bold tracking-widest uppercase" style={S.white}>ChromaPress</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Products', 'Upload', 'Finishes', 'Bulk'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-widest uppercase transition-colors duration-300"
              style={S.midGray}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.midGray)}
            >
              {item}
            </a>
          ))}
          <a
            href="#quote"
            className="px-6 py-2.5 text-xs tracking-widest uppercase font-bold rounded transition-all duration-300"
            style={{ backgroundColor: C.cyan, color: C.ink }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PrintOSDemoPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.cyan }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — CMYK Creative
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: C.ink, paddingTop: '5rem' }}
      >
        {/* CMYK colour strips — background layer */}
        <div className="absolute inset-0 flex flex-col pointer-events-none" style={{ opacity: 0.12 }}>
          {[C.cyan, C.magenta, C.yellow].map((col, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: col }} />
          ))}
        </div>

        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />

        <RegistrationMarks />

        {/* CMYK label strips at top */}
        <div className="absolute top-[5rem] left-0 right-0 flex h-1.5 pointer-events-none">
          <div className="flex-1" style={{ backgroundColor: C.cyan }} />
          <div className="flex-1" style={{ backgroundColor: C.magenta }} />
          <div className="flex-1" style={{ backgroundColor: C.yellow }} />
          <div className="flex-1" style={{ backgroundColor: C.white, opacity: 0.3 }} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 stagger-children">
          {/* CMYK pill badges */}
          <div className="reveal-up flex flex-wrap gap-2 mb-10">
            {[
              { label: 'C', name: 'Cyan', bg: C.cyan },
              { label: 'M', name: 'Magenta', bg: C.magenta },
              { label: 'Y', name: 'Yellow', bg: C.yellow },
              { label: 'K', name: 'Key', bg: C.white },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: `${c.bg}22`,
                  border: `1px solid ${c.bg}44`,
                  color: c.bg,
                }}
              >
                <span>{c.label}</span>
                <span className="font-normal opacity-70">{c.name}</span>
              </div>
            ))}
          </div>

          <h1 className="mb-8">
            <span
              className="reveal-clip-up block font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: C.white }}
            >
              Print That
            </span>
            <span
              className="reveal-clip-up block font-black leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                animationDelay: '0.1s',
                WebkitTextStroke: `2px ${C.cyan}`,
                color: 'transparent',
              }}
            >
              Makes an
            </span>
            <span
              className="reveal-clip-up block font-black leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                color: C.cyan,
                animationDelay: '0.2s',
              }}
            >
              Impact.
            </span>
          </h1>

          <p
            className="reveal-up text-lg font-light leading-relaxed max-w-xl mb-12"
            style={{ color: C.midGray, animationDelay: '0.35s' }}
          >
            From 50 business cards to 50,000 brochures. Digital and litho printing, premium finishes, fast turnaround. London&rsquo;s finest print studio since 2003.
          </p>

          {/* Stats */}
          <div className="reveal-up flex flex-wrap gap-10 mb-12" style={{ animationDelay: '0.45s' }}>
            {[
              { value: '48hr', label: 'Express Turnaround', col: C.cyan },
              { value: '20+', label: 'Finish Options', col: C.magenta },
              { value: '99%', label: 'Colour Accuracy', col: C.yellow },
              { value: '4.9★', label: 'Average Rating', col: C.white },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black mb-1" style={{ color: s.col }}>{s.value}</div>
                <div className="text-xs tracking-widest uppercase" style={S.midGray}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
            <a
              href="#products"
              className="px-8 py-4 text-sm font-black tracking-widest uppercase rounded transition-all duration-300"
              style={{ backgroundColor: C.cyan, color: C.ink }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              View Products &rarr;
            </a>
            <a
              href="#quote"
              className="px-8 py-4 text-sm font-bold tracking-widest uppercase rounded border transition-all duration-300"
              style={{ borderColor: `${C.white}33`, color: C.white }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${C.white}11`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Upload Artwork
            </a>
          </div>
        </div>

        {/* Bottom CMYK gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${C.ink})` }}
        />
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-4 overflow-hidden" style={{ backgroundColor: C.inkMid, borderTop: `1px solid ${C.white}0a` }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Business Cards', 'Flyers', 'Brochures', 'Posters', 'Banners', 'Packaging', 'Booklets', 'Stickers', 'Letterheads', 'Exhibition Stands'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-light tracking-widest uppercase" style={S.midGray}>{item}</span>
                  <span style={{ color: C.cyan, opacity: 0.5 }}>+</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRODUCTS
          ═══════════════════════════════════════ */}
      <section id="products" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionSoft}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.cyan}>What We Print</p>
            <h2 className="text-4xl md:text-5xl font-black" style={S.white}>Our Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {[
              {
                name: 'Business Cards',
                from: '£25',
                desc: 'Single or double-sided. Standard, square, or die-cut. Choose from 20+ finishes.',
                img: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&h=400&fit=crop',
                accent: C.cyan,
              },
              {
                name: 'Flyers & Leaflets',
                from: '£35',
                desc: 'A6 to A4. Single or double-sided. Gloss, matte, or uncoated. Fast dispatch.',
                img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop',
                accent: C.magenta,
              },
              {
                name: 'Brochures',
                from: '£75',
                desc: 'Saddle-stitched or perfect-bound. Up to 64 pages. FSC-certified stock available.',
                img: 'https://images.unsplash.com/photo-1531525727893-e0fd38cdde44?w=600&h=400&fit=crop',
                accent: C.yellow,
              },
              {
                name: 'Posters',
                from: '£15',
                desc: 'A2 to A0. Heavyweight 170gsm silk. Vibrant colour, sharp detail.',
                img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
                accent: C.cyan,
              },
              {
                name: 'Banners & Displays',
                from: '£45',
                desc: 'Roller banners, PVC banners, pull-up stands. Includes carry bag.',
                img: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=400&fit=crop',
                accent: C.magenta,
              },
              {
                name: 'Packaging',
                from: 'Custom',
                desc: 'Bespoke boxes, bags, and wrapping. Structural design service included.',
                img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&h=400&fit=crop',
                accent: C.yellow,
              },
            ].map((product, i) => (
              <div
                key={product.name}
                className="reveal-up relative rounded-xl overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${C.inkSoft}ee 0%, transparent 60%)` }}
                  />
                </div>
                <div
                  className="p-6"
                  style={{ backgroundColor: C.inkMid, borderTop: `2px solid ${product.accent}` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-black" style={S.white}>{product.name}</h3>
                    <span className="text-sm font-bold" style={{ color: product.accent }}>from {product.from}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={S.midGray}>{product.desc}</p>
                  <a
                    href="#quote"
                    className="text-xs tracking-widest uppercase font-bold transition-colors duration-300"
                    style={{ color: product.accent }}
                  >
                    Order Now &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          UPLOAD & ORDER PROCESS
          ═══════════════════════════════════════ */}
      <section id="upload" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionInk}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.magenta}>How to Order</p>
            <h2 className="text-4xl md:text-5xl font-black" style={S.white}>Upload. Proof. Print. Deliver.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 stagger-children">
            {[
              { step: '01', icon: '📁', title: 'Upload Artwork', desc: 'PDF, AI, or PSD. 300dpi, CMYK, 3mm bleed. Our prepress team checks every file.', col: C.cyan },
              { step: '02', icon: '🔍', title: 'Digital Proof', desc: 'Receive your soft proof within 2 hours. Approve or request changes — unlimited revisions.', col: C.magenta },
              { step: '03', icon: '🖨️', title: 'We Print', desc: 'CMYK lithographic or digital printing on certified presses. Colour guaranteed to ΔE < 2.', col: C.yellow },
              { step: '04', icon: '🚀', title: 'Fast Delivery', desc: 'Nationwide next-day delivery. 48-hour express or 3-5 day standard. Free on orders over £150.', col: C.white },
            ].map((s, i) => (
              <div
                key={s.step}
                className="reveal-up rounded-xl p-7 relative"
                style={{
                  backgroundColor: C.inkMid,
                  border: `1px solid ${s.col}22`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="text-xs font-black tracking-widest mb-4 absolute top-5 right-5"
                  style={{ color: `${s.col}44` }}
                >
                  {s.step}
                </div>
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="text-base font-black mb-3" style={{ color: s.col }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={S.midGray}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PAPER & FINISHES
          ═══════════════════════════════════════ */}
      <section id="finishes" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionSoft}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-xs tracking-widest uppercase mb-3" style={S.cyan}>Finishes & Stocks</p>
              <h2 className="text-4xl md:text-5xl font-black mb-8" style={S.white}>
                20+ Finishes.<br />Premium Stock.
              </h2>
              <p className="text-base font-light leading-relaxed mb-10" style={S.midGray}>
                The finish is what separates good print from great print. We stock everything from 90gsm uncoated through to 600gsm triple-thick, with laminate, spot UV, foil, and embossing options.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Gloss Laminate', desc: 'High-shine, vivid colour' },
                  { name: 'Soft-Touch Matte', desc: 'Luxurious velvety feel' },
                  { name: 'Uncoated Natural', desc: 'Organic, writable surface' },
                  { name: 'FSC Recycled', desc: '100% post-consumer waste' },
                  { name: 'Spot UV Gloss', desc: 'Selective high-gloss areas' },
                  { name: 'Metallic Foil', desc: 'Gold, silver, rose gold' },
                ].map((finish) => (
                  <div
                    key={finish.name}
                    className="rounded-lg p-4"
                    style={{ backgroundColor: C.inkMid, border: `1px solid ${C.white}0a` }}
                  >
                    <div className="text-sm font-bold mb-1" style={S.white}>{finish.name}</div>
                    <div className="text-xs" style={S.midGray}>{finish.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=900&fit=crop"
                alt="Premium print finishes and paper stocks"
                className="w-full rounded-2xl"
                style={{ maxHeight: 600, objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BULK DISCOUNTS
          ═══════════════════════════════════════ */}
      <section id="bulk" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionInk}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal-up mb-12">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.yellow}>Volume Pricing</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={S.white}>The More You Print,<br />The More You Save</h2>
            <p className="text-base font-light" style={S.midGray}>Automatic bulk discounts applied at checkout. No minimum contract. No hidden fees.</p>
          </div>
          <div className="reveal-up grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { qty: '1–499', disc: '0%', label: 'Standard', col: C.midGray },
              { qty: '500–999', disc: '15%', label: 'Saver', col: C.cyan },
              { qty: '1,000–4,999', disc: '25%', label: 'Business', col: C.magenta },
              { qty: '5,000+', disc: '40%', label: 'Enterprise', col: C.yellow },
            ].map((tier) => (
              <div
                key={tier.qty}
                className="rounded-xl p-6"
                style={{ backgroundColor: C.inkMid, border: `1px solid ${tier.col}33` }}
              >
                <div className="text-3xl font-black mb-2" style={{ color: tier.col }}>{tier.disc}</div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={S.white}>{tier.label}</div>
                <div className="text-xs" style={S.midGray}>{tier.qty} units</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden grain" style={S.sectionSoft}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-widest uppercase mb-3" style={S.cyan}>Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black" style={S.white}>Loved by 10,000+<br />Businesses</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionInk}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.magenta}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black" style={S.white}>Got Questions?</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          QUOTE / CONTACT
          ═══════════════════════════════════════ */}
      <section id="quote" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionSoft}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.cyan}>Order or Quote</p>
            <h2 className="text-4xl md:text-5xl font-black mb-8" style={S.white}>
              Ready to Print?<br />Let&rsquo;s Talk.
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.midGray}>
              Book a call with our print specialists, or upload your artwork and get an instant quote online. Turnaround starts from the moment you approve your proof.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Phone', value: '+44 20 7890 1234' },
                { label: 'Email', value: 'orders@chromapress.com' },
                { label: 'Studio', value: '28 Whitechapel Road, London E1 1EW' },
                { label: 'Hours', value: 'Mon–Fri 08:00–18:00 · Sat 09:00–14:00' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[32px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.cyan}55` }} />
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-0.5" style={S.cyan}>{info.label}</p>
                    <p className="text-sm font-light" style={S.white}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 87, label: 'orders placed today' }}
              vertical="printos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 800)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442078901234" message="Hi! I'd like a quote from ChromaPress." vertical="printos" />
    </div>
  )
}

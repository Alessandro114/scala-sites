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
  navy: '#1a1a2e',
  navyMid: '#16213e',
  navyLight: '#222244',
  chalk: '#f5f5f0',
  chalkDim: '#d8d8d0',
  gold: '#c9a84c',
  goldLight: '#d4b86a',
  burgundy: '#722f37',
  burgundyLight: '#8b3a44',
  muted: '#8888aa',
  dimmed: '#555577',
} as const

const siteConfig: SiteConfig = {
  name: 'Ashworth & Sons',
  description: 'Bespoke tailoring on Savile Row since 1923',
  url: 'https://ashworthandsons.example.com',
  locale: 'en',
  vertical: 'tailoros',
  theme: 'classic',
  branding: { primaryColor: C.navy, accentColor: C.gold },
  contact: {
    phone: '+44 20 7946 0881',
    email: 'fitting@ashworthandsons.example.com',
    whatsapp: '+442079460881',
    address: '34 Savile Row, Mayfair, London W1S 3PT',
    coordinates: { lat: 51.5112, lng: -0.1407 },
  },
  social: { instagram: 'ashworthandsons', facebook: 'https://facebook.com/ashworthandsons' },
  seo: {
    title: 'Ashworth & Sons — Bespoke, By Definition.',
    description: 'Savile Row bespoke suits, made-to-measure and alterations since 1923.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  { name: 'Bespoke Suit', price: 'From £1,200', lead: '8–12 weeks', desc: 'Full canvas construction. Three fittings. Every stitch placed for your body alone.', featured: true },
  { name: 'Made-to-Measure', price: 'From £600', lead: '4–6 weeks', desc: 'Start from a proven block, adjusted to your measurements. Excellent value, exceptional result.' },
  { name: 'Alterations', price: 'From £25', lead: '3–7 days', desc: 'Sleeve shortening, waist suppression, relining and full bespoke conversion of off-the-peg.' },
  { name: 'Bespoke Shirts', price: 'From £180', lead: '3–4 weeks', desc: 'Sea Island cotton, Egyptian poplin. Collar, cuff and monogram to your specification.' },
  { name: 'Wedding Attire', price: 'From £1,400', lead: '10–14 weeks', desc: 'Morning dress, lounge suit or black tie. Coordinated groomsmen packages available.' },
  { name: 'Corporate Programme', price: 'POA', lead: 'Flexible', desc: 'Wardrobe consultation and supply for executives. House account with dedicated consultant.' },
]

const fabrics = [
  {
    name: 'British Wool',
    origin: 'Huddersfield, England',
    desc: 'Our cornerstone. Superfine 130s–160s from renowned mills. Drapes flawlessly, breathes naturally.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  },
  {
    name: 'Italian Cashmere',
    origin: 'Biella, Italy',
    desc: 'Loro Piana and Zegna sources. Impossibly soft, effortlessly warm. Reserved for our finest commissions.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
  },
  {
    name: 'Irish Linen',
    origin: 'Belfast, Ireland',
    desc: 'Pure European flax. Crisp, cool and characterful. The summer suit fabric that improves with wear.',
    img: 'https://images.unsplash.com/photo-1528460033278-a6ba57020470?w=400&h=300&fit=crop',
  },
  {
    name: 'Dupion Silk',
    origin: 'Como, Italy',
    desc: 'Slubbed silk for occasion wear. Lustrous surface, remarkable structure. Wedding and black tie specialist.',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
  },
]

const processSteps = [
  { step: '01', title: 'Measure', desc: 'Over 50 body measurements taken by hand. We record your posture, stance and shape — not just dimensions.' },
  { step: '02', title: 'Select', desc: 'Choose your cloth from our archive of 2,000+ swatches. Our consultant guides you through weight, weave and occasion.' },
  { step: '03', title: 'Fit', desc: 'Bespoke clients attend three fittings. Each refines the pattern to your body\'s subtleties.' },
  { step: '04', title: 'Perfect', desc: 'The finished garment. Yours to own, forever. We retain your pattern — return any time for a second commission.' },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop', label: 'Grey Chalk Stripe', large: true },
  { src: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=400&fit=crop', label: 'Navy Herringbone' },
  { src: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=600&h=400&fit=crop', label: 'Ivory Wedding' },
  { src: 'https://images.unsplash.com/photo-1598808503746-f34cfb96fef9?w=600&h=800&fit=crop', label: 'Black Tie', large: true },
  { src: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=600&h=400&fit=crop', label: 'Summer Linen' },
  { src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=400&fit=crop', label: 'Cashmere Overcoat' },
]

const reviews: Review[] = [
  { id: '1', author: 'Edward F.', rating: 5, text: "My first bespoke commission from Ashworth was a charcoal flannel suit. Six years and dozens of compliments later, it still fits perfectly. The pattern retention service alone is worth every penny.", date: '2026-07-14', source: 'google', verified: true },
  { id: '2', author: 'Jonathan C.', rating: 5, text: "I wore an Ashworth morning coat to my wedding. Every photograph, every memory is sharpened by how I felt in that suit. Impeccably made, and the team guided me through every decision.", date: '2026-07-28', source: 'google', verified: true },
  { id: '3', author: 'Marcus T.', rating: 5, text: "The made-to-measure programme is remarkable value. Three weeks, two fittings, a suit that looks bespoke. My tailor caught a shoulder asymmetry that no off-the-peg suit has ever addressed.", date: '2026-08-03', source: 'trustpilot', verified: true },
  { id: '4', author: 'Dominic A.', rating: 5, text: "Brought in a beloved RTW jacket for conversion. They essentially rebuilt it as bespoke. The waist, the shoulders, the lining — all corrected. It now looks made for me. Because it is.", date: '2026-07-19', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'What is the difference between bespoke and made-to-measure?', answer: 'A bespoke suit begins with a pattern cut from scratch for your body alone. Made-to-measure starts from a proven block and adjusts to your measurements. Bespoke involves more fittings, more handwork and a more precise result. Both are made here in our Savile Row workrooms.' },
  { question: 'How long does a bespoke suit take?', answer: 'We ask for 8–12 weeks for a full bespoke commission, including three fittings. Made-to-measure is typically 4–6 weeks. We do not rush the process — it would compromise the result.' },
  { question: 'What should I bring to my first appointment?', answer: 'Nothing is required. Come as you are, in clothes you are comfortable in. If you have a reference point — a suit you love the cut of, or photographs — bring those. But many of our clients arrive with only an idea.' },
  { question: 'Do you handle alterations on suits not made by you?', answer: 'Yes, we offer alterations on all garments. We will assess the construction before confirming what is possible. Complex alterations — such as shoulder reconstruction — are charged accordingly.' },
  { question: 'Do you offer a wedding party service?', answer: 'Yes, we coordinate multiple commissions for wedding parties. Grooms receive a dedicated consultant and we handle scheduling across multiple clients to ensure everyone is fitted properly before the date.' },
  { question: 'Can I commission a suit as a gift?', answer: 'Yes — a gift voucher for a consultation and commission is available in any value. We handle the presentation and can coordinate with the recipient directly.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '10:00', available: true, spotsLeft: 2 },
  { id: '2', date: today, time: '11:30', available: true, spotsLeft: 1 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 2 },
  { id: '4', date: today, time: '15:30', available: true, spotsLeft: 1 },
  { id: '5', date: today, time: '17:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Ashworth & Sons',
  description: 'Bespoke tailoring on Savile Row since 1923.',
  url: 'https://ashworthandsons.example.com',
  telephone: '+44 20 7946 0881',
  foundingDate: '1923',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '34 Savile Row, Mayfair',
    addressLocality: 'London',
    postalCode: 'W1S 3PT',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5112, longitude: -0.1407 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '167' },
  priceRange: '££££',
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
  page: { backgroundColor: C.navy, color: C.chalk } as React.CSSProperties,
  dark: { backgroundColor: C.navyMid } as React.CSSProperties,
  darker: { backgroundColor: C.navy } as React.CSSProperties,
  light: { backgroundColor: C.navyLight } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  chalk: { color: C.chalk } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  burgundy: { color: C.burgundy } as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.navy}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.gold}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="font-light tracking-[0.35em] text-xs uppercase" style={S.chalk}>Ashworth &amp; Sons</span>
          <span className="text-[9px] tracking-[0.4em] uppercase" style={S.gold}>Est. 1923 &middot; Savile Row</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Fabrics', 'Process', 'Gallery'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.chalk)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.navy }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
          >
            Book Fitting
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  MEASURING TAPE CSS COMPONENT
// ═══════════════════════════════════════════════
function MeasuringTape() {
  const ticks = Array.from({ length: 40 }, (_, i) => i)
  return (
    <div style={{ position: 'relative', height: '40px', backgroundColor: C.chalkDim, borderRadius: '4px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.3)', flexShrink: 0 }}>
      {/* Tape body */}
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%', paddingBottom: '4px', paddingLeft: '8px' }}>
        {ticks.map((i) => (
          <div key={i} style={{
            width: '12px',
            height: i % 5 === 0 ? '14px' : '8px',
            borderLeft: `1px solid ${C.navy}88`,
            flexShrink: 0,
            position: 'relative',
          }}>
            {i % 10 === 0 && (
              <span style={{ position: 'absolute', top: '-14px', left: '-3px', fontSize: '7px', color: C.navy, fontWeight: 600, whiteSpace: 'nowrap' }}>
                {i}
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Metallic tip */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '16px', backgroundColor: C.gold, opacity: 0.8 }} />
    </div>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function TailorOSDemoPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.gold }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Bespoke Luxury
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Pinstripe pattern CSS background */}
        <div className="absolute inset-0" style={{
          backgroundColor: C.navy,
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 38px,
            ${C.chalk}06 38px,
            ${C.chalk}06 40px
          )`,
        }} />
        {/* Secondary diagonal weave hint */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent 0px,
            transparent 18px,
            ${C.chalk}02 18px,
            ${C.chalk}02 20px
          )`,
        }} />
        {/* Gold glow bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none" style={{
          background: `linear-gradient(to top, ${C.gold}08, transparent)`,
        }} />
        {/* Burgundy accent blob */}
        <div className="absolute top-1/4 right-[5%] w-[500px] h-[500px] pointer-events-none" style={{
          background: `radial-gradient(circle, ${C.burgundy}12 0%, transparent 65%)`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 w-full">
          {/* Measuring tape decorative element */}
          <div className="mb-12 hidden md:block">
            <MeasuringTape />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="stagger-children">
              {/* Savile Row badge */}
              <div className="reveal-clip-up inline-flex items-center gap-3 mb-8 px-5 py-2.5"
                style={{ border: `1px solid ${C.gold}55`, backgroundColor: `${C.gold}0a` }}>
                <span className="text-[10px] tracking-[0.5em] uppercase" style={S.gold}>Savile Row, London W1</span>
              </div>

              <h1 className="mb-8">
                {['Bespoke,', 'By Definition.'].map((line, i) => (
                  <span key={line}
                    className="reveal-clip-up block font-light leading-[0.9]"
                    style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', color: C.chalk, animationDelay: `${i * 0.18}s`, fontFamily: 'Georgia, serif' }}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              {/* Fabric swatch dots decorative */}
              <div className="reveal-up flex items-center gap-3 mb-8" style={{ animationDelay: '0.35s' }}>
                {[C.navy, '#2c3e50', '#4a4a5a', C.burgundy, C.gold, '#8b8060', C.chalk].map((colour, i) => (
                  <div key={i} style={{ width: i === 3 ? '28px' : '20px', height: i === 3 ? '28px' : '20px', borderRadius: '50%', backgroundColor: colour, border: `2px solid ${C.chalk}22`, transition: 'transform 0.3s', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                ))}
                <span className="text-xs tracking-widest uppercase ml-2" style={S.muted}>2,000+ cloths</span>
              </div>

              <p className="reveal-up text-base font-light leading-relaxed max-w-md mb-10" style={{ ...S.muted, animationDelay: '0.45s' }}>
                A hundred years of craft on Savile Row. We make one garment at a time, by hand, for one person. Yours.
              </p>

              <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
                <a href="#booking"
                  className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
                  style={{ backgroundColor: C.gold, color: C.navy }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goldLight)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.gold)}
                >
                  Book a Fitting
                </a>
                <a href="#services"
                  className="border px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
                  style={{ borderColor: `${C.chalk}33`, color: C.muted }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${C.chalk}66`; e.currentTarget.style.color = C.chalk }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.chalk}33`; e.currentTarget.style.color = C.muted }}
                >
                  Our Services
                </a>
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="reveal-right image-reveal rounded-xl overflow-hidden hidden md:block" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1100&fit=crop"
                alt="Bespoke suit by Ashworth & Sons"
                className="w-full h-[650px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.gold }}>
        <div className="marquee">
          {[0, 1].map((d) => (
            <div key={d} className="flex items-center gap-8 px-4">
              {['Bespoke Suits', 'Made-to-Measure', 'Alterations', 'Bespoke Shirts', 'Wedding Attire', 'British Wool', 'Italian Cashmere', 'Savile Row'].map((item, i) => (
                <span key={`${d}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-medium tracking-[0.2em] uppercase" style={{ color: C.navy }}>{item}</span>
                  <span style={{ color: `${C.navy}55` }}>&#x2726;</span>
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
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Services</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.chalk}>What We Make</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {services.map((svc, i) => (
              <div key={svc.name}
                className="reveal-up p-8 rounded-xl border transition-all duration-300 group relative"
                style={{
                  backgroundColor: C.navyLight,
                  borderColor: svc.featured ? `${C.gold}55` : `${C.chalk}0a`,
                  animationDelay: `${i * 0.07}s`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${C.gold}44`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = svc.featured ? `${C.gold}55` : `${C.chalk}0a`)}
              >
                {svc.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 text-[10px] tracking-[0.3em] uppercase rounded-full"
                    style={{ backgroundColor: C.gold, color: C.navy }}>
                    Signature
                  </div>
                )}
                <h3 className="text-lg font-light mb-1" style={S.chalk}>{svc.name}</h3>
                <p className="text-xl font-light mb-1" style={S.gold}>{svc.price}</p>
                <p className="text-xs tracking-widest uppercase mb-4" style={S.muted}>Lead time: {svc.lead}</p>
                <p className="text-sm font-light leading-relaxed" style={S.muted}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FABRICS — 4 Cards
          ═══════════════════════════════════════ */}
      <section id="fabrics" className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>The Cloth</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.chalk}>Our Fabrics</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {fabrics.map((f, i) => (
              <div key={f.name} className="reveal-up group" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="image-reveal rounded-xl overflow-hidden mb-4">
                  <img src={f.img} alt={f.name} className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                </div>
                <p className="text-[10px] tracking-[0.4em] uppercase mb-1" style={S.gold}>{f.origin}</p>
                <h3 className="text-base font-light mb-2" style={S.chalk}>{f.name}</h3>
                <p className="text-xs font-light leading-relaxed" style={S.muted}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — 4 Steps
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>The Method</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.chalk}>How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {processSteps.map((p, i) => (
              <div key={p.step} className="reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-extralight mb-6" style={{ ...S.gold, fontFamily: 'Georgia, serif' }}>{p.step}</div>
                <h3 className="text-base tracking-[0.1em] uppercase mb-3" style={S.chalk}>{p.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.muted}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MASTER TAILOR — Profile
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal-left image-reveal rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
              alt="William Ashworth, Master Tailor"
              className="w-full h-[500px] md:h-[680px] object-cover"
            />
          </div>
          <div className="reveal-right">
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={S.gold}>The Master</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={{ ...S.chalk, fontFamily: 'Georgia, serif' }}>William Ashworth IV</h2>
            <blockquote className="text-xl md:text-2xl font-extralight italic leading-snug mb-8 pl-6" style={{ color: C.gold, borderLeft: `2px solid ${C.gold}44` }}>
              &ldquo;A suit is a conversation between the cloth, the maker and the man who will wear it for thirty years.&rdquo;
            </blockquote>
            <p className="text-base font-light leading-relaxed mb-6" style={S.muted}>
              Fourth-generation master tailor. Trained under his grandfather on this street. William cut his first suit at eighteen and has made over four thousand since. He knows the Row&rsquo;s history because he lived it.
            </p>
            <p className="text-base font-light leading-relaxed" style={S.muted}>
              Every bespoke commission at Ashworth &amp; Sons is personally overseen by William. He meets every client, reviews every pattern, and approves every finished garment before it leaves the workroom.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY
          ═══════════════════════════════════════ */}
      <section id="gallery" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.chalk}>Recent Commissions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
            {gallery.map((img, i) => (
              <div key={i}
                className={`reveal-up image-reveal relative overflow-hidden rounded-xl group cursor-pointer ${img.large ? 'row-span-2' : ''}`}
                style={{ animationDelay: `${i * 0.08}s`, height: img.large ? undefined : '200px', minHeight: img.large ? '420px' : undefined }}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, ${C.navy}cc, transparent)` }}>
                  <span className="text-sm tracking-[0.15em] uppercase font-light" style={S.chalk}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Appointments</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.chalk}>Book Your Fitting</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              First appointments are unhurried. Allow 45 to 60 minutes. We will discuss your requirements, take measurements and guide you through cloth selection.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Hours', detail: 'Mon–Fri 09:00–18:00 | Sat 09:00–15:00 by appointment' },
                { label: 'Location', detail: '34 Savile Row, Mayfair, London W1S 3PT' },
                { label: 'First Visit', detail: 'Allow 45–60 minutes. No obligation.' },
                { label: 'Pattern Archive', detail: 'Retained for all bespoke clients, indefinitely.' },
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
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 34, label: 'fitting appointments this month' }} vertical="tailoros"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden grain" style={S.dark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>What Our Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.chalk}>Testimonials</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.chalk}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460881" message="Hello, I'd like to arrange a fitting appointment at Ashworth & Sons." vertical="tailoros" />
    </div>
  )
}

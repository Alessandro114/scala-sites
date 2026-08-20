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
  black: '#000000',
  nearBlack: '#080808',
  darkGrey: '#0f0f0f',
  grey: '#161616',
  gold: '#d4af37',
  goldLight: '#e0c050',
  diamond: '#f0f8ff',
  diamondDim: '#b8d0e8',
  roseGold: '#b76e79',
  roseGoldLight: '#c98090',
  muted: '#666666',
  dim: '#444444',
} as const

const siteConfig: SiteConfig = {
  name: 'Lumière Fine Jewellery',
  description: 'Handcrafted fine jewellery and bespoke commissions in Mayfair, London',
  url: 'https://lumiere-jewels.example.com',
  locale: 'en',
  vertical: 'jewelelos',
  theme: 'classic',
  branding: { primaryColor: C.black, accentColor: C.gold },
  contact: {
    phone: '+44 20 7946 0202',
    email: 'studio@lumiere-jewels.example.com',
    whatsapp: '+442079460202',
    address: '22 Bruton Street, Mayfair, London W1J 6QA',
    coordinates: { lat: 51.5117, lng: -0.1468 },
  },
  social: { instagram: 'lumiere_jewels', facebook: 'https://facebook.com/lumierejewels' },
  seo: {
    title: 'Lumière — Timeless Beauty, Crafted by Hand.',
    description: 'Handcrafted fine jewellery. Engagement rings, bespoke commissions. GIA certified.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const collections = [
  {
    name: 'Engagement Rings',
    range: 'From £2,500',
    desc: 'GIA-certified diamonds. Every stone hand-selected for cut, colour, clarity and carat.',
    img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop',
  },
  {
    name: 'Wedding Bands',
    range: 'From £800',
    desc: 'Matching or complementary bands. Yellow gold, white gold, platinum, rose gold.',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
  },
  {
    name: 'Necklaces',
    range: 'From £450',
    desc: 'Diamond solitaires, pearl drops, sapphire pendants. Worn close to the heart.',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
  },
  {
    name: 'Earrings',
    range: 'From £350',
    desc: 'Studs, drops and hoops. Everyday diamonds to occasion-wear statement pieces.',
    img: 'https://images.unsplash.com/photo-1635767798638-3665a0a107fc?w=600&h=400&fit=crop',
  },
  {
    name: 'Timepieces',
    range: 'From £3,500',
    desc: 'A curated selection of independent Swiss watchmakers. Diamond-set bezels available.',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
  },
  {
    name: 'Bespoke',
    range: 'From £1,200',
    desc: 'Your vision. Our craft. From sketch to finished piece. Every commission is unique.',
    img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop',
  },
]

const bespokeSteps = [
  { step: '01', title: 'Consultation', desc: 'Share your vision, stone preference and budget. We sketch initial concepts in our studio.' },
  { step: '02', title: 'Design', desc: 'Our designer creates detailed CAD renders and physical wax models for your approval.' },
  { step: '03', title: 'Crafting', desc: 'Master craftsmen hand-set each stone. Every joint soldered. Every surface polished by hand.' },
  { step: '04', title: 'Deliver', desc: 'Presented in a Lumière box with GIA certificate, care guide and lifetime cleaning service.' },
]

const materials = [
  { name: '18ct Yellow Gold', desc: 'Classic warmth. Hardwearing. The traditional choice for heirloom jewellery.' },
  { name: 'Platinum', desc: 'The rarest of metals. Naturally white, hypoallergenic, and the most durable setting.' },
  { name: 'Sterling Silver', desc: 'Accessible luxury. Works beautifully with coloured stones and contemporary design.' },
  { name: 'Diamonds', desc: 'GIA-graded only. We select for brilliance first. Every stone has a report.' },
]

const galleryPieces = [
  { src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop', label: 'Solitaire Oval Cut' },
  { src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop', label: 'Pavé Wedding Band' },
  { src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop', label: 'Sapphire Pendant', tall: true },
  { src: 'https://images.unsplash.com/photo-1635767798638-3665a0a107fc?w=600&h=600&fit=crop', label: 'Diamond Drops' },
  { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop', label: 'Rose Gold Bangle' },
  { src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop', label: 'Bespoke Ring', tall: true },
]

const reviews: Review[] = [
  { id: '1', author: 'Charlotte B.', rating: 5, text: "My engagement ring from Lumière is the most beautiful thing I own. They helped me find a 1.2ct oval that was exactly right — and under budget. The proposal was perfect because the ring was perfect.", date: '2026-07-10', source: 'google', verified: true },
  { id: '2', author: 'Michael S.', rating: 5, text: "I commissioned a necklace replicating a brooch my late mother owned. The team understood immediately how much this meant. The finished piece made my wife cry. In the best possible way.", date: '2026-07-25', source: 'google', verified: true },
  { id: '3', author: 'Rebecca L.', rating: 5, text: "The bespoke process was a pleasure — I was nervous but they made it completely comfortable. The CAD renders gave me total confidence before anything was made. 4 weeks later, perfection.", date: '2026-08-02', source: 'trustpilot', verified: true },
  { id: '4', author: 'Daniel P.', rating: 5, text: "Three generations of my family have bought jewellery here. My grandmother's eternity ring, my parents' wedding bands, now my own. Lumière is part of our family story.", date: '2026-07-18', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Are your diamonds GIA certified?', answer: 'Yes, all our diamonds above 0.30ct come with a GIA (Gemological Institute of America) grading report, provided with every purchase.' },
  { question: 'How long does a bespoke commission take?', answer: 'Typically 4–8 weeks from design approval. We do not rush the process — each piece is made entirely by hand in our Mayfair workshop.' },
  { question: 'Do you offer ring resizing?', answer: 'Yes, we offer resizing for all pieces made at Lumière, free of charge within the first year. Other jewellery is assessed case by case.' },
  { question: 'Can I bring in my own stone?', answer: 'Yes, we regularly work with client-supplied stones — family heirlooms, inherited diamonds and loose stones purchased elsewhere. We assess the stone and advise on the best setting.' },
  { question: 'Do you buy or part-exchange existing jewellery?', answer: 'We offer part-exchange against a new commission. Valuation is always free and without obligation.' },
  { question: 'What is the aftercare policy?', answer: 'All Lumière pieces come with a lifetime professional cleaning service. Annual checks are recommended and offered complimentary for the first five years.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '10:00', available: true, spotsLeft: 2 },
  { id: '2', date: today, time: '11:30', available: true, spotsLeft: 1 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 2 },
  { id: '4', date: today, time: '15:30', available: true, spotsLeft: 3 },
  { id: '5', date: today, time: '17:00', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  name: 'Lumière Fine Jewellery',
  description: 'Handcrafted fine jewellery and bespoke commissions in Mayfair, London.',
  url: 'https://lumiere-jewels.example.com',
  telephone: '+44 20 7946 0202',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 Bruton Street, Mayfair',
    addressLocality: 'London',
    postalCode: 'W1J 6QA',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5117, longitude: -0.1468 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '203' },
  priceRange: '££££',
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
// STYLES
// ─────────────────────────────────────────────
const S = {
  page: { backgroundColor: C.black, color: C.diamond } as React.CSSProperties,
  dark: { backgroundColor: C.darkGrey } as React.CSSProperties,
  darker: { backgroundColor: C.nearBlack } as React.CSSProperties,
  mid: { backgroundColor: C.grey } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  diamond: { color: C.diamond } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  rose: { color: C.roseGold } as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  DIAMOND SPARKLE CSS
// ═══════════════════════════════════════════════
function DiamondSparkles() {
  const sparkles = [
    { top: '15%', left: '8%', size: 3, delay: 0 },
    { top: '25%', left: '85%', size: 5, delay: 0.5 },
    { top: '55%', left: '5%', size: 4, delay: 1.2 },
    { top: '70%', left: '90%', size: 3, delay: 0.8 },
    { top: '40%', left: '92%', size: 6, delay: 1.8 },
    { top: '80%', left: '15%', size: 3, delay: 0.3 },
    { top: '10%', left: '60%', size: 4, delay: 1.5 },
    { top: '60%', left: '50%', size: 3, delay: 2.1 },
    { top: '35%', left: '20%', size: 2, delay: 0.7 },
    { top: '90%', left: '70%', size: 5, delay: 1.1 },
    { top: '20%', left: '45%', size: 3, delay: 2.4 },
    { top: '75%', left: '40%', size: 4, delay: 0.6 },
  ]
  return (
    <>
      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50%       { opacity: 1; transform: scale(1); }
        }
        @keyframes gemRotate {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(360deg); }
        }
      `}</style>
      {sparkles.map((s, i) => (
        <div key={i} className="absolute pointer-events-none" style={{
          top: s.top, left: s.left,
          animation: `sparkle ${2 + s.delay}s ease-in-out infinite`,
          animationDelay: `${s.delay}s`,
        }}>
          {/* Star burst using box-shadow */}
          <div style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: '50%',
            backgroundColor: C.diamond,
            boxShadow: `0 0 ${s.size * 3}px ${C.diamond}, 0 0 ${s.size * 6}px ${C.diamond}88, ${s.size * 3}px 0 ${s.size}px ${C.gold}44, -${s.size * 3}px 0 ${s.size}px ${C.gold}44, 0 ${s.size * 3}px ${s.size}px ${C.diamond}44, 0 -${s.size * 3}px ${s.size}px ${C.diamond}44`,
          }} />
        </div>
      ))}
    </>
  )
}

// ═══════════════════════════════════════════════
//  ROTATING RING ICON
// ═══════════════════════════════════════════════
function RotatingRing() {
  return (
    <div style={{ perspective: '400px', width: '120px', height: '120px', flexShrink: 0 }}>
      <style>{`@keyframes ringRotate { from { transform: rotateY(0deg) rotateX(15deg); } to { transform: rotateY(360deg) rotateX(15deg); } }`}</style>
      <div style={{ width: '100%', height: '100%', animation: 'ringRotate 8s linear infinite', transformStyle: 'preserve-3d' }}>
        <svg viewBox="0 0 120 120" width="120" height="120" fill="none">
          <ellipse cx="60" cy="60" rx="50" ry="18" stroke={C.gold} strokeWidth="8" fill="none" opacity="0.9" />
          <ellipse cx="60" cy="60" rx="50" ry="18" stroke={C.diamond} strokeWidth="2" fill="none" opacity="0.4" />
          {/* Diamond on top */}
          <polygon points="60,18 70,32 60,28 50,32" fill={C.diamond} opacity="0.95" />
          <polygon points="60,28 70,32 60,38 50,32" fill={C.diamondDim} opacity="0.7" />
          <line x1="60" y1="18" x2="70" y2="32" stroke={C.gold} strokeWidth="0.5" />
          <line x1="60" y1="18" x2="50" y2="32" stroke={C.gold} strokeWidth="0.5" />
          {/* Sparkle */}
          <circle cx="60" cy="18" r="3" fill={C.diamond} opacity="0.9" />
        </svg>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.black}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.gold}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="font-light tracking-[0.4em] text-sm" style={S.diamond}>LUMIÈRE</span>
          <span className="text-[9px] tracking-[0.35em] uppercase" style={S.gold}>Fine Jewellery &middot; Mayfair</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Collections', 'Bespoke', 'Gallery', 'Booking'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.diamond)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.black }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
          >
            Book Viewing
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function JewelOSDemoPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.gold }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Diamond Sparkle Luxe
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: C.black }} />

        {/* Diamond sparkle field */}
        <DiamondSparkles />

        {/* Subtle gold radial glow centre */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse at 50% 50%, ${C.gold}08 0%, transparent 60%)`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl stagger-children">
              <p className="reveal-clip-up text-[10px] tracking-[0.6em] uppercase mb-8" style={S.gold}>
                Mayfair, London &middot; Since 1961
              </p>

              <h1 className="mb-10">
                {['Timeless Beauty,', 'Crafted by Hand.'].map((line, i) => (
                  <span key={line}
                    className="reveal-clip-up block font-extralight leading-[0.92]"
                    style={{
                      fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                      color: i === 0 ? C.diamond : C.gold,
                      fontFamily: 'Georgia, serif',
                      animationDelay: `${i * 0.2}s`,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p className="reveal-up text-base font-light leading-relaxed max-w-xl mb-12" style={{ ...S.muted, animationDelay: '0.4s' }}>
                Over sixty years of handcrafting pieces that carry meaning. Engagement rings, heirlooms, bespoke commissions. Every stone hand-selected. Every setting made in our Mayfair workshop.
              </p>

              <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
                <a href="#booking"
                  className="border px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
                  style={{ borderColor: C.gold, color: C.gold }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.black }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
                >
                  Book a Viewing
                </a>
                <a href="#collections"
                  className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
                  style={S.muted}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.diamond)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
                >
                  Explore Collections
                </a>
              </div>
            </div>

            {/* Rotating ring icon */}
            <div className="reveal-up hidden md:flex flex-col items-center gap-6" style={{ animationDelay: '0.3s' }}>
              <RotatingRing />
              <div className="text-center">
                <p className="text-xs tracking-[0.3em] uppercase" style={S.gold}>GIA Certified</p>
                <p className="text-xs" style={S.muted}>Every stone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom edge gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: `linear-gradient(to top, ${C.darkGrey}, transparent)` }} />
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.gold }}>
        <div className="marquee">
          {[0, 1].map((d) => (
            <div key={d} className="flex items-center gap-8 px-4">
              {['Engagement Rings', 'Wedding Bands', 'Bespoke Commissions', 'GIA Certified', 'Lifetime Care', 'Yellow Gold', 'Platinum', 'Rose Gold'].map((item, i) => (
                <span key={`${d}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-medium tracking-[0.2em] uppercase" style={{ color: C.black }}>{item}</span>
                  <span style={{ color: `${C.black}44` }}>&#10048;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COLLECTIONS — 6 Cards
          ═══════════════════════════════════════ */}
      <section id="collections" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Collections</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.diamond}>What We Create</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {collections.map((col, i) => (
              <div key={col.name} className="reveal-up group cursor-pointer" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="image-reveal rounded-xl overflow-hidden mb-4">
                  <Image src={col.img} alt={col.name} className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-[1.06]" width={1200} height={800} />
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-light" style={S.diamond}>{col.name}</h3>
                  <p className="text-sm font-light" style={S.gold}>{col.range}</p>
                </div>
                <p className="text-sm font-light leading-relaxed" style={S.muted}>{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BESPOKE — 4 Steps
          ═══════════════════════════════════════ */}
      <section id="bespoke" className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Bespoke Design</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.diamond}>Your Vision, Our Craft</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {bespokeSteps.map((s, i) => (
              <div key={s.step} className="reveal-up text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-light"
                  style={{ border: `1px solid ${C.gold}44`, color: C.gold, backgroundColor: `${C.gold}08` }}>
                  {s.step}
                </div>
                <h3 className="text-base font-light mb-3" style={S.diamond}>{s.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.muted}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CRAFTSMANSHIP STORY
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal-left image-reveal rounded-xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Lumière jewellery craftsmanship"
              className="w-full h-[550px] object-cover" width={1200} height={800} />
          </div>
          <div className="reveal-right">
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={S.gold}>Our Story</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={{ ...S.diamond, fontFamily: 'Georgia, serif' }}>
              Sixty Years of Craft
            </h2>
            <blockquote className="text-xl font-extralight italic leading-snug mb-8 pl-6" style={{ color: C.gold, borderLeft: `2px solid ${C.gold}44` }}>
              &ldquo;Every piece we make will outlive us. That responsibility shapes every decision.&rdquo;
            </blockquote>
            <p className="text-base font-light leading-relaxed mb-6" style={S.muted}>
              Founded in 1961 by master jeweller Henri Morel, Lumière has made pieces for three generations of the same families. We are small by design — we take on only what we can make perfectly.
            </p>
            <p className="text-base font-light leading-relaxed" style={S.muted}>
              Our workshop is in Mayfair. Every piece is made by hand, in-house. We do not outsource production. When you collect your jewellery, you hold the work of human hands who have spent their careers perfecting this.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MATERIALS — 4 Cards
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Materials</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.diamond}>What We Use</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {materials.map((m, i) => (
              <div key={m.name} className="reveal-up p-7 rounded-xl border text-center" style={{ borderColor: `${C.gold}22`, backgroundColor: C.grey, animationDelay: `${i * 0.08}s` }}>
                <div className="w-10 h-10 rounded-full mx-auto mb-4" style={{
                  background: i === 0 ? `linear-gradient(135deg, ${C.gold}, ${C.goldLight})` : i === 1 ? `linear-gradient(135deg, #e8e8e8, #c0c0c0)` : i === 2 ? `linear-gradient(135deg, #c0c0c0, #a8a8a8)` : `linear-gradient(135deg, ${C.diamond}, ${C.diamondDim})`,
                  boxShadow: `0 4px 16px rgba(212,175,55,0.3)`,
                }} />
                <h3 className="text-sm font-light mb-2" style={S.diamond}>{m.name}</h3>
                <p className="text-xs font-light leading-relaxed" style={S.muted}>{m.desc}</p>
              </div>
            ))}
          </div>
          {/* GIA badge */}
          <div className="mt-12 text-center reveal-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-xl border" style={{ borderColor: `${C.gold}44`, backgroundColor: `${C.gold}08` }}>
              <span className="text-2xl">&#10070;</span>
              <div className="text-left">
                <p className="text-sm font-light" style={S.diamond}>GIA Certified Diamonds</p>
                <p className="text-xs" style={S.muted}>All diamonds above 0.30ct carry a Gemological Institute of America grading report</p>
              </div>
            </div>
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
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.diamond}>Recent Pieces</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {galleryPieces.map((p, i) => (
              <div key={i}
                className={`reveal-up image-reveal relative overflow-hidden rounded-xl group cursor-pointer ${p.tall ? 'row-span-2' : ''}`}
                style={{ animationDelay: `${i * 0.08}s`, height: p.tall ? undefined : '240px', minHeight: p.tall ? '500px' : undefined }}
              >
                <Image src={p.src} alt={p.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" width={1200} height={800} />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, ${C.black}cc, transparent)` }}>
                  <span className="text-sm tracking-[0.15em] uppercase font-light" style={S.diamond}>{p.label}</span>
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
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.diamond}>Book a Private Viewing</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              All appointments are private and unhurried. No pressure, no targets. We enjoy helping people find the right piece — or create it.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Hours', detail: 'Mon–Sat 10:00–18:00 | Sundays by private appointment' },
                { label: 'Location', detail: '22 Bruton Street, Mayfair, London W1J 6QA' },
                { label: 'Duration', detail: 'Allow 45–60 minutes. Champagne provided.' },
                { label: 'After-Sales', detail: 'Lifetime cleaning, 5-year check-up service.' },
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
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 28, label: 'viewings booked this week' }} vertical="jewelelos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden grain" style={S.dark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Clients</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.diamond}>What They Say</h2>
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
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.diamond}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="JewelOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460202" message="Hello, I'd like to book a private viewing at Lumière." vertical="jewelelos" />
    </div>
  )
}

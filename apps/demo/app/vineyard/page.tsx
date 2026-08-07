'use client'

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem, BookingSlot } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE — Estate Luxury
// ─────────────────────────────────────────────
const C = {
  vine: '#4a1942',
  vineDark: '#2e0f28',
  vineLight: '#6b2d60',
  gold: '#c9a84c',
  goldLight: '#d4b86a',
  goldDim: '#a88830',
  parchment: '#f5ede1',
  parchmentDark: '#e8d9c0',
  forest: '#2d5016',
  forestLight: '#3d6b20',
  shadow: '#1a0a18',
  mist: '#9b8fa0',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Ashwood Estate Winery',
  description: 'Estate Wines, Crafted with Passion — Est. 1876',
  url: 'https://ashwoodwinery.example.com',
  locale: 'en',
  vertical: 'vineyardos',
  theme: 'luxury',
  branding: { primaryColor: C.vine, accentColor: C.gold },
  contact: {
    phone: '+44 1483 770 512',
    email: 'cellars@ashwoodwinery.co.uk',
    whatsapp: '+441483770512',
    address: 'Ashwood Estate, Shamley Green, Surrey GU5 0SX',
    coordinates: { lat: 51.2117, lng: -0.5428 },
  },
  social: {
    instagram: 'ashwoodwinery',
    facebook: 'https://facebook.com/ashwoodwinery',
  },
  seo: {
    title: 'Ashwood Estate Winery — Estate Wines Crafted with Passion Since 1876',
    description: 'Award-winning estate wines from our centuries-old Surrey vineyard.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const wineCategories = [
  {
    name: 'White',
    description: 'Crisp, aromatic whites from our Bacchus and Chardonnay blocks.',
    bottles: [
      { name: 'Estate Bacchus', vintage: '2024', price: '£18', notes: 'Elderflower, gooseberry, fresh herbs' },
      { name: 'Barrel-Fermented Chardonnay', vintage: '2022', price: '£26', notes: 'Toasted oak, brioche, citrus zest' },
    ],
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=500&h=380&fit=crop',
  },
  {
    name: 'Rosé',
    description: 'Elegant, pale rosés that define the English summer.',
    bottles: [
      { name: 'Ashwood Rosé', vintage: '2024', price: '£20', notes: 'Wild strawberry, rose water, brioche' },
      { name: 'Prestige Rosé', vintage: '2023', price: '£32', notes: 'Stone fruit, cream, toasted almond' },
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=380&fit=crop',
  },
  {
    name: 'Red',
    description: 'Rare but remarkable reds from our sheltered south-facing slope.',
    bottles: [
      { name: 'Estate Pinot Noir', vintage: '2021', price: '£35', notes: 'Cherry, autumn forest, silky tannins' },
      { name: 'Reserve Dornfelder', vintage: '2020', price: '£28', notes: 'Dark plum, chocolate, smooth finish' },
    ],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=380&fit=crop',
  },
  {
    name: 'Sparkling',
    description: 'Traditional method sparkling wines aged a minimum of 3 years.',
    bottles: [
      { name: 'Ashwood Brut NV', vintage: 'NV', price: '£32', notes: 'Green apple, brioche, fine persistent bubbles' },
      { name: 'Blanc de Blancs 2020', vintage: '2020', price: '£45', notes: 'Pure Chardonnay, citrus, toasted cream' },
    ],
    image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=380&fit=crop',
  },
  {
    name: 'Reserve',
    description: 'Our finest single-vineyard expressions, released in limited quantities.',
    bottles: [
      { name: 'The Ashwood Prestige', vintage: '2019', price: '£65', notes: 'Assemblage from best plots, 4yr on lees' },
      { name: 'Late Harvest Bacchus', vintage: '2023', price: '£38', notes: 'Honeyed, apricot, long golden finish (50cl)' },
    ],
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500&h=380&fit=crop',
  },
]

const experiences = [
  {
    name: 'Classic Tasting',
    price: '£25',
    duration: '90 min',
    description: 'A guided tasting of 6 estate wines with expert notes and food pairing suggestions. Perfect introduction.',
    includes: ['6 wine tasting', 'Artisan cheese board', 'Estate notes', 'Cellar walk'],
    image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=400&h=300&fit=crop',
  },
  {
    name: 'Premium Experience',
    price: '£45',
    duration: '2.5 hr',
    description: 'Extended tour of the vineyard and winery, exclusive Reserve tasting, and a three-course tasting lunch.',
    includes: ['10 wine tasting', 'Vineyard tour on foot', 'Reserve access', '3-course lunch'],
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop',
    popular: true,
  },
  {
    name: 'Sunset Tour',
    price: '£65',
    duration: '3 hr',
    description: 'Golden-hour walk through the vines with our winemaker, followed by a Reserve tasting as the sun sets.',
    includes: ['Winemaker-led tour', 'Sunset in the vines', 'Reserve & dessert wines', 'Charcuterie & cheese'],
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=450&fit=crop', label: 'The Estate' },
  { src: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=500&fit=crop', label: 'The Cellar', tall: true },
  { src: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=600&h=350&fit=crop', label: 'Private Tasting' },
  { src: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=400&fit=crop', label: 'Reserve Collection' },
  { src: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=400&fit=crop', label: 'The Harvest' },
  { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=500&fit=crop', label: 'The Winery', tall: true },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Catherine H.',
    rating: 5,
    text: "The Sunset Tour is one of the most magical evenings I've ever spent. Standing in the vines with the winemaker as the sun goes down, tasting wine straight from the barrel — unforgettable.",
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'James R.',
    rating: 5,
    text: 'The Blanc de Blancs is world class. I compared it blind against a Champagne at twice the price and our dinner guests preferred Ashwood. Remarkable.',
    date: '2026-07-15',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Sarah M.',
    rating: 5,
    text: "We joined the wine club two years ago and the quarterly shipments are a highlight. The Early Access release last autumn was absolutely stunning.",
    date: '2026-08-02',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '4',
    author: 'Tom B.',
    rating: 5,
    text: 'Held a private wine dinner in the barrel room for 14 guests — the team were incredible. Bespoke menu, exceptional wines. Everyone is still talking about it.',
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  { question: 'Do I need to book a tour in advance?', answer: 'Yes — all our tasting experiences require advance booking as spaces are limited. The Sunset Tour in particular books up weeks ahead in summer. Book online or call us directly.' },
  { question: 'Is the winery child-friendly?', answer: 'The grounds and vineyard walks are suitable for all ages. Children under 5 are free; over 5 we offer a grape juice tasting flight. Wellies recommended in autumn and winter.' },
  { question: 'Can I purchase wine to take home?', answer: 'Yes — our shop is open whenever the winery is. All wines are available by the bottle and by the case. Wine club members get 20% off all shop purchases.' },
  { question: 'Do you host private events and weddings?', answer: 'Yes. The Estate accommodates intimate private dinners (up to 30) in the barrel room, and our barn is licensed for weddings and civil ceremonies for up to 120 guests. Contact us for availability.' },
  { question: 'What is the Wine Club?', answer: 'Members receive 6 bottles of hand-picked wines every quarter (including pre-release wines unavailable to the public), free entry to two experiences per year, 20% shop discount, and invitations to members-only events.' },
  { question: 'How do I get to the Estate?', answer: 'We are in Shamley Green, Surrey, 8 miles south of Guildford. By train: Guildford station, then 20-min taxi. By car: A281 south, then B2128, signposted from the village green. Ample parking.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '11:00', available: true, spotsLeft: 8 },
  { id: '2', date: today, time: '14:00', available: true, spotsLeft: 6 },
  { id: '3', date: today, time: '16:30', available: true, spotsLeft: 10 },
  { id: '4', date: today, time: '18:00', available: true, spotsLeft: 4 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const vineyardJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ashwoodwinery.example.com',
  name: 'Ashwood Estate Winery',
  description: 'Award-winning estate winery in Surrey. Vineyard tours, tastings, wine club, and private events since 1876.',
  url: 'https://ashwoodwinery.example.com',
  telephone: '+44 1483 770 512',
  email: 'cellars@ashwoodwinery.co.uk',
  image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&h=630&fit=crop',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shamley Green',
    addressLocality: 'Surrey',
    postalCode: 'GU5 0SX',
    addressCountry: 'GB',
  },
  foundingDate: '1876',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '10:00', closes: '18:00' },
  ],
  priceRange: '£££',
  sameAs: ['https://instagram.com/ashwoodwinery', 'https://facebook.com/ashwoodwinery'],
}

const vineyardFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────

// Grape cluster CSS icon
function GrapeIcon({ size = 48, color = C.gold }: { size?: number; color?: string }) {
  const r = size * 0.1
  const positions = [
    [0.5, 0.12], [0.35, 0.28], [0.65, 0.28],
    [0.22, 0.44], [0.5, 0.44], [0.78, 0.44],
    [0.35, 0.62], [0.65, 0.62],
    [0.5, 0.78],
  ]
  return (
    <svg width={size} height={size} viewBox="0 0 1 1" fill="none">
      {/* Stem */}
      <line x1="0.5" y1="0.0" x2="0.5" y2="0.12" stroke={color} strokeWidth="0.06" strokeLinecap="round" />
      <line x1="0.5" y1="0.04" x2="0.65" y2="0.0" stroke={color} strokeWidth="0.04" strokeLinecap="round" />
      {/* Grapes */}
      {positions.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={color} opacity="0.85" />
      ))}
    </svg>
  )
}

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: `${C.shadow}ee`,
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.gold}22`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <GrapeIcon size={28} color={C.gold} />
          <div>
            <span
              className="font-light tracking-[0.25em] text-sm uppercase"
              style={{ color: C.gold, fontFamily: 'Georgia, serif' }}
            >
              Ashwood Estate
            </span>
            <span className="block text-[9px] tracking-[0.3em] uppercase" style={{ color: C.mist }}>
              Est. 1876 · Surrey
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {['Our Wines', 'Experiences', 'The Estate', 'Wine Club'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-light"
              style={{ color: C.mist }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.mist)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book-tour"
            className="border px-6 py-2 text-xs tracking-[0.2em] uppercase font-light transition-all duration-400"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.shadow }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
          >
            Book a Tour
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════
export default function VineyardPage() {
  return (
    <div style={{ backgroundColor: C.shadow, color: C.parchment }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vineyardJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vineyardFaqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Estate Luxury
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Full-bleed landscape photo */}
        <img
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600&h=1000&fit=crop&q=90"
          alt="Ashwood Estate vineyards in golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Deep purple overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${C.vineDark}88 0%, ${C.shadow}bb 50%, ${C.shadow} 100%)`,
          }}
        />

        {/* Vignette edges */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, transparent 40%, ${C.shadow}cc 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pb-24 pt-40">
          {/* Wine label style frame */}
          <div className="max-w-3xl">
            {/* Est. year */}
            <p
              className="text-xs tracking-[0.6em] uppercase mb-6 font-light"
              style={{ color: C.gold }}
            >
              Est. 1876 &nbsp;&middot;&nbsp; Surrey, England
            </p>

            {/* Grape icon */}
            <div className="mb-6">
              <GrapeIcon size={56} color={C.gold} />
            </div>

            {/* Headline */}
            <div
              className="relative mb-6 pb-6"
              style={{ borderBottom: `1px solid ${C.gold}30` }}
            >
              <h1
                className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-extralight"
                style={{ color: C.parchment, fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Estate Wines,<br />
                <em style={{ color: C.gold }}>Crafted</em><br />
                with Passion.
              </h1>
            </div>

            <p
              className="text-lg font-light leading-relaxed max-w-xl mb-10"
              style={{ color: `${C.parchment}99` }}
            >
              One hundred and fifty years of terroir knowledge, expressed in
              every bottle. Our wines speak of this particular soil, these slopes,
              this climate. No more, no less.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-12">
              {[
                { num: '1876', label: 'Year founded' },
                { num: '48', label: 'Acres planted' },
                { num: '12', label: 'Grape varieties' },
                { num: '82k', label: 'Bottles per year' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-light" style={{ color: C.gold }}>{s.num}</div>
                  <div className="text-xs tracking-wider uppercase mt-1" style={{ color: C.mist }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5">
              <a
                href="#book-tour"
                className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
                style={{ borderColor: C.gold, color: C.gold }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.shadow }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
              >
                Book a Tour
              </a>
              <a
                href="#our-wines"
                className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
                style={{ color: C.mist }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.parchment)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.mist)}
              >
                Explore the Wines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WINES
          ═══════════════════════════════════════ */}
      <section
        id="our-wines"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.vine }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] uppercase mb-4 font-light" style={{ color: C.gold }}>The Collection</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.parchment, fontFamily: 'Georgia, serif' }}>
              Our Wines
            </h2>
          </div>

          <div className="space-y-12">
            {wineCategories.map((cat) => (
              <div
                key={cat.name}
                className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-8 items-center rounded-3xl overflow-hidden"
                style={{ backgroundColor: C.shadow, border: `1px solid ${C.gold}15` }}
              >
                <div className="relative h-64 md:h-full overflow-hidden" style={{ minHeight: '240px' }}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to right, transparent 60%, ${C.shadow})` }}
                  />
                  <div
                    className="absolute bottom-4 left-4 text-5xl font-extralight"
                    style={{ color: C.gold, fontFamily: 'Georgia, serif' }}
                  >
                    {cat.name}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm mb-6 font-light" style={{ color: C.mist }}>{cat.description}</p>
                  <div className="space-y-5">
                    {cat.bottles.map((bottle) => (
                      <div
                        key={bottle.name}
                        className="flex items-start justify-between gap-4 pb-5"
                        style={{ borderBottom: `1px solid ${C.gold}15` }}
                      >
                        <div>
                          <h4 className="font-light text-base" style={{ color: C.parchment }}>{bottle.name}</h4>
                          <p className="text-xs mt-1 font-light" style={{ color: C.mist }}>{bottle.notes}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-light text-lg" style={{ color: C.gold }}>{bottle.price}</div>
                          <div className="text-xs" style={{ color: C.mist }}>{bottle.vintage}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPERIENCES
          ═══════════════════════════════════════ */}
      <section
        id="experiences"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.shadow }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] uppercase mb-4 font-light" style={{ color: C.gold }}>
              Vineyard Experiences
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.parchment, fontFamily: 'Georgia, serif' }}>
              Tours &amp; Tastings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.name}
                className="group rounded-3xl overflow-hidden transition-transform duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: C.vine,
                  border: exp.popular ? `2px solid ${C.gold}` : `1px solid ${C.gold}20`,
                }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {exp.popular && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wider"
                      style={{ backgroundColor: C.gold, color: C.shadow }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end"
                    style={{ background: `linear-gradient(to top, ${C.vine} 0%, transparent 100%)` }}
                  >
                    <span className="text-2xl font-light" style={{ color: C.gold }}>{exp.price}</span>
                    <span className="text-xs" style={{ color: C.mist }}>{exp.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-light mb-2"
                    style={{ color: C.parchment, fontFamily: 'Georgia, serif' }}
                  >
                    {exp.name}
                  </h3>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: C.mist }}>{exp.description}</p>
                  <ul className="space-y-1.5 mb-6">
                    {exp.includes.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs" style={{ color: C.mist }}>
                        <span style={{ color: C.gold }}>◆</span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book-tour"
                    className="block text-center py-3 text-xs tracking-[0.2em] uppercase font-light border transition-all duration-400"
                    style={{ borderColor: C.gold, color: C.gold }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.shadow }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
                  >
                    Book This Experience
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THE ESTATE (Story)
          ═══════════════════════════════════════ */}
      <section
        id="the-estate"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.vineDark }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase mb-6 font-light" style={{ color: C.gold }}>
              The Estate
            </p>
            <h2
              className="text-4xl md:text-5xl font-extralight mb-8 leading-tight"
              style={{ color: C.parchment, fontFamily: 'Georgia, serif' }}
            >
              Six Generations<br />in the Vine
            </h2>
            <blockquote
              className="text-xl italic mb-8 pl-6 leading-relaxed"
              style={{ color: C.goldLight, borderLeft: `2px solid ${C.gold}44` }}
            >
              &ldquo;We don&apos;t rush the vine. We tend it, we read it,
              and we wait. A wine that has been patient becomes
              something worth waiting for.&rdquo;
            </blockquote>
            <p className="text-base font-light leading-relaxed mb-5" style={{ color: C.mist }}>
              The Ashwood Estate was planted in 1876 by George Montague, who
              had studied viticulture in Champagne and believed the Surrey
              chalk had untapped potential. His great-great-granddaughter
              Elspeth runs it today.
            </p>
            <p className="text-base font-light leading-relaxed" style={{ color: C.mist }}>
              We farm organically, harvest by hand, and use as little
              intervention in the winery as the vintage allows. The wine
              you drink is the product of that year, that soil, and those
              hands — nothing added, nothing taken away.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ height: img.tall ? '300px' : '200px' }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WINE CLUB
          ═══════════════════════════════════════ */}
      <section
        id="wine-club"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.shadow }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <GrapeIcon size={56} color={C.gold} />
          <p className="text-xs tracking-[0.5em] uppercase mt-6 mb-4 font-light" style={{ color: C.gold }}>
            Ashwood Wine Club
          </p>
          <h2
            className="text-4xl md:text-5xl font-extralight mb-6"
            style={{ color: C.parchment, fontFamily: 'Georgia, serif' }}
          >
            Become a Member
          </h2>
          <p className="text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: C.mist }}>
            Six bottles of hand-selected estate wines every quarter, including
            pre-release wines not available to the public. Plus two free
            experiences a year and 20% off all shop purchases.
          </p>

          <div className="inline-block rounded-3xl p-10 mb-10" style={{ backgroundColor: C.vine, border: `1px solid ${C.gold}30` }}>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-extralight" style={{ color: C.gold }}>£75</span>
              <span className="font-light" style={{ color: C.mist }}>/ quarter</span>
            </div>
            <p className="text-sm mb-8" style={{ color: C.mist }}>6 bottles · 4 times a year · cancel anytime</p>
            <div className="grid grid-cols-2 gap-4 text-left mb-8">
              {[
                'Pre-release wines',
                '2 free experiences/yr',
                '20% shop discount',
                'Members-only events',
                'Winemaker newsletters',
                'Priority harvest slots',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ color: C.mist }}>
                  <span style={{ color: C.gold }}>◆</span>
                  {benefit}
                </div>
              ))}
            </div>
            <a
              href="#book-tour"
              className="inline-block border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-400"
              style={{ borderColor: C.gold, color: C.gold }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.shadow }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
            >
              Join the Wine Club
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: C.vine }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p className="text-xs tracking-[0.5em] uppercase mb-4 font-light" style={{ color: C.gold }}>Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.parchment, fontFamily: 'Georgia, serif' }}>
            Our Guests
          </h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* ═══════════════════════════════════════
          BOOK TOUR
          ═══════════════════════════════════════ */}
      <section
        id="book-tour"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.shadow }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase mb-6 font-light" style={{ color: C.gold }}>
              Reservations
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={{ color: C.parchment, fontFamily: 'Georgia, serif' }}>
              Book Your<br />Experience
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: C.mist }}>
              Reserve your tasting, tour, or private event directly.
              We confirm by email within the hour.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Estate Open', value: 'Wed–Sun · 10am–6pm' },
                { label: 'Address', value: 'Shamley Green, Surrey GU5 0SX' },
                { label: 'Private Events', value: 'Available year-round · contact for bespoke arrangements' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-px flex-shrink-0" style={{ backgroundColor: `${C.gold}40`, minHeight: '40px' }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1 font-light" style={{ color: C.gold }}>{info.label}</p>
                    <p className="text-sm font-light" style={{ color: C.mist }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <BookingWidget
            locale="en"
            slots={mockSlots}
            socialProof={{ count: 312, label: 'guests visited this month' }}
            vertical="vineyardos"
            onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: C.vineDark }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.5em] uppercase mb-4 font-light" style={{ color: C.gold }}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.parchment, fontFamily: 'Georgia, serif' }}>
              Frequently Asked
            </h2>
          </div>
          <FAQAccordion items={faqs} locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+441483770512" message="Hi! I'd like to book a tour at Ashwood Estate" vertical="vineyardos" />
    </div>
  )
}

'use client'
import Image from 'next/image';

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem, BookingSlot } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE — Mahogany & Craft
// ─────────────────────────────────────────────
const C = {
  mahogany: '#3c1f0a',
  mahoganyLight: '#5a2e0e',
  cream: '#fdf6e3',
  creamDark: '#f0e6c4',
  bloodRed: '#8b0000',
  bloodRedLight: '#a50000',
  herbGreen: '#4a7c59',
  herbGreenLight: '#5d9470',
  craft: '#c8a97e',
  craftLight: '#d4bc96',
  parchment: '#f5e6c8',
  shadow: '#1a0a02',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: "Holt's Family Butchers",
  description: 'Quality Cuts, Honest Prices — Since 1954',
  url: 'https://holtsbutchers.example.com',
  locale: 'en',
  vertical: 'butcheros',
  theme: 'classic',
  branding: { primaryColor: C.mahogany, accentColor: C.bloodRed },
  contact: {
    phone: '+44 1905 612 334',
    email: 'hello@holtsbutchers.co.uk',
    whatsapp: '+441905612334',
    address: "14 High Street, Worcester WR1 2EQ",
    coordinates: { lat: 52.1920, lng: -2.2211 },
  },
  social: {
    instagram: 'holtsbutchers',
    facebook: 'https://facebook.com/holtsbutchers',
  },
  seo: {
    title: "Holt's Family Butchers — Quality Cuts Since 1954",
    description: 'Traditional family butchers with premium beef, pork, lamb, poultry and game.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const counterItems = [
  {
    category: 'Beef',
    icon: '🥩',
    cuts: ['Ribeye Steak £12.50/kg', 'Fillet Steak £28/kg', 'Rib of Beef £18/kg', '28-day Dry-Aged Sirloin £22/kg'],
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=320&fit=crop',
  },
  {
    category: 'Pork',
    icon: '🐷',
    cuts: ['Pork Belly £8/kg', 'Shoulder Joint £6.50/kg', 'Rack of Ribs £10/kg', 'Sausages £7/kg'],
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=320&fit=crop',
  },
  {
    category: 'Lamb',
    icon: '🐑',
    cuts: ['Rack of Lamb £22/kg', 'Leg of Lamb £14/kg', 'Lamb Chops £15/kg', 'Slow Shoulder £12/kg'],
    image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=400&h=320&fit=crop',
  },
  {
    category: 'Poultry',
    icon: '🍗',
    cuts: ['Free-Range Chicken £8', 'Duck Breasts £12/kg', 'Turkey Crown £30', 'Chicken Thighs £6/kg'],
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=320&fit=crop',
  },
  {
    category: 'Game',
    icon: '🦌',
    cuts: ['Venison Haunch £20/kg', 'Pheasant £9 each', 'Wild Duck £12', 'Rabbit £6 each'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=320&fit=crop',
  },
  {
    category: 'Specialty',
    icon: '⭐',
    cuts: ['Wagyu Striploin £65/kg', 'Ibérico Pork £28/kg', 'Bone Marrow £4/pc', 'Ox Cheeks £10/kg'],
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=320&fit=crop',
  },
]

const packages = [
  {
    name: 'Sunday Roast',
    sub: '2-person',
    price: '£18',
    items: ['Topside of beef (900g)', 'Bone-in for flavour', 'Butcher\'s twine tied', 'Recipe card included'],
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300&h=200&fit=crop',
  },
  {
    name: 'Sunday Roast',
    sub: 'Family (4+)',
    price: '£28',
    items: ['Rib of beef (1.8kg)', 'Butcher-scored fat cap', 'Aged 21 days on the bone', 'Temperature guide'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop',
    popular: true,
  },
  {
    name: 'BBQ Box',
    sub: 'Summer Special',
    price: '£35',
    items: ['4 ribeye steaks', '8 handmade sausages', '1kg marinated chicken', 'Burgers & lamb koftas'],
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop',
    badge: 'Seasonal',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Mark D.',
    rating: 5,
    text: "Been coming to Holt's for 20 years. The dry-aged sirloin is in a completely different league to supermarket meat. Proper butchers who know their craft.",
    date: '2026-07-18',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Helen T.',
    rating: 5,
    text: 'The Sunday roast package is incredible value. The topside was perfectly tied and came with a recipe card. The best roast we\'ve had in years.',
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Chris M.',
    rating: 5,
    text: "Ordered the BBQ box for a party — 14 people and it was perfect. The marinated chicken was sensational. Everyone asked where I got it from.",
    date: '2026-08-02',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Janet W.',
    rating: 4,
    text: "The handmade sausages are extraordinary — proper old-school butcher's recipe with herbs from the garden. The kids eat them every week.",
    date: '2026-07-10',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '5',
    author: 'Rob S.',
    rating: 5,
    text: "Tom knows every animal by name — it's not just butchery, it's a craft. The welfare standards they insist on from their farms are genuinely impressive.",
    date: '2026-07-25',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  { question: 'Where does your meat come from?', answer: 'All our beef, lamb and pork comes from farms within 40 miles of Worcester. We visit every supplier farm twice a year. Our poultry is free-range from certified producers in Herefordshire.' },
  { question: 'Can I pre-order for a specific date?', answer: 'Yes — particularly useful for Sunday roasts, Christmas joints, and special occasions. Use WhatsApp or call us by Thursday for weekend orders. We can prepare any cut to your specification.' },
  { question: 'Do you make your own sausages?', answer: "Yes — all sausages are made in-house using our family recipe from 1954. We do traditional pork, pork & leek, Cumberland, chorizo-style, and seasonal specials. Gluten-free options available." },
  { question: 'Can you do custom cuts and portion sizes?', answer: "Absolutely. We can cut to any weight, thickness, or preparation you need. Frenched racks, butterflied legs, medallions, dice, mince — just tell us what you need." },
  { question: 'Do you offer home delivery?', answer: 'We deliver Fridays within 10 miles of Worcester for orders over £30. Orders placed by Wednesday noon. Collection from the shop is also available Tuesday–Saturday 7am–5pm.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 5 },
  { id: '2', date: today, time: '10:00', available: true, spotsLeft: 8 },
  { id: '3', date: today, time: '12:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '14:00', available: true, spotsLeft: 6 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const butcherJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://holtsbutchers.example.com',
  name: "Holt's Family Butchers",
  description: 'Traditional family butchers since 1954. Premium beef, pork, lamb, poultry and game from local farms.',
  url: 'https://holtsbutchers.example.com',
  telephone: '+44 1905 612 334',
  email: 'hello@holtsbutchers.co.uk',
  image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&h=630&fit=crop',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 High Street',
    addressLocality: 'Worcester',
    postalCode: 'WR1 2EQ',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 52.1920, longitude: -2.2211 },
  foundingDate: '1954',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '17:00' },
  ],
  priceRange: '££',
}

const butcherFaqJsonLd = {
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
// COMPONENTS
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: `${C.mahogany}f5`,
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.cream}18`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Butcher's knife icon (CSS) */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="12" width="18" height="4" rx="1" fill={C.craft} />
            <polygon points="20,10 26,14 20,18" fill={C.craft} />
            <rect x="1" y="13" width="4" height="2" rx="1" fill={C.mahoganyLight} />
          </svg>
          <div>
            <span className="font-bold tracking-tight text-base" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
              Holt&apos;s
            </span>
            <span className="text-xs block leading-none" style={{ color: C.craftLight, letterSpacing: '2px' }}>
              FAMILY BUTCHERS
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['The Counter', 'Packages', 'Our Story', 'Pre-Order'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
              style={{ color: C.craftLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.craftLight)}
            >
              {item}
            </a>
          ))}
          <a
            href="#pre-order"
            className="px-5 py-2 text-xs font-bold uppercase tracking-widest rounded transition-all duration-300"
            style={{ backgroundColor: C.bloodRed, color: C.cream }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.bloodRedLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.bloodRed)}
          >
            Pre-Order
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════
export default function ButcherPage() {
  return (
    <div style={{ backgroundColor: C.mahogany, color: C.cream }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(butcherJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(butcherFaqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Traditional Craft
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Mahogany gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(150deg, ${C.shadow} 0%, ${C.mahogany} 40%, ${C.mahoganyLight} 100%)`,
          }}
        />

        {/* Craft paper texture via radial gradients */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, ${C.craft}40 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, ${C.bloodRed}30 0%, transparent 40%),
              radial-gradient(ellipse at 60% 80%, ${C.craft}20 0%, transparent 40%)`,
          }}
        />

        {/* Gradient swirls implying marbled meat */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 30px,
              ${C.cream}08 30px,
              ${C.cream}08 31px
            )`,
          }}
        />

        {/* Right: meat photo */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
          <Image src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=900&h=1100&fit=crop&q=85"
            alt="Premium cuts at Holt's Family Butchers"
            className="w-full h-full object-cover opacity-60" width={1200} height={800} />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${C.mahogany} 0%, ${C.mahogany}60 40%, transparent 70%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-20">
          <div className="max-w-2xl">
            {/* Heritage badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                border: `1px solid ${C.craft}50`,
                color: C.craftLight,
                background: `${C.craft}10`,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: C.bloodRed, animation: 'pulse 2s infinite' }}
              />
              Family Butchers Since 1954
            </div>

            <h1
              className="text-5xl md:text-7xl font-black leading-tight mb-6"
              style={{ color: C.cream, fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: 1.0 }}
            >
              Quality Cuts,<br />
              <span style={{ color: C.craft }}>Honest</span><br />
              Prices.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: `${C.cream}99` }}>
              Three generations of proper butchery. Every animal is sourced
              within 40 miles, welfare-first, and hung to our exacting standards.
              We don&apos;t do shortcuts &mdash; and our regulars can taste the difference.
            </p>

            {/* Knife illustration */}
            <div className="flex items-center gap-3 mb-10">
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
                <rect x="0" y="10" width="85" height="4" rx="2" fill={C.craft} opacity="0.6" />
                <polygon points="85,6 110,12 85,18" fill={C.craft} opacity="0.8" />
                <rect x="0" y="11" width="14" height="2" rx="1" fill={C.mahoganyLight} opacity="0.8" />
              </svg>
              <span className="text-xs uppercase tracking-widest" style={{ color: C.craft }}>Est. Worcester</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#the-counter"
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                style={{ backgroundColor: C.bloodRed, color: C.cream }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.bloodRedLight; e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.bloodRed; e.currentTarget.style.transform = 'scale(1)' }}
              >
                Browse the Counter
              </a>
              <a
                href="#pre-order"
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-300"
                style={{ borderColor: C.craft, color: C.craft }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.craft; e.currentTarget.style.color = C.mahogany }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.craft }}
              >
                Pre-Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <div
        className="py-4 overflow-hidden"
        style={{ backgroundColor: C.bloodRed }}
      >
        <div className="flex gap-12 animate-[marquee_25s_linear_infinite]" style={{ whiteSpace: 'nowrap' }}>
          {[...Array(3)].map((_, d) =>
            ['Dry-Aged Beef', 'Handmade Sausages', 'Free-Range Poultry', 'Heritage Pork', 'Wild Game', 'Custom Cuts', 'Sunday Roasts', 'BBQ Boxes'].map((item, i) => (
              <span key={`${d}-${i}`} className="inline-flex items-center gap-8">
                <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: C.cream }}>{item}</span>
                <span style={{ color: `${C.cream}50` }}>&#x2726;</span>
              </span>
            ))
          )}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
      </div>

      {/* ═══════════════════════════════════════
          THE COUNTER
          ═══════════════════════════════════════ */}
      <section
        id="the-counter"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.mahogany }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.craft }}>The Counter</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
              What We Have In Today
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counterItems.map((item) => (
              <div
                key={item.category}
                className="group rounded-2xl overflow-hidden transition-all duration-300"
                style={{ backgroundColor: C.shadow, border: `1px solid ${C.cream}10` }}
                onMouseEnter={(e) => { e.currentTarget.style.border = `1px solid ${C.craft}40`; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.border = `1px solid ${C.cream}10`; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.shadow} 10%, transparent 60%)` }} />
                  <div className="absolute top-3 left-3 text-2xl">{item.icon}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-3" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>{item.category}</h3>
                  <ul className="space-y-1.5">
                    {item.cuts.map((cut, i) => (
                      <li key={i} className="flex items-center justify-between text-sm">
                        <span style={{ color: `${C.cream}99` }}>{cut.split(' £')[0]}</span>
                        <span style={{ color: C.craft }}>£{cut.split(' £')[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PACKAGES
          ═══════════════════════════════════════ */}
      <section
        id="packages"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.shadow }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.craft }}>Ready to Go</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
              Weekend Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={`${pkg.name}-${pkg.sub}`}
                className="relative rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: C.mahogany,
                  border: pkg.popular ? `2px solid ${C.craft}` : `1px solid ${C.cream}15`,
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 text-center py-1.5 text-xs font-bold uppercase tracking-widest"
                    style={{ backgroundColor: C.craft, color: C.mahogany }}
                  >
                    Best Seller
                  </div>
                )}
                {pkg.badge && (
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: C.herbGreen, color: C.cream }}
                  >
                    {pkg.badge}
                  </div>
                )}
                <Image src={pkg.image} alt={pkg.name} className="w-full h-44 object-cover" style={{ marginTop: pkg.popular ? '28px' : '0' }} width={1200} height={800} />
                <div className="p-6">
                  <h3 className="font-black text-xl" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>{pkg.name}</h3>
                  <p className="text-sm mb-3" style={{ color: C.craft }}>{pkg.sub}</p>
                  <div className="text-3xl font-black mb-4" style={{ color: C.bloodRed }}>{pkg.price}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: `${C.cream}99` }}>
                        <span style={{ color: C.herbGreen, flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#pre-order"
                    className="block w-full text-center py-3 text-sm font-bold uppercase tracking-wider rounded transition-all duration-300"
                    style={{ backgroundColor: C.bloodRed, color: C.cream }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.bloodRedLight)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.bloodRed)}
                  >
                    Pre-Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SOURCING STORY
          ═══════════════════════════════════════ */}
      <section
        id="our-story"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.mahogany }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.craft }}>Our Sourcing</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: C.cream, fontFamily: 'Georgia, serif', lineHeight: 1.15 }}>
              We Know Every<br />Farm by Name
            </h2>
            <blockquote
              className="text-xl italic mb-8 pl-5"
              style={{ borderLeft: `3px solid ${C.bloodRed}`, color: C.craft, lineHeight: 1.6 }}
            >
              &ldquo;My father told me: if you don&apos;t know who raised it,
              you don&apos;t know what you&apos;re selling.
              That rule hasn&apos;t changed.&rdquo;
            </blockquote>
            <p className="text-base leading-relaxed mb-5" style={{ color: `${C.cream}90` }}>
              Our beef comes from Warndon Farm, 12 miles north of Worcester. Our
              pigs are raised by the Griffiths family in Herefordshire, heritage
              breeds on permanent pasture. Our lambs graze the Malvern Hills.
              Every single animal.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { num: '70+', label: 'Years trading' },
                { num: '6', label: 'Partner farms' },
                { num: '40mi', label: 'Maximum source radius' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl text-center" style={{ backgroundColor: C.shadow }}>
                  <div className="text-2xl font-black" style={{ color: C.craft }}>{stat.num}</div>
                  <div className="text-xs mt-1" style={{ color: `${C.cream}60` }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ height: '520px' }}>
            <Image src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=700&h=1000&fit=crop&q=85"
              alt="Tom Holt in the butchery"
              className="w-full h-full object-cover" width={1200} height={800} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: C.shadow }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.craft }}>Customer Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>What Our Customers Say</h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* ═══════════════════════════════════════
          PRE-ORDER
          ═══════════════════════════════════════ */}
      <section
        id="pre-order"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.mahogany }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.craft }}>Pre-Order</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
              Reserve Your Cut
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: `${C.cream}90` }}>
              Place a pre-order and we&apos;ll have it ready for collection or
              delivery on your chosen day. Ideal for special occasions, Sunday
              roasts, and large BBQs.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Shop Hours', value: 'Tue–Sat · 7am–5pm' },
                { label: 'Address', value: '14 High Street, Worcester WR1 2EQ' },
                { label: 'Pre-Order Deadline', value: 'Thursday noon for weekend orders' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: C.bloodRed, minHeight: '36px' }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: C.craft }}>{info.label}</p>
                    <p className="text-sm mt-0.5" style={{ color: `${C.cream}80` }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <BookingWidget
            locale="en"
            slots={mockSlots}
            socialProof={{ count: 186, label: 'orders placed this week' }}
            vertical="butcheros"
            onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: C.shadow }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.craft }}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
              Frequently Asked
            </h2>
          </div>
          <FAQAccordion items={faqs} verticalName="ButcherOS" locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+441905612334" message="Hi! I'd like to place an order at Holt's Butchers" vertical="butcheros" />
    </div>
  )
}

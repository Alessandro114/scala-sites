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
  earth: '#8b6914',
  earthDark: '#6b4f10',
  sage: '#6b8e23',
  sageDark: '#4a6218',
  cream: '#fdf6e3',
  creamDark: '#f0e6c8',
  barnRed: '#8b2500',
  barnRedLight: '#b03000',
  bark: '#5c3d1e',
  barkLight: '#7a5230',
  fog: '#c8b99a',
  parchment: '#f5ede1',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Green Acre Farm Shop',
  description: '100% Organic — From Our Fields to Your Table',
  url: 'https://greenacrefarm.example.com',
  locale: 'en',
  vertical: 'farmos',
  theme: 'rustic',
  branding: { primaryColor: C.earth, accentColor: C.sage },
  contact: {
    phone: '+44 1604 882 194',
    email: 'hello@greenacrefarm.co.uk',
    whatsapp: '+441604882194',
    address: 'Green Acre Farm, Weston Lane, Northamptonshire NN7 4PQ',
    coordinates: { lat: 52.2397, lng: -1.0221 },
  },
  social: {
    instagram: 'greenacrefarm',
    facebook: 'https://facebook.com/greenacrefarm',
  },
  seo: {
    title: 'Green Acre Farm Shop — 100% Organic, Straight From Our Fields',
    description: 'Fresh seasonal produce, weekly veg boxes, dairy, meat, and preserves grown on our family farm.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const weeklyBox = [
  { name: 'Courgettes', qty: '3 medium', note: 'Grown in Polytunnel 2' },
  { name: 'Cherry Tomatoes', qty: '500g punnet', note: 'Sweet Millions variety' },
  { name: 'Cucumber', qty: '1 large', note: 'Ridge variety' },
  { name: 'French Beans', qty: '250g', note: 'Harvested this morning' },
  { name: 'Sweetcorn', qty: '2 cobs', note: 'August Gold' },
  { name: 'Beetroot', qty: '500g bunch', note: 'Red & golden mix' },
  { name: 'Salad Leaves', qty: '100g bag', note: 'Mixed, washed' },
  { name: 'Basil', qty: '1 pot', note: 'From the herb garden' },
]

const categories = [
  { name: 'Vegetables', icon: '🥦', count: 34, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop' },
  { name: 'Fruit', icon: '🍎', count: 18, image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop' },
  { name: 'Dairy', icon: '🧀', count: 12, image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400&h=300&fit=crop' },
  { name: 'Meat', icon: '🥩', count: 9, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop' },
  { name: 'Bakery', icon: '🍞', count: 15, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop' },
  { name: 'Preserves', icon: '🫙', count: 22, image: 'https://images.unsplash.com/photo-1597528380450-3cf3e4a83e6a?w=400&h=300&fit=crop' },
]

const subscriptions = [
  {
    name: 'Small Box',
    price: '£15',
    period: 'per week',
    description: 'Perfect for 1-2 people. 5-6 seasonal items.',
    items: ['3–4 vegetables', '1–2 fruit', 'Herb pot'],
    color: C.sage,
  },
  {
    name: 'Family Box',
    price: '£25',
    period: 'per week',
    description: 'Feeds 3-4 people. 10-12 generous portions.',
    items: ['6–8 vegetables', '2–3 fruit', 'Salad bag', 'Herb pot'],
    color: C.earth,
    popular: true,
  },
  {
    name: 'Veg-Only Box',
    price: '£12',
    period: 'per week',
    description: 'Pure vegetable goodness. No fruit. 6-7 items.',
    items: ['6–7 vegetables', 'Salad leaves'],
    color: C.sageDark,
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Rachel T.',
    rating: 5,
    text: "We've been getting the Family Box for two years and it has completely transformed how we cook. Everything tastes so much better when it was in the ground yesterday.",
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Daniel P.',
    rating: 5,
    text: 'The Small Box is incredible value. I look forward to Thursdays just to see what surprise veg I get. The tomatoes this summer have been extraordinary.',
    date: '2026-07-31',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Priya M.',
    rating: 5,
    text: "Visited the farm shop on Saturday — the kids loved feeding the chickens and seeing where their food comes from. The jams and chutneys are next level.",
    date: '2026-08-03',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '4',
    author: 'James W.',
    rating: 4,
    text: 'The meat box is outstanding. Free-range, heritage breeds, properly aged. You can taste the welfare standards in every bite.',
    date: '2026-07-14',
    source: 'google',
    verified: true,
  },
  {
    id: '5',
    author: 'Sophie A.',
    rating: 5,
    text: 'Switched from a supermarket delivery two years ago and never looked back. The seasonal variety has made us so much more creative in the kitchen.',
    date: '2026-08-01',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  { question: 'When is the box delivered?', answer: 'Boxes are delivered Thursday–Friday. You can choose your preferred day at checkout. We deliver within 15 miles of the farm. Collection from the farm gate is also available Tuesday–Saturday 8am–5pm.' },
  { question: 'Can I skip a week?', answer: 'Yes, easily. Log into your account or send us a WhatsApp by Tuesday midnight to skip the following week. No penalties, no minimum term.' },
  { question: 'Are you fully certified organic?', answer: 'Yes. We hold full Soil Association organic certification (licence GB-ORG-05-2847). All produce is grown without synthetic pesticides, herbicides or fertilisers.' },
  { question: 'Can I add extras to my box?', answer: 'Absolutely. When your weekly dispatch email arrives (Monday), click the add-extras link to browse available cuts, dairy, eggs, bread and preserves to add to your order.' },
  { question: 'What if I have dietary requirements?', answer: 'We can accommodate most preferences — just let us know. We can exclude nightshades, swap items out for alternatives, and flag potential allergens in all products.' },
  { question: 'Can I visit the farm?', answer: 'The farm shop is open Tuesday–Saturday 8am–5pm. We run guided farm tours on the last Saturday of each month at 10am. Booking required — spaces are limited to 20 people.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '10:00', available: true, spotsLeft: 8 },
  { id: '2', date: today, time: '11:00', available: true, spotsLeft: 12 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 6 },
  { id: '4', date: today, time: '15:00', available: true, spotsLeft: 10 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const farmJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://greenacrefarm.example.com',
  name: 'Green Acre Farm Shop',
  description: '100% certified organic farm shop offering weekly veg boxes, fresh dairy, meat, bakery, and preserves.',
  url: 'https://greenacrefarm.example.com',
  telephone: '+44 1604 882 194',
  email: 'hello@greenacrefarm.co.uk',
  image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&h=630&fit=crop',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Weston Lane',
    addressLocality: 'Northamptonshire',
    postalCode: 'NN7 4PQ',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 52.2397, longitude: -1.0221 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '17:00' },
  ],
  priceRange: '£',
  sameAs: ['https://instagram.com/greenacrefarm', 'https://facebook.com/greenacrefarm'],
}

const farmFaqJsonLd = {
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
        background: `${C.cream}f0`,
        backdropFilter: 'blur(16px)',
        borderBottom: `2px solid ${C.earth}22`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Leaf icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2C8 2 3 8 3 15c0 4 2 7 5 9 1-4 3-7 6-9-2 3-3 6-3 9h3c0-3 1-6 3-8 2 2 3 5 3 8h3c0-3-1-6-3-9 3 2 5 5 6 9 3-2 5-5 5-9 0-7-5-13-11-13z" fill={C.sage} />
          </svg>
          <span className="font-bold tracking-tight text-lg" style={{ color: C.bark, fontFamily: 'Georgia, serif' }}>
            Green Acre
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['This Week', 'Shop', 'Boxes', 'Farm Story', 'Visit'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: C.barkLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.sage)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.barkLight)}
            >
              {item}
            </a>
          ))}
          <a
            href="#boxes"
            className="px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300"
            style={{ backgroundColor: C.sage, color: C.cream }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.sageDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.sage)}
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════
export default function FarmShopPage() {
  return (
    <div style={{ backgroundColor: C.cream, color: C.bark, fontFamily: 'system-ui, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(farmJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(farmFaqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Rustic Organic
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Earth gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, #f5ede1 0%, #e8d9b8 35%, #d4c4a8 65%, #c8b494 100%)`,
          }}
        />

        {/* Woodgrain texture pattern (CSS) */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              170deg,
              transparent,
              transparent 8px,
              ${C.bark}30 8px,
              ${C.bark}30 9px
            ), repeating-linear-gradient(
              -10deg,
              transparent,
              transparent 40px,
              ${C.bark}15 40px,
              ${C.bark}15 41px
            )`,
          }}
        />

        {/* Decorative hand-drawn leaf SVG (CSS) */}
        <div className="absolute right-0 top-0 w-full h-full pointer-events-none overflow-hidden">
          <svg
            className="absolute right-[-5%] top-[-10%] opacity-8"
            width="700"
            height="700"
            viewBox="0 0 700 700"
            fill="none"
          >
            <path
              d="M350 50 C150 100 50 300 100 500 C150 650 300 700 400 650 C500 600 600 450 580 300 C560 150 500 50 350 50Z"
              fill={C.sage}
              opacity="0.15"
            />
            <path
              d="M350 50 L350 650"
              stroke={C.sageDark}
              strokeWidth="3"
              opacity="0.2"
            />
            {[100, 180, 260, 340, 420, 500].map((y, i) => (
              <path
                key={i}
                d={`M350 ${y} Q${i % 2 === 0 ? 250 : 450} ${y + 30} ${i % 2 === 0 ? 200 : 500} ${y + 20}`}
                stroke={C.sageDark}
                strokeWidth="1.5"
                fill="none"
                opacity="0.18"
              />
            ))}
          </svg>
        </div>

        {/* Farm photo — right half */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&h=1100&fit=crop&q=85"
            alt="Green Acre organic farm in summer"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #f5ede1 0%, transparent 40%)`,
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-20">
          <div className="max-w-xl">
            {/* Seasonal indicator */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase"
              style={{ backgroundColor: `${C.sage}22`, border: `1px solid ${C.sage}44`, color: C.sageDark }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: C.sage, animation: 'pulse 2s infinite' }}
              />
              Currently: Summer Harvest
            </div>

            {/* Main headline */}
            <h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              style={{ color: C.bark, fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: 1.05 }}
            >
              From Our Fields<br />
              <span style={{ color: C.sage }}>to Your</span><br />
              Table
            </h1>

            <p className="text-lg md:text-xl font-light leading-relaxed mb-10" style={{ color: C.barkLight }}>
              Three generations of organic farming in Northamptonshire.
              No shortcuts, no chemicals, no compromise — just honest food
              grown with care, cut the morning of delivery.
            </p>

            {/* 100% Organic stamp */}
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div
                className="flex items-center justify-center w-28 h-28 rounded-full font-bold text-center text-xs leading-tight tracking-widest uppercase"
                style={{
                  border: `3px solid ${C.barnRed}`,
                  color: C.barnRed,
                  transform: 'rotate(-8deg)',
                  padding: '8px',
                }}
              >
                <div>
                  <div style={{ fontSize: '11px' }}>100%</div>
                  <div style={{ fontSize: '14px', fontFamily: 'Georgia, serif', marginTop: '2px' }}>Organic</div>
                  <div style={{ fontSize: '9px', marginTop: '2px' }}>Certified</div>
                </div>
              </div>

              {/* Basket icon */}
              <div>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" opacity="0.7">
                  <path d="M12 22 L8 42 H48 L44 22 Z" fill={C.earth} opacity="0.3" stroke={C.earth} strokeWidth="2" />
                  <path d="M16 22 C16 14 20 8 28 8 C36 8 40 14 40 22" stroke={C.earth} strokeWidth="2.5" fill="none" />
                  <line x1="28" y1="22" x2="28" y2="42" stroke={C.earth} strokeWidth="1.5" opacity="0.5" />
                  <line x1="8" y1="32" x2="48" y2="32" stroke={C.earth} strokeWidth="1.5" opacity="0.5" />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#boxes"
                className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300"
                style={{ backgroundColor: C.sage, color: C.cream }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.sageDark; e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.sage; e.currentTarget.style.transform = 'scale(1)' }}
              >
                Get a Box
              </a>
              <a
                href="#this-week"
                className="px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider border-2 transition-all duration-300"
                style={{ borderColor: C.earth, color: C.earth }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.earth; e.currentTarget.style.color = C.cream }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.earth }}
              >
                This Week&apos;s Box
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THIS WEEK'S BOX
          ═══════════════════════════════════════ */}
      <section
        id="this-week"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.parchment }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.sage }}>
                Week of 4 August
              </p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.bark, fontFamily: 'Georgia, serif' }}>
                This Week&apos;s Box
              </h2>
            </div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: `${C.earth}15`, color: C.earthDark }}
            >
              <span>Summer Season</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weeklyBox.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-200"
                style={{
                  backgroundColor: C.cream,
                  border: `1px solid ${C.earth}18`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${C.sage}40`; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.earth}18`; e.currentTarget.style.transform = 'translateX(0)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-2xl"
                  style={{ backgroundColor: `${C.sage}15` }}
                >
                  {i % 4 === 0 ? '🌿' : i % 4 === 1 ? '🍅' : i % 4 === 2 ? '🥒' : '🥬'}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold" style={{ color: C.bark }}>{item.name}</h3>
                    <span className="text-sm font-medium" style={{ color: C.earth }}>{item.qty}</span>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: C.fog }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm mb-4" style={{ color: C.barkLight }}>
              Content changes weekly based on what&apos;s ready to pick.
            </p>
            <a
              href="#boxes"
              className="inline-block px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300"
              style={{ backgroundColor: C.earth, color: C.cream }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.earthDark }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.earth }}
            >
              Subscribe for Weekly Delivery
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATEGORIES
          ═══════════════════════════════════════ */}
      <section
        id="shop"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.cream }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.sage }}>Browse the Shop</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.bark, fontFamily: 'Georgia, serif' }}>
              Everything We Grow & Make
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{ height: '220px' }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${C.bark}cc 0%, ${C.bark}44 50%, transparent 100%)` }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <h3 className="font-bold text-lg leading-tight" style={{ color: C.cream }}>{cat.name}</h3>
                  <p className="text-xs mt-0.5" style={{ color: `${C.cream}aa` }}>{cat.count} products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOX SUBSCRIPTIONS
          ═══════════════════════════════════════ */}
      <section
        id="boxes"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.parchment }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.earth }}>Weekly Subscriptions</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: C.bark, fontFamily: 'Georgia, serif' }}>
              Choose Your Box
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.barkLight }}>
              Delivered to your door every week. Pause or cancel anytime. No minimum term.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptions.map((sub) => (
              <div
                key={sub.name}
                className="relative rounded-3xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: C.cream,
                  border: sub.popular ? `2px solid ${C.earth}` : `1px solid ${C.earth}20`,
                  transform: sub.popular ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                {sub.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: C.earth, color: C.cream }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="w-12 h-12 rounded-full mb-5" style={{ backgroundColor: `${sub.color}25` }}>
                  <div className="w-full h-full flex items-center justify-center text-2xl">🌿</div>
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: C.bark, fontFamily: 'Georgia, serif' }}>
                  {sub.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-black" style={{ color: sub.color }}>{sub.price}</span>
                  <span className="text-sm" style={{ color: C.fog }}>{sub.period}</span>
                </div>
                <p className="text-sm mb-5" style={{ color: C.barkLight }}>{sub.description}</p>
                <ul className="space-y-2 mb-8">
                  {sub.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: C.barkLight }}>
                      <span style={{ color: sub.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#order"
                  className="block w-full text-center py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300"
                  style={{ backgroundColor: sub.color, color: C.cream }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Subscribe
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FARM STORY
          ═══════════════════════════════════════ */}
      <section
        id="farm-story"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.cream }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden" style={{ height: '520px' }}>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=1000&fit=crop&q=85"
                alt="Farmer tending organic crops at Green Acre"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Heritage badge overlay */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full flex items-center justify-center text-center p-3 font-bold"
              style={{
                backgroundColor: C.earth,
                color: C.cream,
                fontFamily: 'Georgia, serif',
              }}
            >
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '1px' }}>ESTABLISHED</div>
                <div style={{ fontSize: '24px', fontWeight: 900 }}>1952</div>
                <div style={{ fontSize: '10px', letterSpacing: '2px' }}>ORGANICS</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.sage }}>Our Heritage</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: C.bark, fontFamily: 'Georgia, serif', lineHeight: 1.15 }}>
              Three Generations,<br />One Commitment
            </h2>
            <blockquote
              className="text-xl italic mb-8 pl-5"
              style={{ borderLeft: `3px solid ${C.sage}`, color: C.barkLight, lineHeight: 1.6 }}
            >
              &ldquo;My grandfather started this farm in 1952 with twelve
              acres and the belief that good food starts with good soil.
              We haven&apos;t changed that philosophy once.&rdquo;
            </blockquote>
            <p className="text-base leading-relaxed mb-5" style={{ color: C.barkLight }}>
              Today Green Acre covers 87 certified organic acres across the Nene
              Valley. We grow over 40 varieties of fruit and vegetables year-round
              across our polytunnels and open fields, raise pigs and cattle on
              permanent pasture, and keep bees for our honey range.
            </p>
            <p className="text-base leading-relaxed" style={{ color: C.barkLight }}>
              Nothing leaves the farm unless it was ready to leave. That means
              some weeks you might get a surprise &mdash; and we think that&apos;s
              the whole point.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { num: '87', label: 'Organic acres' },
                { num: '40+', label: 'Crop varieties' },
                { num: '1,200+', label: 'Weekly boxes' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl" style={{ backgroundColor: C.parchment }}>
                  <div className="text-2xl font-black" style={{ color: C.earth }}>{stat.num}</div>
                  <div className="text-xs mt-1" style={{ color: C.fog }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VISIT THE FARM
          ═══════════════════════════════════════ */}
      <section
        id="visit"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.parchment }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.sage }}>Come and See Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: C.bark, fontFamily: 'Georgia, serif' }}>
              Visit the Farm
            </h2>

            <div className="space-y-6">
              {[
                { label: 'Farm Shop Hours', value: 'Tue–Sat · 8am–5pm' },
                { label: 'Farm Tours', value: 'Last Saturday of the month · 10am (booking required)' },
                { label: 'Address', value: 'Weston Lane, Northamptonshire NN7 4PQ' },
                { label: 'Directions', value: 'From J15 M1, take A508 south. Farm is signposted from Roade village.' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-1 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: C.sage, minHeight: '40px' }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: C.earth }}>{info.label}</p>
                    <p className="text-sm" style={{ color: C.barkLight }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="order">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 284, label: 'boxes ordered this week' }}
              vertical="farmos"
              onSubmit={async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.sage }}>What Our Members Say</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.bark, fontFamily: 'Georgia, serif' }}>Reviews</h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: C.parchment }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.earth }}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.bark, fontFamily: 'Georgia, serif' }}>
              Frequently Asked
            </h2>
          </div>
          <FAQAccordion items={faqs} verticalName="FarmOS" locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+441604882194"
        message="Hi! I'd like to order from Green Acre Farm Shop"
        vertical="farmos"
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}

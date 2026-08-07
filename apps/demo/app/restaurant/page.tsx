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

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  black: '#0d0a06',
  dark: '#1a1008',
  darkAlt: '#141004',
  amber: '#c4622d',
  amberLight: '#d4783f',
  gold: '#c9a84c',
  cream: '#f5ede1',
  creamDark: '#e8ddd0',
  warmGray: '#a89a88',
  textMuted: '#8a7e6e',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'The Garden Kitchen',
  description: 'Farm-to-table dining with seasonal ingredients',
  url: 'https://thegardenkitchen.example.com',
  locale: 'en',
  vertical: 'dineos',
  theme: 'classic',
  branding: { primaryColor: C.dark, accentColor: C.amber },
  contact: {
    phone: '+44 20 7946 0958',
    email: 'info@thegardenkitchen.com',
    whatsapp: '+442079460958',
    address: '42 Neal Street, Mayfair, London W1K 3PS',
    coordinates: { lat: 51.5094, lng: -0.1478 },
  },
  social: {
    instagram: 'thegardenkitchen',
    facebook: 'https://facebook.com/thegardenkitchen',
  },
  seo: {
    title: 'The Garden Kitchen | Authentic Italian Kitchen',
    description: 'Traditional Italian cuisine in the heart of Mayfair, London.',
  },
}

// ─────────────────────────────────────────────
// MENU DATA — Bento Cards
// ─────────────────────────────────────────────
interface BentoMenuItem {
  name: string
  desc: string
  price: number
  tags: string[]
  image?: string
  featured?: boolean
}

const menuItems: BentoMenuItem[] = [
  {
    name: 'Ossobuco alla Milanese',
    desc: 'Braised veal shank, gremolata, saffron risotto',
    price: 28,
    tags: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=800&fit=crop',
    featured: true,
  },
  {
    name: 'Tagliatelle al Ragu',
    desc: 'Fresh egg pasta, 6-hour Bolognese',
    price: 16,
    tags: [],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop',
  },
  {
    name: 'Margherita DOC',
    desc: 'San Marzano, buffalo mozzarella, basil',
    price: 12,
    tags: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
  },
  {
    name: 'Burrata con Prosciutto',
    desc: 'San Daniele prosciutto, arugula, EVOO',
    price: 14,
    tags: [],
  },
  {
    name: 'Risotto ai Funghi Porcini',
    desc: 'Carnaroli rice, wild porcini, aged parmesan',
    price: 18,
    tags: ['gluten-free', 'vegetarian'],
  },
  {
    name: 'Spaghetti alle Vongole',
    desc: 'Fresh clams, garlic, white wine, parsley',
    price: 17,
    tags: [],
  },
  {
    name: 'Branzino al Forno',
    desc: 'Oven-roasted sea bass, cherry tomatoes, olives',
    price: 24,
    tags: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1534766555764-ce878a4e03f7?w=400&h=400&fit=crop',
  },
  {
    name: 'Tiramisu della Casa',
    desc: 'Our signature — mascarpone, espresso, cocoa',
    price: 9,
    tags: ['vegetarian'],
  },
  {
    name: 'Carpaccio di Manzo',
    desc: 'Thinly sliced raw beef, rocket, parmesan, lemon',
    price: 16,
    tags: ['gluten-free'],
  },
  {
    name: 'Panna Cotta',
    desc: 'Vanilla, seasonal berry compote',
    price: 8,
    tags: ['gluten-free', 'vegetarian'],
  },
]

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  {
    id: '1',
    author: 'Sofia M.',
    rating: 5,
    text: "The best pasta I've had outside of my nonna's kitchen. The tagliatelle al ragu is extraordinary — you can taste the 6 hours of slow cooking.",
    date: '2026-07-15',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'James P.',
    rating: 5,
    text: 'Walked in without a reservation on a Saturday night. Marco himself found us a table. The ossobuco was perfection.',
    date: '2026-07-22',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Elena K.',
    rating: 4,
    text: "Beautiful atmosphere, incredible wine list, and the tiramisu is the best in London. Only reason it's not 5 stars is the wait — but it's worth it.",
    date: '2026-08-01',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '4',
    author: 'Thomas B.',
    rating: 5,
    text: 'We booked via WhatsApp and received confirmation in 30 seconds. The whole experience was seamless — from booking to the last drop of limoncello.',
    date: '2026-08-03',
    source: 'google',
    verified: true,
  },
  {
    id: '5',
    author: 'Amara L.',
    rating: 5,
    text: 'Every dish tells a story. The seasonal tasting menu was transcendent. Marco came to our table and explained every course. This is not a restaurant, it is theatre.',
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
]

// ─────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop', label: 'The Dining Room', large: true },
  { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop', label: 'Fresh Pasta' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop', label: 'Margherita DOC' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop', label: 'Candlelight', large: true },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop', label: 'Seasonal Plates' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop', label: 'The Wine Cellar' },
  { src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop', label: 'Chef Marco' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop', label: 'Ossobuco' },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'Do you take reservations?', answer: 'Yes! Book directly on this page or send us a WhatsApp message. We confirm within minutes.' },
  { question: 'Do you cater for dietary requirements?', answer: 'Absolutely. Our menu includes vegan, vegetarian, and gluten-free options. Let us know about any allergies when booking.' },
  { question: 'Is there parking nearby?', answer: 'Valet parking is available Friday-Sunday. On weekdays, the nearest car park is on Avery Row (2 min walk). Green Park station is 4 minutes away.' },
  { question: 'Can you host private events?', answer: 'Yes, our upstairs room seats up to 40 guests. Perfect for birthdays, corporate dinners, and celebrations. Contact us for a custom menu.' },
  { question: 'Do you offer takeaway?', answer: 'Yes, order takeaway directly through our menu. We deliver within 3km via our own riders — no commission apps.' },
]

// ─────────────────────────────────────────────
// BOOKING SLOTS
// ─────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '12:00', available: true, spotsLeft: 4 },
  { id: '2', date: today, time: '12:30', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '13:00', available: true, spotsLeft: 6 },
  { id: '4', date: today, time: '19:00', available: true, spotsLeft: 5 },
  { id: '5', date: today, time: '19:30', available: true, spotsLeft: 1 },
  { id: '6', date: today, time: '20:00', available: true, spotsLeft: 3 },
  { id: '7', date: today, time: '20:30', available: true, spotsLeft: 7 },
  { id: '8', date: today, time: '21:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// INLINE STYLES (custom palette not in Tailwind)
// ─────────────────────────────────────────────
const S = {
  pageBg: { backgroundColor: C.black, color: C.cream } as React.CSSProperties,
  sectionDark: { backgroundColor: C.dark } as React.CSSProperties,
  sectionBlack: { backgroundColor: C.black } as React.CSSProperties,
  amber: { color: C.amber } as React.CSSProperties,
  cream: { color: C.cream } as React.CSSProperties,
  muted: { color: C.textMuted } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  warmGray: { color: C.warmGray } as React.CSSProperties,
  borderAmber: { borderColor: C.amber } as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  1. NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass-dark"
      style={{ borderBottom: `1px solid ${C.amber}22` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-light tracking-[0.3em] text-sm uppercase" style={S.cream}>
          The Garden Kitchen
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Menu', 'Story', 'Gallery', 'Booking'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.warmGray }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.warmGray)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500 border-glow"
            style={{ borderColor: C.amber, color: C.amber }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.amber
              e.currentTarget.style.color = C.black
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.amber
            }}
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'The Garden Kitchen',
  description: 'Traditional Italian cuisine in the heart of Mayfair, London.',
  url: 'https://thegardenkitchen.example.com',
  telephone: '+44 20 7946 0958',
  email: 'info@thegardenkitchen.com',
  servesCuisine: 'Italian',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42 Neal Street, Mayfair',
    addressLocality: 'London',
    postalCode: 'W1K 3PS',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5094,
    longitude: -0.1478,
  },
  sameAs: [
    'https://instagram.com/thegardenkitchen',
    'https://facebook.com/thegardenkitchen',
  ],
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Mains',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Ossobuco alla Milanese', description: 'Braised veal shank, gremolata, saffron risotto', offers: { '@type': 'Offer', price: '28', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Tagliatelle al Ragu', description: 'Fresh egg pasta, 6-hour Bolognese', offers: { '@type': 'Offer', price: '16', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Margherita DOC', description: 'San Marzano, buffalo mozzarella, basil', offers: { '@type': 'Offer', price: '12', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Burrata con Prosciutto', description: 'San Daniele prosciutto, arugula, EVOO', offers: { '@type': 'Offer', price: '14', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Risotto ai Funghi Porcini', description: 'Carnaroli rice, wild porcini, aged parmesan', offers: { '@type': 'Offer', price: '18', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Spaghetti alle Vongole', description: 'Fresh clams, garlic, white wine, parsley', offers: { '@type': 'Offer', price: '17', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Branzino al Forno', description: 'Oven-roasted sea bass, cherry tomatoes, olives', offers: { '@type': 'Offer', price: '24', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Carpaccio di Manzo', description: 'Thinly sliced raw beef, rocket, parmesan, lemon', offers: { '@type': 'Offer', price: '16', priceCurrency: 'GBP' } },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Desserts',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Tiramisu della Casa', description: 'Our signature — mascarpone, espresso, cocoa', offers: { '@type': 'Offer', price: '9', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Panna Cotta', description: 'Vanilla, seasonal berry compote', offers: { '@type': 'Offer', price: '8', priceCurrency: 'GBP' } },
        ],
      },
    ],
  },
}

const restaurantFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you take reservations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Book directly on this page or send us a WhatsApp message. We confirm within minutes.' } },
    { '@type': 'Question', name: 'Do you cater for dietary requirements?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Our menu includes vegan, vegetarian, and gluten-free options. Let us know about any allergies when booking.' } },
    { '@type': 'Question', name: 'Is there parking nearby?', acceptedAnswer: { '@type': 'Answer', text: 'Valet parking is available Friday-Sunday. On weekdays, the nearest car park is on Avery Row (2 min walk). Green Park station is 4 minutes away.' } },
    { '@type': 'Question', name: 'Can you host private events?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our upstairs room seats up to 40 guests. Perfect for birthdays, corporate dinners, and celebrations. Contact us for a custom menu.' } },
    { '@type': 'Question', name: 'Do you offer takeaway?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, order takeaway directly through our menu. We deliver within 3km via our own riders — no commission apps.' } },
  ],
}

export default function DineOSDemoPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantFaqJsonLd) }} />
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ background: C.amber }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Cinematic Split Screen
          ═══════════════════════════════════════ */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[55fr_45fr]">
        {/* Left: Editorial food image */}
        <div className="relative h-[50vh] md:h-screen overflow-hidden image-reveal">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=1800&fit=crop&q=90"
            alt="The Garden Kitchen — fine dining table setting"
            className="w-full h-full object-cover"
          />
          {/* Subtle right-edge gradient blending into dark side */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to right, transparent 60%, ${C.dark})`,
            }}
          />
          {/* Bottom gradient for mobile text readability */}
          <div
            className="absolute inset-0 pointer-events-none md:hidden"
            style={{
              background: `linear-gradient(to top, ${C.dark} 10%, transparent 50%)`,
            }}
          />
        </div>

        {/* Right: Content on dark bg */}
        <div
          className="relative flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 grain"
          style={S.sectionDark}
        >
          {/* Decorative blob */}
          <div
            className="blob absolute -top-20 -right-20 w-[300px] h-[300px] opacity-20 pointer-events-none"
            style={{ backgroundColor: C.amber, filter: 'blur(80px)' }}
          />

          {/* Staggered title reveal */}
          <div className="relative z-10 stagger-children">
            <p
              className="reveal-clip-up text-xs tracking-[0.4em] uppercase mb-6"
              style={S.amber}
            >
              Est. 1998 &middot; Mayfair, London
            </p>

            <h1 className="mb-8">
              {['Authentic', 'Italian', 'Kitchen'].map((word, i) => (
                <span
                  key={word}
                  className="reveal-clip-up block text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tight"
                  style={{
                    ...S.cream,
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              className="reveal-up text-base md:text-lg font-light leading-relaxed max-w-md mb-10"
              style={{ ...S.warmGray, animationDelay: '0.5s' }}
            >
              Fresh pasta made daily. Wood-fired pizza. Seasonal ingredients
              from local farms. A tradition brought from Bologna, served in
              the heart of London for over 25 years.
            </p>

            {/* Stats strip */}
            <div
              className="reveal-up flex flex-wrap gap-8 mb-12 text-xs tracking-[0.15em] uppercase"
              style={{ ...S.muted, animationDelay: '0.6s' }}
            >
              <span>Est. 1998</span>
              <span style={{ color: C.amber }}>|</span>
              <span>Mayfair, London</span>
              <span style={{ color: C.amber }}>|</span>
              <span>Open Tue&ndash;Sun</span>
            </div>

            {/* CTA */}
            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.7s' }}>
              <a
                href="#booking"
                className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 border-glow"
                style={{ borderColor: C.amber, color: C.amber }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.amber
                  e.currentTarget.style.color = C.black
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = C.amber
                }}
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
                style={S.warmGray}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.warmGray)}
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. MARQUEE TICKER
          ═══════════════════════════════════════ */}
      <section
        className="relative diagonal-top py-6 overflow-hidden cursor-default select-none"
        style={{ backgroundColor: C.amber, zIndex: 2 }}
      >
        <div className="marquee" style={{ ['--marquee-pause' as string]: 'paused' }}>
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex items-center gap-8 px-4"
              style={{
                animationPlayState: 'running',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
              onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
            >
              {[
                'Wood-Fired Pizza',
                'Fresh Pasta Daily',
                'Seasonal Tasting Menu',
                'Private Dining',
                'Aperitivo Hour',
                'Sunday Roast',
                'Natural Wines',
                'Chef\'s Table',
              ].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span
                    className="text-sm md:text-base font-light tracking-[0.2em] uppercase"
                    style={{ color: C.black }}
                  >
                    {item}
                  </span>
                  <span className="text-lg" style={{ color: `${C.black}66` }}>
                    &#x2726;
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. STORY — Editorial Split
          ═══════════════════════════════════════ */}
      <section
        id="story"
        className="relative py-24 md:py-40 px-6 md:px-16 overflow-hidden grain"
        style={S.sectionBlack}
      >
        {/* Morphing blob behind image */}
        <div
          className="blob blob-slow absolute top-1/4 left-[10%] w-[400px] h-[400px] opacity-15 pointer-events-none"
          style={{ backgroundColor: C.amber, filter: 'blur(100px)' }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          {/* Left: Chef portrait */}
          <div className="reveal-left image-reveal rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=1100&fit=crop&q=90"
              alt="Chef Marco Bianchi in the kitchen"
              className="w-full h-[500px] md:h-[700px] object-cover"
            />
          </div>

          {/* Right: Story text */}
          <div className="reveal-right">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-6"
              style={S.amber}
            >
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-extralight leading-tight mb-8"
              style={S.cream}
            >
              From Bologna<br />to London
            </h2>

            {/* Pull quote */}
            <blockquote
              className="text-2xl md:text-3xl font-extralight italic leading-snug mb-10 pl-6"
              style={{
                color: C.amber,
                borderLeft: `2px solid ${C.amber}44`,
              }}
            >
              &ldquo;Every dish on our menu tells a story of where it comes
              from and who taught me to make it.&rdquo;
            </blockquote>

            <p
              className="text-base font-light leading-relaxed mb-6"
              style={S.warmGray}
            >
              Marco Bianchi spent 15 years learning the craft of Italian
              cuisine in Bologna&rsquo;s oldest trattorias. In 1998, he brought
              that tradition to London &mdash; one plate at a time. Our pasta is
              made fresh every morning. Our bread is baked in-house. We don&rsquo;t
              take shortcuts because our guests can taste the difference.
            </p>
            <p
              className="text-base font-light leading-relaxed"
              style={S.warmGray}
            >
              Whether it&rsquo;s a Tuesday lunch or a Saturday celebration, every
              guest at The Garden Kitchen is treated like family. We remember your
              name, your favourite wine, and the table you prefer. That&rsquo;s not
              an algorithm &mdash; it&rsquo;s Italian hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. MENU — Bento Grid
          ═══════════════════════════════════════ */}
      <section
        id="menu"
        className="relative py-24 md:py-32 px-6 md:px-16 grain"
        style={S.sectionDark}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>
              The Menu
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>
              What We Serve
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="bento-grid stagger-children">
            {menuItems.map((item, i) => {
              const isFeatured = i === 0 // first item = hero 2x2 card
              return (
                <div
                  key={item.name}
                  className={`glass-card magnetic-card relative overflow-hidden group cursor-pointer reveal-up ${
                    isFeatured ? '' : ''
                  }`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {/* Card image or gradient bg */}
                  {item.image ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to top, ${C.dark}ee 0%, ${C.dark}88 40%, transparent 100%)`,
                        }}
                      />
                    </>
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at bottom right, ${C.amber}11, transparent)`,
                      }}
                    />
                  )}

                  {/* Card content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
                    {/* Tags */}
                    {item.tags.length > 0 && (
                      <div className="flex gap-2 mb-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${C.amber}22`,
                              color: C.amber,
                              border: `1px solid ${C.amber}33`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3
                      className={`font-light leading-tight mb-1 ${
                        isFeatured ? 'text-2xl md:text-3xl' : 'text-base md:text-lg'
                      }`}
                      style={S.cream}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`font-light mb-2 ${
                        isFeatured ? 'text-sm' : 'text-xs'
                      }`}
                      style={S.warmGray}
                    >
                      {item.desc}
                    </p>
                    <p
                      className={`font-light ${isFeatured ? 'text-xl' : 'text-sm'}`}
                      style={S.amber}
                    >
                      &pound;{item.price}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. GALLERY — Staggered Masonry
          ═══════════════════════════════════════ */}
      <section
        id="gallery"
        className="relative py-24 md:py-32 px-6 md:px-16"
        style={S.sectionBlack}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>
              Gallery
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>
              A Glimpse Inside
            </h2>
          </div>

          {/* Asymmetric masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 stagger-children">
            {galleryImages.map((img, i) => {
              const isLarge = img.large
              return (
                <div
                  key={i}
                  className={`reveal-up image-reveal relative group overflow-hidden rounded-xl cursor-pointer ${
                    isLarge ? 'col-span-2 row-span-2' : 'col-span-1'
                  }`}
                  style={{
                    animationDelay: `${i * 0.08}s`,
                    height: isLarge ? undefined : '240px',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    style={{ minHeight: isLarge ? '500px' : '240px' }}
                  />
                  {/* Hover overlay with clip-path reveal */}
                  <div
                    className="absolute inset-0 flex items-end p-5 transition-all duration-500"
                    style={{
                      background: `linear-gradient(to top, ${C.dark}cc, transparent)`,
                      clipPath: 'inset(100% 0 0 0)',
                    }}
                    onMouseEnter={() => {}}
                  >
                    <span
                      className="text-sm tracking-[0.15em] uppercase font-light"
                      style={S.cream}
                    >
                      {img.label}
                    </span>
                  </div>
                  {/* We use a CSS-only approach for the clip-path hover */}
                  <style>{`
                    .image-reveal:hover > div[style*="clip-path"] {
                      clip-path: inset(0 0 0 0) !important;
                    }
                  `}</style>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. BOOKING — Dark + Grain
          ═══════════════════════════════════════ */}
      <section
        id="booking"
        className="relative py-24 md:py-32 px-6 md:px-16 grain overflow-hidden"
        style={S.sectionDark}
      >
        {/* Floating amber blob */}
        <div
          className="blob absolute bottom-0 right-[5%] w-[500px] h-[500px] opacity-10 pointer-events-none"
          style={{ backgroundColor: C.amber, filter: 'blur(120px)' }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          {/* Left: Booking info */}
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>
              Reservations
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.cream}>
              Reserve Your<br />Table
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.warmGray}>
              Book directly &mdash; no commission, no redirect, no middleman.
              We confirm via WhatsApp within minutes.
            </p>

            {/* Info cards */}
            <div className="space-y-6">
              {[
                {
                  title: 'Hours',
                  detail: 'Tue-Thu 12-15, 18-23 | Fri-Sat 12-15, 18-00 | Sun 12-16',
                },
                { title: 'Dress Code', detail: 'Smart casual. No sportswear.' },
                { title: 'Parking', detail: 'Valet on Fri-Sun. Avery Row car park (2 min walk).' },
                { title: 'Private Dining', detail: 'Upstairs room, up to 40 guests. Custom menus.' },
              ].map((info) => (
                <div
                  key={info.title}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="w-1 h-full min-h-[40px] rounded-full flex-shrink-0"
                    style={{ backgroundColor: `${C.amber}44` }}
                  />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.amber}>
                      {info.title}
                    </p>
                    <p className="text-sm font-light" style={S.warmGray}>
                      {info.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: BookingWidget */}
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 347, label: 'guests booked this month' }}
              vertical="dineos"
              onSubmit={async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. REVIEWS — Horizontal scroll
          ═══════════════════════════════════════ */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={S.sectionBlack}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>
            What Our Guests Say
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>
            Reviews
          </h2>
        </div>

        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. FAQ
          ═══════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 px-6 md:px-16 grain"
        style={S.sectionDark}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.amber}>
              Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>
              Frequently Asked
            </h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. FOOTER
          ═══════════════════════════════════════ */}
      <Footer config={siteConfig} locale="en" />

      {/* Floating WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="+442079460958"
        message="Hi! I'd like to know more about The Garden Kitchen"
        vertical="dineos"
      />

      {/* ─── Global inline style for gallery hover ─── */}
      <style>{`
        .image-reveal:hover > div[style*="clip-path"] {
          clip-path: inset(0 0 0 0) !important;
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  )
}

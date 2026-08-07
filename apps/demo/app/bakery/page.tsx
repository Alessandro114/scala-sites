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
  golden: '#c9941a',
  goldenLight: '#e0a820',
  goldenPale: '#f0c44a',
  cream: '#fdf6e3',
  creamDark: '#f5e6c8',
  creamDeep: '#e8d5a3',
  chocolate: '#3c1f0a',
  chocolateMid: '#5a3015',
  chocolateLight: '#7a4520',
  warmWhite: '#fefcf5',
  textMuted: '#9a7a50',
  textDark: '#2a1506',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'La Maison du Pain',
  description: 'Artisan bakery baking fresh daily since 1962',
  url: 'https://lamaisondupain.example.com',
  locale: 'en',
  vertical: 'bakeryos',
  theme: 'warm',
  branding: { primaryColor: C.chocolate, accentColor: C.golden },
  contact: {
    phone: '+44 20 7946 0321',
    email: 'hello@lamaisondupain.com',
    whatsapp: '+442079460321',
    address: '18 Marylebone Lane, London W1U 2PF',
    coordinates: { lat: 51.5183, lng: -0.1502 },
  },
  social: {
    instagram: 'lamaisondupain',
    facebook: 'https://facebook.com/lamaisondupain',
  },
  seo: {
    title: 'La Maison du Pain | Artisan Bakery Since 1962',
    description: 'Handcrafted sourdoughs, croissants and celebration cakes. Baked fresh every morning in London.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
interface BakeryItem {
  name: string
  desc: string
  price: number
  tags: string[]
  image?: string
  fresh?: boolean
}

const dailySelection: BakeryItem[] = [
  {
    name: 'Country Sourdough',
    desc: '48-hour cold ferment, stone-baked, open crumb',
    price: 9,
    tags: ['vegan'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop',
    fresh: true,
  },
  {
    name: 'Butter Croissant',
    desc: '27 layers, AOP Normandy butter, laminated by hand',
    price: 3.5,
    tags: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop',
    fresh: true,
  },
  {
    name: 'Pain au Chocolat',
    desc: 'Valrhona 70% dark, double-chocolate filling',
    price: 3.8,
    tags: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=600&h=600&fit=crop',
    fresh: true,
  },
  {
    name: 'Ciabatta Pugliese',
    desc: 'Durum wheat, high-hydration, Italian-style',
    price: 4.5,
    tags: ['vegan'],
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&h=600&fit=crop',
  },
  {
    name: 'Almond Tart',
    desc: 'Brown butter frangipane, seasonal stone fruit',
    price: 5.5,
    tags: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&h=600&fit=crop',
  },
  {
    name: 'Rye & Caraway',
    desc: 'Nordic-style, 60% dark rye, caraway seeds',
    price: 7,
    tags: ['vegan'],
    fresh: true,
  },
  {
    name: 'Focaccia Rosmarino',
    desc: 'Rosemary, fleur de sel, EVOO poolish',
    price: 5,
    tags: ['vegan'],
  },
  {
    name: 'Pain de Mie',
    desc: 'Soft sandwich loaf, enriched dough, sliced',
    price: 4,
    tags: ['vegetarian'],
  },
]

const celebrationCakes = [
  {
    name: 'Wedding Tier',
    desc: 'Multi-tier, fondant or naked finish, seasonal florals',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=700&fit=crop',
  },
  {
    name: 'Birthday Entremets',
    desc: 'Mousse-style celebration cake, mirror glaze',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=700&fit=crop',
  },
  {
    name: 'Croquembouche',
    desc: 'Classic French profiterole tower, caramel spun',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=700&fit=crop',
  },
  {
    name: 'Bespoke Tart',
    desc: 'Custom flavour, hand-decorated, serves 8–12',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=700&fit=crop',
  },
  {
    name: 'Macaron Tower',
    desc: 'French macarons, 8 flavours, tiered display',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&h=700&fit=crop',
  },
  {
    name: 'Yule Log',
    desc: 'Bûche de Noël, dark chocolate ganache bark',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=700&fit=crop',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Source',
    desc: 'Heritage grains from UK family farms. Stone-milled flour, arriving weekly. We know every farmer by name.',
    icon: '⚘',
  },
  {
    step: '02',
    title: 'Mix',
    desc: 'All doughs mixed by hand or slow spiral. No additives, no improvers. Just flour, water, salt, and time.',
    icon: '◎',
  },
  {
    step: '03',
    title: 'Prove',
    desc: '24–72 hours cold fermentation. Slow proving builds flavour complexity and digestibility naturally.',
    icon: '◑',
  },
  {
    step: '04',
    title: 'Bake',
    desc: '300°C stone deck ovens. Each loaf scored by hand. Out of the oven at 5am. On the shelf by 7am.',
    icon: '◈',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Claudia R.',
    rating: 5,
    text: 'The sourdough here has ruined all other bread for me. The crust, the crumb, the tang — I drive 40 minutes every Saturday morning.',
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Ben H.',
    rating: 5,
    text: 'Ordered our wedding cake here. Three tiers, elderflower and lemon. Every guest asked where we got it. Absolute perfection.',
    date: '2026-08-01',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Nadia F.',
    rating: 5,
    text: 'The croissants are a religious experience. Buttery, flaky, with that perfect honeycomb interior. I come every morning before work.',
    date: '2026-07-28',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '4',
    author: 'Oliver T.',
    rating: 5,
    text: "I've been ordering a weekly bread box subscription for 8 months. The quality never wavers. This is what an artisan bakery should be.",
    date: '2026-07-15',
    source: 'google',
    verified: true,
  },
  {
    id: '5',
    author: 'Priya S.',
    rating: 5,
    text: 'Booked a custom birthday cake via WhatsApp. They called to discuss flavours, sent photos during decoration, delivered on time. Exceptional service.',
    date: '2026-08-04',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'What time does the bakery open?',
    answer: 'We open at 7:00am Tuesday to Sunday. The bread comes out of the oven at 5am and is on the shelves by opening. Croissants sell out by 10am — arrive early or pre-order.',
  },
  {
    question: 'Can I pre-order bread or pastries?',
    answer: 'Yes — message us on WhatsApp by 6pm the evening before and we\'ll reserve your order. Subscribers to our weekly bread box get priority allocation.',
  },
  {
    question: 'How far in advance should I order a celebration cake?',
    answer: 'For wedding cakes, we ask for 6–8 weeks minimum. Birthday cakes and entremets need at least 2 weeks. Tarts and standard orders can usually be done in 5–7 days.',
  },
  {
    question: 'Do you offer gluten-free or allergen-free options?',
    answer: 'Our kitchen handles gluten, nuts, and dairy daily. We cannot guarantee a fully allergen-free environment. We do offer a dedicated gluten-free sourdough baked separately on Thursdays — pre-order required.',
  },
  {
    question: 'Do you do local delivery?',
    answer: 'We deliver within 5km Monday to Saturday. Minimum order £25. Delivery slots: 7am–10am. Free delivery on orders over £60.',
  },
  {
    question: 'What is the loyalty programme?',
    answer: 'Our Boulangerie Card stamps once per visit. 10 stamps = a free loaf of your choice. 25 stamps = a free pastry box. Cards are digital via WhatsApp — no physical card needed.',
  },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '09:00', available: true, spotsLeft: 3 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 5 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '11:00', available: true, spotsLeft: 2 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 4 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '15:00', available: true, spotsLeft: 6 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const bakeryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'La Maison du Pain',
  description: 'Artisan bakery baking fresh sourdoughs, croissants, and celebration cakes daily since 1962.',
  url: 'https://lamaisondupain.example.com',
  telephone: '+44 20 7946 0321',
  email: 'hello@lamaisondupain.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Marylebone Lane',
    addressLocality: 'London',
    postalCode: 'W1U 2PF',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5183, longitude: -0.1502 },
  openingHours: ['Tu-Su 07:00-18:00'],
  servesCuisine: ['French', 'Artisan Bread'],
  foundingDate: '1962',
  priceRange: '££',
  sameAs: ['https://instagram.com/lamaisondupain'],
}

const bakeryFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
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
      style={{
        backgroundColor: `${C.cream}f0`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.creamDeep}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: C.chocolate,
            fontSize: '1.1rem',
            letterSpacing: '0.05em',
          }}
        >
          La Maison du Pain
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Selection', 'Cakes', 'Process', 'Order'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: C.textMuted, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.chocolate)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#order"
            style={{
              backgroundColor: C.golden,
              color: C.warmWhite,
              padding: '0.5rem 1.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goldenLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.golden)}
          >
            Order a Cake
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function BakeryPage() {
  return (
    <div style={{ backgroundColor: C.cream, color: C.chocolate }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryFaqJsonLd) }}
      />

      {/* Keyframes */}
      <style>{`
        @keyframes steamRise {
          0% { transform: translateY(0) scaleX(1); opacity: 0.7; }
          50% { transform: translateY(-40px) scaleX(1.3); opacity: 0.4; }
          100% { transform: translateY(-80px) scaleX(0.8); opacity: 0; }
        }
        @keyframes rotateShowcase {
          0%, 28% { opacity: 1; transform: scale(1); }
          33%, 61% { opacity: 0; transform: scale(1.04); }
          66%, 94% { opacity: 0; transform: scale(1.04); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes rotateShowcase2 {
          0%, 28% { opacity: 0; transform: scale(1.04); }
          33%, 61% { opacity: 1; transform: scale(1); }
          66%, 94% { opacity: 0; transform: scale(1.04); }
          100% { opacity: 0; transform: scale(1.04); }
        }
        @keyframes rotateShowcase3 {
          0%, 61% { opacity: 0; transform: scale(1.04); }
          66%, 94% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.04); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,148,26,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(201,148,26,0); }
        }
        .steam-wisp {
          animation: steamRise 3s ease-in-out infinite;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          filter: blur(6px);
        }
        .steam-wisp:nth-child(2) { animation-delay: 0.8s; }
        .steam-wisp:nth-child(3) { animation-delay: 1.6s; }
        .anim-fade-up { animation: fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .anim-delay-1 { animation-delay: 0.1s; }
        .anim-delay-2 { animation-delay: 0.25s; }
        .anim-delay-3 { animation-delay: 0.4s; }
        .anim-delay-4 { animation-delay: 0.55s; }
        .anim-delay-5 { animation-delay: 0.7s; }
        .showcase-img-1 { animation: rotateShowcase 9s ease-in-out infinite; }
        .showcase-img-2 { animation: rotateShowcase2 9s ease-in-out infinite; }
        .showcase-img-3 { animation: rotateShowcase3 9s ease-in-out infinite; }
        .cake-card:hover img { transform: scale(1.06); }
        .daily-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(201,148,26,0.2); }
        .process-step:hover .step-icon { transform: rotate(180deg); }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Golden Hour Split
          ═══════════════════════════════════════ */}
      <section
        className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16"
        style={{
          background: `linear-gradient(135deg, ${C.creamDark} 0%, #f5e6c8 40%, #e8d090 100%)`,
        }}
      >
        {/* Left: Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 relative">
          {/* Golden glow blob */}
          <div
            className="absolute top-1/4 left-0 w-64 h-64 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${C.golden}30 0%, transparent 70%)`,
              filter: 'blur(40px)',
            }}
          />

          {/* "Since 1962" badge */}
          <div
            className="anim-fade-up inline-flex items-center gap-2 self-start mb-8 px-4 py-2 rounded-full"
            style={{
              backgroundColor: C.golden,
              color: C.warmWhite,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) both, badgePulse 3s ease-in-out 1s infinite',
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>✦</span>
            Baked Fresh Daily Since 1962
          </div>

          <h1
            className="anim-fade-up anim-delay-1 mb-6"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: C.chocolate,
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              lineHeight: 1.05,
              fontWeight: 300,
            }}
          >
            Bread worth
            <br />
            <em style={{ color: C.golden, fontStyle: 'italic' }}>waking up</em>
            <br />
            early for.
          </h1>

          <p
            className="anim-fade-up anim-delay-2 text-base md:text-lg font-light leading-relaxed mb-10 max-w-sm"
            style={{ color: C.textMuted }}
          >
            Stone-milled heritage grains. Hand-scored loaves. 27-layer croissants.
            Everything on the shelf by 7am — because good bread doesn&rsquo;t wait.
          </p>

          {/* Steam wisps above a bread icon */}
          <div className="anim-fade-up anim-delay-3 flex items-end gap-1 mb-8 h-16">
            <div
              className="steam-wisp"
              style={{ width: 10, height: 24, marginBottom: 4, animationDelay: '0s' }}
            />
            <div
              className="steam-wisp"
              style={{ width: 14, height: 32, animationDelay: '0.8s' }}
            />
            <div
              className="steam-wisp"
              style={{ width: 10, height: 20, marginBottom: 8, animationDelay: '1.6s' }}
            />
            <div
              style={{
                marginLeft: 8,
                fontSize: '2.5rem',
                lineHeight: 1,
                filter: 'drop-shadow(0 4px 8px rgba(201,148,26,0.3))',
              }}
            >
              🍞
            </div>
          </div>

          <div className="anim-fade-up anim-delay-4 flex flex-wrap gap-4">
            <a
              href="#selection"
              style={{
                backgroundColor: C.chocolate,
                color: C.cream,
                padding: '0.9rem 2rem',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'inline-block',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.chocolateMid)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.chocolate)}
            >
              Today&rsquo;s Selection
            </a>
            <a
              href="#order"
              style={{
                border: `2px solid ${C.golden}`,
                color: C.golden,
                padding: '0.9rem 2rem',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'inline-block',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.golden
                e.currentTarget.style.color = C.warmWhite
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.golden
              }}
            >
              Order a Cake
            </a>
          </div>
        </div>

        {/* Right: Rotating pastry showcase */}
        <div className="relative overflow-hidden h-[55vh] md:h-auto">
          <img
            className="showcase-img-1 absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&h=1100&fit=crop&q=90"
            alt="Artisan sourdough bread"
          />
          <img
            className="showcase-img-2 absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&h=1100&fit=crop&q=90"
            alt="Butter croissants"
            style={{ opacity: 0 }}
          />
          <img
            className="showcase-img-3 absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=900&h=1100&fit=crop&q=90"
            alt="Almond tart"
            style={{ opacity: 0 }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${C.creamDark}, transparent)`,
            }}
          />
          {/* Open hours tag */}
          <div
            className="absolute bottom-8 left-8 px-4 py-3 rounded-xl"
            style={{
              backgroundColor: `${C.warmWhite}ee`,
              backdropFilter: 'blur(8px)',
              border: `1px solid ${C.creamDeep}`,
            }}
          >
            <p style={{ color: C.golden, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 2 }}>
              Open Today
            </p>
            <p style={{ color: C.chocolate, fontWeight: 500, fontSize: '0.95rem' }}>
              7:00 am — 6:00 pm
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TICKER
          ═══════════════════════════════════════ */}
      <div
        style={{ backgroundColor: C.golden, overflow: 'hidden', padding: '0.9rem 0' }}
      >
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            whiteSpace: 'nowrap',
            animation: 'marquee 22s linear infinite',
          }}
        >
          {[...Array(2)].map((_, d) => (
            <div key={d} style={{ display: 'flex', gap: '3rem', flexShrink: 0 }}>
              {['Sourdough', 'Croissants', 'Ciabatta', 'Pain au Chocolat', 'Wedding Cakes', 'Rye Bread', 'Focaccia', 'Frangipane Tart'].map((item) => (
                <span
                  key={item}
                  style={{
                    color: C.warmWhite,
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  {item}
                  <span style={{ color: `${C.warmWhite}66` }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { from{transform:translateX(0)}to{transform:translateX(-50%)} }`}</style>
      </div>

      {/* ═══════════════════════════════════════
          DAILY SELECTION — Bento Grid
          ═══════════════════════════════════════ */}
      <section
        id="selection"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.warmWhite }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p
              style={{ color: C.golden, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}
            >
              From the Oven
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: C.chocolate,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Today&rsquo;s Selection
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {dailySelection.map((item, i) => (
              <div
                key={item.name}
                className="daily-card"
                style={{
                  backgroundColor: C.cream,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: `1px solid ${C.creamDeep}`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {item.image && (
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                  </div>
                )}
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                    <h3
                      style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: C.chocolate,
                        fontSize: '1rem',
                        fontWeight: 400,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </h3>
                    {item.fresh && (
                      <span
                        style={{
                          backgroundColor: `${C.golden}22`,
                          color: C.golden,
                          fontSize: '0.6rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '999px',
                          border: `1px solid ${C.golden}44`,
                          whiteSpace: 'nowrap',
                          marginLeft: '0.5rem',
                          flexShrink: 0,
                        }}
                      >
                        Fresh Today
                      </span>
                    )}
                  </div>
                  <p style={{ color: C.textMuted, fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {item.desc}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: C.golden, fontWeight: 600, fontSize: '1rem' }}>
                      £{item.price.toFixed(2)}
                    </span>
                    <div style={{ display: 'flex', gap: '0.3rem' }}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.6rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            padding: '0.15rem 0.4rem',
                            borderRadius: '3px',
                            backgroundColor: `${C.chocolate}12`,
                            color: C.chocolateMid,
                          }}
                        >
                          {tag === 'vegetarian' ? 'V' : tag === 'vegan' ? 'VG' : tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CELEBRATION CAKES GALLERY
          ═══════════════════════════════════════ */}
      <section
        id="cakes"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.cream }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              style={{ color: C.golden, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}
            >
              Bespoke Creations
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: C.chocolate,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
              }}
            >
              Wedding &amp; Celebration Cakes
            </h2>
            <p style={{ color: C.textMuted, maxWidth: '480px', margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Every celebration cake is designed and built by hand. From the first consultation
              to the final garnish, no two cakes are alike.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {celebrationCakes.map((cake) => (
              <div
                key={cake.name}
                className="cake-card"
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  height: '340px',
                  backgroundColor: C.creamDark,
                }}
              >
                <img
                  src={cake.image}
                  alt={cake.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, ${C.chocolate}cc 0%, transparent 50%)`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.5rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      color: C.warmWhite,
                      fontSize: '1.15rem',
                      fontWeight: 400,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {cake.name}
                  </h3>
                  <p style={{ color: `${C.warmWhite}cc`, fontSize: '0.8rem', lineHeight: 1.4 }}>
                    {cake.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="#order"
              style={{
                backgroundColor: C.golden,
                color: C.warmWhite,
                padding: '1rem 2.5rem',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'inline-block',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goldenLight)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.golden)}
            >
              Enquire About a Cake
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR PROCESS — Timeline
          ═══════════════════════════════════════ */}
      <section
        id="process"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.chocolate }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p
              style={{ color: C.golden, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}
            >
              The Baker&rsquo;s Method
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: C.cream,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
              }}
            >
              From Grain to Shelf
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
            }}
          >
            {processSteps.map((s, i) => (
              <div
                key={s.step}
                className="process-step"
                style={{ position: 'relative', padding: '2rem', cursor: 'default' }}
              >
                {/* Connecting line */}
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-12 left-full w-full h-px pointer-events-none"
                    style={{
                      background: `linear-gradient(to right, ${C.golden}44, transparent)`,
                      width: '100%',
                      zIndex: 0,
                    }}
                  />
                )}
                <div
                  className="step-icon"
                  style={{
                    fontSize: '2rem',
                    color: C.golden,
                    marginBottom: '1rem',
                    transition: 'transform 0.5s ease',
                    display: 'block',
                  }}
                >
                  {s.icon}
                </div>
                <p style={{ color: `${C.golden}66`, fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
                  Step {s.step}
                </p>
                <h3
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: C.cream,
                    fontSize: '1.4rem',
                    fontWeight: 300,
                    marginBottom: '0.75rem',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: C.textMuted, fontSize: '0.85rem', lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOYALTY CARD
          ═══════════════════════════════════════ */}
      <section
        className="py-20 px-6 md:px-16"
        style={{ backgroundColor: C.creamDark }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Card visual */}
          <div
            style={{
              width: '300px',
              height: '180px',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${C.chocolate} 0%, ${C.chocolateMid} 100%)`,
              padding: '1.5rem',
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(60,31,10,0.3)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -30,
                right: -30,
                width: 120,
                height: 120,
                borderRadius: '50%',
                border: `1px solid ${C.golden}33`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: -60,
                right: -60,
                width: 180,
                height: 180,
                borderRadius: '50%',
                border: `1px solid ${C.golden}22`,
              }}
            />
            <p style={{ color: C.golden, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              La Maison du Pain
            </p>
            <p style={{ color: C.cream, fontFamily: 'Georgia, serif', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
              Boulangerie Card
            </p>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    border: `1.5px solid ${i < 4 ? C.golden : `${C.golden}44`}`,
                    backgroundColor: i < 4 ? C.golden : 'transparent',
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
            <p style={{ color: `${C.cream}66`, fontSize: '0.6rem', marginTop: '0.5rem' }}>4 / 10 — 6 until your free loaf</p>
          </div>
          {/* Text */}
          <div>
            <p style={{ color: C.golden, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Loyalty Programme
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: C.chocolate,
                fontSize: '2rem',
                fontWeight: 300,
                marginBottom: '1rem',
              }}
            >
              Earn while you eat
            </h2>
            <p style={{ color: C.textMuted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Stamp your digital card with every visit. 10 stamps earns you a free loaf of your choice.
              25 stamps unlocks a full pastry box. No app to download — just your WhatsApp.
            </p>
            <a
              href="#"
              style={{
                color: C.golden,
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
            >
              Join via WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: C.warmWhite }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p style={{ color: C.golden, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            What Our Regulars Say
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: C.chocolate,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
            }}
          >
            Word of Mouth
          </h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.cream }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: C.golden, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Questions
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: C.chocolate,
                fontSize: '2.5rem',
                fontWeight: 300,
              }}
            >
              Good to Know
            </h2>
          </div>
          <FAQAccordion items={faqs} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING — Cake Consultation
          ═══════════════════════════════════════ */}
      <section
        id="order"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.chocolate }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p style={{ color: C.golden, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Consultations
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: C.cream,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                marginBottom: '1.5rem',
                lineHeight: 1.2,
              }}
            >
              Book a Cake<br />Consultation
            </h2>
            <p style={{ color: C.textMuted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Every bespoke cake begins with a conversation. Tell us about your occasion,
              your flavour preferences, and your vision — we&rsquo;ll build the rest.
              Consultations are free and take 30 minutes.
            </p>
            {[
              { label: 'Wedding Enquiries', detail: 'Min. 6–8 weeks notice. Tasting session included.' },
              { label: 'Birthday & Celebration', detail: 'From £75. Custom decoration, any flavour.' },
              { label: 'Corporate Orders', detail: 'Branded cakes, gift boxes, bulk orders welcome.' },
            ].map((info) => (
              <div key={info.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: 3, minHeight: 36, backgroundColor: `${C.golden}55`, borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ color: C.golden, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{info.label}</p>
                  <p style={{ color: C.textMuted, fontSize: '0.82rem' }}>{info.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 142, label: 'cake consultations this season' }}
              vertical="bakeryos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 800)) }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442079460321"
        message="Hello! I'd like to know more about La Maison du Pain"
        vertical="bakeryos"
      />
    </div>
  )
}

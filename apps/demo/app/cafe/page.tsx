'use client'

import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  espresso: '#3c2415',
  espressoDark: '#1e1009',
  espressoMid: '#5a3820',
  cream: '#f5ede1',
  creamWarm: '#ede0ce',
  chalk: '#f0efea',
  chalkboard: '#2c2c2c',
  chalkboardLight: '#3d3d3d',
  sage: '#7c9070',
  sageDark: '#5a6e4f',
  sageLight: '#a8c09a',
  textMuted: '#8a7060',
  warmWhite: '#fefaf5',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Workshop Coffee',
  description: 'Third wave coffee house — single origin, expertly brewed',
  url: 'https://workshopcoffee.example.com',
  locale: 'en',
  vertical: 'cafeos',
  theme: 'cozy',
  branding: { primaryColor: C.espresso, accentColor: C.sage },
  contact: {
    phone: '+44 20 7946 0771',
    email: 'hello@workshopcoffee.com',
    whatsapp: '+442079460771',
    address: '27 Clerkenwell Road, London EC1M 5RN',
    coordinates: { lat: 51.5225, lng: -0.1042 },
  },
  social: {
    instagram: 'workshopcoffee',
    facebook: 'https://facebook.com/workshopcoffee',
  },
  seo: {
    title: 'Workshop Coffee | Third Wave Coffee House',
    description: 'Specialty single-origin coffee, expert brewing, artisan food. London Clerkenwell.',
  },
}

// ─────────────────────────────────────────────
// MENU DATA
// ─────────────────────────────────────────────
interface MenuItem {
  name: string
  desc: string
  price: number
  category: 'espresso' | 'filter' | 'food'
  tags?: string[]
  new?: boolean
}

const menuItems: MenuItem[] = [
  { name: 'Flat White', desc: 'Double ristretto, 150ml steamed whole milk, velvety microfoam', price: 3.5, category: 'espresso' },
  { name: 'Cortado', desc: 'Equal parts espresso and warm milk, no froth', price: 3.2, category: 'espresso' },
  { name: 'Oat Latte', desc: 'Double espresso, Oatly barista, 220ml', price: 4.2, category: 'espresso', tags: ['vegan'] },
  { name: 'Espresso Tonic', desc: 'Double shot over fever-tree tonic, orange zest', price: 4.5, category: 'espresso', new: true },
  { name: 'Long Black', desc: 'Double ristretto, hot water poured under the shot', price: 3.0, category: 'espresso' },
  { name: 'Pour Over — V60', desc: 'Single origin, filter-ground, 6-minute brew', price: 5.0, category: 'filter', new: true },
  { name: 'Aeropress', desc: 'Full immersion, 2-min brew, clean and bright', price: 4.8, category: 'filter' },
  { name: 'Cold Brew', desc: '18-hour cold steep, served over ice', price: 4.5, category: 'filter', tags: ['vegan'] },
  { name: 'Filter of the Day', desc: 'Ask us what\'s on — seasonal single-origin', price: 3.8, category: 'filter' },
  { name: 'Smashed Avocado Toast', desc: 'Sourdough, heritage tomato, dukkah, lemon', price: 10, category: 'food', tags: ['vegan'] },
  { name: 'Ricotta Toast', desc: 'House ricotta, honey, walnuts, thyme', price: 9, category: 'food', tags: ['vegetarian'] },
  { name: 'Bacon & Egg Roll', desc: 'Smoked streaky bacon, fried egg, HP sauce, brioche', price: 8, category: 'food' },
]

const originStory = [
  { region: 'Ethiopia — Yirgacheffe', notes: 'Jasmine, bergamot, peach', process: 'Washed', altitude: '1,900–2,200m' },
  { region: 'Colombia — Huila', notes: 'Dark chocolate, caramel, red apple', process: 'Natural', altitude: '1,700–2,000m' },
  { region: 'Guatemala — Antigua', notes: 'Brown sugar, hazelnut, orange zest', process: 'Honey', altitude: '1,500–1,700m' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&h=500&fit=crop', label: 'Interior', wide: true },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop', label: 'Pour Over' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop', label: 'Espresso' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&h=500&fit=crop', label: 'Morning Light', wide: true },
  { src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop', label: 'Latte Art' },
  { src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=500&h=500&fit=crop', label: 'Our Beans' },
  { src: 'https://images.unsplash.com/photo-1519972064555-542444e71b54?w=700&h=500&fit=crop', label: 'Community', wide: false },
  { src: 'https://images.unsplash.com/photo-1485808191679-5f86510bd652?w=500&h=500&fit=crop', label: 'Workshop Space' },
]

const loyaltyPerks = [
  { stamp: 5, reward: 'Free filter coffee or tea' },
  { stamp: 10, reward: 'Free espresso drink (any size)' },
  { stamp: 20, reward: 'Free brunch for two' },
  { stamp: 50, reward: 'Exclusive cupping session + bag of beans' },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Marcus J.',
    rating: 5,
    text: "The best flat white I've had in London. Period. The pour-over selection changes weekly and they actually explain the tasting notes — this is what specialty coffee is supposed to feel like.",
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Yuki T.',
    rating: 5,
    text: 'I\'m a coffee snob and this place gets it right. The Ethiopian on V60 this morning was extraordinary. The staff clearly know their craft.',
    date: '2026-08-02',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '3',
    author: 'Hannah B.',
    rating: 5,
    text: "The ricotta toast and a cortado is my daily ritual now. The space feels like it was designed for people who actually read books.",
    date: '2026-07-25',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Diego M.',
    rating: 4,
    text: 'Incredible coffee programme. The espresso tonic is a revelation. Gets busy mid-morning but worth the wait every time.',
    date: '2026-07-18',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'What beans do you use for espresso?',
    answer: 'We rotate our espresso blend seasonally. Currently we are running a house blend of Colombian Huila and Ethiopian Sidama. Single-origin espresso is available on request.',
  },
  {
    question: 'Do you have oat milk and other alternatives?',
    answer: 'Yes — Oatly Barista, Minor Figures oat, and coconut milk are always available. We do not charge extra for milk alternatives.',
  },
  {
    question: 'Can I work from the café?',
    answer: 'Absolutely. We have strong WiFi, plenty of power sockets, and long communal tables. We ask that you limit to 2 hours during peak times (8–10am, 12–2pm).',
  },
  {
    question: 'Do you do coffee subscriptions or takeaway beans?',
    answer: 'Yes — we sell 250g bags of all our rotating single-origins. Monthly subscription bags available via WhatsApp. 10% off on all bean purchases with a loyalty card.',
  },
  {
    question: 'Are you dog-friendly?',
    answer: 'Very much so. Dogs are welcome inside and we keep a bowl of water by the door. Just ask for a dog treat at the counter.',
  },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const cafeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Workshop Coffee',
  description: 'Third wave coffee house with single-origin beans, expert brewing methods, and artisan food.',
  url: 'https://workshopcoffee.example.com',
  telephone: '+44 20 7946 0771',
  email: 'hello@workshopcoffee.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27 Clerkenwell Road',
    addressLocality: 'London',
    postalCode: 'EC1M 5RN',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5225, longitude: -0.1042 },
  openingHours: ['Mo-Fr 07:30-18:00', 'Sa-Su 08:30-17:00'],
  servesCuisine: 'Coffee',
  priceRange: '£',
}

const cafeFaqJsonLd = {
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
      style={{
        backgroundColor: `${C.espresso}f5`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.espressoMid}66`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          style={{
            color: C.cream,
            fontSize: '0.9rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 300,
          }}
        >
          Workshop Coffee
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Menu', 'Beans', 'Gallery', 'Loyalty'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: C.textMuted, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function CafePage() {
  const categories: Array<{ key: MenuItem['category']; label: string }> = [
    { key: 'espresso', label: 'Espresso Drinks' },
    { key: 'filter', label: 'Filter & Cold' },
    { key: 'food', label: 'Food' },
  ]

  return (
    <div style={{ backgroundColor: C.espressoDark, color: C.cream }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeFaqJsonLd) }} />

      <style>{`
        @keyframes steamCup {
          0% { transform: translateY(0) skew(0deg); opacity: 0.8; }
          30% { transform: translateY(-20px) skew(3deg); opacity: 0.5; }
          60% { transform: translateY(-40px) skew(-2deg); opacity: 0.2; }
          100% { transform: translateY(-60px) skew(1deg); opacity: 0; }
        }
        @keyframes chalkWrite {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0% 0 0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes beanSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .steam-s { animation: steamCup 2.4s ease-out infinite; }
        .steam-s:nth-child(2) { animation-delay: 0.7s; width: 5px !important; }
        .steam-s:nth-child(3) { animation-delay: 1.4s; width: 4px !important; }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .d1 { animation-delay: 0.15s; }
        .d2 { animation-delay: 0.3s; }
        .d3 { animation-delay: 0.45s; }
        .d4 { animation-delay: 0.6s; }
        .menu-card:hover { background: rgba(255,255,255,0.06) !important; }
        .gallery-img:hover img { transform: scale(1.07); }
        .origin-card:hover { border-color: rgba(124,144,112,0.6) !important; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Chalkboard Split
          ═══════════════════════════════════════ */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16">
        {/* Left: Chalkboard side */}
        <div
          className="flex flex-col justify-center px-8 md:px-14 py-16 relative overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${C.chalkboardLight} 0%, ${C.chalkboard} 50%, ${C.espressoDark} 100%)`,
          }}
        >
          {/* Subtle chalk texture lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.3) 28px, rgba(255,255,255,0.3) 29px)',
            }}
          />

          {/* Third Wave badge */}
          <div
            className="fade-up inline-flex self-start items-center gap-2 mb-8 px-3 py-1.5 rounded"
            style={{
              border: `1px solid ${C.sage}66`,
              color: C.sage,
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: C.sage,
                display: 'inline-block',
                animation: 'beanSpin 3s linear infinite',
              }}
            />
            Third Wave Coffee
          </div>

          {/* Chalkboard heading — chalk-style font */}
          <div className="fade-up d1 mb-8">
            <h1
              style={{
                color: C.chalk,
                fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                lineHeight: 1.1,
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              Coffee made
              <br />
              <span
                style={{
                  color: C.sage,
                  fontStyle: 'italic',
                  fontFamily: 'Georgia, serif',
                }}
              >
                properly.
              </span>
            </h1>
          </div>

          {/* Animated chalk menu items */}
          <div
            className="fade-up d2 mb-10 space-y-2"
            style={{ borderLeft: `2px solid ${C.sage}44`, paddingLeft: '1.25rem' }}
          >
            {['Espresso · £2.80', 'Flat White · £3.50', 'V60 Pour Over · £5.00', 'Cold Brew · £4.50'].map((item, i) => (
              <p
                key={item}
                style={{
                  color: `${C.chalk}cc`,
                  fontSize: '0.85rem',
                  letterSpacing: '0.05em',
                  animationDelay: `${0.4 + i * 0.1}s`,
                }}
              >
                {item}
              </p>
            ))}
          </div>

          {/* Steam + coffee cup visual */}
          <div className="fade-up d3 flex items-end gap-0.5 mb-8 h-12">
            <div className="steam-s" style={{ width: 5, height: 20, backgroundColor: `${C.chalk}66`, borderRadius: 3 }} />
            <div className="steam-s" style={{ width: 5, height: 28, backgroundColor: `${C.chalk}55`, borderRadius: 3 }} />
            <div className="steam-s" style={{ width: 4, height: 16, backgroundColor: `${C.chalk}44`, borderRadius: 3 }} />
            <span style={{ fontSize: '2rem', marginLeft: '0.5rem' }}>☕</span>
          </div>

          <div className="fade-up d4 flex flex-wrap gap-3">
            <a
              href="#menu"
              style={{
                backgroundColor: C.sage,
                color: C.warmWhite,
                padding: '0.85rem 2rem',
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.sageDark)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.sage)}
            >
              View Menu
            </a>
            <a
              href="#beans"
              style={{
                border: `1px solid ${C.chalk}44`,
                color: C.chalk,
                padding: '0.85rem 2rem',
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.chalk)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${C.chalk}44`)}
            >
              Our Beans
            </a>
          </div>
        </div>

        {/* Right: Warm coffee photo with steam effect */}
        <div className="relative h-[50vh] md:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&h=1100&fit=crop&q=90"
            alt="Workshop Coffee interior — warm light, coffee cups, wooden tables"
            className="w-full h-full object-cover"
          />
          {/* Warm gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to left, transparent 40%, ${C.chalkboard}88)`,
            }}
          />
          {/* Hours badge */}
          <div
            className="absolute bottom-8 right-8 text-right"
            style={{
              backgroundColor: `${C.espressoDark}ee`,
              backdropFilter: 'blur(8px)',
              padding: '1rem 1.25rem',
              borderRadius: '8px',
              border: `1px solid ${C.espressoMid}44`,
            }}
          >
            <p style={{ color: C.sage, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Today</p>
            <p style={{ color: C.cream, fontSize: '1rem', fontWeight: 300 }}>7:30am – 6:00pm</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MENU — Categorised Cards
          ═══════════════════════════════════════ */}
      <section
        id="menu"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.espresso }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p style={{ color: C.sage, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              What We Serve
            </p>
            <h2 style={{ color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              The Menu
            </h2>
          </div>

          {categories.map(({ key, label }) => (
            <div key={key} style={{ marginBottom: '3rem' }}>
              <h3
                style={{
                  color: C.sage,
                  fontSize: '0.72rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: `1px solid ${C.sage}33`,
                }}
              >
                {label}
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {menuItems.filter((m) => m.category === key).map((item) => (
                  <div
                    key={item.name}
                    className="menu-card"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: `1px solid rgba(255,255,255,0.07)`,
                      borderRadius: '8px',
                      padding: '1rem 1.25rem',
                      transition: 'background 0.2s ease',
                      cursor: 'default',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <h4 style={{ color: C.cream, fontSize: '0.95rem', fontWeight: 300 }}>{item.name}</h4>
                        {item.new && (
                          <span
                            style={{
                              backgroundColor: `${C.sage}33`,
                              color: C.sageLight,
                              fontSize: '0.55rem',
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              padding: '0.15rem 0.4rem',
                              borderRadius: '3px',
                            }}
                          >
                            New
                          </span>
                        )}
                      </div>
                      <span style={{ color: C.sage, fontWeight: 500, fontSize: '0.9rem', flexShrink: 0, marginLeft: '0.75rem' }}>
                        £{item.price.toFixed(2)}
                      </span>
                    </div>
                    <p style={{ color: C.textMuted, fontSize: '0.78rem', lineHeight: 1.5 }}>{item.desc}</p>
                    {item.tags && item.tags.length > 0 && (
                      <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.3rem' }}>
                        {item.tags.map((t) => (
                          <span key={t} style={{ fontSize: '0.6rem', color: C.sageLight, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            [{t}]
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR BEANS — Origin Story
          ═══════════════════════════════════════ */}
      <section
        id="beans"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.espressoDark }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p style={{ color: C.sage, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                The Beans
              </p>
              <h2 style={{ color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Single Origin,<br />
                <span style={{ color: C.sage }}>properly sourced</span>
              </h2>
              <p style={{ color: C.textMuted, fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                We source directly from small farms at altitude. Every bag on our menu
                is traceable to the producer, the lot, and the processing station.
                We pay above fair trade on every purchase.
              </p>
              <p style={{ color: C.textMuted, fontSize: '0.9rem', lineHeight: 1.8 }}>
                Our rotating seasonals change every 6–8 weeks as harvests come in.
                Ask the barista what&rsquo;s exceptional this week — they&rsquo;ll have a strong opinion.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop"
                alt="Coffee beans being sorted by hand"
                style={{ width: '100%', borderRadius: '12px', display: 'block' }}
              />
            </div>
          </div>

          {/* Origins */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {originStory.map((o) => (
              <div
                key={o.region}
                className="origin-card"
                style={{
                  border: `1px solid rgba(255,255,255,0.08)`,
                  borderRadius: '12px',
                  padding: '1.75rem',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <p style={{ color: C.sage, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  On rotation
                </p>
                <h3 style={{ color: C.cream, fontSize: '1rem', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.3 }}>
                  {o.region}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[
                    { label: 'Tasting Notes', val: o.notes },
                    { label: 'Process', val: o.process },
                    { label: 'Altitude', val: o.altitude },
                  ].map((d) => (
                    <div key={d.label}>
                      <p style={{ color: C.textMuted, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                        {d.label}
                      </p>
                      <p style={{ color: C.creamWarm, fontSize: '0.82rem' }}>{d.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY — 8 images
          ═══════════════════════════════════════ */}
      <section
        id="gallery"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.espresso }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p style={{ color: C.sage, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Inside the Workshop
            </p>
            <h2 style={{ color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              The Space
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridAutoRows: '200px',
              gap: '0.75rem',
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-img"
                style={{
                  overflow: 'hidden',
                  borderRadius: '8px',
                  gridColumn: img.wide ? 'span 2' : 'span 1',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(30,16,9,0.7) 0%, transparent 50%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '0.75rem',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0')}
                >
                  <span style={{ color: C.cream, fontSize: '0.75rem', letterSpacing: '0.1em' }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOYALTY PROGRAMME
          ═══════════════════════════════════════ */}
      <section
        id="loyalty"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.espressoDark }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ color: C.sage, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Your Regular Rewards
            </p>
            <h2 style={{ color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              The Loyalty Programme
            </h2>
            <p style={{ color: C.textMuted, maxWidth: 480, margin: '1rem auto 0', fontSize: '0.9rem', lineHeight: 1.7 }}>
              One stamp per visit. The more you come, the better it gets.
              Track your card entirely via WhatsApp — no app needed.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {loyaltyPerks.map((perk) => (
              <div
                key={perk.stamp}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderRadius: '12px',
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    backgroundColor: `${C.sage}22`,
                    border: `2px solid ${C.sage}55`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: C.sage,
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {perk.stamp}
                </div>
                <p style={{ color: C.textMuted, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  stamps
                </p>
                <p style={{ color: C.cream, fontSize: '0.85rem', lineHeight: 1.5 }}>{perk.reward}</p>
              </div>
            ))}
          </div>

          <p style={{ color: C.textMuted, textAlign: 'center', marginTop: '2rem', fontSize: '0.82rem' }}>
            Ask for your digital card on your first visit. Just share your number.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OPENING HOURS
          ═══════════════════════════════════════ */}
      <section
        className="py-20 px-6 md:px-16"
        style={{ backgroundColor: C.espresso }}
      >
        <div className="max-w-3xl mx-auto">
          <p style={{ color: C.sage, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '2rem', textAlign: 'center' }}>
            Opening Hours
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem' }}>
            {[
              { day: 'Monday – Friday', time: '7:30am – 6:00pm' },
              { day: 'Saturday', time: '8:30am – 5:00pm' },
              { day: 'Sunday', time: '9:00am – 4:00pm' },
            ].map((h) => (
              <div
                key={h.day}
                style={{
                  padding: '1.25rem',
                  textAlign: 'center',
                  borderBottom: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <p style={{ color: C.textMuted, fontSize: '0.75rem', marginBottom: '0.3rem' }}>{h.day}</p>
                <p style={{ color: C.cream, fontSize: '1rem', fontWeight: 300 }}>{h.time}</p>
              </div>
            ))}
          </div>
          <p style={{ color: C.textMuted, textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem' }}>
            27 Clerkenwell Road, London EC1M 5RN &middot; Farringdon Station, 3 min walk
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.espressoDark }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p style={{ color: C.sage, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            What Regulars Say
          </p>
          <h2 style={{ color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>Reviews</h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.espresso }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: C.sage, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Good to Know
            </p>
            <h2 style={{ color: C.cream, fontSize: '2.5rem', fontWeight: 300 }}>FAQ</h2>
          </div>
          <FAQAccordion items={faqs} verticalName="CaféOS" locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442079460771"
        message="Hi! I'd like to know more about Workshop Coffee"
        vertical="cafeos"
      />
    </div>
  )
}

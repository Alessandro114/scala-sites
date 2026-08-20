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
  ink: '#1a1a1a',
  inkLight: '#2d2d2d',
  inkFaint: '#404040',
  rice: '#fafaf5',
  riceDeep: '#f0ede6',
  riceDark: '#e4dfd4',
  wasabi: '#7fb069',
  wasabiLight: '#a8c896',
  wasabiDark: '#5a8045',
  nori: '#2d5016',
  soy: '#3c2415',
  red: '#c41e3a',
  redLight: '#e03050',
  textMuted: '#8a8070',
  textSubtle: '#b0a890',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Ryō',
  description: 'Omakase sushi — pure Japanese craft',
  url: 'https://ryo-sushi.example.com',
  locale: 'en',
  vertical: 'sushios',
  theme: 'minimal',
  branding: { primaryColor: C.ink, accentColor: C.red },
  contact: {
    phone: '+44 20 7946 0112',
    email: 'reserve@ryo-sushi.com',
    whatsapp: '+442079460112',
    address: '7 Beak Street, Soho, London W1F 9SB',
    coordinates: { lat: 51.5126, lng: -0.1403 },
  },
  social: {
    instagram: 'ryo_london',
    facebook: 'https://facebook.com/ryolondon',
  },
  seo: {
    title: 'Ryō | Omakase Sushi Restaurant London',
    description: 'Intimate omakase experience by Chef Kenji. Seasonal nigiri, sashimi, sake. Soho, London.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
interface OmakaseCourse {
  course: number
  name: string
  desc: string
  origin?: string
}

const omakaseMenu: OmakaseCourse[] = [
  { course: 1, name: 'Sakizuke', desc: 'Seasonal amuse-bouche — today: cold tofu skin with dashi jelly and yuzu zest', origin: 'Kyoto tradition' },
  { course: 2, name: 'Zensai', desc: 'Three small appetisers: pickled vegetables, edamame with miso, sesame spinach', origin: 'Kaiseki influence' },
  { course: 3, name: 'Oshinogi', desc: 'Pressed sushi (oshizushi): mackerel cured in kombu, vinegared rice, ginger', origin: 'Osaka style' },
  { course: 4, name: 'Tsukuri', desc: 'Seasonal sashimi selection: bluefin tuna, aged yellowtail, live scallop', origin: 'Market-driven' },
  { course: 5, name: 'Yaki', desc: 'Grilled course: miso-glazed black cod, bamboo leaf, pickled plum', origin: 'Kyoto style' },
  { course: 6, name: 'Mushimono', desc: 'Steamed egg custard (chawanmushi): sea urchin, dashi, mitsuba', origin: 'Winter classic' },
  { course: 7, name: 'Nigiri', desc: '8-piece nigiri sequence: chef selects seasonally from market each morning', origin: 'Edo-mae tradition' },
  { course: 8, name: 'Mizugashi', desc: 'Dessert: matcha panna cotta, red bean, salted black sesame ice cream', origin: 'Modern Japanese' },
]

interface CartItem {
  name: string
  jaName: string
  category: 'nigiri' | 'sashimi' | 'maki' | 'roll'
  price: number
  desc?: string
  gf?: boolean
}

const alaCarteItems: CartItem[] = [
  // Nigiri
  { name: 'Tuna', jaName: 'Maguro', category: 'nigiri', price: 7.5, desc: 'Akami — lean bluefin, aged 3 days', gf: true },
  { name: 'Fatty Tuna', jaName: 'Toro', category: 'nigiri', price: 18, desc: 'Premium o-toro, from Spanish bluefin', gf: true },
  { name: 'Sea Bream', jaName: 'Tai', category: 'nigiri', price: 6.5, desc: 'Wild-caught, delicate and clean', gf: true },
  { name: 'Salmon', jaName: 'Sake', category: 'nigiri', price: 6, desc: 'Scottish organic, mild and buttery', gf: true },
  { name: 'Yellowtail', jaName: 'Hamachi', category: 'nigiri', price: 8, desc: 'Aged Japanese amberjack', gf: true },
  { name: 'Sea Urchin', jaName: 'Uni', category: 'nigiri', price: 22, desc: 'Hokkaido Bafun uni — oceanic, sweet', gf: true },
  // Sashimi
  { name: 'Salmon Sashimi', jaName: 'Sake Sashimi', category: 'sashimi', price: 18, desc: '5 pieces, Scottish organic', gf: true },
  { name: 'Tuna Sashimi', jaName: 'Maguro Sashimi', category: 'sashimi', price: 22, desc: '5 pieces, bluefin akami', gf: true },
  { name: 'Sashimi Moriawase', jaName: '刺身盛り合わせ', category: 'sashimi', price: 45, desc: 'Chef selection, 12 pieces, daily seasonal', gf: true },
  // Maki
  { name: 'Cucumber Roll', jaName: 'Kappamaki', category: 'maki', price: 8, desc: '6 pieces, sesame, nori-wrapped', gf: true },
  { name: 'Tuna Roll', jaName: 'Tekkamaki', category: 'maki', price: 12, desc: '6 pieces, lean tuna, wasabi' },
  { name: 'Salmon Avocado', jaName: 'Sake Avo', category: 'maki', price: 11, desc: '8 pieces, inside-out' },
  // Specialty Rolls
  { name: 'Dragon Roll', jaName: 'ドラゴン巻き', category: 'roll', price: 24, desc: 'Prawn tempura, avocado, unagi glaze, tobiko' },
  { name: 'Spider Roll', jaName: 'スパイダー巻き', category: 'roll', price: 22, desc: 'Soft shell crab, cucumber, spicy mayo' },
  { name: 'Rainbow Roll', jaName: 'レインボー巻き', category: 'roll', price: 26, desc: '5 different fish, avocado, tobiko' },
  { name: 'Truffle Wagyu', jaName: 'トリュフ和牛', category: 'roll', price: 38, desc: 'A5 wagyu, black truffle, gold leaf, ponzu' },
  { name: 'Volcano', jaName: 'ボルカノ', category: 'roll', price: 22, desc: 'Crab, cream cheese, spicy tuna on top, torched' },
  { name: 'Tempura Shrimp', jaName: '天ぷら海老巻き', category: 'roll', price: 20, desc: 'Crisp tempura, avocado, sweet chilli' },
  { name: 'Salmon Skin', jaName: '鮭皮巻き', category: 'roll', price: 18, desc: 'Crispy salmon skin, cucumber, sesame, ponzu' },
  { name: 'Edamame Roll', jaName: '枝豆ロール', category: 'roll', price: 16, desc: 'Vegetarian: avocado, edamame, pickled radish', gf: true },
]

const sakeList = [
  { name: 'Dassai 23', region: 'Yamaguchi', type: 'Junmai Daiginjo', desc: 'Elegant, pear and melon, ultra-refined. The gold standard.', glass: 18, bottle: 90 },
  { name: 'Hakkaisan Yukimuro', region: 'Niigata', type: 'Junmai Ginjo', desc: 'Snow-aged 3 years. Clean, dry, subtle umami depth.', glass: 14, bottle: 68 },
  { name: 'Koshi no Kanbai', region: 'Niigata', type: 'Honjozo', desc: 'Dry, mineral, perfect with fatty fish. Classic izakaya choice.', glass: 10, bottle: 48 },
  { name: 'Suigei Tokubetsu', region: 'Kochi', type: 'Junmai', desc: 'Boldly dry — "drunken whale". Crisp rice, clean finish.', glass: 12, bottle: 55 },
  { name: 'Dewazakura Oka', region: 'Yamagata', type: 'Junmai Ginjo', desc: 'Floral, ginjo aroma, gentle acidity. Widely loved entry point.', glass: 9, bottle: 42 },
  { name: 'Seasonal Sparkling', region: 'Various', type: 'Sparkling Sake', desc: 'Light, effervescent, low-alcohol (8%). Beautiful with sashimi.', glass: 11, bottle: 52 },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&h=600&fit=crop', wide: true, label: 'Omakase Course' },
  { src: 'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?w=500&h=500&fit=crop', label: 'Nigiri Prep' },
  { src: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&h=500&fit=crop', label: 'Chef Kenji' },
  { src: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=500&h=500&fit=crop', label: 'The Counter' },
  { src: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&h=600&fit=crop', wide: true, label: 'Sashimi Moriawase' },
  { src: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=500&h=500&fit=crop', label: 'Sake Selection' },
  { src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop', label: 'Detail' },
  { src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&h=500&fit=crop', label: 'Plating' },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'William C.',
    rating: 5,
    text: 'The omakase here is a spiritual experience. Chef Kenji talked us through every piece of nigiri — the origin, the aging, the rice temperature. 8 courses flew by. We sat for 3 hours without noticing.',
    date: '2026-08-02',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Yuki H.',
    rating: 5,
    text: 'As a Japanese person, it means everything when a restaurant in London gets it right. The rice here is exceptional — you can tell it was made with care. Ryō is the real thing.',
    date: '2026-07-25',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '3',
    author: 'Elena B.',
    rating: 5,
    text: "The uni nigiri changed my life. I don't say that lightly. The Dassai 23 pairing Kenji suggested made it perfect.",
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'David M.',
    rating: 5,
    text: "Reserved for our anniversary. The space, the silence, the precision — it felt like Tokyo. The wagyu truffle roll is astonishing. We're already booked for our return.",
    date: '2026-08-01',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'How far in advance should I book?',
    answer: 'For omakase, we recommend 2–4 weeks in advance, especially for Friday and Saturday evenings. A la carte tables are often available at 1 week notice. Last-minute availability via WhatsApp.',
  },
  {
    question: 'What is included in the omakase?',
    answer: 'The omakase is a seasonal 8-course chef\'s selection (£135/person). It changes based on what Chef Kenji selects at Billingsgate market each morning. No two seatings are identical.',
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer: 'Please inform us when booking. We can accommodate most restrictions with advance notice. A fully pescatarian omakase is standard. Vegetarian omakase available with 48 hours notice.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Omakase cancellations must be made 48+ hours before your reservation. Late cancellations incur a £45/person fee. For a la carte, 24 hours notice is appreciated.',
  },
  {
    question: 'Do you have a dress code?',
    answer: 'Smart casual. We ask that guests dress thoughtfully. The atmosphere is quiet and refined — this is not a casual dining environment.',
  },
  {
    question: 'Is sake pairing available with the omakase?',
    answer: 'Yes — our sake pairing (6 pours chosen by Chef Kenji) is £65/person. Wine pairing at £75/person. Advance selection recommended when booking.',
  },
  {
    question: 'Can I bring my own sake or wine?',
    answer: 'We allow corkage with advance arrangement. Sake: £30/bottle. Wine: £45/bottle. Please inform us when booking so we can arrange appropriate glassware.',
  },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '18:00', available: true, spotsLeft: 4 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '18:30', available: true, spotsLeft: 2 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '20:00', available: true, spotsLeft: 6 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '20:30', available: true, spotsLeft: 3 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '21:00', available: true, spotsLeft: 2 },
]

const sushiJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Ryō',
  description: 'Intimate omakase sushi restaurant with seasonal nigiri, sashimi, and curated sake selection.',
  url: 'https://ryo-sushi.example.com',
  telephone: '+44 20 7946 0112',
  servesCuisine: 'Japanese',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Beak Street, Soho',
    addressLocality: 'London',
    postalCode: 'W1F 9SB',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5126, longitude: -0.1403 },
  openingHours: ['Tu-Su 18:00-23:00'],
  priceRange: '££££',
}

const sushiFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `${C.rice}f0`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.riceDark}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          style={{
            color: C.ink,
            fontSize: '1.5rem',
            fontFamily: 'Georgia, serif',
            letterSpacing: '-0.02em',
          }}
        >
          Ry<span style={{ color: C.red }}>ō</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Omakase', 'À La Carte', 'Sake', 'Reserve'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`}
              style={{ color: C.textMuted, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.ink)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#reserve"
            style={{
              backgroundColor: C.red,
              color: C.rice,
              padding: '0.5rem 1.4rem',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.redLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.red)}
          >
            Reserve
          </a>
        </div>
      </div>
    </nav>
  )
}

export default function SushiPage() {
  const categories: Array<{ key: CartItem['category']; label: string; jaLabel: string }> = [
    { key: 'nigiri', label: 'Nigiri', jaLabel: '握り' },
    { key: 'sashimi', label: 'Sashimi', jaLabel: '刺身' },
    { key: 'maki', label: 'Maki', jaLabel: '巻き' },
    { key: 'roll', label: 'Specialty Rolls', jaLabel: '特製ロール' },
  ]

  return (
    <div style={{ backgroundColor: C.rice, color: C.ink }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sushiJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sushiFaqJsonLd) }} />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes inkDraw {
          from { stroke-dashoffset: 800; opacity: 0.3; }
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes sealPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes waveMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .d1 { animation-delay: 0.12s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.38s; }
        .d4 { animation-delay: 0.5s; }
        .d5 { animation-delay: 0.62s; }
        .ink-path { animation: inkDraw 2.5s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
        .seal-pulse { animation: sealPulse 4s ease-in-out infinite; }
        .wave-anim { animation: waveMove 20s linear infinite; }
        .menu-row:hover { background: rgba(196,30,58,0.04) !important; }
        .sake-card:hover { border-color: rgba(63,36,21,0.3) !important; }
        .gallery-img:hover img { transform: scale(1.06); }
        .course-row:hover .course-num { color: ${C.red} !important; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Minimal Japanese / Zen Asymmetric
          ═══════════════════════════════════════ */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
        style={{ backgroundColor: C.rice }}
      >
        {/* Background decorative kanji — large, faint */}
        <div
          className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{
            fontFamily: 'serif',
            fontSize: 'clamp(200px, 35vw, 420px)',
            color: `${C.riceDeep}`,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            userSelect: 'none',
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          料
        </div>

        {/* Animated ink SVG wave pattern at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
          style={{ height: 60, zIndex: 2 }}
        >
          <svg
            className="wave-anim"
            style={{ width: '200%', height: '100%' }}
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 30 C180 55 360 5 540 30 C720 55 900 5 1080 30 C1260 55 1440 5 1440 30 L1440 60 L0 60 Z"
              fill={C.riceDeep}
              opacity="0.5"
            />
            <path
              d="M0 40 C180 60 360 20 540 40 C720 60 900 20 1080 40 C1260 60 1440 20 1440 40 L1440 60 L0 60 Z"
              fill={C.riceDark}
              opacity="0.4"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-8 md:px-16 relative z-10 w-full">
          <div style={{ maxWidth: 620 }}>
            {/* Red hanko seal */}
            <div
              className="fade-up seal-pulse mb-12"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 52,
                height: 52,
                border: `2px solid ${C.red}`,
                color: C.red,
                fontSize: '1rem',
                fontFamily: 'serif',
                letterSpacing: '-0.05em',
              }}
            >
              龍
            </div>

            {/* Ink-drawn style SVG horizontal rule */}
            <div className="fade-up d1 mb-8" style={{ overflow: 'hidden' }}>
              <svg width="120" height="3" viewBox="0 0 120 3" fill="none">
                <path
                  className="ink-path"
                  d="M2 1.5 C40 0.5 80 2.5 118 1.5"
                  stroke={C.ink}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="800"
                />
              </svg>
            </div>

            <p
              className="fade-up d1"
              style={{ color: C.textMuted, fontSize: '0.72rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}
            >
              Soho, London &middot; Omakase &middot; À La Carte
            </p>

            <h1
              className="fade-up d2"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(4rem, 10vw, 10rem)',
                fontWeight: 300,
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                color: C.ink,
                marginBottom: '0.25rem',
              }}
            >
              OMAKASE
            </h1>

            {/* Japanese subtitle */}
            <p
              className="fade-up d3"
              style={{
                fontFamily: 'serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
                color: C.textSubtle,
                letterSpacing: '0.15em',
                marginBottom: '3rem',
              }}
            >
              おまかせ — Chef&rsquo;s Seasonal Selection
            </p>

            <p
              className="fade-up d3"
              style={{
                color: C.textMuted,
                fontSize: '0.95rem',
                lineHeight: 2,
                maxWidth: 480,
                marginBottom: '3.5rem',
                fontWeight: 300,
              }}
            >
              Eight courses. Each morning, Chef Kenji visits Billingsgate and selects
              what will be served that evening. No printed menu exists until 6pm.
              Trust is the only ingredient that never changes.
            </p>

            {/* Price anchors */}
            <div
              className="fade-up d4"
              style={{
                display: 'flex',
                gap: '3rem',
                marginBottom: '3.5rem',
                paddingBottom: '3rem',
                borderBottom: `1px solid ${C.riceDark}`,
              }}
            >
              {[
                { label: 'Omakase', price: '£135', sub: 'per person' },
                { label: 'Sake Pairing', price: '£65', sub: '6 pours' },
                { label: 'À La Carte', price: 'From £6', sub: 'per piece' },
              ].map((p) => (
                <div key={p.label}>
                  <p style={{ color: C.textMuted, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{p.label}</p>
                  <p style={{ color: C.ink, fontSize: '1.3rem', fontFamily: 'Georgia, serif', fontWeight: 300, lineHeight: 1 }}>{p.price}</p>
                  <p style={{ color: C.textSubtle, fontSize: '0.7rem', marginTop: '0.2rem' }}>{p.sub}</p>
                </div>
              ))}
            </div>

            <div className="fade-up d5 flex flex-wrap gap-4">
              <a
                href="#reserve"
                style={{
                  backgroundColor: C.ink,
                  color: C.rice,
                  padding: '1rem 2.5rem',
                  fontSize: '0.78rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  transition: 'all 0.4s ease',
                  borderRadius: '1px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.inkLight)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.ink)}
              >
                Reserve a Table
              </a>
              <a
                href="#omakase"
                style={{
                  border: `1px solid ${C.riceDark}`,
                  color: C.textMuted,
                  padding: '1rem 2.5rem',
                  fontSize: '0.78rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  transition: 'all 0.4s ease',
                  backgroundColor: 'transparent',
                  borderRadius: '1px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.ink; e.currentTarget.style.color = C.ink }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.riceDark; e.currentTarget.style.color = C.textMuted }}
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OMAKASE MENU — 8 Courses
          ═══════════════════════════════════════ */}
      <section
        id="omakase"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.riceDeep }}
      >
        <div className="max-w-4xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: C.red, fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Chef&rsquo;s Tasting
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, marginBottom: '0.5rem' }}>
              Omakase Menu
            </h2>
            <p style={{ fontFamily: 'serif', color: C.textSubtle, fontSize: '1rem', letterSpacing: '0.1em' }}>おまかせコース</p>
            <p style={{ color: C.textMuted, marginTop: '1.5rem', fontSize: '0.88rem', lineHeight: 1.8, maxWidth: 480, margin: '1.5rem auto 0' }}>
              £135 per person &middot; Sake pairing £65 supplementary &middot; Wine pairing £75
            </p>
          </div>

          {omakaseMenu.map((course) => (
            <div
              key={course.course}
              className="course-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '1.5rem',
                padding: '2rem 0',
                borderBottom: `1px solid ${C.riceDark}`,
                alignItems: 'start',
                cursor: 'default',
              }}
            >
              <span
                className="course-num"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.6rem',
                  color: C.riceDark,
                  lineHeight: 1,
                  transition: 'color 0.2s ease',
                  minWidth: 32,
                }}
              >
                {String(course.course).padStart(2, '0')}
              </span>
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: '1.15rem', fontWeight: 400, marginBottom: '0.3rem' }}>
                  {course.name}
                </h3>
                <p style={{ color: C.textMuted, fontSize: '0.85rem', lineHeight: 1.7 }}>{course.desc}</p>
              </div>
              {course.origin && (
                <span style={{ color: C.textSubtle, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', whiteSpace: 'nowrap', paddingTop: '0.3rem' }}>
                  {course.origin}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          À LA CARTE
          ═══════════════════════════════════════ */}
      <section
        id="a-la-carte"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.rice }}
      >
        <div className="max-w-5xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: C.red, fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Individual Orders
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              À La Carte
            </h2>
          </div>

          {categories.map(({ key, label, jaLabel }) => (
            <div key={key} style={{ marginBottom: '3.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1rem',
                  marginBottom: '1rem',
                  paddingBottom: '0.75rem',
                  borderBottom: `1px solid ${C.riceDark}`,
                }}
              >
                <h3 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: '1.2rem', fontWeight: 300 }}>{label}</h3>
                <span style={{ fontFamily: 'serif', color: C.textSubtle, fontSize: '1rem' }}>{jaLabel}</span>
              </div>
              {alaCarteItems.filter((i) => i.category === key).map((item) => (
                <div
                  key={item.name}
                  className="menu-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    padding: '0.9rem 0.5rem',
                    borderBottom: `1px solid ${C.riceDeep}`,
                    gap: '1.5rem',
                    transition: 'background 0.2s ease',
                    borderRadius: '2px',
                    cursor: 'default',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.15rem' }}>
                      <h4 style={{ color: C.ink, fontSize: '0.92rem', fontWeight: 400 }}>{item.name}</h4>
                      <span style={{ color: C.textSubtle, fontFamily: 'serif', fontSize: '0.82rem' }}>{item.jaName}</span>
                      {item.gf && (
                        <span style={{ backgroundColor: `${C.wasabi}22`, color: C.wasabiDark, fontSize: '0.55rem', fontWeight: 700, padding: '0.1rem 0.3rem', borderRadius: '2px', letterSpacing: '0.1em' }}>GF</span>
                      )}
                    </div>
                    {item.desc && (
                      <p style={{ color: C.textMuted, fontSize: '0.75rem' }}>{item.desc}</p>
                    )}
                  </div>
                  <span style={{ color: C.ink, fontFamily: 'Georgia, serif', fontSize: '0.92rem', flexShrink: 0 }}>£{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SAKE LIST
          ═══════════════════════════════════════ */}
      <section
        id="sake"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.riceDeep }}
      >
        <div className="max-w-5xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: C.red, fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              日本酒
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              Sake Selection
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {sakeList.map((sake) => (
              <div
                key={sake.name}
                className="sake-card"
                style={{
                  border: `1px solid ${C.riceDark}`,
                  borderRadius: '4px',
                  padding: '1.5rem',
                  transition: 'border-color 0.3s ease',
                  cursor: 'default',
                }}
              >
                <p style={{ color: C.red, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {sake.type}
                </p>
                <h3 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: '1rem', fontWeight: 400, marginBottom: '0.2rem' }}>{sake.name}</h3>
                <p style={{ color: C.textSubtle, fontSize: '0.72rem', marginBottom: '0.75rem' }}>{sake.region}</p>
                <p style={{ color: C.textMuted, fontSize: '0.78rem', lineHeight: 1.6, marginBottom: '1rem' }}>{sake.desc}</p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div>
                    <p style={{ color: C.textSubtle, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Glass</p>
                    <p style={{ color: C.ink, fontFamily: 'Georgia, serif', fontSize: '1rem' }}>£{sake.glass}</p>
                  </div>
                  <div>
                    <p style={{ color: C.textSubtle, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Carafe</p>
                    <p style={{ color: C.ink, fontFamily: 'Georgia, serif', fontSize: '1rem' }}>£{sake.bottle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CHEF — Portrait + Philosophy
          ═══════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.ink }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16 items-center">
          <div style={{ width: 360, flexShrink: 0 }}>
            <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&h=900&fit=crop"
              alt="Chef Kenji at the counter"
              style={{ width: '100%', borderRadius: '4px', display: 'block' }} width={1200} height={800} />
          </div>
          <div>
            <p style={{ color: C.red, fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Chef &amp; Philosophy
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.rice, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.2 }}>
              Chef Kenji<br />
              <span style={{ color: C.textSubtle, fontSize: '60%', fontFamily: 'serif' }}>中山健司</span>
            </h2>
            <blockquote
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: C.textSubtle,
                lineHeight: 1.8,
                paddingLeft: '1.5rem',
                borderLeft: `2px solid ${C.red}44`,
                marginBottom: '2rem',
              }}
            >
              &ldquo;The fish does all the work. My only job is to not get in the way.&rdquo;
            </blockquote>
            <p style={{ color: C.textSubtle, fontSize: '0.9rem', lineHeight: 2, marginBottom: '1.25rem' }}>
              Kenji trained for 12 years in Tokyo — first at a traditional sushiya in Ginza,
              then under Master Jiro Oiwa in Meguro. He moved to London in 2018 with a
              single objective: to serve fish with the same reverence given in Tokyo, without compromise.
            </p>
            <p style={{ color: C.textSubtle, fontSize: '0.9rem', lineHeight: 2 }}>
              Every morning he visits Billingsgate before 5am. The menu is written at 3pm.
              The counter opens at 6. No shortcuts, no exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY — 8 images
          ═══════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.riceDeep }}
      >
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: C.red, fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              The Space
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              Gallery
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridAutoRows: '200px',
              gap: '0.6rem',
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-img"
                style={{
                  overflow: 'hidden',
                  borderRadius: '2px',
                  gridColumn: img.wide ? 'span 2' : 'span 1',
                  cursor: 'pointer',
                }}
              >
                <Image src={img.src}
                  alt={img.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    display: 'block',
                  }} width={1200} height={800} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.rice }}>
        <div className="max-w-6xl mx-auto px-6 md:px-16 mb-12">
          <p style={{ color: C.red, fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Our Guests
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
            Reviews
          </h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* ═══════════════════════════════════════
          RESERVE
          ═══════════════════════════════════════ */}
      <section
        id="reserve"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.riceDeep }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <p style={{ color: C.red, fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Reservations
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Reserve a Table
            </h2>
            <p style={{ color: C.textMuted, fontSize: '0.88rem', lineHeight: 2, marginBottom: '2.5rem' }}>
              We seat guests Tuesday to Sunday, evenings only.
              The counter accommodates 12 guests for omakase.
              A la carte seating for 24. Reservations recommended for all visits.
            </p>

            {[
              { label: 'Hours', detail: 'Tue–Sun · 18:00–23:00 · Last entry 21:30' },
              { label: 'Location', detail: '7 Beak Street, Soho W1F 9SB · Oxford Circus 5 min' },
              { label: 'Party size', detail: 'Counter: up to 4 · Tables: up to 6 · Private room: up to 14' },
              { label: 'Omakase', detail: '£135/person · Sake pairing +£65 · Book via form below' },
            ].map((info) => (
              <div key={info.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: 1, minHeight: 36, backgroundColor: C.riceDark, flexShrink: 0, marginTop: 4 }} />
                <div>
                  <p style={{ color: C.red, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{info.label}</p>
                  <p style={{ color: C.textMuted, fontSize: '0.82rem', lineHeight: 1.6 }}>{info.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 56, label: 'reservations this week' }}
              vertical="sushios"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 800)) }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.rice }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: C.red, fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Questions
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.ink, fontSize: '2.5rem', fontWeight: 300 }}>FAQ</h2>
          </div>
          <FAQAccordion items={faqs} verticalName="SushiOS" locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442079460112"
        message="Hello! I'd like to reserve a table at Ryō"
        vertical="sushios"
      />
    </div>
  )
}

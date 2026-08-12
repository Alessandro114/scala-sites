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
  burgundy: '#722f37',
  burgundyDeep: '#4a0e0e',
  burgundyMid: '#8c3d47',
  burgundyLight: '#a85565',
  gold: '#d4af37',
  goldLight: '#e8c84a',
  goldPale: '#f0d870',
  charcoal: '#1a1a1a',
  charcoalMid: '#2a2a2a',
  charcoalLight: '#3d3d3d',
  cream: '#f5f0eb',
  creamDark: '#e8e0d4',
  textMuted: '#9a8878',
  warmWhite: '#faf6f0',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Vino Oscuro',
  description: 'Wine bar & cellar — curated wines from 12 regions',
  url: 'https://vinooscuro.example.com',
  locale: 'en',
  vertical: 'winebaros',
  theme: 'dark',
  branding: { primaryColor: C.burgundyDeep, accentColor: C.gold },
  contact: {
    phone: '+44 20 7946 0555',
    email: 'hello@vinooscuro.com',
    whatsapp: '+442079460555',
    address: '14 Bermondsey Street, London SE1 3UD',
    coordinates: { lat: 51.4995, lng: -0.0827 },
  },
  social: {
    instagram: 'vinooscuro',
    facebook: 'https://facebook.com/vinooscuro',
  },
  seo: {
    title: 'Vino Oscuro | Wine Bar & Cellar',
    description: 'Curated wines from 12 regions, tasting events, expert pairings. Bermondsey, London.',
  },
}

// ─────────────────────────────────────────────
// WINE LIST
// ─────────────────────────────────────────────
interface Wine {
  name: string
  region: string
  country: string
  grape: string
  year: number
  notes: string
  glass: number
  bottle: number
  natural?: boolean
  featured?: boolean
}

const winesByRegion: { region: string; flag: string; wines: Wine[] }[] = [
  {
    region: 'Tuscany, Italy',
    flag: '🇮🇹',
    wines: [
      { name: 'Sassicaia 2018', region: 'Bolgheri DOC', country: 'IT', grape: 'Cabernet Sauvignon, Cabernet Franc', year: 2018, notes: 'Black cherry, cedar, graphite. Exceptional length.', glass: 28, bottle: 145, featured: true },
      { name: 'Chianti Classico Gran Selezione', region: 'Gaiole in Chianti', country: 'IT', grape: 'Sangiovese', year: 2019, notes: 'Dried herbs, leather, iron. Structured tannins.', glass: 16, bottle: 75 },
      { name: 'Vernaccia di San Gimignano', region: 'San Gimignano DOCG', country: 'IT', grape: 'Vernaccia', year: 2022, notes: 'Almonds, citrus blossom, mineral finish.', glass: 11, bottle: 48 },
    ],
  },
  {
    region: 'Burgundy, France',
    flag: '🇫🇷',
    wines: [
      { name: 'Gevrey-Chambertin 1er Cru', region: 'Côte de Nuits', country: 'FR', grape: 'Pinot Noir', year: 2017, notes: 'Violets, red berries, forest floor. Silky.', glass: 34, bottle: 175, featured: true },
      { name: 'Meursault Les Charmes', region: 'Côte de Beaune', country: 'FR', grape: 'Chardonnay', year: 2020, notes: 'Butter, hazelnut, golden apple, long mineral finish.', glass: 22, bottle: 110 },
    ],
  },
  {
    region: 'Rioja, Spain',
    flag: '🇪🇸',
    wines: [
      { name: 'Muga Reserva 2018', region: 'Rioja Alta', country: 'ES', grape: 'Tempranillo, Garnacha', year: 2018, notes: 'Vanilla oak, plum, tobacco. Classic style.', glass: 13, bottle: 55 },
      { name: 'Palacios Remondo Plácet', region: 'Rioja', country: 'ES', grape: 'Viura', year: 2021, notes: 'Oxidative white — almond, quince, wax. Rare.', glass: 15, bottle: 65, natural: true },
    ],
  },
  {
    region: 'New World',
    flag: '🌍',
    wines: [
      { name: 'Cloudy Bay Sauvignon Blanc', region: 'Marlborough, NZ', country: 'NZ', grape: 'Sauvignon Blanc', year: 2023, notes: 'Passion fruit, cut grass, grapefruit. Benchmark.', glass: 12, bottle: 52 },
      { name: 'Ridge Monte Bello', region: 'Santa Cruz Mountains, CA', country: 'US', grape: 'Cabernet Sauvignon', year: 2016, notes: 'Cigar box, dark fruit, extraordinary depth.', glass: 32, bottle: 155, featured: true },
      { name: 'Vasse Felix Chardonnay', region: 'Margaret River, AU', country: 'AU', grape: 'Chardonnay', year: 2021, notes: 'White peach, creamy oak, long finish.', glass: 14, bottle: 60 },
    ],
  },
]

const tastingEvents = [
  {
    date: 'Aug 14',
    title: 'Barolo & Beyond',
    desc: 'A vertical tasting of 5 vintages from Piedmont\'s king grape. Hosted by Master of Wine Clara Rossi.',
    spots: 12,
    price: 95,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    date: 'Aug 21',
    title: 'Natural Wine Night',
    desc: 'Six low-intervention bottles from Georgia, Jura, and Loire. Orange, pét-nat, and unfiltered treasures.',
    spots: 16,
    price: 65,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop',
  },
  {
    date: 'Sep 04',
    title: 'Champagne Masterclass',
    desc: 'Grower Champagne vs Grand Marque — a blind tasting that changes everything you thought you knew.',
    spots: 10,
    price: 125,
    image: 'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?w=600&h=400&fit=crop',
  },
  {
    date: 'Sep 18',
    title: 'New World Classics',
    desc: 'California, New Zealand, South Africa, and Australia. Big flavours, blind formats, no bias.',
    spots: 18,
    price: 75,
    image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=400&fit=crop',
  },
]

const foodPairings = [
  { name: 'Cheese & Charcuterie', desc: 'Aged comté, manchego, prosciutto, fig jam, walnut bread', price: 22, pairs: 'Burgundy Rouge / Rioja Reserva' },
  { name: 'Beef Tartare', desc: 'Hand-cut fillet, egg yolk, caper, cornichon, brioche crisp', price: 18, pairs: 'Bordeaux / Ridge Monte Bello' },
  { name: 'Burrata e Acciughe', desc: 'Stracciatella, white anchovies, olive oil, basil oil', price: 16, pairs: 'Meursault / Vernaccia' },
  { name: 'Mushroom Crostini', desc: 'Porcini, truffle oil, parmesan, aged sourdough', price: 14, pairs: 'Chianti Classico / Burgundy' },
  { name: 'Foie Gras Toast', desc: 'Pan-seared, brioche, quince paste, Maldon salt', price: 24, pairs: 'Sauternes / Alsace Riesling' },
  { name: 'Dark Chocolate Fondant', desc: '70% Valrhona, salted caramel, vanilla bean ice cream', price: 11, pairs: 'Vintage Port / Banyuls' },
  { name: 'Seasonal Oysters', desc: 'Served with shallot vinaigrette, rye bread', price: 19, pairs: 'Muscadet / Champagne Blanc de Blancs' },
  { name: 'Wagyu Croquette', desc: 'A5 Wagyu, black truffle mayo, chive crumb', price: 22, pairs: 'Ridge Monte Bello / Sassicaia' },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Catherine H.',
    rating: 5,
    text: "The sommelier spent 20 minutes understanding what I like and then poured me something I'd never heard of. It was the best glass of wine I've had in 10 years. This is what a wine bar should be.",
    date: '2026-07-29',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Alessandro V.',
    rating: 5,
    text: 'The Barolo tasting event was extraordinary. Clara Rossi knows this grape like no one else. Already booked for the Champagne masterclass.',
    date: '2026-08-03',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '3',
    author: 'Sarah M.',
    rating: 5,
    text: "Took my partner here for a birthday surprise. The cheese board, a glass of Gevrey-Chambertin, candlelight. Perfect evening. Reserved via WhatsApp at 11pm the night before.",
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'James L.',
    rating: 5,
    text: "The cellar collection is genuinely impressive — some bottles dating back to 1988. They let you browse while you sip. An experience, not just a bar.",
    date: '2026-07-15',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Do you need a reservation?',
    answer: 'Walk-ins are welcome until 9pm. For weekend evenings and tasting events, we strongly recommend reserving in advance via the booking widget or WhatsApp.',
  },
  {
    question: 'Can I bring my own wine (corkage)?',
    answer: 'We allow corkage on special occasions (e.g. wedding anniversaries, significant birthdays). Corkage fee: £30 per bottle. Please inform us in advance.',
  },
  {
    question: 'Do you sell bottles to take home?',
    answer: 'Yes — our retail selection is available at bar prices plus 20%. We can also source from our cellar collection. Ask your sommelier for guidance.',
  },
  {
    question: 'Can you host a private tasting for a corporate group?',
    answer: 'Absolutely. Our private wine dinners accommodate up to 20 guests. Custom menus, expert hosts, and a tailored wine journey. From £85 per head. Contact us for a quote.',
  },
  {
    question: 'Do you serve non-alcoholic options?',
    answer: 'Yes — we carry a curated selection of premium non-alcoholic wines and sparkling waters. Our team can also suggest interesting non-alcoholic pairings for the food menu.',
  },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '18:00', available: true, spotsLeft: 4 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '18:30', available: true, spotsLeft: 6 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '19:00', available: true, spotsLeft: 2 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '19:30', available: true, spotsLeft: 8 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '20:00', available: true, spotsLeft: 3 },
  { id: '6', date: new Date().toISOString().split('T')[0], time: '21:00', available: true, spotsLeft: 5 },
]

const winebarJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: 'Vino Oscuro',
  description: 'Wine bar and cellar with curated wines from 12 regions. Tasting events, food pairings, cellar collection.',
  url: 'https://vinooscuro.example.com',
  telephone: '+44 20 7946 0555',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Bermondsey Street',
    addressLocality: 'London',
    postalCode: 'SE1 3UD',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4995, longitude: -0.0827 },
  openingHours: ['Tu-Th 17:00-23:30', 'Fr-Sa 16:00-00:30', 'Su 14:00-21:00'],
  servesCuisine: 'Wine Bar',
  priceRange: '£££',
}

const winebarFaqJsonLd = {
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
        backgroundColor: `${C.charcoal}f0`,
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.burgundy}44`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: C.gold,
            fontSize: '1.2rem',
            fontWeight: 400,
            letterSpacing: '0.06em',
          }}
        >
          Vino Oscuro
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Wine List', 'Events', 'Pairings', 'Reserve'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              style={{ color: C.textMuted, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#reserve"
            style={{
              border: `1px solid ${C.gold}66`,
              color: C.gold,
              padding: '0.5rem 1.4rem',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${C.gold}22`
              e.currentTarget.style.borderColor = C.gold
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = `${C.gold}66`
            }}
          >
            Reserve
          </a>
        </div>
      </div>
    </nav>
  )
}

export default function WineBarPage() {
  return (
    <div style={{ backgroundColor: C.charcoal, color: C.cream }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(winebarJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(winebarFaqJsonLd) }} />

      <style>{`
        @keyframes pourFill {
          0% { height: 0%; opacity: 0; }
          20% { opacity: 1; }
          100% { height: 55%; opacity: 1; }
        }
        @keyframes glassGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(212,175,55,0.2)); }
          50% { filter: drop-shadow(0 0 40px rgba(212,175,55,0.45)); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes statCount {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .wine-glass { animation: glassGlow 4s ease-in-out infinite; }
        .wine-fill { animation: pourFill 2.5s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .wine-row:hover { background: rgba(212,175,55,0.06) !important; }
        .event-card:hover { border-color: rgba(212,175,55,0.4) !important; }
        .pairing-card:hover { border-color: rgba(114,47,55,0.5) !important; background: rgba(114,47,55,0.06) !important; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Dark Burgundy + Animated Wine Glass
          ═══════════════════════════════════════ */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden pt-16"
        style={{
          background: `linear-gradient(160deg, ${C.burgundyDeep} 0%, ${C.charcoal} 45%, #0d0a0a 100%)`,
        }}
      >
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '256px',
          }}
        />
        {/* Gold radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '10%',
            right: '15%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${C.burgundy}44 0%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-center w-full relative z-10">
          {/* Left: Text */}
          <div>
            <p
              className="fade-up"
              style={{ color: `${C.gold}99`, fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '2rem' }}
            >
              Bermondsey, London &middot; Est. 2018
            </p>

            <h1
              className="fade-up d1"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(3rem, 7vw, 7rem)',
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                marginBottom: '2.5rem',
              }}
            >
              <span style={{ color: C.cream }}>Vino</span>
              <br />
              <span style={{ color: C.gold }}>Oscuro</span>
            </h1>

            <p
              className="fade-up d2"
              style={{ color: C.textMuted, fontSize: '1rem', lineHeight: 1.9, maxWidth: 460, marginBottom: '3rem', fontWeight: 300 }}
            >
              An intimate cellar bar where every bottle is chosen with intention.
              Twelve regions. Two hundred labels. One expert team dedicated to
              connecting you with a glass you&rsquo;ll remember.
            </p>

            {/* Stats */}
            <div
              className="fade-up d3"
              style={{
                display: 'flex',
                gap: '2.5rem',
                marginBottom: '3rem',
                paddingBottom: '3rem',
                borderBottom: `1px solid ${C.burgundy}44`,
              }}
            >
              {[
                { num: '200+', label: 'Labels' },
                { num: '12', label: 'Regions' },
                { num: '4', label: 'Monthly Events' },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ color: C.gold, fontSize: '2rem', fontFamily: 'Georgia, serif', fontWeight: 300, lineHeight: 1 }}>{s.num}</p>
                  <p style={{ color: C.textMuted, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.3rem' }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div className="fade-up d4 flex flex-wrap gap-4">
              <a
                href="#wine-list"
                style={{
                  border: `1px solid ${C.gold}`,
                  color: C.gold,
                  padding: '0.9rem 2.25rem',
                  fontSize: '0.78rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  transition: 'all 0.4s ease',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.gold
                  e.currentTarget.style.color = C.charcoal
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = C.gold
                }}
              >
                Explore the List
              </a>
              <a
                href="#reserve"
                style={{
                  color: C.textMuted,
                  padding: '0.9rem 2.25rem',
                  fontSize: '0.78rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
              >
                Reserve a Table
              </a>
            </div>
          </div>

          {/* Right: Animated wine glass SVG */}
          <div
            className="hidden md:flex items-center justify-center"
            style={{ width: 220, height: 480 }}
          >
            <svg
              className="wine-glass"
              width="180"
              height="420"
              viewBox="0 0 180 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Glass body outline */}
              <path
                d="M30 20 C30 20 10 120 30 200 C50 270 80 290 90 290 C100 290 130 270 150 200 C170 120 150 20 150 20 Z"
                stroke={`${C.gold}44`}
                strokeWidth="1.5"
                fill="none"
              />
              {/* Wine fill — animated */}
              <clipPath id="glassClip">
                <path d="M32 20 C32 20 12 120 32 200 C52 270 82 290 90 290 C98 290 128 270 148 200 C168 120 148 20 148 20 Z" />
              </clipPath>
              <g clipPath="url(#glassClip)">
                <rect
                  className="wine-fill"
                  x="0"
                  y="145"
                  width="180"
                  height="150"
                  fill={C.burgundy}
                  opacity="0.85"
                />
                {/* Wine surface shimmer */}
                <ellipse
                  cx="90"
                  cy="145"
                  rx="55"
                  ry="8"
                  fill={C.burgundyLight}
                  opacity="0.5"
                />
              </g>
              {/* Glass rim top */}
              <path
                d="M30 20 Q90 30 150 20"
                stroke={`${C.gold}55`}
                strokeWidth="1.5"
                fill="none"
              />
              {/* Stem */}
              <line x1="90" y1="290" x2="90" y2="380" stroke={`${C.gold}33`} strokeWidth="1.5" />
              {/* Base */}
              <path d="M50 380 Q90 390 130 380" stroke={`${C.gold}44`} strokeWidth="1.5" fill="none" />
              {/* Gold accent line at wine level */}
              <line x1="35" y1="145" x2="145" y2="145" stroke={`${C.gold}44`} strokeWidth="0.8" strokeDasharray="4 3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WINE LIST
          ═══════════════════════════════════════ */}
      <section
        id="wine-list"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.charcoalMid }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p style={{ color: C.gold, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              By the Glass &amp; Bottle
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                color: C.cream,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
              }}
            >
              The Wine List
            </h2>
          </div>

          {winesByRegion.map(({ region, flag, wines }) => (
            <div key={region} style={{ marginBottom: '3rem' }}>
              <h3
                style={{
                  color: C.textMuted,
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                  paddingBottom: '0.5rem',
                  borderBottom: `1px solid ${C.gold}22`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{ fontSize: '1rem' }}>{flag}</span>
                {region}
              </h3>
              {wines.map((wine) => (
                <div
                  key={wine.name}
                  className="wine-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    padding: '1rem 0.75rem',
                    borderBottom: `1px solid rgba(255,255,255,0.04)`,
                    transition: 'background 0.2s ease',
                    cursor: 'default',
                    borderRadius: '4px',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <h4 style={{ color: C.cream, fontSize: '0.95rem', fontWeight: 300 }}>
                        {wine.name}
                        {wine.featured && <span style={{ color: C.gold, marginLeft: '0.4rem', fontSize: '0.7rem' }}>★</span>}
                      </h4>
                      {wine.natural && (
                        <span style={{ backgroundColor: `${C.gold || '#7c9070'}22`, color: '#7c9070', fontSize: '0.55rem', fontWeight: 700, padding: '0.1rem 0.35rem', borderRadius: '3px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          Natural
                        </span>
                      )}
                    </div>
                    <p style={{ color: C.textMuted, fontSize: '0.78rem' }}>
                      {wine.grape} &middot; {wine.year} &middot; {wine.notes}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ color: C.gold, fontSize: '0.9rem', fontWeight: 500 }}>£{wine.glass} glass</p>
                    <p style={{ color: C.textMuted, fontSize: '0.78rem', marginTop: '0.1rem' }}>£{wine.bottle} bottle</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TASTING EVENTS
          ═══════════════════════════════════════ */}
      <section
        id="events"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.charcoal }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p style={{ color: C.gold, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Upcoming
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              Tasting Events
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {tastingEvents.map((event) => (
              <div
                key={event.title}
                className="event-card"
                style={{
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: C.burgundy,
                      color: C.cream,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {event.date}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'Georgia, serif', color: C.cream, fontSize: '1.1rem', fontWeight: 300, marginBottom: '0.5rem' }}>
                    {event.title}
                  </h3>
                  <p style={{ color: C.textMuted, fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{event.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ color: C.gold, fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>£{event.price}</p>
                      <p style={{ color: C.textMuted, fontSize: '0.68rem', marginTop: '0.1rem' }}>{event.spots} spots available</p>
                    </div>
                    <a
                      href="#reserve"
                      style={{
                        border: `1px solid ${C.gold}55`,
                        color: C.gold,
                        padding: '0.5rem 1rem',
                        fontSize: '0.68rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease',
                        backgroundColor: 'transparent',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.gold}22` }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOD PAIRINGS
          ═══════════════════════════════════════ */}
      <section
        id="pairings"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.charcoalMid }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p style={{ color: C.gold, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Kitchen
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              Food &amp; Pairings
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {foodPairings.map((item) => (
              <div
                key={item.name}
                className="pairing-card"
                style={{
                  border: `1px solid rgba(255,255,255,0.06)`,
                  borderRadius: '8px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={{ color: C.cream, fontSize: '0.98rem', fontWeight: 300 }}>{item.name}</h3>
                  <span style={{ color: C.gold, fontSize: '0.92rem', flexShrink: 0, marginLeft: '0.75rem' }}>£{item.price}</span>
                </div>
                <p style={{ color: C.textMuted, fontSize: '0.78rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{item.desc}</p>
                <p style={{ fontSize: '0.68rem', color: `${C.burgundyLight}cc`, letterSpacing: '0.05em' }}>
                  <span style={{ color: C.textMuted }}>Pairs with: </span>
                  {item.pairs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p style={{ color: C.gold, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Our Guests
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
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
        style={{ backgroundColor: C.burgundyDeep }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p style={{ color: C.goldPale, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Reservations
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.cream, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Reserve Your<br />Evening
            </h2>
            <p style={{ color: `${C.cream}99`, fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Walk-ins are always welcome, but we recommend reserving for
              weekend evenings. Confirmed via WhatsApp within minutes.
            </p>
            {[
              { label: 'Hours', detail: 'Tue–Thu 5pm–11:30pm | Fri–Sat 4pm–12:30am | Sun 2pm–9pm' },
              { label: 'Location', detail: '14 Bermondsey Street, SE1 — London Bridge station, 5 min walk' },
              { label: 'Private Events', detail: 'Cellar room available for groups up to 18. Custom tasting menus.' },
            ].map((info) => (
              <div key={info.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 2, minHeight: 36, backgroundColor: `${C.gold}66`, borderRadius: 1, flexShrink: 0 }} />
                <div>
                  <p style={{ color: C.gold, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{info.label}</p>
                  <p style={{ color: `${C.cream}88`, fontSize: '0.82rem', lineHeight: 1.6 }}>{info.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 89, label: 'reservations this week' }}
              vertical="winebaros"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 800)) }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: C.gold, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Questions
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', color: C.cream, fontSize: '2.5rem', fontWeight: 300 }}>FAQ</h2>
          </div>
          <FAQAccordion items={faqs} verticalName="WineBarOS" locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442079460555"
        message="Hello! I'd like to know more about Vino Oscuro wine bar"
        vertical="winebaros"
      />
    </div>
  )
}

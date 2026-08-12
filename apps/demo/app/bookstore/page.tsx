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
  parchment: '#f5ede1',
  parchmentDark: '#ede2ce',
  parchmentDeep: '#e8d5ae',
  leather: '#8b4513',
  leatherLight: '#a0521a',
  leatherDim: '#8b451322',
  ink: '#1e293b',
  inkMid: '#263348',
  inkLight: '#334155',
  red: '#dc2626',
  redDim: '#dc262622',
  white: '#ffffff',
  warmGray: '#78716c',
  warmGrayLight: '#a8a29e',
  cream: '#fdf8f0',
} as const

const S = {
  pageBg: { backgroundColor: C.parchment, color: C.ink } as React.CSSProperties,
  sectionParchment: { backgroundColor: C.parchment } as React.CSSProperties,
  sectionParchmentDark: { backgroundColor: C.parchmentDark } as React.CSSProperties,
  sectionInk: { backgroundColor: C.ink } as React.CSSProperties,
  sectionCream: { backgroundColor: C.cream } as React.CSSProperties,
  leather: { color: C.leather } as React.CSSProperties,
  red: { color: C.red } as React.CSSProperties,
  ink: { color: C.ink } as React.CSSProperties,
  warmGray: { color: C.warmGray } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Chapter & Verse Bookshop',
  description: 'Independent bookshop since 1985 — 20,000+ titles, book club, author events',
  url: 'https://chapterandverse.example.com',
  locale: 'en',
  vertical: 'bookos',
  theme: 'literary',
  branding: { primaryColor: C.ink, accentColor: C.leather },
  contact: {
    phone: '+44 20 7234 5678',
    email: 'hello@chapterandverse.com',
    whatsapp: '+442072345678',
    address: '22 Museum Street, Bloomsbury, London WC1A 1JT',
    coordinates: { lat: 51.5193, lng: -0.1256 },
  },
  social: {
    instagram: 'chapterandverseuk',
    facebook: 'https://facebook.com/chapterandverse',
  },
  seo: {
    title: 'Chapter & Verse Bookshop — Independent Since 1985',
    description: 'Beloved independent bookshop in Bloomsbury. 20,000+ titles, book club, author events, and a cosy café.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Alice R.', rating: 5, text: 'There is no better bookshop in London. The staff actually read the books they recommend — Harriet\'s suggestion last month was the best novel I\'ve read in a decade. An irreplaceable cultural institution.', date: '2026-07-10', source: 'google', verified: true },
  { id: '2', author: 'Michael B.', rating: 5, text: 'The book club has been the highlight of my month for three years. Thoughtful selections, lively discussions, and the café makes it even better. Chapter & Verse is a community, not just a shop.', date: '2026-07-18', source: 'google', verified: true },
  { id: '3', author: 'Clare H.', rating: 5, text: 'I came in looking for an obscure translation of a 19th-century Russian novel. Not only did they have it, they had two editions and could tell me which was better. Extraordinary.', date: '2026-07-25', source: 'trustpilot', verified: true },
  { id: '4', author: 'Tom W.', rating: 5, text: 'The author event with Colm Tóibín last month was one of the best literary events I\'ve attended anywhere in the world. Intimate, warm, and brilliantly organised. Can\'t wait for the next one.', date: '2026-08-01', source: 'google', verified: true },
  { id: '5', author: 'Beatrice M.', rating: 5, text: 'Story Time on Saturday mornings is magical. My five-year-old now asks to "go to the book house" every weekend. The children\'s section is beautifully curated and the storyteller is wonderful.', date: '2026-08-04', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do you offer online ordering with delivery?', answer: 'Yes. Order online at chapterandverse.com or by phone/email and we\'ll ship anywhere in the UK. Free delivery on orders over £30. Standard delivery 2-3 working days, express next-day available. We always dispatch the same day for orders placed before 2pm.' },
  { question: 'Can you order a book you don\'t have in stock?', answer: 'Absolutely. Special orders are our speciality. If a title is in print, we can usually have it within 1-3 working days. For out-of-print and rare books, speak to our secondhand specialist — we have sourcing contacts across Europe.' },
  { question: 'How does the Book Club work?', answer: 'Our monthly book club meets on the last Thursday of each month at 6:30pm. Annual membership is £25 and includes a 10% in-store discount, priority event booking, and a complimentary copy of the book club title each month. Drop-in for first-timers is always welcome — just let us know.' },
  { question: 'Do you buy second-hand books?', answer: 'Yes. We buy quality second-hand books, first editions, and signed copies. Bring them in for a valuation Tuesday to Friday. We pay in cash or at 25% above cash rate as shop credit. We focus on literary fiction, history, philosophy, and art books.' },
  { question: 'Do you offer gift wrapping and gift vouchers?', answer: 'Yes to both. Gift wrapping is complimentary in-store and available for online orders at £2.50. Gift vouchers are available from £10 in-store and online, valid for three years, and can be used across books, café, and events.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '10:00', available: true, spotsLeft: 8 },
  { id: '2', date: today, time: '11:30', available: true, spotsLeft: 5 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 6 },
  { id: '4', date: today, time: '15:30', available: true, spotsLeft: 4 },
  { id: '5', date: today, time: '18:30', available: true, spotsLeft: 12 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BookStore',
  name: 'Chapter & Verse Bookshop',
  description: 'Independent bookshop in Bloomsbury, London. Est. 1985. 20,000+ titles, book club, author events, café.',
  url: 'https://chapterandverse.example.com',
  telephone: '+44 20 7234 5678',
  email: 'hello@chapterandverse.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 Museum Street',
    addressLocality: 'London',
    postalCode: 'WC1A 1JT',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5193, longitude: -0.1256 },
  openingHours: 'Mo-Sa 09:00-19:00 Su 11:00-17:00',
  hasMenu: { '@type': 'Menu', name: 'Café Menu', url: 'https://chapterandverse.example.com/cafe' },
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
// BOOK SPINE SHELF
// ─────────────────────────────────────────────
function BookShelf() {
  const spines = [
    { color: C.red, width: 18, title: '' },
    { color: C.leather, width: 14, title: '' },
    { color: '#2d6a4f', width: 22, title: '' },
    { color: C.ink, width: 12, title: '' },
    { color: '#9b2226', width: 20, title: '' },
    { color: '#1d3557', width: 16, title: '' },
    { color: '#6a0572', width: 18, title: '' },
    { color: C.leather, width: 10, title: '' },
    { color: '#3d405b', width: 24, title: '' },
    { color: '#e07a5f', width: 14, title: '' },
    { color: '#264653', width: 20, title: '' },
    { color: '#bc4749', width: 16, title: '' },
    { color: '#2b2d42', width: 12, title: '' },
    { color: '#606c38', width: 22, title: '' },
    { color: C.red, width: 18, title: '' },
    { color: '#457b9d', width: 14, title: '' },
    { color: '#8b5e3c', width: 20, title: '' },
    { color: '#023047', width: 16, title: '' },
    { color: '#5a189a', width: 12, title: '' },
    { color: '#d62828', width: 18, title: '' },
  ]

  return (
    <div
      className="relative flex items-end gap-0.5"
      style={{ height: 120 }}
    >
      {/* Shelf board */}
      <div
        className="absolute -bottom-2 left-0 right-0 h-2 rounded-sm"
        style={{ backgroundColor: C.leather, opacity: 0.5 }}
      />
      {spines.map((s, i) => (
        <div
          key={i}
          className="rounded-t-sm transition-transform duration-300 cursor-pointer"
          style={{
            width: s.width,
            height: `${60 + Math.sin(i * 1.3) * 30}px`,
            backgroundColor: s.color,
            opacity: 0.85,
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        />
      ))}
      <style>{`
        @keyframes page-turn {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(-20deg); }
        }
        .page-corner { animation: page-turn 3s ease-in-out infinite; transform-origin: left center; }
      `}</style>
    </div>
  )
}

// ─────────────────────────────────────────────
// PAGE TURN ANIMATION — corner curl
// ─────────────────────────────────────────────
function PageCurl() {
  return (
    <div
      className="absolute bottom-8 right-8 pointer-events-none"
      style={{ width: 40, height: 40 }}
    >
      <svg viewBox="0 0 40 40" fill="none">
        <style>{`
          @keyframes curl {
            0%, 100% { d: path("M40,40 L40,20 Q40,40 20,40 Z"); opacity: 0.3; }
            50% { d: path("M40,40 L40,10 Q38,38 10,40 Z"); opacity: 0.6; }
          }
          .curl-path { animation: curl 2.5s ease-in-out infinite; }
        `}</style>
        <path d="M40,40 L40,20 Q40,40 20,40 Z" fill={C.leather} opacity="0.3" className="curl-path" />
        <path d="M40,40 L40,20 Q30,30 20,40 Z" fill={C.parchmentDeep} opacity="0.5" />
      </svg>
    </div>
  )
}

// ─────────────────────────────────────────────
// READING GLASSES ICON
// ─────────────────────────────────────────────
function GlassesIcon() {
  return (
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={C.leather} strokeWidth="2" fill="none" />
      <circle cx="36" cy="12" r="10" stroke={C.leather} strokeWidth="2" fill="none" />
      <path d="M22 12 L26 12" stroke={C.leather} strokeWidth="2" />
      <path d="M2 8 Q0 12 2 16" stroke={C.leather} strokeWidth="2" fill="none" />
      <path d="M46 8 Q48 12 46 16" stroke={C.leather} strokeWidth="2" fill="none" />
    </svg>
  )
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `${C.cream}f8`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.leather}33`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <span className="text-xl">📖</span>
          <div>
            <div className="text-sm font-semibold" style={{ color: C.ink, fontFamily: 'Georgia, serif' }}>Chapter & Verse</div>
            <div className="text-[10px] tracking-widest uppercase" style={{ color: C.leather }}>Independent Since 1985</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Browse', 'Events', 'Book Club', 'Café'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: C.warmGray, fontFamily: 'Georgia, serif' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.ink)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.warmGray)}
            >
              {item}
            </a>
          ))}
          <a
            href="#newsletter"
            className="px-6 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300"
            style={{ borderColor: C.leather, color: C.leather }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.leather
              e.currentTarget.style.color = C.white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.leather
            }}
          >
            Newsletter
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function BookOSDemoPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        .serif { font-family: Georgia, 'Times New Roman', serif; }
        .book-card { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease; }
        .book-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(30,41,59,0.12); }
        @keyframes bookmark-sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .bookmark { animation: bookmark-sway 3s ease-in-out infinite; transform-origin: top center; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Literary Warmth
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${C.parchment} 0%, ${C.parchmentDeep} 100%)`,
          paddingTop: '5rem',
        }}
      >
        <PageCurl />

        {/* Subtle paper texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-end">
            {/* Left: Content */}
            <div className="stagger-children">
              {/* Reading glasses + badge */}
              <div className="reveal-up flex items-center gap-5 mb-8">
                <GlassesIcon />
                <div
                  className="px-4 py-1.5 text-xs tracking-widest uppercase rounded-full"
                  style={{
                    backgroundColor: C.leatherDim,
                    border: `1px solid ${C.leather}44`,
                    color: C.leather,
                  }}
                >
                  Independent Since 1985 · Bloomsbury, London
                </div>
              </div>

              <h1 className="mb-8 serif">
                {['Lose Yourself', 'in a Good', 'Book.'].map((line, i) => (
                  <span
                    key={i}
                    className="reveal-clip-up block leading-[0.95]"
                    style={{
                      fontSize: 'clamp(3rem, 8vw, 7rem)',
                      fontWeight: i === 2 ? 700 : 300,
                      color: i === 2 ? C.leather : C.ink,
                      fontStyle: i === 1 ? 'italic' : 'normal',
                      letterSpacing: '-0.02em',
                      animationDelay: `${i * 0.15}s`,
                    }}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p
                className="reveal-up text-base leading-relaxed max-w-xl mb-10"
                style={{ color: C.warmGray, animationDelay: '0.5s' }}
              >
                Over 20,000 titles across every genre. Staff who actually read. A monthly book club, author events, and a café where you can sit as long as you like. Come in. Stay a while.
              </p>

              {/* Stats */}
              <div className="reveal-up flex flex-wrap gap-10 mb-12" style={{ animationDelay: '0.55s' }}>
                {[
                  { value: '40yrs', label: 'In Business', col: C.leather },
                  { value: '20,000+', label: 'Titles in Stock', col: C.ink },
                  { value: '280+', label: 'Book Club Members', col: C.leather },
                  { value: '4.9★', label: 'Google Rating', col: C.ink },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold serif mb-0.5" style={{ color: s.col }}>{s.value}</div>
                    <div className="text-xs tracking-widest uppercase" style={S.warmGray}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.65s' }}>
                <a
                  href="#browse"
                  className="border-2 px-10 py-4 text-xs tracking-[0.25em] uppercase transition-all duration-500 serif"
                  style={{ borderColor: C.leather, color: C.leather }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = C.leather
                    e.currentTarget.style.color = C.white
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = C.leather
                  }}
                >
                  Browse Books &rarr;
                </a>
                <a
                  href="#events"
                  className="px-10 py-4 text-xs tracking-[0.25em] uppercase transition-colors duration-300 serif"
                  style={{ color: C.warmGray }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.ink)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.warmGray)}
                >
                  Upcoming Events
                </a>
              </div>
            </div>

            {/* Right: Book shelf */}
            <div className="reveal-right hidden lg:block" style={{ minWidth: 360 }}>
              <BookShelf />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section
        className="py-4 overflow-hidden"
        style={{ backgroundColor: C.leather }}
      >
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Fiction', 'Non-Fiction', 'Poetry', 'Art & Design', 'History', 'Philosophy', 'Children\'s', 'Science', 'Local Authors', 'Travel'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm tracking-widest uppercase serif" style={{ color: `${C.white}cc` }}>{item}</span>
                  <span style={{ color: `${C.white}44` }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BROWSE BY GENRE
          ═══════════════════════════════════════ */}
      <section id="browse" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionCream}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.leather}>Explore Our Collection</p>
            <h2 className="text-4xl md:text-5xl font-light serif" style={S.ink}>Browse by Genre</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
            {[
              { genre: 'Fiction', count: '4,200+', emoji: '📚', color: '#8b4513' },
              { genre: 'Non-Fiction', count: '3,800+', emoji: '📰', color: '#1d3557' },
              { genre: "Children's", count: '2,100+', emoji: '🧸', color: '#e07a5f' },
              { genre: 'Poetry', count: '640+', emoji: '✍️', color: '#6a0572' },
              { genre: 'Art & Design', count: '890+', emoji: '🎨', color: '#264653' },
              { genre: 'Local Authors', count: '180+', emoji: '📍', color: '#dc2626' },
            ].map((g, i) => (
              <div
                key={g.genre}
                className="book-card reveal-up rounded-xl p-6 text-center cursor-pointer"
                style={{
                  backgroundColor: C.parchment,
                  border: `1px solid ${g.color}22`,
                  animationDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = g.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${g.color}22`)}
              >
                <div className="text-3xl mb-3">{g.emoji}</div>
                <h3 className="text-sm font-semibold serif mb-2" style={{ color: g.color }}>{g.genre}</h3>
                <p className="text-xs" style={S.warmGray}>{g.count} titles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STAFF PICKS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionParchmentDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.leather}>Recommended by the Team</p>
            <h2 className="text-4xl md:text-5xl font-light serif" style={S.ink}>Staff Picks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {[
              {
                title: 'The Passenger',
                author: 'Cormac McCarthy',
                reviewer: 'Harriet, Floor Manager',
                review: 'A haunting meditation on grief, physics, and the human condition. McCarthy at his most profound.',
                genre: 'Literary Fiction',
                img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
                ribbon: '#8b4513',
              },
              {
                title: 'Yellowface',
                author: 'R.F. Kuang',
                reviewer: 'Sam, Events',
                review: 'Wickedly funny and deeply unsettling. The publishing industry will never look the same.',
                genre: 'Satire',
                img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
                ribbon: '#dc2626',
              },
              {
                title: 'Orbital',
                author: 'Samantha Harvey',
                reviewer: 'James, Children\'s Desk',
                review: 'Man Booker winner. A single day on the International Space Station — utterly gorgeous prose.',
                genre: 'Literary Fiction',
                img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop',
                ribbon: '#264653',
              },
              {
                title: 'The Women',
                author: 'Kristin Hannah',
                reviewer: 'Priya, Buying',
                review: 'Vietnam. Nurses. Courage. I sobbed throughout the final third. One of her very best.',
                genre: 'Historical Fiction',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
                ribbon: '#6a0572',
              },
            ].map((book, i) => (
              <div
                key={book.title}
                className="book-card reveal-up relative rounded-xl overflow-hidden cursor-pointer"
                style={{
                  backgroundColor: C.cream,
                  border: `1px solid ${C.parchmentDeep}`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Bookmark ribbon */}
                <div
                  className="bookmark absolute top-0 right-6 w-6 flex items-center justify-center"
                  style={{
                    height: 48,
                    backgroundColor: book.ribbon,
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                  }}
                />
                <div className="h-48 overflow-hidden">
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span
                    className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full mb-3 inline-block"
                    style={{ backgroundColor: `${book.ribbon}22`, color: book.ribbon }}
                  >
                    {book.genre}
                  </span>
                  <h3 className="text-base font-bold serif mb-1" style={S.ink}>{book.title}</h3>
                  <p className="text-xs mb-3" style={S.leather}>{book.author}</p>
                  <blockquote className="text-xs italic leading-relaxed mb-4" style={S.warmGray}>
                    &ldquo;{book.review}&rdquo;
                  </blockquote>
                  <p className="text-[10px] tracking-widest uppercase" style={{ color: C.warmGrayLight }}>
                    — {book.reviewer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EVENTS
          ═══════════════════════════════════════ */}
      <section id="events" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionInk}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.leather}>What&rsquo;s On</p>
            <h2 className="text-4xl md:text-5xl font-light serif" style={S.white}>Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                date: 'Thu 14 Aug',
                time: '18:30',
                title: 'Author Reading: Maggie O\'Farrell',
                desc: 'The beloved author of Hamnet and The Marriage Portrait reads from her forthcoming novel. Q&A and book signing to follow.',
                type: 'Author Reading',
                col: C.leather,
                seats: '14 seats left',
              },
              {
                date: 'Sat 23 Aug',
                time: '10:30',
                title: 'Story Time for Under 7s',
                desc: 'Our Saturday morning Story Time with Katie, our children\'s storyteller. Interactive, imaginative, and always magical. All ages 2–7 welcome.',
                type: 'Children\'s Event',
                col: '#e07a5f',
                seats: 'Free, drop-in',
              },
              {
                date: 'Thu 28 Aug',
                time: '18:30',
                title: 'Book Club: August Selection',
                desc: 'Monthly book club meeting to discuss our August pick. All members welcome, newcomers encouraged. Wine and conversation provided.',
                type: 'Book Club',
                col: '#264653',
                seats: 'Members only',
              },
            ].map((event, i) => (
              <div
                key={event.title}
                className="reveal-up rounded-xl p-7 cursor-pointer group transition-all duration-300"
                style={{
                  backgroundColor: C.leather ?? C.inkMid,
                  border: `1px solid ${event.col}33`,
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${event.col}88`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${event.col}33`)}
              >
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <div className="text-xs tracking-widest uppercase mb-1" style={{ color: event.col }}>{event.type}</div>
                    <div className="text-sm font-bold" style={S.white}>{event.date} · {event.time}</div>
                  </div>
                  <span
                    className="text-[10px] tracking-widest uppercase px-2 py-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: `${event.col}22`, color: event.col }}
                  >
                    {event.seats}
                  </span>
                </div>
                <h3 className="text-base font-semibold serif mb-3" style={S.white}>{event.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: `${C.white}66` }}>{event.desc}</p>
                <div className="mt-6 text-xs tracking-widest uppercase font-semibold transition-colors duration-300" style={{ color: event.col }}>
                  Book a Place &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOK CLUB
          ═══════════════════════════════════════ */}
      <section id="book-club" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionCream}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="text-xs tracking-widest uppercase mb-4" style={S.leather}>Join the Community</p>
            <h2 className="text-4xl md:text-5xl font-light serif mb-8" style={S.ink}>
              The Chapter &<br />Verse Book Club
            </h2>
            <p className="text-base leading-relaxed mb-8" style={S.warmGray}>
              Meet on the last Thursday of every month. 280 members, 40 years of reading, and a tradition of spirited conversation. Annual membership includes a free book each month, in-store discount, and priority event booking.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { perk: '📚 A free book every month (the club selection)', col: C.leather },
                { perk: '🏷 10% in-store and online discount, always', col: C.leather },
                { perk: '🎟 Priority booking for all author events', col: C.leather },
                { perk: '☕ 15% off in the café on meeting nights', col: C.leather },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{p.perk.split(' ')[0]}</span>
                  <span className="text-sm" style={S.warmGray}>{p.perk.slice(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#newsletter"
                className="border-2 px-8 py-4 text-xs tracking-[0.25em] uppercase transition-all duration-500 serif"
                style={{ borderColor: C.leather, color: C.leather }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.leather
                  e.currentTarget.style.color = C.white
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = C.leather
                }}
              >
                Join — £25/year
              </a>
              <span className="text-xs" style={S.warmGray}>First meeting free to visitors</span>
            </div>
          </div>

          <div className="reveal-right">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=900&fit=crop"
              alt="Book club gathering at Chapter & Verse"
              className="w-full rounded-2xl"
              style={{ maxHeight: 600, objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CAFÉ
          ═══════════════════════════════════════ */}
      <section id="café" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionParchmentDark}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&h=600&fit=crop"
              alt="Chapter & Verse café"
              className="w-full rounded-2xl"
              style={{ maxHeight: 500, objectFit: 'cover' }}
            />
          </div>
          <div className="reveal-right order-1 md:order-2">
            <p className="text-xs tracking-widest uppercase mb-4" style={S.leather}>The Café</p>
            <h2 className="text-4xl md:text-5xl font-light serif mb-6" style={S.ink}>
              Sit. Read.<br />Stay a While.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={S.warmGray}>
              Tucked at the back of the shop, our small café serves excellent coffee, loose-leaf teas, homemade cakes, and light lunches. There is no WiFi password — come to read, not to work.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { item: 'Specialty Coffee', detail: 'from £2.80' },
                { item: 'Loose-leaf Teas', detail: '12 varieties' },
                { item: 'Homemade Cakes', detail: 'Baked daily' },
                { item: 'Toasted Sandwiches', detail: 'from £5.50' },
              ].map((m) => (
                <div key={m.item} className="p-4 rounded-xl" style={{ backgroundColor: C.cream, border: `1px solid ${C.leather}22` }}>
                  <div className="text-sm font-semibold serif mb-0.5" style={S.ink}>{m.item}</div>
                  <div className="text-xs" style={S.leather}>{m.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionCream}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-widest uppercase mb-3" style={S.leather}>What Readers Say</p>
          <h2 className="text-4xl md:text-5xl font-light serif" style={S.ink}>Beloved by Readers<br />for 40 Years</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionParchmentDark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.leather}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-light serif" style={S.ink}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="BookOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEWSLETTER / CONTACT
          ═══════════════════════════════════════ */}
      <section id="newsletter" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionInk}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-widest uppercase mb-4" style={S.leather}>Stay Connected</p>
            <h2 className="text-4xl md:text-5xl font-light serif mb-8" style={S.white}>
              Never Miss an<br />Event or New Title
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: `${C.white}77` }}>
              Our weekly newsletter covers new arrivals, staff picks, upcoming events, and exclusive offers for subscribers. Written by booksellers, for readers.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Address', value: '22 Museum Street, Bloomsbury, London WC1A 1JT' },
                { label: 'Phone', value: '+44 20 7234 5678' },
                { label: 'Email', value: 'hello@chapterandverse.com' },
                { label: 'Hours', value: 'Mon–Sat 09:00–19:00 · Sun 11:00–17:00' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-px min-h-[32px] flex-shrink-0" style={{ backgroundColor: `${C.leather}88` }} />
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-0.5" style={S.leather}>{info.label}</p>
                    <p className="text-sm font-light" style={{ color: `${C.white}99` }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 28, label: 'event tickets booked this week' }}
              vertical="bookos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 800)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442072345678" message="Hi! I'd like to find out more about Chapter & Verse Bookshop." vertical="bookos" />
    </div>
  )
}

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
  charcoal: '#2f2f2f',
  charcoalLight: '#3d3d3d',
  earth: '#c4a882',
  earthLight: '#d4bc9e',
  sage: '#8fbc8f',
  sageDark: '#6a9a6a',
  cream: '#faf5ef',
  creamDark: '#f0e8db',
  muted: '#7a7060',
  mutedLight: '#9a8a78',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Stillwater Yoga Studio',
  description: 'Breathe. Flow. Be.',
  url: 'https://stillwater-yoga.example.com',
  locale: 'en',
  vertical: 'wellnessos',
  theme: 'classic',
  branding: { primaryColor: C.charcoal, accentColor: C.earth },
  contact: {
    phone: '+44 20 7456 8901',
    email: 'hello@stillwater-yoga.example.com',
    whatsapp: '+442074568901',
    address: '8 Barnsbury Square, Islington, London N1 1JQ',
    coordinates: { lat: 51.5427, lng: -0.1103 },
  },
  social: {
    instagram: 'stillwateryoga',
    facebook: 'https://facebook.com/stillwateryogalondon',
  },
  seo: {
    title: 'Stillwater Yoga Studio | Classes, Retreats & Teacher Training',
    description: 'Vinyasa, Hatha, Yin, Hot Yoga and Meditation. All levels welcome. Islington, London.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const classes = [
  { name: 'Vinyasa Flow', level: 'All levels', duration: '60 min', desc: 'Dynamic, breath-led sequences building heat and strength. Creative transitions that keep every class fresh.', icon: '🌊', color: C.sage },
  { name: 'Hatha Yoga', level: 'Beginner–Intermediate', duration: '75 min', desc: 'Classical postures held longer for deeper alignment and awareness. Perfect for building a strong foundation.', icon: '☀️', color: C.earth },
  { name: 'Yin Yoga', level: 'All levels', duration: '75 min', desc: 'Passive floor-based holds targeting deep connective tissue. Deeply meditative and restorative.', icon: '🌙', color: C.sageDark },
  { name: 'Hot Yoga', level: 'Intermediate', duration: '90 min', desc: '37°C heated studio. 26 postures in sequence. Detoxifying, strengthening, and deeply challenging.', icon: '🔥', color: '#c4532a' },
  { name: 'Prenatal Yoga', level: 'All trimesters', duration: '60 min', desc: 'Gentle, safe sequences designed with midwives. Build strength for birth and ease discomfort throughout pregnancy.', icon: '🤰', color: C.earthLight },
  { name: 'Meditation', level: 'All levels', duration: '45 min', desc: 'Guided mindfulness, body scan, and breathwork sessions. Leave the week behind. Begin with 5 minutes of stillness.', icon: '🧘', color: C.muted },
]

const timetable = [
  { day: 'Monday', slots: ['07:00 Vinyasa', '12:30 Hatha', '18:30 Yin'] },
  { day: 'Tuesday', slots: ['08:00 Hot Yoga', '19:00 Vinyasa', '20:15 Meditation'] },
  { day: 'Wednesday', slots: ['07:00 Hatha', '12:30 Vinyasa', '18:30 Hot Yoga'] },
  { day: 'Thursday', slots: ['08:00 Yin', '19:00 Prenatal', '20:15 Vinyasa'] },
  { day: 'Friday', slots: ['07:00 Vinyasa', '12:30 Meditation', '18:00 Hatha'] },
  { day: 'Saturday', slots: ['09:00 Hot Yoga', '11:00 Vinyasa', '13:00 Yin'] },
  { day: 'Sunday', slots: ['09:30 Hatha', '11:00 Meditation', '16:00 Restorative'] },
]

const pricing = [
  { name: 'Drop-In', price: '£15', per: 'per class', desc: 'Walk in any time. Pay as you go. No commitment required.', featured: false },
  { name: '10-Class Pass', price: '£120', per: '£12 per class', desc: 'Valid 90 days. Use across any class type.', featured: true },
  { name: 'Unlimited Monthly', price: '£89', per: 'per month', desc: 'Unlimited classes, priority booking, 10% off retreats.', featured: false },
]

const retreats = [
  {
    name: 'Tuscany Immersion',
    date: 'September 12–18, 2026',
    location: 'Val d\'Orcia, Italy',
    desc: '7 days of yoga, meditation, organic food, and olive groves. Small group of 12 maximum.',
    price: '£1,850 all-inclusive',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop',
    spots: 4,
  },
  {
    name: 'Scottish Highlands',
    date: 'November 7–10, 2026',
    location: 'Perthshire, Scotland',
    desc: '4 days of restorative yoga, wild swimming, forest bathing and fire ceremony.',
    price: '£695 all-inclusive',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    spots: 6,
  },
]

const teachers = [
  {
    name: 'Isla Mackintosh',
    style: 'Vinyasa, Meditation',
    bio: 'Trained in Mysore, India. 500hr YTT. Teaching for 11 years.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=500&fit=crop',
  },
  {
    name: 'Ravi Patel',
    style: 'Hatha, Hot Yoga',
    bio: 'Iyengar-trained. Former sports physiotherapist. Anatomy-focused.',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=500&fit=crop',
  },
  {
    name: 'Luna Ferreira',
    style: 'Yin, Prenatal',
    bio: 'Specialist in yin and prenatal yoga. Doula trained. Mother of two.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop',
  },
  {
    name: 'Tom Ashby',
    style: 'Vinyasa, Breathwork',
    bio: 'Former professional athlete turned yoga teacher. Wim Hof certified.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=1000&fit=crop', large: true },
  { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=1000&fit=crop', large: true },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=600&h=400&fit=crop' },
]

const reviews: Review[] = [
  { id: '1', author: 'Charlotte H.', rating: 5, text: 'Stillwater completely changed my relationship with my body. Isla\'s Vinyasa class is the only hour of the week I forget my phone exists.', date: '2026-07-18', source: 'google', verified: true },
  { id: '2', author: 'Ben W.', rating: 5, text: 'I came as a total skeptic — "yoga is too slow for me". After one Hot Yoga session I was completely humbled. Ravi\'s instruction is exceptional.', date: '2026-07-25', source: 'google', verified: true },
  { id: '3', author: 'Sophie K.', rating: 5, text: 'The prenatal classes with Luna kept me sane through a difficult third trimester. She clearly knows her anatomy and she\'s incredibly warm.', date: '2026-08-02', source: 'trustpilot', verified: true },
  { id: '4', author: 'Daniel R.', rating: 5, text: 'Tuscany retreat was the best week of my year. Small group, stunning location, food that I\'m still dreaming about. Already booked next year\'s.', date: '2026-07-30', source: 'google', verified: true },
  { id: '5', author: 'Mia T.', rating: 4, text: 'Yin yoga with Luna on Thursday evenings has become my non-negotiable. The studio itself is beautiful — plants everywhere, perfect temperature.', date: '2026-08-04', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do I need to bring my own mat?', answer: 'We have premium Manduka mats available to borrow for £1.50 per class, or you\'re welcome to bring your own. We also hire blocks, straps and blankets at no charge.' },
  { question: 'I\'m a complete beginner — which class should I start with?', answer: 'Start with our Hatha or Sunday morning Restorative class. Both are slower-paced, heavily cued, and perfect for beginners. Tell the teacher when you arrive and they\'ll give you personal guidance.' },
  { question: 'Is Hot Yoga safe in pregnancy?', answer: 'We recommend avoiding Hot Yoga during pregnancy. Please join our dedicated Prenatal classes instead, which are specifically designed for each trimester and run by a doula-trained teacher.' },
  { question: 'How far in advance can I book?', answer: 'Classes open for booking 7 days in advance. Popular slots (especially Hot Yoga and Sunday Vinyasa) often fill within hours. Monthly members get priority booking 10 days ahead.' },
  { question: 'What is your cancellation policy?', answer: 'Cancel up to 4 hours before class for a full credit. Cancellations within 4 hours forfeit the class credit to respect other students on the waitlist.' },
  { question: 'Do you offer teacher training?', answer: 'Yes! Our 200hr YTT runs annually in January. We also run 50hr specialisations in Yin and Prenatal yoga. Applications open in October. Contact us to join the waitlist.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '07:00', available: true, spotsLeft: 2 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '09:30', available: true, spotsLeft: 5 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '12:30', available: true, spotsLeft: 3 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '18:30', available: true, spotsLeft: 1 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '19:45', available: true, spotsLeft: 4 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://stillwater-yoga.example.com',
  name: 'Stillwater Yoga Studio',
  description: 'Yoga studio in Islington, London. Vinyasa, Hatha, Yin, Hot Yoga, Prenatal and Meditation classes.',
  url: 'https://stillwater-yoga.example.com',
  telephone: '+44 20 7456 8901',
  email: 'hello@stillwater-yoga.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8 Barnsbury Square',
    addressLocality: 'London',
    postalCode: 'N1 1JQ',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5427, longitude: -0.1103 },
  priceRange: '£',
  sameAs: ['https://instagram.com/stillwateryoga'],
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
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.charcoal}e8`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.earth}22` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="font-extralight tracking-[0.35em] text-sm uppercase" style={{ color: C.cream }}>
          Stillwater
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Classes', 'Retreats', 'Pricing', 'Book'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.mutedLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.earth)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.mutedLight)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.earth, color: C.earth }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.earth
              e.currentTarget.style.color = C.charcoal
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.earth
            }}
          >
            Reserve Mat
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// LOTUS MANDALA SVG
// ─────────────────────────────────────────────
function LotusMandala({ size = 320, opacity = 0.08 }: { size?: number; opacity?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Outer ring */}
      <circle cx="160" cy="160" r="155" stroke={C.earth} strokeWidth="0.5" />
      <circle cx="160" cy="160" r="140" stroke={C.earth} strokeWidth="0.3" />
      {/* Petals — 8 petals rotated */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 160 160)`}>
          <ellipse cx="160" cy="90" rx="14" ry="70" stroke={C.earth} strokeWidth="0.5" fill="none" />
        </g>
      ))}
      {/* Inner petals */}
      {[22, 67, 112, 157, 202, 247, 292, 337].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 160 160)`}>
          <ellipse cx="160" cy="118" rx="8" ry="42" stroke={C.earthLight} strokeWidth="0.4" fill="none" />
        </g>
      ))}
      {/* Center */}
      <circle cx="160" cy="160" r="20" stroke={C.earth} strokeWidth="0.5" />
      <circle cx="160" cy="160" r="10" stroke={C.earth} strokeWidth="0.5" fill={`${C.earth}22`} />
    </svg>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function YogaOSDemoPage() {
  return (
    <div style={{ backgroundColor: C.cream, color: C.charcoal }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.earth }} />

      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.015); }
        }
        @keyframes rotateMandala {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes seasonRotate {
          0%, 22% { opacity: 1; transform: translateY(0); }
          25%, 72% { opacity: 0; transform: translateY(-10px); }
          75%, 97% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .wave-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Zen / Grain Overlay
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1600&h=1200&fit=crop&q=90"
          alt="Yoga studio interior"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.38) saturate(0.6)' }}
        />

        {/* Heavy grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none grain"
          style={{ opacity: 0.6 }}
        />

        {/* Warm color overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(160deg, ${C.charcoal}66 0%, ${C.charcoal}44 50%, transparent 100%)` }}
        />

        {/* Rotating mandala — top right */}
        <div
          className="absolute top-16 right-16 hidden lg:block pointer-events-none"
          style={{ animation: 'rotateMandala 90s linear infinite' }}
        >
          <LotusMandala size={280} opacity={0.12} />
        </div>

        {/* Central content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto stagger-children">
          <p
            className="reveal-clip-up text-xs tracking-[0.6em] uppercase mb-10"
            style={{ color: C.earth }}
          >
            Islington &middot; London &middot; Est. 2015
          </p>

          {/* Breathing headline */}
          <h1
            className="reveal-clip-up mb-10 font-extralight"
            style={{
              color: C.cream,
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              animation: 'breathe 6s ease-in-out infinite',
              animationDelay: '1s',
            }}
          >
            Breathe.<br />Flow.<br /><em style={{ color: C.earth }}>Be.</em>
          </h1>

          <p
            className="reveal-up text-base md:text-lg font-light leading-relaxed mb-12 max-w-md mx-auto"
            style={{ color: `${C.cream}bb`, animationDelay: '0.5s' }}
          >
            A sanctuary for modern life. Six class styles, four teachers, and retreats
            that take you somewhere else entirely.
          </p>

          <div className="reveal-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.7s' }}>
            <a
              href="#book"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.earth, color: C.earth }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.earth
                e.currentTarget.style.color = C.charcoal
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.earth
              }}
            >
              Reserve Your Mat
            </a>
            <a
              href="#classes"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: `${C.cream}88` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = `${C.cream}88`)}
            >
              Explore Classes
            </a>
          </div>
        </div>

        {/* Wave bottom transition */}
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0,60 C480,100 960,20 1440,60 L1440,100 L0,100 Z" fill={C.cream} />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. CLASSES SCHEDULE
          ═══════════════════════════════════════ */}
      <section id="classes" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.earth }}>Six Disciplines</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.charcoal }}>Our Classes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {classes.map((cls, i) => (
              <div
                key={cls.name}
                className="reveal-up rounded-2xl p-8 group cursor-default transition-all duration-500"
                style={{
                  backgroundColor: C.cream,
                  border: `1px solid ${C.earth}22`,
                  animationDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 48px rgba(196,168,130,0.15)`
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{cls.icon}</div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-light" style={{ color: C.charcoal }}>{cls.name}</h3>
                </div>
                <div className="flex gap-3 mb-4">
                  <span
                    className="text-xs tracking-[0.1em] uppercase px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${C.sage}22`, color: C.sageDark }}
                  >
                    {cls.level}
                  </span>
                  <span
                    className="text-xs tracking-[0.1em] uppercase px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${C.earth}22`, color: C.muted }}
                  >
                    {cls.duration}
                  </span>
                </div>
                <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. TIMETABLE
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.creamDark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.earth }}>Weekly Schedule</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Timetable</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3 stagger-children">
            {timetable.map((day, i) => (
              <div
                key={day.day}
                className="reveal-up rounded-xl p-5"
                style={{
                  backgroundColor: C.cream,
                  border: `1px solid ${C.earth}22`,
                  animationDelay: `${i * 0.06}s`,
                }}
              >
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
                  style={{ color: C.earth }}
                >
                  {day.day}
                </p>
                <div className="space-y-2">
                  {day.slots.map((slot) => (
                    <div
                      key={slot}
                      className="text-xs font-light py-2 px-3 rounded-lg"
                      style={{ backgroundColor: `${C.sage}18`, color: C.charcoal }}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. PRICING
          ═══════════════════════════════════════ */}
      <section id="pricing" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.earth }}>Simple Pricing</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.cream }}>Find Your Practice</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {pricing.map((p, i) => (
              <div
                key={p.name}
                className="reveal-up rounded-2xl p-10 text-center transition-all duration-500"
                style={{
                  backgroundColor: p.featured ? C.earth : `${C.charcoalLight}`,
                  border: p.featured ? `2px solid ${C.earth}` : `1px solid ${C.earth}22`,
                  animationDelay: `${i * 0.1}s`,
                  transform: p.featured ? 'scale(1.04)' : 'scale(1)',
                }}
              >
                {p.featured && (
                  <div
                    className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-1 rounded-full mb-6"
                    style={{ backgroundColor: C.charcoal, color: C.cream }}
                  >
                    Best Value
                  </div>
                )}
                <h3
                  className="text-lg font-light tracking-[0.1em] mb-4"
                  style={{ color: p.featured ? C.charcoal : C.cream }}
                >
                  {p.name}
                </h3>
                <div
                  className="text-5xl font-extralight mb-2"
                  style={{ color: p.featured ? C.charcoal : C.earth }}
                >
                  {p.price}
                </div>
                <p
                  className="text-xs tracking-[0.15em] uppercase mb-6"
                  style={{ color: p.featured ? `${C.charcoal}99` : C.mutedLight }}
                >
                  {p.per}
                </p>
                <p
                  className="text-sm font-light leading-relaxed mb-8"
                  style={{ color: p.featured ? `${C.charcoal}cc` : C.mutedLight }}
                >
                  {p.desc}
                </p>
                <a
                  href="#book"
                  className="block border px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    borderColor: p.featured ? C.charcoal : C.earth,
                    color: p.featured ? C.charcoal : C.earth,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = p.featured ? C.charcoal : C.earth
                    e.currentTarget.style.color = p.featured ? C.earth : C.charcoal
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = p.featured ? C.charcoal : C.earth
                  }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. RETREATS
          ═══════════════════════════════════════ */}
      <section id="retreats" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.earth }}>Go Deeper</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.charcoal }}>Upcoming Retreats</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            {retreats.map((r, i) => (
              <div
                key={r.name}
                className="reveal-up rounded-2xl overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.charcoal}cc, transparent)` }} />
                  <div className="absolute bottom-6 left-6">
                    <div
                      className="inline-block text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-2"
                      style={{ backgroundColor: `${C.earth}cc`, color: C.charcoal }}
                    >
                      {r.spots} spots left
                    </div>
                  </div>
                </div>
                <div className="p-8" style={{ backgroundColor: C.creamDark }}>
                  <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: C.earth }}>{r.date} · {r.location}</p>
                  <h3 className="text-2xl font-extralight mb-3" style={{ color: C.charcoal }}>{r.name}</h3>
                  <p className="text-sm font-light leading-relaxed mb-6" style={{ color: C.muted }}>{r.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-light" style={{ color: C.earth }}>{r.price}</span>
                    <a
                      href="#book"
                      className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                      style={{ borderColor: C.earth, color: C.earth }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = C.earth
                        e.currentTarget.style.color = C.charcoal
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = C.earth
                      }}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. TEACHERS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.creamDark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.earth }}>Our Guides</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Teacher Profiles</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
            {teachers.map((t, i) => (
              <div
                key={t.name}
                className="reveal-up text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative mb-5 mx-auto overflow-hidden rounded-xl" style={{ height: 200 }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.charcoal}66, transparent)` }} />
                </div>
                <h3 className="text-base font-light mb-1" style={{ color: C.charcoal }}>{t.name}</h3>
                <p className="text-xs tracking-[0.1em] mb-2" style={{ color: C.earth }}>{t.style}</p>
                <p className="text-xs font-light" style={{ color: C.muted }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. GALLERY
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.earth }}>The Studio</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.cream }}>Inside Stillwater</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 stagger-children">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`reveal-up relative overflow-hidden rounded-xl group cursor-pointer ${img.large ? 'col-span-2 row-span-2' : ''}`}
                style={{ height: img.large ? undefined : '220px', animationDelay: `${i * 0.08}s` }}
              >
                <img
                  src={img.src}
                  alt="Stillwater yoga studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  style={{ minHeight: img.large ? '460px' : '220px' }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(to top, ${C.charcoal}88, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.earth }}>Student Stories</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.creamDark }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.earth }}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="YogaOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. BOOKING
          ═══════════════════════════════════════ */}
      <section id="book" className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: C.charcoal }}>
        <div
          className="absolute top-0 left-0 pointer-events-none opacity-5"
          style={{ animation: 'rotateMandala 120s linear infinite' }}
        >
          <LotusMandala size={500} opacity={1} />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.earth }}>Join Us</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={{ color: C.cream }}>
              Reserve<br />Your Mat
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: C.mutedLight }}>
              Book any class online. New students — come 10 minutes early and meet your teacher.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Location', detail: '8 Barnsbury Square, Islington N1 1JQ. Angel tube (8 min walk).' },
                { title: 'What to Bring', detail: 'Water, a small towel. We have mats to borrow for £1.50.' },
                { title: 'Cancellation', detail: 'Free cancellation up to 4 hours before class.' },
                { title: 'First Visit?', detail: 'New students get their first class for £10 — any style, any teacher.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.earth}55` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: C.earth }}>{info.title}</p>
                    <p className="text-sm font-light" style={{ color: C.mutedLight }}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 189, label: 'mats booked this week' }}
              vertical="wellnessos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA
        phoneNumber="+442074568901"
        message="Hi! I'd like to book a yoga class at Stillwater"
        vertical="wellnessos"
      />
    </div>
  )
}

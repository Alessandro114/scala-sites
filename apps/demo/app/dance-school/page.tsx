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
  purple: '#7c3aed',
  purpleLight: '#a855f7',
  magenta: '#ec4899',
  magentaLight: '#f472b6',
  dark: '#1a1a2e',
  darkMid: '#16213e',
  gold: '#fbbf24',
  goldLight: '#fde68a',
  white: '#ffffff',
  muted: '#94a3b8',
  mutedLight: '#cbd5e1',
} as const

const S = {
  page: { backgroundColor: C.dark, color: C.white } as React.CSSProperties,
  sectionDark: { backgroundColor: C.dark } as React.CSSProperties,
  sectionMid: { backgroundColor: C.darkMid } as React.CSSProperties,
  purple: { color: C.purple } as React.CSSProperties,
  magenta: { color: C.magenta } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Rhythm Studio',
  description: 'Professional dance classes for all ages and levels in London',
  url: 'https://rhythmstudio.example.com',
  locale: 'en',
  vertical: 'danceos',
  theme: 'bold',
  branding: { primaryColor: C.purple, accentColor: C.magenta },
  contact: {
    phone: '+44 20 7946 2233',
    email: 'info@rhythmstudio.com',
    whatsapp: '+442079462233',
    address: '77 Brick Lane, Shoreditch, London E1 6QL',
    coordinates: { lat: 51.5225, lng: -0.0717 },
  },
  social: {
    instagram: 'rhythmstudiolondon',
    facebook: 'https://facebook.com/rhythmstudiolondon',
  },
  seo: {
    title: 'Rhythm Studio | Dance Classes London',
    description: 'Ballet, contemporary, hip hop, salsa and more. Professional dance classes in Shoreditch, London.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const classes = [
  { name: 'Ballet', level: 'All levels', desc: 'Classical technique, posture, grace and musicality. From absolute beginners to advanced.', image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=400&fit=crop', color: C.magenta },
  { name: 'Contemporary', level: 'Intermediate+', desc: 'Fluid movement, floorwork and expressive choreography rooted in modern dance theory.', image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=400&fit=crop', color: C.purple },
  { name: 'Hip Hop', level: 'Beginner–Advanced', desc: 'Street style, breaking, locking and popping. High energy and great fun.', image: 'https://images.unsplash.com/photo-1559386483-73f5a7f60d35?w=600&h=400&fit=crop', color: C.gold },
  { name: 'Salsa', level: 'All levels', desc: 'Cuban-style salsa, footwork, turns and partner work. Social dancing at its finest.', image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop', color: C.magenta },
  { name: 'Tap', level: 'All levels', desc: 'Rhythmic footwork, syncopation and percussive technique on hardwood floors.', image: 'https://images.unsplash.com/photo-1535525153412-5a042b7c6de6?w=600&h=400&fit=crop', color: C.purple },
  { name: 'Kids Classes', level: 'Ages 4–14', desc: 'Fun, age-appropriate classes building coordination, confidence and love of movement.', image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop', color: C.gold },
]

const schedule = [
  { day: 'Mon', slots: ['Ballet 09:00', 'Hip Hop 18:30', 'Contemporary 20:00'] },
  { day: 'Tue', slots: ['Kids 10:00', 'Salsa 19:00', 'Ballet 20:30'] },
  { day: 'Wed', slots: ['Tap 09:00', 'Hip Hop 17:30', 'Contemporary 19:00'] },
  { day: 'Thu', slots: ['Salsa 19:00', 'Ballet 20:30'] },
  { day: 'Fri', slots: ['Kids 10:00', 'Hip Hop 18:00', 'Tap 19:30'] },
  { day: 'Sat', slots: ['Ballet 10:00', 'Contemporary 12:00', 'Salsa 14:00', 'All Styles 16:00'] },
  { day: 'Sun', slots: ['Kids 10:00', 'Hip Hop 12:00', 'Open Floor 14:00'] },
]

const performances = [
  { name: 'Summer Showcase 2026', date: 'August 30, 2026', venue: 'Hackney Empire', desc: 'Our annual student showcase — 30+ performers, 12 styles, one unforgettable evening.' },
  { name: 'Street Dance Battle', date: 'September 14, 2026', venue: 'Fabric, London', desc: 'Rhythm Studio teams compete in the London Open Street Dance Championship.' },
  { name: 'Winter Gala', date: 'December 12, 2026', venue: 'Barbican Centre', desc: 'Classical and contemporary pieces by our advanced and professional students.' },
]

const instructors = [
  { name: 'Sofia Reyes', specialty: 'Ballet & Contemporary', exp: '15 years', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face', bio: 'Former principal dancer with the English National Ballet.' },
  { name: 'Marcus Webb', specialty: 'Hip Hop & Street', exp: '12 years', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', bio: 'Choreographer for Adidas, Nike and major UK tours.' },
  { name: 'Lucia Fernandez', specialty: 'Salsa & Latin', exp: '18 years', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face', bio: 'World Salsa Champion 2018. Trained in Havana, Cuba.' },
  { name: 'James O\'Brien', specialty: 'Tap & Jazz', exp: '10 years', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', bio: 'Broadway-trained tap artist and musical theatre professional.' },
]

const pricing = [
  { name: 'Drop-in', price: '£12', desc: 'Per class. Walk in any time, no commitment required.', highlight: false },
  { name: 'Term Pass', price: '£95', desc: '10-class term pass. Mix and match any class.', highlight: false },
  { name: 'Unlimited', price: '£75/mo', desc: 'Unlimited classes. Perfect for dedicated students.', highlight: true },
]

const reviews: Review[] = [
  { id: '1', author: 'Anika P.', rating: 5, text: "Rhythm Studio transformed my life. I came for one salsa class and two years later I'm performing on stage. Sofia and Marcus are world class teachers.", date: '2026-07-18', source: 'google', verified: true },
  { id: '2', author: 'David K.', rating: 5, text: 'My daughter has been doing ballet here for three years. The improvement is extraordinary. The kids programme is nurturing, fun and technically excellent.', date: '2026-07-25', source: 'google', verified: true },
  { id: '3', author: 'Zara M.', rating: 5, text: "The Unlimited plan is the best value in London. I do five classes a week and it's changed my fitness, confidence and social life completely.", date: '2026-08-01', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Felix H.', rating: 5, text: 'Marcus\'s hip hop class is electric. The energy in that room is unlike anything I\'ve experienced. Highly technical but accessible for all levels.', date: '2026-08-05', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do I need any experience to join?', answer: 'Absolutely not. We offer classes for complete beginners in every style. Our instructors are expert at teaching from scratch and building your confidence gradually.' },
  { question: 'What should I wear?', answer: 'Comfortable clothing you can move in freely. For ballet, leotard and ballet shoes are recommended. For hip hop and street dance, trainers and comfortable activewear. We sell dancewear at the studio.' },
  { question: 'How do I enrol?', answer: 'Book a trial class online or send us a WhatsApp. We recommend starting with a drop-in class to find the right style and level for you before committing to a term pass.' },
  { question: 'Can my child join mid-term?', answer: 'Yes. Our kids classes run on a rolling basis and children can join at any point. We will match them to the right age group and ability level.' },
  { question: 'Do you offer adult beginner intensives?', answer: 'Yes! We run 4-week adult intensive programmes four times a year — perfect if you want to build a solid foundation quickly. Check our schedule for the next intake dates.' },
  { question: 'Is there parking?', answer: 'Brick Lane has several pay-and-display spaces. We recommend arriving by public transport — Shoreditch High Street station (Overground) is a 3-minute walk.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: 'Ballet 09:00', available: true, spotsLeft: 5 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: 'Hip Hop 18:30', available: true, spotsLeft: 3 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: 'Contemporary 20:00', available: true, spotsLeft: 7 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: 'Salsa 19:00', available: true, spotsLeft: 2 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: 'Tap 19:30', available: true, spotsLeft: 6 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://rhythmstudio.example.com',
  name: 'Rhythm Studio',
  description: 'Professional dance school in Shoreditch, London offering ballet, contemporary, hip hop, salsa, tap and kids classes.',
  url: 'https://rhythmstudio.example.com',
  telephone: '+44 20 7946 2233',
  email: 'info@rhythmstudio.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '77 Brick Lane',
    addressLocality: 'London',
    postalCode: 'E1 6QL',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5225, longitude: -0.0717 },
  openingHours: ['Mo-Fr 09:00-21:00', 'Sa-Su 10:00-17:00'],
  priceRange: '££',
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
      style={{ backgroundColor: `${C.dark}ee`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.purple}33` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-black text-xl tracking-tight" style={{ background: `linear-gradient(90deg, ${C.purple}, ${C.magenta})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            RHYTHM
          </span>
          <span className="font-light text-xl tracking-tight" style={{ color: C.white }}>STUDIO</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Classes', 'Schedule', 'Instructors', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
            style={{ background: `linear-gradient(90deg, ${C.purple}, ${C.magenta})`, color: C.white }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            Book a Class
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function DanceOSPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes word-reveal {
          from { opacity: 0; transform: translateY(40px) skewY(4deg); }
          to { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes note-float {
          0%, 100% { transform: translateY(0) rotate(-5deg); opacity: 0.4; }
          50% { transform: translateY(-22px) rotate(8deg); opacity: 0.8; }
        }
        @keyframes energy-streak {
          0% { transform: scaleX(0) translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scaleX(1) translateX(0); opacity: 0; }
        }
        @keyframes dancer-sway {
          0%, 100% { transform: skewX(-3deg) scaleX(0.98); }
          50% { transform: skewX(3deg) scaleX(1.02); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .word-reveal { animation: word-reveal 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .w-d1 { animation-delay: 0.1s; }
        .w-d2 { animation-delay: 0.25s; }
        .w-d3 { animation-delay: 0.4s; }
        .w-d4 { animation-delay: 0.55s; }
        .dance-card:hover { transform: translateY(-6px) scale(1.01); }
        .dance-card { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1); }
        .instructor-card:hover .instructor-img { transform: scale(1.06); }
        .instructor-img { transition: transform 0.5s ease; }
      `}</style>

      <div className="scroll-progress" style={{ background: `linear-gradient(90deg, ${C.purple}, ${C.magenta})` }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Dynamic gradient + dancer silhouette
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ background: `linear-gradient(135deg, ${C.dark} 0%, #2d1b69 40%, #4a0e40 70%, ${C.dark} 100%)` }}
      >
        {/* Floating music notes */}
        {[
          { note: '♩', top: '15%', left: '8%', size: 28, delay: '0s', dur: '4s' },
          { note: '♪', top: '30%', left: '85%', size: 22, delay: '1.2s', dur: '5s' },
          { note: '♫', top: '60%', left: '92%', size: 32, delay: '0.5s', dur: '3.5s' },
          { note: '♬', top: '75%', left: '6%', size: 20, delay: '2s', dur: '6s' },
          { note: '♩', top: '10%', left: '55%', size: 18, delay: '1.8s', dur: '4.5s' },
          { note: '♪', top: '85%', left: '70%', size: 26, delay: '0.8s', dur: '5.5s' },
        ].map((n, i) => (
          <div
            key={i}
            className="absolute pointer-events-none select-none font-bold"
            style={{
              top: n.top,
              left: n.left,
              fontSize: n.size,
              color: i % 2 === 0 ? C.purple : C.magenta,
              animation: `note-float ${n.dur} ${n.delay} ease-in-out infinite`,
            }}
          >
            {n.note}
          </div>
        ))}

        {/* Energy streaks */}
        {[20, 35, 50, 65, 80].map((top, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              top: `${top}%`,
              left: 0,
              right: 0,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? C.purple : C.magenta}44, transparent)`,
              animation: `energy-streak ${3 + i * 0.5}s ${i * 0.8}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* Dancer silhouette (clip-path CSS art) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none hidden md:block"
          style={{
            background: `linear-gradient(135deg, ${C.purple}33, ${C.magenta}22)`,
            clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=900&h=1200&fit=crop&q=85"
            alt="Dancer in motion"
            className="w-full h-full object-cover"
            style={{ mixBlendMode: 'luminosity', opacity: 0.45 }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to right, ${C.dark} 0%, transparent 30%, transparent 70%, ${C.dark}44 100%)` }}
          />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 w-full">
          {/* Style pills */}
          <div className="word-reveal flex flex-wrap gap-2 mb-8">
            {['Ballet', 'Hip Hop', 'Salsa', 'Contemporary', 'Tap', 'Kids'].map((style, i) => (
              <span
                key={style}
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: `${i % 2 === 0 ? C.purple : C.magenta}22`,
                  color: i % 2 === 0 ? C.purpleLight : C.magentaLight,
                  border: `1px solid ${i % 2 === 0 ? C.purple : C.magenta}44`,
                }}
              >
                {style}
              </span>
            ))}
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
            <span className="word-reveal w-d1 block" style={{ color: C.white }}>Find Your</span>
            <span
              className="word-reveal w-d2 block"
              style={{ background: `linear-gradient(90deg, ${C.purple}, ${C.magenta}, ${C.gold})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Rhythm.
            </span>
          </h1>

          <p className="word-reveal w-d3 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10" style={{ color: C.muted }}>
            800+ students. 6 dance styles. Expert instructors. Whether you&apos;re taking your first steps or training for the stage — this is where movement begins.
          </p>

          <div className="word-reveal w-d4 flex flex-wrap gap-4 mb-12">
            <a
              href="#booking"
              className="px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300"
              style={{ background: `linear-gradient(90deg, ${C.purple}, ${C.magenta})`, color: C.white, boxShadow: `0 8px 32px ${C.purple}44` }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = `0 12px 48px ${C.purple}66` }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 8px 32px ${C.purple}44` }}
            >
              Book a Free Trial
            </a>
            <a
              href="#classes"
              className="px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 border"
              style={{ borderColor: `${C.white}44`, color: C.white, backgroundColor: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.white}11` }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              See All Classes
            </a>
          </div>

          {/* Stats */}
          <div className="word-reveal flex gap-10">
            {[['800+', 'Students'], ['6', 'Dance Styles'], ['15+', 'Years Running']].map(([val, label]) => (
              <div key={label}>
                <div className="text-3xl font-black" style={{ color: C.gold }}>{val}</div>
                <div className="text-xs font-medium uppercase tracking-wide" style={{ color: C.muted }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CLASSES GRID
          ═══════════════════════════════════════ */}
      <section id="classes" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionMid}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.magenta }}>What We Teach</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Our Classes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {classes.map((cls, i) => (
              <div
                key={cls.name}
                className="dance-card reveal-up rounded-2xl overflow-hidden cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s`, border: `1px solid ${cls.color}33` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={cls.image} alt={cls.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.dark}dd, transparent)` }} />
                  <div className="absolute bottom-3 left-4">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider"
                      style={{ backgroundColor: cls.color, color: C.white }}
                    >
                      {cls.level}
                    </span>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: `${cls.color}09` }}>
                  <h3 className="text-xl font-black mb-2" style={{ color: C.white }}>{cls.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{cls.desc}</p>
                  <a
                    href="#booking"
                    className="mt-4 inline-block text-sm font-bold tracking-wide transition-colors duration-200"
                    style={{ color: cls.color }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Book This Class →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SCHEDULE TIMETABLE
          ═══════════════════════════════════════ */}
      <section id="schedule" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.purple }}>Weekly</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Timetable</h2>
          </div>

          <div className="reveal-up grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {schedule.map((day, i) => (
              <div
                key={day.day}
                className="rounded-xl p-4 border"
                style={{ borderColor: `${C.purple}33`, backgroundColor: `${C.purple}08` }}
              >
                <div
                  className="text-center font-black text-sm uppercase tracking-wider mb-3 pb-3"
                  style={{ color: C.gold, borderBottom: `1px solid ${C.purple}33` }}
                >
                  {day.day}
                </div>
                <div className="space-y-2">
                  {day.slots.map((slot) => {
                    const style = slot.includes('Ballet') ? C.magenta : slot.includes('Hip') ? C.gold : slot.includes('Salsa') ? C.magenta : C.purple
                    return (
                      <div
                        key={slot}
                        className="text-xs px-2 py-1.5 rounded font-medium leading-tight"
                        style={{ backgroundColor: `${style}22`, color: style, border: `1px solid ${style}33` }}
                      >
                        {slot}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PERFORMANCES
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionMid}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.magenta }}>On Stage</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Upcoming Shows</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {performances.map((perf, i) => (
              <div
                key={perf.name}
                className="reveal-up rounded-2xl p-8 border relative overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s`, borderColor: `${C.gold}33`, backgroundColor: `${C.gold}06` }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: `linear-gradient(90deg, ${C.purple}, ${C.magenta}, ${C.gold})` }}
                />
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.gold }}>{perf.date}</p>
                <h3 className="text-xl font-black mb-1" style={{ color: C.white }}>{perf.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: C.magenta }}>{perf.venue}</p>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{perf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INSTRUCTORS
          ═══════════════════════════════════════ */}
      <section id="instructors" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.purple }}>Meet the Team</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Our Instructors</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {instructors.map((inst, i) => (
              <div
                key={inst.name}
                className="instructor-card reveal-up rounded-2xl overflow-hidden border cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s`, borderColor: `${C.purple}33` }}
              >
                <div className="h-56 overflow-hidden">
                  <img src={inst.image} alt={inst.name} className="instructor-img w-full h-full object-cover" />
                </div>
                <div className="p-5" style={{ backgroundColor: `${C.purple}11` }}>
                  <h3 className="font-black text-base mb-0.5" style={{ color: C.white }}>{inst.name}</h3>
                  <p className="text-xs font-bold mb-1" style={{ color: C.magenta }}>{inst.specialty}</p>
                  <p className="text-xs mb-3" style={{ color: C.muted }}>{inst.exp} experience</p>
                  <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{inst.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING
          ═══════════════════════════════════════ */}
      <section id="pricing" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionMid}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.gold }}>Simple</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Pricing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {pricing.map((plan, i) => (
              <div
                key={plan.name}
                className="reveal-up rounded-2xl p-8 border text-center"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  borderColor: plan.highlight ? C.gold : `${C.purple}44`,
                  background: plan.highlight ? `linear-gradient(135deg, ${C.purple}22, ${C.magenta}11)` : `${C.purple}09`,
                  boxShadow: plan.highlight ? `0 0 60px ${C.purple}33` : 'none',
                }}
              >
                {plan.highlight && (
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider" style={{ background: `linear-gradient(90deg, ${C.purple}, ${C.magenta})`, color: C.white }}>
                      Best Value
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-black mb-2" style={{ color: C.white }}>{plan.name}</h3>
                <p className="text-4xl font-black mb-4" style={{ color: plan.highlight ? C.gold : C.purple }}>{plan.price}</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: C.muted }}>{plan.desc}</p>
                <a
                  href="#booking"
                  className="block w-full py-3 rounded-full text-sm font-black transition-all duration-300"
                  style={{
                    background: plan.highlight ? `linear-gradient(90deg, ${C.purple}, ${C.magenta})` : 'transparent',
                    color: plan.highlight ? C.white : C.purple,
                    border: plan.highlight ? 'none' : `2px solid ${C.purple}`,
                  }}
                  onMouseEnter={(e) => { if (!plan.highlight) e.currentTarget.style.backgroundColor = `${C.purple}22` }}
                  onMouseLeave={(e) => { if (!plan.highlight) e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.magenta }}>In Action</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Studio Life</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {[
              { src: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=800&fit=crop', span: 'row-span-2' },
              { src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=400&fit=crop', span: '' },
              { src: 'https://images.unsplash.com/photo-1559386483-73f5a7f60d35?w=600&h=400&fit=crop', span: '' },
              { src: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop', span: '' },
              { src: 'https://images.unsplash.com/photo-1535525153412-5a042b7c6de6?w=600&h=800&fit=crop', span: 'row-span-2' },
              { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop', span: '' },
            ].map((img, i) => (
              <div
                key={i}
                className={`reveal-up overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
                style={{ animationDelay: `${i * 0.08}s`, minHeight: 200 }}
              >
                <img
                  src={img.src}
                  alt="Dance at Rhythm Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  style={{ minHeight: 200 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionMid}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.magenta }}>Ready to Dance</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: C.white }}>Enrol Today</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              Book your first class — it&apos;s on us. Drop-ins welcome, no commitment. First class free for new students.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Studio Address', detail: '77 Brick Lane, Shoreditch, London E1 6QL' },
                { title: 'Hours', detail: 'Mon–Fri 9:00–21:00 · Sat–Sun 10:00–17:00' },
                { title: 'First Class', detail: 'Free for new students. No booking fee.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[36px] rounded-full flex-shrink-0" style={{ background: `linear-gradient(to bottom, ${C.purple}, ${C.magenta})` }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: C.gold }}>{info.title}</p>
                    <p className="text-sm" style={{ color: C.muted }}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 800, label: 'active students' }}
              vertical="danceos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.purple }}>Community</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.white }}>Student Stories</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionMid}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.gold }}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.white }}>Got Questions?</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="DanceOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079462233" message="Hi! I'd like to book a free trial class at Rhythm Studio" vertical="danceos" />
    </div>
  )
}

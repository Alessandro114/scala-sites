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
  sunset: '#f97316',
  sunsetDark: '#ea580c',
  sunsetLight: '#fb923c',
  ocean: '#1e40af',
  oceanLight: '#3b82f6',
  oceanDeep: '#0f2459',
  sand: '#fde68a',
  sandDark: '#fbbf24',
  seafoam: '#67e8f9',
  seafoamDark: '#22d3ee',
  white: '#ffffff',
  dark: '#0c1a3a',
  muted: '#94a3b8',
  mutedLight: '#cbd5e1',
} as const

const S = {
  page: { backgroundColor: C.dark, color: C.white } as React.CSSProperties,
  sectionDark: { backgroundColor: C.dark } as React.CSSProperties,
  sectionDeep: { backgroundColor: C.oceanDeep } as React.CSSProperties,
  sectionOcean: { backgroundColor: C.ocean, color: C.white } as React.CSSProperties,
  sunset: { color: C.sunset } as React.CSSProperties,
  ocean: { color: C.ocean } as React.CSSProperties,
  sand: { color: C.sand } as React.CSSProperties,
  seafoam: { color: C.seafoam } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'WaveRider Surf School',
  description: 'ISA-certified surf school in Newquay, Cornwall',
  url: 'https://waverider.example.com',
  locale: 'en',
  vertical: 'surfos',
  theme: 'coastal',
  branding: { primaryColor: C.sunset, accentColor: C.seafoam },
  contact: {
    phone: '+44 1637 123456',
    email: 'surf@waverider.com',
    whatsapp: '+441637123456',
    address: 'Fistral Beach, Newquay, Cornwall TR7 1HY',
    coordinates: { lat: 50.4095, lng: -5.0956 },
  },
  social: {
    instagram: 'waveridersurf',
    facebook: 'https://facebook.com/waveridersurf',
  },
  seo: {
    title: 'WaveRider Surf School | Learn to Surf Newquay Cornwall',
    description: 'ISA-certified surf lessons for all levels. Beginners to advanced. Fistral Beach, Newquay.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const lessons = [
  {
    name: 'Beginner Lesson',
    price: '£45',
    duration: '2 hours',
    desc: 'Learn to read waves, paddle technique, pop-up and ride your first wave. Equipment included.',
    level: 'No experience needed',
    color: C.seafoam,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=400&fit=crop',
  },
  {
    name: 'Intermediate Lesson',
    price: '£55',
    duration: '2 hours',
    desc: 'Improve your stance, turning technique and wave selection. For those who can stand up consistently.',
    level: 'Can stand up on a board',
    color: C.sunsetLight,
    image: 'https://images.unsplash.com/photo-1455264745730-cb3b76250f47?w=600&h=400&fit=crop',
  },
  {
    name: 'Advanced Lesson',
    price: '£65',
    duration: '2 hours',
    desc: 'Cutbacks, re-entries, tube riding and aerial work. For experienced surfers looking to push their limits.',
    level: 'Comfortable on open face',
    color: C.sunset,
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&h=400&fit=crop',
  },
  {
    name: 'Private Lesson',
    price: '£95',
    duration: '1.5 hours',
    desc: '1-on-1 with a qualified ISA instructor. Fastest progression guaranteed. Any level welcome.',
    level: 'All levels',
    color: C.sandDark,
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&h=400&fit=crop',
  },
  {
    name: 'Kids Camp',
    price: '£180/wk',
    duration: '5 days',
    desc: 'Week-long surf adventure for kids 7–14. Morning surf, afternoon beach games, BBQ Friday. Max 8 kids per instructor.',
    level: 'Ages 7–14',
    color: C.seafoamDark,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
  },
]

const rental = [
  { item: 'Surfboard', sizes: 'Soft-top 7–9ft, Shortboard, Longboard', price: '£15/day', icon: '🏄' },
  { item: 'Wetsuit', sizes: '3/2mm Summer, 4/3mm Winter, Full range of sizes', price: '£10/day', icon: '🤿' },
  { item: 'Board + Wetsuit', sizes: 'Complete package, best value', price: '£20/day', icon: '🌊' },
]

const instructors = [
  { name: 'Kai Thomas', cert: 'ISA Level 3', exp: '14 years', specialty: 'Performance surfing', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face' },
  { name: 'Zara Williams', cert: 'ISA Level 2', exp: '8 years', specialty: 'Beginner coaching', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face' },
  { name: 'Ben Crosby', cert: 'ISA Level 3', exp: '16 years', specialty: 'Tube riding & big waves', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=1000&fit=crop', large: true, label: 'Fistral at Dawn' },
  { src: 'https://images.unsplash.com/photo-1455264745730-cb3b76250f47?w=600&h=400&fit=crop', label: 'Cutback' },
  { src: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&h=400&fit=crop', label: 'Tube Riding' },
  { src: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&h=1000&fit=crop', large: true, label: 'Sunset Set' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', label: 'Empty Lineup' },
  { src: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&h=400&fit=crop', label: 'Kids Camp Fun' },
]

const reviews: Review[] = [
  { id: '1', author: 'Tom R.', rating: 5, text: 'Kai had me standing up on my second wave. I came as a complete beginner and left booking another session. The vibe at Fistral is just incredible.', date: '2026-07-19', source: 'google', verified: true },
  { id: '2', author: 'Jess M.', rating: 5, text: 'Sent both kids to surf camp and they did not want to leave on Friday. Ben is extraordinary with children — patient, funny and technically brilliant.', date: '2026-07-30', source: 'google', verified: true },
  { id: '3', author: 'Patrick V.', rating: 5, text: 'Private lesson with Kai sorted my backhand turn in 90 minutes. The video analysis during the lesson is a genius touch.', date: '2026-08-03', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Amelia B.', rating: 5, text: "I've been surfing for 6 years and the advanced lessons with Ben pushed my surfing to a completely different level. Exceptional coaching.", date: '2026-08-06', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do I need to know how to swim?', answer: 'Yes. You must be a confident swimmer and comfortable in open water. You will be in shallow water for beginner lessons, but you should be able to swim at least 50m unaided.' },
  { question: 'What should I bring to a lesson?', answer: 'A swimsuit or board shorts, sunscreen, a towel and water. We provide wetsuits and boards. Bring a change of clothes for after the session. Lockers are available at the beach hut.' },
  { question: 'What are the minimum age requirements?', answer: 'Lessons are suitable from age 7 upwards. Children under 14 must be accompanied by a parent or guardian on site. Our Kids Camp is specifically designed for ages 7–14.' },
  { question: 'What happens if conditions are dangerous?', answer: 'Safety is our priority. We monitor conditions daily and will reschedule your lesson with no charge if we deem conditions unsafe. We run lessons in waves from 1–6ft.' },
  { question: 'Do you offer surf camps with accommodation?', answer: 'Yes! Our 5-day and 7-day surf camps include accommodation at a nearby surf lodge, breakfast, packed lunches and two surf sessions per day. Great for solo travellers and groups.' },
  { question: 'Can I book group lessons for corporate or hen/stag events?', answer: 'Absolutely. We run private group bookings for up to 20 people. Includes lessons, equipment, a BBQ on the beach and a professional surf photographer. Contact us for a group quote.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '08:00', available: true, spotsLeft: 6 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 4 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '12:00', available: true, spotsLeft: 3 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 5 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '16:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WaveRider Surf School',
  description: 'ISA-certified surf school at Fistral Beach, Newquay, Cornwall. Lessons, camps and equipment rental.',
  url: 'https://waverider.example.com',
  telephone: '+44 1637 123456',
  email: 'surf@waverider.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fistral Beach',
    addressLocality: 'Newquay',
    addressRegion: 'Cornwall',
    postalCode: 'TR7 1HY',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 50.4095, longitude: -5.0956 },
  openingHours: ['Mo-Su 07:00-18:00'],
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
      style={{ backgroundColor: `${C.dark}ee`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.sunset}44` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-black text-lg tracking-tight" style={{ color: C.seafoam }}>WAVE</span>
          <span className="font-light text-lg tracking-tight" style={{ color: C.white }}>RIDER</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Lessons', 'Rental', 'Instructors', 'Gallery'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold transition-colors duration-200"
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
            style={{ backgroundColor: C.sunset, color: C.white }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.sunsetDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.sunset)}
          >
            Book Lesson
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function SurfOSPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes wave-rise {
          0%, 100% { d: path("M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"); }
          50% { d: path("M0,20 C240,60 480,10 720,30 C960,50 1200,15 1440,25 L1440,80 L0,80 Z"); }
        }
        @keyframes board-tilt {
          0%, 100% { transform: rotate(-12deg) translateY(0); }
          50% { transform: rotate(-8deg) translateY(-15px); }
        }
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ocean-shimmer {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .hero-line-1 { animation: hero-fade-up 0.8s 0s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-line-2 { animation: hero-fade-up 0.8s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-line-3 { animation: hero-fade-up 0.8s 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-line-4 { animation: hero-fade-up 0.8s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        .lesson-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(249,115,22,0.2); }
        .lesson-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
      `}</style>

      <div className="scroll-progress" style={{ background: `linear-gradient(90deg, ${C.sunset}, ${C.seafoam})` }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Sunset gradient + wave SVG + surfboards
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ background: `linear-gradient(180deg, ${C.sunset} 0%, #c2410c 20%, #7c2d12 40%, ${C.ocean} 65%, ${C.oceanDeep} 100%)` }}
      >
        {/* Ocean shimmer overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '40%',
            background: `radial-gradient(ellipse at bottom, ${C.seafoam}22 0%, transparent 70%)`,
            animation: 'ocean-shimmer 4s ease-in-out infinite',
          }}
        />

        {/* Decorative surfboards at angles */}
        {[
          { top: '10%', right: '8%', rot: '20deg', h: 180, color: C.seafoam },
          { top: '40%', right: '2%', rot: '-15deg', h: 140, color: C.sand },
          { top: '20%', left: '4%', rot: '-30deg', h: 160, color: C.sunsetLight },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute pointer-events-none hidden md:block"
            style={{
              top: b.top,
              right: 'right' in b ? b.right : undefined,
              left: 'left' in b ? b.left : undefined,
              width: 28,
              height: b.h,
              borderRadius: '40% 40% 50% 50% / 20% 20% 50% 50%',
              backgroundColor: b.color,
              transform: `rotate(${b.rot})`,
              opacity: 0.35,
              animation: `board-tilt ${3 + i}s ${i * 0.5}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 w-full">
          {/* Wave height indicator */}
          <div
            className="hero-line-1 inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: `${C.white}18`, backdropFilter: 'blur(8px)', color: C.seafoam, border: `1px solid ${C.seafoam}44` }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.seafoam, display: 'inline-block', animation: 'ocean-shimmer 1.5s infinite' }} />
            Live conditions: 4–6ft &middot; Offshore wind &middot; Good
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
            <span className="hero-line-2 block" style={{ color: C.white }}>Catch Your</span>
            <span
              className="hero-line-3 block"
              style={{ color: C.seafoam, textShadow: `0 0 60px ${C.seafoam}55` }}
            >
              Wave.
            </span>
          </h1>

          <p className="hero-line-4 text-lg md:text-xl font-light max-w-lg mb-10" style={{ color: `${C.white}cc` }}>
            ISA-certified instructors. Fistral Beach, Newquay. Whether you&apos;re catching your first white water or charging your first head-high set — we&apos;ve got you.
          </p>

          {/* Stats row */}
          <div className="hero-line-4 flex flex-wrap gap-8 mb-10">
            {[['3,500+', 'Students this year'], ['ISA', 'Certified instructors'], ['All conditions', 'Lessons year-round']].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-black" style={{ color: C.sand }}>{val}</div>
                <div className="text-xs font-medium uppercase tracking-wide" style={{ color: `${C.white}88` }}>{label}</div>
              </div>
            ))}
          </div>

          <div className="hero-line-4 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="px-8 py-4 rounded-full text-sm font-black tracking-wide transition-all duration-300"
              style={{ backgroundColor: C.sunset, color: C.white, boxShadow: `0 8px 32px ${C.sunset}55` }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              Book a Lesson
            </a>
            <a
              href="#lessons"
              className="px-8 py-4 rounded-full text-sm font-semibold border transition-all duration-300"
              style={{ borderColor: `${C.white}55`, color: C.white }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.white}11` }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              See All Lessons
            </a>
          </div>
        </div>

        {/* Bottom wave SVG */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 80 }}>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill={C.dark} />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LESSONS
          ═══════════════════════════════════════ */}
      <section id="lessons" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.sunset }}>Get in the Water</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Lessons</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {lessons.map((lesson, i) => (
              <div
                key={lesson.name}
                className={`lesson-card reveal-up rounded-2xl overflow-hidden border ${i === lessons.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${i * 0.08}s`, borderColor: `${lesson.color}33` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={lesson.image} alt={lesson.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.dark}ee, transparent 50%)` }} />
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: lesson.color, color: C.dark }}
                    >
                      {lesson.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: `${lesson.color}08` }}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black" style={{ color: C.white }}>{lesson.name}</h3>
                    <span className="text-xl font-black" style={{ color: lesson.color }}>{lesson.price}</span>
                  </div>
                  <p className="text-xs font-bold mb-3 uppercase tracking-wide" style={{ color: `${lesson.color}aa` }}>{lesson.level}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>{lesson.desc}</p>
                  <a
                    href="#booking"
                    className="inline-block text-sm font-black tracking-wide transition-all duration-200"
                    style={{ color: lesson.color }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Book This →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EQUIPMENT RENTAL
          ═══════════════════════════════════════ */}
      <section id="rental" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.seafoam }}>Gear Up</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Equipment Rental</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {rental.map((item, i) => (
              <div
                key={item.item}
                className="reveal-up rounded-2xl p-8 text-center border"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  borderColor: `${C.seafoam}33`,
                  backgroundColor: `${C.seafoam}06`,
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black mb-2" style={{ color: C.white }}>{item.item}</h3>
                <p className="text-3xl font-black mb-3" style={{ color: C.seafoam }}>{item.price}</p>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{item.sizes}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: C.muted }}>
            All rental boards are cleaned and inspected after every use. Equipment hire available at the beach hut from 7am daily.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SAFETY & CONDITIONS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=90"
              alt="Safety briefing on Fistral Beach"
              className="w-full rounded-3xl object-cover"
              style={{ height: 440 }}
            />
          </div>
          <div className="reveal-right">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.sunset }}>Safety First</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: C.white }}>Conditions &amp; Safety</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              Your safety is our absolute priority. All instructors hold current First Aid and RNLI beach safety certificates. We monitor Met Office and Magic Seaweed forecasts daily.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🌊', label: 'Daily forecast check' },
                { icon: '🛟', label: 'RNLI beach safety trained' },
                { icon: '📡', label: 'Radio contact at all times' },
                { icon: '🏄', label: 'Max 8:1 student ratio' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl border"
                  style={{ borderColor: `${C.sunset}22`, backgroundColor: `${C.sunset}08` }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium" style={{ color: C.white }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INSTRUCTORS
          ═══════════════════════════════════════ */}
      <section id="instructors" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.seafoam }}>The Team</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Our Instructors</h2>
            <p className="mt-3 text-sm" style={{ color: C.muted }}>All ISA certified. All passionate surfers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {instructors.map((inst, i) => (
              <div
                key={inst.name}
                className="reveal-up rounded-2xl overflow-hidden border text-center"
                style={{ animationDelay: `${i * 0.1}s`, borderColor: `${C.seafoam}33` }}
              >
                <div className="h-64 overflow-hidden">
                  <img src={inst.image} alt={inst.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6" style={{ backgroundColor: `${C.seafoam}08` }}>
                  <h3 className="font-black text-xl mb-1" style={{ color: C.white }}>{inst.name}</h3>
                  <p className="text-sm font-bold mb-1" style={{ color: C.seafoam }}>{inst.cert}</p>
                  <p className="text-xs mb-2" style={{ color: C.muted }}>{inst.exp} surfing &amp; coaching</p>
                  <p className="text-xs font-medium" style={{ color: C.sand }}>Specialist: {inst.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY
          ═══════════════════════════════════════ */}
      <section id="gallery" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.sunset }}>Captured</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 stagger-children" style={{ gridAutoRows: '200px' }}>
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`reveal-up rounded-xl overflow-hidden group cursor-pointer ${img.large ? 'col-span-2 row-span-2' : 'col-span-1'}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SURF CAMP
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.sand }}>Go Deeper</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: C.white }}>Surf Camp<br />with Accommodation</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              5-day and 7-day surf camps including beachside lodge accommodation, breakfast, packed lunches, 2 daily surf sessions and evening activities. Perfect for solo travellers and groups of friends.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: '5-Day Camp', price: '£699/person', inc: 'Accommodation + all lessons + equipment' },
                { label: '7-Day Camp', price: '£849/person', inc: 'As above + photographer session' },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{ borderColor: `${C.sand}33`, backgroundColor: `${C.sand}08` }}
                >
                  <div>
                    <p className="font-black text-base" style={{ color: C.white }}>{c.label} — <span style={{ color: C.sand }}>{c.price}</span></p>
                    <p className="text-xs" style={{ color: C.muted }}>{c.inc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right rounded-3xl overflow-hidden" style={{ height: 440 }}>
            <img
              src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&h=600&fit=crop&q=90"
              alt="WaveRider surf camp accommodation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.sunset }}>Get In</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: C.white }}>Book a Lesson</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              Sessions run at 8am, 10am, 12pm, 2pm and 4pm daily. Equipment included in all lesson prices. Confirm in seconds via WhatsApp.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Location', detail: 'Fistral Beach, Newquay, Cornwall TR7 1HY' },
                { title: 'Season', detail: 'Year-round. Best swell: October–April.' },
                { title: 'What is included', detail: 'Board, wetsuit, leash, safety briefing, in-water coaching.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[36px] rounded-full flex-shrink-0" style={{ background: `linear-gradient(to bottom, ${C.sunset}, ${C.seafoam})` }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: C.sunset }}>{info.title}</p>
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
              socialProof={{ count: 3500, label: 'surfers coached this year' }}
              vertical="surfos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.seafoam }}>The Stoke</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.white }}>Student Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.sand }}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.white }}>Questions?</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="SurfOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+441637123456" message="Hi! I'd like to book a surf lesson at WaveRider" vertical="surfos" />
    </div>
  )
}

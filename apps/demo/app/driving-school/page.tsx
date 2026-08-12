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
  asphalt: '#1c2023',
  asphaltMid: '#252d33',
  asphaltLight: '#2f3a42',
  go: '#22c55e',
  goMuted: '#16a34a',
  amber: '#f59e0b',
  stop: '#ef4444',
  white: '#ffffff',
  offWhite: '#f1f5f9',
  muted: '#94a3b8',
  dimmed: '#64748b',
} as const

const siteConfig: SiteConfig = {
  name: 'Premier Drive Academy',
  description: '94% first-time pass rate driving school in London',
  url: 'https://premierdrive.example.com',
  locale: 'en',
  vertical: 'driveos',
  theme: 'classic',
  branding: { primaryColor: C.asphalt, accentColor: C.go },
  contact: {
    phone: '+44 20 7946 0712',
    email: 'hello@premierdrive.example.com',
    whatsapp: '+442079460712',
    address: '18 Cromwell Road, Kensington, London SW7 2EF',
    coordinates: { lat: 51.4994, lng: -0.1838 },
  },
  social: { instagram: 'premierdrive_london', facebook: 'https://facebook.com/premierdrive' },
  seo: {
    title: 'Premier Drive Academy — 94% First-Time Pass Rate',
    description: '94% first-time pass rate driving school in London. DVSA-approved instructors.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const courses = [
  { name: 'Manual Lessons', price: '£32/hr', desc: 'Learn full control with our most popular course. Flexible scheduling, patient instructors.', icon: '🚗' },
  { name: 'Automatic Lessons', price: '£35/hr', desc: 'Easier to learn, perfect for nervous beginners. Modern dual-control vehicles.', icon: '⚙️' },
  { name: 'Intensive 1-Week', price: '£899', desc: 'Pass in a week with our structured full-day programme. Includes mock test.', icon: '⚡' },
  { name: 'Motorway Lessons', price: '£40/hr', desc: 'Post-test motorway confidence. High-speed driving, lane discipline, joining/leaving.', icon: '🛣️' },
  { name: 'Pass Plus', price: '£249', desc: '6-module programme. Night driving, rural roads, dual carriageways. Can reduce insurance.', icon: '🏆' },
]

const instructors = [
  {
    name: 'James Okafor',
    passRate: '97%',
    exp: '12 years',
    specialty: 'Nervous learners & Intensive courses',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&facepad=3',
  },
  {
    name: 'Priya Sharma',
    passRate: '96%',
    exp: '9 years',
    specialty: 'Automatic & Motorway lessons',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&facepad=3',
  },
  {
    name: 'Tom Whitfield',
    passRate: '93%',
    exp: '15 years',
    specialty: 'Theory test prep & Pass Plus',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&facepad=3',
  },
  {
    name: 'Sofia Martinez',
    passRate: '95%',
    exp: '7 years',
    specialty: 'Young drivers & Block booking',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&facepad=3',
  },
]

const steps = [
  { step: '01', title: 'Book Your Lesson', desc: 'Choose a slot online or via WhatsApp. We confirm within minutes.' },
  { step: '02', title: 'Learn at Your Pace', desc: 'Your instructor adapts to your learning style, no pressure.' },
  { step: '03', title: 'Practice & Mock Tests', desc: 'Regular progress assessments and full mock driving tests.' },
  { step: '04', title: 'Pass & Drive Free', desc: '94% of our students pass first time. We celebrate with you.' },
]

const packages = [
  { name: 'Starter', hours: 10, price: '£299', saving: 'Save £21', features: ['10 manual hours', 'Progress report', 'Theory tips guide', 'Flexible scheduling'] },
  { name: 'Popular', hours: 20, price: '£580', saving: 'Save £60', features: ['20 manual hours', 'Mock test included', 'Theory test prep', 'Priority booking'], highlight: true },
  { name: 'Intensive', hours: 30, price: '£849', saving: 'Save £111', features: ['30 manual hours', '2 mock tests', 'Theory + hazard perception', 'Guaranteed pass or free top-up'] },
]

const reviews: Review[] = [
  { id: '1', author: 'Aisha K.', rating: 5, text: "Passed first time with James! He was incredibly patient and adapted to my learning style. The 20-hour package was perfect — structured but never rushed.", date: '2026-07-20', source: 'google', verified: true },
  { id: '2', author: 'Liam B.', rating: 5, text: "Did the intensive week course after failing twice elsewhere. Completely different experience. Tom rebuilt my confidence and the mock tests were spot on to the real thing.", date: '2026-07-28', source: 'google', verified: true },
  { id: '3', author: 'Fatima R.', rating: 5, text: "Priya is an absolute star. As a nervous learner I dreaded every lesson but she made it genuinely enjoyable. 94% pass rate is real — I'm living proof.", date: '2026-08-02', source: 'trustpilot', verified: true },
  { id: '4', author: 'Daniel S.', rating: 4, text: "Booked via WhatsApp at 10pm and had a confirmed slot by 10:02pm. The auto-lessons with Sofia were brilliant. Passed with only 2 minors.", date: '2026-07-15', source: 'google', verified: true },
  { id: '5', author: 'Charlotte W.', rating: 5, text: "Pass Plus was worth every penny. My insurance dropped by £380 in year one. The motorway session was especially eye-opening. Highly recommended for new drivers.", date: '2026-08-05', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How quickly can I book my first lesson?', answer: 'We typically have slots available within 24-48 hours. Book online or WhatsApp us and we\'ll confirm immediately.' },
  { question: 'What is your first-time pass rate?', answer: 'Our current first-time pass rate is 94%, compared to the national average of 45%. We track every student\'s result.' },
  { question: 'Do you provide the car for the driving test?', answer: 'Yes, your instructor will accompany you to the test in their dual-control vehicle. No extra charge.' },
  { question: 'Can I switch between manual and automatic?', answer: 'Yes, though note that a manual licence allows you to drive automatics too, but not vice versa.' },
  { question: 'What happens if I fail my test?', answer: 'Students on our Intensive package receive a free top-up session before rebooking. We review your examiner\'s report together.' },
  { question: 'Do you offer lessons in the evenings and weekends?', answer: 'Yes, we have slots 7 days a week from 7am to 8pm to fit around your schedule.' },
  { question: 'How many lessons will I need?', answer: 'The DVSA average is 47 hours of professional tuition. With our structured programme, most students are ready in 25-35 hours.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '08:00', available: true, spotsLeft: 1 },
  { id: '2', date: today, time: '09:00', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '10:00', available: true, spotsLeft: 3 },
  { id: '4', date: today, time: '14:00', available: true, spotsLeft: 2 },
  { id: '5', date: today, time: '15:00', available: true, spotsLeft: 4 },
  { id: '6', date: today, time: '16:00', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: 'Premier Drive Academy',
  description: '94% first-time pass rate driving school in London. DVSA-approved instructors.',
  url: 'https://premierdrive.example.com',
  telephone: '+44 20 7946 0712',
  email: 'hello@premierdrive.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Cromwell Road, Kensington',
    addressLocality: 'London',
    postalCode: 'SW7 2EF',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4994, longitude: -0.1838 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312' },
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
// STYLES
// ─────────────────────────────────────────────
const S = {
  page: { backgroundColor: C.asphalt, color: C.white } as React.CSSProperties,
  dark: { backgroundColor: C.asphaltMid } as React.CSSProperties,
  darker: { backgroundColor: C.asphalt } as React.CSSProperties,
  light: { backgroundColor: C.asphaltLight } as React.CSSProperties,
  go: { color: C.go } as React.CSSProperties,
  amber: { color: C.amber } as React.CSSProperties,
  stop: { color: C.stop } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.asphalt}ee`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.go}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with L-plate badge */}
        <a href="#" className="flex items-center gap-3">
          <span
            className="w-8 h-8 flex items-center justify-center text-sm font-bold rounded"
            style={{ backgroundColor: C.go, color: C.asphalt, fontFamily: 'serif' }}
          >
            L
          </span>
          <span className="font-light tracking-[0.2em] text-sm uppercase" style={S.white}>
            Premier Drive
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Courses', 'Instructors', 'Pricing', 'Booking'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a href="#booking"
            className="px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
            style={{ backgroundColor: C.go, color: C.asphalt, borderRadius: '4px' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goMuted)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.go)}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  TRAFFIC LIGHT COMPONENT
// ═══════════════════════════════════════════════
function TrafficLight() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: C.asphaltLight,
      padding: '12px',
      borderRadius: '40px',
      border: `2px solid ${C.dimmed}44`,
      boxShadow: '0 0 40px rgba(0,0,0,0.5)',
    }}>
      <style>{`
        @keyframes trafficCycle {
          0%, 30%   { opacity: 1; box-shadow: 0 0 20px #ef4444, 0 0 40px #ef444466; }
          33%       { opacity: 0.15; box-shadow: none; }
          100%      { opacity: 0.15; box-shadow: none; }
        }
        @keyframes amberCycle {
          0%, 32%   { opacity: 0.15; box-shadow: none; }
          33%, 63%  { opacity: 1; box-shadow: 0 0 20px #f59e0b, 0 0 40px #f59e0b66; }
          66%       { opacity: 0.15; box-shadow: none; }
          100%      { opacity: 0.15; box-shadow: none; }
        }
        @keyframes greenCycle {
          0%, 65%   { opacity: 0.15; box-shadow: none; }
          66%, 96%  { opacity: 1; box-shadow: 0 0 20px #22c55e, 0 0 40px #22c55e66; }
          100%      { opacity: 0.15; box-shadow: none; }
        }
      `}</style>
      {[
        { color: '#ef4444', anim: 'trafficCycle 3s ease-in-out infinite' },
        { color: '#f59e0b', anim: 'amberCycle 3s ease-in-out infinite' },
        { color: '#22c55e', anim: 'greenCycle 3s ease-in-out infinite' },
      ].map((light, i) => (
        <div key={i} style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: light.color,
          animation: light.anim,
          opacity: 0.15,
        }} />
      ))}
    </div>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function DriveOSDemoPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.go }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Road-Inspired Full Bleed
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Asphalt road bg with dashed center line */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(175deg, ${C.asphaltLight} 0%, ${C.asphalt} 50%, #0f1315 100%)`,
        }} />
        {/* Dashed white center line — road perspective */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2" style={{ width: '4px' }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `repeating-linear-gradient(to bottom, ${C.white} 0px, ${C.white} 40px, transparent 40px, transparent 80px)`,
            opacity: 0.12,
          }} />
        </div>
        {/* Road lane lines left */}
        <div className="absolute left-[30%] top-0 bottom-0" style={{ width: '2px' }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `repeating-linear-gradient(to bottom, ${C.white} 0px, ${C.white} 25px, transparent 25px, transparent 60px)`,
            opacity: 0.06,
          }} />
        </div>
        {/* Road lane lines right */}
        <div className="absolute left-[70%] top-0 bottom-0" style={{ width: '2px' }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `repeating-linear-gradient(to bottom, ${C.white} 0px, ${C.white} 25px, transparent 25px, transparent 60px)`,
            opacity: 0.06,
          }} />
        </div>
        {/* Green glow */}
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] pointer-events-none" style={{
          background: `radial-gradient(circle, ${C.go}18 0%, transparent 70%)`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-center">
          <div className="stagger-children">
            {/* L-plate badge */}
            <div className="reveal-clip-up flex items-center gap-4 mb-8">
              <span
                className="inline-flex items-center justify-center w-12 h-12 text-xl font-bold rounded-lg"
                style={{ backgroundColor: C.white, color: C.asphalt, fontFamily: 'Georgia, serif', boxShadow: `0 0 30px ${C.white}33` }}
              >
                L
              </span>
              <span className="text-xs tracking-[0.4em] uppercase" style={S.muted}>
                DVSA Approved &middot; Est. 2009
              </span>
            </div>

            <h1 className="mb-8">
              {['Your Road', 'to Freedom'].map((line, i) => (
                <span key={line} className="reveal-clip-up block font-extralight leading-[0.92] tracking-tight"
                  style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', color: C.white, animationDelay: `${i * 0.15}s` }}>
                  {line}
                </span>
              ))}
            </h1>

            {/* 94% stat — hero prominence */}
            <div className="reveal-up flex items-baseline gap-4 mb-10" style={{ animationDelay: '0.3s' }}>
              <span className="font-light" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: C.go, lineHeight: 1 }}>94%</span>
              <div>
                <p className="text-lg font-light" style={S.white}>First-Time Pass Rate</p>
                <p className="text-sm" style={S.muted}>vs. 45% national average</p>
              </div>
            </div>

            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.45s' }}>
              <a href="#booking"
                className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300"
                style={{ backgroundColor: C.go, color: C.asphalt, borderRadius: '4px' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goMuted)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.go)}
              >
                Book Your First Lesson
              </a>
              <a href="#courses"
                className="border px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
                style={{ borderColor: `${C.white}33`, color: C.muted, borderRadius: '4px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${C.white}66`; e.currentTarget.style.color = C.white }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.white}33`; e.currentTarget.style.color = C.muted }}
              >
                View Courses
              </a>
            </div>
          </div>

          {/* Traffic light */}
          <div className="reveal-up hidden md:flex justify-center" style={{ animationDelay: '0.5s' }}>
            <TrafficLight />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-[0.3em] uppercase" style={S.muted}>Scroll</span>
          <div className="w-px h-12" style={{ background: `linear-gradient(to bottom, ${C.go}, transparent)` }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE — Services Strip
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.go }}>
        <div className="marquee">
          {[0, 1].map((d) => (
            <div key={d} className="flex items-center gap-8 px-4">
              {['Manual Lessons', 'Automatic Lessons', '1-Week Intensive', 'Motorway Lessons', 'Pass Plus', 'Theory Test Prep', 'Mock Tests Included', 'DVSA Approved'].map((item, i) => (
                <span key={`${d}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-medium tracking-[0.2em] uppercase" style={{ color: C.asphalt }}>{item}</span>
                  <span style={{ color: `${C.asphalt}55` }}>&#x2726;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COURSES — 5 Cards Grid
          ═══════════════════════════════════════ */}
      <section id="courses" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.go}>Courses</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {courses.map((c, i) => (
              <div key={c.name}
                className="reveal-up magnetic-card p-7 rounded-xl border transition-all duration-300 group cursor-pointer"
                style={{ backgroundColor: C.asphaltLight, borderColor: `${C.white}0a`, animationDelay: `${i * 0.07}s` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${C.go}44`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${C.white}0a`)}
              >
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="text-lg font-light mb-2" style={S.white}>{c.name}</h3>
                <p className="text-2xl font-light mb-3" style={S.go}>{c.price}</p>
                <p className="text-sm font-light leading-relaxed" style={S.muted}>{c.desc}</p>
              </div>
            ))}
            {/* Theory test card */}
            <div className="reveal-up p-7 rounded-xl border" style={{ backgroundColor: `${C.go}12`, borderColor: `${C.go}33`, animationDelay: '0.35s' }}>
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-light mb-2" style={S.white}>Theory Test Prep</h3>
              <p className="text-2xl font-light mb-3" style={S.go}>Free</p>
              <p className="text-sm font-light leading-relaxed" style={S.muted}>Included with every package. Mock theory papers, hazard perception videos, and Highway Code revision modules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INSTRUCTORS — 4 Profiles
          ═══════════════════════════════════════ */}
      <section id="instructors" className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.go}>The Team</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Your Instructors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {instructors.map((inst, i) => (
              <div key={inst.name} className="reveal-up group" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="relative overflow-hidden rounded-xl mb-4 image-reveal">
                  <img src={inst.img} alt={inst.name} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.asphalt}cc 0%, transparent 60%)` }} />
                  {/* Pass rate badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: C.go, color: C.asphalt }}>
                    {inst.passRate}
                  </div>
                </div>
                <h3 className="text-base font-light mb-1" style={S.white}>{inst.name}</h3>
                <p className="text-xs tracking-wider uppercase mb-2" style={S.go}>{inst.exp} experience</p>
                <p className="text-xs font-light" style={S.muted}>{inst.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — 4 Steps
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.go}>How It Works</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>The Journey to Your Licence</h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${C.go}44, transparent)` }} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
              {steps.map((s, i) => (
                <div key={s.step} className="reveal-up text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-light"
                    style={{ backgroundColor: C.asphaltLight, border: `2px solid ${C.go}66`, color: C.go }}>
                    {s.step}
                  </div>
                  <h3 className="text-base font-light mb-3" style={S.white}>{s.title}</h3>
                  <p className="text-sm font-light leading-relaxed" style={S.muted}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING — 3 Packages
          ═══════════════════════════════════════ */}
      <section id="pricing" className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.go}>Pricing</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Block Booking Packages</h2>
            <p className="text-base font-light mt-4" style={S.muted}>Save more when you commit. All packages include theory prep and progress reports.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {packages.map((pkg, i) => (
              <div key={pkg.name}
                className="reveal-up rounded-xl p-8 border transition-all duration-300 relative"
                style={{
                  backgroundColor: pkg.highlight ? `${C.go}12` : C.asphaltLight,
                  borderColor: pkg.highlight ? `${C.go}66` : `${C.white}0a`,
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium rounded-full tracking-wider uppercase"
                    style={{ backgroundColor: C.go, color: C.asphalt }}>
                    Most Popular
                  </div>
                )}
                <p className="text-xs tracking-[0.3em] uppercase mb-3" style={S.muted}>{pkg.name}</p>
                <p className="text-4xl font-extralight mb-1" style={S.white}>{pkg.price}</p>
                <p className="text-sm mb-2" style={S.go}>{pkg.hours} hours &mdash; {pkg.saving}</p>
                <div className="border-t my-6" style={{ borderColor: `${C.white}0f` }} />
                <ul className="space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light" style={S.muted}>
                      <span style={{ color: C.go, flexShrink: 0 }}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#booking"
                  className="mt-8 block text-center py-3 text-sm tracking-[0.2em] uppercase font-medium rounded transition-all duration-300"
                  style={pkg.highlight ? { backgroundColor: C.go, color: C.asphalt } : { border: `1px solid ${C.go}44`, color: C.go }}
                  onMouseEnter={(e) => { if (!pkg.highlight) e.currentTarget.style.backgroundColor = `${C.go}22` }}
                  onMouseLeave={(e) => { if (!pkg.highlight) e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STUDENT SUCCESS — Stats Banner
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-children">
            {[
              { stat: '94%', label: 'First-time pass rate' },
              { stat: '3,200+', label: 'Students passed' },
              { stat: '15 yrs', label: 'In operation' },
              { stat: '4.9★', label: 'Google rating' },
            ].map((item, i) => (
              <div key={item.label} className="reveal-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <p className="font-extralight mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: C.go, lineHeight: 1 }}>{item.stat}</p>
                <p className="text-sm font-light" style={S.muted}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 grain overflow-hidden" style={S.darker}>
        <div className="absolute pointer-events-none" style={{
          right: '-100px', top: '-100px', width: '600px', height: '600px',
          background: `radial-gradient(circle, ${C.go}0c 0%, transparent 70%)`,
        }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.go}>Book Online</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.white}>Start Your Journey Today</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Pick a slot and we&rsquo;ll confirm via WhatsApp within minutes. No deposit required for your first lesson.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Hours', detail: 'Mon–Sat 07:00–20:00 | Sun 09:00–17:00' },
                { label: 'Coverage', detail: 'Kensington, Chelsea, Fulham, Hammersmith, Battersea' },
                { label: 'Test Centres', detail: 'Twickenham, Chiswick, Belvedere, Erith' },
                { label: 'Vehicles', detail: 'Vauxhall Corsa (manual) | Toyota Yaris (automatic)' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.go}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.go}>{info.label}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 89, label: 'lessons booked this week' }} vertical="driveos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.dark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.go}>Student Stories</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Real Results</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.darker}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.go}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="DrivingOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460712" message="Hi! I'd like to book a driving lesson with Premier Drive Academy." vertical="driveos" />
    </div>
  )
}

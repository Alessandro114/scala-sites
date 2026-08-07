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
  navy: '#1e3a5f',
  navyLight: '#2a4d7e',
  navyDark: '#0f1e35',
  yellow: '#fbbf24',
  yellowLight: '#fde68a',
  red: '#dc2626',
  redLight: '#ef4444',
  white: '#ffffff',
  offWhite: '#fefce8',
  paper: '#fffdf5',
  slate: '#475569',
  slateLight: '#94a3b8',
  lineColor: '#d1d5db',
} as const

const S = {
  page: { backgroundColor: C.white, color: C.navy } as React.CSSProperties,
  sectionWhite: { backgroundColor: C.white } as React.CSSProperties,
  sectionPaper: { backgroundColor: C.paper } as React.CSSProperties,
  sectionNavy: { backgroundColor: C.navy, color: C.white } as React.CSSProperties,
  sectionDark: { backgroundColor: C.navyDark, color: C.white } as React.CSSProperties,
  navy: { color: C.navy } as React.CSSProperties,
  yellow: { color: C.yellow } as React.CSSProperties,
  red: { color: C.red } as React.CSSProperties,
  slate: { color: C.slate } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'BrightPath Tutors',
  description: 'Expert 1-to-1 tutoring for all ages and subjects in London',
  url: 'https://brightpath.example.com',
  locale: 'en',
  vertical: 'tutoros',
  theme: 'academic',
  branding: { primaryColor: C.navy, accentColor: C.yellow },
  contact: {
    phone: '+44 20 7946 3344',
    email: 'hello@brightpath.com',
    whatsapp: '+442079463344',
    address: '12 Scholar Street, Bloomsbury, London WC1A 1AA',
    coordinates: { lat: 51.5204, lng: -0.1265 },
  },
  social: {
    instagram: 'brightpathtutors',
    facebook: 'https://facebook.com/brightpathtutors',
  },
  seo: {
    title: 'BrightPath Tutors | 1-to-1 Tutoring London',
    description: 'Expert tutors for Maths, English, Sciences, Languages and Entrance Exams. Average +2 grade improvement.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const subjects = [
  { icon: '∑', name: 'Mathematics', sub: 'GCSE · A-Level · University · Entrance', color: C.navy, image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop' },
  { icon: '✒', name: 'English', sub: 'Literature · Language · Essay Writing · 11+', color: C.red, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop' },
  { icon: '⚗', name: 'Sciences', sub: 'Physics · Chemistry · Biology · STEM', color: C.navyLight, image: 'https://images.unsplash.com/photo-1532094349884-543559153189?w=600&h=400&fit=crop' },
  { icon: '🌐', name: 'Languages', sub: 'French · Spanish · German · Mandarin', color: C.navy, image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b6f72?w=600&h=400&fit=crop' },
  { icon: '♪', name: 'Music Theory', sub: 'Grade 1–8 · ABRSM · Trinity · Composition', color: C.red, image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop' },
  { icon: '🎓', name: 'Entrance Exams', sub: '11+ · 13+ · SAT · UKISET · Common Entrance', color: C.navyLight, image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop' },
]

const formats = [
  { name: '1-to-1 In-Person', desc: 'Dedicated sessions at our Bloomsbury centre or at your home. Full focus, maximum progress.', icon: '👤', price: '£45/hr' },
  { name: 'Small Group (2–4)', desc: 'Collaborative learning with peers at the same level. Excellent for exam preparation.', icon: '👥', price: '£25/hr' },
  { name: 'Online Sessions', desc: 'Live tutoring via our interactive whiteboard platform. Available globally, same great tutors.', icon: '💻', price: '£35/hr' },
]

const tutors = [
  { name: 'Dr. Sarah Chen', subjects: 'Maths · Physics', qual: 'PhD Cambridge · 12 years', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face', rating: 5.0 },
  { name: 'James Whitfield', subjects: 'English · History', qual: 'MA Oxford · 9 years', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', rating: 4.9 },
  { name: 'Amara Diallo', subjects: 'Biology · Chemistry', qual: 'BSc Imperial · 7 years', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face', rating: 5.0 },
  { name: 'Marco Bernardi', subjects: 'French · Italian · Spanish', qual: 'MA Bologna · 14 years', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', rating: 4.8 },
]

const steps = [
  { n: '01', title: 'Free Assessment', desc: 'We identify your starting level, learning style and goals in a free 30-minute session.' },
  { n: '02', title: 'Tutor Match', desc: 'We match you with the ideal tutor based on subject, personality and schedule.' },
  { n: '03', title: 'Tailored Learning', desc: 'A personalised learning plan is created and reviewed monthly to keep you on track.' },
  { n: '04', title: 'Results', desc: 'Track progress with regular mini-tests and reports. Average improvement: +2 grades.' },
]

const stats = [
  { value: '+2', label: 'Average grade improvement' },
  { value: '98%', label: 'Parent satisfaction' },
  { value: '1,200+', label: 'Students tutored' },
  { value: '100+', label: 'Expert tutors' },
]

const reviews: Review[] = [
  { id: '1', author: 'Claire M.', rating: 5, text: "My son went from a C to an A* in GCSE Maths in just 6 months. Dr. Chen is exceptional — she doesn't just teach, she teaches him how to think.", date: '2026-07-22', source: 'google', verified: true },
  { id: '2', author: 'Raj K.', rating: 5, text: 'BrightPath matched us with the perfect tutor within 48 hours. The online sessions are seamless and my daughter actually looks forward to them.', date: '2026-08-01', source: 'google', verified: true },
  { id: '3', author: 'Helena T.', rating: 5, text: 'My son passed the 11+ for his first choice school. The team ran targeted mock exams every fortnight and built his confidence enormously.', date: '2026-07-29', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Michael B.', rating: 5, text: 'James helped my daughter fall in love with English again. Two grades up at A-Level and a place at UCL to study literature. Incredible outcome.', date: '2026-08-05', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How do you match students with tutors?', answer: 'We begin with a free assessment call to understand the student\'s level, learning style, goals and schedule. We then match them from our pool of 100+ vetted tutors. If the first match isn\'t right, we rematch at no cost.' },
  { question: 'How quickly will I see improvement?', answer: 'Most students see measurable progress within 4–6 sessions. Our average student improves by two grade bands over a 3-month programme. We track progress with monthly mini-assessments.' },
  { question: 'Are tutors DBS checked?', answer: 'Yes. Every tutor on the BrightPath platform holds a current Enhanced DBS certificate. We re-verify annually. All in-person home tutors also carry our ID card.' },
  { question: 'Can I change tutors if it\'s not working?', answer: 'Absolutely. Tutor-student fit is crucial. If you\'re not happy after the first session, we rematch you immediately and the first session is free of charge.' },
  { question: 'Do you offer intensive revision courses?', answer: 'Yes. We run intensive exam preparation programmes during half-terms and Easter. These include daily sessions, past papers under timed conditions, and strategy workshops.' },
  { question: 'What is your cancellation policy?', answer: 'You can cancel or reschedule any session up to 24 hours before with no charge. Sessions cancelled with less than 24 hours notice are charged at 50% of the session fee.' },
  { question: 'Do you tutor adults and university students?', answer: 'Yes. We tutor students of all ages — from primary school to undergraduate and postgraduate level. We also offer professional CPD support for teachers and educators.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '09:00', available: true, spotsLeft: 3 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '11:00', available: true, spotsLeft: 5 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 2 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '16:00', available: true, spotsLeft: 4 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '18:00', available: true, spotsLeft: 6 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BrightPath Tutors',
  description: 'Expert 1-to-1 tutoring for all subjects and ages in London.',
  url: 'https://brightpath.example.com',
  telephone: '+44 20 7946 3344',
  email: 'hello@brightpath.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Scholar Street, Bloomsbury',
    addressLocality: 'London',
    postalCode: 'WC1A 1AA',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5204, longitude: -0.1265 },
  openingHours: ['Mo-Fr 08:00-20:00', 'Sa 09:00-17:00'],
  priceRange: '££',
}

const faqJsonLd = {
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
      style={{ backgroundColor: `${C.white}f5`, backdropFilter: 'blur(12px)', borderBottom: `2px solid ${C.yellow}` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded flex items-center justify-center text-white font-black text-sm" style={{ backgroundColor: C.navy }}>B</div>
          <span className="font-bold text-lg tracking-tight" style={{ color: C.navy }}>BrightPath</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Subjects', 'How It Works', 'Tutors', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-semibold transition-colors duration-200"
              style={{ color: C.slate }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.navy)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.slate)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="px-5 py-2.5 rounded text-sm font-bold transition-all duration-300"
            style={{ backgroundColor: C.yellow, color: C.navy }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.yellowLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.yellow)}
          >
            Free Assessment
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function TutorOSPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes pencil-bob {
          0%, 100% { transform: rotate(-8deg) translateY(0); }
          50% { transform: rotate(-4deg) translateY(-8px); }
        }
        @keyframes subject-float {
          0%, 100% { transform: translateY(0) rotate(var(--r, -3deg)); }
          50% { transform: translateY(-12px) rotate(var(--r2, 2deg)); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .slide-left { animation: slide-in-left 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .slide-right { animation: slide-in-right 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .slide-d1 { animation-delay: 0.1s; }
        .slide-d2 { animation-delay: 0.25s; }
        .slide-d3 { animation-delay: 0.4s; }
        .slide-d4 { animation-delay: 0.55s; }
        .subject-card:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 48px rgba(30,58,95,0.15); }
        .subject-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .tutor-card:hover .tutor-img { transform: scale(1.05); }
        .tutor-img { transition: transform 0.4s ease; }
      `}</style>

      <div className="scroll-progress" style={{ background: C.yellow }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Notebook paper texture + pencil
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{
          background: C.paper,
          backgroundImage: `
            repeating-linear-gradient(
              transparent,
              transparent 31px,
              ${C.lineColor} 31px,
              ${C.lineColor} 32px
            )
          `,
        }}
      >
        {/* Notebook left margin line */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none hidden md:block"
          style={{ left: '7.5%', width: 2, backgroundColor: `${C.red}55` }}
        />

        {/* Floating subject pills */}
        {[
          { text: 'Maths', top: '12%', right: '12%', color: C.navy, r: '-5deg', r2: '3deg' },
          { text: 'English', top: '25%', right: '5%', color: C.red, r: '4deg', r2: '-2deg' },
          { text: 'Physics', top: '65%', right: '15%', color: C.navyLight, r: '-3deg', r2: '5deg' },
          { text: 'French', top: '80%', right: '4%', color: C.navy, r: '6deg', r2: '-4deg' },
          { text: '11+ Prep', top: '40%', right: '8%', color: C.red, r: '-7deg', r2: '2deg' },
        ].map((pill, i) => (
          <div
            key={i}
            className="absolute pointer-events-none hidden md:block px-4 py-2 rounded font-bold text-sm shadow-md"
            style={{
              top: pill.top,
              right: pill.right,
              backgroundColor: pill.color,
              color: C.white,
              animation: `subject-float ${4 + i * 0.5}s ${i * 0.4}s ease-in-out infinite`,
              ['--r' as string]: pill.r,
              ['--r2' as string]: pill.r2,
            }}
          >
            {pill.text}
          </div>
        ))}

        {/* Pencil decorative */}
        <div
          className="absolute pointer-events-none hidden md:block"
          style={{
            right: '28%',
            top: '10%',
            fontSize: 80,
            transform: 'rotate(-20deg)',
            animation: 'pencil-bob 3s ease-in-out infinite',
          }}
        >
          ✏️
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10 w-full">
          {/* Subject floating pills (mobile) */}
          <div className="slide-left flex flex-wrap gap-2 mb-8">
            {['Maths', 'Science', 'English', 'Languages', 'Music', 'Entrance Exams'].map((s, i) => (
              <span
                key={s}
                className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: i % 3 === 0 ? C.navy : i % 3 === 1 ? C.red : C.navyLight,
                  color: C.white,
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <h1 className="mb-6">
            {['Unlock Your', 'Potential.'].map((word, i) => (
              <span
                key={word}
                className={`block font-black leading-[0.9] tracking-tight ${i === 0 ? 'text-5xl md:text-7xl' : 'text-5xl md:text-8xl'}`}
                style={{
                  color: i === 0 ? C.navy : C.yellow,
                  WebkitTextStroke: i === 1 ? `3px ${C.navy}` : undefined,
                  animation: `slide-in-left 0.8s ${i * 0.2}s cubic-bezier(0.16,1,0.3,1) both`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="slide-left slide-d3 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-8"
            style={{ color: C.slate }}
          >
            Expert tutors. Personalised plans. Proven results. Whether it&apos;s a GCSE resit or a top school entrance exam — we get you there.
          </p>

          {/* Stats strip */}
          <div className="slide-left slide-d3 flex flex-wrap gap-8 mb-10 p-6 rounded-xl border-l-4" style={{ backgroundColor: `${C.navy}08`, borderColor: C.yellow }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black" style={{ color: C.navy }}>{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: C.slate }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="slide-left slide-d4 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="px-8 py-4 rounded text-sm font-bold tracking-wide transition-all duration-300 shadow-lg"
              style={{ backgroundColor: C.navy, color: C.white }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.navyLight; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.navy; e.currentTarget.style.transform = 'scale(1)' }}
            >
              Free Assessment →
            </a>
            <a
              href="#subjects"
              className="px-8 py-4 rounded text-sm font-bold transition-all duration-300 border-2"
              style={{ borderColor: C.navy, color: C.navy }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.navy}11` }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              Browse Subjects
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SUBJECTS GRID
          ═══════════════════════════════════════ */}
      <section id="subjects" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionWhite}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.red }}>What We Cover</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.navy }}>Subjects</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {subjects.map((subj, i) => (
              <div
                key={subj.name}
                className="subject-card reveal-up rounded-xl overflow-hidden border-2 cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s`, borderColor: `${subj.color}22` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={subj.image} alt={subj.name} className="w-full h-full object-cover" style={{ filter: 'saturate(0.7)' }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${subj.color}dd, ${subj.color}44)` }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black text-white opacity-70">{subj.icon}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black mb-1" style={{ color: C.navy }}>{subj.name}</h3>
                  <p className="text-xs font-medium" style={{ color: C.slate }}>{subj.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FORMATS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionPaper}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.navy }}>Flexible</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.navy }}>Learning Formats</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {formats.map((fmt, i) => (
              <div
                key={fmt.name}
                className="reveal-up rounded-xl p-8 text-center border-2 hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${i * 0.1}s`, borderColor: `${C.navy}22`, backgroundColor: C.white }}
              >
                <div className="text-5xl mb-4">{fmt.icon}</div>
                <h3 className="text-xl font-black mb-2" style={{ color: C.navy }}>{fmt.name}</h3>
                <p className="text-3xl font-black mb-4" style={{ color: C.yellow }}>{fmt.price}</p>
                <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{fmt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TUTORS
          ═══════════════════════════════════════ */}
      <section id="tutors" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionNavy}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.yellow }}>The Experts</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.white }}>Featured Tutors</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {tutors.map((tutor, i) => (
              <div
                key={tutor.name}
                className="tutor-card reveal-up rounded-xl overflow-hidden border cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s`, borderColor: `${C.yellow}33`, backgroundColor: `${C.white}0a` }}
              >
                <div className="h-52 overflow-hidden">
                  <img src={tutor.image} alt={tutor.name} className="tutor-img w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-black text-base" style={{ color: C.white }}>{tutor.name}</h3>
                  </div>
                  <p className="text-xs font-bold mb-1" style={{ color: C.yellow }}>{tutor.subjects}</p>
                  <p className="text-xs mb-3" style={{ color: `${C.white}88` }}>{tutor.qual}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} style={{ color: tutor.rating > s ? C.yellow : `${C.white}33`, fontSize: 14 }}>★</span>
                    ))}
                    <span className="text-xs ml-1 font-bold" style={{ color: C.yellow }}>{tutor.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS — 4 steps
          ═══════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionWhite}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.red }}>Process</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.navy }}>How It Works</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Progress line */}
            <div
              className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5"
              style={{ background: `linear-gradient(to right, ${C.yellow}, ${C.red})` }}
            />

            {steps.map((step, i) => (
              <div key={step.n} className="reveal-up text-center relative" style={{ animationDelay: `${i * 0.12}s` }}>
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-black border-4 relative z-10"
                  style={{ backgroundColor: C.white, borderColor: i === 0 ? C.yellow : i === 3 ? C.red : C.navy, color: C.navy }}
                >
                  {step.n}
                </div>
                <h3 className="text-lg font-black mb-2" style={{ color: C.navy }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionPaper}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.red }}>Get Started</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: C.navy }}>Free Assessment<br />Session</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: C.slate }}>
              Book your free 30-minute assessment. We will identify your starting point, goals and ideal tutor — no commitment required.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Location', detail: '12 Scholar Street, Bloomsbury, London WC1A 1AA (also online)' },
                { title: 'Hours', detail: 'Mon–Fri 8:00–20:00 · Sat 9:00–17:00' },
                { title: 'Free Assessment', detail: '30 minutes, no charge, no commitment.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[36px] rounded-full flex-shrink-0" style={{ backgroundColor: C.yellow }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: C.navy }}>{info.title}</p>
                    <p className="text-sm" style={{ color: C.slate }}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 1200, label: 'students already enrolled' }}
              vertical="tutoros"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionNavy}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.yellow }}>Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.white }}>Parent &amp; Student Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionWhite}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: C.red }}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.navy }}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079463344" message="Hi! I'd like to book a free assessment with BrightPath Tutors" vertical="tutoros" />
    </div>
  )
}

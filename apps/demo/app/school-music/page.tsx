'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { CourseCatalog } from '@scala-sites/eduos/components/course-catalog'
import { EnrollmentForm } from '@scala-sites/eduos/components/enrollment-form'
import { InstructorGrid } from '@scala-sites/eduos/components/instructor-grid'

// --- MOCK DATA ---

const courses = [
  {
    id: '1',
    title: 'Guitar — Acoustic & Electric',
    instructor: 'Callum Doherty',
    category: 'Music' as const,
    level: 'Beginner' as const,
    duration: '10 weeks',
    schedule: 'Mon & Wed, 6–7 PM',
    spotsTotal: 8,
    spotsTaken: 5,
    price: 240,
    currency: 'GBP',
    startDate: '2026-09-08',
    description:
      'From your first chord to playing full songs — chords, strumming patterns, fingerpicking basics, and how to read tabs. Electric or acoustic welcome.',
  },
  {
    id: '2',
    title: 'Piano — Classical & Contemporary',
    instructor: 'Dr. Yuna Park',
    category: 'Music' as const,
    level: 'Beginner' as const,
    duration: '10 weeks',
    schedule: 'Tue & Thu, 5–6 PM',
    spotsTotal: 6,
    spotsTaken: 6,
    price: 280,
    currency: 'GBP',
    startDate: '2026-09-09',
    description:
      'Proper technique from day one — posture, hand position, scales, and your first pieces from Beethoven and Einaudi. No prior experience needed.',
  },
  {
    id: '3',
    title: 'Violin — Grade 1 to Grade 3',
    instructor: 'Mira Johansson',
    category: 'Music' as const,
    level: 'Beginner' as const,
    duration: '12 weeks',
    schedule: 'Sat, 10–11 AM',
    spotsTotal: 6,
    spotsTaken: 4,
    price: 310,
    currency: 'GBP',
    startDate: '2026-09-13',
    description:
      'Bow technique, tuning, scales, and ABRSM-aligned repertoire from Grades 1–3. Violins available to hire through the Academy.',
  },
  {
    id: '4',
    title: 'Drums & Rhythm — Beginner',
    instructor: 'Marcus Obi',
    category: 'Music' as const,
    level: 'Beginner' as const,
    duration: '8 weeks',
    schedule: 'Wed, 7–8 PM',
    spotsTotal: 4,
    spotsTaken: 3,
    price: 195,
    currency: 'GBP',
    startDate: '2026-09-10',
    description:
      'Basic groove, rudiments, and full-kit coordination across 8 sessions. Practice pad provided for home work. Full kit access in sessions.',
  },
  {
    id: '5',
    title: 'Singing — Pop & Soul Technique',
    instructor: 'Layla Obasi',
    category: 'Music' as const,
    level: 'Beginner' as const,
    duration: '8 weeks',
    schedule: 'Fri, 6–7 PM',
    spotsTotal: 8,
    spotsTaken: 5,
    price: 210,
    currency: 'GBP',
    startDate: '2026-09-12',
    description:
      'Breath control, pitch accuracy, resonance, and mic technique. Work on a pop or soul repertoire that suits your voice. No classical training required.',
  },
  {
    id: '6',
    title: 'Piano — Advanced Repertoire',
    instructor: 'Dr. Yuna Park',
    category: 'Music' as const,
    level: 'Advanced' as const,
    duration: '10 weeks',
    schedule: 'Mon & Thu, 7–8 PM',
    spotsTotal: 4,
    spotsTaken: 2,
    price: 340,
    currency: 'GBP',
    startDate: '2026-09-08',
    description:
      'For pianists at Grade 6+. Interpretation, performance preparation, and advanced technique — Chopin, Debussy, and Ravel. One individual session per month included.',
  },
  {
    id: '7',
    title: 'Music Theory — Grades 4 & 5',
    instructor: 'Mira Johansson',
    category: 'Music' as const,
    level: 'Intermediate' as const,
    duration: '8 weeks',
    schedule: 'Sat, 12–1 PM',
    spotsTotal: 10,
    spotsTaken: 6,
    price: 160,
    currency: 'GBP',
    startDate: '2026-09-13',
    description:
      'ABRSM Grades 4 & 5 theory — keys, intervals, harmony, form, and score reading. Essential for any grade exam candidate.',
  },
  {
    id: '8',
    title: 'Guitar — Blues & Improvisation',
    instructor: 'Callum Doherty',
    category: 'Music' as const,
    level: 'Intermediate' as const,
    duration: '8 weeks',
    schedule: 'Fri, 7–8:30 PM',
    spotsTotal: 6,
    spotsTaken: 4,
    price: 215,
    currency: 'GBP',
    startDate: '2026-09-12',
    description:
      'Pentatonic soloing, 12-bar blues, bending, vibrato, and slide technique. Play over real backing tracks and develop your own voice.',
  },
]

const instructors = [
  {
    id: '1',
    name: 'Dr. Yuna Park',
    subjects: ['Classical Piano', 'Contemporary Piano', 'Music Theory'],
    bio: 'Yuna holds a doctorate in piano performance from the Royal College of Music and has concertised across Europe and Asia. A natural teacher with a talent for making complex technique feel intuitive, her beginner students consistently achieve their first ABRSM grade within a year, while advanced students have gone on to conservatoire entry and professional performance.',
    qualifications: ['DMusPerf — Royal College of Music', 'ABRSM Grade 8 Distinction', 'PGCE Music'],
    yearsTeaching: 14,
    studentCount: 1800,
    rating: 5.0,
    catalogLink: '#courses',
  },
  {
    id: '2',
    name: 'Callum Doherty',
    subjects: ['Acoustic Guitar', 'Electric Guitar', 'Blues', 'Improvisation'],
    bio: 'Callum has been playing guitar professionally since the age of 17 — he has toured with award-winning artists, recorded for BBC Radio 2, and played festivals across the UK and Europe. His teaching style is completely practical: you will be playing real music from session one. His Blues & Improvisation course has a 100% satisfaction rate.',
    qualifications: ['BMus (Hons) Guitar, Leeds College of Music', 'RGT Guitar Tutor Diploma', 'Grade 8 Distinction'],
    yearsTeaching: 16,
    studentCount: 2400,
    rating: 4.9,
    catalogLink: '#courses',
  },
  {
    id: '3',
    name: 'Mira Johansson',
    subjects: ['Violin', 'Music Theory', 'Chamber Music'],
    bio: 'Mira studied at the Royal Academy of Music and spent a decade as a professional orchestral musician with the BBC Philharmonic. She brings that professional standard to every lesson, while meeting students exactly where they are. Her violin students consistently achieve distinction at ABRSM exams and have progressed to music college and youth orchestra.',
    qualifications: [
      'BMus (Hons) — Royal Academy of Music',
      'PGCE Music, University of London',
      'ABRSM Grade 8 Distinction',
    ],
    yearsTeaching: 11,
    studentCount: 1200,
    rating: 4.9,
    catalogLink: '#courses',
  },
  {
    id: '4',
    name: 'Layla Obasi',
    subjects: ['Singing', 'Pop', 'Soul', 'Vocal Performance'],
    bio: 'Layla is a West End-trained singer and vocal coach who has worked with artists signed to major labels and sung in productions at the Palladium and Savoy. Her pop and soul singing courses are among the most popular at Resonance — students develop real confidence, vocal range, and the technical tools to perform without tension or strain.',
    qualifications: [
      'BMus Vocal Performance, Trinity Laban',
      'ABRSM Singing Grade 8 Distinction',
      'Cert TESOL & Vocal Pedagogy',
    ],
    yearsTeaching: 9,
    studentCount: 960,
    rating: 5.0,
    catalogLink: '#courses',
  },
]

const reviews = [
  {
    id: '1',
    author: 'Isabelle H.',
    rating: 5,
    text: 'Dr. Park is the most patient, inspiring piano teacher I have ever had. I started as a complete beginner and passed Grade 2 ABRSM with distinction after one year. I am now working towards Grade 4. Resonance has changed my life.',
    date: '2026-07-18',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Jake T.',
    rating: 5,
    text: 'Callum\'s Blues course was the best thing I have done in years. By week 4 I was actually improvising — something I thought I could never do. He makes it feel completely natural. Booking the next term immediately.',
    date: '2026-07-05',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Anita R.',
    rating: 5,
    text: 'Layla is extraordinary. My daughter had severe stage fright before starting singing lessons. Within two terms she performed solo at the school concert. The care and skill Layla brings to every lesson is remarkable.',
    date: '2026-06-22',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'Daniel F.',
    rating: 5,
    text: 'Mira helped me pass ABRSM Grade 5 violin after years of being stuck. Her approach to bow technique completely transformed my tone. Resonance is an exceptional place — every teacher is a serious musician who genuinely loves to teach.',
    date: '2026-08-01',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'How does the trial lesson work?',
    answer:
      'Every new student can book a 30-minute trial lesson with their chosen teacher for £25 — redeemable against your first term fees if you enrol. Trial lessons can be booked directly from this page. We want you to find the right fit before committing to a full course.',
  },
  {
    question: 'What instruments can I learn at Resonance?',
    answer:
      'We currently offer tuition in guitar (acoustic and electric), piano, violin, drums, and singing. We are adding bass guitar, ukulele, and flute in January 2027. If you play an instrument not listed, contact us — we may be able to arrange a specialist teacher on request.',
  },
  {
    question: 'Do you offer lessons for children?',
    answer:
      'Yes. We teach students from age 6 upwards. Junior courses are available in piano, violin, guitar, and singing. All teaching with under-18s is delivered in compliance with our safeguarding policy, and teachers hold enhanced DBS checks. Parents are welcome to observe lessons at any time.',
  },
  {
    question: 'Are exam preparation courses available?',
    answer:
      'Yes. All our instrument courses are aligned with ABRSM grade syllabi. We also offer dedicated exam preparation packages for Grades 1–8 and music theory at Grades 1–5. Our exam pass rate is 96%, with 68% of students achieving merit or distinction.',
  },
  {
    question: 'What are term dates and how is pricing structured?',
    answer:
      'We run three terms per year: Autumn (September–December), Spring (January–April), and Summer (May–August). Courses are priced per term. A sibling discount of 10% applies for families enrolling two or more students simultaneously. Payment plans are available — contact us to discuss.',
  },
  {
    question: 'Do I need my own instrument to start?',
    answer:
      'For guitar and violin, we offer instrument hire at £15/month for your first term so you can get started without upfront cost. Piano lessons are taught on our in-house digital and acoustic pianos. For drums, all kit is provided in sessions and a practice pad is included in your course fee.',
  },
]

const siteConfig = {
  name: 'Resonance Music Academy',
  tagline: 'Learn any instrument — expert tuition in Islington, London',
  phone: '+44 20 7704 3300',
  email: 'hello@resonanceacademy.example.com',
  address: '27 Upper Street, Islington, London N1 0PQ',
  social: { instagram: '#resonanceacademy', facebook: '#' },
}

// --- NAVBAR ---

function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'rgba(237,242,244,0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #c8d6db',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '6px',
              background: '#2b2d42',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#ef233c', fontSize: '1rem', fontWeight: 900 }}>R</span>
          </div>
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: '0.95rem',
                color: '#2b2d42',
                letterSpacing: '-0.02em',
              }}
            >
              Resonance
            </div>
            <div
              style={{
                fontSize: '0.6rem',
                color: '#8d99ae',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Music Academy &middot; Islington
            </div>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {[
            { label: 'Courses', href: '#courses' },
            { label: 'Teachers', href: '#teachers' },
            { label: 'Reviews', href: '#reviews' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: '0.85rem', textDecoration: 'none', color: '#8d99ae', fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enrol"
            style={{
              padding: '9px 20px',
              background: '#ef233c',
              color: '#ffffff',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Book Trial Lesson
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- RESULTS BANNER ---

function ResultsBanner() {
  const stats = [
    { value: '96%', label: 'Exam Pass Rate' },
    { value: '1,200+', label: 'Active Students' },
    { value: '5 Instruments', label: 'Taught on Site' },
    { value: '4.9★', label: 'Average Rating' },
  ]
  return (
    <div style={{ background: '#2b2d42', padding: '28px 24px' }}>
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          textAlign: 'center',
        }}
      >
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div
              style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                color: '#ef233c',
                letterSpacing: '-0.03em',
                marginBottom: '4px',
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: '0.68rem',
                color: 'rgba(237,242,244,0.45)',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- STUDENT SHOWCASE ---

function StudentShowcase() {
  const achievements = [
    {
      name: 'Priya, age 14',
      achievement: 'ABRSM Piano Grade 8 — Distinction',
      teacher: 'Dr. Yuna Park',
      quote: 'I started at Resonance at age 8 with no experience. Six years later I performed at the Barbican.',
    },
    {
      name: 'Leo, age 24',
      achievement: 'First live gig booked after 2 terms',
      teacher: 'Callum Doherty',
      quote: 'I always thought I was too old to start guitar. Callum proved me completely wrong in 10 weeks.',
    },
    {
      name: 'Amara, age 17',
      achievement: 'Trinity College Grade 6 Singing — Merit',
      teacher: 'Layla Obasi',
      quote: 'Layla fixed a tension problem that had held me back for two years. My range increased by a full octave.',
    },
    {
      name: 'Tom, age 31',
      achievement: 'ABRSM Violin Grade 4 — passed first attempt',
      teacher: 'Mira Johansson',
      quote: 'I took up violin in my 30s — Mira made the whole thing feel possible. I now play in a local orchestra.',
    },
  ]
  return (
    <section
      style={{ background: '#edf2f4', padding: '88px 24px', borderTop: '1px solid #c8d6db' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#8d99ae',
            marginBottom: '12px',
          }}
        >
          Student Results
        </p>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.2rem',
            fontWeight: 900,
            color: '#2b2d42',
            marginBottom: '52px',
            letterSpacing: '-0.03em',
          }}
        >
          Real students. Real results.
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
        >
          {achievements.map(({ name, achievement, teacher, quote }) => (
            <div
              key={name}
              style={{
                padding: '28px',
                background: '#ffffff',
                border: '1px solid #c8d6db',
                borderRadius: '12px',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: '#ef233c',
                  color: '#fff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  borderRadius: '20px',
                  marginBottom: '14px',
                }}
              >
                {achievement}
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#2b2d42',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '16px',
                }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2b2d42' }}>{name}</span>
                <span style={{ fontSize: '0.78rem', color: '#8d99ae' }}>with {teacher}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- TERM PRICING ---

function TermPricing() {
  const terms = [
    {
      name: 'Autumn Term',
      dates: 'Sep – Dec 2026',
      weeks: '14 weeks',
      earlyBird: true,
      note: 'Early bird 10% off — enrol before 15 Aug',
    },
    {
      name: 'Spring Term',
      dates: 'Jan – Apr 2027',
      weeks: '13 weeks',
    },
    {
      name: 'Summer Term',
      dates: 'May – Aug 2027',
      weeks: '12 weeks',
    },
  ]
  return (
    <section style={{ background: '#2b2d42', padding: '72px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '1.9rem',
            fontWeight: 900,
            color: '#edf2f4',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
          }}
        >
          Three terms a year. Enrol anytime.
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(237,242,244,0.5)',
            fontSize: '1rem',
            marginBottom: '48px',
          }}
        >
          Course pricing is per term. Individual lessons available for students who prefer a flexible schedule.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {terms.map(({ name, dates, weeks, earlyBird, note }) => (
            <div
              key={name}
              style={{
                padding: '28px 20px',
                border: earlyBird ? '2px solid #ef233c' : '1px solid rgba(237,242,244,0.12)',
                borderRadius: '10px',
                background: earlyBird ? 'rgba(239,35,60,0.08)' : 'rgba(237,242,244,0.04)',
                textAlign: 'center',
              }}
            >
              {earlyBird && (
                <div
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#ef233c',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  Early Bird Available
                </div>
              )}
              <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#edf2f4', marginBottom: '6px' }}>
                {name}
              </h3>
              <p style={{ color: '#8d99ae', fontSize: '0.85rem', marginBottom: '4px' }}>{dates}</p>
              <p style={{ color: '#8d99ae', fontSize: '0.85rem', marginBottom: '14px' }}>{weeks}</p>
              {note && (
                <p
                  style={{
                    fontSize: '0.78rem',
                    color: '#ef233c',
                    fontWeight: 600,
                    borderTop: '1px solid rgba(239,35,60,0.3)',
                    paddingTop: '12px',
                    marginTop: '8px',
                  }}
                >
                  {note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── JSON-LD DATA ───────────────────────────────────────────────────────────
const musicSchoolJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'PerformingArtsTheater',
  name: 'Resonance Music Academy',
  description: 'Expert music tuition in Islington — guitar, piano, violin, drums, singing. 96% exam pass rate. Trial lessons available.',
  url: 'https://resonanceacademy.example.com',
  telephone: '+44 20 7704 3300',
  email: 'hello@resonanceacademy.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27 Upper Street',
    addressLocality: 'Islington, London',
    postalCode: 'N1 0PQ',
    addressCountry: 'GB',
  },
  openingHours: 'Mo-Fr 10:00-21:00, Sa 09:00-18:00, Su 10:00-16:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
    bestRating: '5',
  },
}

const musicFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─── CUSTOM MUSIC SCHOOL HERO ────────────────────────────────────────────────
function MusicHero() {
  // 11 equalizer bars — each gets a different height animation and speed
  const eqBars = [
    { height: 55, dur: '0.7s',  delay: '0s'    },
    { height: 80, dur: '0.5s',  delay: '0.08s' },
    { height: 40, dur: '0.9s',  delay: '0.16s' },
    { height: 95, dur: '0.6s',  delay: '0.04s' },
    { height: 60, dur: '0.75s', delay: '0.22s' },
    { height: 100,dur: '0.55s', delay: '0.12s' },
    { height: 45, dur: '0.85s', delay: '0.3s'  },
    { height: 75, dur: '0.65s', delay: '0.06s' },
    { height: 90, dur: '0.5s',  delay: '0.18s' },
    { height: 50, dur: '0.95s', delay: '0.25s' },
    { height: 70, dur: '0.7s',  delay: '0.1s'  },
  ]

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0f0f14',
      }}
    >
      <style>{`
        /* Equalizer bar bounce animation */
        @keyframes eqBounce {
          0%, 100% { transform: scaleY(0.15); }
          50%       { transform: scaleY(1); }
        }
        .eq-bar {
          transform-origin: bottom center;
          animation: eqBounce var(--dur, 0.7s) ease-in-out var(--delay, 0s) infinite alternate;
        }
        /* Sound wave line decoration */
        @keyframes waveShift {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -120px; }
        }
        .wave-path {
          stroke-dasharray: 8 4;
          animation: waveShift 2s linear infinite;
        }
        @keyframes musicFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .music-fade-up {
          opacity: 0;
          animation: musicFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes purpleGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(139,92,246,0.4); }
          50%       { text-shadow: 0 0 50px rgba(139,92,246,0.8), 0 0 80px rgba(139,92,246,0.3); }
        }
        @keyframes noteFloat {
          0%   { transform: translateY(0) rotate(0deg); opacity: 0.5; }
          50%  { transform: translateY(-20px) rotate(10deg); opacity: 0.8; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
        }
        .note-float {
          animation: noteFloat var(--ndur, 3s) ease-in-out var(--ndelay, 0s) infinite;
        }
      `}</style>

      {/* Background texture — dark grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(139,92,246,0.05) 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(139,92,246,0.04) 32px)',
          pointerEvents: 'none',
        }}
      />

      {/* Radial purple glow centre */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Equalizer bars — bottom of section, full-width ambience */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '5px',
          padding: '0 40px',
          pointerEvents: 'none',
          opacity: 0.35,
        }}
      >
        {eqBars.map((bar, i) => (
          <div
            key={i}
            className="eq-bar"
            style={{
              flex: 1,
              maxWidth: '28px',
              height: `${bar.height}%`,
              borderRadius: '3px 3px 0 0',
              background: i % 3 === 0
                ? 'linear-gradient(to top, #8b5cf6, #c4b5fd)'
                : i % 3 === 1
                  ? 'linear-gradient(to top, #eab308, #fde68a)'
                  : 'linear-gradient(to top, #7c3aed, #a78bfa)',
              ['--dur' as string]: bar.dur,
              ['--delay' as string]: bar.delay,
            }}
          />
        ))}
      </div>

      {/* Small equalizer bars — top mirror for depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '6px',
          padding: '0 80px',
          pointerEvents: 'none',
          opacity: 0.12,
          transform: 'scaleY(-1)',
        }}
      >
        {eqBars.slice(0, 8).map((bar, i) => (
          <div
            key={i}
            className="eq-bar"
            style={{
              flex: 1,
              maxWidth: '24px',
              height: `${bar.height}%`,
              borderRadius: '3px 3px 0 0',
              background: '#8b5cf6',
              ['--dur' as string]: bar.dur,
              ['--delay' as string]: bar.delay,
            }}
          />
        ))}
      </div>

      {/* Floating musical notes */}
      {[
        { note: '&#9833;', top: '15%', left: '8%',  size: '2.2rem', ndur: '3.2s', ndelay: '0s'   },
        { note: '&#9835;', top: '25%', right: '10%', size: '1.8rem', ndur: '4s',   ndelay: '0.8s' },
        { note: '&#9834;', top: '72%', left: '12%',  size: '1.5rem', ndur: '3.6s', ndelay: '1.4s' },
        { note: '&#9836;', top: '60%', right: '8%',  size: '2rem',   ndur: '2.8s', ndelay: '0.4s' },
      ].map((n, i) => (
        <div
          key={i}
          className="note-float music-fade-up"
          style={{
            position: 'absolute',
            top: n.top,
            left: n.left,
            right: n.right,
            fontSize: n.size,
            color: 'rgba(196,181,253,0.55)',
            pointerEvents: 'none',
            animationDelay: n.ndelay,
            ['--ndur' as string]: n.ndur,
            ['--ndelay' as string]: n.ndelay,
            userSelect: 'none',
          }}
          dangerouslySetInnerHTML={{ __html: n.note }}
        />
      ))}

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
          padding: '120px 24px 120px',
        }}
      >
        {/* Academy label */}
        <div
          className="music-fade-up"
          style={{
            animationDelay: '0.05s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '30px',
          }}
        >
          <div style={{ width: '28px', height: '1px', background: 'rgba(139,92,246,0.7)' }} />
          <span style={{ color: '#a78bfa', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>
            Resonance Music Academy &middot; Islington
          </span>
          <div style={{ width: '28px', height: '1px', background: 'rgba(139,92,246,0.7)' }} />
        </div>

        {/* Main title — bold with musical note accent */}
        <h1
          className="music-fade-up"
          style={{
            animationDelay: '0.18s',
            fontFamily: '"Arial Black", "Helvetica Neue", sans-serif',
            fontSize: 'clamp(2.8rem, 7.5vw, 6rem)',
            fontWeight: 900,
            color: '#f8fafc',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '4px',
            animation: 'musicFadeUp 0.9s 0.18s cubic-bezier(0.16,1,0.3,1) forwards, purpleGlow 3s 1.2s ease-in-out infinite',
          }}
        >
          Learn Any Instrument.
        </h1>
        <h1
          className="music-fade-up"
          style={{
            animationDelay: '0.3s',
            fontFamily: '"Arial Black", "Helvetica Neue", sans-serif',
            fontSize: 'clamp(2.8rem, 7.5vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '36px',
            background: 'linear-gradient(90deg, #8b5cf6 0%, #a78bfa 40%, #eab308 80%, #fde68a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Find Your Sound. &#9834;
        </h1>

        {/* Sound wave decoration — SVG */}
        <div
          className="music-fade-up"
          style={{ animationDelay: '0.38s', display: 'flex', justifyContent: 'center', marginBottom: '28px' }}
        >
          <svg width="320" height="28" viewBox="0 0 320 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="wave-path"
              d="M0,14 C20,4 40,24 60,14 C80,4 100,24 120,14 C140,4 160,24 180,14 C200,4 220,24 240,14 C260,4 280,24 300,14 C310,9 315,11 320,14"
              stroke="#8b5cf6"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className="music-fade-up"
          style={{
            animationDelay: '0.48s',
            fontSize: '1.1rem',
            color: 'rgba(226,232,240,0.7)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 36px',
            fontWeight: 300,
          }}
        >
          Expert music tuition in Islington for all ages and abilities.
          Guitar, piano, violin, drums, singing, and music theory.
          96% exam pass rate. Book a trial lesson today.
        </p>

        {/* Stats row */}
        <div
          className="music-fade-up"
          style={{
            animationDelay: '0.55s',
            display: 'flex',
            gap: '0',
            justifyContent: 'center',
            marginBottom: '44px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { val: '96%',   label: 'Exam Pass Rate' },
            { val: '1,200+', label: 'Active Students' },
            { val: '4.9★',  label: 'Google Rating' },
          ].map(({ val, label }, i) => (
            <div
              key={label}
              style={{
                padding: '0 28px',
                borderRight: i < 2 ? '1px solid rgba(139,92,246,0.3)' : 'none',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#8b5cf6', letterSpacing: '-0.03em' }}>{val}</div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(148,163,184,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="music-fade-up"
          style={{ animationDelay: '0.65s', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#enrol"
            style={{
              padding: '15px 38px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              boxShadow: '0 6px 32px rgba(139,92,246,0.45)',
            }}
          >
            Book Trial Lesson
          </a>
          <a
            href="#courses"
            style={{
              padding: '15px 34px',
              background: 'rgba(139,92,246,0.1)',
              color: '#c4b5fd',
              border: '1.5px solid rgba(139,92,246,0.35)',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  )
}

// --- PAGE ---

export default function SchoolMusicDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#2b2d42',
    primaryHover: '#1a1b2e',
    accent: '#ef233c',
    background: '#edf2f4',
    surface: '#ffffff',
    secondary: '#d9e4e8',
    text: '#2b2d42',
    textMuted: '#8d99ae',
    border: '#c8d6db',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicSchoolJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicFaqJsonLd) }}
      />

      <Navbar />

      <MusicHero />

      <ResultsBanner />

      <div id="courses">
        <CourseCatalog courses={courses} locale="en" />
      </div>

      <div id="teachers">
        <InstructorGrid instructors={instructors} />
      </div>

      <StudentShowcase />

      <TermPricing />

      <div id="enrol">
        <EnrollmentForm
          courses={courses.map((c) => ({
            id: c.id,
            title: c.title,
            price: c.price,
            currency: c.currency,
          }))}
          locale="en"
        />
      </div>

      <div id="reviews">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      <FAQAccordion items={faqs} verticalName="EduOS — Music" locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="442077043300"
        message="Hi Resonance Music Academy — I'd like to book a trial lesson."
      />
    </div>
  )
}

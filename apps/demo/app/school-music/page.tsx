'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
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
      <Navbar />

      <Hero
        title="Learn Any Instrument. Find Your Sound."
        subtitle="Resonance Music Academy — expert music tuition in Islington for all ages and abilities. Guitar, piano, violin, drums, singing, and music theory. Book a trial lesson today."
        backgroundImage="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1800&h=900&fit=crop"
        ctaPrimary={{ label: 'Book Trial Lesson', href: '#enrol' }}
        ctaSecondary={{ label: 'View All Courses', href: '#courses' }}
        overlayOpacity={0.75}
        height="full"
      />

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

      <FAQAccordion items={faqs} locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="442077043300"
        message="Hi Resonance Music Academy — I'd like to book a trial lesson."
      />
    </div>
  )
}

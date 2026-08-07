'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { CourseCatalog } from '@scala-sites/eduos/components/course-catalog'
import { EnrollmentForm } from '@scala-sites/eduos/components/enrollment-form'
import { InstructorGrid } from '@scala-sites/eduos/components/instructor-grid'

const courses = [
  {
    id: '1',
    title: 'Conversational Spanish',
    instructor: 'Elena Vargas',
    category: 'Languages' as const,
    level: 'Beginner' as const,
    duration: '10 weeks',
    schedule: 'Mon & Wed, 6–8 PM',
    spotsTotal: 12,
    spotsTaken: 9,
    price: 220,
    currency: 'GBP',
    startDate: '2026-08-18',
    description: 'Build real conversational confidence from day one. Focus on everyday phrases, travel vocabulary, and Latin American culture.',
  },
  {
    id: '2',
    title: 'Italian for Beginners',
    instructor: 'Marco Ferretti',
    category: 'Languages' as const,
    level: 'Beginner' as const,
    duration: '8 weeks',
    schedule: 'Tue & Thu, 7–9 PM',
    spotsTotal: 10,
    spotsTaken: 10,
    price: 185,
    currency: 'GBP',
    startDate: '2026-08-25',
    description: 'Immersive introduction to Italian language and culture, from greetings to ordering in a restaurant.',
  },
  {
    id: '3',
    title: 'Classical Piano',
    instructor: 'Yuki Tanaka',
    category: 'Music' as const,
    level: 'Intermediate' as const,
    duration: '12 weeks',
    schedule: 'Sat, 10 AM–12 PM',
    spotsTotal: 6,
    spotsTaken: 3,
    price: 310,
    currency: 'GBP',
    startDate: '2026-09-06',
    description: 'Technique, sight-reading, and repertoire from Bach to Chopin. For students with at least 1 year of piano experience.',
  },
  {
    id: '4',
    title: 'Guitar: Blues & Soul',
    instructor: 'Kwame Asante',
    category: 'Music' as const,
    level: 'Beginner' as const,
    duration: '8 weeks',
    schedule: 'Wed, 6–8 PM',
    spotsTotal: 8,
    spotsTaken: 5,
    price: 195,
    currency: 'GBP',
    startDate: '2026-08-12',
    description: 'Learn the foundations of blues guitar: pentatonic scales, 12-bar blues, and soulful phrasing. Electric or acoustic welcome.',
  },
  {
    id: '5',
    title: 'Watercolour Landscapes',
    instructor: 'Priya Nair',
    category: 'Art' as const,
    level: 'Beginner' as const,
    duration: '6 weeks',
    schedule: 'Fri, 5–7:30 PM',
    spotsTotal: 10,
    spotsTaken: 6,
    price: 160,
    currency: 'GBP',
    startDate: '2026-08-14',
    description: 'Explore colour mixing, wet-on-wet technique, and composition through scenic landscape studies. All materials included.',
  },
  {
    id: '6',
    title: 'Digital Marketing Essentials',
    instructor: 'Fatima Al-Rashid',
    category: 'Business' as const,
    level: 'Intermediate' as const,
    duration: '8 weeks',
    schedule: 'Tue & Thu, 6–7:30 PM',
    spotsTotal: 20,
    spotsTaken: 14,
    price: 275,
    currency: 'GBP',
    startDate: '2026-09-02',
    description: 'SEO, social media strategy, paid ads, and analytics. Practical campaigns you can apply to your business or career immediately.',
  },
  {
    id: '7',
    title: 'Python for Data Analysis',
    instructor: 'Amir Hosseini',
    category: 'Tech' as const,
    level: 'Advanced' as const,
    duration: '10 weeks',
    schedule: 'Mon & Thu, 7–9 PM',
    spotsTotal: 15,
    spotsTaken: 11,
    price: 345,
    currency: 'GBP',
    startDate: '2026-09-07',
    description: 'Pandas, NumPy, Matplotlib, and real-world datasets. Build a portfolio of data projects. Prior Python experience required.',
  },
  {
    id: '8',
    title: 'Japanese Home Cooking',
    instructor: 'Yuki Tanaka',
    category: 'Cooking' as const,
    level: 'Beginner' as const,
    duration: '6 weeks',
    schedule: 'Sun, 11 AM–1 PM',
    spotsTotal: 8,
    spotsTaken: 4,
    price: 210,
    currency: 'GBP',
    startDate: '2026-08-16',
    description: 'Ramen, sushi, katsu, and miso — learn authentic techniques and the philosophy of Japanese home cooking. Ingredients provided.',
  },
]

const instructors = [
  {
    id: '1',
    name: 'Elena Vargas',
    subjects: ['Spanish', 'Languages'],
    bio: 'Born in Seville and educated at the University of Granada, Elena has taught conversational Spanish across Europe and Latin America for over a decade. Her classes are famous for being warm, practical, and genuinely fun — students leave session one already talking.',
    qualifications: ['MA Hispanic Studies', 'DELE Examiner', 'Cambridge CELTA'],
    yearsTeaching: 12,
    studentCount: 1400,
    rating: 4.9,
    catalogLink: '#courses',
  },
  {
    id: '2',
    name: 'Yuki Tanaka',
    subjects: ['Classical Piano', 'Japanese Cooking'],
    bio: 'Yuki holds a conservatoire diploma from Tokyo University of the Arts and a passion for cross-cultural teaching. Equal parts musician and chef, her cooking classes bring the same precision and joy she brings to the piano bench.',
    qualifications: ['Tokyo University of the Arts', 'ABRSM Grade 8 Distinction', 'Cordon Bleu Certificate'],
    yearsTeaching: 9,
    studentCount: 820,
    rating: 4.8,
    catalogLink: '#courses',
  },
  {
    id: '3',
    name: 'Kwame Asante',
    subjects: ['Guitar', 'Music Theory', 'Blues'],
    bio: 'Kwame grew up playing in Accra and honed his craft in the live music scene of London and New York. He has toured with internationally recognised artists and brings a performer\'s instinct to every lesson — technique always in service of feel.',
    qualifications: ['Berklee College of Music', 'Grade 8 Guitar', 'RGT Tutor Diploma'],
    yearsTeaching: 15,
    studentCount: 2100,
    rating: 5.0,
    catalogLink: '#courses',
  },
  {
    id: '4',
    name: 'Fatima Al-Rashid',
    subjects: ['Digital Marketing', 'Business Strategy', 'SEO'],
    bio: 'Formerly Head of Growth at a Dubai-based SaaS company, Fatima brings real campaign data and hard-won lessons into every class. Her students have gone on to run their own agencies or land senior marketing roles within 6 months of completing her course.',
    qualifications: ['MBA — London Business School', 'Google Ads Certified', 'Meta Blueprint'],
    yearsTeaching: 7,
    studentCount: 950,
    rating: 4.9,
    catalogLink: '#courses',
  },
]

const reviews = [
  {
    id: '1',
    author: 'Sophia Okafor',
    rating: 5,
    text: 'Elena\'s Spanish class changed my life — I booked a trip to Buenos Aires after week 4 and could hold real conversations. She makes you feel like you\'re already fluent.',
    date: '2026-07-15',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'James Whitfield',
    rating: 5,
    text: 'Kwame is the best guitar teacher I\'ve ever had — and I\'ve tried five. He doesn\'t just teach you what to play, he teaches you how to listen. My playing transformed in 8 weeks.',
    date: '2026-07-02',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Nadia Kowalski',
    rating: 5,
    text: 'Fatima\'s digital marketing course is the most practical thing I\'ve ever done. I landed a job as a digital manager three weeks after finishing. Worth every penny.',
    date: '2026-06-20',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Tariq Mahmood',
    rating: 5,
    text: 'Yuki\'s Japanese cooking class is pure magic. The ramen we made in week two was better than anything I\'ve had in restaurants. Intimate, hands-on, and genuinely delicious.',
    date: '2026-06-10',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'Do I need any prior experience to enrol?',
    answer: 'Most of our courses start at Beginner level — no prior experience needed. For Intermediate and Advanced courses, we list any prerequisites in the course description. If you\'re unsure, WhatsApp us and we\'ll point you to the right class.',
  },
  {
    question: 'What happens if I miss a session?',
    answer: 'Every session is recorded and uploaded to your student portal within 24 hours. You\'ll never fall behind. We also run optional catch-up Q&As every Friday morning for students who want extra support.',
  },
  {
    question: 'Can I get a refund if the course isn\'t right for me?',
    answer: 'Yes — we offer a full refund within the first two sessions, no questions asked. After that, we\'ll credit your fees towards any other course at the Academy.',
  },
  {
    question: 'Are materials and equipment included?',
    answer: 'Art and cooking courses include all materials in the course fee. Music and language courses require your own instrument or a language learning app (we\'ll tell you which ones we recommend, most are free).',
  },
  {
    question: 'Do you offer courses for children?',
    answer: 'Currently all our courses are designed for adults (18+). We\'re launching a junior programme for ages 8–16 in January 2027 — join our mailing list to be first to know.',
  },
]

const siteConfig = {
  name: 'The Camden Academy',
  tagline: 'Languages, music, art, and more — expertly taught in the heart of Camden',
  phone: '+44 20 7946 0123',
  email: 'hello@camdenacademy.example',
  address: '18 Camden High Street, London NW1 0JH',
  social: { instagram: '#', facebook: '#' },
}

const theme = createCustomTheme('minimal', {
  primary: '#4c1d95',
  primaryHover: '#3b0764',
  accent: '#f97316',
  background: '#faf5ff',
  surface: '#ffffff',
  text: '#1c1917',
  secondary: '#f3e8ff',
  textMuted: '#78716c',
  border: '#e9d5ff',
})

// ─── JSON-LD DATA ───────────────────────────────────────────────────────────
const schoolJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'EducationalOrganization',
  name: 'The Camden Academy',
  description: 'Expert-led courses in languages, music, art, business, tech & cooking — small groups, vibrant community, real results.',
  url: 'https://camdenacademy.example.com',
  telephone: '+44 20 7946 0123',
  email: 'hello@camdenacademy.example',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Camden High Street',
    addressLocality: 'London',
    postalCode: 'NW1 0JH',
    addressCountry: 'GB',
  },
  foundingDate: '1965',
  openingHours: 'Mo-Sa 09:00-21:00',
}

const schoolFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─── CUSTOM SCHOOL HERO ──────────────────────────────────────────────────────
function SchoolHero() {
  // Scattered geometric shapes config
  const shapes = [
    // Circles
    { type: 'circle', color: '#3b82f6', size: 48,  top: '12%', left: '6%',   delay: '0s',    dur: '6s'  },
    { type: 'circle', color: '#ec4899', size: 28,  top: '70%', left: '4%',   delay: '1.2s',  dur: '7s'  },
    { type: 'circle', color: '#f59e0b', size: 64,  top: '55%', right: '5%',  delay: '0.6s',  dur: '8s'  },
    { type: 'circle', color: '#10b981', size: 20,  top: '18%', right: '12%', delay: '2s',    dur: '5s'  },
    { type: 'circle', color: '#8b5cf6', size: 36,  top: '82%', right: '18%', delay: '1.5s',  dur: '9s'  },
    // Squares
    { type: 'square', color: '#f59e0b', size: 32,  top: '30%', left: '8%',   delay: '0.8s',  dur: '7s'  },
    { type: 'square', color: '#3b82f6', size: 22,  top: '65%', left: '14%',  delay: '2.4s',  dur: '6s'  },
    { type: 'square', color: '#ec4899', size: 44,  top: '20%', right: '8%',  delay: '1.0s',  dur: '8s'  },
    { type: 'square', color: '#10b981', size: 18,  top: '78%', right: '10%', delay: '3.0s',  dur: '7s'  },
    // Triangles (CSS border trick)
    { type: 'triangle', color: '#3b82f6', size: 36, top: '44%', left: '3%',  delay: '1.8s',  dur: '9s'  },
    { type: 'triangle', color: '#ec4899', size: 28, top: '88%', left: '22%', delay: '0.4s',  dur: '6s'  },
    { type: 'triangle', color: '#f59e0b', size: 40, top: '35%', right: '4%', delay: '2.2s',  dur: '8s'  },
    { type: 'triangle', color: '#8b5cf6', size: 24, top: '10%', left: '28%', delay: '1.4s',  dur: '7s'  },
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
        background: '#ffffff',
      }}
    >
      <style>{`
        @keyframes shapeFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-12px) rotate(6deg); }
          66%       { transform: translateY(-6px) rotate(-4deg); }
        }
        .geo-shape {
          position: absolute;
          animation: shapeFloat var(--dur, 6s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
          opacity: 0.18;
          pointer-events: none;
        }
        @keyframes schoolFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .school-fade-up {
          opacity: 0;
          animation: schoolFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes crestGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.3); }
          50%       { box-shadow: 0 0 0 14px rgba(139,92,246,0); }
        }
        @keyframes tagSlide {
          from { opacity: 0; transform: translateX(-14px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Geometric shapes */}
      {shapes.map((s, i) => {
        const sharedStyle: React.CSSProperties = {
          position: 'absolute',
          top: s.top,
          bottom: (s as { bottom?: string }).bottom,
          left: s.left,
          right: s.right,
          ['--dur' as string]: s.dur,
          ['--delay' as string]: s.delay,
          opacity: 0.15,
          pointerEvents: 'none',
          animation: `shapeFloat ${s.dur} ease-in-out ${s.delay} infinite`,
        }
        if (s.type === 'circle') {
          return (
            <div
              key={i}
              style={{
                ...sharedStyle,
                width: s.size,
                height: s.size,
                borderRadius: '50%',
                background: s.color,
              }}
            />
          )
        }
        if (s.type === 'square') {
          return (
            <div
              key={i}
              style={{
                ...sharedStyle,
                width: s.size,
                height: s.size,
                borderRadius: '4px',
                background: s.color,
                transform: `rotate(15deg)`,
              }}
            />
          )
        }
        // Triangle
        return (
          <div
            key={i}
            style={{
              ...sharedStyle,
              width: 0,
              height: 0,
              background: 'transparent',
              borderLeft: `${s.size / 2}px solid transparent`,
              borderRight: `${s.size / 2}px solid transparent`,
              borderBottom: `${s.size}px solid ${s.color}`,
            }}
          />
        )
      })}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '120px 24px 80px',
        }}
      >
        {/* School Crest / Shield Placeholder */}
        <div
          className="school-fade-up"
          style={{
            animationDelay: '0.05s',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '80px',
              background: 'linear-gradient(160deg, #4c1d95 0%, #7c3aed 100%)',
              clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'crestGlow 3s ease-in-out infinite',
              boxShadow: '0 4px 24px rgba(124,58,237,0.35)',
            }}
          >
            <span style={{ color: '#fbbf24', fontSize: '1.8rem', lineHeight: 1, marginTop: '-12px' }}>&#10022;</span>
          </div>
        </div>

        {/* Tagline above title */}
        <p
          className="school-fade-up"
          style={{
            animationDelay: '0.15s',
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#7c3aed',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          Inspiring Futures Since 1965
        </p>

        {/* Main heading — large playful sans-serif */}
        <h1
          className="school-fade-up"
          style={{
            animationDelay: '0.25s',
            fontFamily: '"Arial Rounded MT Bold", "Nunito", "Helvetica Neue", sans-serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900,
            color: '#1c1917',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '10px',
          }}
        >
          Learn Something
        </h1>
        <h1
          className="school-fade-up"
          style={{
            animationDelay: '0.35s',
            fontFamily: '"Arial Rounded MT Bold", "Nunito", "Helvetica Neue", sans-serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '32px',
            background: 'linear-gradient(90deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Extraordinary
        </h1>

        {/* Subtitle */}
        <p
          className="school-fade-up"
          style={{
            animationDelay: '0.45s',
            fontSize: '1.1rem',
            color: '#78716c',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 36px',
            fontWeight: 400,
          }}
        >
          Expert-led courses in languages, music, art, business, tech &amp; cooking —
          small groups, vibrant community, real results.
        </p>

        {/* Subject tags */}
        <div
          className="school-fade-up"
          style={{
            animationDelay: '0.55s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '44px',
          }}
        >
          {[
            { label: 'Languages', color: '#3b82f6' },
            { label: 'Music',     color: '#ec4899' },
            { label: 'Art',       color: '#f59e0b' },
            { label: 'Business',  color: '#10b981' },
            { label: 'Tech',      color: '#8b5cf6' },
            { label: 'Cooking',   color: '#ef4444' },
          ].map(({ label, color }) => (
            <span
              key={label}
              style={{
                padding: '7px 16px',
                borderRadius: '30px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color,
                background: `${color}18`,
                border: `1.5px solid ${color}40`,
                animation: 'tagSlide 0.6s ease-out both',
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="school-fade-up"
          style={{ animationDelay: '0.65s', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#courses"
            style={{
              padding: '15px 38px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
              color: '#ffffff',
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              boxShadow: '0 6px 28px rgba(124,58,237,0.35)',
            }}
          >
            Browse Courses
          </a>
          <a
            href="#enrol"
            style={{
              padding: '15px 34px',
              background: 'transparent',
              color: '#4c1d95',
              border: '2px solid #e9d5ff',
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Enrol Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default function SchoolDemo() {
  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolFaqJsonLd) }}
      />

      <SchoolHero />

      <div id="courses">
        <CourseCatalog courses={courses} locale="en" />
      </div>

      <InstructorGrid instructors={instructors} />

      <div id="enrol">
        <EnrollmentForm
          courses={courses.map(c => ({ id: c.id, title: c.title, price: c.price, currency: c.currency }))}
          locale="en"
        />
      </div>

      <ReviewCarousel reviews={reviews} locale="en" />

      <FAQAccordion items={faqs} locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA phoneNumber="442079460123" message="Hi, I'd like to find out more about courses at The Camden Academy" />
    </div>
  )
}

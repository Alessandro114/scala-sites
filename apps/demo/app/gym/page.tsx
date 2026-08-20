'use client'
import Image from 'next/image';

import { useEffect, useRef, useState } from 'react'
import { themes, createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { ClassSchedule } from '@scala-sites/gymos/components/class-schedule'
import { MembershipTiers } from '@scala-sites/gymos/components/membership-tiers'
import { TrainerCard } from '@scala-sites/gymos/components/trainer-card'

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Forge Athletics',
  description: 'CrossFit, strength training, HIIT, and yoga classes. Expert coaches, real community.',
  url: 'https://forgeathletics.example.com',
  telephone: '+44 20 7555 7890',
  email: 'hello@forgeathletics.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '84 Hackney Road',
    addressLocality: 'London',
    postalCode: 'E2 7QZ',
    addressCountry: 'GB',
  },
  openingHours: 'Mo-Fr 06:00-22:00, Sa 07:00-14:00, Su 08:00-12:00',
  priceRange: '££',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: 3,
    bestRating: 5,
    worstRating: 1,
  },
}

const gymProductJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SCALA GymOS',
  description: 'AI operating system for gyms and fitness studios: class booking, membership management, WhatsApp AI, attendance tracking, and revenue analytics.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  dateModified: '2026-08-11',
  url: 'https://get-scala.com',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '9.90',
    highPrice: '197',
    offerCount: '3',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: [
    {
      '@type': 'Question',
      name: "I've never done CrossFit — can I start?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! All new members start with our Foundations program — 4 sessions where you learn every movement with personal attention. No experience needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to my first class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comfortable workout clothes, indoor shoes, a water bottle, and a towel. We provide everything else. First class is always free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I freeze my membership?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can freeze for up to 30 days per year at no charge. Just let us know 48 hours in advance via WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there parking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, free parking for 20 cars behind the gym. During peak hours (6-8 PM), street parking is usually available within 2 minutes walk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your opening hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monday-Friday: 6:00 AM - 10:00 PM. Saturday: 7:00 AM - 2:00 PM. Sunday: 8:00 AM - 12:00 PM. Open gym available during all hours.',
      },
    },
  ],
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const classes = [
  { id: '1', name: 'CrossFit WOD', instructor: 'Mike', time: '06:30', duration: '60 min', day: 'Monday', spotsTotal: 20, spotsTaken: 18, level: 'all' as const, category: 'CrossFit' },
  { id: '2', name: 'Yoga Flow', instructor: 'Sarah', time: '08:00', duration: '75 min', day: 'Monday', spotsTotal: 15, spotsTaken: 10, level: 'beginner' as const, category: 'Yoga' },
  { id: '3', name: 'HIIT Blast', instructor: 'Luke', time: '12:30', duration: '45 min', day: 'Monday', spotsTotal: 25, spotsTaken: 25, level: 'intermediate' as const, category: 'Cardio' },
  { id: '4', name: 'Strength Lab', instructor: 'Mike', time: '18:00', duration: '60 min', day: 'Monday', spotsTotal: 16, spotsTaken: 14, level: 'advanced' as const, category: 'Strength' },
  { id: '5', name: 'Power Yoga', instructor: 'Sarah', time: '19:30', duration: '60 min', day: 'Monday', spotsTotal: 15, spotsTaken: 8, level: 'intermediate' as const, category: 'Yoga' },
  { id: '6', name: 'CrossFit WOD', instructor: 'Luke', time: '06:30', duration: '60 min', day: 'Tuesday', spotsTotal: 20, spotsTaken: 12, level: 'all' as const, category: 'CrossFit' },
  { id: '7', name: 'Spin & Core', instructor: 'Emma', time: '07:30', duration: '45 min', day: 'Tuesday', spotsTotal: 20, spotsTaken: 17, level: 'beginner' as const, category: 'Cardio' },
  { id: '8', name: 'Olympic Lifting', instructor: 'Mike', time: '18:00', duration: '75 min', day: 'Tuesday', spotsTotal: 10, spotsTaken: 8, level: 'advanced' as const, category: 'Strength' },
  { id: '9', name: 'Yin Yoga', instructor: 'Sarah', time: '20:00', duration: '60 min', day: 'Tuesday', spotsTotal: 15, spotsTaken: 5, level: 'beginner' as const, category: 'Yoga' },
  { id: '10', name: 'CrossFit WOD', instructor: 'Mike', time: '06:30', duration: '60 min', day: 'Wednesday', spotsTotal: 20, spotsTaken: 16, level: 'all' as const, category: 'CrossFit' },
]

const tiers = [
  { id: '1', name: 'Open Gym', price: 49, currency: 'GBP', period: 'month', features: ['Unlimited open gym access', 'Locker room & showers', 'Free WiFi', 'Basic workout tracking'], ctaLabel: 'Start Free Trial', ctaUrl: '#' },
  { id: '2', name: 'Unlimited', price: 89, currency: 'GBP', period: 'month', highlighted: true, features: ['Everything in Open Gym', 'Unlimited group classes', 'Nutrition consultation (1x/quarter)', 'Priority booking', 'Guest pass (1/month)', 'Progress tracking dashboard'], ctaLabel: 'Start Free Trial', ctaUrl: '#' },
  { id: '3', name: 'Elite', price: 149, currency: 'GBP', period: 'month', features: ['Everything in Unlimited', '4x Personal Training/month', 'Custom meal plan', 'InBody scan monthly', 'Sauna & recovery area', 'Unlimited guest passes', 'Competition prep support'], ctaLabel: 'Book a Tour', ctaUrl: '#' },
]

const trainers = [
  { id: '1', name: 'Mike Barrett', photo: '', title: 'Head Coach — CrossFit & Strength', certifications: ['CF-L3', 'NSCA-CSCS', 'USAW-L2'], specialties: ['CrossFit', 'Olympic Lifting', 'Competition Prep'], bio: '10 years coaching CrossFit athletes from beginners to regional competitors. Former national weightlifting champion. Believes in smart programming over suffering.', bookingUrl: '#' },
  { id: '2', name: 'Sarah Fontaine', photo: '', title: 'Yoga & Mobility Director', certifications: ['RYT-500', 'FRC', 'Pn1'], specialties: ['Vinyasa', 'Yin', 'Mobility', 'Breathwork'], bio: 'Trained in Bali and Rishikesh. Specializes in yoga for athletes — improving recovery, flexibility, and mental focus through mindful movement.', bookingUrl: '#' },
  { id: '3', name: 'Luke Daniels', photo: '', title: 'HIIT & Conditioning Coach', certifications: ['ACE-CPT', 'Kettlebell L2', 'TRX-STC'], specialties: ['HIIT', 'Functional Training', 'Fat Loss', 'Boxing'], bio: 'Former semi-professional boxer turned fitness coach. Known for high-energy classes that are tough but fun. Specializes in body recomposition.', bookingUrl: '#' },
]

const reviews = [
  { id: '1', author: 'Alex P.', rating: 5, text: 'Best gym in London, period. Mike\'s programming is intelligent — I\'ve PR\'d my deadlift 3 times in 6 months without injuries. The community is incredible.', date: '2026-07-20', source: 'Google', verified: true },
  { id: '2', author: 'Claire R.', rating: 5, text: 'I was terrified of CrossFit but the beginner program here is so well structured. After 3 months I can do pull-ups and I feel stronger than ever.', date: '2026-07-05', source: 'Google', verified: true },
  { id: '3', author: 'Thomas W.', rating: 5, text: 'Sarah\'s yoga classes are the perfect complement to strength training. My mobility improved dramatically and my back pain is gone. Life-changing.', date: '2026-06-18', source: 'Google', verified: true },
]

const faqs = [
  { question: 'I\'ve never done CrossFit — can I start?', answer: 'Absolutely! All new members start with our Foundations program — 4 sessions where you learn every movement with personal attention. No experience needed.' },
  { question: 'What should I bring to my first class?', answer: 'Comfortable workout clothes, indoor shoes, a water bottle, and a towel. We provide everything else. First class is always free.' },
  { question: 'Can I freeze my membership?', answer: 'Yes, you can freeze for up to 30 days per year at no charge. Just let us know 48 hours in advance via WhatsApp.' },
  { question: 'Is there parking?', answer: 'Yes, free parking for 20 cars behind the gym. During peak hours (6-8 PM), street parking is usually available within 2 minutes walk.' },
  { question: 'What are your opening hours?', answer: 'Monday-Friday: 6:00 AM - 10:00 PM. Saturday: 7:00 AM - 2:00 PM. Sunday: 8:00 AM - 12:00 PM. Open gym available during all hours.' },
]

const siteConfig = {
  name: 'Forge Athletics',
  tagline: 'Strength, community, results — since 2018',
  phone: '+44 20 7555 7890',
  email: 'hello@yourdomain.com',
  address: '84 Hackney Road, London E2 7QZ',
  social: { instagram: '#', facebook: '#' },
}

// ─────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + increment, target)
            setCount(Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// ─────────────────────────────────────────────
// HERO — Energy Burst
// ─────────────────────────────────────────────
const NEON = '#39ff14'
const NEON_DIM = 'rgba(57,255,20,0.15)'

function GymHero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style>{`
        @keyframes neonPulse {
          0%, 100% { box-shadow: 0 0 10px ${NEON}, 0 0 30px ${NEON_DIM}; opacity: 1; }
          50% { box-shadow: 0 0 20px ${NEON}, 0 0 60px rgba(57,255,20,0.25); opacity: 0.85; }
        }
        @keyframes gymFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes diagSlide {
          from { opacity: 0; transform: skewX(-12deg) translateX(-40px); }
          to { opacity: 1; transform: skewX(-12deg) translateX(0); }
        }
      `}</style>

      {/* Diagonal black / dark split */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '55%',
          height: '100%',
          background: '#111',
          clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Background gym image */}
        <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
          alt="Forge Athletics gym floor"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.22,
            transform: 'scaleX(-1)',
          }} width={1200} height={800} />
        {/* Neon tint overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, transparent 0%, rgba(57,255,20,0.07) 100%)`,
          }}
        />
      </div>

      {/* Pulsing neon accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '45%',
          width: '3px',
          background: NEON,
          animation: 'neonPulse 2s ease-in-out infinite',
          zIndex: 5,
          transform: 'skewX(-3deg)',
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '120px 48px 80px',
          position: 'relative',
          zIndex: 10,
          width: '100%',
        }}
      >
        <p
          style={{
            color: NEON,
            fontSize: '11px',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            animation: 'gymFadeUp 0.6s ease both',
            fontFamily: 'monospace',
          }}
        >
          Hackney, London &middot; Est. 2018
        </p>

        {/* Large condensed uppercase title with text-stroke */}
        <h1
          style={{
            fontSize: 'clamp(56px, 9vw, 130px)',
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            fontFamily: '"Arial Black", "Impact", sans-serif',
            marginBottom: '8px',
            animation: 'gymFadeUp 0.7s ease 0.08s both',
            opacity: 0,
          }}
        >
          <span
            style={{
              display: 'block',
              color: 'transparent',
              WebkitTextStroke: '2px #ffffff',
            }}
          >
            TRAIN
          </span>
          <span
            style={{
              display: 'block',
              color: '#ffffff',
            }}
          >
            HARD.
          </span>
        </h1>
        <h1
          style={{
            fontSize: 'clamp(56px, 9vw, 130px)',
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            fontFamily: '"Arial Black", "Impact", sans-serif',
            marginBottom: '36px',
            animation: 'gymFadeUp 0.7s ease 0.16s both',
            opacity: 0,
          }}
        >
          <span
            style={{
              display: 'block',
              color: NEON,
            }}
          >
            GET
          </span>
          <span
            style={{
              display: 'block',
              color: 'transparent',
              WebkitTextStroke: `2px ${NEON}`,
            }}
          >
            STRONG.
          </span>
        </h1>

        <p
          style={{
            color: '#9ca3af',
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: '420px',
            marginBottom: '40px',
            animation: 'gymFadeUp 0.7s ease 0.25s both',
            opacity: 0,
          }}
        >
          CrossFit, strength, HIIT & yoga &mdash; expert coaching in a community
          that pushes you further than you thought possible.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '60px',
            animation: 'gymFadeUp 0.7s ease 0.33s both',
            opacity: 0,
          }}
        >
          <a
            href="#pricing"
            style={{
              display: 'inline-block',
              background: NEON,
              color: '#0a0a0a',
              padding: '14px 32px',
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 700,
              textDecoration: 'none',
              fontFamily: '"Arial Black", sans-serif',
              transition: 'box-shadow 0.3s',
              boxShadow: `0 0 20px ${NEON_DIM}`,
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px rgba(57,255,20,0.4)`)}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 20px ${NEON_DIM}`)}
          >
            Start Free Trial
          </a>
          <a
            href="#schedule"
            style={{
              display: 'inline-block',
              border: '2px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '14px 32px',
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: '"Arial Black", sans-serif',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = NEON)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
          >
            View Schedule
          </a>
        </div>

        {/* Stats counter bar */}
        <div
          style={{
            display: 'flex',
            gap: '0',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '28px',
            animation: 'gymFadeUp 0.7s ease 0.42s both',
            opacity: 0,
          }}
        >
          {[
            { target: 2400, suffix: '+', label: 'Members' },
            { target: 45, suffix: '/week', label: 'Classes' },
            { target: 12, suffix: '', label: 'Expert Trainers' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                paddingRight: i < 2 ? '32px' : '0',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                marginRight: i < 2 ? '32px' : '0',
              }}
            >
              <p
                style={{
                  color: NEON,
                  fontSize: 'clamp(28px, 3vw, 42px)',
                  fontWeight: 900,
                  fontFamily: '"Arial Black", sans-serif',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontFamily: 'monospace',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corner neon bracket */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          width: '60px',
          height: '60px',
          borderBottom: `2px solid ${NEON}`,
          borderRight: `2px solid ${NEON}`,
          opacity: 0.4,
          animation: 'neonPulse 3s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          width: '60px',
          height: '60px',
          borderTop: `2px solid ${NEON}`,
          borderLeft: `2px solid ${NEON}`,
          opacity: 0.4,
          animation: 'neonPulse 3s ease-in-out infinite',
          animationDelay: '1.5s',
        }}
      />
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function GymDemo() {
  return (
    <div style={themeToStyleObject(createCustomTheme('bold', { primary: '#18181b', primaryHover: '#27272a', accent: '#ef4444', background: '#ffffff', surface: '#fafafa', text: '#18181b', secondary: '#f4f4f5', textMuted: '#71717a', border: '#e4e4e7' })) as React.CSSProperties}>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gymProductJsonLd) }}
      />

      {/* Custom Hero */}
      <GymHero />

      <div id="schedule">
        <ClassSchedule classes={classes} />
      </div>
      <div id="pricing">
        <MembershipTiers tiers={tiers} locale="en" />
      </div>
      <TrainerCard trainers={trainers} />
      <ReviewCarousel reviews={reviews} locale="en" />
      <FAQAccordion
        items={faqs}
        locale="en"
        verticalName="GymOS"
        accentColor="#3f3f46"
        answerBlockText="SCALA GymOS is an AI operating system for gyms and fitness studios. It automates class bookings via WhatsApp, manages membership tiers, sends workout reminders, tracks attendance, handles cancellations, and gives coaches a live dashboard — replacing manual admin with one AI platform from €97/month."
      />
      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="442075557890" message="Hi, I'd like to book a free trial class" />
    </div>
  )
}

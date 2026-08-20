'use client'
import Image from 'next/image';

import { useState, useEffect } from 'react'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE — Mission Driven
// ─────────────────────────────────────────────
const C = {
  amber: '#d97706',
  amberLight: '#f59e0b',
  amberDark: '#b45309',
  impactRed: '#dc2626',
  impactRedDark: '#b91c1c',
  hopeGreen: '#16a34a',
  hopeGreenDark: '#15803d',
  white: '#ffffff',
  offWhite: '#f9fafb',
  dark: '#111827',
  slate: '#374151',
  slateLight: '#6b7280',
  blue: '#1d4ed8',
  sky: '#0ea5e9',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Bright Futures Foundation',
  description: 'Together We Can — Empowering communities since 2008',
  url: 'https://brightfutures.example.org',
  locale: 'en',
  vertical: 'nonprofitos',
  theme: 'impact',
  branding: { primaryColor: C.amber, accentColor: C.impactRed },
  contact: {
    phone: '+44 20 7946 0200',
    email: 'hello@brightfutures.org',
    whatsapp: '+442079460200',
    address: '88 Old Street, London EC1V 9AX',
    coordinates: { lat: 51.5262, lng: -0.0880 },
  },
  social: {
    instagram: 'brightfuturesfoundation',
    facebook: 'https://facebook.com/brightfuturesfoundation',
  },
  seo: {
    title: 'Bright Futures Foundation — Together We Change Lives',
    description: 'Community programs changing lives through education, health, environment and community initiatives.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const programs = [
  {
    name: 'Education',
    icon: '📚',
    color: C.blue,
    tagline: 'Knowledge Opens Doors',
    description: 'After-school tutoring, digital literacy programs, and university bursaries for young people from underserved communities.',
    impact: '4,200 students supported',
    stat: '94% improved grades',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&h=360&fit=crop',
  },
  {
    name: 'Health',
    icon: '🏥',
    color: C.hopeGreen,
    tagline: 'Wellness for All',
    description: 'Mobile health clinics, mental health support groups, and nutrition programs bringing care to where it is needed most.',
    impact: '3,800 people reached',
    stat: '2,100 mental health sessions',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=360&fit=crop',
  },
  {
    name: 'Environment',
    icon: '🌱',
    color: C.amberDark,
    tagline: 'A Greener Tomorrow',
    description: 'Community gardens, green space restoration, and environmental education helping urban areas breathe again.',
    impact: '18 green spaces created',
    stat: '2.4 tonnes CO₂ offset',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=360&fit=crop',
  },
  {
    name: 'Community',
    icon: '🤝',
    color: C.impactRed,
    tagline: 'Together We Thrive',
    description: 'Social cohesion programs, community kitchens, safe spaces for young people, and elderly befriending initiatives.',
    impact: '2,000+ community members',
    stat: '45 events per month',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=360&fit=crop',
  },
]

const waysToHelp = [
  {
    title: 'Donate',
    icon: '💝',
    description: '100% of donations go directly to programs. Even £5 a month funds a child\'s tutoring session.',
    cta: 'Give Today',
    color: C.impactRed,
    href: '#donate',
  },
  {
    title: 'Volunteer',
    icon: '🙋',
    description: 'Give your time and skills. We need tutors, health workers, gardeners, and event helpers.',
    cta: 'Join as Volunteer',
    color: C.hopeGreen,
    href: '#volunteer',
  },
  {
    title: 'Corporate Partnership',
    icon: '🏢',
    description: 'Match your team\'s charitable giving, sponsor a program, or offer pro-bono expertise.',
    cta: 'Partner With Us',
    color: C.blue,
    href: '#partner',
  },
  {
    title: 'Fundraise',
    icon: '🎯',
    description: 'Run, cycle, bake, or challenge yourself. Set up your own fundraising page and rally your network.',
    cta: 'Start Fundraising',
    color: C.amber,
    href: '#fundraise',
  },
]

const upcomingEvents = [
  {
    date: 'Sat 23 Aug',
    name: '5K For Futures',
    location: 'Victoria Park, London',
    spots: 142,
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=300&h=200&fit=crop',
  },
  {
    date: 'Thu 4 Sep',
    name: 'Annual Gala Dinner',
    location: 'The Guildhall, London EC2',
    spots: 18,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop',
  },
  {
    date: 'Sat 20 Sep',
    name: 'Community Garden Day',
    location: 'Hackney Community Garden',
    spots: 34,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Dr. Amara L.',
    rating: 5,
    text: 'The education program changed my nephew\'s trajectory. He was falling behind; after 18 months with Bright Futures tutors, he won a university scholarship. This organisation saves lives.',
    date: '2026-07-22',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Marcus T.',
    rating: 5,
    text: "I've been volunteering at the community kitchen every Saturday for two years. The impact is real and tangible — you see it on people's faces. Incredibly rewarding.",
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Green Finance Ltd',
    rating: 5,
    text: 'Our corporate partnership with Bright Futures has been one of the most meaningful investments we have made. Full transparency on fund usage, measurable impact reports every quarter.',
    date: '2026-08-01',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  { question: 'How much of my donation reaches programs?', answer: 'At least 87p of every £1 donated goes directly to programs. The remaining 13p covers essential running costs. We publish full audited accounts annually on our website.' },
  { question: 'Can I specify which program my donation supports?', answer: 'Yes. At checkout you can direct your gift to Education, Health, Environment, or Community. Or choose Unrestricted to let us deploy where needed most.' },
  { question: 'How do I become a volunteer?', answer: 'Complete the volunteer application form (linked below). We run monthly induction sessions. Most volunteers commit 4–8 hours per month though any regular commitment helps.' },
  { question: 'Do you offer corporate employee volunteering?', answer: 'Yes — we offer structured half-day or full-day volunteering experiences for corporate teams, from 5 to 60 people. Contact our partnerships team to arrange.' },
  { question: 'Are donations tax-deductible?', answer: 'Yes. We are a registered UK charity (registration 1184592). UK taxpayers can Gift Aid their donation at no extra cost, and we can claim an additional 25p per £1 from HMRC.' },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const nonprofitJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': 'https://brightfutures.example.org',
  name: 'Bright Futures Foundation',
  description: 'Community charity empowering people through education, health, environment, and community programs.',
  url: 'https://brightfutures.example.org',
  telephone: '+44 20 7946 0200',
  email: 'hello@brightfutures.org',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '88 Old Street',
    addressLocality: 'London',
    postalCode: 'EC1V 9AX',
    addressCountry: 'GB',
  },
  foundingDate: '2008',
  nonprofitStatus: 'RegisteredNonprofit',
  sameAs: ['https://instagram.com/brightfuturesfoundation', 'https://facebook.com/brightfuturesfoundation'],
}

const nonprofitFaqJsonLd = {
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
// ANIMATED COUNTER
// ─────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return <span>{count.toLocaleString()}{suffix}</span>
}

// ─────────────────────────────────────────────
// PROGRESS BAR
// ─────────────────────────────────────────────
function ProgressBar({ label, current, target, color }: { label: string; current: number; target: number; color: string }) {
  const pct = Math.round((current / target) * 100)
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span style={{ color: C.dark }}>{label}</span>
        <span style={{ color: color }}>£{current.toLocaleString()} / £{target.toLocaleString()}</span>
      </div>
      <div className="w-full rounded-full h-2.5" style={{ backgroundColor: `${color}25` }}>
        <div
          className="h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-xs mt-1" style={{ color: C.slateLight }}>{pct}% of goal</p>
    </div>
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
        background: `${C.white}f5`,
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.amber}20`,
        boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: `linear-gradient(135deg, ${C.amber}, ${C.impactRed})` }}
          >
            BF
          </div>
          <div>
            <span className="font-bold text-base" style={{ color: C.dark }}>Bright Futures</span>
            <span className="block text-[10px] tracking-wide" style={{ color: C.slateLight }}>FOUNDATION</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Programs', 'Impact', 'Get Involved', 'Events'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: C.slate }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.amber)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.slate)}
            >
              {item}
            </a>
          ))}
          <a
            href="#donate"
            className="px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${C.amber}, ${C.impactRed})` }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Donate Now
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════
export default function NonprofitPage() {
  return (
    <div style={{ backgroundColor: C.white, color: C.dark }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nonprofitJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nonprofitFaqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Impact + animated stat
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
      >
        {/* Warm gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${C.amberDark} 0%, ${C.amber} 40%, ${C.impactRed} 100%)`,
          }}
        />

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${C.white} 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, ${C.white} 0%, transparent 50%)`,
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle, ${C.white}80 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Photo overlay */}
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop&q=80"
            alt="Community members together"
            className="w-full h-full object-cover mix-blend-multiply opacity-30" width={1200} height={800} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                style={{ backgroundColor: `${C.white}25`, color: C.white, border: `1px solid ${C.white}40` }}
              >
                Registered Charity · Since 2008
              </div>

              <h1
                className="text-5xl md:text-7xl font-black leading-tight mb-6"
                style={{ color: C.white, lineHeight: 1.05 }}
              >
                Together<br />
                We Can.
              </h1>

              <p className="text-lg md:text-xl font-light leading-relaxed mb-10" style={{ color: `${C.white}cc` }}>
                Every year, Bright Futures Foundation transforms thousands of lives
                through education, health, environmental, and community programs
                across the UK.
              </p>

              {/* Fundraising progress bars */}
              <div
                className="p-6 rounded-2xl mb-10"
                style={{ backgroundColor: `${C.white}15`, backdropFilter: 'blur(8px)', border: `1px solid ${C.white}25` }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: `${C.white}cc` }}>
                  Summer Appeal 2026
                </p>
                <ProgressBar label="Education Fund" current={42800} target={60000} color={C.amberLight} />
                <ProgressBar label="Health Outreach" current={31200} target={40000} color={C.hopeGreen} />
                <ProgressBar label="Community Garden" current={18900} target={25000} color={C.sky} />
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#donate"
                  className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300"
                  style={{ backgroundColor: C.white, color: C.impactRed }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                >
                  Donate Now
                </a>
                <a
                  href="#volunteer"
                  className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border-2 transition-all duration-300"
                  style={{ borderColor: C.white, color: C.white }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.white}20` }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  Volunteer
                </a>
              </div>
            </div>

            {/* Right: large impact stat */}
            <div className="text-center">
              <div
                className="inline-flex flex-col items-center justify-center w-72 h-72 rounded-full"
                style={{
                  backgroundColor: `${C.white}20`,
                  border: `3px solid ${C.white}50`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Heart/hands icon CSS */}
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mb-2">
                  <path d="M10 20 C10 12 16 8 22 12 C24 13 26 15 28 18 C30 20 32 22 34 20 C36 18 36 15 34 12 C32 9 36 6 42 8 C48 10 52 16 50 24 C48 32 40 40 30 50 C20 40 12 32 10 24 C10 22 10 21 10 20Z" fill={C.white} opacity="0.9" />
                </svg>
                <div className="text-6xl font-black" style={{ color: C.white }}>
                  <AnimatedCounter target={12000} />
                </div>
                <div className="text-lg font-light mt-1" style={{ color: `${C.white}cc` }}>
                  Lives Changed
                </div>
                <div className="text-xs mt-2 tracking-widest uppercase" style={{ color: `${C.white}88` }}>
                  and counting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          IMPACT NUMBERS
          ═══════════════════════════════════════ */}
      <section
        id="impact"
        className="py-20 px-6"
        style={{ backgroundColor: C.dark }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: 12000, suffix: '+', label: 'Lives Changed', color: C.amberLight },
            { num: 18, suffix: '', label: 'Green Spaces Created', color: C.hopeGreen },
            { num: 94, suffix: '%', label: 'Students Improved Grades', color: C.sky },
            { num: 2100, suffix: '+', label: 'Mental Health Sessions', color: C.impactRed },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: stat.color }}>
                <AnimatedCounter target={stat.num} suffix={stat.suffix} />
              </div>
              <div className="text-sm" style={{ color: C.slateLight }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROGRAMS
          ═══════════════════════════════════════ */}
      <section
        id="programs"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.offWhite }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.amber }}>What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.dark }}>Our Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.name}
                className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: C.white, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: `1px solid ${prog.color}18` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width={1200} height={800} />
                  <div className="absolute top-4 left-4 text-3xl">{prog.icon}</div>
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-3 flex justify-between items-center"
                    style={{ background: `${prog.color}ee` }}
                  >
                    <span className="font-bold text-white">{prog.name}</span>
                    <span className="text-xs text-white opacity-90 font-medium">{prog.stat}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: prog.color }}>{prog.tagline}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: C.slate }}>{prog.description}</p>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: `${prog.color}12`, color: prog.color }}
                  >
                    {prog.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WAYS TO HELP
          ═══════════════════════════════════════ */}
      <section
        id="get-involved"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.white }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.amber }}>Join Us</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.dark }}>Ways to Help</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {waysToHelp.map((way) => (
              <div
                key={way.title}
                className="rounded-3xl p-7 transition-all duration-300 group"
                style={{
                  backgroundColor: C.offWhite,
                  border: `1px solid ${way.color}20`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.border = `1px solid ${way.color}50`; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.border = `1px solid ${way.color}20`; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="text-4xl mb-4">{way.icon}</div>
                <h3 className="text-xl font-black mb-3" style={{ color: C.dark }}>{way.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: C.slateLight }}>{way.description}</p>
                <a
                  href={way.href}
                  className="inline-block px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300"
                  style={{ backgroundColor: way.color }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {way.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EVENTS
          ═══════════════════════════════════════ */}
      <section
        id="events"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.offWhite }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.amber }}>Upcoming</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.dark }}>Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.name}
                className="rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: C.white, boxShadow: '0 1px 3px rgba(0,0,0,0.07)' }}
              >
                <Image src={event.image} alt={event.name} className="w-full h-44 object-cover" width={1200} height={800} />
                <div className="p-6">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ backgroundColor: `${C.amber}15`, color: C.amberDark }}
                  >
                    {event.date}
                  </div>
                  <h3 className="font-black text-lg mb-1" style={{ color: C.dark }}>{event.name}</h3>
                  <p className="text-sm mb-4" style={{ color: C.slateLight }}>{event.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: C.slateLight }}>{event.spots} spots remaining</span>
                    <a
                      href="#donate"
                      className="px-4 py-2 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: C.amber }}
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.amber }}>Voices</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.dark }}>Stories & Reviews</h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section
        id="donate"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.offWhite }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.amber }}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.dark }}>Frequently Asked</h2>
          </div>
          <FAQAccordion items={faqs} verticalName="NonprofitOS" locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460200" message="Hi! I'd like to learn more about Bright Futures Foundation" vertical="nonprofitos" />
    </div>
  )
}

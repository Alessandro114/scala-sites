'use client'
import Image from 'next/image';

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
  dark: '#0a0f1a',
  darkMid: '#0d1422',
  darkSurface: '#111827',
  darkCard: '#141d2e',
  matrixGreen: '#22c55e',
  matrixGreenDim: '#16a34a',
  matrixGreenGlow: '#4ade80',
  blue: '#3b82f6',
  blueDim: '#2563eb',
  blueGlow: '#60a5fa',
  grey: '#94a3b8',
  greyDark: '#64748b',
  white: '#f0f9ff',
  offWhite: '#e2e8f0',
} as const

const S = {
  pageBg: { backgroundColor: C.dark, color: C.white } as React.CSSProperties,
  green: { color: C.matrixGreen } as React.CSSProperties,
  blue: { color: C.blue } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.grey } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'NexGen IT Services',
  description: 'Managed IT, cybersecurity & cloud for SMEs',
  url: 'https://nexgenit.example.com',
  locale: 'en',
  vertical: 'itos',
  theme: 'dark',
  branding: { primaryColor: C.dark, accentColor: C.matrixGreen },
  contact: {
    phone: '+44 800 123 4567',
    email: 'hello@nexgenit.com',
    whatsapp: '+448001234567',
    address: '5 Tech Quarter, Manchester M1 2AB',
    coordinates: { lat: 53.4808, lng: -2.2426 },
  },
  social: {
    instagram: 'nexgenit',
    facebook: 'https://facebook.com/nexgenit',
  },
  seo: {
    title: 'NexGen IT Services — Managed IT & Cybersecurity',
    description: '99.99% uptime guaranteed. Managed IT, cybersecurity, cloud migration, VoIP for SMEs. 24/7 support.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  { name: 'Managed IT', price: '£50/user/mo', icon: '🖥️', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop', desc: 'Proactive monitoring, patch management, helpdesk support, and device management. One flat monthly fee per user.' },
  { name: 'Cybersecurity', price: 'From £200/mo', icon: '🛡️', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop', desc: 'Endpoint protection, EDR, email filtering, penetration testing, and security awareness training.' },
  { name: 'Cloud Migration', price: 'Project-based', icon: '☁️', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop', desc: 'Migrate from on-premises to Microsoft 365, Azure, or AWS. Zero-downtime migration with full data integrity verification.' },
  { name: 'VoIP & Comms', price: '£8/user/mo', icon: '📞', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop', desc: 'Microsoft Teams Phone, cloud PBX, number porting, and video conferencing infrastructure.' },
  { name: 'Hardware & Procurement', price: 'Cost+15%', icon: '💻', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop', desc: 'Laptops, servers, networking gear sourced and pre-configured. Asset tracking and lifecycle management included.' },
  { name: 'IT Strategy', price: '£150/hr', icon: '📈', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', desc: 'CTO-as-a-service for SMEs. Technology roadmap, vendor selection, digital transformation planning.' },
]

const slaLevels = [
  { tier: 'Bronze', response: '8-hour', uptime: '99.5%', support: 'Business Hours', price: '£25/user', features: ['Helpdesk ticketing', 'Monthly reports', 'Patch management', 'Anti-virus'] },
  { tier: 'Silver', response: '4-hour', uptime: '99.9%', support: 'Extended Hours', price: '£40/user', features: ['All Bronze features', '24/5 monitoring', 'Priority queue', 'Backup management', 'Quarterly review'], highlighted: true },
  { tier: 'Gold', response: '1-hour', uptime: '99.99%', support: '24/7/365', price: '£65/user', features: ['All Silver features', 'Dedicated engineer', 'On-site visits', 'CISO advisory', 'DR planning'] },
]

const caseStudies = [
  { client: 'Regional Law Firm (80 users)', result: '99.98% uptime over 18 months', desc: 'Migrated from ageing SBS 2011 to Microsoft 365 + Azure Files. Zero data loss. 40% reduction in IT cost.', icon: '⚖️' },
  { client: 'Manufacturing Group (3 sites)', result: '60% reduction in ransomware risk', desc: 'Deployed layered EDR, email sandboxing, and MFA across 3 sites. Zero security incidents in 12 months post-deployment.', icon: '🏭' },
  { client: 'Accountancy Practice (25 users)', result: 'Under 2-min average ticket resolution', desc: 'Replaced ad-hoc IT support with fully managed service. Staff no longer lose time to IT issues.', icon: '📊' },
]

const techPartners = ['Microsoft', 'Dell', 'Cisco', 'Sophos', 'Veeam', 'Datto']

const reviews: Review[] = [
  { id: '1', author: 'Neil R. (CFO, Roberts Law)', rating: 5, text: 'The migration was flawless. Not a single email lost, not an hour of downtime. The NexGen team managed complexity that terrified our previous IT company.', date: '2026-07-14', source: 'google', verified: true },
  { id: '2', author: 'Sarah K. (MD, Precision Mfg)', rating: 5, text: 'We were hit by ransomware twice before NexGen. Since they took over 14 months ago — zero incidents. That peace of mind is priceless.', date: '2026-07-26', source: 'google', verified: true },
  { id: '3', author: 'Tom H. (Partner, BH Accountants)', rating: 5, text: 'Average ticket response is 47 minutes. For a firm where client deadlines are everything, that matters enormously.', date: '2026-08-03', source: 'google', verified: true },
  { id: '4', author: 'Angela M. (HR Director, Westfield)', rating: 5, text: 'The IT strategy session alone was worth the subscription. They showed us £60K in savings we were leaving on the table with redundant software licences.', date: '2026-07-20', source: 'google', verified: true },
  { id: '5', author: 'James B. (CEO, NorthWest Retail)', rating: 4, text: 'VoIP migration across 4 sites completed in one weekend. Back in the office Monday, everything just worked. Remarkable.', date: '2026-07-09', source: 'tripadvisor', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'What does "managed IT" actually mean?', answer: 'We proactively monitor and maintain your entire IT environment — servers, laptops, networks, software patches — and provide unlimited helpdesk support for a flat monthly fee per user. You never need to think about IT again.' },
  { question: 'How quickly can you take over our IT?', answer: 'Our onboarding typically takes 2-4 weeks depending on your environment size. We run parallel support during transition so your team never experiences a gap in coverage.' },
  { question: 'Do you offer 24/7 support?', answer: 'Our Gold SLA tier includes 24/7/365 monitoring and emergency response. Bronze and Silver offer business hours and extended hours respectively. Emergency out-of-hours support is always available for critical incidents.' },
  { question: 'Can you support remote and hybrid teams?', answer: 'Absolutely. We manage devices and support users wherever they work — home, office, or client sites. Our RMM tools give us visibility and control over any internet-connected device.' },
  { question: 'What cybersecurity do you provide?', answer: 'Layered protection: EDR (endpoint detection & response), email filtering with sandboxing, MFA enforcement, dark web monitoring, and optional penetration testing and security awareness training.' },
  { question: 'Do you handle Microsoft 365 and Azure?', answer: 'Yes — we are a Microsoft Silver Partner. We handle licensing, migration, configuration, security hardening, and ongoing management of all Microsoft cloud services.' },
  { question: 'What\'s your approach to data backup?', answer: 'We follow the 3-2-1 rule: 3 copies, 2 media types, 1 offsite. We use Veeam and Datto for backup and disaster recovery. We test restores quarterly — not just backups.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '11:00', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '16:00', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const itJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NexGen IT Services',
  description: 'Managed IT support, cybersecurity, cloud migration and VoIP for SMEs.',
  url: 'https://nexgenit.example.com',
  telephone: '+44 800 123 4567',
  email: 'hello@nexgenit.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5 Tech Quarter',
    addressLocality: 'Manchester',
    postalCode: 'M1 2AB',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 53.4808, longitude: -2.2426 },
  openingHours: 'Mo-Fr 08:00-18:00',
}

const itFaqJsonLd = {
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
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.dark}f0`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.matrixGreen}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[C.matrixGreen, C.blue, C.matrixGreen].map((c, i) => (
              <div key={i} className="w-1.5 h-5" style={{ backgroundColor: c, opacity: 0.7 + i * 0.15 }} />
            ))}
          </div>
          <span className="font-mono font-semibold tracking-tight" style={S.white}>NexGen IT</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'SLA', 'Cases', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.18em] uppercase font-mono transition-colors duration-300"
              style={S.muted}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.matrixGreen)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.grey)}
            >
              {item}
            </a>
          ))}
          <a href="#contact"
            className="border px-6 py-2.5 text-xs tracking-[0.18em] uppercase font-mono transition-all duration-300"
            style={{ borderColor: C.matrixGreen, color: C.matrixGreen }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.matrixGreen; e.currentTarget.style.color = C.dark; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.matrixGreen; }}
          >
            Get Support
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
const CODE_CHARS = '01アイウエオカキクケコABCDEF'
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: C.dark }}>
      <style>{`
        @keyframes codeRain {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes nodeConnect {
          0% { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes uptimePulse {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .code-column {
          position: absolute;
          top: 0;
          font-family: monospace;
          font-size: 12px;
          line-height: 1.4;
          color: ${C.matrixGreen};
          animation: codeRain linear infinite;
          opacity: 0;
          pointer-events: none;
          user-select: none;
        }
        .cursor-blink { animation: cursorBlink 1s step-end infinite; }
        .node-line {
          stroke-dasharray: 300;
          animation: nodeConnect 2s ease-out forwards;
          stroke-dashoffset: 300;
        }
        .uptime-appear { animation: uptimePulse 0.8s ease-out forwards; opacity: 0; }
      `}</style>

      {/* Animated code rain background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 14 }).map((_, col) => {
          const delay = `${col * 0.7}s`
          const duration = `${6 + col * 0.4}s`
          const chars = Array.from({ length: 20 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('\n')
          return (
            <div key={col} className="code-column" style={{
              left: `${col * 7.2}%`,
              animationDelay: delay,
              animationDuration: duration,
              opacity: 0.12 + (col % 3) * 0.04,
            }}>
              {chars}
            </div>
          )
        })}

        {/* Network node diagram */}
        <div className="absolute right-[3%] top-1/2 -translate-y-1/2 w-80 h-80 hidden lg:block" style={{ opacity: 0.15 }}>
          <svg viewBox="0 0 320 320" className="w-full h-full">
            <line className="node-line" x1="160" y1="160" x2="60" y2="60" stroke={C.matrixGreen} strokeWidth="1" style={{ animationDelay: '0.5s' }} />
            <line className="node-line" x1="160" y1="160" x2="260" y2="60" stroke={C.blue} strokeWidth="1" style={{ animationDelay: '0.8s' }} />
            <line className="node-line" x1="160" y1="160" x2="60" y2="260" stroke={C.matrixGreen} strokeWidth="1" style={{ animationDelay: '1.1s' }} />
            <line className="node-line" x1="160" y1="160" x2="260" y2="260" stroke={C.blue} strokeWidth="1" style={{ animationDelay: '1.4s' }} />
            <line className="node-line" x1="160" y1="160" x2="160" y2="40" stroke={C.matrixGreen} strokeWidth="1" style={{ animationDelay: '1.7s' }} />
            {[
              { cx: 160, cy: 160, r: 8, c: C.matrixGreen },
              { cx: 60, cy: 60, r: 5, c: C.blue },
              { cx: 260, cy: 60, r: 5, c: C.matrixGreen },
              { cx: 60, cy: 260, r: 5, c: C.matrixGreen },
              { cx: 260, cy: 260, r: 5, c: C.blue },
              { cx: 160, cy: 40, r: 4, c: C.blue },
            ].map((n, i) => (
              <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.c} style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </svg>
        </div>

        {/* Green glow radials */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 0% 50%, ${C.matrixGreen}12 0%, transparent 50%),
                       radial-gradient(ellipse at 100% 50%, ${C.blue}10 0%, transparent 50%)`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-3xl stagger-children">
          {/* Terminal label */}
          <div className="reveal-up mb-8 font-mono text-xs inline-flex items-center gap-3 px-4 py-2"
            style={{ backgroundColor: `${C.matrixGreen}15`, border: `1px solid ${C.matrixGreen}33`, color: C.matrixGreen }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.matrixGreen }} />
            <span>SYSTEM STATUS: ALL SERVICES OPERATIONAL</span>
            <span className="cursor-blink" style={{ color: C.matrixGreen }}>_</span>
          </div>

          <h1 className="mb-6">
            <span className="reveal-clip-up block font-light leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: C.white }}>
              Technology That
            </span>
            <span className="reveal-clip-up block font-light leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: C.white, animationDelay: '0.12s' }}>
              Works For{' '}
              <span style={{ color: C.matrixGreen }}>You</span>
            </span>
          </h1>

          <p className="reveal-up text-lg font-light leading-relaxed mb-10 max-w-xl" style={{ ...S.muted, animationDelay: '0.3s' }}>
            Managed IT services, cybersecurity, and cloud infrastructure for growing businesses.
            We handle technology so you can focus on what you do best.
          </p>

          {/* Uptime stat */}
          <div className="reveal-up flex items-center gap-6 mb-10" style={{ animationDelay: '0.4s' }}>
            <div className="uptime-appear px-6 py-4 font-mono" style={{ border: `1px solid ${C.matrixGreen}44`, backgroundColor: `${C.matrixGreen}08` }}>
              <div className="text-3xl font-light" style={S.green}>99.99%</div>
              <div className="text-xs tracking-[0.2em] uppercase mt-1" style={S.muted}>Uptime Guaranteed</div>
            </div>
            <div className="space-y-1 font-mono text-xs" style={S.muted}>
              <div><span style={S.green}>✓</span> &lt; 1hr Gold Response</div>
              <div><span style={S.green}>✓</span> 24/7/365 Monitoring</div>
              <div><span style={S.green}>✓</span> Microsoft Silver Partner</div>
              <div><span style={S.green}>✓</span> ISO 27001 Aligned</div>
            </div>
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.5s' }}>
            <a href="#contact"
              className="px-10 py-4 text-sm tracking-[0.15em] uppercase font-mono transition-all duration-300"
              style={{ backgroundColor: C.matrixGreen, color: C.dark }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.matrixGreenGlow)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.matrixGreen)}
            >
              Get a Free Audit
            </a>
            <a href="#services"
              className="border px-10 py-4 text-sm tracking-[0.15em] uppercase font-mono transition-all duration-300"
              style={{ borderColor: `${C.blue}55`, color: C.blue }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.color = C.blueGlow; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.blue}55`; e.currentTarget.style.color = C.blue; }}
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────
export default function ITServicesPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itFaqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.matrixGreen }} />

      <Navbar />
      <Hero />

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-4 overflow-hidden" style={{ backgroundColor: C.matrixGreenDim }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Managed IT', 'Cybersecurity', 'Cloud Migration', 'VoIP', 'Helpdesk', '24/7 Support', 'Microsoft Partner', 'ISO Aligned', '99.99% Uptime'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-mono tracking-[0.2em] uppercase" style={{ color: C.dark }}>{item}</span>
                  <span style={{ color: `${C.dark}55` }}>■</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.darkMid }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4 font-mono" style={S.green}>{'// Services'}</p>
            <h2 className="text-4xl md:text-6xl font-light" style={S.white}>What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {services.map((svc, i) => (
              <div key={svc.name}
                className="reveal-up group overflow-hidden cursor-pointer transition-all duration-300"
                style={{ animationDelay: `${i * 0.08}s`, backgroundColor: C.darkCard, border: `1px solid ${C.matrixGreen}22`, borderRadius: '4px' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${C.matrixGreen}66`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${C.matrixGreen}22`)}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image src={svc.image} alt={svc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" style={{ opacity: 0.6 }} width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.darkCard} 30%, transparent)` }} />
                  <div className="absolute top-4 left-4">
                    <span className="text-2xl">{svc.icon}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium" style={S.white}>{svc.name}</h3>
                    <span className="text-xs font-mono whitespace-nowrap ml-2" style={S.green}>{svc.price}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={S.muted}>{svc.desc}</p>
                  <a href="#contact"
                    className="mt-4 block text-center py-2.5 text-xs tracking-[0.15em] uppercase font-mono transition-all duration-300"
                    style={{ border: `1px solid ${C.matrixGreen}44`, color: C.matrixGreen }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.matrixGreen; e.currentTarget.style.color = C.dark; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.matrixGreen; }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SLA TIERS
          ═══════════════════════════════════════ */}
      <section id="sla" className="py-24 px-6 md:px-16" style={{ backgroundColor: C.dark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4 font-mono" style={S.blue}>{'// SLA Tiers'}</p>
            <h2 className="text-4xl md:text-5xl font-light" style={S.white}>Choose Your Level of Cover</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {slaLevels.map((tier, i) => (
              <div key={tier.tier}
                className="reveal-up relative p-6"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  backgroundColor: tier.highlighted ? `${C.matrixGreen}12` : C.darkCard,
                  border: `1px solid ${tier.highlighted ? C.matrixGreen : C.matrixGreen + '22'}`,
                  borderRadius: '4px',
                }}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-mono px-4 py-1"
                    style={{ backgroundColor: C.matrixGreen, color: C.dark }}>RECOMMENDED</div>
                )}
                <div className="text-center mb-6">
                  <div className="text-2xl font-light mb-1" style={S.white}>{tier.tier}</div>
                  <div className="text-3xl font-extralight mb-1" style={tier.highlighted ? S.green : S.white}>{tier.price}</div>
                  <div className="text-xs font-mono" style={S.muted}>per user / month</div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span style={S.muted}>Response</span>
                    <span style={S.green}>{tier.response}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={S.muted}>Uptime SLA</span>
                    <span style={S.green}>{tier.uptime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={S.muted}>Support</span>
                    <span style={S.white}>{tier.support}</span>
                  </div>
                </div>
                <div className="border-t pt-4 space-y-2" style={{ borderColor: `${C.matrixGreen}22` }}>
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <span style={S.green}>✓</span>
                      <span style={S.muted}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact"
                  className="mt-6 block text-center py-3 text-sm tracking-[0.15em] uppercase font-mono transition-all duration-300"
                  style={{ backgroundColor: tier.highlighted ? C.matrixGreen : 'transparent', color: tier.highlighted ? C.dark : C.matrixGreen, border: `1px solid ${C.matrixGreen}` }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.matrixGreen; e.currentTarget.style.color = C.dark; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = tier.highlighted ? C.matrixGreen : 'transparent'; e.currentTarget.style.color = tier.highlighted ? C.dark : C.matrixGreen; }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CASE STUDIES
          ═══════════════════════════════════════ */}
      <section id="cases" className="py-24 px-6 md:px-16" style={{ backgroundColor: C.darkMid }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4 font-mono" style={S.blue}>{'// Case Studies'}</p>
            <h2 className="text-4xl md:text-5xl font-light" style={S.white}>Results We&rsquo;ve Delivered</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {caseStudies.map((cs, i) => (
              <div key={cs.client} className="reveal-up p-6"
                style={{ animationDelay: `${i * 0.1}s`, backgroundColor: C.darkCard, border: `1px solid ${C.blue}22`, borderRadius: '4px' }}>
                <div className="text-3xl mb-4">{cs.icon}</div>
                <div className="text-xs font-mono mb-3" style={S.blue}>{cs.client}</div>
                <div className="text-lg font-light mb-3" style={S.green}>{cs.result}</div>
                <p className="text-sm leading-relaxed" style={S.muted}>{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PARTNERS
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ backgroundColor: C.dark }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-mono tracking-[0.3em] uppercase mb-8" style={S.muted}>Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-4">
            {techPartners.map((p) => (
              <div key={p} className="px-6 py-3 font-mono text-sm font-medium"
                style={{ backgroundColor: C.darkCard, color: C.grey, border: `1px solid ${C.matrixGreen}22`, borderRadius: '4px' }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          24/7 SUPPORT CTA
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: `linear-gradient(135deg, ${C.darkCard}, ${C.darkSurface})` }}>
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <div className="font-mono text-xs mb-4" style={S.green}>{'// 24 / 7 / 365'}</div>
          <h2 className="text-3xl md:text-5xl font-light mb-4" style={S.white}>IT Issue Right Now?</h2>
          <p className="text-lg font-light mb-8" style={S.muted}>
            Our Gold clients get a 1-hour response guarantee — day or night, weekend or bank holiday.
          </p>
          <a href="tel:+448001234567"
            className="inline-block px-12 py-4 text-sm font-mono tracking-[0.2em] uppercase transition-all duration-300"
            style={{ backgroundColor: C.matrixGreen, color: C.dark }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.matrixGreenGlow)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.matrixGreen)}
          >
            Call 0800 123 4567
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / BOOKING
          ═══════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.darkMid }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4 font-mono" style={S.green}>{'// Free IT Audit'}</p>
            <h2 className="text-4xl font-light mb-6" style={S.white}>Get a Free<br />IT Health Check</h2>
            <p className="font-light leading-relaxed mb-8" style={S.muted}>
              Book a 30-minute discovery call. We&rsquo;ll review your current setup,
              identify risks, and give you honest recommendations — no obligation.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Phone', detail: '+44 800 123 4567 (free)' },
                { label: 'Emergency', detail: '24/7 for Gold SLA clients' },
                { label: 'Office', detail: '5 Tech Quarter, Manchester M1 2AB' },
                { label: 'Response SLA', detail: 'Bronze 8h · Silver 4h · Gold 1h' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.matrixGreen}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1 font-mono" style={S.green}>{info.label}</p>
                    <p className="text-sm" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 128, label: 'free audits booked this month' }}
              vertical="itos" onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.dark }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4 font-mono" style={S.green}>{'// Client Feedback'}</p>
          <h2 className="text-4xl md:text-5xl font-light" style={S.white}>What Our Clients Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.darkMid }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4 font-mono" style={S.blue}>{'// FAQ'}</p>
            <h2 className="text-4xl md:text-5xl font-light" style={S.white}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="ITServOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+448001234567" message="Hi NexGen! I'd like a free IT audit" vertical="itos" />
    </div>
  )
}

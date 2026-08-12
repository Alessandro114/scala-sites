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
  navy: '#1e293b',
  navyDeep: '#0f172a',
  navyMid: '#1a2436',
  purple: '#7c3aed',
  purpleLight: '#9b5ffe',
  purpleDim: '#7c3aed22',
  green: '#16a34a',
  greenDim: '#16a34a22',
  white: '#ffffff',
  mist: '#e2e8f0',
  slate: '#94a3b8',
  slateDeep: '#64748b',
} as const

const S = {
  pageBg: { backgroundColor: C.navyDeep, color: C.white } as React.CSSProperties,
  sectionNavy: { backgroundColor: C.navy } as React.CSSProperties,
  sectionDeep: { backgroundColor: C.navyDeep } as React.CSSProperties,
  sectionMid: { backgroundColor: C.navyMid } as React.CSSProperties,
  purple: { color: C.purple } as React.CSSProperties,
  purpleLight: { color: C.purpleLight } as React.CSSProperties,
  green: { color: C.green } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  mist: { color: C.mist } as React.CSSProperties,
  slate: { color: C.slate } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'TalentBridge Recruitment',
  description: 'Connecting Talent with Opportunity across 15 industries',
  url: 'https://talentbridge.example.com',
  locale: 'en',
  vertical: 'recruitmentos',
  theme: 'professional',
  branding: { primaryColor: C.navyDeep, accentColor: C.purple },
  contact: {
    phone: '+44 20 3456 7890',
    email: 'hello@talentbridge.com',
    whatsapp: '+442034567890',
    address: '15 Bishopsgate, London EC2N 3AR',
    coordinates: { lat: 51.5155, lng: -0.0803 },
  },
  social: {
    instagram: 'talentbridgeuk',
    facebook: 'https://linkedin.com/company/talentbridge',
  },
  seo: {
    title: 'TalentBridge Recruitment — Connecting Talent with Opportunity',
    description: 'Expert recruitment agency specialising in permanent, contract, and executive search across 15 industries.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Sarah K.', rating: 5, text: 'TalentBridge placed me in my dream role within three weeks. The team really listened to what I wanted and matched me perfectly. Highly recommend to any professional looking to make a move.', date: '2026-07-10', source: 'google', verified: true },
  { id: '2', author: 'James H.', rating: 5, text: 'As a hiring manager, I\'ve worked with many agencies. TalentBridge is different — they only send us candidates who are genuinely qualified. Filled our CTO role in 12 days.', date: '2026-07-18', source: 'google', verified: true },
  { id: '3', author: 'Priya M.', rating: 5, text: 'The CV advice and interview prep they provided was exceptional. I felt completely prepared and landed the role at my target salary. Worth every conversation.', date: '2026-07-25', source: 'trustpilot', verified: true },
  { id: '4', author: 'Michael T.', rating: 5, text: 'Exceptional RPO service. They embedded seamlessly into our team and reduced our time-to-hire by 40%. Professional, responsive, and results-driven.', date: '2026-08-01', source: 'google', verified: true },
  { id: '5', author: 'Olivia R.', rating: 4, text: 'Very impressed with their tech sector knowledge. They understood exactly what a Senior DevOps role requires — no wasted interviews. Found our hire within two weeks.', date: '2026-08-03', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How quickly can you fill a vacancy?', answer: 'For most roles, we present shortlisted candidates within 5-7 business days. Executive search and highly specialist roles typically take 2-4 weeks. We always agree timelines upfront.' },
  { question: 'Do you charge candidates?', answer: 'Never. All our services for candidates — registration, job matching, CV advice, and interview preparation — are completely free. We are paid by the hiring company.' },
  { question: 'What industries do you cover?', answer: 'We specialise in Technology, Finance, Healthcare, Engineering, Marketing, Legal, Property, Logistics, Manufacturing, Retail, Education, Energy, Creative, HR, and Professional Services — 15 industries in total.' },
  { question: 'What is RPO and do I need it?', answer: 'Recruitment Process Outsourcing means we act as your in-house recruitment team, handling everything from job briefs to offer management. Ideal for companies hiring 10+ roles per year who want to reduce agency fees and improve quality.' },
  { question: 'How does executive search work?', answer: 'Our executive search (headhunting) service targets passive candidates — people not actively looking but open to the right opportunity. We map the market, approach confidentially, and manage the process end-to-end. Fees are typically 20-25% of first-year salary.' },
  { question: 'Can you help with contract and interim placements?', answer: 'Yes. Our contract desk specialises in placing contractors and interim professionals across all our sectors. We handle all compliance, IR35 assessments, and payroll administration.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '10:00', available: true, spotsLeft: 5 },
  { id: '3', date: today, time: '11:00', available: true, spotsLeft: 2 },
  { id: '4', date: today, time: '14:00', available: true, spotsLeft: 4 },
  { id: '5', date: today, time: '15:00', available: true, spotsLeft: 6 },
  { id: '6', date: today, time: '16:00', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'TalentBridge Recruitment',
  description: 'Expert recruitment agency specialising in permanent, contract, and executive search across 15 industries.',
  url: 'https://talentbridge.example.com',
  telephone: '+44 20 3456 7890',
  email: 'hello@talentbridge.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '15 Bishopsgate',
    addressLocality: 'London',
    postalCode: 'EC2N 3AR',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5155, longitude: -0.0803 },
  openingHours: 'Mo-Fr 08:00-18:00',
  sameAs: ['https://linkedin.com/company/talentbridge'],
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
// COMPONENTS
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `${C.navyDeep}ee`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.purple}33`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* Network node logo mark */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="7" r="3" fill={C.purple} />
            <circle cx="5" cy="21" r="3" fill={C.purple} opacity="0.7" />
            <circle cx="23" cy="21" r="3" fill={C.purple} opacity="0.7" />
            <line x1="14" y1="10" x2="5" y2="18" stroke={C.purple} strokeWidth="1.5" opacity="0.5" />
            <line x1="14" y1="10" x2="23" y2="18" stroke={C.purple} strokeWidth="1.5" opacity="0.5" />
            <line x1="8" y1="21" x2="20" y2="21" stroke={C.purple} strokeWidth="1.5" opacity="0.5" />
          </svg>
          <span className="text-sm font-semibold tracking-wide" style={{ color: C.white }}>
            TalentBridge
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Employers', 'Candidates', 'Industries', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: C.slate }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.slate)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 rounded"
            style={{ backgroundColor: C.purple, color: C.white }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.purpleLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.purple)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// NETWORK HERO NODES (CSS positioned)
// ─────────────────────────────────────────────
function NetworkAnimation() {
  const nodes = [
    { x: 15, y: 20, size: 8, delay: 0 },
    { x: 50, y: 10, size: 12, delay: 0.3 },
    { x: 85, y: 25, size: 7, delay: 0.6 },
    { x: 25, y: 55, size: 10, delay: 0.9 },
    { x: 70, y: 50, size: 9, delay: 1.2 },
    { x: 40, y: 75, size: 6, delay: 1.5 },
    { x: 80, y: 70, size: 11, delay: 0.4 },
    { x: 10, y: 80, size: 7, delay: 0.8 },
  ]

  const connections = [
    [0, 1], [1, 2], [1, 4], [0, 3], [3, 5],
    [4, 6], [5, 6], [3, 4], [2, 4], [6, 7],
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <style>{`
            @keyframes pulse-line {
              0%, 100% { opacity: 0.08; }
              50% { opacity: 0.25; }
            }
            @keyframes pulse-node {
              0%, 100% { opacity: 0.3; r: var(--r); }
              50% { opacity: 0.7; r: calc(var(--r) * 1.3); }
            }
            @keyframes travel {
              0% { offset-distance: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
          `}</style>
        </defs>
        {connections.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke={C.purple}
            strokeWidth="0.3"
            style={{
              animation: `pulse-line ${2.5 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.size * 0.3}
            fill={C.purple}
            style={{
              animation: `pulse-node ${2 + n.delay}s ease-in-out ${n.delay}s infinite`,
            }}
          />
        ))}
      </svg>
      {/* Gradient overlays for depth */}
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 30% 50%, ${C.purple}18 0%, transparent 60%)` }} />
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 70% 30%, ${C.green}0d 0%, transparent 50%)` }} />
    </div>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function RecruitOSDemoPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.purple }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Network Connections
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden grain"
        style={{ backgroundColor: C.navyDeep, paddingTop: '5rem' }}
      >
        <NetworkAnimation />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 stagger-children">
          {/* Badge */}
          <div
            className="reveal-up inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full text-xs tracking-widest uppercase"
            style={{ backgroundColor: `${C.purple}22`, border: `1px solid ${C.purple}44`, color: C.purpleLight }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.green, display: 'inline-block' }} />
            Specialist Recruitment Agency · Est. 2004
          </div>

          <h1 className="mb-8">
            {['Connecting', 'Talent with', 'Opportunity'].map((line, i) => (
              <span
                key={i}
                className="reveal-clip-up block font-bold leading-[0.9] tracking-tight"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  color: i === 1 ? C.purple : C.white,
                  animationDelay: `${i * 0.12}s`,
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="reveal-up text-lg font-light leading-relaxed max-w-xl mb-12"
            style={{ color: C.slate, animationDelay: '0.4s' }}
          >
            We match exceptional candidates with outstanding companies across 15 industries.
            Permanent. Contract. Executive Search. RPO. Results that matter.
          </p>

          {/* Stats strip */}
          <div
            className="reveal-up flex flex-wrap gap-10 mb-14"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { value: '5,000+', label: 'Placements' },
              { value: '200+', label: 'Client Companies' },
              { value: '15', label: 'Industries' },
              { value: '22yrs', label: 'Experience' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold" style={{ color: C.white }}>{s.value}</div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: C.slate }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
            <a
              href="#employers"
              className="px-8 py-4 text-sm font-semibold tracking-wide rounded transition-all duration-300"
              style={{ backgroundColor: C.purple, color: C.white }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.purpleLight)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.purple)}
            >
              Hire Talent &rarr;
            </a>
            <a
              href="#candidates"
              className="px-8 py-4 text-sm font-semibold tracking-wide rounded border transition-all duration-300"
              style={{ borderColor: `${C.white}33`, color: C.white, backgroundColor: 'transparent' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${C.white}11`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Find a Role &rarr;
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: C.slateDeep }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div style={{ width: 1, height: 40, backgroundColor: C.purple, opacity: 0.4 }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section
        className="py-5 overflow-hidden"
        style={{ backgroundColor: C.purple }}
      >
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10 px-4">
              {['Technology', 'Finance', 'Healthcare', 'Engineering', 'Marketing', 'Legal', 'Property', 'Manufacturing', 'Logistics', 'Energy'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
                  <span className="text-sm tracking-widest uppercase font-light" style={{ color: C.white }}>{item}</span>
                  <span style={{ color: `${C.white}55` }}>&#x2219;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOR EMPLOYERS
          ═══════════════════════════════════════ */}
      <section id="employers" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionNavy}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.purple}>For Employers</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={S.white}>
              Hire Smarter,<br />Hire Faster
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {[
              {
                icon: '👔',
                title: 'Permanent Search',
                desc: 'Full-cycle recruitment for permanent roles at all levels. Typical fill time: 10-14 days.',
                tag: 'Most Popular',
              },
              {
                icon: '⚡',
                title: 'Contract Staffing',
                desc: 'Rapid deployment of contractors and interim professionals. IR35 compliant.',
                tag: null,
              },
              {
                icon: '🏆',
                title: 'Executive Search',
                desc: 'Confidential headhunting for C-suite, VP, and Director-level appointments.',
                tag: 'Premium',
              },
              {
                icon: '🔄',
                title: 'RPO Service',
                desc: 'Embedded recruitment partner managing your entire hiring function end-to-end.',
                tag: null,
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className="reveal-up relative rounded-xl p-7 group cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: `${C.navyDeep}`,
                  border: `1px solid ${C.purple}22`,
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${C.purple}66`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${C.purple}22`)}
              >
                {service.tag && (
                  <span
                    className="absolute top-4 right-4 text-[10px] tracking-widest uppercase px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${C.purple}33`, color: C.purpleLight }}
                  >
                    {service.tag}
                  </span>
                )}
                <div className="text-3xl mb-5">{service.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={S.white}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={S.slate}>{service.desc}</p>
                <div
                  className="mt-6 text-xs tracking-widest uppercase font-medium transition-colors duration-300"
                  style={{ color: C.purple }}
                >
                  Learn More &rarr;
                </div>
              </div>
            ))}
          </div>

          {/* Success metric */}
          <div
            className="reveal-up mt-12 rounded-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8"
            style={{ backgroundColor: `${C.purple}15`, border: `1px solid ${C.purple}22` }}
          >
            {[
              { value: '97%', label: 'Offer Acceptance Rate' },
              { value: '10d', label: 'Avg. Fill Time' },
              { value: '95%', label: 'Client Retention' },
              { value: '£0', label: 'Cost to Candidates' },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={S.purpleLight}>{m.value}</div>
                <div className="text-xs tracking-wide uppercase" style={S.slate}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOR CANDIDATES
          ═══════════════════════════════════════ */}
      <section id="candidates" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: Content */}
            <div className="reveal-left">
              <p className="text-xs tracking-widest uppercase mb-3" style={S.green}>For Candidates</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={S.white}>
                Your Career,<br />Our Priority
              </h2>
              <p className="text-base font-light leading-relaxed mb-10" style={S.slate}>
                Whether you&rsquo;re actively looking or simply curious about what&rsquo;s out there, our specialist consultants have the market knowledge and the connections to open the right doors. Always free for candidates.
              </p>

              <div className="space-y-5">
                {[
                  { title: 'Register Your CV', desc: 'Share your experience and ambitions. We\'ll match you to roles that actually fit.' },
                  { title: 'Browse Live Jobs', desc: 'Hundreds of exclusive roles not advertised anywhere else.' },
                  { title: 'CV & Profile Advice', desc: 'Free CV review and LinkedIn optimisation from our specialists.' },
                  { title: 'Interview Preparation', desc: 'Role-specific prep, salary benchmarking, and post-offer negotiation support.' },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-5 items-start">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: `${C.green}22`, color: C.green }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={S.white}>{item.title}</h4>
                      <p className="text-sm" style={S.slate}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block mt-10 px-8 py-4 text-sm font-semibold tracking-wide rounded transition-all duration-300"
                style={{ backgroundColor: C.green, color: C.white }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Register Now — Free
              </a>
            </div>

            {/* Right: Job board preview cards */}
            <div className="reveal-right space-y-4">
              {[
                { title: 'Senior DevOps Engineer', company: 'FinTech Scale-up', salary: '£90,000–110,000', type: 'Permanent', location: 'London / Remote', hot: true },
                { title: 'Marketing Director', company: 'Global Retailer', salary: '£120,000–140,000', type: 'Permanent', location: 'Manchester', hot: false },
                { title: 'Interim CFO', company: 'PE-Backed SME', salary: '£1,200/day', type: 'Contract', location: 'Birmingham', hot: true },
                { title: 'Clinical Data Manager', company: 'Pharma Group', salary: '£65,000–75,000', type: 'Permanent', location: 'Cambridge', hot: false },
                { title: 'Associate Solicitor — IP', company: 'City Law Firm', salary: '£95,000–115,000', type: 'Permanent', location: 'London', hot: false },
              ].map((job) => (
                <div
                  key={job.title}
                  className="relative rounded-xl p-5 cursor-pointer group transition-all duration-300"
                  style={{ backgroundColor: C.navyMid, border: `1px solid ${C.purple}22` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${C.purple}55`
                    e.currentTarget.style.transform = 'translateX(6px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${C.purple}22`
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  {job.hot && (
                    <span
                      className="absolute top-4 right-4 text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${C.purple}33`, color: C.purpleLight }}
                    >
                      Hot Role
                    </span>
                  )}
                  <h4 className="font-semibold mb-1" style={S.white}>{job.title}</h4>
                  <p className="text-sm mb-3" style={S.slate}>{job.company}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${C.green}15`, color: C.green }}>
                      {job.salary}
                    </span>
                    <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${C.white}0a`, color: C.slate }}>
                      {job.type}
                    </span>
                    <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${C.white}0a`, color: C.slate }}>
                      📍 {job.location}
                    </span>
                  </div>
                </div>
              ))}
              <p className="text-center text-xs tracking-wide" style={S.slate}>
                Showing 5 of 340+ live roles &middot; <a href="#" style={{ color: C.purple }}>View all</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INDUSTRIES
          ═══════════════════════════════════════ */}
      <section id="industries" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionNavy}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.purple}>Our Specialisms</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={S.white}>15 Industries,<br />One Expert Team</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
            {[
              { name: 'Technology', count: '1,200+ placements', icon: '💻' },
              { name: 'Finance', count: '900+ placements', icon: '📊' },
              { name: 'Healthcare', count: '650+ placements', icon: '🏥' },
              { name: 'Engineering', count: '700+ placements', icon: '⚙️' },
              { name: 'Marketing', count: '480+ placements', icon: '📣' },
              { name: 'Legal', count: '350+ placements', icon: '⚖️' },
            ].map((ind, i) => (
              <div
                key={ind.name}
                className="reveal-up rounded-xl p-6 text-center cursor-pointer group transition-all duration-300"
                style={{
                  backgroundColor: C.navyDeep,
                  border: `1px solid ${C.purple}22`,
                  animationDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${C.purple}15`
                  e.currentTarget.style.borderColor = `${C.purple}55`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = C.navyDeep
                  e.currentTarget.style.borderColor = `${C.purple}22`
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="text-sm font-bold mb-2" style={S.white}>{ind.name}</h3>
                <p className="text-xs leading-tight" style={S.slate}>{ind.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.purple}>How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={S.white}>From Brief to Hire</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative stagger-children">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
              style={{ backgroundColor: `${C.purple}33` }}
            />
            {[
              { step: '01', title: 'Brief', desc: 'We take a detailed brief — role, culture, must-haves, and deal-breakers.' },
              { step: '02', title: 'Search', desc: 'Active market mapping across our 50,000+ candidate network and database.' },
              { step: '03', title: 'Screen', desc: 'Rigorous competency-based interviews. Only the best 3-5 candidates presented.' },
              { step: '04', title: 'Place', desc: 'Offer management, start-date coordination, and 90-day aftercare guarantee.' },
            ].map((s, i) => (
              <div
                key={s.step}
                className="reveal-up relative text-center pt-0"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                  style={{ backgroundColor: C.navy, border: `2px solid ${C.purple}55` }}
                >
                  <span className="text-2xl font-bold" style={S.purple}>{s.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={S.white}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={S.slate}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden grain" style={S.sectionNavy}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-widest uppercase mb-3" style={S.purple}>Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={S.white}>What Our Clients<br />& Candidates Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.purple}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={S.white}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="RecruitOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / BOOKING
          ═══════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16 grain overflow-hidden" style={S.sectionNavy}>
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: C.purple, filter: 'blur(100px)' }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.purple}>Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={S.white}>
              Book a Free<br />Consultation
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.slate}>
              Whether you&rsquo;re looking to fill a role or find one, the first conversation is always on us. No obligation. Just an honest conversation about what&rsquo;s possible.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Phone', value: '+44 20 3456 7890' },
                { label: 'Email', value: 'hello@talentbridge.com' },
                { label: 'Address', value: '15 Bishopsgate, London EC2N 3AR' },
                { label: 'Hours', value: 'Mon–Fri 08:00–18:00' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div
                    className="w-1 min-h-[32px] rounded-full flex-shrink-0"
                    style={{ backgroundColor: `${C.purple}55` }}
                  />
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-0.5" style={S.purple}>{info.label}</p>
                    <p className="text-sm font-light" style={S.mist}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 128, label: 'consultations booked this month' }}
              vertical="recruitmentos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 800)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442034567890" message="Hi! I'd like to discuss a recruitment need with TalentBridge." vertical="recruitmentos" />

      <style>{`
        .scroll-progress { position: fixed; top: 0; left: 0; height: 3px; z-index: 9999; width: 0; transition: width 0.1s; }
      `}</style>
    </div>
  )
}

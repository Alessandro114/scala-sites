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
  navy: '#0f172a',
  navyMid: '#1a2438',
  navyLight: '#243049',
  gold: '#c9a84c',
  goldLight: '#d4b86a',
  goldDim: '#c9a84c22',
  green: '#16a34a',
  greenDim: '#16a34a22',
  white: '#f8fafc',
  mist: '#e2e8f0',
  slate: '#94a3b8',
  slateDeep: '#64748b',
} as const

const S = {
  pageBg: { backgroundColor: C.navy, color: C.white } as React.CSSProperties,
  sectionNavy: { backgroundColor: C.navy } as React.CSSProperties,
  sectionMid: { backgroundColor: C.navyMid } as React.CSSProperties,
  sectionLight: { backgroundColor: C.navyLight } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  green: { color: C.green } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  mist: { color: C.mist } as React.CSSProperties,
  slate: { color: C.slate } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Meridian Wealth Advisors',
  description: 'Independent financial advisors securing your financial future',
  url: 'https://meridianwealth.example.com',
  locale: 'en',
  vertical: 'financeos',
  theme: 'authority',
  branding: { primaryColor: C.navy, accentColor: C.gold },
  contact: {
    phone: '+44 20 7654 3210',
    email: 'hello@meridianwealth.com',
    whatsapp: '+442076543210',
    address: '1 Threadneedle Street, London EC2R 8AY',
    coordinates: { lat: 51.5139, lng: -0.0880 },
  },
  social: {
    instagram: 'meridianwealth',
    facebook: 'https://linkedin.com/company/meridianwealth',
  },
  seo: {
    title: 'Meridian Wealth — Independent Financial Advisors London',
    description: 'FCA-regulated independent financial advisors. £250M under management. Retirement, investments, tax planning.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Richard B.', rating: 5, text: 'Meridian helped us plan our retirement with absolute clarity. For the first time in 20 years, I feel genuinely confident about the future. Their fee-based approach — no hidden commissions — made all the difference.', date: '2026-07-10', source: 'google', verified: true },
  { id: '2', author: 'Catherine M.', rating: 5, text: 'Following a divorce, I needed to rebuild my financial life from scratch. The team at Meridian were compassionate, thorough, and brilliant. My portfolio has grown 18% in two years.', date: '2026-07-18', source: 'google', verified: true },
  { id: '3', author: 'James T.', rating: 5, text: 'The estate planning advice saved my family a significant inheritance tax bill. Their Chartered status and independent standing means they genuinely work for us, not a product provider.', date: '2026-07-25', source: 'trustpilot', verified: true },
  { id: '4', author: 'Priya S.', rating: 5, text: 'I came to Meridian with a complex situation — a SIPP, two final salary pensions, and a rental property. They mapped the whole picture and created a clear, tax-efficient strategy. Outstanding.', date: '2026-08-01', source: 'google', verified: true },
  { id: '5', author: 'Thomas W.', rating: 5, text: 'Our mortgage was in a terrible state. They renegotiated our rate, restructured our protection, and we\'re now saving £400 a month. The whole process took three weeks.', date: '2026-08-03', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Are you independent or tied to specific providers?', answer: 'Meridian Wealth is fully independent. We are not tied to any product provider, fund house, or insurer. We analyse the whole of market to recommend what is genuinely best for you. We are FCA-regulated (Ref: 789456) and hold Chartered Financial Planner status.' },
  { question: 'How do you charge for your advice?', answer: 'We are a fee-based firm. All costs are disclosed upfront in a Client Engagement Letter before any work begins. We charge an initial planning fee (typically 1-2% of investable assets, capped) and an ongoing advisory fee (0.5-0.75% per annum). No commissions, ever.' },
  { question: 'What is the minimum investable asset level?', answer: 'Our full financial planning service requires a minimum of £150,000 in investable assets. For mortgage and protection advice, there is no minimum. We have a referral relationship for clients below this threshold.' },
  { question: 'How do I know my money is safe?', answer: 'We never hold client money directly. All investments are held in your name with FCA-regulated custodians (Quilter, Transact, or similar). You retain full ownership. All client money is covered by the FSCS up to £85,000 per institution.' },
  { question: 'How often will you review my plan?', answer: 'All clients receive a minimum of an annual review meeting, comprehensive written report, and portfolio rebalancing. Major life events (redundancy, inheritance, divorce, retirement) trigger an immediate ad-hoc review at no extra cost.' },
  { question: 'Can you advise on pension transfers?', answer: 'Yes. We are authorised to advise on all forms of pension transfer, including Defined Benefit (final salary) transfers. DB transfers are complex and we always provide a full Transfer Value Analysis. We will only recommend a transfer when it is clearly in your best interest.' },
  { question: 'What is the first step?', answer: 'Book a free 45-minute introductory call. No paperwork, no commitment. We will discuss your current situation, goals, and whether Meridian is the right fit. If we are, we will outline the scope of work and costs before you decide anything.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '10:00', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '11:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '14:00', available: true, spotsLeft: 2 },
  { id: '5', date: today, time: '15:00', available: true, spotsLeft: 5 },
  { id: '6', date: today, time: '16:00', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Meridian Wealth Advisors',
  description: 'FCA-regulated independent financial advisors. Retirement planning, investments, tax planning, and estate planning.',
  url: 'https://meridianwealth.example.com',
  telephone: '+44 20 7654 3210',
  email: 'hello@meridianwealth.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1 Threadneedle Street',
    addressLocality: 'London',
    postalCode: 'EC2R 8AY',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5139, longitude: -0.0880 },
  openingHours: 'Mo-Fr 08:30-17:30',
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
// GRAPH LINE SVG
// ─────────────────────────────────────────────
function WealthGraphLine() {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      className="absolute bottom-0 left-0 right-0 w-full h-auto pointer-events-none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.gold} stopOpacity="0.15" />
          <stop offset="100%" stopColor={C.gold} stopOpacity="0" />
        </linearGradient>
        <style>{`
          @keyframes draw-line {
            from { stroke-dashoffset: 800; }
            to { stroke-dashoffset: 0; }
          }
          .wealth-line {
            stroke-dasharray: 800;
            stroke-dashoffset: 800;
            animation: draw-line 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
          }
        `}</style>
      </defs>
      {/* Fill area under line */}
      <path
        d="M0,110 L40,100 L80,90 L120,75 L160,65 L200,52 L240,42 L280,32 L320,22 L360,14 L400,8 L400,120 L0,120 Z"
        fill="url(#graphGrad)"
      />
      {/* The line itself */}
      <path
        className="wealth-line"
        d="M0,110 L40,100 L80,90 L120,75 L160,65 L200,52 L240,42 L280,32 L320,22 L360,14 L400,8"
        stroke={C.gold}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dots on key points */}
      {[[200, 52], [320, 22], [400, 8]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={C.gold} opacity="0.8" />
      ))}
    </svg>
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
        backgroundColor: `${C.navy}f0`,
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.gold}22`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold tracking-wider" style={{ color: C.white }}>Meridian Wealth</span>
          <span className="text-[10px] tracking-widest uppercase" style={{ color: C.gold }}>Independent Financial Advisors</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Team', 'Resources', 'About'].map((item) => (
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
            href="#consultation"
            className="px-6 py-2.5 text-xs tracking-widest uppercase font-semibold border transition-all duration-300 rounded"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.gold
              e.currentTarget.style.color = C.navy
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.gold
            }}
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function FinanceOSDemoPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Wealth Authority
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden grain"
        style={{ backgroundColor: C.navy, paddingTop: '5rem' }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${C.gold}12 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '10%',
            left: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${C.green}0a 0%, transparent 70%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 relative z-10 stagger-children">
          {/* Trust badges */}
          <div className="reveal-up flex flex-wrap gap-3 mb-10">
            {[
              { label: 'FCA Regulated', icon: '🛡' },
              { label: 'Chartered Financial Planner', icon: '🏅' },
              { label: 'Whole of Market', icon: '📊' },
              { label: 'Fee-Based · No Commission', icon: '✓' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                style={{
                  backgroundColor: `${C.gold}15`,
                  border: `1px solid ${C.gold}33`,
                  color: C.gold,
                }}
              >
                <span>{badge.icon}</span>
                <span className="tracking-wide">{badge.label}</span>
              </div>
            ))}
          </div>

          <h1 className="mb-8">
            {['Your Financial', 'Future,', 'Secured.'].map((line, i) => (
              <span
                key={i}
                className="reveal-clip-up block leading-[0.95] tracking-tight"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  fontWeight: i === 0 ? 300 : i === 1 ? 700 : 300,
                  color: i === 2 ? C.gold : C.white,
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
            Independent, fee-based financial planning with no conflicts of interest. We work exclusively for you — not for product providers. FCA-regulated, Chartered, and trusted by 500+ families.
          </p>

          {/* Key stats */}
          <div className="reveal-up flex flex-wrap gap-10 mb-14" style={{ animationDelay: '0.5s' }}>
            {[
              { value: '£250M', label: 'Under Management', col: C.gold },
              { value: '30yrs', label: 'Combined Experience', col: C.white },
              { value: '500+', label: 'Client Families', col: C.white },
              { value: '98%', label: 'Client Retention', col: C.green },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: s.col }}>{s.value}</div>
                <div className="text-xs tracking-widest uppercase" style={S.slate}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
            <a
              href="#consultation"
              className="px-8 py-4 text-sm font-semibold tracking-wide rounded border transition-all duration-300"
              style={{ borderColor: C.gold, color: C.navy, backgroundColor: C.gold }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.goldLight
                e.currentTarget.style.borderColor = C.goldLight
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.gold
                e.currentTarget.style.borderColor = C.gold
              }}
            >
              Book Free Consultation &rarr;
            </a>
            <a
              href="#services"
              className="px-8 py-4 text-sm font-semibold tracking-wide rounded border transition-all duration-300"
              style={{ borderColor: `${C.white}33`, color: C.white }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${C.white}0f`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Animated graph at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
          <WealthGraphLine />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionMid}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.gold}>What We Advise On</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={S.white}>Comprehensive<br />Financial Planning</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {[
              { icon: '🏖', title: 'Retirement Planning', desc: 'Pension consolidation, drawdown strategy, state pension optimisation, and retirement income planning. When you want to retire, and what it will look like.', col: C.gold },
              { icon: '📈', title: 'Investment Management', desc: 'Bespoke portfolios aligned to your risk profile, time horizon, and values. ISA, SIPP, GIA, and offshore bonds. ESG and sustainable options.', col: C.green },
              { icon: '🏛', title: 'Tax Planning', desc: 'Capital gains management, inheritance tax mitigation, trust planning, and annual allowance maximisation. Fully coordinated with your accountant.', col: C.gold },
              { icon: '🏠', title: 'Mortgages & Equity Release', desc: 'Whole-of-market mortgage access. Remortgage, first purchase, buy-to-let, and equity release for over-55s.', col: C.green },
              { icon: '🛡', title: 'Protection & Insurance', desc: 'Life assurance, critical illness, income protection, and business protection. Ensuring the unexpected doesn\'t derail everything.', col: C.gold },
              { icon: '📜', title: 'Estate & Legacy Planning', desc: 'Wills, Lasting Power of Attorney, trust structures, and IHT-efficient gifting. Protecting what you\'ve built for the people you love.', col: C.green },
            ].map((service, i) => (
              <div
                key={service.title}
                className="reveal-up rounded-xl p-8 group cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: C.navy,
                  border: `1px solid ${service.col}22`,
                  animationDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${service.col}66`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${service.col}22`)}
              >
                <div className="text-3xl mb-5">{service.icon}</div>
                <div className="h-px w-8 mb-5" style={{ backgroundColor: service.col }} />
                <h3 className="text-base font-bold mb-3" style={S.white}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={S.slate}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW WE CHARGE
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionNavy}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.gold}>Transparent Fees</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={S.white}>No Commissions.<br />No Conflicts.</h2>
            <p className="text-base font-light leading-relaxed max-w-2xl mx-auto" style={S.slate}>
              We are paid by you, not by product providers. This means every recommendation we make is in your interest, not influenced by who pays us more.
            </p>
          </div>

          <div className="reveal-up grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { phase: 'Initial Planning', fee: '1–2% of assets', note: 'Capped at £5,000. Includes full financial plan, strategy document, and all recommendations.', icon: '📋' },
              { phase: 'Ongoing Advisory', fee: '0.5–0.75% p.a.', note: 'Annual review, quarterly reporting, rebalancing, and unlimited calls/emails throughout the year.', icon: '🔄' },
              { phase: 'Mortgage Advice', fee: 'Fixed £995', note: 'Flat fee for whole-of-market mortgage search, application, and completion support. No referral fees.', icon: '🏠' },
            ].map((tier) => (
              <div
                key={tier.phase}
                className="rounded-xl p-7"
                style={{ backgroundColor: C.navyMid, border: `1px solid ${C.gold}22` }}
              >
                <div className="text-2xl mb-4">{tier.icon}</div>
                <div className="text-xs tracking-widest uppercase mb-2" style={S.gold}>{tier.phase}</div>
                <div className="text-2xl font-bold mb-3" style={S.white}>{tier.fee}</div>
                <p className="text-sm leading-relaxed" style={S.slate}>{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CLIENT JOURNEY
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionMid}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.gold}>Getting Started</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={S.white}>Your Journey with Meridian</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative stagger-children">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px" style={{ backgroundColor: `${C.gold}33` }} />
            {[
              { step: '01', title: 'Free Call', desc: 'A no-obligation 45-minute introduction. We listen to your situation, answer your questions, and explain if we\'re a good fit.' },
              { step: '02', title: 'Discovery', desc: 'Full fact-find meeting. We gather the complete picture — assets, income, goals, concerns, tax position, and risk appetite.' },
              { step: '03', title: 'Your Plan', desc: 'We build and present your bespoke financial plan. Clear recommendations, projected outcomes, and a transparent cost schedule.' },
              { step: '04', title: 'Ongoing', desc: 'Annual reviews, quarterly reports, and a direct line to your adviser. Your plan adapts as your life evolves.' },
            ].map((s, i) => (
              <div key={s.step} className="reveal-up text-center relative" style={{ animationDelay: `${i * 0.12}s` }}>
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                  style={{ backgroundColor: C.navy, border: `2px solid ${C.gold}55` }}
                >
                  <span className="text-xl font-bold" style={S.gold}>{s.step}</span>
                </div>
                <h3 className="text-base font-bold mb-3" style={S.white}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={S.slate}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEAM
          ═══════════════════════════════════════ */}
      <section id="team" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionNavy}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.gold}>The Team</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={S.white}>Meet Your Advisers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                name: 'Jonathan Marsh',
                role: 'Chartered Financial Planner · Partner',
                bio: '22 years advising high-net-worth families on estate planning, pension drawdown, and investment management. Previously Head of Wealth at Investec.',
                creds: ['CFP', 'CFA', 'STEP Affiliate'],
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
              },
              {
                name: 'Sarah Chen',
                role: 'Senior Financial Adviser · Pensions Specialist',
                bio: 'Specialist in complex pension cases, DB transfers, and self-employed retirement planning. 15 years experience, originally at Schroders.',
                creds: ['DipPFS', 'AF3 (Pension Transfer)', 'CII Member'],
                img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
              },
              {
                name: 'Daniel Okafor',
                role: 'Mortgage & Protection Adviser',
                bio: 'Whole-of-market access to 90+ lenders. Specialist in complex income scenarios, contractors, and later-life mortgages. 12 years in financial services.',
                creds: ['CeMAP', 'CeRER', 'DipFA'],
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
              },
            ].map((member, i) => (
              <div
                key={member.name}
                className="reveal-up rounded-2xl overflow-hidden group"
                style={{
                  backgroundColor: C.navyMid,
                  border: `1px solid ${C.gold}22`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="h-56 overflow-hidden">
                  <Image src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" width={1200} height={800} />
                </div>
                <div className="p-7">
                  <h3 className="text-base font-bold mb-1" style={S.white}>{member.name}</h3>
                  <p className="text-xs tracking-wide mb-4" style={S.gold}>{member.role}</p>
                  <p className="text-sm leading-relaxed mb-5" style={S.slate}>{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.creds.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] tracking-widest uppercase px-2 py-1 rounded"
                        style={{ backgroundColor: `${C.gold}15`, color: C.gold }}
                      >
                        {c}
                      </span>
                    ))}
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
      <section className="py-24 md:py-32 overflow-hidden grain" style={S.sectionMid}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-widest uppercase mb-3" style={S.gold}>Client Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={S.white}>Trusted by 500+<br />Client Families</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionNavy}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={S.gold}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={S.white}>Your Questions,<br />Answered Honestly</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="FinanceOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FREE CONSULTATION BOOKING
          ═══════════════════════════════════════ */}
      <section id="consultation" className="py-24 md:py-32 px-6 md:px-16 grain overflow-hidden" style={S.sectionMid}>
        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ backgroundColor: C.gold, filter: 'blur(80px)' }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-widest uppercase mb-4" style={S.gold}>Start Here</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={S.white}>
              Book Your Free<br />45-Minute Call
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.slate}>
              No commitment, no paperwork, no pressure. Just an honest conversation about your financial situation and whether we can help.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Phone', value: '+44 20 7654 3210' },
                { label: 'Email', value: 'hello@meridianwealth.com' },
                { label: 'Office', value: '1 Threadneedle Street, London EC2R 8AY' },
                { label: 'Hours', value: 'Mon–Fri 08:30–17:30' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-px min-h-[32px] flex-shrink-0" style={{ backgroundColor: `${C.gold}66` }} />
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-0.5" style={S.gold}>{info.label}</p>
                    <p className="text-sm font-light" style={S.mist}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-xl" style={{ backgroundColor: `${C.green}15`, border: `1px solid ${C.green}33` }}>
              <p className="text-sm" style={S.green}>
                <strong>FCA Regulated:</strong> Ref 789456 · Financial Conduct Authority · Chartered Financial Planner status · FSCS protected up to £85,000
              </p>
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 62, label: 'consultations booked this month' }}
              vertical="financeos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 800)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442076543210" message="Hi! I'd like to book a free consultation with Meridian Wealth." vertical="financeos" />
    </div>
  )
}

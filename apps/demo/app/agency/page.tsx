'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { TypewriterHero } from '@scala-sites/core/components/typewriter-hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { PortfolioShowcase } from '@scala-sites/studioos/components/portfolio-showcase'
import { ServicePackages } from '@scala-sites/studioos/components/service-packages'
import { ProjectInquiry } from '@scala-sites/studioos/components/project-inquiry'
import type { SiteConfig, Review, FAQItem } from '@scala-sites/core/lib/types'

// --- MOCK DATA ---

const siteConfig: SiteConfig = {
  name: 'Orbit Digital',
  description: 'Performance Marketing & Brand Strategy — Soho, London',
  url: 'https://orbitdigital.example.com',
  locale: 'en',
  vertical: 'studioos',
  theme: 'bold',
  branding: {
    primaryColor: '#0f0f0f',
    accentColor: '#6c63ff',
  },
  contact: {
    phone: '+44 20 7946 0382',
    email: 'hello@orbitdigital.example.com',
    whatsapp: '+442079460382',
    address: '14 Ingestre Place, Soho, London W1F 0JL',
    coordinates: { lat: 51.5133, lng: -0.1367 },
  },
  social: {
    instagram: 'orbitdigital.agency',
    facebook: 'https://facebook.com/orbitdigital',
  },
  seo: {
    title: 'Orbit Digital | Performance Marketing & Brand Strategy, London',
    description:
      'Award-winning digital marketing agency in Soho. Paid media, SEO, brand strategy, and creative production for ambitious brands. Data-driven, creatively led.',
  },
}

const caseStudies = [
  {
    id: '1',
    title: '+340% ROAS in 90 Days',
    client: 'DTC Fashion Brand',
    category: 'Paid Media',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'Complete overhaul of Meta and Google Shopping campaigns for a UK fashion brand. Rebuilt campaign structure, creative strategy, and audience segmentation. ROAS 1.2x → 4.1x in 12 weeks.',
    year: 2026,
  },
  {
    id: '2',
    title: '£0 to £2.4M ARR — 18 months',
    client: 'B2B SaaS Start-Up',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Full brand identity, go-to-market strategy, and demand generation for a fintech SaaS. Built LinkedIn pipeline that generated 68% of the first-year ARR.',
    year: 2025,
  },
  {
    id: '3',
    title: 'Organic Traffic +890%',
    client: 'E-Commerce Health Brand',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
    description: 'Technical SEO audit and 12-month content programme for a health supplements brand. 890% organic traffic growth. 14 page-one rankings for competitive transactional terms.',
    year: 2025,
  },
  {
    id: '4',
    title: '68% Email Open Rate',
    client: 'Luxury Interiors Brand',
    category: 'Email & CRM',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    description: 'CRM audit, audience segmentation, and full lifecycle email programme. Average open rate raised from 18% to 68%. Revenue per subscriber increased 4.2x.',
    year: 2026,
  },
  {
    id: '5',
    title: 'Brand Launch — 280K UGV Month 1',
    client: 'Consumer App',
    category: 'Creative & Social',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    description: 'Full creative production and TikTok/Instagram launch strategy for a fitness app. 280,000 organic video views in month one. 14,000 app downloads without paid spend.',
    year: 2026,
  },
  {
    id: '6',
    title: 'CPL Reduced by 62%',
    client: 'Education Group',
    category: 'Paid Media',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
    description: 'Google and Meta lead generation rebuild for a multi-campus education provider. Cost per lead reduced from £84 to £32. Volume tripled quarter-on-quarter.',
    year: 2025,
  },
]

const servicePackages = [
  {
    id: '1',
    name: 'Brand Sprint',
    description: 'A focused 2-week engagement to define or sharpen your brand positioning, messaging, and visual identity.',
    deliverables: [
      'Brand audit & competitive analysis',
      'Positioning statement & messaging framework',
      'Visual identity refinements (logo, palette, type)',
      'Brand guidelines PDF',
      'Copy tone-of-voice guide',
    ],
    timeline: '2 weeks',
    price: 4500,
    currency: 'GBP',
  },
  {
    id: '2',
    name: 'Performance Growth Retainer',
    description: 'Full-service paid media management across Meta, Google, and TikTok — with monthly creative, reporting, and strategy.',
    deliverables: [
      'Account audit & strategy workshop',
      'Monthly paid media management (Meta + Google)',
      '4 ad creative sets per month',
      'Weekly performance reports',
      'Monthly strategy review call',
      'CRO recommendations',
    ],
    timeline: '3-month minimum',
    price: 3800,
    currency: 'GBP',
    popular: true,
  },
  {
    id: '3',
    name: 'Full-Stack Growth Programme',
    description: 'Our most comprehensive engagement: brand, paid media, SEO, email, and creative in one integrated programme.',
    deliverables: [
      'Brand identity & positioning',
      'Paid media across all channels',
      'Technical SEO & content programme',
      'Email & CRM lifecycle setup',
      'Monthly creative production',
      'Dedicated account team',
      'Quarterly business reviews',
    ],
    timeline: '6-month minimum',
    price: 8500,
    currency: 'GBP',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Tom V., Founder',
    rating: 5,
    text: 'Orbit took our Meta ROAS from 1.1x to 4.3x in three months. What separates them is the creative quality — they understand that great paid media is 80% creative, 20% targeting. Data-driven but genuinely creative.',
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Sarah M., CMO',
    rating: 5,
    text: 'We engaged Orbit for a brand refresh and full-stack growth programme. Nine months later we are at 4x the ARR we projected. The team are senior, strategic, and completely bought in to our success.',
    date: '2026-07-10',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'James K., CEO',
    rating: 5,
    text: 'The SEO programme Orbit built for us is still compounding 18 months later. Organic now drives 60% of our pipeline. The ROI on this engagement has been extraordinary.',
    date: '2026-06-25',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Amara D., Head of Marketing',
    rating: 5,
    text: 'Working with Orbit feels like having a senior in-house team — without the overhead. Monthly strategy reviews are genuinely strategic, not reporting theatre. Absolutely recommended.',
    date: '2026-06-08',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'What is your minimum engagement length?',
    answer: 'Our Performance Growth Retainer has a 3-month minimum. Our Full-Stack Growth Programme requires a 6-month minimum. Project-based work like Brand Sprints has no minimum. Most clients remain with us for 12–24+ months once results compound.',
  },
  {
    question: 'Do you work with early-stage companies?',
    answer: 'Yes, provided the brand has product-market fit and realistic growth ambitions. We do not take on pre-revenue businesses unless there is clear evidence of traction. We are most effective when there is an existing base to optimise and scale.',
  },
  {
    question: 'Are ad spend budgets included in your fees?',
    answer: 'No. Media budgets are managed by the client and passed directly to platforms. Our fee covers strategy, management, creative, and reporting. We are transparent about recommended budgets at the proposal stage.',
  },
  {
    question: 'How do you report on performance?',
    answer: 'All clients receive a live dashboard (Looker Studio), weekly performance summaries, and a monthly strategy review call with your account lead. We report on business metrics — revenue, CPL, ROAS — not vanity metrics.',
  },
  {
    question: 'Do you handle creative production in-house?',
    answer: 'Yes. We have an in-house creative team covering copywriting, design, video editing, and motion. Ad creatives, landing pages, and email templates are all produced internally. No briefing external freelancers.',
  },
  {
    question: 'Can you work with our existing tech stack?',
    answer: 'Yes. We integrate with all major CRMs (HubSpot, Salesforce, Klaviyo), analytics tools (GA4, Segment), and ad platforms. We will audit your stack at onboarding and recommend improvements without forcing proprietary tools.',
  },
]

// --- NAV ---

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#a855f7] flex items-center justify-center">
            <span className="text-white font-black text-xs">OD</span>
          </div>
          <span className="text-white font-bold tracking-wide">Orbit Digital</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Work', href: '#portfolio' },
            { label: 'Services', href: '#services' },
            { label: 'Team', href: '#team' },
            { label: 'Get a Brief', href: '#brief' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={
                label === 'Get a Brief'
                  ? 'px-5 py-2.5 bg-gradient-to-r from-[#6c63ff] to-[#a855f7] text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity'
                  : 'text-white/60 hover:text-white text-sm font-medium transition-colors'
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// --- METRICS TICKER ---

function MetricsTicker() {
  const metrics = [
    { value: '+340%', label: 'ROAS increase' },
    { value: '£2.4M', label: 'ARR generated' },
    { value: '+890%', label: 'Organic traffic' },
    { value: '68%', label: 'Email open rate' },
    { value: '−62%', label: 'CPL reduction' },
    { value: '280K', label: 'Organic views M1' },
  ]
  return (
    <div className="bg-[#6c63ff] py-3 px-4 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 flex-nowrap whitespace-nowrap">
        {metrics.map(({ value, label }) => (
          <span key={label} className="text-white text-xs flex items-center gap-2">
            <span className="font-black text-sm">{value}</span>
            <span className="text-white/60">{label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// --- STATS ---

function StatsSection() {
  const stats = [
    { value: '120+', label: 'Brands Scaled' },
    { value: '£180M+', label: 'Media Managed' },
    { value: '4.8★', label: 'Google Rating' },
    { value: '94%', label: 'Client Retention' },
  ]
  return (
    <section className="bg-[#111111] py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-4xl font-black mb-1 bg-gradient-to-r from-[#6c63ff] to-[#a855f7] bg-clip-text text-transparent">
              {value}
            </p>
            <p className="text-white/40 text-xs uppercase tracking-widest">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// --- SERVICES GRID ---

function ServicesGrid() {
  const services = [
    {
      icon: '◆',
      title: 'Paid Media',
      desc: 'Meta, Google, TikTok, LinkedIn. Full-funnel campaign management from creative to conversion.',
    },
    {
      icon: '◉',
      title: 'Brand Strategy',
      desc: 'Positioning, messaging frameworks, visual identity. Building brands that attract rather than interrupt.',
    },
    {
      icon: '◈',
      title: 'SEO & Content',
      desc: 'Technical SEO, programmatic content, and link acquisition. Organic that compounds for years.',
    },
    {
      icon: '◑',
      title: 'Email & CRM',
      desc: 'Lifecycle automation, segmentation, and deliverability. Revenue you own, not rent.',
    },
    {
      icon: '▲',
      title: 'Creative Production',
      desc: 'Ad creatives, landing pages, video, motion. In-house team, no outsourcing.',
    },
    {
      icon: '◎',
      title: 'Analytics & CRO',
      desc: 'GA4 implementation, attribution modelling, and continuous conversion rate optimisation.',
    },
  ]
  return (
    <section id="services-grid" className="bg-[#0f0f0f] py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6c63ff] text-xs tracking-[0.3em] uppercase mb-3 text-center">What We Do</p>
        <h2 className="text-white text-3xl font-bold text-center mb-16">Full-stack growth, nothing outsourced.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-7 border border-white/10 hover:border-[#6c63ff]/50 transition-colors group"
            >
              <span className="text-[#6c63ff] text-2xl mb-4 block">{icon}</span>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#6c63ff] transition-colors">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- TEAM SECTION ---

function TeamSection() {
  const team = [
    {
      name: 'Oliver Chase',
      role: 'Founder & Strategy Director',
      background: '14 years · ex-WPP, Ogilvy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Zara Nkosi',
      role: 'Head of Paid Media',
      background: '9 years · ex-GroupM',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    },
    {
      name: 'Marcus Ihejirika',
      role: 'Creative Director',
      background: '11 years · ex-R/GA, BBDO',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop',
    },
    {
      name: 'Lena Bauer',
      role: 'SEO & Content Lead',
      background: '8 years · ex-Moz, Conductor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
  ]
  return (
    <section id="team" className="bg-[#111111] py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6c63ff] text-xs tracking-[0.3em] uppercase mb-3 text-center">The Team</p>
        <h2 className="text-white text-3xl font-bold text-center mb-4">Senior people. No juniors on your account.</h2>
        <p className="text-white/40 text-sm text-center mb-16 max-w-lg mx-auto">
          Every Orbit client is managed by a senior team with a minimum of 8 years experience. We do not use your account to train graduates.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map(({ name, role, background, image }) => (
            <div key={name} className="group text-center">
              <div className="aspect-square overflow-hidden mb-4 relative">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6c63ff] transition-colors" />
              </div>
              <p className="text-white font-semibold text-sm">{name}</p>
              <p className="text-[#6c63ff] text-xs mt-0.5">{role}</p>
              <p className="text-white/30 text-[10px] tracking-wide mt-1">{background}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- CLIENT LOGOS ---

function ClientLogos() {
  const clients = ['Fintech Co.', 'FMCG Brand', 'DTC Fashion', 'SaaS Platform', 'Health Brand', 'Education Group', 'Luxury Retail', 'Consumer App']
  return (
    <section className="bg-[#0f0f0f] py-16 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-white/20 text-xs tracking-[0.3em] uppercase text-center mb-10">Trusted by ambitious brands</p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
          {clients.map(client => (
            <div key={client} className="text-center">
              <div className="h-8 bg-white/5 rounded flex items-center justify-center px-2">
                <span className="text-white/20 text-[9px] font-bold tracking-widest uppercase">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- PAGE ---

export default function AgencyDemo() {
  const theme = createCustomTheme('bold', {
    primary: '#0f0f0f',
    primaryHover: '#1a1a1a',
    accent: '#6c63ff',
    background: '#0f0f0f',
    surface: '#111111',
    secondary: '#161616',
    text: '#ffffff',
    textMuted: '#9ca3af',
    border: '#1f1f1f',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties} className="bg-[#0f0f0f]">
      <Navbar />

      {/* Hero */}
      <TypewriterHero
        staticText="We deliver"
        rotatingWords={['brands', 'growth', 'revenue', 'market share']}
        subtitle="Orbit Digital — performance marketing and brand strategy for ambitious companies. Data-driven, creatively led, Soho, London."
        ctaPrimary={{ label: 'See Our Work', href: '#portfolio' }}
        backgroundColor="#0f0f0f"
        textColor="#ffffff"
      />

      {/* Metrics ticker */}
      <MetricsTicker />

      {/* Stats */}
      <StatsSection />

      {/* Case Studies */}
      <div id="portfolio" className="bg-[#0f0f0f]">
        <PortfolioShowcase
          projects={caseStudies}
          title="Case Studies"
          subtitle="Real results for real clients. Numbers, not adjectives."
        />
      </div>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Packages */}
      <div id="services" className="bg-[#111111]">
        <ServicePackages
          packages={servicePackages}
          title="Engagements"
          subtitle="Transparent scopes and pricing — no surprises, no lock-in beyond your agreed term"
          onSelect={pkg => console.log('Selected', pkg.name)}
        />
      </div>

      {/* Client Logos */}
      <ClientLogos />

      {/* Team */}
      <TeamSection />

      {/* Brief Submission */}
      <div id="brief" className="bg-[#0f0f0f]">
        <ProjectInquiry
          projectTypes={['Paid Media Management', 'Brand Strategy & Identity', 'SEO & Content Programme', 'Email & CRM Setup', 'Full-Stack Growth Retainer', 'Creative Production', 'Analytics & CRO Audit']}
          budgetRanges={['£1k–£3k/mo', '£3k–£8k/mo', '£8k–£20k/mo', '£20k+/mo', 'Project-based', 'To be discussed']}
          onSubmit={async (data) => {
            await new Promise(resolve => setTimeout(resolve, 800))
            console.log('Brief submitted', data)
          }}
          title="Submit a Brief"
          subtitle="Tell us about your brand and growth goals. We respond within one working day with an honest assessment."
        />
      </div>

      {/* Reviews */}
      <div className="bg-[#111111]">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div className="bg-[#0f0f0f]">
        <FAQAccordion items={faqs} locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="442079460382"
        message="Hi Orbit Digital — I would like to discuss a growth project for our brand."
      />
    </div>
  )
}

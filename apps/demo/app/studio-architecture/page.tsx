'use client'

import { useState, useEffect } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
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
  name: 'Atelier One',
  description: 'Architecture & Interior Design — Clerkenwell, London',
  url: 'https://atelierone.example.com',
  locale: 'en',
  vertical: 'studioos',
  theme: 'minimal',
  branding: {
    primaryColor: '#2c2c2c',
    accentColor: '#b8a898',
  },
  contact: {
    phone: '+44 20 7946 0174',
    email: 'studio@atelierone.example.com',
    whatsapp: '+442079460174',
    address: '22 St John Street, Clerkenwell, London EC1M 4AY',
    coordinates: { lat: 51.5225, lng: -0.1016 },
  },
  social: {
    instagram: 'atelierone.london',
    facebook: 'https://facebook.com/atelieronelondon',
  },
  seo: {
    title: 'Atelier One | Architecture & Interior Design, Clerkenwell London',
    description:
      'Award-winning architecture and interior design practice based in Clerkenwell. Residential, commercial, and heritage projects across London and beyond.',
  },
}

const portfolioProjects = [
  {
    id: '1',
    title: 'The Mews House',
    client: 'Private Client',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    description: 'Complete renovation and extension of a Victorian mews house in Notting Hill. Open-plan living, roof terrace, and bespoke joinery throughout.',
    year: 2025,
  },
  {
    id: '2',
    title: 'Clerkenwell Offices',
    client: 'Tech Start-Up',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    description: 'A 4,000 sq ft creative workspace designed around collaboration and wellbeing. Exposed concrete, biophilic elements, and reclaimed material palette.',
    year: 2025,
  },
  {
    id: '3',
    title: 'Grade II Conversion',
    client: 'Private Developer',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600&fit=crop',
    description: 'Sensitive conversion of a Grade II listed warehouse into six luxury apartments, preserving original brick arches and cast-iron columns.',
    year: 2024,
  },
  {
    id: '4',
    title: 'Chelsea Penthouse',
    client: 'Private Client',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    description: 'Interior design for a 3,200 sq ft penthouse. Bespoke furniture programme, art curation, and materials sourced from Italy and Japan.',
    year: 2024,
  },
  {
    id: '5',
    title: 'Hackney Cultural Hub',
    client: 'Local Authority',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    description: 'New-build community arts centre featuring a 200-seat flexible auditorium, galleries, and maker spaces. BREEAM Excellent rated.',
    year: 2024,
  },
  {
    id: '6',
    title: 'Hampstead Family Home',
    client: 'Private Client',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    description: 'New-build family residence on a constrained north London plot. Passive house principles, zinc cladding, and a double-height kitchen-dining space.',
    year: 2023,
  },
]

const servicePackages = [
  {
    id: '1',
    name: 'Interior Consultation',
    description: 'A focused single-session consultation covering spatial planning, material selection, and colour strategy.',
    deliverables: [
      'Pre-session brief review',
      '2-hour on-site consultation',
      'Annotated floor plan with furniture layout',
      'Material & finish moodboard',
      'Written summary report',
    ],
    timeline: '1–2 weeks',
    price: 850,
    currency: 'GBP',
  },
  {
    id: '2',
    name: 'Residential Design',
    description: 'Full architectural and interior design service for residential projects from concept through planning to construction.',
    deliverables: [
      'Site survey & feasibility study',
      'Concept design with 3D visuals',
      'Planning application (if required)',
      'Technical drawings & specifications',
      'Contractor tender management',
      'On-site construction oversight',
    ],
    timeline: '4–18 months',
    price: 12500,
    currency: 'GBP',
    popular: true,
  },
  {
    id: '3',
    name: 'Commercial Fit-Out',
    description: 'End-to-end design and delivery for office, retail, and hospitality spaces. From brief to handover.',
    deliverables: [
      'Workplace strategy workshop',
      'Concept design & 3D walkthroughs',
      'Full technical package (MEP coordinated)',
      'Specification & procurement',
      'Contractor procurement & management',
      'Post-occupancy review',
    ],
    timeline: '3–12 months',
    price: 25000,
    currency: 'GBP',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Sarah & Tom W.',
    rating: 5,
    text: 'Atelier One transformed our cramped Victorian terrace into a stunning, light-filled home. Every detail was considered — from the bespoke kitchen to the way natural light moves through the space. We would not hesitate to recommend them.',
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Marcus P.',
    rating: 5,
    text: 'We commissioned a full commercial fit-out for our Clerkenwell studio. The team understood our brief immediately, delivered on time, and the space has genuinely improved how our team works. Multiple clients have commented on it.',
    date: '2026-06-18',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Helena F.',
    rating: 5,
    text: 'The Grade II conversion project was one of the most complex jobs in our portfolio. Atelier One navigated Listed Building Consent with skill and sensitivity. The result is extraordinary — heritage and modernity in perfect balance.',
    date: '2026-05-30',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'James A.',
    rating: 5,
    text: 'We engaged Atelier One for an interior consultation before our house purchase. Two hours that saved us from making costly mistakes and gave us complete clarity on the project. Exceptional value.',
    date: '2026-07-05',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Do you take on residential projects of all sizes?',
    answer: 'Yes. We work on projects from single-room interior consultations to full new-build residences. Our minimum fee for a full design service is £8,500. For smaller projects, our Interior Consultation is an excellent starting point.',
  },
  {
    question: 'Can you manage the planning process on our behalf?',
    answer: 'Absolutely. We handle all pre-application meetings, full planning applications, and Listed Building Consent submissions. We have an excellent track record with the London Borough planning departments we work with regularly.',
  },
  {
    question: 'How are your fees structured?',
    answer: 'We offer both percentage-of-build-cost fees (typical for larger projects) and fixed-fee packages for defined scopes. All fees are agreed in writing before we start and are broken down by RIBA Work Stages for transparency.',
  },
  {
    question: 'Do you work outside London?',
    answer: 'Yes. We have delivered projects across the South East and the Cotswolds. For projects further afield, travel and accommodation costs are agreed in advance and kept to a minimum.',
  },
  {
    question: 'How long does planning permission typically take?',
    answer: 'For a householder application, the statutory timeframe is 8 weeks from validation. Major applications take 13 weeks. We submit thorough, well-prepared applications to maximise the chance of approval at first submission.',
  },
  {
    question: 'What is your approach to sustainability?',
    answer: 'We design to Passivhaus principles where feasible, specify low-embodied-carbon materials, and prioritise retrofit over demolition. Several of our projects have achieved BREEAM Excellent or Passivhaus certification.',
  },
]

// --- NAV ---

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#f5f5f0]/95 backdrop-blur-sm border-b border-[#2c2c2c]/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-[#2c2c2c] font-light tracking-[0.3em] uppercase text-sm">Atelier One</span>
          <span className="text-[#2c2c2c]/40 text-[9px] tracking-[0.25em] uppercase mt-0.5">Architecture & Interior Design</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Work', href: '#portfolio' },
            { label: 'Services', href: '#services' },
            { label: 'Team', href: '#team' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={
                label === 'Contact'
                  ? 'px-6 py-2.5 border border-[#2c2c2c] text-[#2c2c2c] font-medium text-xs tracking-widest uppercase hover:bg-[#2c2c2c] hover:text-[#f5f5f0] transition-all'
                  : 'text-[#2c2c2c]/60 hover:text-[#2c2c2c] text-xs tracking-[0.15em] uppercase transition-colors'
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

// --- AWARDS SECTION ---

function AwardsSection() {
  const awards = [
    { year: '2025', title: 'RIBA London Award', project: 'Clerkenwell Cultural Hub' },
    { year: '2024', title: 'AJ Architecture Award — Housing', project: 'The Mews House, Notting Hill' },
    { year: '2024', title: 'BD Architect of the Year — Shortlisted', project: '' },
    { year: '2023', title: 'New London Architecture Award', project: 'Grade II Warehouse Conversion' },
    { year: '2022', title: 'FX Interior Design Award', project: 'Chelsea Penthouse' },
  ]

  return (
    <section className="bg-[#2c2c2c] py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#b8a898] text-xs tracking-[0.3em] uppercase mb-8 text-center">Recognition</p>
        <h2 className="text-[#f5f5f0] text-3xl font-light text-center mb-16">Awards & Recognition</h2>
        <div className="divide-y divide-white/10">
          {awards.map(({ year, title, project }) => (
            <div key={title} className="py-5 flex items-start gap-8">
              <span className="text-[#b8a898] text-sm font-light w-12 shrink-0 pt-0.5">{year}</span>
              <div className="flex-1">
                <p className="text-[#f5f5f0] text-sm font-medium">{title}</p>
                {project && <p className="text-white/40 text-xs mt-0.5">{project}</p>}
              </div>
              <span className="text-[#b8a898] text-lg">✦</span>
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
      name: 'Clara Hoffmann',
      role: 'Founding Director',
      background: 'Architectural Association · 18 years',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
    },
    {
      name: 'Oliver Grant',
      role: 'Director of Interiors',
      background: 'RCA — Interior Design · 12 years',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=500&fit=crop',
    },
    {
      name: 'Yuki Tanaka',
      role: 'Project Architect',
      background: 'Tokyo University · Bartlett',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
    },
    {
      name: 'Amara Osei',
      role: 'Heritage Specialist',
      background: 'IHBC Member · 9 years',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
    },
  ]
  return (
    <section id="team" className="bg-[#f5f5f0] py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#b8a898] text-xs tracking-[0.3em] uppercase mb-3 text-center">The Practice</p>
        <h2 className="text-[#2c2c2c] text-3xl font-light text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map(({ name, role, background, image }) => (
            <div key={name} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-[#e5e5e0] mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-[#2c2c2c] font-medium text-sm">{name}</p>
              <p className="text-[#2c2c2c]/60 text-xs mt-0.5">{role}</p>
              <p className="text-[#b8a898] text-[10px] tracking-wide mt-1">{background}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- PAGE ---

// ── Animated wireframe cube via CSS 3D transforms ──
function WireframeCube() {
  return (
    <div
      aria-hidden="true"
      className="relative"
      style={{ width: 140, height: 140, perspective: '600px' }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'rotateCube 14s linear infinite',
        }}
      >
        {/* Six faces, all transparent with just a border */}
        {[
          { transform: 'rotateY(0deg) translateZ(70px)' },
          { transform: 'rotateY(180deg) translateZ(70px)' },
          { transform: 'rotateY(90deg) translateZ(70px)' },
          { transform: 'rotateY(-90deg) translateZ(70px)' },
          { transform: 'rotateX(90deg) translateZ(70px)' },
          { transform: 'rotateX(-90deg) translateZ(70px)' },
        ].map(({ transform }, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 140,
              height: 140,
              border: '1px solid #e8631a',
              opacity: 0.35,
              transform,
              backgroundColor: 'rgba(232,99,26,0.02)',
            }}
          />
        ))}
        {/* Cross-hair lines on front face */}
        <div
          style={{
            position: 'absolute',
            width: 140,
            height: 140,
            transform: 'rotateY(0deg) translateZ(70px)',
          }}
        >
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, backgroundColor: '#e8631a', opacity: 0.2 }} />
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, backgroundColor: '#e8631a', opacity: 0.2 }} />
        </div>
      </div>
      <style>{`
        @keyframes rotateCube {
          0% { transform: rotateX(10deg) rotateY(0deg); }
          100% { transform: rotateX(10deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  )
}

export default function StudioArchitectureDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#2c2c2c',
    primaryHover: '#1a1a1a',
    accent: '#b8a898',
    background: '#f5f5f0',
    surface: '#eeeee8',
    secondary: '#f5f5f0',
    text: '#2c2c2c',
    textMuted: '#6b6b5e',
    border: '#d5d5cc',
  })

  // Tick counter for live "project coordinates" feel
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties} className="bg-[#f5f5f0]">
      <Navbar />

      {/* ── JSON-LD: LocalBusiness + FAQ ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Atelier One',
              description: 'Award-winning architecture and interior design practice based in Clerkenwell, London.',
              url: 'https://atelierone.example.com',
              telephone: '+44 20 7946 0174',
              email: 'studio@atelierone.example.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '22 St John Street',
                addressLocality: 'London',
                postalCode: 'EC1M 4AY',
                addressCountry: 'GB',
              },
              priceRange: '££££',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
  dateModified: '2026-08-11',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            },
          ]),
        }}
      />

      {/* ══════════════════════════════════════════════
          CUSTOM HERO — Blueprint Grid
          Dark navy background with CSS grid pattern.
          Thin extended sans-serif title.
          Rotating CSS wireframe cube.
          Architect-orange accent line.
          ══════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: '#0e1320' }}
        aria-label="Hero — Atelier One Architecture"
      >
        {/* Blueprint grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(100,120,160,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(100,120,160,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Larger grid overlay — double-grid feel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(100,120,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100,120,160,0.04) 1px, transparent 1px)',
            backgroundSize: '240px 240px',
          }}
        />
        {/* Corner registration marks */}
        {[
          { top: 24, left: 24 },
          { top: 24, right: 24 },
          { bottom: 24, left: 24 },
          { bottom: 24, right: 24 },
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute w-6 h-6 pointer-events-none"
            style={{ ...pos as React.CSSProperties }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, backgroundColor: '#e8631a', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 1, backgroundColor: '#e8631a', opacity: 0.4 }} />
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* LEFT — Typography block */}
          <div>
            {/* Studio label with blinking cursor */}
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#e8631a', animation: 'blink 1.4s step-end infinite' }}
              />
              <p
                className="text-[10px] tracking-[0.55em] uppercase"
                style={{ color: '#4a6080', fontFamily: 'monospace' }}
              >
                ATELIER ONE &ensp;//&ensp; CLERKENWELL · LONDON &ensp;//&ensp; EST. 2009
              </p>
            </div>

            {/* Headline — thin extended sans */}
            <h1
              className="font-light leading-[0.92] tracking-[-0.03em] mb-10"
              style={{
                color: '#e8edf5',
                fontFamily: '"Arial Narrow", "Helvetica Neue", sans-serif',
              }}
            >
              <span
                className="block text-[clamp(3.5rem,8vw,7.5rem)]"
                style={{ letterSpacing: '0.08em', fontWeight: 100 }}
              >
                ARCHITECTURE
              </span>
              <span
                className="block text-[clamp(3.5rem,8vw,7.5rem)] pl-[3vw]"
                style={{ letterSpacing: '0.08em', fontWeight: 100, color: '#b8c8d8' }}
              >
                &amp; INTERIOR
              </span>
              <span
                className="block text-[clamp(3.5rem,8vw,7.5rem)] pl-[6vw]"
                style={{ letterSpacing: '0.08em', fontWeight: 100 }}
              >
                DESIGN
              </span>
            </h1>

            {/* Architect-orange accent line */}
            <div className="flex items-center gap-0 mb-10">
              <div
                className="h-px flex-1 max-w-[320px]"
                style={{ background: 'linear-gradient(to right, #e8631a, #e8631a44)' }}
              />
              <div
                className="w-2 h-2 rotate-45 flex-shrink-0"
                style={{ backgroundColor: '#e8631a', margin: '0 -4px' }}
              />
            </div>

            {/* Description */}
            <p
              className="text-sm font-light leading-relaxed max-w-lg mb-12"
              style={{ color: '#6a8090', fontFamily: 'monospace', lineHeight: '1.8' }}
            >
              Residential, commercial, and heritage projects crafted with precision and restraint.
              Award-winning practice. RIBA chartered. 22 St John Street, Clerkenwell.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium transition-all duration-300"
                style={{ backgroundColor: '#e8631a', color: '#0e1320' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#ff7d36' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#e8631a' }}
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 text-xs tracking-[0.3em] uppercase font-light transition-all duration-300 border"
                style={{ borderColor: '#2a3a50', color: '#6a8090' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#e8631a'
                  el.style.color = '#e8631a'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#2a3a50'
                  el.style.color = '#6a8090'
                }}
              >
                Start a Conversation
              </a>
            </div>
          </div>

          {/* RIGHT — Wireframe cube + data readout */}
          <div className="flex flex-col items-center gap-8 md:pr-8">
            <WireframeCube />

            {/* Coordinate / stat readout — blueprint data panel */}
            <div
              className="text-[10px] font-mono leading-loose"
              style={{ color: '#3a5070' }}
            >
              {[
                ['PROJ.REF', `AO-20${25 + (tick % 3)}-0${(tick % 9) + 1}`],
                ['LAT', '51.5225° N'],
                ['LNG', '0.1016° W'],
                ['STATUS', 'ACTIVE'],
                ['TEAM', '12 ARCHITECTS'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4 justify-between">
                  <span style={{ color: '#2a3a50' }}>{k}</span>
                  <span style={{ color: '#4a6090' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #e8631a44, transparent)' }}
        />

        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </section>

      {/* Portfolio */}
      <div id="portfolio" className="bg-[#f5f5f0]">
        <PortfolioShowcase
          projects={portfolioProjects}
          title="Selected Projects"
          subtitle="A curated selection from our residential, commercial, and heritage portfolio"
        />
      </div>

      {/* Services */}
      <div id="services" className="bg-[#eeeee8]">
        <ServicePackages
          packages={servicePackages}
          title="Services"
          subtitle="Architecture, interior design, and consultation — structured to suit your project"
          onSelect={pkg => console.log('Selected', pkg.name)}
        />
      </div>

      {/* Team */}
      <TeamSection />

      {/* Awards */}
      <AwardsSection />

      {/* Consultation booking / inquiry */}
      <div id="contact" className="bg-[#f5f5f0]">
        <ProjectInquiry
          projectTypes={['Residential New Build', 'Residential Renovation', 'Interior Design', 'Commercial Fit-Out', 'Heritage / Listed Building', 'Landscape & External']}
          budgetRanges={['Under £50k', '£50k – £150k', '£150k – £500k', '£500k – £1M', 'Over £1M', 'To be discussed']}
          onSubmit={async (data) => {
            await new Promise(resolve => setTimeout(resolve, 800))
            console.log('Inquiry submitted', data)
          }}
          title="Begin Your Project"
          subtitle="Tell us about your vision. We respond to all enquiries within one working day."
        />
      </div>

      {/* Reviews */}
      <div className="bg-[#eeeee8]">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div className="bg-[#f5f5f0]">
        <FAQAccordion items={faqs} verticalName="StudioOS — Architecture" locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="442079460174"
        message="Hello Atelier One — I would like to discuss an architecture or interior design project."
      />
    </div>
  )
}

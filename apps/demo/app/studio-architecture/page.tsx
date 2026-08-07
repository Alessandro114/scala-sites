'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
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

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties} className="bg-[#f5f5f0]">
      <Navbar />

      {/* Hero */}
      <Hero
        title="Architecture & Interior Design"
        subtitle="Atelier One — Clerkenwell, London. Residential, commercial, and heritage projects crafted with precision and restraint."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&h=900&fit=crop"
        ctaPrimary={{ label: 'View Our Work', href: '#portfolio' }}
        ctaSecondary={{ label: 'Start a Conversation', href: '#contact' }}
        overlayOpacity={0.55}
        height="full"
      />

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
        <FAQAccordion items={faqs} locale="en" />
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

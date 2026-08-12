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
  name: 'Flux Creative',
  description: 'Brand & Content Agency — Fitzrovia, London',
  url: 'https://fluxcreative.example.com',
  locale: 'en',
  vertical: 'studioos',
  theme: 'minimal',
  branding: {
    primaryColor: '#1a1a1a',
    accentColor: '#c8f542',
  },
  contact: {
    phone: '+44 20 7946 0570',
    email: 'hello@fluxcreative.example.com',
    whatsapp: '+442079460570',
    address: '32 Charlotte Street, Fitzrovia, London W1T 2NB',
    coordinates: { lat: 51.5198, lng: -0.1356 },
  },
  social: {
    instagram: 'fluxcreative.london',
    facebook: 'https://facebook.com/fluxcreative',
  },
  seo: {
    title: 'Flux Creative | Brand & Content Agency — Fitzrovia, London',
    description:
      'Independent brand and content agency in Fitzrovia. We build distinctive brand identities, run retainer content programmes, and deliver creative direction that converts.',
  },
}

const caseStudies = [
  {
    id: '1',
    title: 'Brand Relaunch — 3× Revenue in 6 Months',
    client: 'Direct-to-Consumer Food Brand',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
    description:
      'Complete brand repositioning, new visual identity, packaging redesign, and launch campaign for a premium snack brand. Revenue tripled within six months of relaunch.',
    year: 2026,
  },
  {
    id: '2',
    title: '+540% Organic Reach — 90-Day Content Sprint',
    client: 'B2B SaaS Platform',
    category: 'Content',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    description:
      'Developed a 90-day editorial calendar, produced 24 LinkedIn articles, 12 short-form videos, and a white paper series. Organic reach up 540%. Pipeline influenced: £1.8M.',
    year: 2026,
  },
  {
    id: '3',
    title: 'Visual Identity — Raised £4.2M Series A',
    client: 'Climate Tech Start-Up',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    description:
      'Built the brand from zero — name, logo, design system, pitch deck design, and website. Investor response was overwhelmingly positive and the round closed oversubscribed.',
    year: 2025,
  },
  {
    id: '4',
    title: '28% Conversion Lift — Landing Page Redesign',
    client: 'Online Education Platform',
    category: 'Creative Direction',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    description:
      'Rebuilt the hero section, copy architecture, and social proof strategy for a high-traffic landing page. Conversion rate improved from 3.1% to 3.97% — worth £340K/year in additional revenue.',
    year: 2026,
  },
  {
    id: '5',
    title: 'Rebrand — NPS +38 Points',
    client: 'Professional Services Firm',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    description:
      'Full rebrand for a 120-person consultancy: positioning strategy, new name, identity system, website, and internal launch. NPS rose from 41 to 79 in the 12 months following relaunch.',
    year: 2025,
  },
  {
    id: '6',
    title: '14M Impressions — Campaign Launch',
    client: 'Consumer App',
    category: 'Content',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
    description:
      'Multi-channel launch campaign spanning Instagram, TikTok, YouTube Shorts, and LinkedIn. 14M organic impressions in 30 days. App store rating moved from 3.6 to 4.7 post-launch.',
    year: 2026,
  },
]

const servicePackages = [
  {
    id: '1',
    name: 'Workshop',
    description:
      'A focused half-day or full-day creative workshop — brand clarity, messaging, or content strategy — for leadership teams.',
    deliverables: [
      'Pre-workshop brand / audience audit',
      'Facilitated brand or content strategy session',
      'Workshop summary & action plan (PDF)',
      'Follow-up 45-minute implementation call',
    ],
    timeline: '1 day',
    price: 2800,
    currency: 'GBP',
  },
  {
    id: '2',
    name: 'Project',
    description:
      'Defined-scope creative projects — brand identity, campaign creative, content series, or website copy.',
    deliverables: [
      'Discovery call & creative brief',
      'Two rounds of creative concepts',
      'Final deliverables (brand kit, copy, content, or creative)',
      'Post-project brand guidelines or editorial playbook',
      'One month of Slack access for questions',
    ],
    timeline: '3–8 weeks',
    price: 7500,
    currency: 'GBP',
    popular: true,
  },
  {
    id: '3',
    name: 'Retainer',
    description:
      'Ongoing creative partnership — brand stewardship, monthly content production, campaign ideation, and creative direction on demand.',
    deliverables: [
      'Dedicated creative director & strategist',
      'Monthly content plan & editorial calendar',
      '8–16 pieces of content per month',
      'Monthly performance & strategy review',
      'Priority turnaround (48h on urgent briefs)',
      'Quarterly brand health review',
    ],
    timeline: '3-month minimum',
    price: 5200,
    currency: 'GBP',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Beatrice H., CMO',
    rating: 5,
    text: 'Flux rebuilt our brand from the ground up and it transformed how clients perceive us. The positioning work was genuinely rigorous — not just pretty logos. Revenue results followed naturally.',
    date: '2026-07-22',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Daniel O., Founder',
    rating: 5,
    text: 'Our Series A deck designed by Flux was the best asset we brought into meetings. Multiple investors commented on the clarity of our story. We closed oversubscribed. Worth every penny.',
    date: '2026-07-08',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Yuki T., Head of Content',
    rating: 5,
    text: 'The retainer has become indispensable. Flux operates like a senior in-house creative team — they understand our voice better than we do at this point. Output quality is consistently excellent.',
    date: '2026-06-18',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Marcus F., CEO',
    rating: 5,
    text: 'The brand workshop cut through 18 months of internal disagreement in 4 hours. We walked out with complete clarity on positioning and a roadmap. Facilitation was exceptional.',
    date: '2026-05-30',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'How do I start a brief with Flux Creative?',
    answer:
      'Use the "Start a Brief" form on this page — tell us about your brand, the challenge you are facing, and your timeline. We review every brief personally and respond within one working day with an honest initial take and next steps.',
  },
  {
    question: 'What types of brands do you work with?',
    answer:
      'We work primarily with growth-stage B2B and B2C brands, start-ups preparing for investment, and established businesses going through a repositioning. Ideal clients are ambitious, collaborative, and prepared to make bold creative decisions.',
  },
  {
    question: 'Do you offer standalone copywriting or design?',
    answer:
      'Yes, though we are most effective when we own both strategy and execution. Standalone copy or design projects are available from our Project tier. We will always be transparent at briefing stage if the scope requires a more integrated approach to achieve the right result.',
  },
  {
    question: 'What does the retainer include and how is it structured?',
    answer:
      'Retainers are monthly partnerships covering strategic content planning, production, and creative direction. Each retainer client has a dedicated creative director and strategist. We work in monthly sprints with a planning call at the start and a review at the end. Minimum three months, then rolling monthly.',
  },
  {
    question: 'Do ad spend or media budgets come out of your fees?',
    answer:
      'No. Our fees cover strategy, creative production, and direction. Media spend — if applicable — is managed directly by the client or their media agency. We can recommend media partners from our network.',
  },
]

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
        background: 'rgba(245,245,240,0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #e0e0da',
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
        <a href="#" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontWeight: 900,
              fontSize: '1.15rem',
              color: '#1a1a1a',
              letterSpacing: '-0.03em',
            }}
          >
            FLUX<span style={{ color: '#1a1a1a', opacity: 0.35 }}>—</span>CREATIVE
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {[
            { label: 'Work', href: '#work' },
            { label: 'Services', href: '#services' },
            { label: 'About', href: '#about' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#6b6b6b',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#brief"
            style={{
              padding: '10px 22px',
              background: '#1a1a1a',
              color: '#f5f5f0',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Start a Brief
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- CREDIBILITY STRIP ---

function CredibilityStrip() {
  const stats = [
    { value: '140+', label: 'Brands Built' },
    { value: '£12M+', label: 'Revenue Influenced' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '92%', label: 'Clients Return' },
  ]
  return (
    <div style={{ background: '#1a1a1a', padding: '28px 24px' }}>
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          textAlign: 'center',
        }}
      >
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p
              style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                color: '#f5f5f0',
                letterSpacing: '-0.03em',
                marginBottom: '4px',
              }}
            >
              {value}
            </p>
            <p
              style={{
                fontSize: '0.7rem',
                color: 'rgba(245,245,240,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- CLIENT LOGOS ---

function ClientLogos() {
  const clients = [
    'Series A Start-Up',
    'DTC Food Brand',
    'Climate Tech Co.',
    'EdTech Platform',
    'B2B SaaS',
    'Luxury Retailer',
    'Consulting Firm',
    'Consumer App',
  ]
  return (
    <section style={{ background: '#f5f5f0', padding: '56px 24px', borderTop: '1px solid #e0e0da' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#aaa',
            marginBottom: '36px',
          }}
        >
          Trusted by ambitious brands
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {clients.map((client) => (
            <div
              key={client}
              style={{
                height: '44px',
                background: '#ebebea',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#bbb',
                }}
              >
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- ABOUT / MANIFESTO ---

function AboutSection() {
  return (
    <section
      id="about"
      style={{ background: '#f5f5f0', padding: '96px 24px', borderTop: '1px solid #e0e0da' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#aaa',
            marginBottom: '24px',
          }}
        >
          Our Belief
        </p>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#1a1a1a',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '28px',
          }}
        >
          Distinctive brands aren&apos;t built by committee. They&apos;re built by conviction.
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#555',
            lineHeight: 1.7,
            marginBottom: '20px',
          }}
        >
          Flux Creative is an independent brand and content agency founded in Fitzrovia in 2019. We are a
          team of twelve strategists, writers, designers, and directors who believe that the best creative
          work starts with a ruthlessly clear point of view.
        </p>
        <p style={{ fontSize: '1.05rem', color: '#777', lineHeight: 1.7 }}>
          We do not offer templated solutions. Every brief starts with listening, and every deliverable is
          built to outlast a trend cycle. Our clients stay because the work keeps working.
        </p>
      </div>
    </section>
  )
}

// --- PAGE ---

const fluxJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Flux Creative',
  description: 'Independent brand and content agency in Fitzrovia. We build distinctive brand identities, run retainer content programmes, and deliver creative direction that converts.',
  url: 'https://fluxcreative.example.com',
  telephone: '+44 20 7946 0570',
  email: 'hello@fluxcreative.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '32 Charlotte Street, Fitzrovia',
    addressLocality: 'London',
    postalCode: 'W1T 2NB',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5198,
    longitude: -0.1356,
  },
  sameAs: [
    'https://instagram.com/fluxcreative.london',
    'https://facebook.com/fluxcreative',
  ],
}

const fluxFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: [
    { '@type': 'Question', name: 'How do I start a brief with Flux Creative?', acceptedAnswer: { '@type': 'Answer', text: 'Use the "Start a Brief" form on this page. We review every brief personally and respond within one working day with an honest initial take and next steps.' } },
    { '@type': 'Question', name: 'What types of brands do you work with?', acceptedAnswer: { '@type': 'Answer', text: 'We work primarily with growth-stage B2B and B2C brands, start-ups preparing for investment, and established businesses going through a repositioning.' } },
    { '@type': 'Question', name: 'Do you offer standalone copywriting or design?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, though we are most effective when we own both strategy and execution. Standalone copy or design projects are available from our Project tier.' } },
    { '@type': 'Question', name: 'What does the retainer include and how is it structured?', acceptedAnswer: { '@type': 'Answer', text: 'Retainers are monthly partnerships covering strategic content planning, production, and creative direction. Each retainer client has a dedicated creative director and strategist. Minimum three months, then rolling monthly.' } },
    { '@type': 'Question', name: 'Do ad spend or media budgets come out of your fees?', acceptedAnswer: { '@type': 'Answer', text: 'No. Our fees cover strategy, creative production, and direction. Media spend is managed directly by the client or their media agency.' } },
  ],
}

export default function AgencyCreativeDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#1a1a1a',
    primaryHover: '#2d2d2d',
    accent: '#1a1a1a',
    background: '#f5f5f0',
    surface: '#ffffff',
    secondary: '#ebebea',
    text: '#1a1a1a',
    textMuted: '#777777',
    border: '#e0e0da',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fluxJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fluxFaqJsonLd) }} />
      <Navbar />

      <TypewriterHero
        staticText="We build"
        rotatingWords={['brands', 'identities', 'campaigns', 'futures']}
        subtitle="Flux Creative — independent brand strategy and content agency in Fitzrovia, London. Sharp thinking, uncompromising craft, measurable results."
        ctaPrimary={{ label: 'Start a Brief', href: '#brief' }}
        backgroundColor="#111111"
        textColor="#ffffff"
      />

      <CredibilityStrip />

      <div id="work">
        <PortfolioShowcase
          projects={caseStudies}
          title="Selected Work"
          subtitle="Case studies with real numbers — no adjectives, no spin"
        />
      </div>

      <ClientLogos />

      <div id="services">
        <ServicePackages
          packages={servicePackages}
          title="Engagements"
          subtitle="Workshop, project, or retainer — transparent scope and pricing from day one"
          onSelect={(pkg) => console.log('Selected', pkg.name)}
        />
      </div>

      <AboutSection />

      <div id="brief">
        <ProjectInquiry
          projectTypes={[
            'Brand Strategy & Positioning',
            'Visual Identity & Design System',
            'Content Strategy & Production',
            'Campaign Creative',
            'Website Copy & UX Writing',
            'Brand Workshop',
            'Creative Direction (Retainer)',
            'Other / Not Sure Yet',
          ]}
          budgetRanges={[
            'Under £3k',
            '£3k–£7.5k',
            '£7.5k–£15k',
            '£15k–£30k',
            '£30k+',
            'Monthly retainer',
            'To be discussed',
          ]}
          onSubmit={async (data) => {
            await new Promise((resolve) => setTimeout(resolve, 800))
            console.log('Brief submitted', data)
          }}
          title="Start a Brief"
          subtitle="Tell us about your brand and what you want to achieve. We respond within one working day."
        />
      </div>

      <div style={{ background: '#f5f5f0' }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      <FAQAccordion items={faqs} verticalName="AgencyOS — Creative" locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="442079460570"
        message="Hi Flux Creative — I'd like to discuss a creative brief."
      />
    </div>
  )
}

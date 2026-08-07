'use client'

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

// --- THEME ---

const studioTheme = createCustomTheme('minimal', {
  primary: '#111111',
  primaryHover: '#333333',
  secondary: '#f5f5f5',
  accent: '#0d9488',
  background: '#ffffff',
  surface: '#fafafa',
  text: '#111111',
  textMuted: '#6b7280',
  border: '#e5e5e5',
})

// --- MOCK DATA ---

const siteConfig: SiteConfig = {
  name: 'Prism Creative Studio',
  description: 'Brand identity, web design, photography & film — Shoreditch, London',
  url: 'https://prismcreativestudio.example.com',
  locale: 'en',
  vertical: 'studioos',
  theme: 'minimal',
  branding: {
    primaryColor: '#111111',
    accentColor: '#0d9488',
  },
  contact: {
    phone: '+44 20 3915 7240',
    email: 'hello@prismcreativestudio.com',
    whatsapp: '+442039157240',
    address: '14 Redchurch Street, Shoreditch, London E2 7DD',
    coordinates: { lat: 51.5237, lng: -0.0726 },
  },
  social: {
    instagram: 'prismcreativestudio',
    facebook: 'https://facebook.com/prismcreativestudio',
  },
  seo: {
    title: 'Prism Creative Studio | Brand, Web & Photography — London',
    description:
      'Award-winning creative studio in Shoreditch. Brand identity, web design, photography and film for ambitious brands.',
  },
}

const portfolioProjects = [
  {
    id: '1',
    title: 'Oleander Skincare Rebrand',
    client: 'Oleander Beauty',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?w=600&h=400&fit=crop',
    description:
      'Full brand identity overhaul for an independent skincare label — logo, colour system, packaging, brand guidelines, and launch collateral.',
    year: 2026,
  },
  {
    id: '2',
    title: 'Folio Architecture Website',
    client: 'Folio Architects',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
    description:
      'Portfolio website for a boutique architecture practice. Custom Next.js build with full-screen project galleries and 3D model embeds.',
    year: 2026,
  },
  {
    id: '3',
    title: 'Ember Coffee Campaign',
    client: 'Ember Coffee Roasters',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
    description:
      'Full-day product and lifestyle shoot for seasonal campaign. 80+ hero images for print, digital, and out-of-home.',
    year: 2025,
  },
  {
    id: '4',
    title: 'Apex Fitness Brand System',
    client: 'Apex Fitness',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    description:
      'From naming and strategy through to visual identity, tone of voice guide, and social media templates for a chain of premium gyms.',
    year: 2025,
  },
  {
    id: '5',
    title: 'Verne Spirits Brand Film',
    client: 'Verne Distillery',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=400&fit=crop',
    description:
      'Two-minute brand film tracing the distillation process from grain to glass. Shot on RED camera, scored with an original commissioned track.',
    year: 2026,
  },
  {
    id: '6',
    title: 'Kasa Interiors Web Platform',
    client: 'Kasa Interiors',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop',
    description:
      'E-commerce website with custom room visualiser, integrated with Shopify for product management and Stripe for checkout.',
    year: 2025,
  },
  {
    id: '7',
    title: 'Luma Events Photography',
    client: 'Luma Events',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
    description:
      'On-going event photography partnership covering conferences, product launches, and brand activations across London and Europe.',
    year: 2026,
  },
  {
    id: '8',
    title: 'Crestwood Law Rebrand',
    client: 'Crestwood LLP',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    description:
      'Modernising a 40-year-old law firm without losing its heritage. New wordmark, spatial identity, stationery, and digital brand guidelines.',
    year: 2025,
  },
]

const servicePackages = [
  {
    id: '1',
    name: 'Brand Starter',
    description:
      'Everything a growing business needs to show up with confidence — a complete visual identity built for longevity.',
    deliverables: [
      'Logo suite (primary, secondary, icon)',
      'Colour palette & typography system',
      'Brand guidelines document (20+ pages)',
      'Business card & letterhead design',
      'Social media profile assets',
      '2 rounds of revisions',
    ],
    timeline: '3–4 weeks',
    price: 2400,
    currency: 'GBP',
    popular: false,
  },
  {
    id: '2',
    name: 'Brand & Web',
    description:
      'Our flagship package — brand identity plus a handcrafted website that converts visitors into clients.',
    deliverables: [
      'Everything in Brand Starter',
      'Custom website design (up to 8 pages)',
      'Responsive development (Next.js)',
      'CMS integration (Contentful or Sanity)',
      'On-page SEO foundations',
      'Photography art direction',
      '3 rounds of revisions',
    ],
    timeline: '6–8 weeks',
    price: 6800,
    currency: 'GBP',
    popular: true,
  },
  {
    id: '3',
    name: 'Campaign Shoot',
    description:
      'A focused photography or video shoot, carefully planned and shot to fuel a full content cycle.',
    deliverables: [
      'Pre-production brief & shot list',
      'Full-day location shoot (6 hrs)',
      '50 retouched hero images',
      '1× 60-second brand film (optional)',
      'Usage-ready for print, web & social',
      'Online gallery with download portal',
    ],
    timeline: '2–3 weeks',
    price: 3200,
    currency: 'GBP',
    popular: false,
  },
  {
    id: '4',
    name: 'Studio Retainer',
    description:
      'Ongoing creative partnership — a dedicated portion of our studio capacity each month for brands that move fast.',
    deliverables: [
      '40 hours of studio time per month',
      'Dedicated creative director',
      'Priority turnaround (48 hrs)',
      'Monthly strategy check-in call',
      'Unlimited minor revisions',
      'Discounted ad-hoc day rates',
    ],
    timeline: 'Monthly rolling',
    price: 4500,
    currency: 'GBP',
    popular: false,
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Harriet F.',
    rating: 5,
    text: "Prism completely transformed how our brand is perceived. The team listened carefully, pushed back when we needed it, and delivered a visual identity that feels premium and timeless. Six months in and clients comment on our branding constantly.",
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Daniel O.',
    rating: 5,
    text: "We hired Prism for a campaign shoot for our coffee brand. The planning was meticulous, the shoot day was smooth, and the final images exceeded every expectation. We're already booking our next session.",
    date: '2026-06-14',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Sophie K.',
    rating: 5,
    text: "The Brand & Web package is genuinely exceptional value. We went from a home-made logo to a full identity system and a beautiful Next.js website in under 8 weeks. Enquiries have doubled since launch.",
    date: '2026-07-03',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '4',
    author: 'Marcus T.',
    rating: 5,
    text: "Three years on retainer and it keeps getting better. Having a dedicated creative team that knows our brand inside out is a genuine competitive advantage. I couldn't imagine running our marketing without Prism.",
    date: '2026-08-01',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'How does a typical project start?',
    answer:
      'Every project begins with a discovery call where we learn about your business, goals, audience, and competitors. From there we send a tailored proposal with a fixed scope, timeline, and fee — no surprises.',
  },
  {
    question: 'How many rounds of revisions do I get?',
    answer:
      'Our packages include 2–3 structured rounds of revisions (detailed in each package). We present work in clear stages so feedback is focused and efficient. Minor tweaks after sign-off are always accommodated.',
  },
  {
    question: 'What if my project does not fit a standard package?',
    answer:
      "Most projects do, but if yours is larger or more specialist, we build custom scopes. Use the inquiry form to describe your needs and we will put together a bespoke proposal within 48 hours.",
  },
  {
    question: 'Do you work with clients outside London?',
    answer:
      'Absolutely. We have delivered projects for clients across the UK, Europe, and North America. Brand and web projects are fully remote. Shoots can be arranged anywhere with appropriate travel fees.',
  },
  {
    question: 'How long does a brand identity project take?',
    answer:
      'A Brand Starter typically takes 3–4 weeks from kick-off to final delivery. The Brand & Web package runs 6–8 weeks. Timelines depend on how quickly feedback comes back on each round.',
  },
  {
    question: 'Do I own all the files at the end?',
    answer:
      'Yes — 100%. On final payment you receive all source files (AI, EPS, SVG, PNG, Figma), a full brand guidelines PDF, and perpetual usage rights. Everything is yours.',
  },
  {
    question: 'What is your payment structure?',
    answer:
      'We take a 50% deposit to begin and the remaining 50% on final delivery. For retainers, invoices are issued on the first of each month. We accept bank transfer and all major cards.',
  },
]

const projectTypes = [
  'Brand Identity',
  'Logo & Visual Identity',
  'Website Design & Development',
  'Photography Shoot',
  'Brand Film / Video',
  'Packaging Design',
  'Social Media Content',
  'Creative Retainer',
  'Other',
]

const budgetRanges = [
  'Under £2,000',
  '£2,000 – £5,000',
  '£5,000 – £10,000',
  '£10,000 – £25,000',
  '£25,000+',
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
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e5e5e5',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#" style={{ fontWeight: 800, fontSize: '1.1rem', textDecoration: 'none', color: '#111', letterSpacing: '-0.02em' }}>
          Prism Creative Studio
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#portfolio" style={{ fontSize: '0.875rem', textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>
            Work
          </a>
          <a href="#services" style={{ fontSize: '0.875rem', textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>
            Services
          </a>
          <a href="#contact" style={{ fontSize: '0.875rem', textDecoration: 'none', color: '#6b7280', fontWeight: 500 }}>
            Contact
          </a>
          <a
            href="#contact"
            style={{
              padding: '9px 20px',
              background: '#111',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- PAGE ---

const prismJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Prism Creative Studio',
  description: 'Award-winning creative studio in Shoreditch. Brand identity, web design, photography and film for ambitious brands.',
  url: 'https://prismcreativestudio.example.com',
  telephone: '+44 20 3915 7240',
  email: 'hello@prismcreativestudio.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Redchurch Street, Shoreditch',
    addressLocality: 'London',
    postalCode: 'E2 7DD',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5237,
    longitude: -0.0726,
  },
  sameAs: [
    'https://instagram.com/prismcreativestudio',
    'https://facebook.com/prismcreativestudio',
  ],
}

const prismFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does a typical project start?', acceptedAnswer: { '@type': 'Answer', text: 'Every project begins with a discovery call where we learn about your business, goals, audience, and competitors. From there we send a tailored proposal with a fixed scope, timeline, and fee.' } },
    { '@type': 'Question', name: 'How many rounds of revisions do I get?', acceptedAnswer: { '@type': 'Answer', text: 'Our packages include 2–3 structured rounds of revisions. Minor tweaks after sign-off are always accommodated.' } },
    { '@type': 'Question', name: 'What if my project does not fit a standard package?', acceptedAnswer: { '@type': 'Answer', text: 'Most projects do, but if yours is larger or more specialist, we build custom scopes. Use the inquiry form to describe your needs and we will put together a bespoke proposal within 48 hours.' } },
    { '@type': 'Question', name: 'Do you work with clients outside London?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We have delivered projects for clients across the UK, Europe, and North America. Brand and web projects are fully remote.' } },
    { '@type': 'Question', name: 'How long does a brand identity project take?', acceptedAnswer: { '@type': 'Answer', text: 'A Brand Starter typically takes 3–4 weeks from kick-off to final delivery. The Brand & Web package runs 6–8 weeks.' } },
    { '@type': 'Question', name: 'Do I own all the files at the end?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — 100%. On final payment you receive all source files (AI, EPS, SVG, PNG, Figma), a full brand guidelines PDF, and perpetual usage rights.' } },
    { '@type': 'Question', name: 'What is your payment structure?', acceptedAnswer: { '@type': 'Answer', text: 'We take a 50% deposit to begin and the remaining 50% on final delivery. For retainers, invoices are issued on the first of each month.' } },
  ],
}

export default function StudioOSDemoPage() {
  return (
    <div
      style={
        themeToStyleObject(studioTheme) as React.CSSProperties
      }
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(prismJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(prismFaqJsonLd) }} />
      <Navbar />

      <TypewriterHero
        staticText="We craft"
        rotatingWords={['identities', 'websites', 'experiences', 'legacies']}
        subtitle="Brand identity, web design, photography and film for ambitious businesses. Based in Shoreditch, working globally."
        ctaPrimary={{ label: 'Start a Project', href: '#contact' }}
        backgroundColor="#0a0a0a"
        textColor="#ffffff"
      />

      <PortfolioShowcase
        projects={portfolioProjects}
        title="Selected Work"
        subtitle="Brands, websites, photographs and films — built to last."
      />

      <ServicePackages
        packages={servicePackages}
        title="Services & Packages"
        subtitle="Fixed-price packages with clear deliverables. No hidden fees."
        onSelect={(pkg) => {
          const el = document.getElementById('contact')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      <ReviewCarousel reviews={reviews} locale="en" />

      <FAQAccordion items={faqs} locale="en" />

      <ProjectInquiry
        projectTypes={projectTypes}
        budgetRanges={budgetRanges}
        title="Start a Project"
        subtitle="Tell us about your project and we will get back to you within 24 hours."
        onSubmit={async (data) => {
          // Replace with your inquiry API call
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }}
      />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442039157240"
        message="Hi Prism! I'd like to discuss a project with your studio."
        vertical="studioos"
      />
    </div>
  )
}

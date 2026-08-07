'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ListingSearch } from '@scala-sites/propertyos/components/listing-search'
import { AgentCard } from '@scala-sites/propertyos/components/agent-card'

// ─── Mock data ────────────────────────────────────────────────────────────────

const listings = [
  {
    id: '1',
    title: 'Grand Penthouse — One Hyde Park',
    address: '1 Knightsbridge, London SW1X 7LJ',
    price: 18500000,
    currency: 'GBP',
    type: 'sale' as const,
    propertyType: 'Penthouse',
    bedrooms: 5,
    bathrooms: 6,
    area: 620,
    areaUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    featured: true,
    viewsLast24h: 34,
  },
  {
    id: '2',
    title: 'Georgian Townhouse — Belgravia',
    address: '14 Eaton Square, London SW1W 9BQ',
    price: 9750000,
    currency: 'GBP',
    type: 'sale' as const,
    propertyType: 'Townhouse',
    bedrooms: 6,
    bathrooms: 5,
    area: 480,
    areaUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    featured: true,
    viewsLast24h: 21,
  },
  {
    id: '3',
    title: 'Sky Apartment — The Shard Residences',
    address: '32 London Bridge Street, London SE1 9SG',
    price: 5200000,
    currency: 'GBP',
    type: 'sale' as const,
    propertyType: 'Apartment',
    bedrooms: 3,
    bathrooms: 3,
    area: 245,
    areaUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    viewsLast24h: 18,
  },
  {
    id: '4',
    title: 'Lateral Apartment — Mayfair',
    address: '47 Park Lane, London W1K 1QA',
    price: 32000,
    currency: 'GBP',
    type: 'rent' as const,
    propertyType: 'Apartment',
    bedrooms: 4,
    bathrooms: 4,
    area: 320,
    areaUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    featured: true,
    viewsLast24h: 29,
  },
  {
    id: '5',
    title: 'Neo-Classical Villa — Hampstead',
    address: '22 Bishops Avenue, London N2 0BE',
    price: 14200000,
    currency: 'GBP',
    type: 'sale' as const,
    propertyType: 'Villa',
    bedrooms: 8,
    bathrooms: 7,
    area: 1100,
    areaUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    viewsLast24h: 12,
  },
  {
    id: '6',
    title: 'River View Duplex — Chelsea Embankment',
    address: '9 Chelsea Embankment, London SW3 4LQ',
    price: 22000,
    currency: 'GBP',
    type: 'rent' as const,
    propertyType: 'Duplex',
    bedrooms: 3,
    bathrooms: 3,
    area: 210,
    areaUnit: 'm²',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
    viewsLast24h: 16,
  },
]

const agents = [
  {
    id: '1',
    name: 'Victoria Ashworth',
    role: 'Head of Residential Sales',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    specialties: ['Prime Central London', 'Ultra-HNWI', 'Mayfair', 'Belgravia'],
    propertiesSold: 203,
    yearsExperience: 18,
    bio: 'Victoria leads our Prime Central London desk, having transacted over £2bn in luxury residential property. Her discreet, relationship-driven approach attracts the world\'s most discerning buyers and vendors.',
    bookingUrl: '#booking',
  },
  {
    id: '2',
    name: 'Sebastian Hartley',
    role: 'Director — Investment & Portfolio',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    specialties: ['Portfolio Acquisition', 'Trophy Assets', 'Off-Market', 'International Buyers'],
    propertiesSold: 142,
    yearsExperience: 14,
    bio: 'Sebastian specialises in large-scale residential investments and trophy asset transactions. Fluent in Mandarin and Arabic, he bridges global capital with London\'s premier real estate market.',
    bookingUrl: '#booking',
  },
  {
    id: '3',
    name: 'Isabelle Fontaine',
    role: 'Senior Associate — Prime Lettings',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    specialties: ['Corporate Lettings', 'Furnished Luxury', 'Relocations', 'Knightsbridge'],
    propertiesSold: 318,
    yearsExperience: 11,
    bio: 'Isabelle manages our ultra-prime lettings portfolio, placing C-suite executives and diplomats into London\'s finest addresses. Native French speaker with an exceptional portfolio of discreet, off-market homes.',
    bookingUrl: '#booking',
  },
]

const reviews = [
  {
    id: '1',
    author: 'Lord & Lady Cavendish',
    rating: 5,
    text: 'Victoria handled the sale of our Belgravia townhouse with extraordinary discretion and skill. She achieved a price 12% above our expectations. We wouldn\'t trust anyone else in Prime Central London.',
    date: '2026-06-18',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Hassan Al-Rashid',
    rating: 5,
    text: 'Sebastian sourced us an off-market penthouse at One Hyde Park that we could not find elsewhere. His understanding of our requirements was impeccable and the transaction was handled seamlessly.',
    date: '2026-05-30',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Mei-Ling Zhang',
    rating: 5,
    text: 'Relocating from Hong Kong, Isabelle found us the perfect furnished apartment in Knightsbridge within 48 hours. Her market knowledge and personal service are unmatched. Truly five-star.',
    date: '2026-07-04',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'Dr. Alessandro Conti',
    rating: 5,
    text: 'Mayfair & Partners sold our Chelsea property at record price per square foot for the street. Their buyer network is genuinely global. Professional, discreet, and results-driven.',
    date: '2026-04-22',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'What distinguishes Mayfair & Partners from other London estate agents?',
    answer: 'We operate exclusively in the prime and super-prime segment (£2m+). Our mandate is always discreet — over 60% of our transactions never appear on Rightmove. We leverage a proprietary network of global HNW buyers, family offices, and sovereign funds that no portal can replicate.',
  },
  {
    question: 'How do you price ultra-prime properties?',
    answer: 'We commission independent RICS-certified appraisals, benchmark against recent comparable transactions in our private database, and factor in unique features such as provenance, architect, planning permissions, and lifestyle attributes. We do not use algorithmic AVM tools for properties above £5m.',
  },
  {
    question: 'Can you handle transactions for international buyers?',
    answer: 'Yes — over 70% of our buyers are international. We work alongside leading tax counsel, immigration solicitors, and private banks to ensure end-to-end guidance on stamp duty, ATED, residency implications, and wealth structuring. We speak Mandarin, Arabic, French, Italian, and Russian in-house.',
  },
  {
    question: 'Do you offer off-market property access?',
    answer: 'Our off-market portfolio currently represents over 40 properties valued in excess of £500m. Access is exclusively available to registered clients who have completed our confidential buyer registration process. Contact us to begin.',
  },
  {
    question: 'What are your fees for sales and lettings?',
    answer: 'Sales: 2% + VAT for sole agency; 2.75% + VAT for joint agency. Prime lettings: 12% of annual rent for tenant find & management. All fees are negotiable for portfolio mandates above £20m. A detailed fee schedule is provided at the first consultation.',
  },
]

const siteConfig = {
  name: 'Mayfair & Partners',
  tagline: 'Luxury Property Specialists — Prime Central London Since 1987',
  phone: '+44 20 7493 8000',
  email: 'prime@mayfairandpartners.com',
  address: '40 Berkeley Square, Mayfair, London W1J 5AL',
  social: { instagram: '#', facebook: '#' },
}

// ─── Mortgage calculator (static/visual) ─────────────────────────────────────

function MortgageCalculator() {
  const [price, setPrice] = useState(5000000)
  const [deposit, setDeposit] = useState(25)
  const [rate, setRate] = useState(4.5)
  const [term, setTerm] = useState(25)

  const loanAmount = price * (1 - deposit / 100)
  const monthlyRate = rate / 100 / 12
  const numPayments = term * 12
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / numPayments
      : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)

  return (
    <section
      className="py-20 px-4"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>
            Financial Planning
          </p>
          <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Mortgage Indicative Calculator
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Indicative figures only. We work alongside Coutts, Barclays Private, and Rothschild wealth lending desks for bespoke financing.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--color-border)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Controls */}
            <div className="p-8 space-y-6" style={{ background: 'var(--color-bg)' }}>
              {/* Purchase price */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>Purchase Price</label>
                  <span className="text-sm font-bold" style={{ color: 'var(--color-accent)' }}>{fmt(price)}</span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={30000000}
                  step={250000}
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  <span>£1m</span><span>£30m</span>
                </div>
              </div>

              {/* Deposit */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>Deposit</label>
                  <span className="text-sm font-bold" style={{ color: 'var(--color-accent)' }}>{deposit}% — {fmt(price * deposit / 100)}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={80}
                  step={5}
                  value={deposit}
                  onChange={e => setDeposit(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  <span>10%</span><span>80%</span>
                </div>
              </div>

              {/* Interest rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>Interest Rate (p.a.)</label>
                  <span className="text-sm font-bold" style={{ color: 'var(--color-accent)' }}>{rate}%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={8}
                  step={0.25}
                  value={rate}
                  onChange={e => setRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  <span>1%</span><span>8%</span>
                </div>
              </div>

              {/* Term */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>Mortgage Term</label>
                  <span className="text-sm font-bold" style={{ color: 'var(--color-accent)' }}>{term} years</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={35}
                  step={5}
                  value={term}
                  onChange={e => setTerm(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  <span>5 yrs</span><span>35 yrs</span>
                </div>
              </div>
            </div>

            {/* Results panel */}
            <div className="p-8 flex flex-col justify-center" style={{ background: '#0f1923' }}>
              <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#c9a84c' }}>
                Indicative Monthly Repayment
              </p>
              <p className="text-6xl font-bold mb-2 text-white leading-none">
                {fmt(monthlyPayment)}
              </p>
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>per month (capital + interest)</p>

              <div className="space-y-3 text-sm">
                {[
                  ['Loan Amount', fmt(loanAmount)],
                  ['Total Interest', fmt(monthlyPayment * numPayments - loanAmount)],
                  ['Total Repaid', fmt(monthlyPayment * numPayments)],
                  ['LTV Ratio', `${(100 - deposit).toFixed(0)}%`],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
                    <span className="font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs mt-6" style={{ color: 'rgba(255,255,255,0.3)' }}>
                For illustration only. Subject to lender criteria, SDLT, and survey. Speak to our finance partners for a formal offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Map placeholder ──────────────────────────────────────────────────────────

function MapSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>
            Our Markets
          </p>
          <h2 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Prime Central London Coverage
          </h2>
        </div>

        {/* Map placeholder */}
        <div
          className="relative rounded-2xl overflow-hidden border"
          style={{ borderColor: 'var(--color-border)', height: '420px', background: '#0a1628' }}
        >
          {/* Decorative grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Central decorative map marker cluster */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {[
                { x: 0, y: 0, label: 'Mayfair', size: 'lg' },
                { x: -160, y: -60, label: 'Notting Hill', size: 'sm' },
                { x: 120, y: -90, label: 'Belgravia', size: 'md' },
                { x: -80, y: 90, label: 'Chelsea', size: 'md' },
                { x: 200, y: 30, label: 'Knightsbridge', size: 'lg' },
                { x: -200, y: 40, label: 'Kensington', size: 'sm' },
                { x: 60, y: 110, label: 'Westminster', size: 'sm' },
                { x: -40, y: -120, label: 'Marylebone', size: 'sm' },
              ].map(({ x, y, label, size }) => (
                <div
                  key={label}
                  className="absolute flex flex-col items-center"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div
                    className="rounded-full border-2 flex items-center justify-center font-bold text-white"
                    style={{
                      width: size === 'lg' ? 44 : size === 'md' ? 34 : 26,
                      height: size === 'lg' ? 44 : size === 'md' ? 34 : 26,
                      background: size === 'lg' ? '#c9a84c' : 'rgba(201,168,76,0.5)',
                      borderColor: '#c9a84c',
                      fontSize: size === 'lg' ? 14 : 10,
                    }}
                  >
                    {size === 'lg' ? '★' : '·'}
                  </div>
                  <span
                    className="mt-1 px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap"
                    style={{ background: 'rgba(0,0,0,0.7)', color: '#c9a84c' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Overlay badge */}
          <div className="absolute bottom-6 left-6">
            <div className="rounded-xl px-5 py-4 border" style={{ background: 'rgba(0,0,0,0.85)', borderColor: 'rgba(201,168,76,0.3)' }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#c9a84c' }}>Our Coverage</p>
              <p className="text-white font-bold text-lg">Prime Central London</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>8 premier neighbourhoods · 40+ off-market listings</p>
            </div>
          </div>

          <div className="absolute bottom-6 right-6">
            <div className="text-xs px-4 py-2 rounded-lg border" style={{ background: 'rgba(0,0,0,0.7)', borderColor: 'rgba(201,168,76,0.3)', color: 'rgba(255,255,255,0.5)' }}>
              Interactive map available on request
            </div>
          </div>
        </div>

        {/* Neighbourhood chips */}
        <div className="flex flex-wrap gap-3 mt-6 justify-center">
          {['Mayfair', 'Belgravia', 'Knightsbridge', 'Chelsea', 'Kensington', 'Notting Hill', 'Marylebone', 'Westminster'].map(n => (
            <span
              key={n}
              className="px-4 py-2 rounded-full text-sm font-medium border"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)', background: 'var(--color-surface)' }}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials with photos ─────────────────────────────────────────────────

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sir Edward Pemberton',
      title: 'Chairman, Pemberton Capital',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      quote: 'In 30 years of property investment across four continents, I have never encountered an agency that combines discretion, market intelligence, and execution at the level Mayfair & Partners does. Victoria is simply the best agent in Prime Central London.',
      property: 'Sold: £22m Eaton Square Townhouse',
    },
    {
      name: 'Nadia Al-Fayed',
      title: 'Principal, Al-Fayed Family Office',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
      quote: 'Sebastian structured the acquisition of our London portfolio — six properties across Mayfair and Knightsbridge — with flawless coordination. He understood our tax position, our timeline, and our privacy requirements without a single briefing note.',
      property: 'Acquired: £47m Portfolio, 6 properties',
    },
    {
      name: 'Dr. Christoph Müller',
      title: 'Partner, Müller & Braun LLP',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200',
      quote: 'Relocating our family from Munich, Isabelle had us settled in our Knightsbridge apartment within a week of arrival. The furnished specification was exactly as described, and the handover was seamless. An extraordinary personal service.',
      property: 'Let: £18,000/month Knightsbridge Apartment',
    },
  ]

  return (
    <section className="py-20 px-4" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>
            Client Stories
          </p>
          <h2 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Trusted by the World's Most Discerning Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-8 border flex flex-col"
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}
            >
              {/* Gold quote mark */}
              <div className="text-5xl leading-none mb-6 font-serif" style={{ color: 'var(--color-accent)' }}>&ldquo;</div>

              <p className="flex-1 text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-muted)' }}>
                {t.quote}
              </p>

              <div className="border-t pt-6 flex items-center gap-4" style={{ borderColor: 'var(--color-border)' }}>
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover ring-2"
                  style={{ ringColor: 'var(--color-accent)' } as React.CSSProperties}
                />
                <div>
                  <p className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{t.name}</p>
                  <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>{t.title}</p>
                  <p className="text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>{t.property}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 rounded-2xl p-6 border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '£4.2bn', label: 'Total Sales Volume' },
              { value: '37 yrs', label: 'In Prime London' },
              { value: '70%', label: 'International Clients' },
              { value: '60%+', label: 'Off-Market Transactions' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>{value}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Booking section ──────────────────────────────────────────────────────────

function BookingSection() {
  return (
    <section id="booking" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Private Consultation
            </p>
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
              Arrange a Confidential Briefing
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Whether you are acquiring a flagship residence, divesting a portfolio, or seeking a prime London rental, our directors are available for a private consultation at your convenience — in Berkeley Square or by secure video call.
            </p>
            <div className="space-y-4">
              {[
                { icon: '🏛', title: 'Off-Market Access', desc: '40+ properties never listed publicly' },
                { icon: '🌍', title: 'Global Buyer Network', desc: 'Direct access to 3,200+ qualified HNWI' },
                { icon: '🔒', title: 'Full Discretion', desc: 'NDA available on request for all parties' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: 'var(--color-secondary)' }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-text)' }}>{title}</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking widget */}
          <div>
            <BookingWidget
              locale="en"
              showGuestCount={false}
              accentColor="#c9a84c"
              vertical="property-luxury"
              socialProof={{ count: 47, label: 'consultations booked this month' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PropertyLuxuryDemo() {
  const theme = createCustomTheme('classic', {
    primary: '#0d1f30',
    primaryHover: '#1a3550',
    secondary: '#f5f0e8',
    accent: '#c9a84c',
    background: '#ffffff',
    surface: '#faf8f5',
    text: '#0d1f30',
    textMuted: '#6b7280',
    border: '#e5ddd0',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      {/* Hero */}
      <Hero
        title="Extraordinary Homes. Extraordinary Lives."
        subtitle="Prime Central London's most prestigious properties — discreetly acquired and expertly placed since 1987"
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800"
        ctaPrimary={{ label: 'View Prime Listings', href: '#listings' }}
        ctaSecondary={{ label: 'Private Consultation', href: '#booking' }}
        overlayOpacity={0.55}
        height="full"
      />

      {/* Featured listings */}
      <div id="listings">
        <ListingSearch listings={listings} locale="en-GB" whatsappNumber="442074938000" />
      </div>

      {/* Map */}
      <MapSection />

      {/* Mortgage calculator */}
      <MortgageCalculator />

      {/* Team */}
      <AgentCard agents={agents} whatsappNumber="442074938000" />

      {/* Testimonials with photos */}
      <TestimonialsSection />

      {/* Booking */}
      <BookingSection />

      {/* FAQ */}
      <FAQAccordion items={faqs} locale="en" />

      {/* Review carousel */}
      <ReviewCarousel reviews={reviews} locale="en" />

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="442074938000"
        message="Good day. I would like to arrange a private consultation regarding prime London property."
      />
    </div>
  )
}

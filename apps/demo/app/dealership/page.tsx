'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { StatsHero } from '@scala-sites/core/components/stats-hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { VehicleInventory } from '@scala-sites/autoos/components/vehicle-inventory'
import { FinanceCalculator } from '@scala-sites/autoos/components/finance-calculator'
import { TestDriveBooking } from '@scala-sites/autoos/components/test-drive-booking'
import type { InventoryVehicle } from '@scala-sites/autoos/components/vehicle-inventory'

// --- MOCK DATA ---

const vehicles: InventoryVehicle[] = [
  {
    id: '1',
    make: 'Ford',
    model: 'Focus ST-Line X',
    year: 2022,
    mileage: 18400,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyStyle: 'Hatchback',
    condition: 'Certified',
    price: 21995,
    currency: 'GBP',
    monthlyFrom: 209,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80',
  },
  {
    id: '2',
    make: 'Volkswagen',
    model: 'Polo R-Line',
    year: 2023,
    mileage: 6200,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyStyle: 'Hatchback',
    condition: 'Certified',
    price: 19495,
    currency: 'GBP',
    monthlyFrom: 185,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
  },
  {
    id: '3',
    make: 'Toyota',
    model: 'Yaris Cross Hybrid',
    year: 2023,
    mileage: 11300,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyStyle: 'SUV',
    condition: 'Certified',
    price: 24990,
    currency: 'GBP',
    monthlyFrom: 239,
    image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800&q=80',
  },
  {
    id: '4',
    make: 'Nissan',
    model: 'Juke N-Sport',
    year: 2021,
    mileage: 32700,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyStyle: 'SUV',
    condition: 'Used',
    price: 16995,
    currency: 'GBP',
    monthlyFrom: 162,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
  },
  {
    id: '5',
    make: 'Hyundai',
    model: 'Tucson Premium',
    year: 2022,
    mileage: 24500,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyStyle: 'SUV',
    condition: 'Certified',
    price: 26490,
    currency: 'GBP',
    monthlyFrom: 249,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
  },
  {
    id: '6',
    make: 'Kia',
    model: 'Sportage GT-Line S',
    year: 2023,
    mileage: 8900,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyStyle: 'SUV',
    condition: 'Certified',
    price: 29995,
    currency: 'GBP',
    monthlyFrom: 285,
    image: 'https://images.unsplash.com/photo-1638618164682-12b986ec2a75?w=800&q=80',
  },
]

const testDriveVehicles = vehicles.map(v => ({
  id: v.id,
  label: `${v.year} ${v.make} ${v.model} — £${v.price.toLocaleString('en-GB')}`,
}))

const reviews = [
  {
    id: '1',
    author: 'Daniel Okafor',
    rating: 5,
    text: 'Bought a certified Yaris Cross from AutoSelect last month. The team was upfront on pricing, no hidden extras, and the car was spotless. Finance sorted in 20 minutes. Brilliant experience.',
    date: '2026-07-25',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Kelly Marsh',
    rating: 5,
    text: 'Came in not knowing what I wanted and left with a Kia Sportage after the most relaxed test drive I have ever had. No pressure, no sales pitch — just honest advice. Could not be happier.',
    date: '2026-07-10',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'James Thornton',
    rating: 5,
    text: 'Part-exchanged my old car and the valuation was fair and instant. The Volkswagen Polo I drove away in felt brand new — immaculate condition. AutoSelect is my go-to from now on.',
    date: '2026-06-28',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Amara Diallo',
    rating: 5,
    text: 'Used the finance calculator online before visiting — exactly what was quoted at the desk. No nasty surprises. The whole process from test drive to collection was 2 days. Exceptional.',
    date: '2026-06-14',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'What does Certified Pre-Owned mean at AutoSelect?',
    answer: 'Every Certified Pre-Owned vehicle passes our 120-point inspection, includes a minimum 12-month warranty, full HPI clear certificate, and a fresh MOT where applicable. Only vehicles under 6 years old with fewer than 70,000 miles qualify.',
  },
  {
    question: 'Can I part-exchange my current car?',
    answer: 'Yes. We accept all makes and models. Bring your vehicle to our East London showroom or request an online valuation via WhatsApp. We provide a formal written offer within 30 minutes of inspection.',
  },
  {
    question: 'What finance deals are available?',
    answer: 'We offer HP, PCP, and personal loan products through our FCA-authorised panel. Representative APR 9.9%. Decisions in minutes for most customers. Subject to status — 18+ only. 0% deposit deals available on selected stock.',
  },
  {
    question: 'How long does a test drive take?',
    answer: 'Standard test drives are 30 minutes around our local route. Extended 60-minute slots are available for vehicles over £20,000 — just request when booking via WhatsApp.',
  },
  {
    question: 'Do you offer home delivery?',
    answer: 'We deliver across Greater London at no extra cost. UK-wide delivery is available for a flat fee of £149, including full handover documentation and a walkthrough video.',
  },
  {
    question: 'Is 0% finance really available?',
    answer: 'Yes — selected certified vehicles are eligible for 0% APR on terms of 12–24 months. Subject to status and a minimum 20% deposit. Ask a member of the team or use our finance calculator for a personalised illustration.',
  },
]

const siteConfig = {
  name: 'AutoSelect',
  tagline: 'Certified Pre-Owned Vehicles — East London',
  phone: '+44 20 7946 0851',
  email: 'sales@autoselect.example.com',
  address: '240 Mile End Road, London E1 4LJ',
  social: { instagram: '#', facebook: '#' },
}

// --- NAV ---

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#1a1a2e]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#e63946] flex items-center justify-center">
            <span className="text-white font-black text-sm">AS</span>
          </div>
          <div className="leading-none">
            <span className="text-white font-bold tracking-wide text-base">AutoSelect</span>
            <p className="text-white/40 text-[10px] tracking-widest uppercase mt-0.5">Certified Pre-Owned</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Inventory', href: '#inventory' },
            { label: 'Finance', href: '#finance' },
            { label: 'Book Test Drive', href: '#test-drive' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={
                label === 'Book Test Drive'
                  ? 'px-5 py-2.5 bg-[#e63946] text-white font-bold text-sm uppercase tracking-wide hover:bg-[#c62a36] transition-colors'
                  : 'text-white/70 hover:text-white text-sm font-medium transition-colors'
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

// --- TRUST BAR ---

function TrustBar() {
  const badges = [
    { icon: '✓', label: '120-Point Inspection' },
    { icon: '✓', label: '12-Month Warranty' },
    { icon: '✓', label: 'HPI Clear Guarantee' },
    { icon: '✓', label: '0% Finance Available' },
    { icon: '✓', label: 'Part-Exchange Welcome' },
  ]
  return (
    <div className="bg-[#e63946] py-3 px-4 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 flex-nowrap whitespace-nowrap">
        {badges.map(({ icon, label }) => (
          <span key={label} className="text-white text-xs font-semibold tracking-wide flex items-center gap-1.5">
            <span className="font-black">{icon}</span>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

// --- STATS ---

function StatsSection() {
  const stats = [
    { value: '200+', label: 'Vehicles in Stock' },
    { value: '4.9★', label: 'Google Rating' },
    { value: '120', label: 'Point Inspection' },
    { value: '10min', label: 'Finance Decision' },
  ]
  return (
    <section className="bg-[#12122a] py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-[#e63946] text-4xl font-black mb-1">{value}</p>
            <p className="text-white/50 text-xs uppercase tracking-widest">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// --- URGENCY BANNER ---

function UrgencyBanner() {
  return (
    <div className="bg-[#1a1a2e] border-l-4 border-[#e63946] mx-auto max-w-7xl px-6 py-4 my-0 flex items-center gap-4">
      <span className="text-[#e63946] text-xl font-black">!</span>
      <p className="text-white text-sm font-medium">
        <strong className="text-[#e63946]">Just arrived this week:</strong> 18 fresh-in certified vehicles added to stock — many at below-market prices.{' '}
        <a href="#inventory" className="underline text-white/80 hover:text-white">Browse now</a>
      </p>
    </div>
  )
}

// --- PAGE ---

const dealershipJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'AutoSelect',
  description: '200+ certified pre-owned vehicles. Transparent pricing, flexible finance, and zero-pressure service in East London.',
  telephone: '+44 20 7946 0851',
  email: 'sales@autoselect.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '240 Mile End Road',
    addressLocality: 'London',
    postalCode: 'E1 4LJ',
    addressCountry: 'GB',
  },
}

const dealershipFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does Certified Pre-Owned mean at AutoSelect?', acceptedAnswer: { '@type': 'Answer', text: 'Every Certified Pre-Owned vehicle passes our 120-point inspection, includes a minimum 12-month warranty, full HPI clear certificate, and a fresh MOT where applicable.' } },
    { '@type': 'Question', name: 'Can I part-exchange my current car?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We accept all makes and models. We provide a formal written offer within 30 minutes of inspection.' } },
    { '@type': 'Question', name: 'What finance deals are available?', acceptedAnswer: { '@type': 'Answer', text: 'We offer HP, PCP, and personal loan products through our FCA-authorised panel. Representative APR 9.9%. Decisions in minutes for most customers.' } },
    { '@type': 'Question', name: 'How long does a test drive take?', acceptedAnswer: { '@type': 'Answer', text: 'Standard test drives are 30 minutes. Extended 60-minute slots are available for vehicles over £20,000 — just request when booking.' } },
    { '@type': 'Question', name: 'Do you offer home delivery?', acceptedAnswer: { '@type': 'Answer', text: 'We deliver across Greater London at no extra cost. UK-wide delivery is available for a flat fee of £149.' } },
    { '@type': 'Question', name: 'Is 0% finance really available?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — selected certified vehicles are eligible for 0% APR on terms of 12–24 months. Subject to status and a minimum 20% deposit.' } },
  ],
}

export default function DealershipDemo() {
  const theme = createCustomTheme('bold', {
    primary: '#1a1a2e',
    primaryHover: '#12122a',
    accent: '#e63946',
    background: '#0f0f1e',
    surface: '#1a1a2e',
    secondary: '#12122a',
    text: '#ffffff',
    textMuted: '#9ca3af',
    border: '#2d2d4e',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties} className="bg-[#0f0f1e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dealershipJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dealershipFaqJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <StatsHero
        title="Find Your Next Car"
        subtitle="200+ certified pre-owned vehicles. Transparent pricing, flexible finance, and zero-pressure service in East London."
        backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
        stats={[
          { value: '500+', label: 'Cars Sold' },
          { value: '4.9★', label: 'Customer Rating' },
          { value: '12 yrs', label: 'In Business' },
          { value: '98%', label: 'Satisfaction' },
        ]}
        ctaPrimary={{ label: 'Browse All Cars', href: '#inventory' }}
      />

      {/* Trust bar */}
      <TrustBar />

      {/* Stats */}
      <StatsSection />

      {/* Urgency banner */}
      <div className="bg-[#0f0f1e] py-6">
        <UrgencyBanner />
      </div>

      {/* Inventory */}
      <div id="inventory" className="bg-[#0f0f1e]">
        <VehicleInventory
          vehicles={vehicles}
          locale="en"
          onViewDetails={id => console.log('View', id)}
          onBookTestDrive={() => {
            const el = document.getElementById('test-drive')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>

      {/* Finance Calculator */}
      <div id="finance" className="bg-[#12122a]">
        <FinanceCalculator
          vehiclePrice={22000}
          currency="GBP"
          locale="en"
          defaultApr={9.9}
        />
      </div>

      {/* Test Drive Booking */}
      <div id="test-drive" className="bg-[#0f0f1e]">
        <TestDriveBooking
          vehicles={testDriveVehicles}
          title="Book Your Test Drive"
          subtitle="Available 7 days a week at our East London showroom. Bring your driving licence and we will do the rest."
        />
      </div>

      {/* Reviews */}
      <div className="bg-[#12122a]">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div className="bg-[#0f0f1e]">
        <FAQAccordion items={faqs} locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="442079460851"
        message="Hi AutoSelect — I saw your certified pre-owned stock online and would like to know more."
      />
    </div>
  )
}

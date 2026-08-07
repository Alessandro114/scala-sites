'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { DoctorBooking } from '@scala-sites/clinicoos/components/doctor-booking'
import { TreatmentMenu } from '@scala-sites/clinicoos/components/treatment-menu'
import { InsuranceChecker } from '@scala-sites/clinicoos/components/insurance-checker'
import type { SiteConfig, Review, FAQItem } from '@scala-sites/core/lib/types'

// --- MOCK DATA ---

const siteConfig: SiteConfig = {
  name: 'Smile Studio',
  description: 'Modern Dentistry — Chelsea, London',
  url: 'https://smilestudio.example.com',
  locale: 'en',
  vertical: 'clinicos',
  theme: 'minimal',
  branding: {
    primaryColor: '#0077b6',
    accentColor: '#0096c7',
  },
  contact: {
    phone: '+44 20 7946 0593',
    email: 'hello@smilestudio.example.com',
    whatsapp: '+442079460593',
    address: '48 King\'s Road, Chelsea, London SW3 4UD',
    coordinates: { lat: 51.4876, lng: -0.1679 },
  },
  social: {
    instagram: 'smilestudiochelsea',
    facebook: 'https://facebook.com/smilestudiochelsea',
  },
  seo: {
    title: 'Smile Studio | Modern Dentistry Chelsea London',
    description:
      'Award-winning dental practice in Chelsea. Checkups, whitening, implants, Invisalign and emergency dentistry. GDC registered. 0% finance available.',
  },
}

const doctors = [
  {
    id: '1',
    name: 'Dr. Natasha Patel',
    photo: '',
    specialty: 'General & Cosmetic Dentistry',
    qualifications: ['BDS King\'s College', 'MFDS RCS', 'PGCert Aesthetic Dent.'],
    nextSlot: 'Today 2:30 PM',
    nextSlotUrgent: true,
    rating: 4.9,
    reviewCount: 384,
    bio: 'Dr. Patel has over 12 years of experience in general and cosmetic dentistry. A graduate of King\'s College London Dental Institute, she specialises in smile makeovers, composite bonding, and Invisalign. She is known for her gentle approach and meticulous attention to detail.',
    consultationFee: 75,
    currency: 'GBP',
    bookingUrl: '#book',
  },
  {
    id: '2',
    name: 'Dr. James Whitfield',
    photo: '',
    specialty: 'Implantology',
    qualifications: ['BDS UCL', 'MSc Implant Dent.', 'EAO Member'],
    nextSlot: 'Tomorrow 10:00 AM',
    nextSlotUrgent: false,
    rating: 4.9,
    reviewCount: 218,
    bio: 'Dr. Whitfield is one of London\'s leading implantologists with over 1,500 implants placed. He holds a Masters in Implant Dentistry from UCL and lectures internationally on full-arch restoration. Complex cases are his speciality.',
    consultationFee: 150,
    currency: 'GBP',
    bookingUrl: '#book',
  },
  {
    id: '3',
    name: 'Dr. Sophie Chen',
    photo: '',
    specialty: 'Orthodontics & Invisalign',
    qualifications: ['BDS', 'MSc Orthodontics', 'Invisalign Diamond'],
    nextSlot: 'Today 4:00 PM',
    nextSlotUrgent: true,
    rating: 5.0,
    reviewCount: 297,
    bio: 'Dr. Chen is an Invisalign Diamond Provider — placing her in the top 1% of providers globally. She completed her Masters in Orthodontics at the Eastman Dental Institute and has straightened over 2,000 smiles. She treats both teens and adults.',
    consultationFee: 95,
    currency: 'GBP',
    bookingUrl: '#book',
  },
]

const treatments = [
  // General
  { id: '1', name: 'New Patient Checkup & X-Rays', category: 'General Dentistry', description: 'Comprehensive examination, digital X-rays, and personalised treatment plan.', duration: '60 min', price: 95, currency: 'GBP', mostRequested: true },
  { id: '2', name: 'Routine Examination (existing patient)', category: 'General Dentistry', description: 'Full oral health check with periodontal assessment.', duration: '30 min', price: 55, currency: 'GBP' },
  { id: '3', name: 'Scale & Polish', category: 'General Dentistry', description: 'Professional cleaning to remove plaque and tartar build-up.', duration: '45 min', price: 85, currency: 'GBP', insuranceAccepted: true },
  { id: '4', name: 'Emergency Appointment', category: 'General Dentistry', description: 'Same-day slots for pain, swelling, broken teeth, and lost fillings.', duration: '30 min', price: 95, currency: 'GBP', mostRequested: true },
  // Cosmetic
  { id: '5', name: 'Tooth Whitening (home kit)', category: 'Cosmetic Dentistry', description: 'Custom trays and professional-grade whitening gel. Results in 2 weeks.', duration: '30 min', price: 295, currency: 'GBP', mostRequested: true },
  { id: '6', name: 'Composite Bonding', category: 'Cosmetic Dentistry', description: 'Tooth-coloured resin to reshape, repair, or close gaps. Per tooth.', duration: '60 min', price: 250, currency: 'GBP' },
  { id: '7', name: 'Porcelain Veneers (per tooth)', category: 'Cosmetic Dentistry', description: 'Handcrafted ultra-thin ceramic veneers for a permanent smile transformation.', duration: '120 min', price: 950, currency: 'GBP' },
  { id: '8', name: 'Smile Makeover Consultation', category: 'Cosmetic Dentistry', description: 'Digital smile design, mock-up preview, and full treatment plan.', duration: '60 min', price: 75, currency: 'GBP' },
  // Orthodontics
  { id: '9', name: 'Invisalign Full', category: 'Orthodontics', description: 'Comprehensive clear aligner treatment for complex cases. Duration varies.', duration: '12–24 months', price: 3800, currency: 'GBP', mostRequested: true },
  { id: '10', name: 'Invisalign Lite', category: 'Orthodontics', description: 'Minor tooth movement — ideal for mild crowding and spacing. Up to 14 aligners.', duration: '3–6 months', price: 2200, currency: 'GBP' },
  { id: '11', name: 'Invisalign Consultation', category: 'Orthodontics', description: 'iTero scan and digital treatment preview — no obligation.', duration: '45 min', price: 0, currency: 'GBP' },
  // Implants
  { id: '12', name: 'Single Tooth Implant', category: 'Implants', description: 'Nobel Biocare implant with ceramic crown. Includes abutment. Bone graft extra if required.', duration: 'Multi-visit', price: 2800, currency: 'GBP' },
  { id: '13', name: 'All-on-4 Consultation', category: 'Implants', description: 'CBCT scan, treatment planning, and full-arch implant bridge quotation.', duration: '60 min', price: 150, currency: 'GBP' },
]

const insuranceProviders = [
  {
    id: '1',
    name: 'BUPA Dental Cover',
    plans: ['Essential', 'Comprehensive', 'Premium'],
    coveredTreatments: {
      'Scale & Polish': { covered: true, note: 'Covered — 2 per year' },
      'Routine Examination': { covered: true, note: 'Covered — 2 per year' },
      'X-Rays': { covered: true, note: 'Covered' },
      'Fillings': { covered: true, note: 'Covered on Comprehensive & Premium' },
      'Crowns': { covered: false, note: 'Not covered on Essential' },
    },
  },
  {
    id: '2',
    name: 'AXA Dental Insurance',
    plans: ['Level 1', 'Level 2', 'Level 3'],
    coveredTreatments: {
      'Scale & Polish': { covered: true, note: 'Covered — 1–2 per year by plan' },
      'Routine Examination': { covered: true, note: 'Covered on all plans' },
      'Fillings': { covered: true, note: 'NHS rate reimbursed on Level 1+' },
      'Emergency Treatment': { covered: true, note: 'Covered on Level 2 & 3' },
      'Crowns': { covered: true, note: 'Covered on Level 3 only' },
    },
  },
  {
    id: '3',
    name: 'Denplan (Simplyhealth)',
    plans: ['Care', 'Essentials', 'Confidence'],
    coveredTreatments: {
      'Scale & Polish': { covered: true, note: 'Fully covered' },
      'Routine Examination': { covered: true, note: 'Fully covered' },
      'X-Rays': { covered: true, note: 'Fully covered' },
      'Emergency Treatment': { covered: true, note: 'UK & abroad on Confidence' },
      'Cosmetic Treatments': { covered: false, note: 'Not covered on any plan' },
    },
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Rebecca T.',
    rating: 5,
    text: 'I have always been nervous about dentists but Dr. Patel made me feel completely at ease. The practice is beautiful, modern, and spotlessly clean. My Invisalign treatment has transformed my smile and I cannot stop grinning.',
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Marcus H.',
    rating: 5,
    text: 'Had a single implant done by Dr. Whitfield. The process was explained clearly at every stage, virtually painless, and the result is indistinguishable from my real teeth. Worth every penny.',
    date: '2026-07-15',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Priya S.',
    rating: 5,
    text: 'Dr. Chen did my Invisalign in 9 months. She is precise, patient, and the results are stunning. The practice uses the latest iTero scanner so you can see your result before you even start. Brilliant.',
    date: '2026-07-02',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'James O.',
    rating: 5,
    text: 'Booked an emergency appointment on a Saturday morning via WhatsApp — sorted in 20 minutes. Broken tooth repaired with composite bonding and it looks perfect. Incredible service.',
    date: '2026-06-20',
    source: 'google',
    verified: true,
  },
  {
    id: '5',
    author: 'Charlotte W.',
    rating: 5,
    text: 'The whitening treatment with custom trays made my teeth several shades whiter within 10 days. Simple process, no sensitivity, and the team checked in with me throughout. Five stars without hesitation.',
    date: '2026-06-08',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Are you GDC registered?',
    answer: 'Yes. All of our dentists are fully registered with the General Dental Council (GDC). Our principal dentist Dr. Patel\'s GDC registration number is available on request. We adhere to CQC standards and undergo annual CPD.',
  },
  {
    question: 'Do you offer 0% finance?',
    answer: 'Yes. We offer 0% interest-free finance on treatment plans over £500 on terms of 6, 10, or 12 months. Longer terms (24–60 months) are available at representative 9.9% APR. Subject to status — 18+ only. We use Tabeo as our finance provider.',
  },
  {
    question: 'Can I get an emergency appointment?',
    answer: 'We always reserve same-day emergency slots. Message us on WhatsApp before 10am for the best chance of a same-day appointment, or call directly. Weekend emergency appointments are available for registered patients.',
  },
  {
    question: 'Do you accept NHS patients?',
    answer: 'Smile Studio is a private dental practice. We do not currently accept NHS patients. However, our fees are competitive with private practices across Chelsea, and we offer flexible 0% finance to spread the cost of treatment.',
  },
  {
    question: 'How long does Invisalign take?',
    answer: 'Invisalign Lite (mild cases) typically takes 3–6 months. Invisalign Full (moderate to complex cases) typically takes 12–24 months. Dr. Chen will give you a precise estimate after your free iTero scan consultation.',
  },
  {
    question: 'Is teeth whitening safe?',
    answer: 'Yes, when supervised by a GDC-registered dental professional. We use medical-grade whitening gel at safe concentrations. Over-the-counter products sold outside dental practices are limited by law to far lower concentrations and are far less effective.',
  },
]

// --- NAV ---

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#0077b6]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#0077b6] rounded-full flex items-center justify-center">
            <span className="text-white font-black text-sm">SS</span>
          </div>
          <div className="leading-none">
            <span className="text-[#0077b6] font-bold tracking-wide text-base">Smile Studio</span>
            <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-0.5">Modern Dentistry · Chelsea</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <span className="text-xs text-gray-500 hidden lg:block">GDC Registered · 0% Finance Available</span>
          {[
            { label: 'Services', href: '#services' },
            { label: 'Doctors', href: '#book' },
            { label: 'Book Checkup', href: '#book', highlight: true },
          ].map(({ label, href, highlight }) => (
            <a
              key={label}
              href={href}
              className={
                highlight
                  ? 'px-5 py-2.5 bg-[#0077b6] text-white font-bold text-sm rounded-full hover:bg-[#005f92] transition-colors'
                  : 'text-gray-600 hover:text-[#0077b6] text-sm font-medium transition-colors'
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
  const items = [
    'GDC Registered Dentists',
    'CQC Inspected',
    '0% Finance Available',
    '4.9★ on Google (620+ reviews)',
    'Saturday & Evening Appointments',
    'Emergency Same-Day Slots',
  ]
  return (
    <div className="bg-[#0077b6] py-2.5 px-4 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 flex-nowrap whitespace-nowrap">
        {items.map((item, i) => (
          <span key={item} className="text-white text-xs font-medium flex items-center gap-2">
            {i > 0 && <span className="text-white/30">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// --- ABOVE-FOLD CTA ---

function AboveFoldCTA() {
  return (
    <section className="bg-white py-10 px-6 border-b border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-[#0077b6] text-2xl font-bold mb-1">New Patient? Book Your Checkup Today</h2>
          <p className="text-gray-500 text-sm">Comprehensive exam + digital X-rays for <strong className="text-gray-700">£95</strong> · Results same day · 0% finance on all treatment plans</p>
        </div>
        <a
          href="#book"
          className="shrink-0 px-8 py-4 bg-[#0077b6] text-white font-bold text-sm uppercase tracking-wide rounded-full hover:bg-[#005f92] transition-colors"
        >
          Book a Checkup
        </a>
      </div>
    </section>
  )
}

// --- STATS ---

function StatsSection() {
  const stats = [
    { value: '4.9★', label: '620+ Google Reviews' },
    { value: '12+', label: 'Years in Chelsea' },
    { value: '1,500+', label: 'Implants Placed' },
    { value: '2,000+', label: 'Invisalign Patients' },
  ]
  return (
    <section className="bg-[#f0f8ff] py-14 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-[#0077b6] text-3xl font-black mb-1">{value}</p>
            <p className="text-gray-500 text-xs uppercase tracking-wide">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// --- PAGE ---

export default function ClinicDentalDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#0077b6',
    primaryHover: '#005f92',
    accent: '#0096c7',
    background: '#ffffff',
    surface: '#f0f8ff',
    secondary: '#e8f4fd',
    text: '#1a1a2e',
    textMuted: '#6b7280',
    border: '#bde0f5',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties} className="bg-white">
      <Navbar />

      {/* Hero */}
      <Hero
        title="Modern Dentistry in Chelsea"
        subtitle="Smile Studio — GDC registered dentists, 0% finance, and same-day emergency appointments on King's Road."
        backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=800&fit=crop"
        ctaPrimary={{ label: 'Book a Checkup', href: '#book' }}
        ctaSecondary={{ label: 'See All Treatments', href: '#services' }}
        overlayOpacity={0.65}
      />

      {/* Trust bar */}
      <TrustBar />

      {/* Above-fold CTA */}
      <AboveFoldCTA />

      {/* Stats */}
      <StatsSection />

      {/* Treatment Menu */}
      <div id="services" className="bg-white">
        <TreatmentMenu
          treatments={treatments}
          locale="en"
          title="Treatments & Fees"
          subtitle="Transparent pricing with no hidden extras. 0% finance available on all plans over £500."
        />
      </div>

      {/* Doctor Booking */}
      <div id="book" className="bg-[#f0f8ff]">
        <DoctorBooking
          doctors={doctors}
          locale="en"
          title="Meet Our Dentists"
          subtitle="Book directly with the right specialist for your treatment"
        />
      </div>

      {/* Insurance Info */}
      <div id="insurance" className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#0077b6' }}>Insurance Accepted</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We accept all major dental insurance plans. Contact us to verify your coverage before your appointment.</p>
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {['Bupa Dental', 'Denplan', 'AXA PPP', 'Cigna Dental', 'Vitality'].map(p => (
            <span key={p} className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium">{p}</span>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-[#f0f8ff]">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div className="bg-white">
        <FAQAccordion items={faqs} locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="442079460593"
        message="Hi Smile Studio — I would like to book a checkup or get more information about a treatment."
      />
    </div>
  )
}

'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { StylistBooking } from '@scala-sites/beautyos/components/stylist-booking'
import { ServiceMenu } from '@scala-sites/beautyos/components/service-menu'

const therapists = [
  {
    id: '1',
    name: 'Isabelle Moreau',
    photo: '',
    role: 'Senior Massage Therapist',
    specialties: ['Hot Stone', 'Deep Tissue', 'Lymphatic Drainage'],
    rating: 5.0,
    reviewCount: 211,
    nextAvailable: 'Today 2:00 PM',
    slotsToday: 2,
  },
  {
    id: '2',
    name: 'Priya Nair',
    photo: '',
    role: 'Facial & Skin Specialist',
    specialties: ['HydraFacial', 'Microdermabrasion', 'LED Therapy'],
    rating: 4.9,
    reviewCount: 178,
    nextAvailable: 'Today 4:30 PM',
    slotsToday: 1,
  },
  {
    id: '3',
    name: 'Sophie Chen',
    photo: '',
    role: 'Body Treatment Expert',
    specialties: ['Aromatherapy', 'Body Wrap', 'Reflexology'],
    rating: 4.8,
    reviewCount: 134,
    nextAvailable: 'Tomorrow 10:00 AM',
  },
  {
    id: '4',
    name: 'Amara Osei',
    photo: '',
    role: 'Nail & Beauty Technician',
    specialties: ['Gel Manicure', 'Pedicure', 'Nail Art', 'Lash Lift'],
    rating: 4.9,
    reviewCount: 96,
    nextAvailable: 'Today 5:00 PM',
    slotsToday: 3,
  },
]

const services = [
  // Massages
  { id: '1', name: 'Signature Serenity Massage', category: 'Massages', duration: '60 min', price: 95, currency: 'GBP', popular: true, description: 'Our signature blend of Swedish and aromatherapy for full-body relaxation' },
  { id: '2', name: 'Hot Stone Ritual', category: 'Massages', duration: '90 min', price: 130, currency: 'GBP', popular: true, description: 'Warm volcanic stones melt tension and restore deep calm' },
  { id: '3', name: 'Deep Tissue Therapy', category: 'Massages', duration: '60 min', price: 105, currency: 'GBP', description: 'Targeted pressure for chronic tension and muscle recovery' },
  { id: '4', name: 'Couples Retreat', category: 'Massages', duration: '90 min', price: 220, currency: 'GBP', description: 'Side-by-side massage for two in our private suite' },
  // Facials
  { id: '5', name: 'HydraFacial MD', category: 'Facials', duration: '60 min', price: 145, currency: 'GBP', popular: true, description: 'Deep cleanse, extract, and hydrate in one transformative treatment' },
  { id: '6', name: 'Brightening Vitamin C Facial', category: 'Facials', duration: '50 min', price: 95, currency: 'GBP', description: 'Targets dullness, uneven tone, and fine lines' },
  { id: '7', name: 'LED Light Therapy Facial', category: 'Facials', duration: '45 min', price: 85, currency: 'GBP', description: 'Red + blue light for collagen boost and acne reduction' },
  // Body
  { id: '8', name: 'Detox Seaweed Wrap', category: 'Body Treatments', duration: '75 min', price: 110, currency: 'GBP', description: 'Mineral-rich seaweed cocoon to purify and firm the skin' },
  { id: '9', name: 'Himalayan Salt Scrub', category: 'Body Treatments', duration: '45 min', price: 75, currency: 'GBP', description: 'Full-body exfoliation leaving skin silky smooth' },
  { id: '10', name: 'Reflexology Session', category: 'Body Treatments', duration: '45 min', price: 70, currency: 'GBP', description: 'Pressure-point foot therapy to restore whole-body balance' },
  // Nails & Beauty
  { id: '11', name: 'Luxury Gel Manicure', category: 'Nails & Beauty', duration: '60 min', price: 55, currency: 'GBP', popular: true },
  { id: '12', name: 'Spa Pedicure', category: 'Nails & Beauty', duration: '75 min', price: 65, currency: 'GBP' },
  { id: '13', name: 'Lash Lift & Tint', category: 'Nails & Beauty', duration: '50 min', price: 75, currency: 'GBP' },
  // Packages
  { id: '14', name: 'Half-Day Sanctuary', category: 'Packages', duration: '240 min', price: 295, currency: 'GBP', description: 'Signature massage + HydraFacial + manicure + light lunch' },
  { id: '15', name: 'Bridal Radiance Package', category: 'Packages', duration: '300 min', price: 385, currency: 'GBP', popular: true, description: 'Pre-wedding body wrap, facial, manicure, pedicure, and lash lift' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600', alt: 'Tranquil treatment room with candles', category: 'Spaces', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600', alt: 'Facial treatment in progress', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600', alt: 'Relaxation lounge with robes', category: 'Spaces', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600', alt: 'Hot stone massage setup', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600', alt: 'Aromatherapy oils and botanicals', category: 'Products', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600', alt: 'Manicure station with soft lighting', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600', alt: 'Couples suite with rose petals', category: 'Spaces', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600', alt: 'Herbal compress massage', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600', alt: 'Body scrub ritual', category: 'Products', width: 600, height: 400 },
]

const reviews = [
  {
    id: '1',
    author: 'Charlotte H.',
    rating: 5,
    text: 'The Hot Stone Ritual was the most relaxing 90 minutes of my life. Isabelle has magic hands and the room was pure heaven — soft music, rose scent, warm lighting. I left feeling completely renewed.',
    date: '2026-07-30',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Natasha V.',
    rating: 5,
    text: 'Had the HydraFacial with Priya and my skin looked 5 years younger the next morning. She tailored the serums to my skin type perfectly. Already booked my second appointment.',
    date: '2026-07-18',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Diana M.',
    rating: 5,
    text: 'Came in for the Bridal Package the week before my wedding. Sophie and Amara were exceptional — professional, calming, and genuinely invested in making me feel beautiful. Worth every penny.',
    date: '2026-07-02',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'Jess L.',
    rating: 5,
    text: 'The spa itself is stunning — feels like stepping into Bali in the middle of Chelsea. The Detox Seaweed Wrap was incredible. My skin was glowing for days afterward.',
    date: '2026-06-14',
    source: 'Google',
    verified: true,
  },
  {
    id: '5',
    author: 'Olivia T.',
    rating: 4,
    text: 'Genuinely luxurious experience. Reflexology with Sophie completely sorted my tension headaches that I\'d had for weeks. Booking via WhatsApp was so easy — quick reply and confirmed within minutes.',
    date: '2026-06-05',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'What should I do before my first visit?',
    answer: 'We recommend arriving 15 minutes early to complete a short wellness consultation and settle into our relaxation lounge with herbal tea. Avoid heavy meals 2 hours before body treatments.',
  },
  {
    question: 'What do I wear during treatments?',
    answer: 'We provide plush robes, slippers, and disposable undergarments for all body treatments. You will only be uncovered in the area being treated, with full draping throughout.',
  },
  {
    question: 'Can I book the couples suite for two people?',
    answer: 'Absolutely. Our couples suite accommodates two guests simultaneously with two therapists. We offer the Couples Retreat massage and can build bespoke duo packages on request.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 48-72 hours ahead, especially for weekends and the couples suite. Same-day slots do appear — check availability via WhatsApp for last-minute openings.',
  },
  {
    question: 'Do you offer gift vouchers?',
    answer: 'Yes! Gift vouchers are available for any treatment or monetary value. They make a beautiful gift and are valid for 12 months. Ask via WhatsApp or book online.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 24+ hours in advance are fully refunded. Within 24 hours, a 50% cancellation fee applies. No-shows are charged in full.',
  },
]

const siteConfig = {
  name: 'Serenity Spa & Wellness',
  tagline: 'A sanctuary of calm in the heart of Chelsea, London',
  phone: '+44 20 7351 4820',
  email: 'hello@example.com',
  address: '14 Cale Street, Chelsea, London SW3 3QU',
  social: { instagram: '#', facebook: '#' },
}

export default function BeautySpaDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#8b6f5e',
    primaryHover: '#7a5f4e',
    secondary: '#fdf6f0',
    accent: '#c9956c',
    background: '#fefcfa',
    surface: '#fdf6f0',
    text: '#2d2420',
    textMuted: '#9d8478',
    border: '#e8d9cf',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>

      {/* Hero */}
      <Hero
        title="Your Moment of Pure Calm"
        subtitle="World-class massage, facials, and body rituals — expertly crafted for complete renewal in Chelsea, London"
        backgroundImage="https://images.unsplash.com/photo-1554057009-5f3f2febe3f5?w=1600"
        ctaPrimary={{ label: 'Book Your Treatment', href: '#booking' }}
        ctaSecondary={{ label: 'Explore Treatments', href: '#services' }}
      />

      {/* Welcome banner */}
      <div className="py-10 px-6 text-center" style={{ background: 'var(--color-secondary)' }}>
        <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>
          Chelsea&apos;s Premier Day Spa
        </p>
        <h2 className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
          Welcome to Serenity
        </h2>
        <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          Nestled on a quiet Chelsea street, Serenity Spa offers an escape from the pace of London.
          From restorative massages to radiance-boosting facials, every treatment is personalised
          to nurture your mind, body, and spirit.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm" style={{ color: 'var(--color-text-muted)' }}>
          <span>4 Expert Therapists</span>
          <span style={{ color: 'var(--color-border)' }}>|</span>
          <span>15 Signature Treatments</span>
          <span style={{ color: 'var(--color-border)' }}>|</span>
          <span>Private Couples Suite</span>
          <span style={{ color: 'var(--color-border)' }}>|</span>
          <span>Organic Products Only</span>
        </div>
      </div>

      {/* Booking */}
      <div id="booking" style={{ background: 'var(--color-background)' }}>
        <StylistBooking stylists={therapists} />
      </div>

      {/* Services */}
      <div id="services" style={{ background: 'var(--color-surface)' }}>
        <ServiceMenu services={services} locale="en-GB" />
      </div>

      {/* Gallery */}
      <div style={{ background: 'var(--color-background)' }}>
        <Gallery images={galleryImages} locale="en" columns={3} />
      </div>

      {/* Reviews */}
      <div style={{ background: 'var(--color-secondary)' }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--color-background)' }}>
        <FAQAccordion items={faqs} locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="442073514820"
        message="Hi, I'd like to book a treatment at Serenity Spa"
      />
    </div>
  )
}

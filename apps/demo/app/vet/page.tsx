'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { VetBooking } from '@scala-sites/petos/components/vet-booking'
import { ServicePackages } from '@scala-sites/petos/components/service-packages'
import { PetProfile } from '@scala-sites/petos/components/pet-profile'

const vets = [
  {
    id: '1',
    name: 'Dr. Amelia Hartley',
    photo: '',
    title: 'Principal Veterinarian — Small Animals & Surgery',
    specialties: ['Small Animals', 'Surgery'] as ('Small Animals' | 'Exotics' | 'Surgery' | 'Dental')[],
    qualifications: ['BVSc', 'MRCVS', 'CertSAS', 'RCVS Specialist'],
    nextAvailable: 'Today, 14:30',
    emergency24_7: true,
    bookingUrl: '#',
  },
  {
    id: '2',
    name: 'Dr. Rohan Patel',
    photo: '',
    title: 'Exotic Animal Specialist',
    specialties: ['Exotics', 'Small Animals'] as ('Small Animals' | 'Exotics' | 'Surgery' | 'Dental')[],
    qualifications: ['BVetMed', 'MRCVS', 'DipECZM', 'CertZooMed'],
    nextAvailable: 'Tomorrow, 10:00',
    bookingUrl: '#',
  },
  {
    id: '3',
    name: 'Dr. Sophie Müller',
    photo: '',
    title: 'Dental & Preventive Care Veterinarian',
    specialties: ['Dental', 'Small Animals'] as ('Small Animals' | 'Exotics' | 'Surgery' | 'Dental')[],
    qualifications: ['MVB', 'MRCVS', 'EVDS Diplomate', 'CertAVP'],
    nextAvailable: 'Friday, 09:00',
    bookingUrl: '#',
  },
]

const packages = [
  {
    id: '1',
    name: 'Puppy / Kitten Plan',
    price: 29,
    currency: 'GBP',
    period: 'month' as const,
    services: [
      'Full vaccination course',
      'Monthly health checks (first year)',
      'Parasite prevention (flea & worming)',
      'Microchipping',
      'Nutrition & behaviour consultation',
    ],
    savingsVsIndividual: 120,
    ctaLabel: 'Sign Up',
    ctaUrl: '#',
  },
  {
    id: '2',
    name: 'Annual Wellness',
    price: 19,
    currency: 'GBP',
    period: 'month' as const,
    highlighted: true,
    services: [
      'Annual booster vaccinations',
      '2× health checks per year',
      'Parasite prevention (flea & worming)',
      'Dental check included',
      '10% off all treatments',
      'Free nurse consultations',
    ],
    savingsVsIndividual: 85,
    ctaLabel: 'Sign Up',
    ctaUrl: '#',
  },
  {
    id: '3',
    name: 'Senior Care',
    price: 35,
    currency: 'GBP',
    period: 'month' as const,
    services: [
      'Quarterly health checks',
      'Annual bloods & urinalysis',
      'Blood pressure monitoring',
      'Parasite prevention',
      'Joint supplement discount',
      'Priority appointments',
    ],
    savingsVsIndividual: 160,
    ctaLabel: 'Sign Up',
    ctaUrl: '#',
  },
  {
    id: '4',
    name: 'Dental Plan',
    price: 15,
    currency: 'GBP',
    period: 'month' as const,
    services: [
      'Annual dental scale & polish',
      'Monthly dental nurse check',
      'Home care kit (toothbrush & paste)',
      '20% off dental extractions',
    ],
    savingsVsIndividual: 60,
    ctaLabel: 'Sign Up',
    ctaUrl: '#',
  },
]

const reviews = [
  {
    id: '1',
    author: 'Priya S.',
    rating: 5,
    text: 'Dr. Hartley performed emergency surgery on our spaniel at midnight and she was calm, kind, and incredibly skilled. We are so grateful. Truly exceptional care.',
    date: '2026-07-22',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'James O.',
    rating: 5,
    text: "Our bearded dragon, Mango, has never been in better health since switching to Dr. Patel. His knowledge of exotics is second to none — he spotted a calcium deficiency no one else had noticed.",
    date: '2026-07-10',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Charlotte B.',
    rating: 5,
    text: 'The Puppy Plan has been wonderful value. The whole team is so patient with our nervous rescue greyhound. The monthly health checks have given us so much confidence as first-time dog owners.',
    date: '2026-06-28',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'Tariq M.',
    rating: 5,
    text: "Dr. Müller did a full dental clean on our elderly cat and the difference is remarkable — she's eating properly again for the first time in years. Worth every penny.",
    date: '2026-06-14',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'Do you offer emergency appointments outside normal hours?',
    answer: 'Yes. Dr. Hartley is available for 24/7 emergencies — look for the "24/7 Emergency" badge on her profile. For out-of-hours emergencies, please call our dedicated emergency line and we will triage your pet immediately.',
  },
  {
    question: 'Which species do you treat?',
    answer: 'We treat dogs, cats, rabbits, guinea pigs, birds, and a wide range of exotic animals including reptiles, ferrets, and small mammals. Dr. Patel is our exotic specialist with over 12 years of experience.',
  },
  {
    question: 'Can I cancel or change a care package?',
    answer: 'Absolutely. All plans are rolling monthly contracts with no long-term commitment. You can cancel or change your plan with 30 days\' notice at any time.',
  },
  {
    question: 'How do I register a new pet?',
    answer: 'Simply use the "Register Your Pet" form on this page. Once submitted, one of our nursing team will contact you within 24 hours to confirm your welcome appointment.',
  },
  {
    question: 'Is parking available at the clinic?',
    answer: 'Yes, we have 8 dedicated parking spaces at the rear of 22 Richmond Road. Richmond train station is a 5-minute walk. Bus routes 33, 65, and 490 all stop within 2 minutes of the clinic.',
  },
]

const siteConfig = {
  name: 'Pawsitive Care Veterinary',
  tagline: 'Caring for your family — paws and all',
  phone: '+44 20 8332 5500',
  email: 'hello@pawsitivecarevet.co.uk',
  address: '22 Richmond Road, London TW1 3AB',
  social: { instagram: '#', facebook: '#' },
}

export default function VetDemo() {
  return (
    <div
      style={themeToStyleObject(createCustomTheme('minimal', {
        primary: '#166534',
        primaryHover: '#14532d',
        accent: '#f59e0b',
        background: '#fefce8',
        surface: '#ffffff',
        text: '#1c1917',
        secondary: '#f0fdf4',
        textMuted: '#78716c',
        border: '#d1fae5',
      })) as React.CSSProperties}
    >
      <Hero
        title="Exceptional Care for Every Paw, Wing & Scale"
        subtitle="Expert veterinary care in the heart of Richmond — from routine check-ups to complex surgery, we treat every patient like family"
        backgroundImage="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1600"
        ctaPrimary={{ label: 'Book an Appointment', href: '#booking' }}
        ctaSecondary={{ label: 'View Care Packages', href: '#packages' }}
      />

      <div id="booking">
        <VetBooking vets={vets} />
      </div>

      <div id="packages">
        <ServicePackages packages={packages} locale="en" title="Care Packages" />
      </div>

      <div id="register">
        <PetProfile />
      </div>

      <ReviewCarousel reviews={reviews} locale="en" />
      <FAQAccordion items={faqs} locale="en" />
      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="442083325500" message="Hi, I'd like to book an appointment at Pawsitive Care" />
    </div>
  )
}

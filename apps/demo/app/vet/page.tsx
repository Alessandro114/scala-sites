'use client'
import Image from 'next/image';

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
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

// ─── JSON-LD DATA ───────────────────────────────────────────────────────────
const vetLocalBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'VeterinaryCare',
  name: 'Pawsitive Care Veterinary',
  description: 'Expert veterinary care in Richmond — routine check-ups to complex surgery, 24/7 emergency service.',
  url: 'https://pawsitivecarevet.example.com',
  telephone: '+44 20 8332 5500',
  email: 'hello@pawsitivecarevet.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 Richmond Road',
    addressLocality: 'London',
    postalCode: 'TW1 3AB',
    addressCountry: 'GB',
  },
  openingHours: 'Mo-Fr 08:00-20:00, Sa 09:00-17:00, Su 10:00-16:00',
}

const vetFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─── CUSTOM VET HERO ─────────────────────────────────────────────────────────
function VetHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px 60px',
        background: '#f0fdf4',
        overflow: 'hidden',
      }}
    >
      <style>{`
        /* Paw print repeating pattern via CSS */
        .vet-pattern-bg {
          position: absolute;
          inset: 0;
          opacity: 0.055;
          background-image:
            radial-gradient(circle 5px at 0 0, #166534 5px, transparent 5px),
            radial-gradient(circle 3px at 10px 0, #166534 3px, transparent 3px),
            radial-gradient(circle 3px at -10px 0, #166534 3px, transparent 3px),
            radial-gradient(circle 3px at 0 -10px, #166534 3px, transparent 3px);
          background-size: 60px 60px;
          background-position: 0 0, 10px 0, -10px 0, 0 -10px;
          pointer-events: none;
        }
        @keyframes heartbeat {
          0%   { transform: scaleX(1); }
          10%  { transform: scaleX(1.02) scaleY(1.3); }
          20%  { transform: scaleX(1); }
          30%  { transform: scaleX(1.015) scaleY(1.18); }
          40%  { transform: scaleX(1); }
          100% { transform: scaleX(1); }
        }
        .heartbeat-line {
          animation: heartbeat 1.4s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes vetFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vet-fade-up {
          opacity: 0;
          animation: vetFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes softBob {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>

      {/* Paw print background pattern */}
      <div className="vet-pattern-bg" />

      {/* Soft green blob decorations */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-60px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(134,239,172,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-40px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(134,239,172,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Rounded container — not full bleed */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 8px 60px rgba(22,101,52,0.10), 0 2px 12px rgba(22,101,52,0.06)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '580px',
        }}
      >
        {/* Left: content */}
        <div
          style={{
            padding: '64px 56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Trust badge — 24/7 */}
          <div
            className="vet-fade-up"
            style={{
              animationDelay: '0.05s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#dcfce7',
              border: '1px solid #86efac',
              borderRadius: '30px',
              padding: '6px 16px',
              marginBottom: '28px',
              width: 'fit-content',
            }}
          >
            <span style={{ color: '#16a34a', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              24/7 Emergency Care
            </span>
            <span style={{ color: '#16a34a', fontSize: '1.1rem', lineHeight: 1 }}>&#10003;</span>
          </div>

          {/* Heading */}
          <h1
            className="vet-fade-up"
            style={{
              animationDelay: '0.15s',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#14532d',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '18px',
            }}
          >
            Exceptional Care<br />for Every Paw,<br />Wing &amp; Scale
          </h1>

          {/* Subtitle */}
          <p
            className="vet-fade-up"
            style={{
              animationDelay: '0.28s',
              fontSize: '1.05rem',
              color: '#52796f',
              lineHeight: 1.7,
              marginBottom: '36px',
              fontWeight: 400,
            }}
          >
            Expert veterinary care in the heart of Richmond — from routine
            check-ups to complex surgery, we treat every patient like family.
          </p>

          {/* Animated heartbeat line (SVG polyline) */}
          <div
            className="vet-fade-up"
            style={{ animationDelay: '0.35s', marginBottom: '36px' }}
          >
            <svg
              width="220"
              height="44"
              viewBox="0 0 220 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              <polyline
                className="heartbeat-line"
                points="0,22 30,22 40,22 52,4 60,40 68,10 76,34 84,22 220,22"
                stroke="#16a34a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* CTAs */}
          <div className="vet-fade-up" style={{ animationDelay: '0.45s', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#booking"
              style={{
                padding: '14px 32px',
                background: '#16a34a',
                color: '#ffffff',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Book an Appointment
            </a>
            <a
              href="#packages"
              style={{
                padding: '14px 28px',
                background: 'transparent',
                color: '#16a34a',
                border: '2px solid #86efac',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              View Care Packages
            </a>
          </div>
        </div>

        {/* Right: image + floating stats */}
        <div style={{ position: 'relative', overflow: 'hidden', background: '#f0fdf4', minHeight: '400px' }}>
          <Image src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&h=1100&fit=crop&q=85"
            alt="Veterinary care at Pawsitive Care"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} width={1200} height={800} />
          {/* Overlay gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(20,83,45,0.45) 0%, transparent 55%)',
            }}
          />

          {/* Floating stat chips */}
          {[
            { top: '20px', right: '20px', val: '4.9★', label: 'Google Rating', delay: '0.6s' },
            { top: '90px', right: '20px', val: '2,400+', label: 'Pets Treated', delay: '0.72s' },
          ].map(({ top, right, val, label, delay }) => (
            <div
              key={label}
              className="vet-fade-up"
              style={{
                animationDelay: delay,
                position: 'absolute',
                top,
                right,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(8px)',
                borderRadius: '12px',
                padding: '10px 18px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              }}
            >
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#14532d', letterSpacing: '-0.02em' }}>{val}</div>
              <div style={{ fontSize: '0.68rem', color: '#52796f', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{label}</div>
            </div>
          ))}

          {/* Bottom text overlay */}
          <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
            <p style={{ color: 'rgba(240,253,244,0.9)', fontSize: '0.85rem', fontWeight: 500, margin: 0 }}>
              22 Richmond Road &middot; London TW1 3AB
            </p>
          </div>
        </div>
      </div>
    </section>
  )
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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vetLocalBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vetFaqJsonLd) }}
      />

      <VetHero />

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
      <FAQAccordion items={faqs} verticalName="PetOS" locale="en" />
      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="442083325500" message="Hi, I'd like to book an appointment at Pawsitive Care" />
    </div>
  )
}

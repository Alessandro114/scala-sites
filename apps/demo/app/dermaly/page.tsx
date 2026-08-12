'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { TreatmentMenu } from '@scala-sites/clinicoos/components/treatment-menu'
import { AppointmentForm } from '@scala-sites/clinicoos/components/appointment-form'

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'The Aesthetic Clinic — Harley Street',
  description: 'Advanced dermatology & cosmetic medicine on Harley Street. GMC-registered doctors performing Botox, fillers, laser resurfacing, and advanced skin science.',
  url: 'https://aestheticclinic.example.com',
  telephone: '+44 20 7935 8800',
  email: 'consultations@aestheticclinic.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '72 Harley Street',
    addressLocality: 'London',
    postalCode: 'W1G 7HG',
    addressCountry: 'GB',
  },
  priceRange: '££££',
  medicalSpecialty: ['Dermatology', 'Cosmetic Medicine', 'Laser Medicine'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are all treatments performed by qualified doctors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, without exception. Every injectable and laser treatment is performed by GMC-registered doctors with postgraduate dermatology qualifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you CQC registered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Aesthetic Clinic is registered with and regulated by the Care Quality Commission (CQC). Our most recent inspection received an overall "Good" rating.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do injectable results last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anti-wrinkle injections typically last 3–4 months. Dermal fillers: lip fillers 6–9 months, cheek fillers 12–18 months.',
      },
    },
  ],
}

// ─── Data ────────────────────────────────────────────────────────────────────

const treatments = [
  {
    id: 't1',
    name: 'Anti-Wrinkle Injections (Botulinum Toxin)',
    category: 'Injectables',
    description: 'Precision muscle-relaxing injections targeting forehead lines, frown lines, and crow\'s feet. Results last 3–4 months. All treatments performed by GMC-registered doctors.',
    duration: '30 min',
    price: 295,
    currency: 'GBP',
    mostRequested: true,
    insuranceAccepted: false,
  },
  {
    id: 't2',
    name: 'Dermal Fillers — Lips',
    category: 'Injectables',
    description: 'Hyaluronic acid lip augmentation and definition. Natural-looking volume, cupid\'s bow enhancement, and hydration. Custom to your anatomy.',
    duration: '45 min',
    price: 425,
    currency: 'GBP',
    mostRequested: true,
    insuranceAccepted: false,
  },
  {
    id: 't3',
    name: 'Dermal Fillers — Cheeks & Midface',
    category: 'Injectables',
    description: 'Structural volume restoration and lift for cheekbones and midface. Softens nasolabial folds and restores youthful contour.',
    duration: '60 min',
    price: 695,
    currency: 'GBP',
    insuranceAccepted: false,
  },
  {
    id: 't4',
    name: 'Full Face Rejuvenation',
    category: 'Injectables',
    description: 'Comprehensive combination treatment: anti-wrinkle injections + strategic filler placement across multiple zones. Full aesthetic assessment included.',
    duration: '90 min',
    price: 1395,
    currency: 'GBP',
    mostRequested: true,
    insuranceAccepted: false,
  },
  {
    id: 't5',
    name: 'CO2 Fractional Laser Resurfacing',
    category: 'Laser Treatments',
    description: 'Medical-grade fractional CO2 laser for skin tightening, scar reduction, and deep wrinkle treatment. Stimulates collagen remodelling over 6–12 weeks.',
    duration: '60 min',
    price: 895,
    currency: 'GBP',
    mostRequested: true,
    insuranceAccepted: false,
  },
  {
    id: 't6',
    name: 'IPL Photorejuvenation',
    category: 'Laser Treatments',
    description: 'Intense Pulsed Light for sunspot reduction, rosacea, broken capillaries, and overall skin tone evening. Course of 3–5 sessions recommended.',
    duration: '45 min',
    price: 350,
    currency: 'GBP',
    insuranceAccepted: false,
  },
  {
    id: 't7',
    name: 'Laser Hair Removal — Full Face',
    category: 'Laser Treatments',
    description: 'Permanent hair reduction using Nd:YAG + Alexandrite dual-wavelength laser. Safe for all skin tones. Course of 6 sessions advised.',
    duration: '30 min',
    price: 180,
    currency: 'GBP',
    insuranceAccepted: false,
  },
  {
    id: 't8',
    name: 'Advanced TCA Chemical Peel',
    category: 'Skin Treatments',
    description: 'Medical-grade trichloroacetic acid peel for deep exfoliation, pigmentation correction, and skin renewal. Performed exclusively by our dermatologists.',
    duration: '45 min',
    price: 395,
    currency: 'GBP',
    mostRequested: false,
    insuranceAccepted: false,
  },
  {
    id: 't9',
    name: 'Medical HydraFacial MD',
    category: 'Skin Treatments',
    description: 'Advanced 6-step HydraFacial with medical-grade boosters: growth factors, peptides, and skin-specific serums. Immediate glow with zero downtime.',
    duration: '75 min',
    price: 275,
    currency: 'GBP',
    mostRequested: true,
    insuranceAccepted: false,
  },
  {
    id: 't10',
    name: 'Dermapen Microneedling',
    category: 'Skin Treatments',
    description: 'Precision collagen induction therapy for acne scars, fine lines, and pore size. Combined with PRP growth factors for accelerated results.',
    duration: '60 min',
    price: 395,
    currency: 'GBP',
    insuranceAccepted: false,
  },
]

const doctors = [
  {
    id: 'd1',
    name: 'Dr. Amelia Forsythe',
    photo: '',
    specialty: 'Cosmetic Dermatology',
    qualifications: ['MBChB', 'MRCP(Derm)', 'GMC 4812903'],
    nextSlot: 'Today 3:00 PM',
    nextSlotUrgent: false,
    rating: 5.0,
    reviewCount: 418,
    bio: 'Lead consultant and founder of The Aesthetic Clinic. 14 years in cosmetic dermatology, trained at King\'s College Hospital and the Karolinska Institute.',
    consultationFee: 150,
    currency: 'GBP',
    bookingUrl: '#booking',
  },
  {
    id: 'd2',
    name: 'Dr. James Pemberton',
    photo: '',
    specialty: 'Aesthetic Medicine',
    qualifications: ['MBBS', 'MSc Dermatology', 'GMC 6231042'],
    nextSlot: 'Tomorrow 10:30 AM',
    nextSlotUrgent: false,
    rating: 4.9,
    reviewCount: 312,
    bio: 'Specialist in advanced injectables and facial anatomy. Trained by the British College of Aesthetic Medicine.',
    consultationFee: 150,
    currency: 'GBP',
    bookingUrl: '#booking',
  },
  {
    id: 'd3',
    name: 'Dr. Priya Anand',
    photo: '',
    specialty: 'Laser & Skin Science',
    qualifications: ['MBBS', 'Fellowship AAD', 'MRCGP', 'GMC 5509214'],
    nextSlot: 'Today 5:00 PM',
    nextSlotUrgent: true,
    rating: 4.9,
    reviewCount: 276,
    bio: 'Laser dermatology specialist with expertise in pigmentation disorders, acne scarring, and photodamage.',
    consultationFee: 150,
    currency: 'GBP',
    bookingUrl: '#booking',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600', alt: 'Medical consultation room', category: 'Clinic', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600', alt: 'Laser treatment in progress', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600', alt: 'Injectable consultation', category: 'Consultations', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600', alt: 'Dermatology examination', category: 'Clinic', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600', alt: 'Advanced skin analysis', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600', alt: 'Modern clinic reception', category: 'Clinic', width: 600, height: 400 },
]

const reviews = [
  {
    id: '1',
    author: 'Harriet F.',
    rating: 5,
    text: 'I was nervous about my first aesthetic consultation, but Dr. Forsythe completely put me at ease. The results were natural and genuinely transformative. I look like myself, just better.',
    date: '2026-07-28',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Victoria A.',
    rating: 5,
    text: 'Had CO2 laser with Dr. Anand for acne scarring I\'d lived with for 10 years. Six weeks on, my skin texture has completely changed.',
    date: '2026-07-14',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Catherine M.',
    rating: 5,
    text: 'The Full Face Rejuvenation with Dr. Pemberton was the best decision I\'ve made. Result: completely natural, nobody guessed I\'d had anything done.',
    date: '2026-07-02',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Sophie K.',
    rating: 5,
    text: 'The Medical HydraFacial is unlike any facial I\'ve had elsewhere. The clinic itself feels like a private members club — immaculate and serene.',
    date: '2026-06-20',
    source: 'Google',
    verified: true,
  },
  {
    id: '5',
    author: 'Natasha W.',
    rating: 5,
    text: 'The level of medical rigour here is what separates The Aesthetic Clinic from every high-street aesthetics provider. GMC-registered doctors, proper consultations, real results.',
    date: '2026-06-05',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'Are all treatments performed by qualified doctors?',
    answer: 'Yes, without exception. Every injectable and laser treatment at The Aesthetic Clinic is performed by GMC-registered doctors with postgraduate dermatology qualifications. We do not employ nurse practitioners or beauticians for medical aesthetic procedures.',
  },
  {
    question: 'What happens at the initial consultation?',
    answer: 'Your 30-minute consultation (£150, redeemable against treatment) covers a full facial and skin assessment, medical history review, and an honest discussion of treatment options including realistic expectations, downtime, and alternatives.',
  },
  {
    question: 'How long do injectable results last?',
    answer: 'Anti-wrinkle injections typically last 3–4 months. Dermal fillers depend on the product and area: lip fillers 6–9 months, cheek fillers 12–18 months.',
  },
  {
    question: 'Is there downtime after laser treatments?',
    answer: 'Fractional CO2 laser involves 5–7 days of healing (redness, peeling). IPL has minimal downtime — mild redness for 24–48 hours. Laser hair removal has no downtime.',
  },
  {
    question: 'Are you CQC registered?',
    answer: 'Yes. The Aesthetic Clinic is registered with and regulated by the Care Quality Commission (CQC). Our most recent inspection received an overall "Good" rating.',
  },
  {
    question: 'Can I see before-and-after results before booking?',
    answer: 'Yes. During your consultation, Dr. Forsythe or a colleague will show you anonymised clinical photography relevant to your concerns and planned treatment.',
  },
]

const siteConfig = {
  name: 'The Aesthetic Clinic — Harley Street',
  tagline: 'Advanced dermatology & cosmetic medicine, Harley Street',
  phone: '+44 20 7935 8800',
  email: 'consultations@aestheticclinic.example.com',
  address: '72 Harley Street, London W1G 7HG',
  social: { instagram: '#', facebook: '#' },
}

// ─── Custom Hero — Clinical Luxury ──────────────────────────────────────────

function ClinicalLuxuryHero() {
  // Gold constellation dots
  const constellationDots = [
    { top: '18%', left: '8%', r: 3 },
    { top: '32%', left: '14%', r: 2 },
    { top: '22%', left: '20%', r: 1.5 },
    { top: '55%', left: '6%', r: 2.5 },
    { top: '70%', left: '15%', r: 2 },
    { top: '60%', left: '22%', r: 1 },
    { top: '12%', right: '10%', r: 2 },
    { top: '28%', right: '7%', r: 3 },
    { top: '45%', right: '12%', r: 1.5 },
    { top: '75%', right: '8%', r: 2 },
    { top: '82%', right: '18%', r: 1 },
  ]

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <style>{`
        @keyframes clinicFade {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes constellationPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes skinTextureDrift {
          0% { transform: scale(1.05) translate(0, 0); }
          50% { transform: scale(1.08) translate(-8px, -4px); }
          100% { transform: scale(1.05) translate(0, 0); }
        }
        .clinic-a0 { animation: clinicFade 0.9s ease both; }
        .clinic-a1 { animation: clinicFade 0.9s 0.15s ease both; }
        .clinic-a2 { animation: clinicFade 0.9s 0.3s ease both; }
        .clinic-a3 { animation: clinicFade 0.9s 0.45s ease both; }
        .clinic-a4 { animation: clinicFade 0.9s 0.6s ease both; }
        .constellation-dot { animation: constellationPulse 4s ease-in-out infinite; }
        .skin-bg { animation: skinTextureDrift 14s ease-in-out infinite; }
      `}</style>

      {/* Background: macro skin texture with heavy blur */}
      <div
        style={{
          position: 'absolute',
          inset: '-10%',
          zIndex: 0,
        }}
      >
        <div
          className="skin-bg"
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1800&h=1200&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(24px) brightness(0.45) saturate(0.6)',
          }}
        />
      </div>

      {/* Nude/blush gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(30,18,15,0.88) 0%, rgba(80,48,40,0.72) 40%, rgba(120,80,70,0.6) 70%, rgba(160,120,100,0.5) 100%)',
          zIndex: 1,
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,5,3,0.7) 100%)',
          zIndex: 2,
        }}
      />

      {/* Gold constellation / molecular pattern */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 3, pointerEvents: 'none' }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connection lines */}
        <line x1="96" y1="144" x2="168" y2="256" stroke="#c9a84c" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="168" y1="256" x2="240" y2="176" stroke="#c9a84c" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="72" y1="440" x2="180" y2="560" stroke="#c9a84c" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="1080" y1="96" x2="1116" y2="224" stroke="#c9a84c" strokeWidth="0.6" strokeOpacity="0.25" />
        <line x1="1116" y1="224" x2="1056" y2="360" stroke="#c9a84c" strokeWidth="0.6" strokeOpacity="0.25" />
        {/* Dots */}
        {[
          [96, 144], [168, 256], [240, 176], [72, 440], [132, 528],
          [180, 560], [1080, 96], [1116, 224], [1056, 360], [960, 600],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 3.5 : 2}
            fill="#c9a84c"
            opacity="0.5"
            className="constellation-dot"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>

      {/* Harley Street badge */}
      <div
        style={{
          position: 'absolute',
          top: '28px',
          right: '36px',
          zIndex: 20,
          background: 'rgba(201,168,76,0.12)',
          border: '1px solid rgba(201,168,76,0.4)',
          borderRadius: '40px',
          padding: '8px 20px',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
        className="clinic-a0"
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c9a84c', display: 'block' }} />
        <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c' }}>
          Harley Street · W1G
        </span>
      </div>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '820px',
          padding: '120px 32px 100px',
        }}
      >
        {/* Thin serif firm name */}
        <p
          className="clinic-a0"
          style={{
            fontFamily: '"Georgia", "Garamond", serif',
            fontSize: '0.85rem',
            fontWeight: 400,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '28px',
          }}
        >
          The Aesthetic Clinic
        </p>

        <h1
          className="clinic-a1"
          style={{
            fontFamily: '"Georgia", "Garamond", serif',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            color: '#fdf6f0',
            marginBottom: '28px',
            letterSpacing: '-0.01em',
          }}
        >
          Where Medicine
          <br />
          Meets Aesthetics
        </h1>

        <p
          className="clinic-a2"
          style={{
            fontFamily: '"Georgia", "Garamond", serif',
            fontSize: '1.0625rem',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(253,246,240,0.72)',
            lineHeight: 1.75,
            marginBottom: '44px',
            maxWidth: '600px',
            margin: '0 auto 44px',
          }}
        >
          GMC-registered dermatologists and aesthetic physicians. Botox, fillers,
          laser resurfacing, and advanced skin science — performed with medical precision.
        </p>

        {/* Trust badges row */}
        <div
          className="clinic-a3"
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '44px' }}
        >
          {[
            { abbr: 'GMC', label: 'Registered Doctors' },
            { abbr: 'CQC', label: 'Rated Good' },
            { abbr: 'BAD', label: 'Member Clinic' },
          ].map(badge => (
            <div
              key={badge.abbr}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                padding: '14px 22px',
                background: 'rgba(253,246,240,0.07)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
                minWidth: '100px',
              }}
            >
              <span
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#c9a84c',
                  letterSpacing: '0.06em',
                }}
              >
                {badge.abbr}
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  color: 'rgba(253,246,240,0.6)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="clinic-a4"
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
        >
          <a
            href="#booking"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              background: '#c9a84c',
              color: '#1a0e08',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
            }}
          >
            Book a Consultation — £150
          </a>
          <a
            href="#treatments"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              background: 'rgba(253,246,240,0.08)',
              color: '#fdf6f0',
              border: '1px solid rgba(253,246,240,0.25)',
              borderRadius: '8px',
              fontWeight: 500,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
            }}
          >
            Our Treatments
          </a>
        </div>

        {/* Micro stats */}
        <div
          className="clinic-a4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '36px',
            marginTop: '52px',
            paddingTop: '36px',
            borderTop: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          {[
            { num: '3', label: 'Specialist Physicians' },
            { num: '14+', label: 'Treatments' },
            { num: '2,000+', label: 'Patients' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: '1.6rem',
                  fontWeight: 300,
                  color: '#c9a84c',
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: '0.65rem',
                  color: 'rgba(253,246,240,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '5px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Doctor Profile Card ───────────────────────────────────────────────────

function DoctorCard({ doctor }: { doctor: typeof doctors[0] }) {
  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: '20px',
      padding: '36px 32px',
      textAlign: 'center',
    }}>
      <div style={{
        width: '96px',
        height: '96px',
        borderRadius: '50%',
        background: 'var(--color-secondary)',
        margin: '0 auto 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: 700,
        color: 'var(--color-primary)',
        border: '3px solid var(--color-border)',
      }}>
        {doctor.name.charAt(3)}
      </div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '4px' }}>{doctor.name}</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '10px' }}>{doctor.specialty}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', marginBottom: '16px' }}>
        {doctor.qualifications.map(q => (
          <span key={q} style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: '20px', background: 'var(--color-secondary)', color: 'var(--color-text-muted)', fontWeight: 600 }}>{q}</span>
        ))}
      </div>
      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '20px' }}>{doctor.bio}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '16px', marginBottom: '16px' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          <span style={{ color: '#f59e0b' }}>{'★'.repeat(Math.round(doctor.rating))}</span>
          <span style={{ marginLeft: '6px' }}>{doctor.rating} ({doctor.reviewCount})</span>
        </div>
        <div style={{ fontSize: '0.8rem', color: doctor.nextSlotUrgent ? '#dc2626' : 'var(--color-text-muted)' }}>
          Next: {doctor.nextSlot}
        </div>
      </div>
      <a href="#booking" style={{
        display: 'block',
        padding: '12px 24px',
        borderRadius: '10px',
        background: 'var(--color-primary)',
        color: '#fff',
        fontWeight: 700,
        fontSize: '0.875rem',
        textDecoration: 'none',
        textAlign: 'center',
      }}>
        Book Consultation — £{doctor.consultationFee}
      </a>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DermalyShowcase() {
  const theme = createCustomTheme('classic', {
    primary: '#b76e79',
    primaryHover: '#a05c68',
    secondary: '#fdf6f0',
    accent: '#c9956c',
    background: '#fdf6f0',
    surface: '#ffffff',
    text: '#2d1c20',
    textMuted: '#9b7c82',
    border: '#e8d5d8',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>

      {/* Hero */}
      <ClinicalLuxuryHero />

      {/* Trust badges strip */}
      <div style={{ padding: '32px 24px', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          {[
            { icon: '🏛', label: 'GMC Registered Doctors' },
            { icon: '✦', label: 'CQC Rated Good' },
            { icon: '◈', label: 'BCAM Members' },
            { icon: '🔬', label: 'Medical-Grade Devices' },
          ].map(b => (
            <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 22px', border: '1px solid var(--color-border)', borderRadius: '40px', background: 'var(--color-background)' }}>
              <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
              <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--color-text)' }}>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome */}
      <section style={{ padding: '72px 24px', background: 'var(--color-background)', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '12px' }}>
            72 Harley Street, London
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '18px', lineHeight: 1.25 }}>
            Medical Standards. Aesthetic Artistry.
          </h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: '1.0625rem', marginBottom: '28px' }}>
            Founded by Dr. Amelia Forsythe, The Aesthetic Clinic brings together the medical rigour of NHS-trained doctors with the artistry of world-class cosmetic practice.
          </p>
        </div>
      </section>

      {/* Treatment Menu */}
      <div id="treatments" style={{ background: 'var(--color-surface)' }}>
        <TreatmentMenu
          treatments={treatments}
          locale="en-GB"
          title="Treatments & Procedures"
          subtitle="Transparent, all-inclusive pricing. Every treatment led by a GMC-registered doctor. Consultation fee of £150 redeemable against treatment."
        />
      </div>

      {/* Doctor Profiles */}
      <section style={{ padding: '80px 24px', background: 'var(--color-background)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '12px' }}>
              Our Medical Team
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '540px', margin: '0 auto' }}>
              Every doctor is GMC-registered with specialist dermatology or aesthetic medicine training. No exceptions.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {doctors.map(d => <DoctorCard key={d.id} doctor={d} />)}
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <div style={{ background: 'var(--color-secondary)' }}>
        <Gallery images={galleryImages} locale="en" columns={3} />
      </div>

      {/* Consultation Booking */}
      <div id="booking" style={{ background: 'var(--color-background)' }}>
        <AppointmentForm
          doctors={doctors.map(d => ({ id: d.id, name: d.name, specialty: d.specialty }))}
          departments={['Injectables', 'Laser Treatments', 'Skin Treatments', 'General Dermatology']}
          title="Book Your Consultation"
          subtitle="£150 consultation fee — fully redeemable against treatment cost. Appointments available from 8:00 AM."
        />
      </div>

      {/* Reviews */}
      <div style={{ background: 'var(--color-secondary)' }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--color-surface)' }}>
        <FAQAccordion items={faqs} verticalName="DermalyOS" locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="442079358800"
        message="Hello, I'd like to book a consultation at The Aesthetic Clinic on Harley Street"
      />
    </div>
  )
}

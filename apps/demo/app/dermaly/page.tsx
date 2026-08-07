'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { TreatmentMenu } from '@scala-sites/clinicoos/components/treatment-menu'
import { AppointmentForm } from '@scala-sites/clinicoos/components/appointment-form'

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
    bio: 'Lead consultant and founder of The Aesthetic Clinic. 14 years in cosmetic dermatology, trained at King\'s College Hospital and the Karolinska Institute. Specialist in natural facial aesthetics and complex skin conditions.',
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
    bio: 'Specialist in advanced injectables and facial anatomy. Trained by the British College of Aesthetic Medicine. Known for his conservative, highly natural approach to facial rejuvenation.',
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
    bio: 'Laser dermatology specialist with expertise in pigmentation disorders, acne scarring, and photodamage. Published researcher in fractional laser techniques. Fitzpatrick types I–VI experience.',
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
    text: 'I was nervous about my first aesthetic consultation, but Dr. Forsythe completely put me at ease. She was honest about what I needed — and what I didn\'t. The results were natural and genuinely transformative. I look like myself, just better.',
    date: '2026-07-28',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Victoria A.',
    rating: 5,
    text: 'Had CO2 laser with Dr. Anand for acne scarring I\'d lived with for 10 years. Six weeks on, my skin texture has completely changed. The clinical team were exceptional throughout — clear on aftercare, responsive, and genuinely expert.',
    date: '2026-07-14',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Catherine M.',
    rating: 5,
    text: 'The Full Face Rejuvenation with Dr. Pemberton was the best decision I\'ve made. He took 20 minutes in the consultation explaining exactly what he was going to do and why. Result: completely natural, nobody guessed I\'d had anything done.',
    date: '2026-07-02',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Sophie K.',
    rating: 5,
    text: 'The Medical HydraFacial is unlike any facial I\'ve had elsewhere. Dr. Anand added a bespoke booster cocktail for my rosacea and the results lasted weeks. The clinic itself feels like a private members club — immaculate and serene.',
    date: '2026-06-20',
    source: 'Google',
    verified: true,
  },
  {
    id: '5',
    author: 'Natasha W.',
    rating: 5,
    text: 'I drove from Bristol after a recommendation from my GP. Worth every mile. The level of medical rigour here is what separates The Aesthetic Clinic from every high-street aesthetics provider. GMC-registered doctors, proper consultations, real results.',
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
    answer: 'Your 30-minute consultation (£150, redeemable against treatment) covers a full facial and skin assessment, medical history review, and an honest discussion of treatment options including realistic expectations, downtime, and alternatives. We never recommend treatments that are not appropriate.',
  },
  {
    question: 'How long do injectable results last?',
    answer: 'Anti-wrinkle injections typically last 3–4 months. Dermal fillers depend on the product and area: lip fillers 6–9 months, cheek fillers 12–18 months. Longevity varies between individuals based on metabolism, lifestyle, and treatment zone.',
  },
  {
    question: 'Is there downtime after laser treatments?',
    answer: 'Fractional CO2 laser involves 5–7 days of healing (redness, peeling). IPL has minimal downtime — mild redness for 24–48 hours. Laser hair removal has no downtime. We provide detailed pre- and post-treatment instructions and a full aftercare kit.',
  },
  {
    question: 'Are you CQC registered?',
    answer: 'Yes. The Aesthetic Clinic is registered with and regulated by the Care Quality Commission (CQC). Our most recent inspection received an overall "Good" rating. CQC registration is a legal requirement for any clinic performing certain medical procedures — we strongly advise patients to verify this before choosing any provider.',
  },
  {
    question: 'Can I see before-and-after results before booking?',
    answer: 'Yes. During your consultation, Dr. Forsythe or a colleague will show you anonymised clinical photography relevant to your concerns and planned treatment. We believe informed consent is the foundation of safe aesthetics practice.',
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

// ─── Trust Badge Component ─────────────────────────────────────────────────

function TrustBadges() {
  const badges = [
    { icon: '🏛', label: 'GMC Registered Doctors' },
    { icon: '✦', label: 'CQC Rated Good' },
    { icon: '◈', label: 'BCAM Members' },
    { icon: '🔬', label: 'Medical-Grade Devices' },
  ]
  return (
    <div style={{ padding: '40px 24px', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
        {badges.map(b => (
          <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 22px', border: '1px solid var(--color-border)', borderRadius: '40px', background: 'var(--color-background)' }}>
            <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
            <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--color-text)' }}>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
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
      <Hero
        title="Where Medicine Meets Aesthetics"
        subtitle="GMC-registered dermatologists and aesthetic physicians on Harley Street. Botox, fillers, laser resurfacing, and advanced skin science — performed with medical precision."
        backgroundImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600"
        ctaPrimary={{ label: 'Book a Consultation', href: '#booking' }}
        ctaSecondary={{ label: 'Our Treatments', href: '#treatments' }}
      />

      {/* Trust badges */}
      <TrustBadges />

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
            Founded by Dr. Amelia Forsythe, The Aesthetic Clinic brings together the medical rigour of NHS-trained doctors with the artistry of world-class cosmetic practice. Every treatment plan begins with an honest consultation — and an outcome that looks completely natural.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            <span>3 Specialist Physicians</span>
            <span style={{ color: 'var(--color-border)' }}>·</span>
            <span>14+ Treatments</span>
            <span style={{ color: 'var(--color-border)' }}>·</span>
            <span>2,000+ Patients</span>
            <span style={{ color: 'var(--color-border)' }}>·</span>
            <span>CQC Registered</span>
          </div>
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
        <FAQAccordion items={faqs} locale="en" />
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

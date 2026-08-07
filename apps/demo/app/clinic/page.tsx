'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { DoctorBooking } from '@scala-sites/clinicoos/components/doctor-booking'
import { TreatmentMenu } from '@scala-sites/clinicoos/components/treatment-menu'
import { InsuranceChecker } from '@scala-sites/clinicoos/components/insurance-checker'

const doctors = [
  {
    id: '1',
    name: 'Dr. Eleanor Shaw',
    photo: '',
    specialty: 'General Practice',
    qualifications: ['MBBS', 'MRCGP', 'DCH'],
    nextSlot: 'Today 2:30 PM',
    nextSlotUrgent: true,
    rating: 4.9,
    reviewCount: 312,
    bio: 'Over 15 years in private general practice. Trained at King\'s College Hospital. Passionate about preventive care and thorough consultations that leave patients with a clear plan.',
    consultationFee: 180,
    currency: 'GBP',
    bookingUrl: '#book',
  },
  {
    id: '2',
    name: 'Dr. James Whitfield',
    photo: '',
    specialty: 'Cardiology',
    qualifications: ['MBBS', 'MD', 'FRCP', 'FESC'],
    nextSlot: 'Tomorrow 10:00 AM',
    nextSlotUrgent: false,
    rating: 4.8,
    reviewCount: 187,
    bio: 'Consultant cardiologist with 20 years of experience in interventional cardiology and cardiac imaging. Trained at the Royal Brompton Hospital. Specialist in complex arrhythmias.',
    consultationFee: 320,
    currency: 'GBP',
    bookingUrl: '#book',
  },
  {
    id: '3',
    name: 'Dr. Priya Nair',
    photo: '',
    specialty: 'Dermatology',
    qualifications: ['MBBS', 'MRCP(Derm)', 'Fellowship AAD'],
    nextSlot: 'Today 4:00 PM',
    nextSlotUrgent: true,
    rating: 4.9,
    reviewCount: 258,
    bio: 'Award-winning dermatologist specialising in medical and cosmetic dermatology. Published researcher in skin cancer early detection. Former Consultant at Great Ormond Street.',
    consultationFee: 260,
    currency: 'GBP',
    bookingUrl: '#book',
  },
  {
    id: '4',
    name: 'Mr. Thomas Gallagher',
    photo: '',
    specialty: 'Physiotherapy',
    qualifications: ['BSc Physiotherapy', 'MCSP', 'SRP', 'HCPC'],
    nextSlot: 'Today 11:00 AM',
    nextSlotUrgent: true,
    rating: 4.8,
    reviewCount: 203,
    bio: 'Musculoskeletal physiotherapist and sports injury specialist. Former physiotherapist for a Premier League club. Expert in post-surgical rehabilitation and chronic pain management.',
    consultationFee: 130,
    currency: 'GBP',
    bookingUrl: '#book',
  },
]

const treatments = [
  // General Medicine
  {
    id: 't1',
    name: 'Full Health MOT',
    category: 'General Medicine',
    description: 'Comprehensive health check including blood panel, ECG, BMI assessment, and lifestyle consultation. Covers 60+ biomarkers.',
    duration: '90 min',
    price: 450,
    currency: 'GBP',
    mostRequested: true,
    insuranceAccepted: true,
  },
  {
    id: 't2',
    name: 'GP Consultation',
    category: 'General Medicine',
    description: 'Standard private GP appointment. Same-day availability. Full medical history review and treatment plan.',
    duration: '30 min',
    price: 180,
    currency: 'GBP',
    insuranceAccepted: true,
  },
  {
    id: 't3',
    name: 'Travel Vaccinations',
    category: 'General Medicine',
    description: 'Destination-specific vaccine consultation and administration. Yellow fever, typhoid, hepatitis A/B, and more.',
    duration: '30 min',
    price: 95,
    currency: 'GBP',
    insuranceAccepted: false,
  },
  // Dental
  {
    id: 't4',
    name: 'Teeth Whitening',
    category: 'Dental',
    description: 'Professional Zoom whitening treatment. Up to 8 shades lighter in a single session. Safe for sensitive teeth.',
    duration: '90 min',
    price: 550,
    currency: 'GBP',
    mostRequested: true,
    insuranceAccepted: false,
  },
  {
    id: 't5',
    name: 'Dental Implant Consultation',
    category: 'Dental',
    description: 'Full assessment for single or multiple implants including 3D cone beam CT scan and treatment planning.',
    duration: '60 min',
    price: 200,
    currency: 'GBP',
    insuranceAccepted: true,
  },
  {
    id: 't6',
    name: 'Invisalign Consultation',
    category: 'Dental',
    description: 'Digital smile design and Invisalign suitability assessment. Includes iTero digital scan and before/after simulation.',
    duration: '45 min',
    price: 150,
    currency: 'GBP',
    insuranceAccepted: false,
  },
  // Dermatology
  {
    id: 't7',
    name: 'Mole Mapping & Skin Cancer Screen',
    category: 'Dermatology',
    description: 'Full body dermoscopic examination of all moles and skin lesions with digital mapping. Early detection specialist review.',
    duration: '60 min',
    price: 380,
    currency: 'GBP',
    mostRequested: true,
    insuranceAccepted: true,
  },
  {
    id: 't8',
    name: 'Acne Treatment Programme',
    category: 'Dermatology',
    description: 'Medical-grade acne assessment and personalised treatment plan. May include prescription topicals, chemical peels, or laser.',
    duration: '45 min',
    price: 240,
    currency: 'GBP',
    insuranceAccepted: true,
  },
  // Physiotherapy
  {
    id: 't9',
    name: 'Musculoskeletal Assessment',
    category: 'Physiotherapy',
    description: 'Detailed biomechanical assessment for back, knee, hip, or shoulder complaints. Diagnosis and personalised rehab plan.',
    duration: '60 min',
    price: 180,
    currency: 'GBP',
    mostRequested: true,
    insuranceAccepted: true,
  },
  {
    id: 't10',
    name: 'Sports Injury Rehabilitation',
    category: 'Physiotherapy',
    description: 'Injury-specific rehabilitation sessions combining manual therapy, exercise prescription, and performance coaching.',
    duration: '60 min',
    price: 130,
    currency: 'GBP',
    insuranceAccepted: true,
  },
]

const insuranceProviders = [
  {
    id: 'bupa',
    name: 'Bupa',
    plans: ['Essential', 'Select', 'Premium', 'Elite'],
    coveredTreatments: {
      'GP Consultation': { covered: true, note: 'Fully covered on all Bupa plans. No excess applies.' },
      'Full Health MOT': { covered: true, note: 'Covered on Select, Premium and Elite plans. £50 excess on Essential.' },
      'Cardiology Consultation': { covered: true, note: 'Covered on all plans with GP referral. Waiting period may apply.' },
      'Physiotherapy (up to 20 sessions)': { covered: true, note: 'Up to 20 sessions per policy year on Premium and Elite. 10 sessions on lower tiers.' },
      'Mole Mapping': { covered: true, note: 'Covered when medically indicated by GP referral.' },
      'Teeth Whitening': { covered: false, note: 'Cosmetic dental procedures are excluded from all Bupa health plans.' },
      'Invisalign': { covered: false, note: 'Orthodontic/cosmetic treatments are not covered.' },
    },
  },
  {
    id: 'axa',
    name: 'AXA Health',
    plans: ['Personal Health', 'Personal Health Extra', 'Prestige'],
    coveredTreatments: {
      'GP Consultation': { covered: true, note: 'Included on all AXA plans. Unlimited GP access via app or in-clinic.' },
      'Full Health MOT': { covered: true, note: 'Covered on Personal Health Extra and Prestige plans annually.' },
      'Cardiology Consultation': { covered: true, note: 'Covered with specialist referral on all plans.' },
      'Physiotherapy (up to 20 sessions)': { covered: true, note: 'Up to 15 sessions on Personal Health, unlimited on Prestige.' },
      'Mole Mapping': { covered: false, note: 'Routine mole mapping is not covered unless symptoms are present.' },
      'Teeth Whitening': { covered: false, note: 'Aesthetic dental work is excluded from health insurance.' },
      'Invisalign': { covered: false, note: 'Not covered. Cosmetic orthodontics fall outside AXA Health plans.' },
    },
  },
  {
    id: 'aviva',
    name: 'Aviva Health',
    plans: ['Core', 'Plus', 'Comprehensive'],
    coveredTreatments: {
      'GP Consultation': { covered: true, note: 'Covered on all Aviva plans, in-clinic and digital.' },
      'Full Health MOT': { covered: false, note: 'Preventive screening packages are not included in Core or Plus plans.' },
      'Cardiology Consultation': { covered: true, note: 'Covered on Plus and Comprehensive plans following GP referral.' },
      'Physiotherapy (up to 20 sessions)': { covered: true, note: 'Up to 20 sessions per year on Comprehensive plan.' },
      'Mole Mapping': { covered: true, note: 'Covered on Comprehensive plan when clinically necessary.' },
      'Teeth Whitening': { covered: false, note: 'Cosmetic treatments are excluded across all Aviva Health plans.' },
      'Invisalign': { covered: false, note: 'Orthodontics are not within scope of Aviva Health insurance.' },
    },
  },
  {
    id: 'cigna',
    name: 'Cigna Global',
    plans: ['Silver', 'Gold', 'Platinum'],
    coveredTreatments: {
      'GP Consultation': { covered: true, note: 'Covered on all Cigna tiers. Direct access, no GP referral required.' },
      'Full Health MOT': { covered: true, note: 'Annual health screening fully covered on Gold and Platinum.' },
      'Cardiology Consultation': { covered: true, note: 'Specialists covered directly on all tiers — no referral needed.' },
      'Physiotherapy (up to 20 sessions)': { covered: true, note: 'Unlimited sessions on Platinum. Up to 30 on Gold, 20 on Silver.' },
      'Mole Mapping': { covered: true, note: 'Covered on Gold and Platinum as part of preventive care benefit.' },
      'Teeth Whitening': { covered: false, note: 'Aesthetic/cosmetic dental excluded from Cigna Global health plans.' },
      'Invisalign': { covered: false, note: 'Not covered. Orthodontics are a dental supplement benefit only.' },
    },
  },
]

const reviews = [
  {
    id: '1',
    author: 'Catherine M.',
    rating: 5,
    text: 'I\'ve been coming to Harley Health for three years. The level of care is exceptional — Dr. Shaw takes time to truly understand your concerns. I\'ve never felt rushed. Worth every penny.',
    date: '2026-07-28',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Richard T.',
    rating: 5,
    text: 'Dr. Whitfield diagnosed my arrhythmia in a single appointment after two NHS referrals went nowhere. His thoroughness and expertise are unparalleled. I am genuinely grateful.',
    date: '2026-07-14',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Amelia P.',
    rating: 5,
    text: 'Dr. Nair spotted an early-stage melanoma during a routine mole map. She was calm, clear, and incredibly reassuring throughout the process. She quite literally saved my life.',
    date: '2026-06-30',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Ben K.',
    rating: 5,
    text: 'Thomas rehabilitated my ACL in 14 weeks — faster than my surgeon expected. His expertise and the individualised programme he designed were outstanding. Back playing rugby now.',
    date: '2026-07-05',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'Do you accept walk-in appointments?',
    answer: 'We strongly recommend booking in advance to secure your preferred doctor and time slot. However, we do reserve same-day urgent slots. Call us on +44 20 7946 0800 and we will do our utmost to accommodate you, subject to availability.',
  },
  {
    question: 'Which insurance providers do you work with?',
    answer: 'We are recognised by all major UK private medical insurers including Bupa, AXA Health, Aviva, Cigna, Vitality, WPA, and Allianz Care. Use our Insurance Checker above to verify coverage for your specific plan. We also welcome self-pay patients.',
  },
  {
    question: 'How quickly can I get an appointment?',
    answer: 'Many of our practitioners have same-day and next-day availability. Emergency or urgent medical concerns are typically seen within hours. Use the booking tool on this page to see real-time availability for your chosen specialist.',
  },
  {
    question: 'Where are you located and is there parking nearby?',
    answer: 'We are located at 45 Harley Street, London W1G 8QR — in the heart of London\'s medical district. The nearest Underground stations are Regent\'s Park (Bakerloo) and Oxford Circus (Victoria/Central/Bakerloo). Several NCP car parks are within a 5-minute walk.',
  },
  {
    question: 'Can I get a second opinion at Harley Health?',
    answer: 'Absolutely. We welcome second opinion consultations. Please bring any existing test results, scans, or letters from your current treating physician. Our specialists will review your case independently and provide a clear, evidence-based assessment.',
  },
]

const siteConfig = {
  name: 'Harley Health Clinic',
  tagline: 'Expert private healthcare in the heart of London',
  phone: '+44 20 7946 0800',
  email: 'appointments@harleyhealth.example.com',
  address: '45 Harley Street, London W1G 8QR',
  social: { instagram: '#', facebook: '#' },
}

export default function ClinicDemo() {
  return (
    <div
      style={
        themeToStyleObject(
          createCustomTheme('minimal', {
            primary: '#0d5c63',
            primaryHover: '#0a4a50',
            accent: '#c9a84c',
            background: '#ffffff',
            surface: '#f8fafb',
            text: '#1a2e2f',
            secondary: '#eef4f5',
            textMuted: '#5a7a7c',
            border: '#d4e3e5',
          })
        ) as React.CSSProperties
      }
    >
      <Hero
        title="World-Class Healthcare on Harley Street"
        subtitle="Expert private GP, specialist consultations, and wellness care — same-day appointments available. All major insurers accepted."
        backgroundImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600"
        ctaPrimary={{ label: 'Book a Consultation', href: '#doctors' }}
        ctaSecondary={{ label: 'Check Insurance Cover', href: '#insurance' }}
      />

      <div id="doctors">
        <DoctorBooking
          doctors={doctors}
          locale="en-GB"
          title="Our Specialist Team"
          subtitle="Board-certified doctors and allied health professionals — see same-day availability and book in seconds"
        />
      </div>

      <div id="treatments">
        <TreatmentMenu
          treatments={treatments}
          locale="en-GB"
          title="Treatments & Procedures"
          subtitle="Transparent pricing across all specialties. No hidden fees. All treatments led by fully qualified practitioners."
        />
      </div>

      <div id="insurance">
        <InsuranceChecker
          providers={insuranceProviders}
          title="Check Your Insurance Coverage"
          subtitle="Select your insurer and plan to instantly see which treatments at Harley Health Clinic are covered — no phone calls needed."
        />
      </div>

      <ReviewCarousel reviews={reviews} locale="en" />

      <FAQAccordion items={faqs} locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="442079460800"
        message="Hello, I'd like to book a consultation at Harley Health Clinic."
      />
    </div>
  )
}

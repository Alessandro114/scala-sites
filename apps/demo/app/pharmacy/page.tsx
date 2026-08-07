'use client'

import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  green: '#16a34a',
  greenLight: '#22c55e',
  greenDark: '#15803d',
  greenPale: '#f0fdf4',
  greenMid: '#dcfce7',
  white: '#ffffff',
  charcoal: '#1f2937',
  charcoalMid: '#374151',
  midGrey: '#e5e7eb',
  lightGrey: '#f9fafb',
  textDark: '#111827',
  textMid: '#4b5563',
  textLight: '#9ca3af',
} as const

const S = {
  page: { backgroundColor: C.white, color: C.textDark } as React.CSSProperties,
  greenPale: { backgroundColor: C.greenPale } as React.CSSProperties,
  greenMid: { backgroundColor: C.greenMid } as React.CSSProperties,
  lightGrey: { backgroundColor: C.lightGrey } as React.CSSProperties,
  charcoal: { backgroundColor: C.charcoal } as React.CSSProperties,
  green: { color: C.green } as React.CSSProperties,
  textMid: { color: C.textMid } as React.CSSProperties,
  textLight: { color: C.textLight } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Greenleaf Pharmacy',
  description: 'Your trusted community pharmacy in London',
  url: 'https://greenleafpharmacy.example.com',
  locale: 'en',
  vertical: 'pharmacyos',
  theme: 'community',
  branding: { primaryColor: C.green, accentColor: C.charcoal },
  contact: {
    phone: '+44 20 7946 6600',
    email: 'hello@greenleafpharmacy.com',
    whatsapp: '+442079466600',
    address: '45 High Street, Islington, London N1 8EQ',
    coordinates: { lat: 51.536, lng: -0.104 },
  },
  social: {
    instagram: 'greenleafpharmacy',
    facebook: 'https://facebook.com/greenleafpharmacy',
  },
  seo: {
    title: 'Greenleaf Pharmacy | NHS Prescriptions, Vaccinations & Health Checks Islington',
    description: 'Trusted community pharmacy in Islington. NHS prescriptions, travel vaccines, health checks, smoking cessation and free local delivery.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const openingHours = [
  { day: 'Monday – Friday', hours: '8:00am – 8:00pm' },
  { day: 'Saturday', hours: '9:00am – 6:00pm' },
  { day: 'Sunday', hours: '10:00am – 4:00pm' },
  { day: 'Bank Holidays', hours: '10:00am – 2:00pm' },
]

const services = [
  {
    title: 'NHS Prescriptions',
    desc: 'Free dispensing of NHS prescriptions. Electronic Prescription Service (EPS) and paper prescriptions accepted. Same-day dispensing on most items. Repeat prescription management service available.',
    icon: '⊕',
    color: C.green,
  },
  {
    title: 'Travel Vaccinations',
    desc: 'Comprehensive travel health clinic. Yellow fever, typhoid, hepatitis A/B, malaria prevention, and more. Certificate issued same day for yellow fever.',
    icon: '⊕',
    color: C.green,
  },
  {
    title: 'Health Checks',
    desc: 'NHS Health Checks, blood pressure monitoring, cholesterol testing, BMI assessment, and diabetes risk screening. No appointment needed for blood pressure.',
    icon: '⊕',
    color: C.green,
  },
  {
    title: 'Travel Health Advice',
    desc: 'Pre-travel consultation covering destination-specific risks, vaccinations, antimalarials, and safety advice. Available in store or by telephone.',
    icon: '⊕',
    color: C.greenDark,
  },
  {
    title: 'Smoking Cessation',
    desc: 'NHS-funded Stop Smoking Service. Nicotine Replacement Therapy (NRT), Champix, and behavioural support from our trained advisors. Free for eligible patients.',
    icon: '⊕',
    color: C.greenDark,
  },
  {
    title: 'Weight Management',
    desc: 'NHS-funded and private weight management support. Prescription treatments for eligible patients. Structured support programme with pharmacy check-ins.',
    icon: '⊕',
    color: C.greenDark,
  },
]

const productCategories = [
  {
    title: 'Vitamins & Supplements',
    items: ['Vitamin D · C · B12', 'Omega-3 & fish oils', 'Probiotics', 'Iron & minerals', 'Sports nutrition'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=350&fit=crop',
  },
  {
    title: 'Skincare & Beauty',
    items: ['SPF & sun care', 'Eczema & psoriasis', 'Acne treatments', 'Premium moisturisers', 'Natural skincare'],
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=350&fit=crop',
  },
  {
    title: 'Baby & Family',
    items: ['Formula & feeding', 'Baby toiletries', 'Teething gels', 'Cold & flu remedies', 'Nappies & wipes'],
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&h=350&fit=crop',
  },
  {
    title: 'First Aid & Home',
    items: ['Wound care kits', 'Blood pressure monitors', 'Thermometers', 'Mobility aids', 'Medical devices'],
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&h=350&fit=crop',
  },
]

const nhsServices = [
  { title: 'Pharmacy First', desc: 'Get advice and treatment for 7 common conditions — sinusitis, earache, sore throat, impetigo, infected insect bites, shingles, uncomplicated UTIs — without seeing a GP.' },
  { title: 'NHS Blood Pressure Checks', desc: 'Free NHS blood pressure checks for over-40s. No appointment required. Takes under 5 minutes. Results explained and recorded.' },
  { title: 'NHS Contraception Service', desc: 'Emergency hormonal contraception and regular contraception available from our pharmacists without a GP appointment.' },
  { title: 'Discharge Medicines Service', desc: 'If you have been recently discharged from hospital, we can review your new medications and answer any questions to ensure your recovery goes smoothly.' },
]

const deliveryInfo = [
  { icon: '◈', title: 'Free Local Delivery', detail: 'Free same-day delivery within 2 miles. Medicines and OTC products.' },
  { icon: '◈', title: 'Prescription Delivery', detail: 'We collect from your GP surgery and deliver to your door. Sign up for our Repeat Prescription Service.' },
  { icon: '◈', title: 'Click & Collect', detail: 'Order online, collect same day. Ready in as little as 2 hours.' },
  { icon: '◈', title: 'Bulk Orders', detail: 'Care home and business accounts available. Contact us for bulk pricing.' },
]

const healthBlogPosts = [
  { title: 'The 7 vitamins most Londoners are deficient in (and what to do about it)', date: 'Aug 2026', readTime: '4 min' },
  { title: 'Do you really need to see a GP? 7 conditions our pharmacist can treat today', date: 'Jul 2026', readTime: '3 min' },
  { title: 'Travel health checklist: everything you need before you fly', date: 'Jul 2026', readTime: '5 min' },
]

const reviews: Review[] = [
  { id: '1', author: 'Janet T.', rating: 5, text: 'I\'ve been using Greenleaf for five years and would never go anywhere else. They know my name, they know my medication, and they\'ve saved me countless GP visits. The pharmacist is more helpful than most doctors.', date: '2026-07-10', source: 'google', verified: true },
  { id: '2', author: 'Priya R.', rating: 5, text: 'The travel vaccination clinic is exceptional — they booked me in same day before my trip to India, issued my yellow fever certificate on the spot, and the pharmacist spent 20 minutes going through everything I needed. Outstanding.', date: '2026-07-25', source: 'google', verified: true },
  { id: '3', author: 'Michael O.', rating: 5, text: "Used the Pharmacy First service for a UTI on a Saturday when I couldn't reach my GP. Seen within 10 minutes, treated immediately, fully resolved. The NHS getting this right at last.", date: '2026-08-01', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Sandra H.', rating: 5, text: "The free prescription delivery service has been life-changing since my hip operation. They collect from my GP and deliver to my door every month, on time, without me having to ask. Absolute gems.", date: '2026-07-18', source: 'google', verified: true },
  { id: '5', author: 'David F.', rating: 5, text: 'Stopped smoking with their NHS Stop Smoking Service after 22 years. The pharmacist was non-judgmental, incredibly supportive, and called me between appointments. I am 8 months smoke-free.', date: '2026-07-29', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do I need an appointment for NHS services?', answer: 'Most NHS services at Greenleaf Pharmacy are walk-in. Blood pressure checks, Pharmacy First consultations, and emergency contraception are all available without an appointment. Travel vaccinations and stop smoking consultations are best booked in advance to ensure we have the required vaccines in stock.' },
  { question: 'Can the pharmacist treat me instead of a GP?', answer: 'Yes, for many common conditions. Under the Pharmacy First scheme, our pharmacists can treat sinusitis, earache, sore throat, impetigo, infected insect bites, shingles, and uncomplicated UTIs without a GP referral. For other conditions, we will assess and refer if necessary.' },
  { question: 'Do you offer a repeat prescription service?', answer: 'Yes. We will collect your prescription from your GP surgery and dispense it ready for collection or home delivery. Simply register with us and we handle the rest each month — you will never run out of medication.' },
  { question: 'What is your delivery area?', answer: 'We offer free same-day delivery within 2 miles of our Islington store (N1, N5, N7, EC1 postcodes). For prescription deliveries, we can often extend this — please call us to check your postcode.' },
  { question: 'Do you stock specialist or hard-to-find medications?', answer: 'Yes. We maintain excellent stock of commonly prescribed medications and can source most licensed medicines quickly. We are experienced in sourcing medications for rare conditions. Call us and we will do our best to help.' },
  { question: 'Are your travel vaccinations available on the NHS?', answer: 'Some travel vaccinations are available on the NHS (e.g., typhoid, hepatitis A). Others must be purchased privately. We will always advise which vaccinations you need, which are NHS-funded, and the cost of any private ones before you commit.' },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://greenleafpharmacy.example.com',
  name: 'Greenleaf Pharmacy',
  description: 'Trusted community pharmacy in Islington, London. NHS prescriptions, travel vaccinations, health checks, and free delivery.',
  url: 'https://greenleafpharmacy.example.com',
  telephone: '+44 20 7946 6600',
  email: 'hello@greenleafpharmacy.com',
  address: { '@type': 'PostalAddress', streetAddress: '45 High Street, Islington', addressLocality: 'London', postalCode: 'N1 8EQ', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.536, longitude: -0.104 },
  priceRange: '£',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '16:00' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.white}f5`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.midGrey}` }}>
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2.5">
          {/* Pharmacy cross icon */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg" style={{ backgroundColor: C.green }}>
            <div style={{ position: 'absolute', width: 4, height: 16, backgroundColor: C.white, borderRadius: 2 }} />
            <div style={{ position: 'absolute', width: 16, height: 4, backgroundColor: C.white, borderRadius: 2 }} />
          </div>
          <div>
            <span className="font-semibold text-sm" style={{ color: C.green }}>Greenleaf</span>
            <span className="font-light text-sm ml-1" style={{ color: C.charcoal }}>Pharmacy</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Products', 'NHS Services', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm transition-colors duration-200" style={S.textLight}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.green)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textLight)}>
              {item}
            </a>
          ))}
          <a href="tel:+442079466600" className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
            style={{ backgroundColor: C.green }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.greenDark }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.green }}>
            Call Us
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PharmacyPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Clean white/green split
          ═══════════════════════════════════════ */}
      <section className="relative pt-16 overflow-hidden" style={{ backgroundColor: C.white }}>
        {/* Green half background */}
        <div className="absolute top-0 right-0 bottom-0 w-1/2 hidden md:block" style={{ backgroundColor: C.greenPale }} />

        {/* Pulsing cross background decoration */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 mr-8 hidden lg:flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
          <div className="relative flex items-center justify-center w-64 h-64">
            {/* Pulse rings */}
            <div className="absolute w-64 h-64 rounded-full pharm-pulse" style={{ border: `1px solid ${C.green}`, opacity: 0.15 }} />
            <div className="absolute w-48 h-48 rounded-full pharm-pulse" style={{ border: `1px solid ${C.green}`, opacity: 0.25, animationDelay: '0.5s' }} />
            <div className="absolute w-32 h-32 rounded-full pharm-pulse" style={{ border: `1px solid ${C.green}`, opacity: 0.35, animationDelay: '1s' }} />
            {/* Central cross */}
            <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl" style={{ backgroundColor: C.green, boxShadow: `0 0 40px ${C.green}50` }}>
              <div style={{ position: 'absolute', width: 6, height: 28, backgroundColor: C.white, borderRadius: 3 }} />
              <div style={{ position: 'absolute', width: 28, height: 6, backgroundColor: C.white, borderRadius: 3 }} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          {/* Opening hours strip */}
          <div className="w-full py-2.5 flex flex-wrap gap-6 items-center mb-0 border-b" style={{ borderColor: C.midGrey }}>
            <span className="flex items-center gap-2 text-xs" style={{ color: C.textMid }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.greenLight, display: 'inline-block' }} />
              <span className="font-semibold" style={S.green}>Open Now</span>
            </span>
            {openingHours.map((h) => (
              <span key={h.day} className="text-xs" style={S.textLight}>
                <span style={{ color: C.textMid, fontWeight: 500 }}>{h.day}:</span> {h.hours}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 md:py-24 items-center">
            {/* Left: Content */}
            <div className="stagger-children">
              <div className="reveal-up flex items-center gap-2 mb-6 text-xs font-medium" style={{ color: C.textMid }}>
                <span style={{ color: C.green }}>◈</span> Serving Islington Since 2006 · GPhC Registered
              </div>

              <h1 className="font-bold leading-tight mb-6">
                <span className="reveal-clip-up block" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', color: C.textDark }}>Your Health,</span>
                <span className="reveal-clip-up block" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', color: C.green, animationDelay: '0.12s' }}>Our Priority.</span>
              </h1>

              <p className="reveal-up text-base md:text-lg font-light leading-relaxed mb-8" style={{ color: C.textMid, animationDelay: '0.3s' }}>
                Your friendly neighbourhood pharmacy in Islington. NHS prescriptions,
                travel vaccinations, health checks, and genuine expert advice — all
                under one roof. Free local delivery within 2 miles.
              </p>

              {/* Emergency contact */}
              <div className="reveal-up p-4 rounded-xl flex items-center gap-4 mb-8" style={{ animationDelay: '0.4s', backgroundColor: C.greenPale, border: `1px solid ${C.greenMid}` }}>
                <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0" style={{ backgroundColor: C.greenMid }}>
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <div style={{ position: 'absolute', width: 2, height: 10, background: C.green, borderRadius: 1 }} />
                    <div style={{ position: 'absolute', width: 10, height: 2, background: C.green, borderRadius: 1 }} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider" style={S.green}>Emergency Advice Line</div>
                  <div className="text-lg font-bold" style={{ color: C.textDark }}>+44 20 7946 6600</div>
                  <div className="text-xs" style={S.textLight}>Available during opening hours</div>
                </div>
              </div>

              <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.5s' }}>
                <a href="#services" className="px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300"
                  style={{ backgroundColor: C.green }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.greenDark; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.green; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
                  Our Services
                </a>
                <a href="#nhs-services" className="px-7 py-3.5 rounded-full font-medium transition-all duration-300"
                  style={{ border: `2px solid ${C.green}`, color: C.green }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${C.green}08` }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}>
                  NHS Services
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="reveal-right relative hidden md:block" style={{ zIndex: 2 }}>
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=700&h=800&fit=crop"
                alt="Greenleaf Pharmacy — your community pharmacy"
                className="w-full rounded-3xl object-cover"
                style={{ maxHeight: 520 }}
              />
              {/* Trust badge overlay */}
              <div className="absolute -bottom-4 -left-4 px-5 py-4 rounded-2xl shadow-lg"
                style={{ backgroundColor: C.white, border: `1px solid ${C.midGrey}` }}>
                <div className="text-2xl font-bold" style={S.green}>4.9★</div>
                <div className="text-xs mt-0.5" style={S.textLight}>320+ Google reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES GRID
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={S.lightGrey}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.green}>What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.textDark }}>Our Services</h2>
            <p className="mt-4 text-base font-light max-w-xl mx-auto" style={S.textMid}>More than just prescriptions. Our pharmacists are qualified to advise, treat, and support you across a wide range of health needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {services.map((svc, i) => (
              <div key={svc.title} className="reveal-up p-6 rounded-2xl bg-white group transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s`, border: `1px solid ${C.midGrey}` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${C.green}44`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${C.green}14` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.midGrey; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300" style={{ backgroundColor: C.greenPale }}>
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <div style={{ position: 'absolute', width: 2, height: 10, background: C.green, borderRadius: 1 }} />
                    <div style={{ position: 'absolute', width: 10, height: 2, background: C.green, borderRadius: 1 }} />
                  </div>
                </div>
                <h3 className="font-semibold text-base mb-3" style={{ color: C.textDark }}>{svc.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.textMid}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRODUCTS
          ═══════════════════════════════════════ */}
      <section id="products" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.green}>In Store</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.textDark }}>Product Categories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {productCategories.map((cat, i) => (
              <div key={cat.title} className="reveal-up rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s`, border: `1px solid ${C.midGrey}`, boxShadow: 'none' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${C.green}14` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.charcoal}aa, transparent)` }} />
                  <h3 className="absolute bottom-4 left-4 font-bold text-white text-sm">{cat.title}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-light" style={S.textMid}>
                        <span style={{ color: C.green, flexShrink: 0 }}>+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NHS SERVICES
          ═══════════════════════════════════════ */}
      <section id="nhs-services" className="py-24 md:py-32 px-6 md:px-16" style={S.greenPale}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.green}>NHS Services</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: C.textDark }}>See a Pharmacist<br />Instead of a GP</h2>
            <p className="text-base font-light max-w-xl" style={S.textMid}>NHS-funded services — free at the point of care for eligible patients. Save time, get expert advice.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children">
            {nhsServices.map((nhs, i) => (
              <div key={nhs.title} className="reveal-up p-6 rounded-2xl bg-white" style={{ animationDelay: `${i * 0.1}s`, border: `1px solid ${C.greenMid}` }}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.greenMid }}>
                    <span className="text-xs font-bold" style={S.green}>NHS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: C.textDark }}>{nhs.title}</h3>
                    <p className="text-sm font-light leading-relaxed" style={S.textMid}>{nhs.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DELIVERY
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16" style={S.charcoal}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.green}>Delivery</p>
            <h2 className="text-3xl font-bold text-white">We Come to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 stagger-children">
            {deliveryInfo.map((item, i) => (
              <div key={item.title} className="reveal-up text-center p-5" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-2xl mb-4" style={S.green}>{item.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: C.textLight }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HEALTH BLOG PREVIEW
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 reveal-up">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.green}>Health Advice</p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: C.textDark }}>From Our Pharmacists</h2>
            </div>
            <a href="#" className="text-sm font-medium hidden md:block" style={S.green}>View all articles →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
            {healthBlogPosts.map((post, i) => (
              <div key={post.title} className="reveal-up p-6 rounded-2xl group cursor-pointer transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s`, border: `1px solid ${C.midGrey}` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${C.green}44`; (e.currentTarget as HTMLElement).style.backgroundColor = C.greenPale }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.midGrey; (e.currentTarget as HTMLElement).style.backgroundColor = C.white }}>
                <div className="flex gap-3 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: C.greenPale, color: C.greenDark }}>{post.date}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: C.lightGrey, color: C.textLight }}>{post.readTime} read</span>
                </div>
                <h3 className="font-semibold text-sm leading-snug group-hover:text-green-700 transition-colors duration-200" style={{ color: C.textDark }}>{post.title}</h3>
                <div className="mt-4 text-xs font-medium" style={S.green}>Read article →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.lightGrey}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.green}>Community Reviews</p>
          <h2 className="text-4xl font-bold" style={{ color: C.textDark }}>What Our Community Says</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.green}>FAQ</p>
            <h2 className="text-4xl font-bold" style={{ color: C.textDark }}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
          ═══════════════════════════════════════ */}
      <section id="contact" className="py-20 px-6 md:px-16" style={S.greenPale}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal-up">
          {[
            { label: 'Visit Us', detail: '45 High Street, Islington, London N1 8EQ', icon: '◈' },
            { label: 'Call Us', detail: '+44 20 7946 6600', icon: '◈' },
            { label: 'Email', detail: 'hello@greenleafpharmacy.com', icon: '◈' },
          ].map((contact) => (
            <div key={contact.label} className="flex items-start gap-4 p-6 rounded-2xl bg-white" style={{ border: `1px solid ${C.greenMid}` }}>
              <span className="text-xl" style={S.green}>{contact.icon}</span>
              <div>
                <div className="font-semibold text-sm mb-1.5" style={{ color: C.textDark }}>{contact.label}</div>
                <div className="text-sm font-light" style={S.textMid}>{contact.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079466600" message="Hi! I'd like to enquire about your pharmacy services" vertical="pharmacyos" />

      <style>{`
        @keyframes pharm-pulse {
          0% { transform: scale(0.95); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.15; }
          100% { transform: scale(0.95); opacity: 0.6; }
        }
        .pharm-pulse { animation: pharm-pulse 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

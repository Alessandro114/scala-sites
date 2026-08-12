'use client'

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem, BookingSlot } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  navy: '#1e293b',
  navyDark: '#0f172a',
  navyLight: '#263347',
  blue: '#3b82f6',
  blueLight: '#60a5fa',
  blueDim: '#2563eb',
  green: '#22c55e',
  greenDim: '#16a34a',
  snowWhite: '#f8fafc',
  offWhite: '#f0f4f8',
  midBlue: '#e2eaf8',
  textWhite: '#e2e8f0',
  textGrey: '#94a3b8',
  textMid: '#cbd5e1',
} as const

const S = {
  page: { backgroundColor: C.navy, color: C.textWhite } as React.CSSProperties,
  navyDark: { backgroundColor: C.navyDark } as React.CSSProperties,
  navyLight: { backgroundColor: C.navyLight } as React.CSSProperties,
  offWhite: { backgroundColor: C.offWhite } as React.CSSProperties,
  blue: { color: C.blue } as React.CSSProperties,
  green: { color: C.green } as React.CSSProperties,
  textGrey: { color: C.textGrey } as React.CSSProperties,
  textMid: { color: C.textMid } as React.CSSProperties,
  textWhite: { color: C.textWhite } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'SpinalAxis Chiropractic',
  description: 'GCC-Registered Chiropractic Clinic — Back Pain, Sciatica & Posture',
  url: 'https://spinalaxis.example.com',
  locale: 'en',
  vertical: 'chiroos',
  theme: 'precision',
  branding: { primaryColor: C.navy, accentColor: C.blue },
  contact: {
    phone: '+44 20 7946 5500',
    email: 'hello@spinalaxis.com',
    whatsapp: '+442079465500',
    address: '32 Wimpole Street, London W1G 8YN',
    coordinates: { lat: 51.52, lng: -0.149 },
  },
  social: {
    instagram: 'spinalaxischiro',
    facebook: 'https://facebook.com/spinalaxis',
  },
  seo: {
    title: 'SpinalAxis Chiropractic | GCC Registered, Back Pain & Sciatica London',
    description: 'GCC-registered chiropractor. Back pain, sciatica, neck pain, and posture correction. 15+ years experience. Same-week appointments in London.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const vertebraeDots = [18, 32, 46, 60, 73, 85, 97] // percentage positions down the spine

const conditions = [
  { title: 'Back Pain', desc: 'Acute and chronic lower back pain, disc herniation, facet joint syndrome, and muscle spasm. The most common reason patients visit us.', icon: '◈' },
  { title: 'Neck Pain', desc: 'Cervicogenic headaches, whiplash, tech neck, and restricted cervical range of motion. Hands-on treatment with lasting results.', icon: '◈' },
  { title: 'Sciatica', desc: 'Radiating leg pain from L4/L5/S1 nerve root irritation. Precise spinal adjustments to reduce compression and restore function.', icon: '◈' },
  { title: 'Headaches', desc: 'Tension headaches and cervicogenic headaches driven by neck dysfunction. Spinal care often eliminates what medication only masks.', icon: '◈' },
  { title: 'Posture', desc: 'Postural imbalances from desk work, poor ergonomics, and device use. Assessment, treatment, and a corrective exercise programme.', icon: '◈' },
  { title: 'Sports Injuries', desc: 'Musculoskeletal injuries for athletes and active individuals. Biomechanical assessment to identify the root cause and prevent recurrence.', icon: '◈' },
]

const techniques = [
  {
    name: 'Diversified Technique',
    desc: 'The most widely practised chiropractic technique. Precise, high-velocity, low-amplitude adjustments to restore joint mobility. The characteristic "click" is simply nitrogen gas releasing from the joint — entirely safe.',
    suitable: 'Most patients, all spinal regions',
  },
  {
    name: 'Activator Method',
    desc: 'A gentle, instrument-assisted technique using a spring-loaded device to deliver a precise impulse. Ideal for patients who prefer a lower-force approach or have specific contraindications to manual adjustment.',
    suitable: 'Elderly, osteoporosis, anxiety about cracking',
  },
  {
    name: 'Drop Table Technique',
    desc: 'Using a segmented table with drop pieces that fall slightly as the adjustment is delivered. Reduces the force required and is particularly effective for pelvic and sacroiliac joint issues.',
    suitable: 'Pelvic, sacroiliac, and lumbar conditions',
  },
]

const firstVisitSteps = [
  { step: '1', title: 'Consultation', desc: 'A detailed case history covering your symptoms, health history, lifestyle, and goals. We take the time to actually listen.' },
  { step: '2', title: 'Examination', desc: 'Orthopaedic, neurological, and postural assessment. Range of motion testing. X-rays arranged if clinically indicated.' },
  { step: '3', title: 'Report of Findings', desc: 'We explain exactly what we found, what it means, and how we recommend treating it. Clear, honest, no pressure.' },
  { step: '4', title: 'First Adjustment', desc: 'If appropriate (usually is), your first adjustment takes place at this same visit. Most patients feel immediate relief.' },
]

const fees = [
  { name: 'Initial Assessment', duration: '60 min', price: '£75', detail: 'Consultation, examination, and first adjustment' },
  { name: 'Adjustment Session', duration: '30 min', price: '£55', detail: 'Follow-up treatment session' },
  { name: '6-Session Package', duration: '30 min each', price: '£280', detail: 'Save £50 · Most common course of care' },
  { name: 'Annual Wellness Plan', duration: 'Monthly visits', price: '£420 /yr', detail: 'Preventive care, 12 adjustments + posture check' },
]

const team = [
  {
    name: 'Dr. Mark Holloway',
    credentials: 'DC, GCC Registered · 15+ years',
    speciality: 'Spinal Rehabilitation & Sports Chiropractic',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Anna Petrov',
    credentials: 'DC, MSc Sports Science · GCC',
    speciality: 'Scoliosis & Paediatric Chiropractic',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
  },
]

const reviews: Review[] = [
  { id: '1', author: 'Edward B.', rating: 5, text: "I had lower back pain for 8 years. Three rounds of physiotherapy, two rounds of cortisone injections, no lasting result. Dr Holloway diagnosed an SI joint problem nobody had identified. Four adjustments and I was pain-free for the first time since 2018.", date: '2026-07-08', source: 'google', verified: true },
  { id: '2', author: 'Charlotte D.', rating: 5, text: "My sciatica was so severe I couldn't put on my own shoes. The drop table technique felt like nothing — no cracking, no discomfort — and the leg pain started resolving after session two. Completely gone by session six.", date: '2026-07-24', source: 'google', verified: true },
  { id: '3', author: 'Niall F.', rating: 5, text: 'As a marathon runner I\'d resigned myself to a "bad back". After a biomechanical assessment, Dr Holloway identified a pelvis rotation causing my recurring injuries. Two months later, PB at London Marathon.', date: '2026-07-31', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Patricia H.', rating: 5, text: 'I was terrified of the "cracking" — Dr Holloway used the Activator method for my whole course of care. Completely painless, incredibly effective. My chronic neck tension is gone after 12 years.', date: '2026-08-05', source: 'google', verified: true },
  { id: '5', author: 'Simon W.', rating: 5, text: 'Booked via WhatsApp on a Tuesday, seen on Thursday, first adjustment same day. The process is incredibly slick and the clinical knowledge is outstanding. This is the standard all healthcare should be.', date: '2026-07-19', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Is chiropractic treatment safe?', answer: 'Yes. Chiropractic care is one of the safest forms of healthcare for musculoskeletal conditions. Serious adverse events are extremely rare. All our chiropractors are registered with the General Chiropractic Council (GCC), the UK statutory regulator — the equivalent of the GMC for chiropractors. We conduct a thorough health screen before any treatment.' },
  { question: 'Does the adjustment hurt?', answer: 'Most patients describe a feeling of relief, not pain. There may be some mild soreness for 24–48 hours after the first session, similar to how muscles feel after exercise. If you are nervous about the "cracking" sound, we offer the Activator technique which is completely silent and gentle.' },
  { question: 'Do I need a GP referral?', answer: 'No. Chiropractors are primary contact practitioners — you can book directly without a GP referral. If we identify anything that requires medical investigation, we will write to your GP with our findings.' },
  { question: 'How many sessions will I need?', answer: 'This depends on the nature and duration of your condition. Acute problems (recent onset) often respond in 4–6 sessions. Chronic conditions may need 8–12 sessions for lasting improvement. We will give you a realistic, honest prognosis at your first appointment — no open-ended treatment plans.' },
  { question: 'Can I claim on private health insurance?', answer: 'Yes. We are recognised by most major UK private health insurers. Please check whether your policy covers chiropractic and obtain any required authorisation number before your appointment.' },
  { question: 'Can children have chiropractic treatment?', answer: 'Yes. Paediatric chiropractic is safe when performed by a qualified practitioner. Dr Petrov has specialist training in paediatric chiropractic. We use very gentle, age-appropriate techniques entirely different from adult adjustments.' },
  { question: 'What should I wear to my appointment?', answer: 'Comfortable, loose-fitting clothing. For back conditions, please avoid tight jeans or dresses. We have changing facilities. Shorts are ideal for lower back and hip examinations.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '08:00', available: true, spotsLeft: 2 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '09:30', available: true, spotsLeft: 3 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '11:00', available: true, spotsLeft: 1 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 4 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '16:30', available: true, spotsLeft: 2 },
  { id: '6', date: new Date().toISOString().split('T')[0], time: '18:00', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://spinalaxis.example.com',
  name: 'SpinalAxis Chiropractic',
  description: 'GCC-registered chiropractic clinic in London. Back pain, neck pain, sciatica, headaches, and sports injuries.',
  url: 'https://spinalaxis.example.com',
  telephone: '+44 20 7946 5500',
  email: 'hello@spinalaxis.com',
  address: { '@type': 'PostalAddress', streetAddress: '32 Wimpole Street', addressLocality: 'London', postalCode: 'W1G 8YN', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.52, longitude: -0.149 },
  priceRange: '££',
  medicalSpecialty: 'Chiropractic',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.navyDark}ee`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.blue}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* Spine icon */}
          <div className="relative flex flex-col items-center gap-0.5" style={{ height: 24 }}>
            <div style={{ width: 3, height: 24, background: `linear-gradient(to bottom, ${C.blue}, ${C.green})`, borderRadius: 2, position: 'absolute' }} />
            {[4, 11, 18].map((top, i) => (
              <div key={i} style={{ position: 'absolute', top, width: 10, height: 2, background: C.blue + '88', borderRadius: 1, left: -3.5 }} />
            ))}
          </div>
          <span className="font-semibold text-sm" style={S.textWhite}>SpinalAxis</span>
          <span className="text-xs font-light hidden sm:block" style={S.textGrey}>Chiropractic</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Conditions', 'Techniques', 'Team', 'Fees'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm transition-colors duration-200" style={S.textGrey}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.blue)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textGrey)}>
              {item}
            </a>
          ))}
          <a href="#booking" className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.green})` }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${C.blue}55` }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function ChiropractorPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Anatomical precision / dark navy
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={S.navyDark}>
        {/* X-ray gradient effect */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 60% 50%, ${C.blue}15 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, ${C.green}08 0%, transparent 50%)` }} />

        {/* Spine illustration — CSS/SVG */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center pointer-events-none" style={{ opacity: 0.35 }}>
          {/* Vertical spine line */}
          <div style={{ position: 'relative', width: 60, height: 520 }}>
            {/* Central column */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, transparent, ${C.blue}ff 10%, ${C.blue}ff 90%, transparent)`, borderRadius: 2, transform: 'translateX(-50%)' }} />
            {/* Vertebrae dots with glow */}
            {vertebraeDots.map((pct, i) => (
              <div key={i} style={{ position: 'absolute', top: `${pct}%`, left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', border: `2px solid ${C.blue}`, background: C.navyDark, boxShadow: `0 0 12px ${C.blue}88` }} />
                {/* Side processes */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', width: 28, height: 2, background: `${C.blue}66`, transform: 'translate(-50%, -50%)', borderRadius: 1, marginLeft: -14 }} />
              </div>
            ))}
            {/* Glow overlay */}
            <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${C.blue}20, transparent 70%)` }} />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10">
          <div className="max-w-xl stagger-children">
            {/* Trust badges */}
            <div className="reveal-up flex flex-wrap gap-3 mb-8">
              {['GCC Registered', '15+ Years Experience', 'AXA & BUPA Recognised'].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: `${C.blue}15`, color: C.blueLight, border: `1px solid ${C.blue}35` }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.green, display: 'inline-block' }} />
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="font-bold leading-tight mb-6">
              <span className="reveal-clip-up block text-5xl md:text-7xl" style={S.textWhite}>Align.</span>
              <span className="reveal-clip-up block text-5xl md:text-7xl" style={{ color: C.blue, animationDelay: '0.12s' }}>Restore.</span>
              <span className="reveal-clip-up block text-5xl md:text-7xl" style={{ color: C.green, animationDelay: '0.24s' }}>Thrive.</span>
            </h1>

            {/* Accent line */}
            <div className="reveal-up flex items-center gap-2 mb-8" style={{ animationDelay: '0.3s' }}>
              <div style={{ height: 2, width: 30, background: C.blue, borderRadius: 2 }} />
              <div style={{ height: 2, width: 15, background: C.green, borderRadius: 2 }} />
            </div>

            <p className="reveal-up text-base md:text-lg font-light leading-relaxed mb-10" style={{ color: C.textMid, animationDelay: '0.35s' }}>
              GCC-registered chiropractic care on Wimpole Street. Expert diagnosis
              and precise spinal adjustments for back pain, sciatica, neck pain,
              and sports injuries. Same-week appointments available.
            </p>

            {/* Stats */}
            <div className="reveal-up flex flex-wrap gap-8 mb-10 p-5 rounded-xl" style={{ animationDelay: '0.45s', background: `${C.navyLight}` }}>
              {[
                { value: '6,200+', label: 'Patients treated', color: C.blue },
                { value: '93%', label: 'Pain resolved or significantly reduced', color: C.green },
                { value: '4.9★', label: 'Average Google rating', color: C.blueLight },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-xs mt-1" style={S.textGrey}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
              <a href="#booking" className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300"
                style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.green})` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 28px ${C.blue}50` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                Book Assessment
              </a>
              <a href="#conditions" className="px-8 py-4 rounded-full font-medium transition-all duration-300"
                style={{ border: `2px solid ${C.blue}55`, color: C.textMid }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.blue; (e.currentTarget as HTMLElement).style.color = C.blueLight }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${C.blue}55`; (e.currentTarget as HTMLElement).style.color = C.textMid }}>
                Conditions We Treat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONDITIONS
          ═══════════════════════════════════════ */}
      <section id="conditions" className="py-24 md:py-32 px-6 md:px-16" style={S.navyLight}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.blue}>What We Treat</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={S.textWhite}>Conditions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {conditions.map((cond, i) => (
              <div key={cond.title} className="reveal-up p-6 rounded-2xl group transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 0.08}s`, background: C.navyDark, border: `1px solid ${C.blue}20` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${C.blue}50`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${C.blue}18` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${C.blue}20`; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${C.blue}18` }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: `linear-gradient(135deg, ${C.blue}, ${C.green})` }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={S.textWhite}>{cond.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.textGrey}>{cond.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TECHNIQUES
          ═══════════════════════════════════════ */}
      <section id="techniques" className="py-24 md:py-32 px-6 md:px-16" style={S.navyDark}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.blue}>How We Adjust</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={S.textWhite}>Our Techniques</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {techniques.map((tech, i) => (
              <div key={tech.name} className="reveal-up p-7 rounded-2xl" style={{ animationDelay: `${i * 0.12}s`, background: C.navyLight, border: `1px solid ${C.blue}25` }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.green})`, color: C.navyDark }}>
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-base" style={S.textWhite}>{tech.name}</h3>
                </div>
                <p className="text-sm font-light leading-relaxed mb-5" style={S.textGrey}>{tech.desc}</p>
                <div className="flex items-center gap-2 pt-4" style={{ borderTop: `1px solid ${C.blue}18` }}>
                  <span className="text-xs" style={S.green}>✓</span>
                  <span className="text-xs font-medium" style={{ color: C.green ?? C.green }}>Best for: {tech.suitable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FIRST VISIT
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.navyLight}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.blue}>Your First Appointment</p>
            <h2 className="text-4xl font-bold" style={S.textWhite}>What to Expect</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 stagger-children">
            {firstVisitSteps.map((step, i) => (
              <div key={step.step} className="reveal-up relative text-center" style={{ animationDelay: `${i * 0.12}s` }}>
                {i < firstVisitSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px" style={{ background: `linear-gradient(to right, ${C.blue}44, transparent)` }} />
                )}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                  style={{ background: `linear-gradient(135deg, ${C.blue}25, ${C.green}15)`, border: `2px solid ${C.blue}44` }}>
                  <span className="font-bold" style={S.blue}>{step.step}</span>
                </div>
                <h3 className="font-semibold text-sm mb-3" style={S.textWhite}>{step.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.textGrey}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEES + TEAM
          ═══════════════════════════════════════ */}
      <section id="fees" className="py-24 md:py-32 px-6 md:px-16" style={S.navyDark}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="reveal-left">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.blue}>Fees</p>
            <h2 className="text-3xl font-bold mb-8" style={S.textWhite}>Transparent Pricing</h2>
            <div className="space-y-4">
              {fees.map((fee) => (
                <div key={fee.name} className="flex justify-between items-start p-5 rounded-xl" style={{ background: C.navyLight, border: `1px solid ${C.blue}20` }}>
                  <div className="flex-1">
                    <div className="font-semibold text-sm mb-1" style={S.textWhite}>{fee.name}</div>
                    <div className="text-xs mb-0.5" style={S.textGrey}>{fee.duration}</div>
                    <div className="text-xs" style={S.textGrey}>{fee.detail}</div>
                  </div>
                  <div className="text-xl font-bold flex-shrink-0 ml-4" style={S.blue}>{fee.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="team" className="reveal-right">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.green}>Our Team</p>
            <h2 className="text-3xl font-bold mb-8" style={S.textWhite}>Your Chiropractors</h2>
            <div className="space-y-5">
              {team.map((member) => (
                <div key={member.name} className="flex gap-5 p-5 rounded-xl" style={{ background: C.navyLight, border: `1px solid ${C.blue}20` }}>
                  <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1" style={S.textWhite}>{member.name}</div>
                    <div className="text-xs mb-1" style={S.textGrey}>{member.credentials}</div>
                    <div className="text-xs font-medium" style={S.blue}>{member.speciality}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.navyLight}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.blue}>Patient Reviews</p>
          <h2 className="text-4xl font-bold" style={S.textWhite}>What Our Patients Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={S.navyDark}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.blue}>Appointments</p>
            <h2 className="text-4xl font-bold mb-6" style={S.textWhite}>Book Your Assessment</h2>
            <p className="text-base font-light leading-relaxed mb-8" style={S.textMid}>
              Same-week appointments usually available. Your first visit includes a
              full assessment, diagnosis, and — in most cases — your first adjustment.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Clinic Hours', detail: 'Mon–Fri 8am–8pm · Sat 9am–2pm' },
                { label: 'Location', detail: '32 Wimpole Street, London W1G 8YN' },
                { label: 'Nearest Tube', detail: 'Bond Street (5 min) or Regent\'s Park (6 min)' },
                { label: 'Parking', detail: 'Cavendish Square NCP (4 min walk)' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-1 rounded-full flex-shrink-0" style={{ background: `linear-gradient(to bottom, ${C.blue}, ${C.green})`, minHeight: 40 }} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={S.blue}>{info.label}</p>
                    <p className="text-sm font-light" style={S.textGrey}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 174, label: 'assessments booked this month' }} vertical="chiroos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.navyLight}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.blue}>FAQ</p>
            <h2 className="text-4xl font-bold" style={S.textWhite}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="ChiroOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079465500" message="Hi! I'd like to book a chiropractic assessment" vertical="chiroos" />
    </div>
  )
}

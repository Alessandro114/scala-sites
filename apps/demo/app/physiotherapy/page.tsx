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
  blue: '#2563eb',
  blueDark: '#1d4ed8',
  blueLight: '#3b82f6',
  teal: '#0d9488',
  tealLight: '#14b8a6',
  white: '#ffffff',
  offWhite: '#f8fafc',
  coolGrey: '#f1f5f9',
  midGrey: '#e2e8f0',
  textGrey: '#64748b',
  textDark: '#0f172a',
  textMid: '#334155',
} as const

const S = {
  page: { backgroundColor: C.white, color: C.textDark } as React.CSSProperties,
  offWhite: { backgroundColor: C.offWhite } as React.CSSProperties,
  coolGrey: { backgroundColor: C.coolGrey } as React.CSSProperties,
  blue: { color: C.blue } as React.CSSProperties,
  teal: { color: C.teal } as React.CSSProperties,
  textMid: { color: C.textMid } as React.CSSProperties,
  textGrey: { color: C.textGrey } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'PeakForm Physiotherapy',
  description: 'HCPC-registered physiotherapy clinic in London',
  url: 'https://peakformphysio.example.com',
  locale: 'en',
  vertical: 'physioos',
  theme: 'clinical',
  branding: { primaryColor: C.blue, accentColor: C.teal },
  contact: {
    phone: '+44 20 7946 2400',
    email: 'hello@peakformphysio.com',
    whatsapp: '+442079462400',
    address: '14 Harley Street, London W1G 9PH',
    coordinates: { lat: 51.5196, lng: -0.1479 },
  },
  social: {
    instagram: 'peakformphysio',
    facebook: 'https://facebook.com/peakformphysio',
  },
  seo: {
    title: 'PeakForm Physiotherapy | HCPC-Registered Clinic, Harley Street',
    description: 'Expert physiotherapy for sports injuries, back pain, post-surgery rehab and more.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const treatments = [
  {
    title: 'Sports Injury',
    desc: 'Acute and chronic sports injuries from ligament tears to muscle strains. Evidence-based treatment to get you back to peak performance faster.',
    icon: '⬡',
    detail: 'From £65 / session',
  },
  {
    title: 'Back & Neck Pain',
    desc: 'Specialist assessment and hands-on treatment for disc issues, sciatica, whiplash, and chronic postural pain.',
    icon: '⬡',
    detail: 'From £65 / session',
  },
  {
    title: 'Post-Surgery Rehab',
    desc: 'Structured rehabilitation programmes following joint replacements, reconstructions, and orthopaedic procedures.',
    icon: '⬡',
    detail: 'From £65 / session',
  },
  {
    title: "Women's Health",
    desc: 'Specialist pelvic health physiotherapy covering ante-natal, post-natal, pelvic floor dysfunction, and menopause-related conditions.',
    icon: '⬡',
    detail: 'From £85 / session',
  },
  {
    title: 'Neuro Rehabilitation',
    desc: 'Expert neurological physiotherapy for stroke, MS, Parkinson\'s, and other neurological conditions. Supporting independence and quality of life.',
    icon: '⬡',
    detail: 'From £85 / session',
  },
  {
    title: 'Dry Needling',
    desc: 'Western medical acupuncture and dry needling to release trigger points, reduce pain, and accelerate tissue healing.',
    icon: '⬡',
    detail: 'Add-on from £30',
  },
]

const team = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Lead Physiotherapist, MSc Sports Physio',
    credentials: 'HCPC · CSP · BASRaT',
    speciality: 'Sports Injury & Performance Rehab',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
  },
  {
    name: 'James Okafor',
    title: 'Senior Physiotherapist',
    credentials: 'HCPC · CSP',
    speciality: 'Musculoskeletal & Post-Surgery',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Emma Walsh',
    title: 'Pelvic Health Specialist',
    credentials: 'HCPC · CSP · POGP',
    speciality: "Women's Health & Pelvic Floor",
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
  },
  {
    name: 'Marcus Nduka',
    title: 'Neurological Physiotherapist',
    credentials: 'HCPC · ACPIN',
    speciality: 'Neuro Rehab & Vestibular',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop',
  },
]

const fees = [
  { type: 'Initial Assessment', duration: '60 min', price: '£85', note: 'Comprehensive assessment, diagnosis and treatment plan' },
  { type: 'Follow-up Session', duration: '45 min', price: '£65', note: 'Treatment and exercise progression' },
  { type: '6-Session Package', duration: '45 min each', price: '£340', note: 'Save £50 — most popular for injury recovery' },
  { type: "Women's Health Initial", duration: '75 min', price: '£95', note: 'Extended pelvic health assessment' },
]

const insurers = ['BUPA', 'AXA Health', 'Aviva', 'Vitality Health', 'Simply Health', 'Cigna', 'WPA', 'Healix']

const reviews: Review[] = [
  { id: '1', author: 'Rebecca M.', rating: 5, text: 'After years of chronic back pain and three failed GP referrals, Sarah at PeakForm had me pain-free within 8 sessions. The assessment was the most thorough I have ever experienced.', date: '2026-07-12', source: 'google', verified: true },
  { id: '2', author: 'Tom S.', rating: 5, text: 'Tore my ACL training for a half-marathon. James had me running again in 14 weeks — two weeks ahead of schedule. The sports knowledge here is exceptional.', date: '2026-07-28', source: 'google', verified: true },
  { id: '3', author: 'Laura P.', rating: 5, text: "Emma is phenomenal. I was sceptical about women's health physio but she completely transformed my quality of life after my second pregnancy. Wish I had come sooner.", date: '2026-08-02', source: 'google', verified: true },
  { id: '4', author: 'David H.', rating: 5, text: "Post hip replacement rehab. Marcus had a structured programme ready from day one and explained everything clearly. I'm walking without a stick six weeks post-op.", date: '2026-07-19', source: 'tripadvisor', verified: true },
  { id: '5', author: 'Yasmin F.', rating: 5, text: 'The booking system via WhatsApp is incredibly smooth — confirmed my appointment in under two minutes. And the treatment itself is simply the best I have had in London.', date: '2026-08-04', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do I need a GP referral?', answer: 'No — physiotherapists are first-contact practitioners. You can book directly without a GP referral. However, if you are using private health insurance, please check your policy as some insurers require a GP referral number.' },
  { question: 'Is physiotherapy covered by my health insurance?', answer: 'We are recognised by all major UK insurers including BUPA, AXA Health, Aviva, Vitality, and Cigna. Please check your policy and obtain any required authorisation number before your appointment.' },
  { question: 'What should I wear to my appointment?', answer: 'Wear comfortable, loose-fitting clothing that allows access to the area being treated. For lower limb or back conditions, shorts are ideal. We have changing facilities available.' },
  { question: 'How many sessions will I need?', answer: 'This varies greatly depending on the condition and individual. Your physiotherapist will give you a realistic prognosis at your initial assessment. Most acute injuries resolve in 4–8 sessions; chronic conditions may need more.' },
  { question: 'Do you offer home visits?', answer: 'Yes, for patients who are unable to travel due to injury, surgery, or neurological conditions. Home visit fees start at £120. Please call us to arrange.' },
  { question: 'What is your cancellation policy?', answer: 'We ask for 24 hours notice to cancel or reschedule. Late cancellations or non-attendance may incur a £25 cancellation fee.' },
  { question: 'Can I claim on my health insurance?', answer: 'Yes. We provide a detailed receipt with the appropriate diagnostic and treatment codes. Most major insurers will process your claim directly — please let us know at booking.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '08:30', available: true, spotsLeft: 1 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 3 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '12:00', available: true, spotsLeft: 2 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '14:30', available: true, spotsLeft: 4 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '16:00', available: true, spotsLeft: 2 },
  { id: '6', date: new Date().toISOString().split('T')[0], time: '17:30', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://peakformphysio.example.com',
  name: 'PeakForm Physiotherapy',
  description: 'HCPC-registered physiotherapy clinic on Harley Street, London.',
  url: 'https://peakformphysio.example.com',
  telephone: '+44 20 7946 2400',
  email: 'hello@peakformphysio.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Harley Street',
    addressLocality: 'London',
    postalCode: 'W1G 9PH',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5196, longitude: -0.1479 },
  priceRange: '££',
  medicalSpecialty: 'Physiotherapy',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '16:00' },
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
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.white}f0`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.midGrey}` }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* Cross icon */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            <div style={{ position: 'absolute', width: 3, height: 18, background: C.blue, borderRadius: 2 }} />
            <div style={{ position: 'absolute', width: 18, height: 3, background: C.blue, borderRadius: 2 }} />
          </div>
          <span className="font-semibold text-sm tracking-tight" style={{ color: C.textDark }}>PeakForm</span>
          <span className="font-light text-sm" style={S.textGrey}>Physiotherapy</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Treatments', 'Team', 'Fees', 'Insurance'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm transition-colors duration-200" style={S.textGrey}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.blue)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textGrey)}>
              {item}
            </a>
          ))}
          <a href="#booking" className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.teal})` }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${C.blue}40` }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PhysiotherapyPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Clinical-meets-athletic
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ backgroundColor: C.white }}>
        {/* Diagonal blue gradient stripe */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `linear-gradient(125deg, transparent 45%, ${C.blue}0a 45%, ${C.blue}18 52%, ${C.teal}12 58%, transparent 58%)`
        }} />
        {/* Additional subtle stripe */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `linear-gradient(125deg, transparent 55%, ${C.teal}06 55%, ${C.teal}10 60%, transparent 60%)`
        }} />

        {/* Anatomical line-drawing CSS border art */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden md:block overflow-hidden">
          {/* Vertical spine-like line */}
          <div style={{ position: 'absolute', left: '30%', top: '10%', bottom: '10%', width: 1, background: `linear-gradient(to bottom, transparent, ${C.blue}20 20%, ${C.blue}30 50%, ${C.blue}20 80%, transparent)` }} />
          {/* Horizontal anatomical lines */}
          {[20, 30, 40, 50, 60, 70, 80].map((pct, i) => (
            <div key={i} style={{
              position: 'absolute', top: `${pct}%`, left: '25%',
              width: `${20 + Math.sin(i) * 10}%`, height: 1,
              background: `${C.blue}${i % 2 === 0 ? '18' : '10'}`
            }} />
          ))}
          {/* Gradient photo */}
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop"
            alt="Physiotherapy treatment"
            className="absolute right-0 top-0 w-4/5 h-full object-cover"
            style={{ maskImage: 'linear-gradient(to left, white 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, white 50%, transparent 100%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10">
          <div className="max-w-xl stagger-children">
            {/* Trust badges */}
            <div className="reveal-up flex flex-wrap gap-3 mb-8">
              {['HCPC Registered', 'CSP Chartered', 'AXA & BUPA Recognised'].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: `${C.blue}12`, color: C.blue, border: `1px solid ${C.blue}25` }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.teal, display: 'inline-block' }} />
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="font-bold leading-[1.05] mb-6">
              <span className="reveal-clip-up block text-5xl md:text-7xl" style={{ color: C.textDark }}>Move Better.</span>
              <span className="reveal-clip-up block text-5xl md:text-7xl" style={{ color: C.blue, animationDelay: '0.12s' }}>Live Better.</span>
            </h1>

            {/* Blue accent underline */}
            <div className="reveal-up mb-8 flex items-center gap-0" style={{ animationDelay: '0.25s' }}>
              <div style={{ height: 3, width: 40, background: C.blue, borderRadius: 2 }} />
              <div style={{ height: 3, width: 20, background: C.teal, borderRadius: 2, marginLeft: 4 }} />
            </div>

            <p className="reveal-up text-lg font-light leading-relaxed mb-10" style={{ color: C.textMid, animationDelay: '0.3s' }}>
              Expert physiotherapy on Harley Street. From acute sports injuries to
              complex neurological rehabilitation — evidence-based treatment tailored
              to you. Same-week appointments available.
            </p>

            {/* Stats */}
            <div className="reveal-up flex flex-wrap gap-8 mb-10" style={{ animationDelay: '0.4s' }}>
              {[
                { value: '98%', label: 'Patient satisfaction' },
                { value: '4,800+', label: 'Patients treated' },
                { value: '15+ yrs', label: 'Clinical experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold" style={S.blue}>{stat.value}</div>
                  <div className="text-xs mt-1" style={S.textGrey}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.5s' }}>
              <a href="#booking" className="px-8 py-4 rounded-full font-medium text-white transition-all duration-300"
                style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.teal})` }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 12px 28px ${C.blue}40` }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
                Book an Assessment
              </a>
              <a href="#treatments" className="px-8 py-4 rounded-full font-medium transition-all duration-300"
                style={{ border: `2px solid ${C.blue}`, color: C.blue, backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.blue}08` }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}>
                Our Treatments
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TREATMENTS GRID
          ═══════════════════════════════════════ */}
      <section id="treatments" className="py-24 md:py-32 px-6 md:px-16" style={S.coolGrey}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.teal}>What We Treat</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.textDark }}>Treatments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {treatments.map((t, i) => (
              <div key={t.title} className="reveal-up bg-white rounded-2xl p-7 group transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s`, border: `1px solid ${C.midGrey}` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${C.blue}14`; (e.currentTarget as HTMLElement).style.borderColor = `${C.blue}30` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = C.midGrey }}>
                {/* Icon hexagon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: `${C.blue}10` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${C.blue}20` }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.teal})` }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: C.textDark }}>{t.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={S.textGrey}>{t.desc}</p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${C.midGrey}` }}>
                  <span className="text-xs font-medium" style={S.blue}>{t.detail}</span>
                  <span className="text-xs transition-colors duration-200" style={{ color: C.midGrey }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEAM
          ═══════════════════════════════════════ */}
      <section id="team" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.teal}>Our Team</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.textDark }}>Expert Clinicians</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {team.map((member, i) => (
              <div key={member.name} className="reveal-up group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-2xl mb-5" style={{ height: 280 }}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: `linear-gradient(to top, ${C.textDark}cc, transparent)` }}>
                    <span className="text-xs font-medium text-white px-2.5 py-1 rounded-full" style={{ background: `${C.teal}cc` }}>
                      {member.credentials}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-base mb-1" style={{ color: C.textDark }}>{member.name}</h3>
                <p className="text-xs mb-2" style={S.textGrey}>{member.title}</p>
                <p className="text-xs font-medium" style={S.blue}>{member.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEES + INSURANCE
          ═══════════════════════════════════════ */}
      <section id="fees" className="py-24 md:py-32 px-6 md:px-16" style={S.coolGrey}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Fees */}
          <div className="reveal-left">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.teal}>Fees</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: C.textDark }}>Transparent Pricing</h2>
            <div className="space-y-4">
              {fees.map((fee) => (
                <div key={fee.type} className="bg-white rounded-xl p-5 flex items-start justify-between gap-4"
                  style={{ border: `1px solid ${C.midGrey}` }}>
                  <div className="flex-1">
                    <div className="font-semibold text-sm mb-1" style={{ color: C.textDark }}>{fee.type}</div>
                    <div className="text-xs mb-1" style={S.textGrey}>{fee.duration}</div>
                    <div className="text-xs" style={S.textGrey}>{fee.note}</div>
                  </div>
                  <div className="text-xl font-bold flex-shrink-0" style={S.blue}>{fee.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance */}
          <div id="insurance" className="reveal-right">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.teal}>Insurance</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.textDark }}>We Work With Your Insurer</h2>
            <p className="text-sm leading-relaxed mb-8" style={S.textGrey}>We are recognised by all major private health insurers. Simply provide your authorisation number when booking — we handle the rest.</p>
            <div className="grid grid-cols-2 gap-3">
              {insurers.map((ins) => (
                <div key={ins} className="bg-white rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{ border: `1px solid ${C.midGrey}` }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.teal})` }} />
                  <span className="text-sm font-medium" style={{ color: C.textMid }}>{ins}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs" style={S.textGrey}>Don&rsquo;t see your insurer? Call us — we work with all major providers.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.teal}>Appointments</p>
            <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark }}>Book Your Assessment</h2>
            <p className="text-base leading-relaxed mb-8" style={S.textGrey}>Same-week appointments usually available. Confirmed instantly. Cancel or reschedule up to 24 hours in advance.</p>
            <div className="space-y-4">
              {[
                { label: 'Clinic Hours', detail: 'Mon–Fri 8am–8pm · Sat 9am–4pm' },
                { label: 'Location', detail: '14 Harley Street, London W1G 9PH' },
                { label: 'Nearest Tube', detail: 'Regent\'s Park (3 min) or Oxford Circus (7 min)' },
                { label: 'Parking', detail: 'Cavendish Square car park (4 min walk)' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-1 rounded-full flex-shrink-0" style={{ background: `linear-gradient(to bottom, ${C.blue}, ${C.teal})`, minHeight: 40 }} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={S.blue}>{info.label}</p>
                    <p className="text-sm" style={S.textGrey}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 213, label: 'appointments booked this month' }} vertical="physioos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.coolGrey}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.teal}>Patient Reviews</p>
          <h2 className="text-4xl font-bold" style={{ color: C.textDark }}>What Our Patients Say</h2>
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
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.teal}>FAQ</p>
            <h2 className="text-4xl font-bold" style={{ color: C.textDark }}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="PhysioOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079462400" message="Hi! I'd like to book a physiotherapy appointment" vertical="physioos" />
    </div>
  )
}

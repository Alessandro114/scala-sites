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
  sage: '#a8c5a0',
  sageDark: '#7fa876',
  sageDeep: '#5a8a52',
  lavender: '#c4b5d4',
  lavenderDark: '#9b86b5',
  warmWhite: '#faf9f7',
  warmOff: '#f3f0eb',
  warmMid: '#e8e3db',
  charcoal: '#333333',
  textMid: '#5a5550',
  textLight: '#8a8278',
  white: '#ffffff',
} as const

const S = {
  page: { backgroundColor: C.warmWhite, color: C.charcoal } as React.CSSProperties,
  warmOff: { backgroundColor: C.warmOff } as React.CSSProperties,
  sage: { color: C.sage } as React.CSSProperties,
  sageDeep: { color: C.sageDeep } as React.CSSProperties,
  lavender: { color: C.lavender } as React.CSSProperties,
  textMid: { color: C.textMid } as React.CSSProperties,
  textLight: { color: C.textLight } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Dr. Clara Marsh',
  description: 'Chartered Psychologist — Anxiety, Trauma & CBT',
  url: 'https://drclararsh.example.com',
  locale: 'en',
  vertical: 'mindos',
  theme: 'calm',
  branding: { primaryColor: C.sage, accentColor: C.lavender },
  contact: {
    phone: '+44 20 7946 3300',
    email: 'contact@drclararsh.com',
    whatsapp: '+442079463300',
    address: '22 Bedford Row, London WC1R 4JS',
    coordinates: { lat: 51.5182, lng: -0.1138 },
  },
  social: { instagram: 'drclara_psych' },
  seo: {
    title: 'Dr. Clara Marsh | Chartered Psychologist, Anxiety & Trauma CBT London',
    description: 'Confidential therapy for anxiety, depression, trauma, and couples. CBT and EMDR. Individual from £120.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const specialties = [
  { title: 'Anxiety & Panic', desc: 'Generalised anxiety, social anxiety, health anxiety, and panic disorder. Practical CBT tools to reclaim calm and confidence.', icon: '◯' },
  { title: 'Depression', desc: 'Persistent low mood, loss of motivation, and burnout. A compassionate, structured approach to rebuilding wellbeing.', icon: '◯' },
  { title: 'Trauma & PTSD', desc: 'Complex and single-incident trauma, including PTSD and adverse childhood experiences. EMDR and trauma-focused CBT.', icon: '◯' },
  { title: 'Couples Therapy', desc: 'Communication, conflict, intimacy, and relationship transitions. A safe, neutral space for both partners.', icon: '◯' },
  { title: 'CBT', desc: 'Cognitive Behavioural Therapy — the most evidence-based psychological treatment for anxiety and depression.', icon: '◯' },
  { title: 'EMDR', desc: 'Eye Movement Desensitisation and Reprocessing — highly effective for trauma, phobias, and distressing memories.', icon: '◯' },
]

const firstSessionSteps = [
  { step: '1', title: 'Initial Contact', desc: 'Complete a brief enquiry form or send a message. I respond to all enquiries personally within 24 hours.' },
  { step: '2', title: 'Free 15-Min Call', desc: 'A confidential introductory call to discuss your needs, answer your questions, and determine whether we\'re a good fit.' },
  { step: '3', title: 'First Session', desc: 'A 60-minute assessment session. We explore your current difficulties, history, and goals at your pace. Nothing is rushed.' },
  { step: '4', title: 'Your Plan', desc: 'A personalised therapy plan — the approach, frequency, and realistic timescales — agreed together before we begin.' },
]

const fees = [
  { type: 'Individual Therapy', session: '60 min', price: '£120', note: 'Face-to-face or online' },
  { type: 'Couples Therapy', session: '75 min', price: '£160', note: 'Face-to-face or online' },
  { type: 'Online Session', session: '60 min', price: '£100', note: 'Secure video platform' },
  { type: 'Introductory Call', session: '15 min', price: 'Free', note: 'No obligation' },
]

const reviews: Review[] = [
  { id: '1', author: 'Sarah', rating: 5, text: "I came to Clara in crisis after a traumatic bereavement. She created a space I'd never experienced before — completely safe, utterly non-judgmental. The EMDR work changed something fundamental in me.", date: '2026-06-20', source: 'google', verified: true },
  { id: '2', author: 'Michael', rating: 5, text: "I'd had CBT with two other therapists before and it felt mechanical. With Clara it felt human. She adapted the techniques to actually fit how my mind works. Six months later I am a different person.", date: '2026-07-14', source: 'google', verified: true },
  { id: '3', author: 'Priya & James', rating: 5, text: 'We came as a couple on the brink of separation. Eighteen months later we have tools, understanding, and — honestly — a better relationship than before the crisis. Remarkable work.', date: '2026-07-30', source: 'google', verified: true },
  { id: '4', author: 'anonymous', rating: 5, text: 'The strict confidentiality was what finally allowed me to speak. For the first time I could say everything without fear. The work was hard but the results have been lasting.', date: '2026-08-03', source: 'google', verified: true },
  { id: '5', author: 'Laura', rating: 5, text: "Clara's way of explaining the neuroscience behind my anxiety helped more than years of trying to 'just relax'. Understanding the why gave me power over the what.", date: '2026-07-22', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Is everything I say completely confidential?', answer: 'Yes. Everything shared in sessions is strictly confidential. The only exceptions are rare circumstances where there is a serious risk of harm to yourself or others — and even then, I would always discuss this with you first where possible. I am registered with the Information Commissioner\'s Office and hold professional indemnity insurance.' },
  { question: 'What is the difference between a psychologist and a therapist?', answer: 'A chartered psychologist (like myself) holds a doctorate-level qualification regulated by the British Psychological Society and Health and Care Professions Council. This includes extensive training in psychological assessment, research, and a range of therapeutic approaches beyond basic counselling.' },
  { question: 'How do I know if therapy is right for me?', answer: 'If you are experiencing persistent distress, anxiety, low mood, relationship difficulties, or trauma that is affecting your daily life, therapy can help. The free 15-minute introductory call is a pressure-free way to explore whether we\'re a good fit before committing to anything.' },
  { question: 'How long will therapy take?', answer: 'It depends entirely on you and your goals. Some people find significant relief in 8–12 sessions of CBT. Deeper work — particularly around trauma or long-standing patterns — often takes longer. We will discuss realistic timescales together once I understand your situation.' },
  { question: 'Do you offer online therapy?', answer: 'Yes. Online sessions are conducted via a GDPR-compliant, end-to-end encrypted video platform. Many clients find online therapy equally effective and appreciate the convenience and additional privacy it offers.' },
  { question: 'What happens if I need to cancel?', answer: 'I ask for 48 hours notice to cancel or reschedule. Late cancellations may be charged at 50% of the session fee. I understand that life happens — please contact me as soon as you know you cannot attend.' },
  { question: 'Do you prescribe medication?', answer: 'No. As a psychologist, I provide psychological therapy only. If medication may be beneficial alongside therapy, I can write to your GP with a clinical recommendation.' },
  { question: 'Is my information stored securely?', answer: 'All clinical notes are encrypted and stored securely in compliance with GDPR. I do not share your information with any third party without your explicit consent. You have the right to request a copy of your records at any time.' },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://drclararsh.example.com',
  name: 'Dr. Clara Marsh — Chartered Psychologist',
  description: 'Confidential psychological therapy for anxiety, depression, trauma and couples in London.',
  url: 'https://drclararsh.example.com',
  telephone: '+44 20 7946 3300',
  email: 'contact@drclararsh.com',
  address: { '@type': 'PostalAddress', streetAddress: '22 Bedford Row', addressLocality: 'London', postalCode: 'WC1R 4JS', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5182, longitude: -0.1138 },
  priceRange: '££',
  medicalSpecialty: 'Psychiatry',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '15:00' },
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
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.warmWhite}f5`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.warmMid}` }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-light tracking-wide text-sm" style={{ color: C.charcoal }}>
          Dr. <span style={{ color: C.sageDeep, fontWeight: 500 }}>Clara Marsh</span>
          <span className="text-xs ml-2" style={S.textLight}>Chartered Psychologist</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Specialties', 'Approach', 'Fees', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-light transition-colors duration-300" style={S.textLight}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.sageDeep)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textLight)}>
              {item}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300"
            style={{ backgroundColor: C.sageDark }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.sageDeep; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.sageDark; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PsychologistPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Calming, trust-first
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mind-hero-breathe">
        {/* Soft sage-to-lavender gradient */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(160deg, ${C.sage}20 0%, ${C.warmWhite} 35%, ${C.warmWhite} 65%, ${C.lavender}18 100%)`
        }} />

        {/* Minimalist branch SVG accent */}
        <div className="absolute top-16 right-12 opacity-20 pointer-events-none hidden md:block" aria-hidden>
          <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 280 C100 280 100 150 100 100" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M100 200 C100 200 60 180 40 160" stroke={C.sage} strokeWidth="1" strokeLinecap="round" />
            <path d="M100 170 C100 170 140 155 160 135" stroke={C.sage} strokeWidth="1" strokeLinecap="round" />
            <path d="M100 140 C100 140 65 125 50 100" stroke={C.sage} strokeWidth="1" strokeLinecap="round" />
            <path d="M100 120 C100 120 130 108 150 85" stroke={C.sage} strokeWidth="0.8" strokeLinecap="round" />
            <circle cx="40" cy="160" r="3" fill={C.sage} opacity="0.6" />
            <circle cx="160" cy="135" r="2.5" fill={C.lavender} opacity="0.6" />
            <circle cx="50" cy="100" r="2" fill={C.sage} opacity="0.5" />
            <circle cx="150" cy="85" r="2" fill={C.lavender} opacity="0.5" />
            <circle cx="100" cy="100" r="4" fill={C.sageDark} opacity="0.4" />
          </svg>
        </div>

        {/* Second branch, left side */}
        <div className="absolute bottom-20 left-8 opacity-15 pointer-events-none hidden md:block" aria-hidden>
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 170 C60 170 60 80 60 50" stroke={C.lavender} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M60 120 C60 120 30 100 20 80" stroke={C.lavender} strokeWidth="0.8" strokeLinecap="round" />
            <path d="M60 90 C60 90 85 75 95 55" stroke={C.lavender} strokeWidth="0.8" strokeLinecap="round" />
            <circle cx="20" cy="80" r="2" fill={C.lavender} opacity="0.5" />
            <circle cx="95" cy="55" r="2" fill={C.sage} opacity="0.5" />
          </svg>
        </div>

        {/* Privacy badge */}
        <div className="absolute top-24 left-6 md:left-16 flex items-center gap-2 px-4 py-2.5 rounded-full"
          style={{ backgroundColor: C.warmOff, border: `1px solid ${C.warmMid}` }}>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: C.sageDark }} />
          <span className="text-xs font-medium" style={{ color: C.sageDeep }}>Strictly Confidential</span>
        </div>

        {/* Hero content — centred with breathing animation */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center stagger-children">
          <p className="reveal-up text-xs tracking-[0.4em] uppercase mb-6 font-medium" style={S.sageDeep}>
            Chartered Psychologist &middot; HCPC Registered &middot; BPS Member
          </p>

          <h1 className="font-light leading-[1.1] mb-8">
            <span className="reveal-clip-up block" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: C.charcoal }}>Your Mind</span>
            <span className="reveal-clip-up block" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: C.sageDeep, fontStyle: 'italic', animationDelay: '0.15s' }}>Matters.</span>
          </h1>

          <p className="reveal-up text-base md:text-lg font-light leading-relaxed mb-10" style={{ color: C.textMid, animationDelay: '0.3s' }}>
            A confidential, evidence-based space to understand yourself, process
            what&rsquo;s difficult, and find a way forward. I work with adults
            experiencing anxiety, depression, trauma, and relationship difficulties.
          </p>

          {/* Credentials strip */}
          <div className="reveal-up flex flex-wrap gap-3 justify-center mb-10" style={{ animationDelay: '0.4s' }}>
            {['CBT', 'EMDR', 'Trauma-Informed', 'Online Available'].map((cred) => (
              <span key={cred} className="text-xs px-4 py-2 rounded-full font-light"
                style={{ backgroundColor: C.warmOff, color: C.textMid, border: `1px solid ${C.warmMid}` }}>
                {cred}
              </span>
            ))}
          </div>

          <div className="reveal-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.5s' }}>
            <a href="#contact" className="px-8 py-4 rounded-full font-medium text-white transition-all duration-400"
              style={{ backgroundColor: C.sageDark }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.sageDeep; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.sageDark; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
              Begin with a Free Call
            </a>
            <a href="#specialties" className="px-8 py-4 rounded-full font-light transition-all duration-300"
              style={{ color: C.textMid, border: `1px solid ${C.warmMid}` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.sage; (e.currentTarget as HTMLElement).style.color = C.sageDeep }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.warmMid; (e.currentTarget as HTMLElement).style.color = C.textMid }}>
              How I Can Help
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SPECIALTIES
          ═══════════════════════════════════════ */}
      <section id="specialties" className="py-24 md:py-32 px-6 md:px-16" style={S.warmOff}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal-up">
            <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={S.sageDeep}>Areas of Work</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.charcoal }}>Specialties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {specialties.map((sp, i) => (
              <div key={sp.title} className="reveal-up p-7 rounded-2xl group transition-all duration-400 cursor-default"
                style={{ animationDelay: `${i * 0.08}s`, backgroundColor: C.white, border: `1px solid ${C.warmMid}` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${C.sage}66`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${C.sage}20` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.warmMid; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: `linear-gradient(135deg, ${C.sage}30, ${C.lavender}30)` }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: `linear-gradient(135deg, ${C.sageDark}, ${C.lavenderDark})` }} />
                </div>
                <h3 className="text-lg font-medium mb-3" style={{ color: C.charcoal }}>{sp.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.textMid}>{sp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          APPROACH — Philosophy + credentials
          ═══════════════════════════════════════ */}
      <section id="approach" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&h=900&fit=crop"
              alt="Dr. Clara Marsh"
              className="w-full rounded-3xl object-cover"
              style={{ maxHeight: 580 }}
            />
          </div>
          <div className="reveal-right">
            <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={S.sageDeep}>My Approach</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: C.charcoal }}>Therapy that meets<br />you where you are</h2>

            <blockquote className="text-xl font-light italic leading-relaxed mb-8 pl-5"
              style={{ color: C.sageDark, borderLeft: `2px solid ${C.sage}66` }}>
              &ldquo;Understanding is the beginning of change. I work with you — not on you.&rdquo;
            </blockquote>

            <p className="text-sm font-light leading-relaxed mb-5" style={S.textMid}>
              My practice is grounded in Cognitive Behavioural Therapy (CBT), which is
              the most extensively researched psychological treatment. I also use
              EMDR for trauma, and draw on attachment, schema, and compassion-focused
              approaches depending on what each individual needs.
            </p>
            <p className="text-sm font-light leading-relaxed mb-8" style={S.textMid}>
              You will always understand what we are doing and why. The pace is yours.
              The goals are yours. My job is to provide the tools, the space, and the
              clinical expertise to help you use them.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Qualification', value: 'DClinPsych, UCL' },
                { label: 'Registration', value: 'HCPC · BPS Chartered' },
                { label: 'Training', value: 'EMDR Accredited (EMDR UK)' },
                { label: 'Experience', value: '12 years clinical practice' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl" style={{ backgroundColor: C.warmOff }}>
                  <div className="text-xs uppercase tracking-wider mb-1 font-medium" style={S.sageDeep}>{item.label}</div>
                  <div className="text-sm font-light" style={{ color: C.charcoal }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT TO EXPECT — 4 steps
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.warmOff}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal-up">
            <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={S.sageDeep}>Getting Started</p>
            <h2 className="text-4xl font-light" style={{ color: C.charcoal }}>What to Expect</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 stagger-children">
            {firstSessionSteps.map((step, i) => (
              <div key={step.step} className="reveal-up relative" style={{ animationDelay: `${i * 0.12}s` }}>
                {i < firstSessionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px pointer-events-none" style={{ background: `linear-gradient(to right, ${C.sage}40, transparent)`, zIndex: 0 }} />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 font-light text-lg"
                    style={{ border: `1.5px solid ${C.sage}66`, color: C.sageDeep, backgroundColor: C.white }}>
                    {step.step}
                  </div>
                  <h3 className="text-base font-medium mb-3" style={{ color: C.charcoal }}>{step.title}</h3>
                  <p className="text-sm font-light leading-relaxed" style={S.textMid}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEES
          ═══════════════════════════════════════ */}
      <section id="fees" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={S.sageDeep}>Fees</p>
            <h2 className="text-4xl font-light mb-4" style={{ color: C.charcoal }}>Session Costs</h2>
            <p className="text-sm font-light" style={S.textMid}>All fees are clear and agreed in advance. No hidden costs.</p>
          </div>

          <div className="space-y-4 stagger-children">
            {fees.map((fee, i) => (
              <div key={fee.type} className="reveal-up flex items-center justify-between p-5 rounded-xl"
                style={{ animationDelay: `${i * 0.08}s`, backgroundColor: C.warmOff, border: `1px solid ${C.warmMid}` }}>
                <div>
                  <div className="font-medium text-sm mb-1" style={{ color: C.charcoal }}>{fee.type}</div>
                  <div className="text-xs font-light" style={S.textLight}>{fee.session} &middot; {fee.note}</div>
                </div>
                <div className="text-2xl font-light" style={{ color: fee.price === 'Free' ? C.sageDark : C.charcoal }}>{fee.price}</div>
              </div>
            ))}
          </div>

          {/* Confidentiality notice */}
          <div className="mt-10 p-6 rounded-2xl text-center"
            style={{ background: `linear-gradient(135deg, ${C.sage}12, ${C.lavender}12)`, border: `1px solid ${C.sage}30` }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: C.sageDark }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={S.sageDeep}>Confidentiality Notice</span>
            </div>
            <p className="text-sm font-light" style={S.textMid}>
              All sessions are strictly confidential. No information is shared with any third
              party without your explicit written consent, except in the rare circumstances
              required by law (imminent risk of serious harm). Your privacy is paramount.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.warmOff}>
        <div className="max-w-6xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={S.sageDeep}>Client Words</p>
          <h2 className="text-4xl font-light" style={{ color: C.charcoal }}>Experiences</h2>
          <p className="mt-3 text-sm font-light" style={S.textLight}>First names only, by request. All reviews are from verified clients.</p>
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
            <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={S.sageDeep}>Questions</p>
            <h2 className="text-4xl font-light" style={{ color: C.charcoal }}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT — Message-first (no BookingWidget)
          ═══════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16" style={S.warmOff}>
        <div className="max-w-2xl mx-auto text-center reveal-up">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={S.sageDeep}>Get In Touch</p>
          <h2 className="text-4xl font-light mb-6" style={{ color: C.charcoal }}>Begin Your Journey</h2>
          <p className="text-base font-light leading-relaxed mb-10" style={S.textMid}>
            Taking the first step is often the hardest. Send me a message and I will
            respond personally within 24 hours to arrange a free introductory call.
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:contact@drclararsh.com" className="w-full py-4 rounded-full font-medium text-white transition-all duration-400"
              style={{ backgroundColor: C.sageDark }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.sageDeep; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.sageDark; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
              Send a Message
            </a>
            <div className="flex gap-4">
              <a href="tel:+442079463300" className="flex-1 py-3.5 rounded-full text-sm font-light transition-all duration-300"
                style={{ border: `1px solid ${C.warmMid}`, color: C.textMid }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.sage }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.warmMid }}>
                +44 20 7946 3300
              </a>
              <a href="#" className="flex-1 py-3.5 rounded-full text-sm font-light transition-all duration-300 text-center"
                style={{ border: `1px solid ${C.warmMid}`, color: C.textMid }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.lavender }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.warmMid }}>
                Book Free Call
              </a>
            </div>
            <p className="text-xs font-light mt-2" style={S.textLight}>
              22 Bedford Row, London WC1R 4JS &middot; Online sessions available UK-wide
            </p>
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079463300" message="Hello, I'd like to enquire about therapy" vertical="mindos" />

      <style>{`
        @keyframes mind-breathe {
          0%, 100% { transform: scale(1.0); }
          50% { transform: scale(1.008); }
        }
        .mind-hero-breathe { animation: mind-breathe 7s ease-in-out infinite; transform-origin: center; }
      `}</style>
    </div>
  )
}

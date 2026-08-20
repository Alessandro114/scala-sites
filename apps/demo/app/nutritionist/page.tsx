'use client'
import Image from 'next/image';

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
  avocado: '#6b8e23',
  avocadoLight: '#8aad3c',
  avocadoDark: '#4e6a18',
  berry: '#8b5cf6',
  berryLight: '#a78bfa',
  berryDark: '#6d28d9',
  citrus: '#f97316',
  citrusLight: '#fb923c',
  white: '#ffffff',
  offWhite: '#fafaf8',
  warmGrey: '#f5f4f0',
  midGrey: '#e8e5de',
  textDark: '#1a1a14',
  textMid: '#4a4a38',
  textLight: '#8a8a72',
} as const

const S = {
  page: { backgroundColor: C.white, color: C.textDark } as React.CSSProperties,
  offWhite: { backgroundColor: C.offWhite } as React.CSSProperties,
  warmGrey: { backgroundColor: C.warmGrey } as React.CSSProperties,
  avocado: { color: C.avocado } as React.CSSProperties,
  berry: { color: C.berry } as React.CSSProperties,
  citrus: { color: C.citrus } as React.CSSProperties,
  textMid: { color: C.textMid } as React.CSSProperties,
  textLight: { color: C.textLight } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Nourish by Lena',
  description: 'Registered Nutritionist — Weight, Sports & Gut Health',
  url: 'https://nourishbylena.example.com',
  locale: 'en',
  vertical: 'nutritiosos',
  theme: 'fresh',
  branding: { primaryColor: C.avocado, accentColor: C.berry },
  contact: {
    phone: '+44 20 7946 4100',
    email: 'hello@nourishbylena.com',
    whatsapp: '+442079464100',
    address: '8 King Street, Covent Garden, London WC2E 8JD',
    coordinates: { lat: 51.5118, lng: -0.1239 },
  },
  social: {
    instagram: 'nourishbylena',
    facebook: 'https://facebook.com/nourishbylena',
  },
  seo: {
    title: 'Nourish by Lena | Registered Nutritionist London',
    description: 'Expert nutrition for weight management, sports performance, gut health and plant-based diets.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const heroCircles = [
  { label: 'Avocado', color: C.avocado, colorLight: '#9db850', size: 140, x: '10%', y: '20%', delay: '0s' },
  { label: 'Berry', color: C.berry, colorLight: '#b89dfa', size: 90, x: '70%', y: '10%', delay: '0.6s' },
  { label: 'Citrus', color: C.citrus, colorLight: '#fba96c', size: 110, x: '80%', y: '55%', delay: '1.2s' },
  { label: 'Green', color: C.avocadoLight, colorLight: '#aacf5c', size: 60, x: '5%', y: '65%', delay: '1.8s' },
  { label: 'Purple', color: C.berryLight, colorLight: '#c4b0fc', size: 75, x: '55%', y: '75%', delay: '0.3s' },
]

const programs = [
  {
    title: 'Weight Management',
    desc: 'Science-based, sustainable fat loss without restriction. We work with your biology — not against it. No crash diets, no quick fixes.',
    badge: 'Most Popular',
    color: C.avocado,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
  },
  {
    title: 'Sports Nutrition',
    desc: 'Fuel performance and recovery. Periodised nutrition planning for endurance athletes, strength sports, and team sports.',
    badge: null,
    color: C.citrus,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
  },
  {
    title: 'Gut Health',
    desc: 'IBS, bloating, food intolerances, and the gut-brain connection. Restore your microbiome with a structured, evidence-based elimination and reintroduction protocol.',
    badge: null,
    color: C.berry,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
  },
  {
    title: 'Plant-Based Transition',
    desc: 'Transition to a balanced plant-based or vegan diet without nutritional gaps. Protein, B12, iron, omega-3 — we cover it all.',
    badge: null,
    color: C.avocadoLight,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop',
  },
  {
    title: 'Prenatal Nutrition',
    desc: 'Optimal nutrition before, during, and after pregnancy. Reducing nausea, managing gestational diabetes, and supporting postpartum recovery.',
    badge: null,
    color: C.berryLight,
    image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=600&h=400&fit=crop',
  },
]

const processSteps = [
  { step: '01', title: 'Assessment', desc: 'A 60-minute deep dive into your health history, goals, current eating patterns, lifestyle, and any medical conditions.' },
  { step: '02', title: 'Your Plan', desc: 'A fully personalised nutrition plan — not a generic diet sheet. Macro targets, meal timing, food lists, and supplement recommendations.' },
  { step: '03', title: 'Support', desc: 'Fortnightly check-ins, unlimited WhatsApp support between sessions, and real-time plan adjustments as your progress evolves.' },
  { step: '04', title: 'Results', desc: 'Measurable, lasting change. We track not just weight but energy, sleep, hormones, and biomarkers to quantify your transformation.' },
]

const sampleDay = {
  name: 'Weight Management — Sample Day',
  calories: 1850,
  protein: 135,
  carbs: 195,
  fat: 62,
  meals: [
    { time: '07:30', meal: 'Breakfast', food: 'Greek yoghurt bowl (200g), mixed berries (80g), chia seeds (15g), pumpkin seeds (10g)', cals: 340, protein: 28 },
    { time: '10:30', meal: 'Morning Snack', food: 'Apple + 25g almond butter', cals: 185, protein: 5 },
    { time: '13:00', meal: 'Lunch', food: 'Large salad: 150g chicken breast, roasted veg, quinoa (80g cooked), olive oil dressing', cals: 490, protein: 48 },
    { time: '16:00', meal: 'Afternoon Snack', food: 'Protein shake (25g whey) + rice cakes (2)', cals: 210, protein: 28 },
    { time: '19:00', meal: 'Dinner', food: 'Salmon fillet (180g), roasted sweet potato (150g), steamed broccoli (200g)', cals: 540, protein: 44 },
    { time: '21:00', meal: 'Evening', food: 'Cottage cheese (100g) + kiwi (1)', cals: 120, protein: 14 },
  ],
}

const successStories = [
  { name: 'R.M.', stat: '−18kg in 16 weeks', detail: 'Weight Management programme. No hunger, no restriction.' },
  { name: 'C.B.', stat: '+12% running performance', detail: 'Sports Nutrition plan for half-marathon training.' },
  { name: 'S.K.', stat: 'Bloating resolved in 6 weeks', detail: 'Gut Health protocol after years of IBS symptoms.' },
  { name: 'T.A.', stat: 'Energy +40% in 30 days', detail: 'Plant-Based Transition programme with full bloodwork review.' },
]

const fees = [
  { name: 'Initial Consultation', duration: '60 min', price: '£95', detail: 'Comprehensive health & diet assessment' },
  { name: '4-Week Starter Plan', duration: 'Ongoing support', price: '£280', detail: 'Initial + 2 follow-ups + WhatsApp access' },
  { name: '12-Week Transform', duration: 'Full programme', price: '£750', detail: 'Initial + 6 follow-ups + daily WhatsApp + bloodwork review' },
]

const reviews: Review[] = [
  { id: '1', author: 'Rachel M.', rating: 5, text: "I've tried every diet imaginable. Lena was the first nutritionist who actually looked at my blood work and figured out WHY I couldn't lose weight. 18kg down, zero hunger. Life-changing.", date: '2026-07-05', source: 'google', verified: true },
  { id: '2', author: 'Carlos B.', rating: 5, text: 'I was training hard but going nowhere. Lena built a periodised plan around my triathlon schedule. Personal best by 12% in 10 weeks. The sports science knowledge here is elite.', date: '2026-07-20', source: 'google', verified: true },
  { id: '3', author: 'Sophie K.', rating: 5, text: "Suffered with IBS for 4 years. Doctors just told me to 'manage stress'. Lena's gut health protocol identified 3 trigger foods and I've been symptom-free for 2 months.", date: '2026-08-01', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Thomas A.', rating: 5, text: 'Going plant-based seemed daunting after years of meat-heavy eating. Lena made the transition seamless and my energy levels are through the roof. Best decision I made this year.', date: '2026-07-15', source: 'google', verified: true },
  { id: '5', author: 'Maya R.', rating: 5, text: "The WhatsApp support between sessions is worth the price alone. Lena answers in minutes, tweaks my plan in real time, and genuinely cares about results. This isn't a service, it's a partnership.", date: '2026-07-28', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'What is the difference between a nutritionist and a dietitian?', answer: 'In the UK, both registered nutritionists (AFN) and registered dietitians (HCPC) are qualified professionals. Lena holds an MSc in Nutritional Science and is registered with the Association for Nutrition (AFN). Dietitians are additionally trained to work in clinical NHS settings. For most nutrition goals — weight, sport, gut health — a registered nutritionist provides equivalent expertise.' },
  { question: 'Do I need to give up foods I love?', answer: "No. Sustainable nutrition is never about deprivation. We work with your food preferences, cultural eating patterns, and lifestyle. You will never be told to never eat something again — instead you'll understand when, how much, and how to make informed choices." },
  { question: 'How quickly will I see results?', answer: 'Most clients notice changes in energy and digestion within 2–3 weeks. Body composition changes are typically visible from week 4–6. Lasting results build over 12–16 weeks. We track progress every two weeks and adjust accordingly.' },
  { question: 'Do you prescribe supplements?', answer: 'Where appropriate, yes. I make specific, evidence-based supplement recommendations — not generic multivitamins. All recommendations are tailored to your bloodwork and goals, and I only recommend products that have solid research behind them.' },
  { question: 'Is online coaching available?', answer: 'Yes. All programmes are available online via video consultation. Many clients across the UK and internationally work with me entirely online. The plan, support, and results are identical to in-person sessions.' },
  { question: 'Can you work with my medical team?', answer: 'Absolutely. I am experienced in working alongside GPs, gastroenterologists, and oncologists. With your consent, I can write to your medical team with nutritional recommendations to complement your medical care.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '09:00', available: true, spotsLeft: 2 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '11:00', available: true, spotsLeft: 3 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '13:00', available: true, spotsLeft: 1 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '15:30', available: true, spotsLeft: 4 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '17:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://nourishbylena.example.com',
  name: 'Nourish by Lena',
  description: 'Registered nutritionist in London specialising in weight management, sports nutrition, gut health and plant-based diets.',
  url: 'https://nourishbylena.example.com',
  telephone: '+44 20 7946 4100',
  email: 'hello@nourishbylena.com',
  address: { '@type': 'PostalAddress', streetAddress: '8 King Street, Covent Garden', addressLocality: 'London', postalCode: 'WC2E 8JD', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5118, longitude: -0.1239 },
  priceRange: '££',
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
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <a href="#" className="font-light text-sm tracking-wide" style={{ color: C.textDark }}>
          <span style={{ color: C.avocado, fontWeight: 600 }}>Nourish</span>
          <span style={{ color: C.textLight }}> by </span>
          <span style={{ fontWeight: 500 }}>Lena</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Programs', 'Process', 'Results', 'Fees'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm transition-colors duration-200" style={S.textLight}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.avocado)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textLight)}>
              {item}
            </a>
          ))}
          <a href="#booking" className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300"
            style={{ backgroundColor: C.avocado }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.avocadoDark; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.avocado; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function NutritionistPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Fresh & vibrant with floating circles
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ backgroundColor: C.white }}>
        {/* Floating ingredient circles */}
        {heroCircles.map((circle) => (
          <div key={circle.label}
            className="absolute rounded-full pointer-events-none nutri-float"
            style={{
              width: circle.size, height: circle.size,
              left: circle.x, top: circle.y,
              background: `radial-gradient(circle at 35% 35%, ${circle.colorLight}, ${circle.color})`,
              opacity: 0.18,
              animationDelay: circle.delay,
              filter: 'blur(1px)',
            }}
          />
        ))}

        {/* Hero image — right side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&h=1200&fit=crop"
            alt="Fresh, nutritious food"
            className="w-full h-full object-cover"
            style={{ maskImage: 'linear-gradient(to left, white 40%, transparent)', WebkitMaskImage: 'linear-gradient(to left, white 40%, transparent)' }} width={1200} height={800} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10">
          <div className="max-w-lg stagger-children">
            <div className="reveal-up flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: `${C.avocado}15`, color: C.avocado }}>AFN Registered</span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: `${C.berry}12`, color: C.berryDark }}>MSc Nutritional Science</span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: `${C.citrus}12`, color: C.citrus }}>500+ Clients</span>
            </div>

            <h1 className="font-bold leading-tight mb-6">
              <span className="reveal-clip-up block" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: C.textDark }}>Fuel Your Body.</span>
              <span className="reveal-clip-up block" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: C.avocado, animationDelay: '0.12s' }}>Transform</span>
              <span className="reveal-clip-up block" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: C.textDark, animationDelay: '0.24s' }}>Your Life.</span>
            </h1>

            <p className="reveal-up text-base md:text-lg font-light leading-relaxed mb-10" style={{ color: C.textMid, animationDelay: '0.35s' }}>
              Registered nutritionist delivering evidence-based, personalised plans
              for sustainable weight loss, peak athletic performance, gut healing,
              and optimal health. No fads. No gimmicks. Just science.
            </p>

            {/* Stats ribbon */}
            <div className="reveal-up flex flex-wrap gap-6 mb-10 p-5 rounded-2xl" style={{ backgroundColor: C.warmGrey, animationDelay: '0.45s' }}>
              {[
                { value: '−18kg', label: 'Average weight loss', color: C.avocado },
                { value: '+40%', label: 'Energy increase', color: C.citrus },
                { value: '96%', label: 'Sleep quality improved', color: C.berry },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</span>
                  <span className="text-xs font-light mt-0.5" style={S.textLight}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
              <a href="#booking" className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300"
                style={{ backgroundColor: C.avocado }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.avocadoDark; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 28px ${C.avocado}40` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.avocado; (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                Book Free Discovery Call
              </a>
              <a href="#programs" className="px-8 py-4 rounded-full font-medium transition-all duration-300"
                style={{ border: `2px solid ${C.avocado}`, color: C.avocado }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${C.avocado}10` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}>
                View Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROGRAMS
          ═══════════════════════════════════════ */}
      <section id="programs" className="py-24 md:py-32 px-6 md:px-16" style={S.offWhite}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.avocado}>What I Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.textDark }}>Nutrition Programmes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {programs.map((prog, i) => (
              <div key={prog.title} className={`reveal-up relative rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${i === 0 ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${i * 0.1}s`, minHeight: 280 }}>
                <Image src={prog.image} alt={prog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                  style={{ filter: 'brightness(0.45)' }} width={1200} height={800} />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.textDark}ee 0%, transparent 60%)` }} />
                {prog.badge && (
                  <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: prog.color }}>
                    {prog.badge}
                  </div>
                )}
                <div className="absolute inset-0 flex flex-col justify-end p-7 z-10">
                  <div className="w-8 h-1 rounded-full mb-4" style={{ backgroundColor: prog.color }} />
                  <h3 className="text-xl font-bold text-white mb-3">{prog.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-white opacity-80">{prog.desc}</p>
                  <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <span className="text-xs font-semibold" style={{ color: prog.color }}>Enquire →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — 4 steps
          ═══════════════════════════════════════ */}
      <section id="process" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.avocado}>How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.textDark }}>Your Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {processSteps.map((step, i) => (
              <div key={step.step} className="reveal-up text-center" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${[C.avocado, C.citrus, C.berry, C.avocadoLight][i]}25, ${[C.avocado, C.citrus, C.berry, C.avocadoLight][i]}10)`, color: [C.avocado, C.citrus, C.berry, C.avocadoLight][i], border: `2px solid ${[C.avocado, C.citrus, C.berry, C.avocadoLight][i]}40` }}>
                  {step.step}
                </div>
                <h3 className="font-semibold text-base mb-3" style={{ color: C.textDark }}>{step.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.textMid}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MEAL PLAN PREVIEW
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.warmGrey}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.avocado}>Sample Plan</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: C.textDark }}>{sampleDay.name}</h2>
            <p className="text-sm font-light" style={S.textLight}>Real plans. Real food. Yours will be tailored to your caloric needs and preferences.</p>
          </div>

          {/* Macro strip */}
          <div className="grid grid-cols-4 gap-4 mb-8 reveal-up">
            {[
              { label: 'Calories', value: sampleDay.calories.toString(), unit: 'kcal', color: C.avocado },
              { label: 'Protein', value: `${sampleDay.protein}g`, unit: 'daily target', color: C.berry },
              { label: 'Carbs', value: `${sampleDay.carbs}g`, unit: 'daily target', color: C.citrus },
              { label: 'Fat', value: `${sampleDay.fat}g`, unit: 'daily target', color: C.avocadoLight },
            ].map((macro) => (
              <div key={macro.label} className="text-center p-4 rounded-xl bg-white" style={{ border: `1px solid ${C.midGrey}` }}>
                <div className="text-xl font-bold" style={{ color: macro.color }}>{macro.value}</div>
                <div className="text-xs mt-1 font-medium" style={{ color: C.textDark }}>{macro.label}</div>
                <div className="text-xs mt-0.5" style={S.textLight}>{macro.unit}</div>
              </div>
            ))}
          </div>

          {/* Meal list */}
          <div className="space-y-3 stagger-children">
            {sampleDay.meals.map((meal, i) => (
              <div key={meal.meal} className="reveal-up flex gap-4 p-4 rounded-xl bg-white" style={{ animationDelay: `${i * 0.07}s`, border: `1px solid ${C.midGrey}` }}>
                <div className="text-xs font-mono font-medium w-12 flex-shrink-0 mt-0.5" style={S.textLight}>{meal.time}</div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={S.avocado}>{meal.meal}</div>
                  <div className="text-sm font-light" style={S.textMid}>{meal.food}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-semibold" style={{ color: C.textDark }}>{meal.cals} kcal</div>
                  <div className="text-xs mt-0.5" style={S.textLight}>{meal.protein}g protein</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SUCCESS STORIES
          ═══════════════════════════════════════ */}
      <section id="results" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.avocado}>Transformations</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.textDark }}>Real Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {successStories.map((story, i) => (
              <div key={story.name} className="reveal-up p-6 rounded-2xl text-center" style={{ animationDelay: `${i * 0.1}s`, background: `linear-gradient(135deg, ${[C.avocado, C.citrus, C.berry, C.avocadoLight][i]}12, ${[C.avocado, C.citrus, C.berry, C.avocadoLight][i]}06)`, border: `1px solid ${[C.avocado, C.citrus, C.berry, C.avocadoLight][i]}25` }}>
                <div className="text-3xl font-bold mb-2" style={{ color: [C.avocado, C.citrus, C.berry, C.avocadoLight][i] }}>{story.stat}</div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: C.textDark }}>{story.name}</div>
                <div className="text-sm font-light" style={S.textMid}>{story.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEES
          ═══════════════════════════════════════ */}
      <section id="fees" className="py-24 md:py-32 px-6 md:px-16" style={S.offWhite}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.avocado}>Investment</p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: C.textDark }}>Programme Fees</h2>
            <p className="text-sm font-light" style={S.textLight}>All programmes include personalised meal plans, supplement guidance, and ongoing support.</p>
          </div>
          <div className="space-y-4 stagger-children">
            {fees.map((fee, i) => (
              <div key={fee.name} className="reveal-up flex items-center justify-between p-6 rounded-2xl bg-white"
                style={{ animationDelay: `${i * 0.1}s`, border: `1px solid ${C.midGrey}` }}>
                <div>
                  <div className="font-semibold mb-1" style={{ color: C.textDark }}>{fee.name}</div>
                  <div className="text-xs" style={S.textLight}>{fee.duration} &middot; {fee.detail}</div>
                </div>
                <div className="text-2xl font-bold ml-6 flex-shrink-0" style={S.avocado}>{fee.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.avocado}>Client Stories</p>
          <h2 className="text-4xl font-bold" style={{ color: C.textDark }}>Transformations in Their Words</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={S.warmGrey}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.avocado}>Get Started</p>
            <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark }}>Book Your<br />Consultation</h2>
            <p className="text-base font-light leading-relaxed mb-8" style={S.textMid}>Start with a free 20-minute discovery call to find the right programme for you. No obligation, no pressure.</p>
            <div className="space-y-4">
              {[
                { label: 'Location', detail: '8 King Street, Covent Garden, WC2E 8JD' },
                { label: 'Online', detail: 'Video sessions available UK-wide' },
                { label: 'Hours', detail: 'Mon–Fri 8am–7pm · Sat 9am–2pm' },
                { label: 'Contact', detail: 'hello@nourishbylena.com · +44 20 7946 4100' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-1 rounded-full flex-shrink-0" style={{ background: C.avocado, minHeight: 36 }} />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={S.avocado}>{info.label}</div>
                    <div className="text-sm font-light" style={S.textMid}>{info.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 89, label: 'consultations booked this month' }} vertical="nutritiosos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={S.avocado}>FAQ</p>
            <h2 className="text-4xl font-bold" style={{ color: C.textDark }}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="NutritionOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079464100" message="Hi Lena! I'd like to book a nutrition consultation" vertical="nutritiosos" />

      <style>{`
        @keyframes nutri-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-18px) scale(1.04); }
          66% { transform: translateY(10px) scale(0.97); }
        }
        .nutri-float { animation: nutri-float 8s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

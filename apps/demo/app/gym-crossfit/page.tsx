'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { StatsHero } from '@scala-sites/core/components/stats-hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { ClassSchedule } from '@scala-sites/gymos/components/class-schedule'
import { MembershipTiers } from '@scala-sites/gymos/components/membership-tiers'
import { TrainerCard } from '@scala-sites/gymos/components/trainer-card'

const classes = [
  // Monday
  { id: '1', name: 'CrossFit Open WOD', instructor: 'Jas', time: '05:45', duration: '60 min', day: 'Monday', spotsTotal: 18, spotsTaken: 17, level: 'all' as const, category: 'CrossFit' },
  { id: '2', name: 'Barbell Club', instructor: 'Riku', time: '07:00', duration: '75 min', day: 'Monday', spotsTotal: 12, spotsTaken: 9, level: 'intermediate' as const, category: 'Strength' },
  { id: '3', name: 'CrossFit Fundamentals', instructor: 'Jas', time: '09:00', duration: '60 min', day: 'Monday', spotsTotal: 10, spotsTaken: 6, level: 'beginner' as const, category: 'CrossFit' },
  { id: '4', name: 'Metcon Mayhem', instructor: 'Taz', time: '12:15', duration: '45 min', day: 'Monday', spotsTotal: 20, spotsTaken: 20, level: 'intermediate' as const, category: 'Conditioning' },
  { id: '5', name: 'CrossFit Open WOD', instructor: 'Taz', time: '17:30', duration: '60 min', day: 'Monday', spotsTotal: 18, spotsTaken: 14, level: 'all' as const, category: 'CrossFit' },
  { id: '6', name: 'Mobility & Recovery', instructor: 'Riku', time: '19:00', duration: '45 min', day: 'Monday', spotsTotal: 16, spotsTaken: 8, level: 'all' as const, category: 'Recovery' },
  // Tuesday
  { id: '7', name: 'CrossFit Open WOD', instructor: 'Riku', time: '05:45', duration: '60 min', day: 'Tuesday', spotsTotal: 18, spotsTaken: 15, level: 'all' as const, category: 'CrossFit' },
  { id: '8', name: 'Olympic Lifting', instructor: 'Jas', time: '07:00', duration: '75 min', day: 'Tuesday', spotsTotal: 10, spotsTaken: 10, level: 'advanced' as const, category: 'Strength' },
  { id: '9', name: 'Kettlebell Power', instructor: 'Taz', time: '12:15', duration: '45 min', day: 'Tuesday', spotsTotal: 20, spotsTaken: 13, level: 'all' as const, category: 'Conditioning' },
  { id: '10', name: 'CrossFit Open WOD', instructor: 'Jas', time: '17:30', duration: '60 min', day: 'Tuesday', spotsTotal: 18, spotsTaken: 11, level: 'all' as const, category: 'CrossFit' },
  { id: '11', name: 'Gymnastics Skills', instructor: 'Riku', time: '19:00', duration: '60 min', day: 'Tuesday', spotsTotal: 12, spotsTaken: 7, level: 'intermediate' as const, category: 'Gymnastics' },
  // Wednesday
  { id: '12', name: 'CrossFit Open WOD', instructor: 'Taz', time: '05:45', duration: '60 min', day: 'Wednesday', spotsTotal: 18, spotsTaken: 16, level: 'all' as const, category: 'CrossFit' },
  { id: '13', name: 'Barbell Club', instructor: 'Jas', time: '07:00', duration: '75 min', day: 'Wednesday', spotsTotal: 12, spotsTaken: 8, level: 'intermediate' as const, category: 'Strength' },
  { id: '14', name: 'Sweat & Sled', instructor: 'Taz', time: '12:15', duration: '45 min', day: 'Wednesday', spotsTotal: 20, spotsTaken: 19, level: 'all' as const, category: 'Conditioning' },
  { id: '15', name: 'CrossFit Open WOD', instructor: 'Riku', time: '17:30', duration: '60 min', day: 'Wednesday', spotsTotal: 18, spotsTaken: 12, level: 'all' as const, category: 'CrossFit' },
  // Thursday
  { id: '16', name: 'CrossFit Open WOD', instructor: 'Jas', time: '05:45', duration: '60 min', day: 'Thursday', spotsTotal: 18, spotsTaken: 14, level: 'all' as const, category: 'CrossFit' },
  { id: '17', name: 'Olympic Lifting', instructor: 'Riku', time: '07:00', duration: '75 min', day: 'Thursday', spotsTotal: 10, spotsTaken: 9, level: 'advanced' as const, category: 'Strength' },
  { id: '18', name: 'Metcon Mayhem', instructor: 'Taz', time: '12:15', duration: '45 min', day: 'Thursday', spotsTotal: 20, spotsTaken: 18, level: 'intermediate' as const, category: 'Conditioning' },
  { id: '19', name: 'CrossFit Open WOD', instructor: 'Taz', time: '17:30', duration: '60 min', day: 'Thursday', spotsTotal: 18, spotsTaken: 10, level: 'all' as const, category: 'CrossFit' },
  { id: '20', name: 'Mobility & Recovery', instructor: 'Jas', time: '19:00', duration: '45 min', day: 'Thursday', spotsTotal: 16, spotsTaken: 5, level: 'all' as const, category: 'Recovery' },
  // Friday
  { id: '21', name: 'CrossFit Open WOD', instructor: 'Riku', time: '05:45', duration: '60 min', day: 'Friday', spotsTotal: 18, spotsTaken: 17, level: 'all' as const, category: 'CrossFit' },
  { id: '22', name: 'Friday Throwdown', instructor: 'Taz', time: '12:15', duration: '60 min', day: 'Friday', spotsTotal: 24, spotsTaken: 22, level: 'all' as const, category: 'CrossFit' },
  { id: '23', name: 'CrossFit Open WOD', instructor: 'Jas', time: '17:30', duration: '60 min', day: 'Friday', spotsTotal: 18, spotsTaken: 16, level: 'all' as const, category: 'CrossFit' },
  // Saturday
  { id: '24', name: 'Saturday Community WOD', instructor: 'All Coaches', time: '09:00', duration: '75 min', day: 'Saturday', spotsTotal: 30, spotsTaken: 25, level: 'all' as const, category: 'CrossFit' },
  { id: '25', name: 'Olympic Lifting Clinic', instructor: 'Riku', time: '11:00', duration: '90 min', day: 'Saturday', spotsTotal: 10, spotsTaken: 6, level: 'intermediate' as const, category: 'Strength' },
  // Sunday
  { id: '26', name: 'Sunday Skills & Drills', instructor: 'Jas', time: '10:00', duration: '75 min', day: 'Sunday', spotsTotal: 16, spotsTaken: 9, level: 'all' as const, category: 'Gymnastics' },
  { id: '27', name: 'Mobility Sunday', instructor: 'Riku', time: '11:30', duration: '60 min', day: 'Sunday', spotsTotal: 16, spotsTaken: 4, level: 'all' as const, category: 'Recovery' },
]

const tiers = [
  {
    id: '1',
    name: 'Drop-In',
    price: 25,
    currency: 'GBP',
    period: 'class',
    features: [
      'Single class access',
      'Access to open gym pre/post class',
      'No commitment required',
      'Ideal for visitors & travellers',
    ],
    ctaLabel: 'Book a Class',
    ctaUrl: '#schedule',
  },
  {
    id: '2',
    name: 'Affiliate Member',
    price: 115,
    currency: 'GBP',
    period: 'month',
    highlighted: true,
    features: [
      'Unlimited CrossFit classes',
      'Unlimited open gym access',
      'Barbell Club included',
      'Gymnastics & Mobility sessions',
      'App-based performance tracking',
      'Members-only nutrition channel',
      'Guest pass (1/month)',
    ],
    ctaLabel: 'Claim Your Free Week',
    ctaUrl: '#',
  },
  {
    id: '3',
    name: 'Competition Prep',
    price: 195,
    currency: 'GBP',
    period: 'month',
    features: [
      'Everything in Affiliate Member',
      '8x PT sessions/month with head coach',
      'Individualised programming',
      'Weekly video analysis',
      'Body composition tracking (InBody)',
      'Competition registration support',
      'Priority lane & equipment reservations',
      'Unlimited guest passes',
    ],
    ctaLabel: 'Apply for Comp Prep',
    ctaUrl: '#',
  },
]

const trainers = [
  {
    id: '1',
    name: 'Jaspreet "Jas" Singh',
    photo: '',
    title: 'Head Coach — CrossFit & Olympic Weightlifting',
    certifications: ['CF-L3', 'USAW-L2', 'NSCA-CSCS', 'Precision Nutrition L1'],
    specialties: ['CrossFit', 'Olympic Lifting', 'Competition Prep', 'Strength Programming'],
    bio: '12 years coaching CrossFit and weightlifting. Competed at CrossFit Regionals twice. Jas writes all programming at Iron Republic and has helped 14 athletes qualify for sanctioned events. His coaching philosophy: technique first, intensity always earnable.',
    bookingUrl: '#',
  },
  {
    id: '2',
    name: 'Riku Mäkinen',
    photo: '',
    title: 'Strength & Gymnastics Coach',
    certifications: ['CF-L2', 'BSc Sports Science', 'PICP L3', 'FRC Mobility Specialist'],
    specialties: ['Barbell Club', 'Gymnastics Skills', 'Mobility', 'Injury Prevention'],
    bio: 'Former national-level gymnast turned strength coach. Riku runs our Barbell Club and Olympic Lifting Clinic. Obsessed with efficient movement — if there\'s a faster way to get you to your first muscle-up or 200kg deadlift, he\'ll find it.',
    bookingUrl: '#',
  },
  {
    id: '3',
    name: 'Taz Okafor',
    photo: '',
    title: 'Conditioning & Metcon Specialist',
    certifications: ['CF-L2', 'ACE-CPT', 'Kettlebell L3', 'TRX Master Trainer'],
    specialties: ['Metcon', 'Kettlebell', 'AMRAP Programming', 'Sled Work', 'Fat Loss'],
    bio: 'Taz brings relentless energy and zero tolerance for excuses. Her Metcon Mayhem and Sweat & Sled classes are the most booked in the box. A former personal trainer with 8 years in functional fitness, she specialises in making conditioning brutally effective and somehow enjoyable.',
    bookingUrl: '#',
  },
]

const reviews = [
  {
    id: '1',
    author: 'Ben T.',
    rating: 5,
    text: 'Iron Republic is the real deal. I\'ve trained at boxes across London and this is the best programming I\'ve ever followed. Jas clearly thinks deeply about periodisation — I hit a 20kg snatch PR in my first 3 months. The community is tight and welcoming.',
    date: '2026-07-25',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Kerry F.',
    rating: 5,
    text: 'Joined with zero fitness background and zero CrossFit knowledge. The Fundamentals course with Jas was brilliant — thorough, patient, and fun. 6 months later I\'m RXing most WODs. Life-changing.',
    date: '2026-07-11',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Marcus D.',
    rating: 5,
    text: 'Riku\'s Barbell Club is worth the membership alone. He fixed my squat in two sessions that five years of YouTube videos couldn\'t sort. Technical coaching at this level is rare in a box setting.',
    date: '2026-06-29',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'Priya S.',
    rating: 5,
    text: 'Taz\'s Metcon Mayhem classes are absolutely savage in the best possible way. I\'ve lost 9kg in 4 months, my resting heart rate dropped 12bpm, and I\'ve never had more fun working out.',
    date: '2026-06-17',
    source: 'Google',
    verified: true,
  },
  {
    id: '5',
    author: 'Dan W.',
    rating: 5,
    text: 'The Saturday Community WOD is the highlight of my week. Everyone shows up, coaches are on the floor the whole time, and there\'s always barbecue after in summer. This is CrossFit the way it\'s supposed to be.',
    date: '2026-06-03',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'Do I need CrossFit experience to join?',
    answer: 'Not at all. Every new member starts with our Fundamentals course — 3 sessions covering all foundational movements. It\'s included free with any membership. After Fundamentals you\'ll feel confident in any class.',
  },
  {
    question: 'What\'s included in the free trial week?',
    answer: 'Unlimited classes for 7 days — CrossFit WODs, Barbell Club, Gymnastics, Metcon, and Mobility sessions. You also get full open-gym access. No card required to start.',
  },
  {
    question: 'How is Iron Republic different from a regular gym?',
    answer: 'Every session is coached, never just supervised. We cap class sizes at 18 so coaches can give real attention to every athlete. Programming is periodised annually by a CF-L3 coach, not randomly generated.',
  },
  {
    question: 'What equipment do I need to bring?',
    answer: 'Just yourself and a water bottle. We provide all barbells, ropes, rigs, boxes, kettlebells, sleds, and accessories. Wear flat-soled shoes (weightlifting shoes or Converse are ideal for lifting days).',
  },
  {
    question: 'Is there a shower and changing facility?',
    answer: 'Yes. We have separate male and female changing rooms with showers, lockers, and hair dryers. Towels are available for £1 or bring your own.',
  },
  {
    question: 'Can I train if I have an injury?',
    answer: 'Yes — our coaches are trained to scale every movement safely. Let your coach know before class and they will modify the WOD to keep you training without aggravating the injury. We also offer 1:1 rehab-focused PT sessions.',
  },
  {
    question: 'What are your opening hours?',
    answer: 'Monday-Friday: 05:30 AM – 9:00 PM. Saturday: 08:30 AM – 1:00 PM. Sunday: 09:30 AM – 12:30 PM. Open gym is available during all staffed hours.',
  },
]

const siteConfig = {
  name: 'Iron Republic CrossFit',
  tagline: 'Community. Coaching. Results. — Shoreditch, London',
  phone: '+44 20 7613 0044',
  email: 'hello@yourdomain.com',
  address: '7 Corsham Street, Shoreditch, London N1 6DR',
  social: { instagram: '#', facebook: '#' },
}

const gymJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Iron Republic CrossFit',
  description: 'Elite coaching, smart programming, and a community that shows up for you. Shoreditch, London.',
  telephone: '+44 20 7613 0044',
  email: 'hello@yourdomain.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Corsham Street, Shoreditch',
    addressLocality: 'London',
    postalCode: 'N1 6DR',
    addressCountry: 'GB',
  },
}

const gymFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need CrossFit experience to join?', acceptedAnswer: { '@type': 'Answer', text: 'Not at all. Every new member starts with our Fundamentals course — 3 sessions covering all foundational movements. It\'s included free with any membership.' } },
    { '@type': 'Question', name: 'What\'s included in the free trial week?', acceptedAnswer: { '@type': 'Answer', text: 'Unlimited classes for 7 days — CrossFit WODs, Barbell Club, Gymnastics, Metcon, and Mobility sessions. You also get full open-gym access. No card required to start.' } },
    { '@type': 'Question', name: 'How is Iron Republic different from a regular gym?', acceptedAnswer: { '@type': 'Answer', text: 'Every session is coached, never just supervised. We cap class sizes at 18 so coaches can give real attention to every athlete.' } },
    { '@type': 'Question', name: 'What equipment do I need to bring?', acceptedAnswer: { '@type': 'Answer', text: 'Just yourself and a water bottle. We provide all barbells, ropes, rigs, boxes, kettlebells, sleds, and accessories.' } },
    { '@type': 'Question', name: 'Is there a shower and changing facility?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have separate male and female changing rooms with showers, lockers, and hair dryers. Towels are available for £1 or bring your own.' } },
    { '@type': 'Question', name: 'Can I train if I have an injury?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — our coaches are trained to scale every movement safely. Let your coach know before class and they will modify the WOD accordingly.' } },
    { '@type': 'Question', name: 'What are your opening hours?', acceptedAnswer: { '@type': 'Answer', text: 'Monday-Friday: 05:30 AM – 9:00 PM. Saturday: 08:30 AM – 1:00 PM. Sunday: 09:30 AM – 12:30 PM.' } },
  ],
}

export default function GymCrossfitDemo() {
  const theme = createCustomTheme('bold', {
    primary: '#cc2200',
    primaryHover: '#b01d00',
    secondary: '#1a1a1a',
    accent: '#ff3d1f',
    background: '#0f0f0f',
    surface: '#1a1a1a',
    text: '#f5f5f5',
    textMuted: '#a1a1aa',
    border: '#2e2e2e',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gymJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gymFaqJsonLd) }} />

      {/* Hero */}
      <StatsHero
        title="NO EXCUSES. JUST REPS."
        subtitle="Iron Republic CrossFit — elite coaching, smart programming, and a community that shows up for you. Shoreditch, London."
        backgroundImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600"
        stats={[
          { value: '800+', label: 'Members' },
          { value: '4.8★', label: 'Google Rating' },
          { value: '6 yrs', label: 'Est. 2018' },
          { value: '95%', label: 'Retention Rate' },
        ]}
        ctaPrimary={{ label: 'Claim Your Free Week', href: '#pricing' }}
      />

      {/* Stats bar */}
      <div className="py-8 px-6" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '400+', label: 'Active Athletes' },
            { value: '26', label: 'Classes / Week' },
            { value: '3', label: 'CF-L2+ Coaches' },
            { value: '5 yrs', label: 'Shoreditch Proud' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-3xl font-black" style={{ color: 'var(--color-accent)' }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Class Schedule */}
      <div id="schedule" style={{ background: 'var(--color-background)' }}>
        <ClassSchedule classes={classes} />
      </div>

      {/* Membership Tiers */}
      <div id="pricing" style={{ background: 'var(--color-surface)' }}>
        <MembershipTiers tiers={tiers} locale="en" />
      </div>

      {/* Trainers */}
      <div style={{ background: 'var(--color-background)' }}>
        <TrainerCard trainers={trainers} />
      </div>

      {/* Reviews */}
      <div style={{ background: 'var(--color-surface)' }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--color-background)' }}>
        <FAQAccordion items={faqs} verticalName="GymOS — CrossFit" locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="442076130044"
        message="Hi, I'd like to claim my free trial week at Iron Republic CrossFit"
      />
    </div>
  )
}

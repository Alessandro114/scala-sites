import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { ClassSchedule } from '@scala-sites/gymos/components/class-schedule'
import { MembershipTiers } from '@scala-sites/gymos/components/membership-tiers'
import { TrainerCard } from '@scala-sites/gymos/components/trainer-card'

const classes = [
  { id: '1', name: 'CrossFit WOD', instructor: 'Marco', time: '06:30', duration: '60 min', day: 'Monday', spotsTotal: 20, spotsTaken: 18, level: 'all' as const, category: 'CrossFit' },
  { id: '2', name: 'Yoga Flow', instructor: 'Sara', time: '08:00', duration: '75 min', day: 'Monday', spotsTotal: 15, spotsTaken: 10, level: 'beginner' as const, category: 'Yoga' },
  { id: '3', name: 'HIIT Blast', instructor: 'Luca', time: '12:30', duration: '45 min', day: 'Monday', spotsTotal: 25, spotsTaken: 25, level: 'intermediate' as const, category: 'Cardio' },
  { id: '4', name: 'Strength Lab', instructor: 'Marco', time: '18:00', duration: '60 min', day: 'Monday', spotsTotal: 16, spotsTaken: 14, level: 'advanced' as const, category: 'Strength' },
  { id: '5', name: 'Power Yoga', instructor: 'Sara', time: '19:30', duration: '60 min', day: 'Monday', spotsTotal: 15, spotsTaken: 8, level: 'intermediate' as const, category: 'Yoga' },
  { id: '6', name: 'CrossFit WOD', instructor: 'Luca', time: '06:30', duration: '60 min', day: 'Tuesday', spotsTotal: 20, spotsTaken: 12, level: 'all' as const, category: 'CrossFit' },
  { id: '7', name: 'Spin & Core', instructor: 'Giulia', time: '07:30', duration: '45 min', day: 'Tuesday', spotsTotal: 20, spotsTaken: 17, level: 'beginner' as const, category: 'Cardio' },
  { id: '8', name: 'Olympic Lifting', instructor: 'Marco', time: '18:00', duration: '75 min', day: 'Tuesday', spotsTotal: 10, spotsTaken: 8, level: 'advanced' as const, category: 'Strength' },
  { id: '9', name: 'Yin Yoga', instructor: 'Sara', time: '20:00', duration: '60 min', day: 'Tuesday', spotsTotal: 15, spotsTaken: 5, level: 'beginner' as const, category: 'Yoga' },
  { id: '10', name: 'CrossFit WOD', instructor: 'Marco', time: '06:30', duration: '60 min', day: 'Wednesday', spotsTotal: 20, spotsTaken: 16, level: 'all' as const, category: 'CrossFit' },
]

const tiers = [
  { id: '1', name: 'Open Gym', price: 49, currency: 'EUR', period: 'month', features: ['Unlimited open gym access', 'Locker room & showers', 'Free WiFi', 'Basic workout tracking'], ctaLabel: 'Start Free Trial', ctaUrl: '#' },
  { id: '2', name: 'Unlimited', price: 89, currency: 'EUR', period: 'month', highlighted: true, features: ['Everything in Open Gym', 'Unlimited group classes', 'Nutrition consultation (1x/quarter)', 'Priority booking', 'Guest pass (1/month)', 'Progress tracking dashboard'], ctaLabel: 'Start Free Trial', ctaUrl: '#' },
  { id: '3', name: 'Elite', price: 149, currency: 'EUR', period: 'month', features: ['Everything in Unlimited', '4x Personal Training/month', 'Custom meal plan', 'InBody scan monthly', 'Sauna & recovery area', 'Unlimited guest passes', 'Competition prep support'], ctaLabel: 'Book a Tour', ctaUrl: '#' },
]

const trainers = [
  { id: '1', name: 'Mike Barrett', photo: '', title: 'Head Coach — CrossFit & Strength', certifications: ['CF-L3', 'NSCA-CSCS', 'USAW-L2'], specialties: ['CrossFit', 'Olympic Lifting', 'Competition Prep'], bio: '10 years coaching CrossFit athletes from beginners to regional competitors. Former national weightlifting champion. Believes in smart programming over suffering.', bookingUrl: '#' },
  { id: '2', name: 'Sarah Fontaine', photo: '', title: 'Yoga & Mobility Director', certifications: ['RYT-500', 'FRC', 'Pn1'], specialties: ['Vinyasa', 'Yin', 'Mobility', 'Breathwork'], bio: 'Trained in Bali and Rishikesh. Specializes in yoga for athletes — improving recovery, flexibility, and mental focus through mindful movement.', bookingUrl: '#' },
  { id: '3', name: 'Luke Daniels', photo: '', title: 'HIIT & Conditioning Coach', certifications: ['ACE-CPT', 'Kettlebell L2', 'TRX-STC'], specialties: ['HIIT', 'Functional Training', 'Fat Loss', 'Boxing'], bio: 'Former semi-professional boxer turned fitness coach. Known for high-energy classes that are tough but fun. Specializes in body recomposition.', bookingUrl: '#' },
]

const reviews = [
  { id: '1', author: 'Alessandro P.', rating: 5, text: 'Best gym in Milan, period. Marco\'s programming is intelligent — I\'ve PR\'d my deadlift 3 times in 6 months without injuries. The community is incredible.', date: '2026-07-20', source: 'Google', verified: true },
  { id: '2', author: 'Claudia R.', rating: 5, text: 'I was terrified of CrossFit but the beginner program here is so well structured. After 3 months I can do pull-ups and I feel stronger than ever.', date: '2026-07-05', source: 'Google', verified: true },
  { id: '3', author: 'Thomas W.', rating: 5, text: 'Sara\'s yoga classes are the perfect complement to strength training. My mobility improved dramatically and my back pain is gone. Life-changing.', date: '2026-06-18', source: 'Google', verified: true },
]

const faqs = [
  { question: 'I\'ve never done CrossFit — can I start?', answer: 'Absolutely! All new members start with our Foundations program — 4 sessions where you learn every movement with personal attention. No experience needed.' },
  { question: 'What should I bring to my first class?', answer: 'Comfortable workout clothes, indoor shoes, a water bottle, and a towel. We provide everything else. First class is always free.' },
  { question: 'Can I freeze my membership?', answer: 'Yes, you can freeze for up to 30 days per year at no charge. Just let us know 48 hours in advance via WhatsApp.' },
  { question: 'Is there parking?', answer: 'Yes, free parking for 20 cars behind the gym. During peak hours (6-8 PM), street parking is usually available within 2 minutes walk.' },
  { question: 'What are your opening hours?', answer: 'Monday-Friday: 6:00 AM - 10:00 PM. Saturday: 7:00 AM - 2:00 PM. Sunday: 8:00 AM - 12:00 PM. Open gym available during all hours.' },
]

const siteConfig = {
  name: 'Forge Athletics',
  tagline: 'Strength, community, results — since 2018',
  phone: '+44 20 7555 7890',
  email: 'info@example.com',
  address: '84 Hackney Road, London E2 7QZ',
  social: { instagram: '#', facebook: '#' },
}

export const metadata = {
  title: 'Forge Athletics — CrossFit, Strength & Yoga in London',
  description: 'CrossFit, strength training, HIIT, and yoga classes. Expert coaches, real community. First class free. Book your trial today.',
}

export default function GymDemo() {
  return (
    <div style={{ '--color-primary': '#18181b', '--color-primary-hover': '#27272a', '--color-secondary': '#f4f4f5', '--color-accent': '#ef4444', '--color-bg': '#ffffff', '--color-surface': '#fafafa', '--color-text': '#18181b', '--color-text-muted': '#71717a', '--color-border': '#e4e4e7', '--color-success': '#22c55e', '--color-warning': '#f59e0b', '--color-error': '#ef4444', '--font-heading': '"Bebas Neue", "Oswald", system-ui, sans-serif', '--font-body': '"Inter", system-ui, sans-serif', '--hero-height': '90vh', '--hero-overlay': 'rgba(0,0,0,0.5)' } as React.CSSProperties}>
      <Hero
        title="TRAIN HARD. GET STRONG. HAVE FUN."
        subtitle="CrossFit, strength, HIIT & yoga — expert coaching in a community that pushes you forward"
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600"
        ctaPrimary={{ label: 'Start Your Free Trial', href: '#pricing' }}
        ctaSecondary={{ label: 'View Schedule', href: '#schedule' }}
      />
      <div id="schedule">
        <ClassSchedule classes={classes} />
      </div>
      <div id="pricing">
        <MembershipTiers tiers={tiers} locale="en-GB" />
      </div>
      <TrainerCard trainers={trainers} />
      <ReviewCarousel reviews={reviews} locale="en" />
      <FAQAccordion items={faqs} locale="en" />
      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="442075557890" message="Hi, I'd like to book a free trial class" />
    </div>
  )
}

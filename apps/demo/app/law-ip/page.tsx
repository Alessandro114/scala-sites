'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { SplitHero } from '@scala-sites/core/components/split-hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { LawyerDirectory } from '@scala-sites/legalos/components/lawyer-directory'
import { CaseEvaluator } from '@scala-sites/legalos/components/case-evaluator'
import { PracticeAreasGrid } from '@scala-sites/legalos/components/practice-areas-grid'
import type { Review, FAQItem, SiteConfig } from '@scala-sites/core/lib/types'
import type { Lawyer } from '@scala-sites/legalos/components/lawyer-directory'
import type { PracticeAreaCard } from '@scala-sites/legalos/components/practice-areas-grid'

// --- THEME ---

const greyHartTheme = createCustomTheme('minimal', {
  primary: '#1b3a4b',
  primaryHover: '#122633',
  secondary: '#f0ece6',
  accent: '#b8a070',
  background: '#f8f6f3',
  surface: '#ffffff',
  text: '#1b3a4b',
  textMuted: '#6b7c85',
  border: '#ddd8cf',
})

// --- DATA ---

const siteConfig: SiteConfig = {
  name: 'Grey & Hart LLP',
  description: 'Intellectual Property Law — 4 Gray\'s Inn Square, Holborn, London WC1R 5AH',
  url: 'https://greyandhart.example.com',
  locale: 'en',
  vertical: 'legalos',
  theme: 'minimal',
  branding: {
    primaryColor: '#1b3a4b',
    accentColor: '#b8a070',
  },
  contact: {
    phone: '+44 20 7405 8800',
    email: 'enquiries@greyandhart.example.com',
    whatsapp: '+442074058800',
    address: '4 Gray\'s Inn Square, Holborn, London WC1R 5AH',
    coordinates: { lat: 51.5193, lng: -0.1127 },
  },
  social: {
    facebook: 'grey-hart-llp',
  },
  seo: {
    title: 'Grey & Hart LLP | Intellectual Property Law, London',
    description:
      'Specialist IP law firm in Holborn. Advice on patents, trade marks, copyright, licensing, and IP litigation for innovators, brands, and creative businesses.',
  },
}

const lawyers: Lawyer[] = [
  {
    id: '1',
    name: 'Eleanor Grey',
    title: 'Partner',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=top',
    practiceAreas: ['Intellectual Property', 'Corporate & M&A'],
    yearsOfExperience: 26,
    notableCasesCount: 220,
    education: [
      'MEng Electrical Engineering, Imperial College London, 1999',
      'Graduate Diploma in Law, City Law School, 2001',
      'LPC (Distinction), BPP Law School, 2002',
    ],
    barAdmissions: [
      'England & Wales (Solicitor, 2004)',
      'European Patent Attorney (EQE, 2007)',
    ],
    bio: 'Eleanor is one of the UK\'s foremost patent attorneys with dual qualifications as a solicitor and European Patent Attorney. She advises blue-chip technology companies, academic spinouts, and deep-tech start-ups on patent strategy, prosecution before the EPO and UKIPO, and patent litigation in the UK Intellectual Property Enterprise Court and High Court. She has filed over 500 patent applications across 40 jurisdictions and is consistently listed in Chambers UK and Legal 500 as a leading individual.',
  },
  {
    id: '2',
    name: 'James Hart',
    title: 'Partner',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=top',
    practiceAreas: ['Intellectual Property', 'Commercial Litigation'],
    yearsOfExperience: 21,
    notableCasesCount: 180,
    education: [
      'LLB (First Class Hons), University College London, 2002',
      'Bar Professional Training Course, Lincoln\'s Inn, 2003',
    ],
    barAdmissions: [
      'England & Wales (Barrister, 2003)',
      'EUIPO Representative (2008)',
    ],
    bio: 'James is a specialist in trade mark law, brand protection, and passing-off litigation. He has built and defended trade mark portfolios for globally recognised consumer brands, fashion houses, and luxury goods companies, and has conducted trade mark disputes before the UKIPO, EUIPO, and the High Court. He is particularly experienced in cross-border enforcement and anti-counterfeiting strategy across the EU, US, and Asia-Pacific markets.',
  },
  {
    id: '3',
    name: 'Dr. Priya Sharma',
    title: 'Of Counsel',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=top',
    practiceAreas: ['Intellectual Property', 'Corporate & M&A'],
    yearsOfExperience: 14,
    notableCasesCount: 130,
    education: [
      'PhD Intellectual Property Law, University of Oxford, 2010',
      'LLB (First Class Hons), University of Warwick, 2005',
      'LPC (Distinction), Oxford Institute of Legal Practice, 2011',
    ],
    barAdmissions: [
      'England & Wales (Solicitor, 2013)',
    ],
    bio: 'Priya is our copyright and licensing specialist, advising media companies, publishers, music industry clients, software developers, and creative agencies on copyright ownership, infringement, collecting society relationships, and complex licensing arrangements. Her academic background at Oxford gives her an exceptional command of IP doctrine, which she applies with commercial pragmatism in high-value disputes and transactional work. She is a published author on AI and copyright.',
  },
  {
    id: '4',
    name: 'Thomas Okafor',
    title: 'Associate',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=top',
    practiceAreas: ['Intellectual Property', 'Corporate & M&A'],
    yearsOfExperience: 8,
    notableCasesCount: 75,
    education: [
      'LLB (Hons), University of Bristol, 2015',
      'LPC, BPP Law School, 2016',
    ],
    barAdmissions: [
      'England & Wales (Solicitor, 2018)',
    ],
    bio: 'Thomas focuses on IP transactional work and advises early-stage and growth-stage technology companies on IP structuring, clean-room procedures, open-source compliance, IP due diligence for M&A and investment rounds, and technology licensing. He has supported over 60 start-ups through their first institutional funding rounds and is deeply embedded in the London tech and deep-tech ecosystem.',
  },
]

const practiceAreas: PracticeAreaCard[] = [
  {
    id: '1',
    icon: '🔬',
    title: 'Patents',
    description:
      'Filing, prosecution, and enforcement of patents before the UKIPO, EPO, and internationally via the PCT system.',
    learnMoreText:
      'Our patent practice is led by Eleanor Grey, a dual-qualified solicitor and European Patent Attorney. We advise clients across technology, life sciences, engineering, and software on patent filing strategy, prosecution, opposition proceedings, freedom-to-operate analysis, and patent litigation. We have filed over 500 patent applications across 40+ jurisdictions and have extensive experience in UK High Court and Intellectual Property Enterprise Court proceedings. We work with academic institutions and spinouts, deep-tech start-ups, and established technology companies.',
    keyStat: '500+ patents filed',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '2',
    icon: '™',
    title: 'Trade Marks',
    description:
      'UK and international trade mark registration, enforcement, opposition, and anti-counterfeiting strategy for brands and businesses.',
    learnMoreText:
      'James Hart leads our trade mark practice, which covers the full lifecycle of brand protection — from clearance searches and UKIPO/EUIPO filing through to opposition, cancellation, and infringement proceedings. We have extensive experience in cross-border portfolio management across the EU, US, and Asia-Pacific, and in counterfeiting enforcement through customs recordal, online platform takedowns, and civil litigation. We act for FMCG brands, fashion houses, luxury goods companies, and digital businesses.',
    keyStat: '1,200+ marks registered',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '3',
    icon: '©',
    title: 'Copyright',
    description:
      'Copyright ownership, infringement claims, licensing, and digital rights management for creative businesses and rights holders.',
    learnMoreText:
      'Priya Sharma leads our copyright practice, advising publishers, music industry clients, software companies, broadcasters, and digital platforms on the full range of copyright issues: subsistence and ownership disputes, infringement claims, fair dealing, database rights, moral rights, and AI-generated content (a rapidly evolving area in which Priya has published academic work). We also advise collecting societies and rights holders on collective licensing arrangements and international reciprocal agreements.',
    keyStat: '30+ jurisdictions',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '4',
    icon: '📋',
    title: 'Licensing',
    description:
      'IP licensing, technology transfer, and franchise agreements — structuring revenue streams and protecting assets through commercial arrangements.',
    learnMoreText:
      'We draft and negotiate IP licensing agreements ranging from simple royalty licences to complex multi-territory technology transfer arrangements. Our team has particular expertise in software licensing (including SaaS agreements and open-source compliance), patent licensing programmes, brand licensing, and university technology transfer. We advise both licensors and licensees and understand how to structure arrangements that are commercially sound, enforceable, and tax-efficient.',
    keyStat: '200+ licences drafted',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '5',
    icon: '⚖',
    title: 'IP Litigation',
    description:
      'Patent, trade mark, and copyright disputes in the UK courts and before the UKIPO, EUIPO, and international arbitration tribunals.',
    learnMoreText:
      'Grey & Hart has conducted IP disputes at all levels of the English courts, including the UK Supreme Court. We represent both claimants and defendants in patent infringement proceedings, trade mark cancellation actions, copyright claims, and passing-off cases. We also have extensive experience in interim injunctions, search orders, and freezing injunctions. Our litigation team works closely with leading counsel and expert witnesses, and we have a track record in landmark cases that have shaped UK IP law.',
    keyStat: '95% success rate',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '6',
    icon: '🚀',
    title: 'IP for Start-Ups',
    description:
      'Practical, cost-effective IP advice for founders — from first filings and clean-room procedures to due diligence for investment rounds.',
    learnMoreText:
      'We offer a dedicated start-up advisory service led by Thomas Okafor, providing practical and cost-effective IP counsel to early-stage companies. Services include IP audit and strategy, first patent and trade mark filings, open-source compliance reviews, IP due diligence for Series A/B rounds, and IP structuring to maximise investor attractiveness. We have supported over 60 start-ups through institutional fundraising rounds and can work within tight budgets without compromising quality.',
    keyStat: '60+ start-ups supported',
    lawyerAnchor: '#lawyers',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Dr. Ananya K., CTO',
    rating: 5,
    text: 'Eleanor filed our core patent portfolio across the US, EU, and Japan with extraordinary speed and precision. Her technical grasp of our deep-learning architecture meant we never had to dumb it down. The prosecution strategy she set has been vindicated by two granted patents so far.',
    date: '2026-07-25',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Richard F., Brand Director',
    rating: 5,
    text: 'James Hart won our trade mark opposition against a well-funded competitor in under four months. His strategic clarity, preparation, and advocacy were exceptional. The brand is now fully protected across 28 markets. Highly recommended.',
    date: '2026-07-10',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Nadia V., Publishing Director',
    rating: 5,
    text: 'Priya\'s advice on our AI-generated content licensing strategy was the most intellectually rigorous legal counsel I have received in 20 years of publishing. She translated a genuinely complex area into clear commercial decisions. Exceptional.',
    date: '2026-06-28',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Seun O., Founder',
    rating: 5,
    text: 'Thomas helped us structure our IP ahead of our Series A and the due diligence process was smooth as a result. Investors specifically commented on the quality of our IP position. Grey & Hart are now our go-to firm for everything IP.',
    date: '2026-06-12',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'What is included in a Free IP Assessment?',
    answer:
      'Our Free IP Assessment is a 30-minute confidential consultation — by phone or video — with one of our IP solicitors or attorneys. We will review the nature of your IP, assess potential registrability or risks, and outline the most appropriate protection strategy. There is no obligation to instruct us. The assessment is completely without charge.',
  },
  {
    question: 'How long does a patent application take?',
    answer:
      'A UK national patent application typically takes 3–5 years from filing to grant (though provisional protection applies from the filing date). An EP application via the EPO takes a similar timeframe. PCT applications preserve your rights internationally for up to 30 months from the priority date, giving you time to decide which national phases to enter. We will advise on the fastest and most cost-effective route for your specific situation.',
  },
  {
    question: 'Can you file trade marks internationally?',
    answer:
      'Yes. We handle UK (UKIPO), EU (EUIPO), and international trade mark filings via the Madrid System, which allows a single application to cover up to 130+ countries. We will advise on which territories are strategically important for your business and where counterfeiting risk is highest, to ensure your budget is used where it matters most.',
  },
  {
    question: 'Do you advise on AI-generated content and ownership?',
    answer:
      'Yes — this is a rapidly evolving area and one in which Priya Sharma has published academic work. We advise technology companies, publishers, and creative businesses on copyright subsistence in AI-generated outputs, ownership structures for training data and model outputs, and licensing strategies that reflect the current UK and EU legal position while protecting against future risk.',
  },
  {
    question: 'What does IP due diligence for a funding round involve?',
    answer:
      'IP due diligence for an investment round involves auditing your IP assets (what you own, what is registered, what is at risk), identifying any third-party IP embedded in your product or content, reviewing your employment and contractor agreements for IP assignment clauses, and producing a clean, investor-ready IP schedule. Thomas Okafor leads this work and has supported over 60 companies through the process.',
  },
]

const caseTypes = [
  'Patent Filing & Prosecution',
  'Trade Mark Registration',
  'Copyright Dispute or Advice',
  'IP Licensing or Transfer',
  'IP Litigation',
  'IP Due Diligence for Investment',
  'IP Audit & Strategy',
  'AI / Software IP',
  'Anti-Counterfeiting',
  'Other',
]

// --- NAVBAR ---

function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'rgba(248,246,243,0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #ddd8cf',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#" style={{ display: 'flex', flexDirection: 'column', gap: '1px', textDecoration: 'none' }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: '1.05rem',
              color: '#1b3a4b',
              letterSpacing: '-0.01em',
              fontFamily: '"Georgia", "Times New Roman", serif',
            }}
          >
            Grey &amp; Hart
          </span>
          <span
            style={{
              fontSize: '0.62rem',
              color: '#b8a070',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            LLP &middot; Intellectual Property &middot; London
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {[
            { label: 'Practice Areas', href: '#practice-areas' },
            { label: 'Our Lawyers', href: '#lawyers' },
            { label: 'Reviews', href: '#reviews' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: '0.85rem', textDecoration: 'none', color: '#6b7c85', fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#case-evaluator"
            style={{
              padding: '9px 22px',
              background: '#1b3a4b',
              color: '#b8a070',
              border: '1px solid #b8a070',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Free IP Assessment
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- TRUST STATS BAR ---

function TrustBar() {
  const stats = [
    { value: 'Est. 2001', label: '25 Years of Practice' },
    { value: '500+', label: 'Patents Filed' },
    { value: '1,200+', label: 'Marks Registered' },
    { value: '40+', label: 'Jurisdictions Served' },
  ]
  return (
    <div style={{ background: '#1b3a4b', padding: '24px 24px' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '64px',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        {stats.map(({ value, label }) => (
          <div key={value}>
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#b8a070',
                fontFamily: '"Georgia", "Times New Roman", serif',
                letterSpacing: '-0.01em',
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: '0.68rem',
                color: 'rgba(184,160,112,0.55)',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                marginTop: '3px',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- PAGE ---

const greyHartJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Grey & Hart LLP',
  description: 'Specialist IP law firm in Holborn. Advice on patents, trade marks, copyright, licensing, and IP litigation for innovators, brands, and creative businesses.',
  url: 'https://greyandhart.example.com',
  telephone: '+44 20 7405 8800',
  email: 'enquiries@greyandhart.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4 Gray\'s Inn Square, Holborn',
    addressLocality: 'London',
    postalCode: 'WC1R 5AH',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5193,
    longitude: -0.1127,
  },
  sameAs: ['https://facebook.com/grey-hart-llp'],
}

const greyHartFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: [
    { '@type': 'Question', name: 'What is included in a Free IP Assessment?', acceptedAnswer: { '@type': 'Answer', text: 'Our Free IP Assessment is a 30-minute confidential consultation — by phone or video — with one of our IP solicitors or attorneys. We will review your IP and outline the most appropriate protection strategy. There is no obligation to instruct us.' } },
    { '@type': 'Question', name: 'How long does a patent application take?', acceptedAnswer: { '@type': 'Answer', text: 'A UK national patent application typically takes 3–5 years from filing to grant, though provisional protection applies from the filing date. An EP application via the EPO takes a similar timeframe.' } },
    { '@type': 'Question', name: 'Can you file trade marks internationally?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We handle UK (UKIPO), EU (EUIPO), and international trade mark filings via the Madrid System, which allows a single application to cover up to 130+ countries.' } },
    { '@type': 'Question', name: 'Do you advise on AI-generated content and ownership?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is a rapidly evolving area and one in which Priya Sharma has published academic work. We advise technology companies, publishers, and creative businesses on copyright subsistence in AI-generated outputs.' } },
    { '@type': 'Question', name: 'What does IP due diligence for a funding round involve?', acceptedAnswer: { '@type': 'Answer', text: 'IP due diligence involves auditing your IP assets, identifying any third-party IP embedded in your product, reviewing employment and contractor agreements for IP assignment clauses, and producing an investor-ready IP schedule.' } },
  ],
}

export default function LawIPDemoPage() {
  return (
    <div style={themeToStyleObject(greyHartTheme) as React.CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(greyHartJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(greyHartFaqJsonLd) }} />
      <Navbar />

      <SplitHero
        title="The IP Firm for Innovators and Brands."
        subtitle="Grey & Hart LLP — specialist intellectual property counsel in Holborn since 2001. Patents, trade marks, copyright, and licensing for the businesses that build tomorrow."
        imageSrc="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=1200&h=1400&fit=crop"
        imageAlt="Grey & Hart LLP — intellectual property law, Holborn"
        ctaPrimary={{ label: 'Free IP Assessment', href: '#case-evaluator' }}
        ctaSecondary={{ label: 'Our Practice Areas', href: '#practice-areas' }}
        reversed={true}
        accentColor="#b8a070"
      />

      <TrustBar />

      <div id="practice-areas">
        <PracticeAreasGrid
          areas={practiceAreas}
          title="Practice Areas"
          subtitle="Full-spectrum IP protection for inventors, innovators, and brand owners"
        />
      </div>

      <div id="lawyers">
        <LawyerDirectory
          lawyers={lawyers}
          title="Our Lawyers"
          subtitle="Specialists recognised by Chambers UK, Legal 500, and the IAM Patent 1000"
          onSchedule={() => {
            const el = document.getElementById('case-evaluator')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>

      <div id="reviews">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      <FAQAccordion items={faqs} verticalName="LegalOS — IP" locale="en" />

      <div id="case-evaluator">
        <CaseEvaluator
          caseTypes={caseTypes}
          title="Free IP Assessment"
          subtitle="Tell us about your IP — we will review it and respond within one working day"
          onSubmit={async (data) => {
            console.log('IP assessment submission:', data)
            await new Promise((resolve) => setTimeout(resolve, 1200))
          }}
        />
      </div>

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442074058800"
        message="Good day — I would like to arrange a free IP assessment with Grey & Hart LLP."
        vertical="legalos"
      />
    </div>
  )
}

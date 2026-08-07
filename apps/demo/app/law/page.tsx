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

const sterlingTheme = createCustomTheme('minimal', {
  primary: '#1a1a3e',
  primaryHover: '#0f0f28',
  secondary: '#f3f1ec',
  accent: '#c9a84c',
  background: '#faf8f5',
  surface: '#ffffff',
  text: '#1a1a3e',
  textMuted: '#6b6b8a',
  border: '#e0dbd0',
})

// --- DATA ---

const siteConfig: SiteConfig = {
  name: 'Chambers & Sterling LLP',
  description: 'Distinguished legal counsel — 1 Temple Avenue, London EC4Y 0HA',
  url: 'https://chambersandsterling.example.com',
  locale: 'en',
  vertical: 'legalos',
  theme: 'minimal',
  branding: {
    primaryColor: '#1a1a3e',
    accentColor: '#c9a84c',
  },
  contact: {
    phone: '+44 20 7353 4400',
    email: 'enquiries@chambersandsterling.com',
    whatsapp: '+442073534400',
    address: '1 Temple Avenue, London EC4Y 0HA',
    coordinates: { lat: 51.5117, lng: -0.1093 },
  },
  social: {
    facebook: 'chambers-sterling-llp',
  },
  seo: {
    title: 'Chambers & Sterling LLP | Solicitors — London EC4Y',
    description:
      'Distinguished full-service law firm at 1 Temple Avenue, London. Corporate, Litigation, Real Estate, Employment, IP and Private Client counsel.',
  },
}

const lawyers: Lawyer[] = [
  {
    id: '1',
    name: 'Victoria Ashworth',
    title: 'Partner',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=top',
    practiceAreas: ['Corporate & M&A', 'Private Client'],
    yearsOfExperience: 24,
    notableCasesCount: 180,
    education: [
      'LLB (First Class Hons), University of Cambridge, 2000',
      'LLM in Corporate Law, London School of Economics, 2002',
    ],
    barAdmissions: [
      'England & Wales (Solicitor, 2002)',
      'Cayman Islands Bar (2010)',
    ],
    bio: 'Victoria heads the Corporate and Private Client practices at Chambers & Sterling, advising FTSE 100 boards, family offices, and ultra-high-net-worth individuals on complex cross-border transactions, trust structures, and succession planning. She has led deals exceeding £6 billion in aggregate value and is recognised as a leading practitioner by Chambers UK and Legal 500.',
  },
  {
    id: '2',
    name: 'Oliver Pemberton',
    title: 'Partner',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=top',
    practiceAreas: ['Commercial Litigation', 'Employment'],
    yearsOfExperience: 20,
    notableCasesCount: 140,
    education: [
      'BA (Hons) Law with French Law, University of Bristol, 2002',
      'Bar Professional Training Course (Very Competent), Gray\'s Inn, 2004',
    ],
    barAdmissions: [
      'England & Wales (Barrister, 2004)',
      'Republic of Ireland Bar (2012)',
    ],
    bio: 'Oliver is one of the firm\'s foremost litigators with an outstanding record before the Commercial Court, Court of Appeal and in international arbitration. He has represented sovereign states, global banks, and listed companies in some of the most complex disputes of the past decade, and regularly appears before the Supreme Court on points of commercial law.',
  },
  {
    id: '3',
    name: 'Imogen Cavendish',
    title: 'Of Counsel',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=top',
    practiceAreas: ['Real Estate', 'Corporate & M&A'],
    yearsOfExperience: 18,
    notableCasesCount: 120,
    education: [
      'LLB (Hons), King\'s College London, 2005',
      'Legal Practice Course (Distinction), College of Law, 2006',
    ],
    barAdmissions: [
      'England & Wales (Solicitor, 2008)',
    ],
    bio: 'Imogen advises institutional landlords, sovereign wealth funds, and listed property companies on landmark commercial real estate acquisitions, disposals, and development finance. Her portfolio includes some of the most high-profile central London transactions of the last five years, with a total deal value exceeding £2.4 billion.',
  },
  {
    id: '4',
    name: 'Nathaniel Osei-Bonsu',
    title: 'Associate',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=top',
    practiceAreas: ['Intellectual Property', 'Corporate & M&A'],
    yearsOfExperience: 7,
    notableCasesCount: 55,
    education: [
      'LLB (Hons), University of Exeter, 2016',
      'Legal Practice Course (Commendation), BPP Law School, 2017',
    ],
    barAdmissions: [
      'England & Wales (Solicitor, 2019)',
    ],
    bio: 'Nathaniel specialises in intellectual property law and venture capital transactions, advising technology companies, creative studios, and early-stage founders on trade marks, copyright, licensing, and IP structuring ahead of investment rounds. He has secured trade mark portfolios across 30+ jurisdictions and supported over 40 startup financing rounds.',
  },
]

const practiceAreas: PracticeAreaCard[] = [
  {
    id: '1',
    icon: '🏛',
    title: 'Corporate & M&A',
    description:
      'Strategic counsel across the full transaction lifecycle — from initial structuring through due diligence, execution and post-completion integration.',
    learnMoreText:
      'Our corporate practice advises FTSE-listed companies, private equity sponsors, and family-owned enterprises on mergers and acquisitions, joint ventures, management buyouts, and corporate restructurings. We are particularly recognised for our cross-border expertise, having advised on transactions spanning 40+ jurisdictions. Recent mandates include a £890M secondary buyout for a PE-backed healthcare group and the cross-border merger of two European fintech platforms.',
    keyStat: '£6B+ deal value',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '2',
    icon: '⚖',
    title: 'Commercial Litigation',
    description:
      'Resolving high-stakes commercial disputes through strategic advocacy before the English courts and major international arbitration tribunals.',
    learnMoreText:
      'We represent clients in the Commercial Court, Court of Appeal, and UK Supreme Court, and in ICC, LCIA and UNCITRAL arbitrations. Our litigation team has a consistent track record in fraud and asset recovery, breach of contract, shareholder disputes, and professional negligence claims. We also provide injunctive relief advice in time-critical situations, with a 24/7 emergency response capability for urgent matters.',
    keyStat: '200+ cases won',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '3',
    icon: '🏢',
    title: 'Real Estate',
    description:
      'Comprehensive commercial property counsel for investors, developers, and institutional landlords on the UK\'s most significant transactions.',
    learnMoreText:
      'Our real estate team handles investment acquisitions and disposals, development finance, joint ventures, and complex leasing arrangements. We act for sovereign wealth funds, REITs, and leading property developers on flagship central London and regional regeneration schemes. We have particular expertise in mixed-use development, sale-and-leaseback structures, and cross-border real estate fund establishment.',
    keyStat: '£2.4B+ transacted',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '4',
    icon: '🤝',
    title: 'Employment',
    description:
      'Expert employment law advice for employers, senior executives, and boards — from day-to-day HR matters to complex whistleblowing investigations.',
    learnMoreText:
      'We advise global corporations, financial institutions, and C-suite executives on all aspects of employment law: senior executive contracts and exits, discrimination and harassment claims, whistleblowing, team moves, TUPE transfers, and regulatory investigations. Our employment team combines deep contentious experience with practical, commercially grounded non-contentious advice, and is recommended in both Chambers UK and Legal 500.',
    keyStat: '300+ mandates',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '5',
    icon: '💡',
    title: 'Intellectual Property',
    description:
      'Protecting and monetising IP assets for innovators, brands, and creative businesses across the UK and international markets.',
    learnMoreText:
      'From trade mark prosecution and copyright enforcement to licensing negotiations and IP due diligence for M&A, our IP team provides full-spectrum protection for intellectual property assets. We have secured trade mark portfolios across 30+ jurisdictions, settled multi-jurisdictional copyright claims for global publishers, and structured IP holdings for technology businesses ahead of Series A and Series B fundraising rounds.',
    keyStat: '30+ jurisdictions',
    lawyerAnchor: '#lawyers',
  },
  {
    id: '6',
    icon: '👑',
    title: 'Private Client',
    description:
      'Discreet, expert advice for ultra-high-net-worth individuals, family offices, and foundations on wealth structuring, succession and philanthropy.',
    learnMoreText:
      'Our private client practice advises some of the wealthiest families in the UK and internationally on trust and estate planning, non-domicile status, remittance basis, philanthropic structuring, and cross-border wealth management. We work closely with our corporate and tax teams to deliver holistic advice that is both commercially sophisticated and deeply personal in its attention to our clients\' long-term goals.',
    keyStat: '£1B+ assets advised',
    lawyerAnchor: '#lawyers',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'William H.',
    rating: 5,
    text: 'Victoria and her team guided our family office through a complex trust restructuring involving four jurisdictions. Their expertise was matched only by their discretion. I would not hesitate to recommend Chambers & Sterling to anyone with a matter of real complexity.',
    date: '2026-07-18',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Sophia K.',
    rating: 5,
    text: 'Oliver Pemberton secured a result in our Commercial Court litigation that frankly exceeded our expectations. His strategic instincts, command of the courtroom, and ability to cut through complexity were extraordinary. This is a firm of the very highest calibre.',
    date: '2026-06-25',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Rupert F.',
    rating: 5,
    text: 'Imogen handled our £340M central London acquisition with absolute precision — managing a complex multi-party negotiation, planning obligations, and development finance simultaneously. Everything completed on time. Outstanding.',
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Amara N.',
    rating: 5,
    text: 'Nathaniel helped us secure our trade mark portfolio across 28 countries and structured our IP ahead of our Series B. His advice was clear, efficient, and genuinely value-additive. He has become our go-to lawyer for all IP and corporate matters.',
    date: '2026-08-04',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'What does a free initial assessment involve?',
    answer:
      'Our free initial assessment is a confidential conversation — typically 30 minutes by telephone or video call — during which one of our lawyers will listen to the nature of your matter, provide a preliminary view on the legal position, and outline the most appropriate way for us to assist. There is no obligation to instruct us. We use this session to make sure we are the right firm for your needs before any fees are discussed.',
  },
  {
    question: 'How are your fees structured?',
    answer:
      'We offer a range of fee structures depending on the nature of the matter: hourly rates, fixed fees for defined work, capped fees, and — in appropriate contentious matters — conditional fee arrangements. We provide a clear written estimate at the outset of every engagement and keep clients informed of costs throughout. Transparency in billing is a core principle of how we operate.',
  },
  {
    question: 'Is everything I tell you confidential?',
    answer:
      'Yes. From your very first contact with us, all communications are protected by legal professional privilege and our strict professional duty of confidentiality as solicitors regulated by the Solicitors Regulation Authority. We will never disclose any information about your matter to any third party without your explicit consent, except where required by law. This applies to enquiries that do not proceed to an instruction.',
  },
  {
    question: 'Do you advise international clients?',
    answer:
      'Yes — a significant proportion of our work is international in nature. Our lawyers are admitted in England & Wales, Ireland, New York, and the Cayman Islands, and we maintain close working relationships with leading law firms across the EU, the US, the Middle East, and Asia-Pacific. We are experienced in coordinating multi-jurisdictional advice and acting as lead counsel on cross-border transactions and disputes.',
  },
  {
    question: 'How quickly can you take on a new matter?',
    answer:
      'We are able to respond to new enquiries within one business day for standard matters, and within a matter of hours for urgent situations. For time-critical litigation, injunctive relief, or emergency corporate matters, we operate a 24/7 response capability. Contact our client services team directly by telephone if you have an urgent matter that cannot wait.',
  },
]

const caseTypes = [
  'Corporate & M&A',
  'Commercial Litigation',
  'Real Estate',
  'Employment',
  'Intellectual Property',
  'Private Client & Trusts',
  'Tax Advisory',
  'Arbitration',
  'Regulatory & Compliance',
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
        background: 'rgba(250,248,245,0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #e0dbd0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '70px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Wordmark */}
        <a
          href="#"
          style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', gap: '1px' }}
        >
          <span
            style={{
              fontWeight: 800,
              fontSize: '1rem',
              color: '#1a1a3e',
              letterSpacing: '-0.01em',
              fontFamily: '"Georgia", "Times New Roman", serif',
            }}
          >
            Chambers &amp; Sterling
          </span>
          <span
            style={{
              fontSize: '0.62rem',
              color: '#c9a84c',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            LLP &middot; Solicitors &middot; London
          </span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {[
            { label: 'Practice Areas', href: '#practice-areas' },
            { label: 'Our Lawyers', href: '#lawyers' },
            { label: 'Reviews', href: '#reviews' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                textDecoration: 'none',
                color: '#6b6b8a',
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#case-evaluator"
            style={{
              padding: '9px 22px',
              background: '#1a1a3e',
              color: '#c9a84c',
              border: '1px solid #c9a84c',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'opacity 0.2s',
            }}
          >
            Free Assessment
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- PAGE ---

export default function LawDemoPage() {
  return (
    <div style={themeToStyleObject(sterlingTheme) as React.CSSProperties}>
      <Navbar />

      <SplitHero
        title="The Standard of Excellence in English Law."
        subtitle="Chambers & Sterling LLP provides distinguished legal counsel to institutions, corporations and private individuals from our chambers at 1 Temple Avenue, London."
        imageSrc="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=1400&fit=crop"
        imageAlt="Chambers & Sterling LLP — Temple Avenue, London"
        ctaPrimary={{ label: 'Request Free Assessment', href: '#case-evaluator' }}
        ctaSecondary={{ label: 'Our Practice Areas', href: '#practice-areas' }}
        accentColor="#c9a84c"
      />

      {/* Credibility bar */}
      <div style={{ background: '#1a1a3e', padding: '22px 24px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '48px',
          }}
        >
          {[
            { stat: 'Est. 1974', label: 'Over 50 Years of Practice' },
            { stat: '£6B+', label: 'Transaction Value Advised' },
            { stat: '6', label: 'Core Practice Areas' },
            { stat: '40+', label: 'Jurisdictions Served' },
          ].map((item) => (
            <div key={item.stat} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#c9a84c',
                  fontFamily: '"Georgia", "Times New Roman", serif',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.stat}
              </div>
              <div
                style={{
                  fontSize: '0.68rem',
                  color: '#9898b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                  marginTop: '2px',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Areas — Grid */}
      <PracticeAreasGrid
        areas={practiceAreas}
        title="Practice Areas"
        subtitle="Comprehensive legal services for UK and international clients across all major disciplines"
      />

      {/* Lawyer Directory */}
      <LawyerDirectory
        lawyers={lawyers}
        title="Our Lawyers"
        subtitle="Distinguished counsel recognised by Chambers UK and Legal 500"
        onSchedule={() => {
          const el = document.getElementById('case-evaluator')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* Reviews */}
      <div id="reviews">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <FAQAccordion items={faqs} locale="en" />

      {/* Case Evaluator (lead capture) */}
      <CaseEvaluator
        caseTypes={caseTypes}
        title="Free Case Assessment"
        subtitle="Tell us about your matter — we'll review it and respond within 24 hours"
        onSubmit={async (data) => {
          console.log('Case evaluator submission:', data)
          await new Promise((resolve) => setTimeout(resolve, 1200))
        }}
      />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442073534400"
        message="Good day, I would like to arrange a free initial assessment with Chambers & Sterling LLP."
        vertical="legalos"
      />
    </div>
  )
}

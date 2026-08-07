import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Website Costs €6,660/Year. Ours Costs €0. | SCALA Sites',
  description:
    'We analyzed 16 categories of tools SMBs pay for — website builders, CRM, booking, live chat, WhatsApp, SEO, and more. The average SMB spends €6,660/year on a fragmented stack. SCALA Sites is free.',
  keywords: [
    'website builder cost comparison',
    'wix vs free website',
    'how much does a website cost',
    'smb website tools cost',
    'free website for business',
    'scala sites pricing',
    'website stack cost calculator',
    'hubspot alternative free',
    'wix alternative',
    'squarespace alternative',
  ],
  authors: [{ name: 'SCALA AI OS', url: 'https://get-scala.com' }],
  openGraph: {
    title: 'Your Website Costs €6,660/Year. Ours Costs €0.',
    description:
      'We analyzed 16 categories of tools SMBs pay for. The average fragmented stack costs €555/month. Here\'s what you\'re actually paying — and what you get for free with SCALA Sites.',
    url: 'https://sites.get-scala.com/pricing',
    siteName: 'SCALA Sites',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Website Costs €6,660/Year. Ours Costs €0.',
    description:
      'We analyzed 16 categories of tools SMBs pay for. Calculator inside — toggle your stack and watch the total climb.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

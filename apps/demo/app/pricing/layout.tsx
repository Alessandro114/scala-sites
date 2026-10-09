import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — from free templates to an AI operating system',
  description:
    'The 99 SCALA Sites templates are open source (MIT) and free. SCALA AI OS, the platform behind them, starts at €97/month; SOLO SARA €9.90/month; Enterprise from €2,000/month.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'SCALA Sites Pricing — from free templates to an AI operating system',
    description:
      'Open-source templates are free. SCALA AI OS: Growth €97/month, Scale €197/month, Enterprise from €2,000/month.',
    url: 'https://sites.get-scala.com/pricing',
    siteName: 'SCALA Sites',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCALA Sites Pricing — from free templates to an AI operating system',
    description: 'Open-source templates are free. SCALA AI OS from €97/month.',
  },
  robots: { index: true, follow: true },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

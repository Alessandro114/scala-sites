import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — from free templates to an AI operating system',
  description:
    'The 99 SCALA Sites templates are open source (MIT) and free. SCALA AI OS, the platform behind them: Growth €97/month, Scale €197/month; Enterprise on request. SOLO SARA, a separate WhatsApp assistant for freelancers, €9.90/month. Prices exclude VAT.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'SCALA Sites Pricing — from free templates to an AI operating system',
    description:
      'Open-source templates are free. SCALA AI OS: Growth €97/month, Scale €197/month (VAT excluded); Enterprise on request.',
    url: 'https://sites.get-scala.com/pricing',
    siteName: 'SCALA Sites',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCALA Sites Pricing — from free templates to an AI operating system',
    description: 'Open-source templates are free. SCALA AI OS: Growth €97/month, Scale €197/month, VAT excluded.',
  },
  robots: { index: true, follow: true },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

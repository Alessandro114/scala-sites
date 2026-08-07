import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bright Futures Foundation — Together We Change Lives',
  description: 'Empowering communities through education, health, and environment programs. 12,000 lives changed. Join us — donate, volunteer, or partner with us today.',
  keywords: ['nonprofit', 'charity', 'donate', 'volunteer', 'community foundation', 'education charity', 'social impact', 'fundraising'],
  openGraph: {
    title: 'Bright Futures Foundation — Together We Change Lives',
    description: 'Community programs changing 12,000+ lives through education, health, environment and community initiatives. Donate or volunteer today.',
    type: 'website',
  },
}

export default function NonprofitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

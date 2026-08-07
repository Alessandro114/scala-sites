import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ShineZone Car Wash | Professional Valeting & Detailing — From £8',
  description: 'Showroom shine every time. Express wash, full valet, premium detail and ceramic coating. Mobile service available. Subscriptions from £25/month. London & Home Counties.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

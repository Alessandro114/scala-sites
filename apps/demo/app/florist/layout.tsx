import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Petal & Stem — Florist & Wedding Flowers, London',
  description: 'Seasonal bouquets, wedding flowers and same-day delivery. Subscription boxes from £20/month. Chelsea, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

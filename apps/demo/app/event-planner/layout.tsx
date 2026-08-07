import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lumière Events — Luxury Event Planning London',
  description: 'Award-winning event planners for corporate events, weddings, private parties, galas and festivals. Creating unforgettable moments since 2010.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

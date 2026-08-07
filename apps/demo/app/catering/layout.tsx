import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Élite Catering Co. | Corporate Events, Weddings & Private Dining London',
  description: 'Award-winning catering for corporate events, weddings, and private dining. Silver from £45pp · Gold from £75pp · Platinum from £120pp. Serving London & Home Counties.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DJ NEXUS — Professional DJ for Clubs, Weddings & Events',
  description: 'Professional DJ available for clubs, weddings, corporate events and festivals in London. House, R&B, Latin and custom sets. Book your night.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

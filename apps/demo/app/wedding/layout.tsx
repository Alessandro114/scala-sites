import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ashworth Manor — Wedding Venue',
  description: 'Grade II listed wedding venue in Surrey. Ceremonies, receptions, and events.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trattoria da Marco — Authentic Italian Kitchen',
  description: 'Traditional Italian cuisine in the heart of London since 1998. Fresh pasta, wood-fired pizza, and seasonal ingredients.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

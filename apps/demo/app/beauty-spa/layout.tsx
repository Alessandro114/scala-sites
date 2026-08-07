import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serenity Spa & Wellness',
  description: 'Luxury spa treatments in Chelsea, London. Massage, facials, body treatments.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

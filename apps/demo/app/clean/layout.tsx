import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pristine — Luxury Home & Office Cleaning',
  description: 'Premium cleaning services in Knightsbridge, London. Deep clean, regular, and end-of-tenancy.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

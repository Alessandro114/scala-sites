import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FreshPress Laundry — Wash, Dry Clean & Delivery',
  description: 'Professional laundry, dry cleaning and ironing service with free collection and delivery. Eco-friendly, fast turnaround, subscription plans available.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NumbrCrunch — Accountants for Startups & Freelancers, London',
  description: 'Modern accountants for startups and freelancers in Shoreditch, London. Fixed monthly pricing from £99. MTD certified. Get a quote in 2 minutes.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

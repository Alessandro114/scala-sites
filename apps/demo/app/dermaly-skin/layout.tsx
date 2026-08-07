import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkinFirst — Accessible Skincare Clinic',
  description: 'Affordable skincare clinic in Shoreditch, London. Facials, peels, and treatment packages.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

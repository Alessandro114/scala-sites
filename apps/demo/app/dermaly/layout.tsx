import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Aesthetic Clinic — Advanced Dermatology',
  description: 'Harley Street dermatology and cosmetic medicine. Botox, fillers, laser, and skin treatments.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

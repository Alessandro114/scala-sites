import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Studio Luxe Hair — Premium Hair Salon',
  description: 'Award-winning hair salon in Notting Hill, London. Cuts, colour, treatments.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atelier One — Architecture & Interior Design',
  description: 'Award-winning architecture and interior design practice in Clerkenwell, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orbit Digital — Performance Marketing',
  description: 'Performance marketing and brand strategy agency in Soho, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

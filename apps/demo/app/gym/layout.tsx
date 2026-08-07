import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forge Athletics — Gym & Fitness',
  description: 'CrossFit, yoga, and strength training in Shoreditch, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

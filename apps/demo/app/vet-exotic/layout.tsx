import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creature Comforts — Exotic & Small Animal Specialists, London',
  description: 'Specialist veterinary care for exotic animals, reptiles, birds, and small mammals in Hampstead, London. 24/7 emergency service.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

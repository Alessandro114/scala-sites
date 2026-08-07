import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paws & Claws Pet Shop — Everything Your Pet Needs',
  description: 'Your one-stop pet shop for food, accessories, grooming, and expert advice. Dogs, cats, fish, birds, small pets and reptiles. Loyalty rewards on every purchase.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

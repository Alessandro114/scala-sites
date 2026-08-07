import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Cryptex — Escape Rooms | Can You Escape?',
  description: 'Award-winning escape rooms in London. 4 unique themed rooms — The Vault, Haunted Manor, Space Station, Prison Break. Book online for team building, birthdays & corporate events.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

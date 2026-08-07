import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Corner Store — Artisan Groceries & Deli',
  description: 'Artisan groceries, fresh deli, and local produce in Notting Hill, London. Same-day delivery and click & collect.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

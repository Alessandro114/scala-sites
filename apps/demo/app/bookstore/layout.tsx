import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chapter & Verse Bookshop — Independent Since 1985',
  description: 'Beloved independent bookshop with over 20,000 titles across all genres. Staff picks, book clubs, author events, and a cosy café. Lose yourself in a good book.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

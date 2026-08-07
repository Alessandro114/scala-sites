import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Horizons Travel Agency — Discover Your Next Adventure',
  description:
    'Expert travel consultants crafting tailor-made holidays to Bali, Santorini, Patagonia, Tokyo and beyond. Group tours, private escapes, and full travel insurance.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

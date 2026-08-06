import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trattoria da Marco | Authentic Italian Kitchen',
  description:
    'Traditional Italian cuisine in the heart of the city. Fresh pasta, wood-fired pizza, and seasonal ingredients. Book your table today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

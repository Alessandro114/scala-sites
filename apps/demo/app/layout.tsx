import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | SCALA Sites',
    default: 'SCALA Sites — Open Source Vertical Website Templates',
  },
  description:
    'Industry-optimized website templates with native booking, WhatsApp, and AI. Open source, powered by SCALA AI OS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

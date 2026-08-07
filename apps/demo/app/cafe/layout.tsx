import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workshop Coffee — Third Wave Coffee House',
  description: 'Specialty single-origin coffee, filter brews, and artisan food in a warm, welcoming space. Find your ritual here.',
  keywords: ['specialty coffee', 'third wave coffee', 'espresso', 'filter coffee', 'coffee house', 'artisan cafe'],
  openGraph: {
    title: 'Workshop Coffee — Third Wave Coffee House',
    description: 'Single-origin beans, expert brewing, and great food. Your neighbourhood third-wave coffee house.',
    type: 'website',
  },
}

export default function CafeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

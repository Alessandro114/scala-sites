import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marco Russo — Local Expert Tour Guide | Rome',
  description:
    'See Rome through local eyes. Walking history tours, food tastings, architecture walks, and private day trips. 2,000+ tours, 50,000+ happy travellers.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

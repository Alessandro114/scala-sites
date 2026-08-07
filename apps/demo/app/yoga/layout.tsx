import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stillwater Yoga Studio | Classes, Retreats & Teacher Training',
  description: 'Find stillness, build strength, and breathe deeply. Vinyasa, Hatha, Yin, Hot Yoga and Meditation classes for all levels. Book your mat today.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

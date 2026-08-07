import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rhythm Studio — Dance Classes for All Levels',
  description: 'Ballet, contemporary, hip hop, salsa and more. Professional dance classes for all ages and levels in London. Join 800+ students.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

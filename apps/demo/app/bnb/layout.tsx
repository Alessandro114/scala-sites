import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Willowbrook B&B | A Home Away From Home',
  description: 'A charming countryside bed & breakfast with farm breakfast, garden tours, and cosy rooms from £85/night. Book direct for best rates.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Camden Academy — Courses & Classes',
  description: 'Language, music, arts, and professional courses in Camden, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

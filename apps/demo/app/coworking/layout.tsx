import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Harbour Works | Premium Coworking Space — London',
  description:
    'Flexible desks, private offices, and meeting rooms in the heart of London. Hot desks from £25/day. Join a community of 400+ professionals.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

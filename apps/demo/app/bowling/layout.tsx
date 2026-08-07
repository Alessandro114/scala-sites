import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NeonStrike Bowling | Strike Your Fun',
  description: 'London\'s most exciting bowling alley. 16 lanes, laser tag, arcade, and amazing food. Kids Bowl Free before 4pm. Book a lane online now.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

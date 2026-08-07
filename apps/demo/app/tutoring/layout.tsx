import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BrightPath Tutors — Expert 1-to-1 Tutoring in London',
  description: 'Expert tutors for Maths, English, Sciences, Languages and Entrance Exams. Average +2 grade improvement. 98% parent satisfaction. Book a free assessment.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

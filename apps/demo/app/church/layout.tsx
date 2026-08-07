import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Andrew\'s Community Church — All Are Welcome',
  description: 'A warm, inclusive community church with services every Sunday at 10am and 6pm. Ministries for all ages — youth, music, outreach, small groups, children, and seniors.',
  keywords: ['church', 'community church', 'Sunday services', 'Christian community', 'worship', 'youth ministry', 'small groups', 'church near me'],
  openGraph: {
    title: "St. Andrew's Community Church — All Are Welcome",
    description: 'Welcoming church community with Sunday services at 10am and 6pm. Ministries for youth, families, seniors and everyone in between.',
    type: 'website',
  },
}

export default function ChurchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

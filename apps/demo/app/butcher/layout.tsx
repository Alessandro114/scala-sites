import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Holt's Family Butchers — Quality Cuts Since 1954",
  description: "Traditional family butchers offering premium beef, pork, lamb, poultry and game. Sunday roast packages, BBQ boxes, and handmade sausages. Ethically sourced from local farms.",
  keywords: ['butcher', 'family butchers', 'quality meat', 'local butcher', 'Sunday roast', 'BBQ box', 'handmade sausages', 'heritage breeds'],
  openGraph: {
    title: "Holt's Family Butchers — Quality Cuts Since 1954",
    description: "Three generations of traditional butchery. Premium beef, pork, lamb, game and handmade sausages. Sunday roast packages and seasonal BBQ boxes.",
    type: 'website',
  },
}

export default function ButcherLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

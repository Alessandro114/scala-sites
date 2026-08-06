'use client'

interface UpsellItem {
  title: string
  description: string
  href: string
  icon?: string
}

interface UpsellBannerProps {
  items: UpsellItem[]
}

export function UpsellBanner({ items }: UpsellBannerProps) {
  if (!items.length) return null

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition-all group"
            >
              {item.icon && <span className="text-3xl mb-3 block">{item.icon}</span>}
              <h4 className="font-semibold text-lg mb-1 group-hover:underline">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

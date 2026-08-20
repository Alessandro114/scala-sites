'use client'
import Image from 'next/image';

import { useState } from 'react'
import type { MenuCategory, Locale } from '@scala-sites/core/lib/types'
import { t } from '@scala-sites/core/lib/i18n'
import { trackMenuView } from '@scala-sites/core/lib/analytics'

interface MenuSectionProps {
  categories: MenuCategory[]
  locale?: Locale
  currency?: string
  showImages?: boolean
}

export function MenuSection({ categories, locale = 'en', currency = 'EUR', showImages = false }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '')
  const [dietaryFilter, setDietaryFilter] = useState<string | null>(null)

  const sortedCategories = [...categories].sort((a, b) => a.sortOrder - b.sortOrder)
  const activeItems = sortedCategories.find(c => c.id === activeCategory)?.items || []
  const filteredItems = dietaryFilter
    ? activeItems.filter(item => item.tags.includes(dietaryFilter))
    : activeItems

  const allTags = [...new Set(categories.flatMap(c => c.items.flatMap(i => i.tags)))]
  const dietaryTags = allTags.filter(tag =>
    ['vegan', 'vegetarian', 'gluten-free', 'spicy', 'nut-free', 'dairy-free'].includes(tag)
  )

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === 'en' ? 'en-US' : locale, {
      style: 'currency',
      currency,
    }).format(price)
  }

  return (
    <section className="py-16 px-6" id="menu">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{t('menu.title', locale)}</h2>

        {/* Category tabs */}
        <div className="flex overflow-x-auto gap-2 justify-center mb-6 pb-2">
          {sortedCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); trackMenuView('dineos') }}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dietary filters */}
        {dietaryTags.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setDietaryFilter(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                !dietaryFilter
                  ? 'bg-green-600 text-white'
                  : 'bg-green-50 text-green-800 hover:bg-green-100'
              }`}
            >
              {t('menu.filter.all', locale)}
            </button>
            {dietaryTags.map(tag => (
              <button
                key={tag}
                onClick={() => setDietaryFilter(dietaryFilter === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  dietaryFilter === tag
                    ? 'bg-green-600 text-white'
                    : 'bg-green-50 text-green-800 hover:bg-green-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Menu items */}
        <div className="space-y-1">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`flex gap-4 py-4 border-b border-gray-100 ${!item.available ? 'opacity-50' : ''}`}
            >
              {showImages && item.image && (
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy" width={1200} height={800} />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.name}
                      {item.featured && (
                        <span className="ml-2 text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                          {t('menu.featured', locale)}
                        </span>
                      )}
                      {!item.available && (
                        <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                          {t('menu.unavailable', locale)}
                        </span>
                      )}
                    </h3>
                    {item.description && (
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    )}
                    {item.tags.length > 0 && (
                      <div className="flex gap-1 mt-2">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="font-semibold text-lg whitespace-nowrap">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

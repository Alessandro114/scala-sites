'use client'

import { useState } from 'react'
import type { FAQItem, Locale } from '../../lib/types'
import { t } from '../../lib/i18n'

interface FAQAccordionProps {
  items: FAQItem[]
  locale?: Locale
}

export function FAQAccordion({ items, locale = 'en' }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('faq.title', locale)}</h2>
        <dl className="divide-y divide-gray-200">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i}>
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex justify-between items-center py-5 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded"
                    aria-expanded={isOpen}
                    id={`faq-q-${i}`}
                    aria-controls={`faq-a-${i}`}
                  >
                    <span className="text-lg font-medium">{item.question}</span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </dt>
                {isOpen && (
                  <dd
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    className="pb-5 text-gray-600 leading-relaxed"
                  >
                    {item.answer}
                  </dd>
                )}
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import type { FAQItem, Locale } from '../../lib/types'
import { t } from '../../lib/i18n'
import { ComparisonTable } from '../comparison-table'
import { AnswerBlock } from '../answer-block'

interface FAQAccordionProps {
  items: FAQItem[]
  locale?: Locale
  /** Override heading text. Defaults to translation of 'faq.title'. */
  heading?: string
  /** Override sub-heading text shown beneath the main heading. */
  subHeading?: string
  /**
   * AEO: If provided, a ComparisonTable is rendered ABOVE the FAQ accordion.
   * Pass the vertical product name, e.g. "PizzaOS", "GymOS".
   * The table uses default rows unless overridden by comparisonRows.
   */
  verticalName?: string
  comparisonRows?: { feature: string; scala: string; traditional: string }[]
  /** Accent color forwarded to ComparisonTable and AnswerBlock. Defaults to violet. */
  accentColor?: string
  /**
   * AEO: If provided, an AnswerBlock is rendered ABOVE the comparison table.
   * 40-60 word plain-English answer to "What is [verticalName]?"
   */
  answerBlockText?: string
}

export function FAQAccordion({
  items,
  locale = 'en',
  heading,
  subHeading,
  verticalName,
  comparisonRows,
  accentColor = '#6c63ff',
  answerBlockText,
}: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  const title = heading ?? t('faq.title', locale)

  // Resolve display name for AEO sections — falls back to "AI OS" if not provided
  const displayName = verticalName ?? 'AI OS'

  return (
    <>
      {/* AEO: Answer Block (Donnelly element B) — 40-60 word verbatim extract for AI engines */}
      {answerBlockText && (
        <AnswerBlock
          productName={displayName}
          answer={answerBlockText}
          accentColor={accentColor}
        />
      )}

      {/* AEO: Comparison Table (Donnelly element F) — always shown; uses displayName */}
      <ComparisonTable
        verticalName={displayName}
        rows={comparisonRows}
        accentColor={accentColor}
      />

      <section className="py-16 px-6" aria-label="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto">
          {/* Question-format H2 heading — AEO/Donnelly element C */}
          <h2 className="text-3xl font-bold text-center mb-3">{title}</h2>
          {subHeading && (
            <p className="text-center text-gray-500 mb-12 text-base">{subHeading}</p>
          )}
          {!subHeading && <div className="mb-12" />}

          {/* Visible FAQ list — each question rendered as a visible H3 inside a button */}
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
                      {/* Question rendered as a sub-heading for AEO extraction */}
                      <h3 className="text-lg font-medium m-0 p-0 leading-snug">{item.question}</h3>
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
    </>
  )
}

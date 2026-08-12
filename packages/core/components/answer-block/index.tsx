/**
 * AnswerBlock — AEO/Donnelly element
 *
 * Renders a 40-60 word direct answer to "What is [Vertical] AI?" in a format
 * that AI search engines (Perplexity, SGE, Claude, ChatGPT) can extract verbatim.
 *
 * Place this ABOVE THE FOLD, immediately after the hero section.
 * It is also used as the source text for the FAQPage "What is…?" entry.
 */

interface AnswerBlockProps {
  /** e.g. "PizzaOS" or "GymOS" */
  productName: string
  /** 40-60 word plain-English answer. No markdown. */
  answer: string
  /** Optional accent color (hex) for the left border. Defaults to violet. */
  accentColor?: string
  /** Optional background color class. Defaults to light gray. */
  bgClassName?: string
}

export function AnswerBlock({ productName, answer, accentColor = '#6c63ff', bgClassName = 'bg-gray-50' }: AnswerBlockProps) {
  return (
    <aside
      className={`${bgClassName} border-l-4 rounded-r-lg px-6 py-5 my-8 max-w-3xl mx-auto`}
      style={{ borderLeftColor: accentColor }}
      aria-label={`What is ${productName}?`}
      // itemscope / itemtype for Schema.org DefinedTerm extraction
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-2"
        style={{ color: accentColor }}
      >
        What is {productName}?
      </p>
      <p
        className="text-base leading-relaxed text-gray-800 font-normal"
        itemProp="description"
      >
        {answer}
      </p>
    </aside>
  )
}

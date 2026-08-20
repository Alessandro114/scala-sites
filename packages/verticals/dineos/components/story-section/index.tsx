'use client'
import Image from 'next/image';

interface StoryBlock {
  title: string
  text: string
  image?: string
  imagePosition?: 'left' | 'right'
}

interface StorySectionProps {
  headline: string
  blocks: StoryBlock[]
}

export function StorySection({ headline, blocks }: StorySectionProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{headline}</h2>
        <div className="space-y-20">
          {blocks.map((block, i) => {
            const imgRight = block.imagePosition === 'right' || (!block.imagePosition && i % 2 === 1)
            return (
              <div
                key={i}
                className={`flex flex-col ${imgRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                {block.image && (
                  <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <Image src={block.image}
                      alt={block.title}
                      className="w-full h-full object-cover"
                      loading="lazy" width={1200} height={800} />
                  </div>
                )}
                <div className={`w-full ${block.image ? 'md:w-1/2' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4">{block.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{block.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

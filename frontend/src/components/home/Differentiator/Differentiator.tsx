import type { CSSProperties, RefObject } from 'react'
import { brand, type DifferentiatorPillar } from '@src/config/mantis'
import { useReveal } from '@src/hooks/useReveal'

function PillarCard({ pillar, index }: { pillar: DifferentiatorPillar; index: number }) {
  const reveal = useReveal(0.12)

  return (
    <article
      ref={reveal.ref as RefObject<HTMLElement>}
      className={`differentiator__pillar${reveal.visible ? ' is-visible' : ''}`}
      style={{ '--pillar-delay': `${index * 90}ms` } as CSSProperties}
    >
      <p className="differentiator__proof">{pillar.proof}</p>
      <h3 className="differentiator__pillar-title">{pillar.title}</h3>
      <p className="differentiator__pillar-copy">{pillar.copy}</p>
    </article>
  )
}

function Differentiator() {
  const header = useReveal(0.15)

  return (
    <section className="differentiator">
      <div
        ref={header.ref as RefObject<HTMLDivElement>}
        className={`differentiator__header${header.visible ? ' is-visible' : ''}`}
      >
        <p className="section-eyebrow">Why Mantis</p>
        <h2 className="differentiator__title">{brand.differentiatorHeadline}</h2>
        <p className="differentiator__lead">{brand.differentiatorLead}</p>
      </div>

      <div className="differentiator__grid">
        {brand.differentiators.map((pillar, index) => (
          <PillarCard key={pillar.id} pillar={pillar} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Differentiator

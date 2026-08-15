import type { RefObject } from 'react'
import { brand } from '@src/config/mantis'
import { useReveal } from '@src/hooks/useReveal'

function StatementBand() {
  const belief = useReveal(0.2)
  const positioning = useReveal(0.2)

  return (
    <section className="statement-band">
      <div className="statement-band__grid">
        <div
          ref={belief.ref as RefObject<HTMLDivElement>}
          className={`statement-band__col${belief.visible ? ' is-visible' : ''}`}
        >
          <p className="section-eyebrow">Our belief</p>
          <p className="statement-band__belief">{brand.belief}</p>
        </div>
        <div
          ref={positioning.ref as RefObject<HTMLDivElement>}
          className={`statement-band__col statement-band__col--right${positioning.visible ? ' is-visible' : ''}`}
        >
          <p className="section-eyebrow">What we do</p>
          <p className="statement-band__positioning">{brand.positioning}</p>
        </div>
      </div>
    </section>
  )
}

export default StatementBand

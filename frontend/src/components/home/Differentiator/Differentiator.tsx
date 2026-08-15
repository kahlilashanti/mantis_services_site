import { brand } from '@src/config/mantis'

function Differentiator() {
  return (
    <section className="differentiator">
      <p className="section-eyebrow">Why Mantis</p>
      <h2 className="differentiator__title">Not another reel site.</h2>
      <p className="differentiator__copy">{brand.differentiator}</p>
    </section>
  )
}

export default Differentiator

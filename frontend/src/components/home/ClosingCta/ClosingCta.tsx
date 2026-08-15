import { Link } from 'react-router-dom'
import { brand } from '@src/config/mantis'

function ClosingCta() {
  return (
    <section className="closing-cta">
      <h2 className="closing-cta__title">{brand.closingLine}</h2>
      <div className="closing-cta__actions">
        <Link to="/contact" className="btn-mantis btn-mantis--primary">
          Start a project
        </Link>
        <Link to="/work" className="btn-mantis btn-mantis--ghost">
          See more work
        </Link>
      </div>
    </section>
  )
}

export default ClosingCta

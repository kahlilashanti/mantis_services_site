import { Link } from 'react-router-dom'
import { brand } from '@src/config/mantis'
import CalendlyInline from '@src/components/views/Contact/CalendlyInline'

function Contact() {
  return (
    <>
      <section className="page-hero page-hero--compact">
        <p className="section-eyebrow">Contact</p>
        <h1 className="page-title">Start a project</h1>
        <p className="page-lead">
          Book a short intro call. We&apos;ll figure out the rest.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-section__grid">
          <div>
            <h2 className="contact-section__heading">Low commitment works too.</h2>
            <p className="contact-section__copy">
              Pick a time that works. No long brief required — just bring the problem
              you&apos;re trying to solve.
            </p>
            <div className="contact-section__alt">
              <a
                href={brand.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mantis btn-mantis--primary"
              >
                Book intro call
              </a>
              <Link to="/work" className="btn-mantis btn-mantis--ghost">
                See more work
              </Link>
              <a href={`mailto:${brand.email}`} className="contact-section__email">
                {brand.email}
              </a>
            </div>
          </div>

          <CalendlyInline url={brand.calendlyUrl} />
        </div>
      </section>
    </>
  )
}

export default Contact

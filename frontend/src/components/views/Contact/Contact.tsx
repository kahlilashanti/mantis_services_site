import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Alert } from 'react-bootstrap'
import { brand } from '@src/config/mantis'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero page-hero--compact">
        <p className="section-eyebrow">Contact</p>
        <h1 className="page-title">Start a project</h1>
        <p className="page-lead">
          Tell us the problem. We&apos;ll figure out the rest.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-section__grid">
          <div>
            <h2 className="contact-section__heading">Low commitment works too.</h2>
            <p className="contact-section__copy">
              Not ready for a full brief? Book a short intro call or explore our work first.
            </p>
            <div className="contact-section__alt">
              <Link to="/work" className="btn-mantis btn-mantis--ghost">
                See more work
              </Link>
              <a href={`mailto:${brand.email}`} className="contact-section__email">
                {brand.email}
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <Alert variant="success" className="contact-alert">
                Message received. We&apos;ll be in touch. (Placeholder: wire to backend later.)
              </Alert>
            ) : (
              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control required type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="email" placeholder="you@company.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" placeholder="Your organization" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>What are you trying to solve?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    required
                    placeholder="Describe the challenge, timeline, or opportunity..."
                  />
                </Form.Group>
                <button type="submit" className="btn-mantis btn-mantis--primary">
                  Send message
                </button>
              </Form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

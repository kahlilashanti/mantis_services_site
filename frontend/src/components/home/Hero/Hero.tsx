import { Link } from 'react-router-dom'
import { brand } from '@src/config/mantis'
import HeroVideo from '@src/components/home/Hero/HeroVideo'

function HeroViewportChrome() {
  return (
    <div className="hero__viewport-bar" aria-hidden="true">
      <div className="hero__viewport-dots">
        <span />
        <span />
        <span />
      </div>
      <span className="hero__viewport-url">trymantislabs.com</span>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero hero--framed" aria-label="Showreel">
      <div className="hero__ambient" aria-hidden="true" />

      <div className="hero__shell">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__pulse" aria-hidden="true" />
            Creative Technology Studio
          </p>
          <h1 className="hero__title">
            <span className="hero__title-line">We build digital experiences</span>
            <span className="hero__title-line hero__title-line--accent">worth staying in.</span>
          </h1>
          <p className="hero__sub">{brand.subheadline}</p>

          <div className="hero__actions">
            <Link to="/contact" className="btn-mantis btn-mantis--ghost btn-mantis--glass-cta">
              Start a conversation
            </Link>
            <Link to="/work" className="btn-mantis btn-mantis--primary">
              See the work
            </Link>
          </div>
        </div>

        <div className="hero__viewport-wrap">
          <div className="hero__viewport-glow" aria-hidden="true" />
          <div className="hero__viewport">
            <HeroViewportChrome />
            <div className="hero__viewport-screen">
              <div className="hero__media">
                <HeroVideo />
                <div className="hero__viewport-vignette" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

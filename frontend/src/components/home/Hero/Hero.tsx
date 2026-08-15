import { Link } from 'react-router-dom'
import { brand } from '@src/config/mantis'
import HeroVideo from '@src/components/home/Hero/HeroVideo'

function Hero() {
  return (
    <section className="hero" aria-label="Showreel">
      <div className="hero__media">
        <HeroVideo />
        <div className="hero__scrims" />
        <div className="hero__grain" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <div className="hero__content-inner">
          <p className="hero__eyebrow">
            <span className="hero__pulse" aria-hidden="true" />
            Creative Technology Studio
          </p>
          <h1 className="hero__title">
            <span className="hero__title-line">We build an internet</span>
            <span className="hero__title-line hero__title-line--accent">worth staying in.</span>
          </h1>
          <p className="hero__sub">{brand.subheadline}</p>
        </div>

        <div className="hero__footer">
          <div className="hero__actions">
            <Link to="/work" className="btn-mantis btn-mantis--primary">
              See the work
            </Link>
            <Link to="/contact" className="btn-mantis btn-mantis--ghost">
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

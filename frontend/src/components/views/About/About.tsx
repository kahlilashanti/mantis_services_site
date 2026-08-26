import Team from '@src/components/home/Team/Team'
import Capabilities from '@src/components/home/Capabilities/Capabilities'
import Differentiator from '@src/components/home/Differentiator/Differentiator'
import { brand } from '@src/config/mantis'
import PageMeta from '@src/components/global/PageMeta/PageMeta'
import { pageSeo } from '@src/config/seo'

function About() {
  return (
    <>
      <PageMeta {...pageSeo.about} />
      <section className="page-hero page-hero--compact">
        <p className="section-eyebrow">About</p>
        <h1 className="page-title">{brand.headline}</h1>
        <p className="page-lead">{brand.subheadline}</p>
      </section>
      <section className="about-belief">
        <p>{brand.belief}</p>
      </section>
      <Team />
      <Capabilities />
      <Differentiator />
    </>
  )
}

export default About

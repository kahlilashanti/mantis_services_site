import WorkGrid from '@src/components/home/WorkGrid/WorkGrid'
import ClosingCta from '@src/components/home/ClosingCta/ClosingCta'
import PageMeta from '@src/components/global/PageMeta/PageMeta'
import { pageSeo } from '@src/config/seo'

function Work() {
  return (
    <>
      <PageMeta {...pageSeo.work} />
      <section className="page-hero page-hero--compact">
        <p className="section-eyebrow">Work</p>
        <h1 className="page-title">Built to perform</h1>
        <p className="page-lead">
          Immersive, web, product, and AI. One portfolio. Every project measured by what it moved.
        </p>
      </section>
      <WorkGrid />
      <ClosingCta />
    </>
  )
}

export default Work

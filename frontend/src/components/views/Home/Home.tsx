import Hero from '@src/components/home/Hero/Hero'
import StatementBand from '@src/components/home/StatementBand/StatementBand'
import WorkGrid from '@src/components/home/WorkGrid/WorkGrid'
import ClientLogos from '@src/components/home/ClientLogos/ClientLogos'
import Team from '@src/components/home/Team/Team'
import Capabilities from '@src/components/home/Capabilities/Capabilities'
import Differentiator from '@src/components/home/Differentiator/Differentiator'
import ClosingCta from '@src/components/home/ClosingCta/ClosingCta'
import PageMeta from '@src/components/global/PageMeta/PageMeta'
import { homeJsonLd, pageSeo } from '@src/config/seo'

function Home() {
  return (
    <>
      <PageMeta {...pageSeo.home} jsonLd={homeJsonLd()} />
      <Hero />
      <ClientLogos />
      <StatementBand />
      <WorkGrid />
      <Team />
      <Capabilities />
      <Differentiator />
      <ClosingCta />
    </>
  )
}

export default Home

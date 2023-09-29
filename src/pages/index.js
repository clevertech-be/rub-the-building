import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Heading from '../components/heading'
import Testimonials from '../components/testimonials'
import Faq from '../components/faq'
import Contact from '../components/contact'
import Usp from '../components/usp'
import Services from '../components/services'
import injected from '../injected.json'
import Container from '../components/container'
import InfoBox from '../components/infoBox'
import { SecondaryButton } from '../components/button'
import { useTranslate } from '../hooks/useTranslate'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <Hero featured={injected.featured} />
      </Container>
      <div>
        <Usp usps={injected.usps} />
      </div>
      <Container>
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <SecondaryButton message={t('appointment.button')} link={'/'} />
        </InfoBox>
        <Heading />
      </Container>
      <div>
        <Services services={injected.services} />
      </div>
      <Container>
        <Testimonials testimonials={injected.testimonials} />
      </Container>
      <div>
        <Contact />
      </div>
      <Container>
        <Faq faqs={injected.faqs} />
      </Container>
    </Layout>
  )
}

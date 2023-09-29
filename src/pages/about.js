import React from 'react'
import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import Faq from '../components/faq'
import injected from '../injected.json'
import Container from '../components/container'
import InfoBox from '../components/infoBox'
import { SecondaryButton } from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import Heading from '../components/heading'
import SimpleGallery from '../components/simpleGallery'
import SocialProof from '../components/socialProof'

export default function AboutUs() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <Heading />
        <SimpleGallery />
      </Container>
      <div>
        <SocialProof />
      </div>
      <Container>
        <Testimonials testimonials={injected.testimonials} />
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <SecondaryButton message={t('appointment.button')} link={'/'} />
        </InfoBox>
        <Faq faqs={injected.faqs} />
      </Container>
    </Layout>
  )
}

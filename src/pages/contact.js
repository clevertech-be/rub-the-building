import React from 'react'
import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import Faq from '../components/faq'
import Contact from '../components/contact'
import injected from '../injected.json'
import Container from '../components/container'
import InfoBox from '../components/infoBox'
import { SecondaryButton } from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import Heading from '../components/heading'

export default function ContactUs() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <Heading />
        <Contact />
        <Testimonials testimonials={injected.testimonials} />
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <SecondaryButton message={t('appointment.button')} link={'/'} />
        </InfoBox>
        <Faq faqs={injected.faqs} />
      </Container>
    </Layout>
  )
}

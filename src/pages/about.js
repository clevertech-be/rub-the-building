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
      <div className='w-full bg-primary-500 text-text-50 text-xl md:text-4xl font-bold text-center py-10'>
        <h2>{t('about.title')}</h2>
      </div>
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

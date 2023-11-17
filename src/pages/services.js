import React from 'react'
import Layout from '../components/layout'
import Faq from '../components/faq'
import injected from '../injected.json'
import Container from '../components/container'
import InfoBox from '../components/infoBox'
import { SecondaryButton } from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import MissionCard from '../components/card/mission'

const missions = Array.from({ length: 5 })

export default function Services() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='w-full bg-primary-500 text-text-50 text-xl md:text-4xl font-bold text-center py-10'>
        <h2>{t('services.title')}</h2>
      </div>
      <Container>
        <div className='w-full my-5 flex flex-col items-center'>
          {missions.map((_, i) => (
            <MissionCard
              key={i}
              description={t(`mission.${i + 1}.description`)}
              index={i + 1}
              inverted={(i + 1) % 2 === 1}
              title={t(`mission.${i + 1}.title`)}
              image={`/images/services/mission${i + 1}.jpg`}
            />
          ))}
        </div>
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <SecondaryButton message={t('appointment.button')} link={'/'} />
        </InfoBox>
        <Faq faqs={injected.faqs} />
      </Container>
    </Layout>
  )
}

import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/cards/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import MissionCard from '../components/cards/mission'
import Container from '../components/container'

const missions = Array.from({ length: 7 })

export default function Mission() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <div className='w-full my-5 flex flex-col items-center'>
          {missions.map((_, i) => (
            <MissionCard
              key={i}
              description={t(`mission.${i + 1}.description`)}
              index={i + 1}
              inverted={(i + 1) % 2 === 1}
              title={t(`mission.${i + 1}.title`)}
              image={`/images/mission/mission${i + 1}.png`}
            />
          ))}
        </div>

        <Newsletter />
      </Container>
    </Layout>
  )
}

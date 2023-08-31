import React from 'react'
import Layout from '../components/layout'
import { Button, ButtonSecondary } from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import InfoBox from '../components/cards/infoBox'
import Newsletter from '../components/cards/newsletter'
import ArticleCard from '../components/cards/article'
import { allArticles } from '../api/articles'
import Container from '../components/container'
import InfoSection from '../components/infoSection'
import UspCard from '../components/cards/usp'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='w-full bg-[image:url(/images/hero.png)] bg-cover bg-center bg-no-repeat relative lg:h-[485px] items-center flex'>
        <div className='text-white h-full w-full flex flex-col gap-4 justify-center p-6 bg-black/70'>
          <div className='max-w-screen-xl mx-auto flex flex-col gap-4'>
            <div className='text-3xl xl:text-4xl font-bold'>{t('home.hero.title')}</div>
            <div className='text-base max-w-xl'>{t('home.hero.description')}</div>
            <div className='flex flex-col w-full md:w-auto md:flex-row gap-4 justify-between md:justify-start'>
              <Button message={t('home.hero.button.secondary')} link='/contact' />
              <ButtonSecondary message={t('home.hero.button.primary')} link='/about' />
            </div>
          </div>
        </div>
      </div>

      <Container>
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <Button message={t('appointment.button')} link={'/'} />
        </InfoBox>

        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          {Array.from({ length: 3 }).map((_, index) => (
            <UspCard
              key={`usp-${index}`}
              title={t(`home.usp.${index + 1}.title`)}
              description={t(`home.usp.${index + 1}.description`)}
            />
          ))}
        </div>
      </Container>

      <div className='text-black w-full bg-contrast-100 py-20'>
        <div className='p-6 max-w-screen-xl mx-auto flex flex-col gap-14 items-center justify-between'>
          <div className='flex flex-col md:flex-row gap-3 justify-between items-start md:items-center w-full'>
            <div className='text-2xl sm:text-3xl font-bold leading-tight'>{t('news.title')}</div>
            <Button message={t('news.button')} link='/news' />
          </div>
          <div className='w-full grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {allArticles.slice(0, 3).map((article) => (
              <ArticleCard
                key={article.name}
                title={article.title}
                topic={t(article.topic)}
                link={article.link}
                date={article.date}
                image={article.defaultImage}
              />
            ))}
          </div>
          <Newsletter />
        </div>
      </div>

      <Container>
        <InfoSection
          title={t('home.about.title')}
          description={t('home.about.description')}
          image={'/images/about.jpg'}
        >
          <Button message={t('home.about.button.primary')} link='/about' />
          <ButtonSecondary message={t('home.about.button.secondary')} link='/contact' />
        </InfoSection>
        <Newsletter />
      </Container>
    </Layout>
  )
}

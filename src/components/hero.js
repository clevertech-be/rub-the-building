import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import { SecondaryButton } from './button'

export default function Hero() {
  const { t } = useTranslate()

  return (
    <section>
      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-xl md:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-background-950'>
            {t('home.hero.preTitle')}
          </h1>
          <h2 className='max-w-2xl mb-4 text-xl md:text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl text-background-950'>
            {t('home.hero.title')}
          </h2>
          <div className='border-b-8 border-primary-400 mb-10'></div>
          <p className='max-w-2xl mb-6 font-light text-background-950 lg:mb-8 md:text-lg lg:text-xl'>
            {t('home.hero.description')}
          </p>
          <div className='flex flex-row gap-4 items-center'>
            <SecondaryButton link={'/contact'} message={t('home.hero.contact')} />
          </div>
        </div>
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
          <Image src='/images/hero.png' alt='mockup' width={500} height={500} />
        </div>
      </div>
    </section>
  )
}

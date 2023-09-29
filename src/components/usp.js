import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'

export default function Usp({ usps }) {
  const { t } = useTranslate()
  return (
    <section className='bg-background-950 p-5 text-text-50'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-left sm:py-16 lg:px-6'>
        <h2 className='mb-4 text-lg md:text-xl tracking-tight font-extrabold text-primary-500'>
          {t('home.usp.label')}
        </h2>
        <h2 className='mb-4 text-xl md:text-4xl tracking-tight font-extrabold'>{t('home.usp.title')}</h2>
        <p className='text-white/80 sm:text-xl '>{t('home.usp.description')}</p>
        <div className='mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          {usps.map((usp, index) => (
            <div key={index} className='bg-text-50 text-background-950 px-10 py-5'>
              <Image
                className='mb-4 w-12 h-12'
                src={usp.icon}
                width={20}
                height={20}
                alt='icon usp'
              />
              <h3 className='mb-2 text-xl font-bold'>{t(usp.title)}</h3>
              <p className='mb-4 '>{t(usp.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'

export default function Services({ services }) {
  const { t } = useTranslate()
  return (
    <section className='bg-primary-500 text-background-950'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-xl md:text-4xl tracking-tight font-extrabold'>
            {t('home.services.title')}
          </h2>
          <p className='font-light sm:text-xl'>{t('home.services.description')}</p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-8 xl:gap-8 md:space-y-0'>
          {services.map((service, index) => (
            <div className='p-6 bg-background-950 rounded shadow' key={index}>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded lg:h-12 lg:w-12'>
                <Image
                  src={service.icon}
                  width={24}
                  height={24}
                  alt='icon'
                  className='w-5 h-5 text-white lg:w-6 lg:h-6'
                />
              </div>
              <h3 className='mb-2 text-xl font-bold text-white'>{t(service.title)}</h3>
              <p className='font-light text-white/90'>{t(service.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

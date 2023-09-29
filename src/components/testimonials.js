import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'

export default function Testimonials({ testimonials }) {
  const { t } = useTranslate()
  return (
    <section className='' id='testimonials'>
      <div className='py-4 px-2 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm mb-8 lg:mb-16'>
          <h2 className='mb-4 text-xl md:text-4xl tracking-tight font-extrabold text-black'>
            {t('home.testimonials.title')}
          </h2>
          <p className='font-light text-black/80 sm:text-xl '>
            {t('home.testimonials.description')}{' '}
          </p>
        </div>
        <div id='testimonial-carousel' className='relative' data-carousel='slide'>
          <div className='overflow-x-hidden overflow-y-visible relative mx-auto max-w-screen-md h-52  sm:h-48'>
            {testimonials.map((item, index) => (
              <figure
                className='hidden mx-auto w-full max-w-screen-md'
                data-carousel-item
                key={index}
              >
                <blockquote>
                  <p className='text-lg font-medium text-black'>{t(item.testimonial)}</p>
                </blockquote>
                <figcaption className='flex justify-center items-center mt-6 space-x-3'>
                  <div className='flex items-center divide-x-2 divide-primary-500'>
                    <div className='pr-3 font-medium text-black'>{t(item.name)}</div>
                    <div className='pl-3 text-sm font-light text-black '>{t(item.role)}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              type='button'
              className='flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none'
              data-carousel-prev
            >
              <span className='text-primary-400  hover:text-primary-600 transition-all ease-in-out duration-300'>
                <Image
                  className='w-6 h-6'
                  src={'/icons/arrow-previous.svg'}
                  width={20}
                  height={20}
                  alt='arrow'
                />
                <span className='hidden'>{t('home.testimonials.previous')}</span>
              </span>
            </button>
            <button
              type='button'
              className='flex justify-center items-center h-full cursor-pointer group focus:outline-none'
              data-carousel-next
            >
              <span className='text-primary-400  hover:text-primary-600 transition-all ease-in-out duration-300'>
                <Image
                  className='w-6 h-6'
                  src={'/icons/arrow-next.svg'}
                  width={20}
                  height={20}
                  alt='arrow'
                />
                <span className='hidden'>{t('home.testimonials.next')}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

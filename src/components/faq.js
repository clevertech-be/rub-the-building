import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'

export default function Faq({ faqs }) {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 '>
        <h2 className='mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-black'>
          {t('home.faq.title')}
        </h2>
        <div className='mx-auto max-w-screen-md'>
          <div
            id='faq-flush'
            data-accordion='collapse'
            data-active-classes='text-black'
            data-inactive-classes='text-black/60'
          >
            {faqs.map((item, index) => (
              <>
                <h2 id={`faq-flush-heading-${index + 1}`}>
                  <button
                    type='button'
                    className='flex justify-between items-center py-5 w-full font-medium text-left text-black border-b border-primary-500'
                    data-accordion-target={`#faq-flush-body-${index + 1}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`faq-flush-body-${index + 1}`}
                  >
                    <span>{t(item.title)}</span>
                    <Image
                      className='w-6 h-6 shrink-0'
                      src={'/icons/arrow-right.svg'}
                      width={20}
                      height={20}
                      alt='arrow'
                    />
                  </button>
                </h2>
                <div
                  id={`faq-flush-body-${index + 1}`}
                  className=''
                  aria-labelledby={`faq-flush-heading-${index + 1}`}
                >
                  <div className='py-5 border-b border-black'>
                    <p className='mb-2 text-black'>{t(item.description)}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

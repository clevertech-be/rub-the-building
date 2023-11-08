import { useTranslate } from '../hooks/useTranslate'

export default function SimpleGallery() {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16'>
        <h2 className='mb-4 text-xl md:text-4xl tracking-tight font-extrabold text-background-950'>
          {t('home.gallery.title')}
        </h2>
        <p className='font-light text-background-950 sm:text-lg md:px-20 lg:px-38 xl:px-48'>
          {t('home.gallery.description')}
        </p>
        <div className='gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12'>
          <img
            className='col-span-2 mb-4 sm:mb-0 rounded-lg'
            src='/images/gallery/gallery3.jpg'
            alt='content gallery 1'
          />
          <img
            className='hidden col-span-1 sm:block rounded-lg'
            src='/images/gallery/gallery2.jpg'
            alt='content gallery 2'
          />
          <img
            className='hidden col-span-1 sm:block rounded-lg'
            src='/images/gallery/gallery1.jpg'
            alt='content gallery 3'
          />
          <img
            className='hidden col-span-1 sm:block rounded-lg'
            src='/images/gallery/gallery4.jpg'
            alt='content gallery 4'
          />
          <img
            className='col-span-2 rounded-lg'
            src='/images/gallery/gallery5.jpg'
            alt='content gallery 5'
          />
          <img
            className='hidden col-span-1 sm:block rounded-lg'
            src='/images/gallery/gallery6.jpg'
            alt='content gallery 6'
          />
        </div>
      </div>
    </section>
  )
}

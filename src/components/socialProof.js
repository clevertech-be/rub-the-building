import { useTranslate } from '../hooks/useTranslate'

export default function SocialProof() {
  const { t } = useTranslate()
  return (
    <section className='text-background-950 bg-primary-500'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold  lg:text-5xl '>
          {t('about.socialProof.title')}
        </h2>
        <p className='font-light sm:text-lg sm:px-8 lg:px-32 xl:px-64 '>
          {t('about.socialProof.description')}
        </p>
        <dl className='grid grid-cols-2 gap-8 mx-auto mt-8 max-w-screen-md  lg:mt-14 sm:grid-cols-3 '>
          <div className='flex flex-col justify-center items-center'>
            <dt className='mb-2 text-4xl font-extrabold'>73M+</dt>
            <dd className='text-xl font-normal '>developers</dd>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <dt className='mb-2 text-4xl font-extrabold'>1B+</dt>
            <dd className='text-xl font-normal '>contributors</dd>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <dt className='mb-2 text-4xl font-extrabold'>4M+</dt>
            <dd className='text-xl font-normal '>organizations</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

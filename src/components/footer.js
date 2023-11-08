import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import { useLocale } from '../hooks/useLocale'
import PrimaryButton from './button'

export default function Footer() {
  const { t } = useTranslate()
  const { switchLocale } = useLocale()

  return (
    <footer className='text-text-50 bg-background-950 text-sm'>
      <div className={`p-6 md:p-8 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-col md:flex-row gap-10 items-center justify-between'>
          <div className='flex'>
            <Link href={'/'}>
              <Image loading='lazy' width={200} height={60} src='/logo-white.png' alt={`Logo`} />
            </Link>
          </div>
          <div className='flex flex-col md:flex-row gap-4 xl:gap-6 items-center'>
            <div className='flex gap-2 flex-col items-center md:items-start lg:hidden'>
              {injected.pages.map((item, index) => (
                <Link
                  key={index}
                  className={`text-primary-500 text-xl hover:underline-offset-8 hover:underline cursor-pointer transition-all`}
                  href={item.link}
                >
                  {t(item.title)}
                </Link>
              ))}
            </div>
            <PrimaryButton message={t('footer.appointment')} link='/contact' />
          </div>
        </div>
      </div>
      <div className='p-6 md:p-8 w-full max-w-screen-xl mx-auto font-bold flex flex-col md:flex-row gap-10 md:gap-5 items-center md:items-start justify-between'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-4 font-normal w-full'>
          <div className='flex flex-col justify-between items-center md:items-start gap-4 font-normal'>
            <div className='flex gap-2 flex-col items-center md:items-start text-center'>
              <div className='font-bold'>{injected.companyName}</div>
              <div>{injected.address.address}</div>
              <div>{injected.tva}</div>
              <div>
                {t('footer.business.hours')}: {injected.buisinessHours}
              </div>
            </div>
            <div className='flex gap-2 flex-col md:flex-row items-center font-bold'>
              <div>Follow us on</div>
              <div className='flex gap-2 flex-col md:flex-row items-center'>
                <div className='flex gap-2 flex-row'>
                  {injected.socials.map((item, index) => (
                    <Link key={index} className='text-black' href={item.link}>
                      <Image
                        loading='lazy'
                        width={20}
                        height={20}
                        src={`/icons/socials/${item.title}.svg`}
                        alt={`Social ${item.title} - ${item.link}`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex gap-2 flex-col md:flex-row items-center font-bold'>
              <select
                onChange={(e) => {
                  switchLocale(e.target.value)
                }}
                className={`text-white bg-transparent border-none focus:ring-0 focus:outline-none p-0`}
              >
                {injected.locales.map((item, index) => (
                  <option
                    key={index}
                    className={`uppercase text-white inline-flex items-center`}
                    value={item}
                  >
                    {item.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col gap-6 items-center justify-between md:justify-end md:items-end text-xl text-primary-500 font-bold'>
            <div className='flex flex-col items-center md:flex-row gap-2'>
              <Image
                loading='lazy'
                width={20}
                height={20}
                alt='Contact phone illustration'
                src={'/icons/phone.svg'}
              />
              <Link href={`tel:+${injected.tel}`}>{injected.tel}</Link>
            </div>
            <div className='flex flex-col items-center md:flex-row gap-2'>
              <Image
                loading='lazy'
                width={20}
                height={20}
                alt='Contact mail illustration'
                src={'/icons/email.svg'}
              />
              <Link href={`mailto:+${injected.email}`}>{injected.email}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary-500 w-full text-background-950'>
        <div className='p-6 md:p-8 mx-auto font-bold leading-normal max-w-screen-xl flex flex-col md:flex-row gap-4 justify-center items-center text-xs md:text-base'>
          <div className='flex flex-row items-center gap-2'></div>
        </div>
      </div>
    </footer>
  )
}

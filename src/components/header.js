import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryButton from './button'
import injected from '../injected.json'
import { useRouter } from 'next/router'
import { useTranslate } from '../hooks/useTranslate'

export default function Header() {
  const { t } = useTranslate()
  const router = useRouter()
  return (
    <nav
      className={
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out text-background-950 bg-text-50 shadow-sm'
      }
    >
      <div className={`p-4 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-row gap-2 items-center justify-between'>
          <Link href={'/'}>
            <Image loading='lazy' width={300} height={60} src='/logo.png' alt={`Logo`} />
          </Link>

          <div className='flex flex-row gap-4 items-center justify-end'>
            {injected.pages.map((item, index) => (
              <Link
                key={index}
                className={`${
                  router.route === item.link ? 'border-b-2 border-primary-500' : ''
                } text-background-950 cursor-pointer transition-all hidden md:block`}
                href={item.link}
              >
                {t(item.title)}
              </Link>
            ))}
            <PrimaryButton message='Contact' link='/contact' />
          </div>
        </div>
      </div>
    </nav>
  )
}

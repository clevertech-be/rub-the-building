import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'
import Burger from './burger'

export default function Header({ setNavbarOpen, navbarOpen }) {
  const { t } = useTranslate()
  const router = useRouter()
  return (
    <nav
      className={
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out bg-primary-700 text-white'
      }
    >
      <div className={`p-4 md:p-8 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-row gap-2 items-center justify-between'>
          <Link href={'/'}>
            <Image loading='lazy' width={130} height={160} src='/logo.png' alt={`Logo`} />
          </Link>
          <div className='hidden lg:flex flex-row gap-4 xl:gap-6 items-center'>
            {injected.pages.map((item, index) => (
              <Link
                key={index}
                className={`${
                  router.route === item.link ? 'underline-offset-8 underline' : ''
                } text-white  hover:underline-offset-8 hover:underline cursor-pointer transition-all`}
                href={item.link}
              >
                {t(item.title)}
              </Link>
            ))}
          </div>
          <div className='block lg:hidden'>
            <Link
              href={'/'}
              className='relative w-5 h-5 cursor-pointer'
              onClick={(e) => {
                e.preventDefault()
                setNavbarOpen(!navbarOpen)
              }}
            >
              <Burger navbarOpen={navbarOpen} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

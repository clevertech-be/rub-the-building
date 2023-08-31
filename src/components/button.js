import Link from 'next/link'
import React from 'react'

export function Button({ message, link, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-xl p-5 transition-all ease-in-out duration-300 hover:text-contrast-800 hover:bg-transparent bg-contrast-800 text-black font-bold text:xs md:text-md leading-normal border-2 border-contrast-800 hover:border-contrast-800`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}

export function ButtonSecondary({ message, link, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-xl p-5 transition-all ease-in-out duration-300 bg-transaprent text-contrast-800 font-bold text:xs md:text-md leading-normal border-2 border-transparent hover:border-contrast-800`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}

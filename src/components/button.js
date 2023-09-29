import Link from 'next/link'
import React from 'react'

export default function PrimaryButton({ message, link, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} px-4 py-3 transition-all ease-in-out duration-300 hover:text-text-50 hover:bg-background-950 bg-primary-400 text-background-950 font-bold text:xs md:text-md leading-normal`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}

export function SecondaryButton({ message, link, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} px-4 py-3 transition-all ease-in-out duration-300 hover:bg-primary-400 bg-background-950 hover:text-background-950 text-text-50 font-bold text:xs md:text-md leading-normal`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}

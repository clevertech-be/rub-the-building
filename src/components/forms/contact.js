import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import { SecondaryButton } from '../button'
import { useRouter } from 'next/router'

export default function ContactForm({ handleSubmit }) {
  const router = useRouter()
  const { t } = useTranslate()
  return (
    <form
      method='POST'
      onSubmit={handleSubmit}
      name='contact'
      netlify-honeypot='bot-field'
      action={router.pathname}
      data-netlify='true'
      className='grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2'
    >
      <input type='hidden' name='form-name' value='contact' />
      <p className='hidden'>
        <label>
          Don’t fill this out if you’re human: <input name='bot-field' />
        </label>
      </p>{' '}
      <div className='flex flex-col gap-2 items-left'>
        <label htmlFor='first-name' className='block mb-2 text-sm font-bold text-background-950'>
          {t('contact.form.firstName')}
        </label>
        <input
          type='text'
          name='first-name'
          className='block w-full text-sm  shadow-sm border-2 bg-primary-400 text-background-950 focus:border-background-950 focus:ring-background-950 border-background-950 placeholder:text-background-950'
          placeholder='Bonnie'
          required
        />
      </div>
      <div className='flex flex-col gap-2 items-left'>
        <label htmlFor='last-name' className='block mb-2 text-sm font-bold text-background-950'>
          {t('contact.form.lastName')}
        </label>
        <input
          type='text'
          name='last-name'
          className='block w-full text-sm  shadow-sm border-2 bg-primary-400 text-background-950 focus:border-background-950 focus:ring-background-950 border-background-950 placeholder:text-background-950'
          placeholder='Green'
          required
        />
      </div>
      <div className='flex flex-col gap-2 items-left'>
        <label htmlFor='email' className='block mb-2 text-sm font-bold text-background-950'>
          {t('contact.form.email')}
        </label>
        <input
          type='email'
          name='email'
          className='shadow-sm border-2 text-sm  bg-primary-400 text-background-950 focus:border-background-950 focus:ring-background-950 border-background-950 placeholder:text-background-950'
          placeholder='name@rubthebuilding.be'
          required
        />
      </div>
      <div className='flex flex-col gap-2 items-left'>
        <label htmlFor='phone-number' className='block mb-2 text-sm font-bold text-background-950'>
          {t('contact.form.phoneNumber')}
        </label>
        <input
          type='number'
          name='phone-number'
          className='block w-full text-sm  shadow-sm border-2 bg-primary-400 text-background-950 focus:border-background-950 focus:ring-background-950 border-background-950 placeholder:text-background-950'
          placeholder='+12 345 6789'
          required
        />
      </div>
      <div className='sm:col-span-2'>
        <label htmlFor='message' className='block mb-2 text-sm font-bold text-background-950 '>
          {t('contact.form.message')}
        </label>
        <textarea
          name='message'
          rows='6'
          className='block p-2.5 w-full text-sm  shadow-sm border-2 bg-primary-400 text-background-950 focus:border-background-950 focus:ring-background-950 border-background-950 placeholder:text-background-950'
          placeholder='...'
        ></textarea>
      </div>
      <SecondaryButton message={t('contact.form.submit')} className={'sm:col-span-2'} />
    </form>
  )
}

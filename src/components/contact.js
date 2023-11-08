import { useState } from 'react'
import { useTranslate } from '../hooks/useTranslate'
import ContactForm from './forms/contact'
import { useRouter } from 'next/router'

export default function Contact() {
  const router = useRouter()
  const { t } = useTranslate()
  const [formSuccess, setFormSuccess] = useState()
  const [formError, setFormError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)
    fetch(`/${router.locale}${router.asPath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormSuccess({ message: t('contact.form.success') })
        console.log(t('contact.form.success'))
      })
      .catch(() => {
        setFormError({ message: t('contact.form.error') })
        console.log(t('contact.form.error'))
      })
  }
  return (
    <section className='bg-primary-500 p-5 text-background-950' id='contact'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex-col flex gap-4'>
        <div className='px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16'>
          <h2 className='mb-4 text-xl md:text-4xl tracking-tight font-extrabold'>
            {t('home.contact.title')}
          </h2>
          <p className='font-light sm:text-xl'>{t('home.contact.description')}</p>
        </div>
        <div className='flex items-center text-left'>
          <ContactForm
            formSuccess={formSuccess}
            handleSubmit={handleSubmit}
            formError={formError}
          />
        </div>
      </div>
    </section>
  )
}

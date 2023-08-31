import React, { useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/cards/newsletter'
import ContactForm from '../components/forms/contact'
import { useTranslate } from '../hooks/useTranslate'
import Container from '../components/container'
import Faq from '../components/faq'
import ContactCard from '../components/cards/contact'

export default function Contact() {
  const { t } = useTranslate()
  const [formSuccess, setFormSuccess] = useState()
  const [formError, setFormError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)
    fetch('/', {
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
    <Layout>
      <Container>
        <ContactCard />
        <ContactForm handleSubmit={handleSubmit} formSuccess={formSuccess} formError={formError} />
        <Faq />
        <Newsletter />
      </Container>
    </Layout>
  )
}

import React from 'react'
import SEO from './seo'
import Footer from './footer'
import Header from './header'
import CookieBanner from './banners/cookie'

export default function Layout({ children }) {
  return (
    <>
      <main>
        <SEO />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </main>
    </>
  )
}

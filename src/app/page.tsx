import React from 'react'
import Hero from './Components/Hero'
import Hero1 from './Components/Quote'
import Images from './Components/Images'
import ProductCarousal from './Components/ProductCarousal'
import Contact from './Components/ContactForm/page'
export default function Home () {
  return (
    <div>
      <Hero/>
      <Hero1/>
      <ProductCarousal/>
      <Images/>
    </div>
  )
}

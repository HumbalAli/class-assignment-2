import React from 'react'
import Link from 'next/link'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import HeroSection from './components/hero-section/HeroSection'
import hStyle from './home.module.css'
const page = () => {
  return (
    <div>
     <Header></Header>
     <HeroSection></HeroSection>
      <h1 className={hStyle.home}>
        This is HomePage
      </h1>
      <ul>
      <li><Link href='./services' target='_blank'>Services</Link></li>
      <li><Link href='./about' target='_blank'>About</Link></li>
      <li><Link href='./contact' target='_blank'>Contact</Link></li>
    </ul>
    <Footer></Footer>
    </div>
  )
}

export default page

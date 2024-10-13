import React from 'react'
import Link from 'next/link'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import serviceStyle from './services.module.css'
const page = () => {
  return (
    <div>
        <Header></Header>
      <h1 className={serviceStyle.services}>
        Services
      </h1>
      <br/>
      <br/>
      <p className={serviceStyle.services}>These are my services</p>
      <br/>
      <Link href='./web-development'>Web Development</Link>
      <br/>
      <Footer></Footer>
    </div>
  )
}

export default page

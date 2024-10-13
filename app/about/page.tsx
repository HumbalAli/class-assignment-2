import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import aboutStyle from './about.module.css'
const page = () => {
  return (
    <div>
        <Header></Header>
      <h1 className={aboutStyle.about}>This is About Page</h1>
      <Footer></Footer>
    </div>
  )
}

export default page

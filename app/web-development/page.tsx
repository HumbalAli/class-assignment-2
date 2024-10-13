import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import webStyle from './web.module.css'
const page = () => {
  return (
    <div>
        <Header></Header>
      <h1 className={webStyle.web}>this is my web development page</h1>
      <br/>
      <Footer></Footer>
    </div>
  )
}

export default page

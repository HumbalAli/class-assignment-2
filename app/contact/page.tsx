import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import contactStyle from './contact.module.css'
const page = () => {
  return (
    <div>
        <Header></Header>
      <h1 className={contactStyle.con}>This is my contact page</h1>
      <Footer></Footer>
    </div>
  )
}

export default page

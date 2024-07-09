import React from 'react'

import Navbar from './Navbar'
import Banner from './Banner'
import { Boutiques } from './Boutiques';
import Footer from '../Footer/Footer';



export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Boutiques/>
      <Footer/>
    </>
  )
}

import React from 'react'
import Contact from './Contact'
import Gift from './Gift'
import Saving from './Saving'
import Shop from './Shop'
import Testinomial from './Testinomial'
import Welcome from './Welcome'
import WhyShop from './WhyShop'
import Footer from "./Footer"
import { Navbar } from './Navbar'



export default function Home() {
  return <> 
  <Navbar/> 
  <Welcome/>
  <Shop/>
  <Saving/>
  <WhyShop/>
  <Gift/>
  <Contact/>
  <Testinomial/>  
  <Footer/>
  </>
}

import React from 'react'
import Navbar from '../Navbar/Navbar'
import Services from '../Services/Services'
import ChooseUs from '../ChooseUs/ChooseUs'
import ContactUs from '../ContactUs/ContactUs'
import OurWork from '../OurWork/OurWork'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import AboutUs from '../AboutUsHomePage/AboutUsHomePage'
import { ContactUsHomePage } from '../ContactUsHomePage/ContactUsHomePage'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <ChooseUs/>
      <OurWork/>
      <AboutUs/>
      <ContactUsHomePage/>
      <Footer/>
    </div>
  )
}

export default HomePage

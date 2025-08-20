import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'
import About from '../components/AboutPage'
import Process from '../components/Process'
import Showcase from '../components/Showcase'
import Slider from '../components/Slider'
import DarkNavbar from '../components/DarkNavbar'

const Home = () => {
  return (
    <>
   <DarkNavbar />
    <Banner />
    <Services />
    <About />
    <Process />
    <Showcase />
    <Slider />
    <Footer />
    
    </>
  )
}

export default Home
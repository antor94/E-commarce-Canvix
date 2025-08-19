import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'
import About from '../components/About'
import Process from '../components/Process'
import Showcase from '../components/Showcase'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
    <Navbar />
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
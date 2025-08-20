import React from 'react'
import Darklogo from '../assets/images/darkNavbar.png'
import heroimg from "../assets/images/Hero Section.png";
import { Link } from 'react-router'

const DarkNavbar = () => {
  return (
    <>

    <section style={{ background: `URL(${heroimg})`,  backgroundRepeat: `no-repeat`, backgroundSize: `cover`,}} id='dark'>
        <div className="container">
            <div id='dark-row' className='flex items-center justify-between pt-[22px] pb-[23px]'>
         {/* --------- logo  */}
            <Link to={"/"}> <img  className="w-[120px] sm:w-[154px]" src={Darklogo} alt="main-logo"/> </Link>
            {/* ----------- nav-items */}
            <div className="">
              <ul className="flex gap-[35px] items-center">
                <li> <Link to={"/"}  className="text-[18px] lg:text-[20px] font-normal font-dm text-white">Home</Link> </li>
                <li> <Link to={"/about"}   className="text-[18px] lg:text-[20px] font-normal font-dm text-white" >  About </Link>  </li>
                <li> <Link to={"/contact"}  className="text-[18px] lg:text-[20px] font-normal font-dm text-white" >  Contact Us  </Link> </li>
              </ul>
            </div>
            {/* ------------- button */}
            <div className="">
              <button className="w-[110px] lg:w-[140px] bg-white py-[10px] lg:py-[12px] text-[16px] lg:text-[18px] font-normal font-dm text-[#0C0C0C] rounded-[23px]">
                Get in touch
              </button>
            </div>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default DarkNavbar
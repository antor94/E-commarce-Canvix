import React from 'react'
import heroimg from '../assets/images/Hero Section.png'
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router';
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import bannrborder from '../assets/images/bannerimgborder.png'
import bannrimg from '../assets/images/Ellipse.png'
import ornament from '../assets/images/Ornament.png'

const Banner = () => {
  return (
    <>
    
    
    <section  style={{  background: `URL(${heroimg})`,   backgroundRepeat: `no-repeat`,   backgroundSize: `cover`,  }} id='banner' className='pt-[162px] relative pb-[123px]'>
        <div className=' absolute top-[60px] left-0'><img src={ornament} alt="side-logo" /></div>
        <div className="container">
            <div id='banner-row' className=''>
                {/* ------------- left-side */}
                <div className='pl-[50px]'>
                {/* ------------- heading */}
                <div className='w-[608px]'>
                <h1 className='text-[64px] font-semibold font-robot text-[#fff]'>Ready to take your <span className='text-[#64CCC5]'>Business Growth</span> to the next level?</h1>
                </div>
                <div className='w-[557px] pt-[24px]'><p className='text-[18px] font-dm font-normal text-[#fff] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p></div>
                {/* ------------- button */}
                <button className='w-[248px] mt-[32px] mb-[181px] rounded-[23px] bg-[#fff] text-[20px] font-normal flex justify-center gap-[10px] font-dm text-main py-[11px]'> <span className='w-[28px] h-[28px] rounded-full flex justify-center items-center bg-main '><MdArrowForwardIos className='text-[#fff]'  /></span>Start your Free Trial</button>
                <h2 className='text-[20px] font-semibold font-robot text-[#64CCC5]'>Trusted by Leading Brands</h2>
                <div className='flex items-center gap-[30px] mt-[5px]'>
                    <Link to={'/'} ><img src={img1} alt="img1" /></Link>
                    <Link to={'/'} ><img src={img2} alt="img1" /></Link>
                    <Link to={'/'} ><img src={img3} alt="img1" /></Link>
                    <Link to={'/'} ><img src={img4} alt="img1" /></Link>
                </div>
             </div>
             {/* ------------ right-side */}
             <div>
                <div className='relative'>
           
                    <img className='w-[1200px] absolute top-[-933px] right-[-175px] ' src={bannrborder} alt="banner-border" />

                    <img className='w-[550px] absolute top-[-710px] left-[878px]' src={bannrimg} alt="banner-main-img" />
                </div>
             </div>
            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Banner
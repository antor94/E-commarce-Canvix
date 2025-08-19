import React from 'react'
import aboutimg from '../assets/images/about-img.png'
import { MdArrowForwardIos } from 'react-icons/md'

const About = () => {
  return (
    <>
    
    
    <section id='about' className='bg-main'>
        <div className="container">
            <div id='about-row' className='py-[100px] flex gap-[70px] '>
                {/* ------------ lrft-images */}
                <div><img src={aboutimg} alt="about-img" /></div>

                {/* ------------ right-side */}
                <div>
                    <p className='text-[30px] font-semibold font-robot text-[#64CCC5]'>About us </p>
                    <div className='w-[586px] my-[25px]'><h2 className='text-[64px] font-semibold font-robot text-[#FBFBFB]'>The core mission behind all our work</h2></div>
                    <div className='w-[532px]'><p className='text-[18px] font-normal font-dm text-[#F4F4F4]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p></div>
                {/* -------------- ratiing */}
                <div className='flex  gap-[60px] pt-[25px] pb-[32px]'>
                    <div className='w-[147px]'>
                        <h2 className='text-[45px] font-semibold font-robot text-[#64CCC5]'>330 <span>+</span></h2>
                        <p className='text-[16px] font-normal font-dm text-[#F4F4F4]'>Companies helped</p>
                    </div>
                               <div className='w-[147px]'>
                        <h2 className='text-[45px] font-semibold font-robot text-[#64CCC5]'>230 <span>+</span></h2>
                        <p className='text-[16px] font-normal font-dm text-[#F4F4F4]'>Revenue generated</p>
                    </div>
                </div>

                {/* ---------- button */}
                                <button className='w-[248px] mt-[32px] mb-[181px] rounded-[23px] bg-[#fff] text-[20px] font-normal flex justify-center gap-[10px] font-dm text-main py-[11px]'> <span className='w-[28px] h-[28px] rounded-full flex justify-center items-center bg-main '><MdArrowForwardIos className='text-[#fff]'  /></span>Start your Free Trial</button>
                
                
                
                </div>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default About
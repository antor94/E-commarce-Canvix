import React from 'react'
import team1 from '../assets/images/team1.png'
import team2 from '../assets/images/team2.png'
import team3 from '../assets/images/team3.png'
import { TbBrandFacebook } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import portfoliobanner from '../assets/images/portfoliobanner.png'
import { FaStar } from "react-icons/fa";
import aboutimg from '../assets/images/about-img.png'

const AboutUs = () => {
  return (
    <>


    <section id='about-us' className='py-[100px]'>
        <div className="container">
            <div id='Aboutus-row'  className=''>

                {/* ---------- banner */}
                <div className='bg-main rounded-[20px] relative mb-[167px] pt-[92px] pb-[155px] flex pl-[72px] '>   
                    {/* ---------- left-side */}
                    <div>

                 <p className='text-[18px] font-normal font-dm text-[#fff]'>Pleasure and so read the was hope.</p>
              <div className="w-[541px] pt-[8px] pb-[24px]">
                <h1 className="text-[64px] font-semibold font-robot text-[#fff]">
                  Ready to take <span className="text-[#64CCC5]">your  Business </span><br /><span> to the next level?</span>
                </h1>
              </div>
              <div className="w-full max-w-[550px] pt-[16px] md:pt-[20px] lg:pt-[24px]">
                <p className="text-[15px] md:text-[17px] lg:text-[18px] font-dm font-normal text-[#fff]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
                  massa libero egestas malesuada viverra gravida libero cursus
                  nulla leo pulvinar.
                </p>
              </div>
              {/* -------- rating */}
              <div className='flex items-center pt-[40px] gap-[26px]'>
                <div className='w-[70px] h-[70px] bg-gray-100 rounded-full flex justify-center items-center' ><img src="#" alt="img" /></div>
                <div>
                    <h2 className='text-[20px] font-semibold font-robot text-white'>Rated 4.9/5 stars</h2>
                    <div className='flex items-center gap-[5px]'>
                        <FaStar className='text-white' />
                        <FaStar className='text-white' />
                        <FaStar className='text-white' />
                        <FaStar className='text-white' />
                        <FaStar className='text-white' />
                    </div>
                </div>
              </div>
                    </div>
{/* ----------------------------- right-img */}
              <div className=' absolute top-[168px] right-0'><img src={aboutimg} alt="about-img" /></div>

                </div>


                {/* --------- rating */}
                <div className='flex justify-center gap-[66px]'>
                    <div className='w-[422px]'>
                        <div className='text-center py-[45px]' >
                        <h2 className='text-[45px] font-semibold font-robot text-main'>200+</h2>
                        <h2 className='text-[25px] py-[15px] font-medium font-dm text-main'>We’re a family</h2>
                        <div className='w-[383px] text-center'><p className='text-[18px] font-normal font-dm text-main'>Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.</p></div>
                        </div>
                    </div>
                       <div className='w-[422px]'>
                        <div className='text-center py-[45px]' >

                        <h2 className='text-[45px] font-semibold font-robot text-main'>99%</h2>
                        <h2 className='text-[25px] py-[15px] font-medium font-dm text-main'>Graphic Design </h2>
                        <div className='w-[383px] text-center'><p className='text-[18px] font-normal font-dm text-main'>Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p></div>
                        </div>

                    </div>
                       <div className='w-[422px]'>
                        <div className='text-center py-[45px]' >

                        <h2 className='text-[45px] font-semibold font-robot text-main'>1.5M+</h2>
                        <h2 className='text-[25px] py-[15px] font-medium font-dm text-main'>Digital Marketing </h2>
                        <div className='w-[383px] text-center'><p className='text-[18px] font-normal font-dm text-main'>Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.</p></div>
                        </div>

                    </div>

                </div>
                {/*--------------- team */}
                <div className='text-center pb-[80px]'><h2 className='text-[64px] font-semibold font-robot text-main'>Our team</h2></div>
                <div className='flex justify-center gap-[74px]'>
                  <div className='w-[420px] h-[570px] relative'>
                    <div className='group'>
                    <div className='  '><img src={team1} alt="team-logo" /></div>
                    {/* ----------- icons */}
                    <div className=' opacity-0 duration-[.4s]  group-hover:opacity-100'>
                    <div className='w-[35px] absolute top-[15px] right-[146px] h-[35px] flex justify-center items-center bg-[#FBFBFB] rounded-full'><TbBrandFacebook /></div>
                    <div className='w-[35px] absolute top-[15px] right-[90px] h-[35px] flex justify-center items-center bg-[#FBFBFB] rounded-full'><IoLogoInstagram /></div>
                    <div className='w-[35px] absolute top-[15px] right-[40px] h-[35px] flex justify-center items-center bg-[#FBFBFB] rounded-full'><BiLogoLinkedin /></div>
                    <div className='pt-[16px]'>
                    </div>
                    </div>
                    <h2 className='pb-[10px] text-[20px] font-semibold font-robot text-main' >Esther Howards</h2>
                    <p className='text-[16px] font-normal font-dm text-main'>Founder & CEO</p>
                    </div>
                  </div>

                                    <div className='w-[420px] h-[570px] relative'>
                    <div className='group'>
                    <div className='  '><img src={team2} alt="team-logo" /></div>
                    {/* ----------- icons */}
                    <div className=' opacity-0 duration-[.4s]  group-hover:opacity-100'>
                    <div className='w-[35px] absolute top-[15px] right-[146px] h-[35px] flex justify-center items-center bg-[#FBFBFB] rounded-full'><TbBrandFacebook /></div>
                    <div className='w-[35px] absolute top-[15px] right-[90px] h-[35px] flex justify-center items-center bg-[#FBFBFB] rounded-full'><IoLogoInstagram /></div>
                    <div className='w-[35px] absolute top-[15px] right-[40px] h-[35px] flex justify-center items-center bg-[#FBFBFB] rounded-full'><BiLogoLinkedin /></div>
                    <div className='pt-[16px]'>
                    </div>
                    </div>
                    <h2 className='pb-[10px] text-[20px] font-semibold font-robot text-main' >Esther Howards</h2>
                    <p className='text-[16px] font-normal font-dm text-main'>Founder & CEO</p>
                    </div>
                  </div>
                                    <div className='w-[420px] h-[570px] relative'>
                    <div className='group'>
                    <div className='  '><img src={team3} alt="team-logo" /></div>
                    {/* ----------- icons */}
                    <div className=' opacity-0 duration-[.4s]  group-hover:opacity-100'>
                    <div className='w-[35px] absolute top-[15px] right-[146px] h-[35px] flex justify-center items-center bg-[#FBFBFB] rounded-full'><TbBrandFacebook /></div>
                    <div className='w-[35px] absolute top-[15px] right-[90px] h-[35px] flex justify-center items-center bg-[#FBFBFB] rounded-full'><IoLogoInstagram /></div>
                    <div className='w-[35px] absolute top-[15px] right-[40px] h-[35px] flex justify-center items-center bg-[#FBFBFB] rounded-full'><BiLogoLinkedin /></div>
                    <div className='pt-[16px]'>
                    </div>
                    </div>
                    <h2 className='pb-[10px] text-[20px] font-semibold font-robot text-main' >Esther Howards</h2>
                    <p className='text-[16px] font-normal font-dm text-main'>Founder & CEO</p>
                    </div>
                  </div>


                </div>
                

                 {/* ------------- portfolio-banner */}
                 <div style={{  background: `URL(${portfoliobanner})`, backgroundRepeat: `no-repeat`,  backgroundSize: `cover`, }} className='py-[45px] my-[100px] rounded-[20px]'>
                    <div className='text-center'>
                    <h2 className='text-[45px] font-bold font-robot text-[#FBFBFB]'>Enough talk, let’s get to work</h2>
                   <button className='w-[139px] border border-[#FBFBFB] rounded-[23px] py-[12px] text-[18px] mt-[24px] font-normal font-dm text-[#FBFBFB]'>Get in touch</button>
                  </div> 
                 </div>

            </div>
        </div>
    </section>

    </>
  )
}

export default AboutUs
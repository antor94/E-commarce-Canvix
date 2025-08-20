import React from 'react'
import Breadcrum from './common/Breadcrum'
import ShowcaseCoomon from './common/ShowcaseCoomon'
import portfoliobanner from '../assets/images/portfoliobanner.png'
import portimg1 from '../assets/images/proimg1.png'
import portimg2 from '../assets/images/proimg2.png'
import portimg3 from '../assets/images/proimg3.png'
import portimg4 from '../assets/images/proimg4.png'
import portimg5 from '../assets/images/portimg5.png'
import portimg6 from '../assets/images/portimg6.png'

const Portfoliio = () => {
  return (
    <>

    <section id='portfolio'>
        <div className="container">
        <div className='my-[67px] rounded-[20px]'><Breadcrum breadContent={'Our Portfolio'} /> </div>
            <div id='portfolio-row' className="flex flex-wrap justify-center items-center pt-[100px] gap-[73px]">
                <div className='flex gap-[73px]'>
                <ShowcaseCoomon showimg={portimg1} showh2={'Web UI design'} showp={'Creative  UI design'} />
                <ShowcaseCoomon showimg={portimg2} showh2={'Graphic design '} showp={'Graphic design '}  />
                </div>
                <div className='flex gap-[73px]'>

                <ShowcaseCoomon showimg={portimg3} showh2={'UI Design'} showp={'Creative Rebranding for logo'} />
                    <ShowcaseCoomon showimg={portimg4} showh2={'Web UI design'} showp={'Creative  UI design'} />
                </div>

                <div className='flex gap-[73px]'>
                    <ShowcaseCoomon showimg={portimg5} showh2={'UI Design'} showp={'Creative Rebranding for logo'}  />
                    <ShowcaseCoomon showimg={portimg6} showh2={'Graphic design '} showp={'Graphic design '} />
                </div>

            </div>

            {/* ------------- banner */}
                <div   style={{  background: `URL(${portfoliobanner})`, backgroundRepeat: `no-repeat`,  backgroundSize: `cover`, }} className='py-[45px] my-[100px] rounded-[20px]'>
                    <div className='text-center'>
                        <h2 className='text-[45px] font-bold font-robot text-[#FBFBFB]'>Enough talk, let’s get to work</h2>
                        <button className='w-[139px] border border-[#FBFBFB] rounded-[23px] py-[12px] text-[18px] mt-[24px] font-normal font-dm text-[#FBFBFB]'>Get in touch</button>
                    </div>

                </div>

        </div>
    </section>
    
    
    
    
    
    </>
)}

export default Portfoliio
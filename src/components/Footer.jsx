import React from 'react'
import footerlogo from '../assets/images/footerlogo.png'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    

    <section id='footer' className='bg-[#0C0C0C]'>
        <div className="container">
            <div id='footer-row' className='py-[100px] flex justify-between'>
            
            {/* --------- logo-side */}
            <div>
                <Link to={'/'}><img className='w-[200px]' src={footerlogo} alt="footer-logo" /></Link>
                <div className='w-[357px]'><p className='text-[18px] font-normal font-dm text-[#fff]'>We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</p></div>
            </div>
            {/* ----------- pages-side */}
            <div className='flex flex-col'>
                <h2 className='text-[20px] font-semibold font-robot text-[#fff]'>Pages </h2>
                <div className='flex flex-col  mt-[24px] gap-[16px]'>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Home</Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Home 2</Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >About</Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Conatct Us </Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Portfolio</Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Portfolio Single</Link>
                </div>
            </div>

                        {/* ----------- Utility-side */}
            <div className='flex flex-col'>
                <h2 className='text-[20px] font-semibold font-robot text-[#fff]'>Utility Pages  </h2>
                <div className='flex flex-col  mt-[24px] gap-[16px]'>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Style Guide </Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Instruction</Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >License</Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Changelog </Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Error  404 </Link>
                    <Link to={'/'} className='text-[16px] font-normal font-dm text-[#F4F4F4]' >Password Protected </Link>
                </div>
            </div>
            {/* ------------ email-part */}
            <div>
                 <h2 className='text-[20px] font-semibold font-robot text-[#fff]'>Subscribe </h2>
                 <div className='w-[433px] rounded-[40px] mt-[20px]  bg-[#fff]'>
                    <input className='w-[60%] border-none outline-none text-[18px] font-normal font-dm text-main py-[22px] pl-[23px]' type="email" placeholder='Enter your email here' />
                    <button className='w-[118px] bg-main py-[12px] text-[18px] font-normal font-dm text-[#fff] ml-[40px] rounded-[20px]'>Subscribe</button>
                 </div>

            </div>


            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Footer
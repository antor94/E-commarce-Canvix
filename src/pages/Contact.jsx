import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    
    <section id='contact'>
      <div className="container">
        <div id='contact-row' className='flex gap-[205px] pt-[90px] pb-[103px] '>   
          {/* ----------- left-side */}
          <div>
          <div>
            <h2 className='text-[64px] font-semibold font-robot text-main'>Let’s talk</h2>
            <div className='w-[385px] py-[32px]'><p className='text-[18px] font-normal font-dm text-main'> We collaborate with thousands of creators, 
entrepreneurs and complete legends.</p></div>
          </div>
          <div className='w-[401px] border-t border-b py-[32px] border-[#DFDFDF]'>
            <div className='flex gap-[26px] items-center'>
              <div className='w-[50px] h-[50px] rounded-full bg-main'></div>
              <div>
              <h2 className='text-[20px] font-semibold font-robot text-main'>Our email</h2>
              <p className='text-[16px] font-normal font-dm text-main'>hello@example.com</p>
              </div>
            </div>
                   <div className='flex gap-[26px] my-[20px] items-center'>
              <div className='w-[50px] h-[50px] rounded-full bg-main'></div>
              <div>
              <h2 className='text-[20px] font-semibold font-robot text-main'>Call us</h2>
              <p className='text-[16px] font-normal font-dm text-main'>+123 456 7892</p>
              </div>
            </div>
                   <div className='flex gap-[26px] items-center'>
              <div className='w-[50px] h-[50px] rounded-full bg-main'></div>
              <div>
              <h2 className='text-[20px] font-semibold font-robot text-main'>Find us</h2>
              <p className='text-[16px] font-normal font-dm text-main'>Open Google Maps</p>
              </div>
            </div>
          </div>
{/* ----------- icons */}
          <div className='flex gap-[40px] pt-[18px]'>
            <div><FaFacebookF className='text-[22px]' /></div>
            <div><FaInstagram className='text-[22px]' /></div>
            <div><FaLinkedinIn className='text-[22px]' /></div>

          </div>
          </div>
          {/* ----------- right-side */}
          <div className='bg-[#F4F4F4] w-[795px] rounded-[20px]  py-[44px] flex  justify-center'>
            <div className='w-[715px]'>

              <div className='flex justify-between'>
            <div className='w-[326px] h-[76px]  '><input className='w-[326px] border-b border-[#DFDFDF] outline-none pb-[53px] flex flex-wrap' type="text" placeholder='First name ' /></div>
            <div className='w-[326px] h-[76px]  '><input className='w-[326px] border-b border-[#DFDFDF] outline-none pb-[53px] flex flex-wrap' type="text" placeholder='Last name  ' /></div>

              </div>

              <div className='flex justify-between py-[52px]'>
            <div className='w-[326px] h-[76px]  '><input className='w-[326px] border-b border-[#DFDFDF] outline-none pb-[53px] flex flex-wrap' type="email" placeholder='Email ' /></div>

            <div className='w-[326px] h-[76px]  '><input className='w-[326px] border-b border-[#DFDFDF] outline-none pb-[53px] flex flex-wrap' type="number" placeholder='Phone' /></div>
              </div>

              <textarea className='w-[715px] outline-none border-b border-[#DFDFDF]' name="Message " id="Message ">Message </textarea>
              <button className='w-[137px] rounded-[23px] bg-main text-[18px] font-normal font-dm text-[#FBFBFB] py-[12px] mt-[52px]'>Submit Now </button>

          </div>

            </div>
        </div>
      </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Contact
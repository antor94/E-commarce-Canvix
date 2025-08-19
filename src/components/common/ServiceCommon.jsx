import React from 'react'
import { LuPencil } from "react-icons/lu";

const ServiceCommon = () => {
  return (
    <>
    
    
    <div className='w-[462px] h-[368px] pl-[45px] py-[45px] hover:bg-main hover:text-[#F4F4F4] duration-[.4s] bg-[#F4F4F4] rounded-[20px]'>
        <div className='w-[80px] h-[80px] rounded-full hover:bg-[#F4F4F4] hover:text-black bg-[#000] flex justify-center items-center'><LuPencil className='text-[#fff]' /></div>
        <div>
            <div className='pt-[62px] pb-[15px]'>
            <h2 className='text-[25px] font-semibold font-robot text-main '>Content Marketing </h2>

            </div>
            <div className='w-[332px]'><p className='text-[18px] font-normal font-dm '>Our team creates engaging and shareable content that resonates with your audience, drives organic traffic</p></div>
        </div>

    </div>
    
    
    
    </>
  )
}

export default ServiceCommon
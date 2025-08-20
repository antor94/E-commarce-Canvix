import React from 'react'
import { Link } from 'react-router'

const Breadcrum = ({breadLink , breadContent}) => {
  return (
    <div className='bg-main rounded-[20px]'>
        <Link className='text-[77px]  py-[130px] flex justify-center font-bold font-robot text-[#FBFBFB]' to={breadLink} >{breadContent}</Link>

    </div>
  )
}

export default Breadcrum
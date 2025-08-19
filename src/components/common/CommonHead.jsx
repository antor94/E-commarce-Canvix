import React from 'react'

const CommonHead = ({comh2 , comp}) => {
  return (
    <>
    
    <div className='text-center'>
        <p className='text-[30px] font-semibold font-robot text-[#64CCC5]'>{comp} </p>
        <div className='flex justify-center pt-[24px]'>

        <div className='w-[695px] text-center'><h2 className='text-[64px] font-semibold font-robot text-main' >{comh2}</h2></div>
        </div>
    </div>
    
    </>
  )
}

export default CommonHead
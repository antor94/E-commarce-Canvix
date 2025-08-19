import React from 'react'
import proimg from '../../assets/images/img1.png'

const ShowcaseCoomon = ({showimg , showh2, showp}) => {
  return (
    <div className=''>

        <div className='w-[663px] h-[450px]'><img src={showimg} alt="show-img" /></div>
        <div className='pt-[16px]'>
            <h2 className='text-[30px] font-semibold font-robot text-main'>{showh2}</h2>
            <p className='text-[18px] font-normal font-dm text-main'>{showp}</p>
        </div>
    </div>
  )
}

export default ShowcaseCoomon
import React from 'react'


const Slider = () => {



  return (
    <>
    
    <section id='slider' className='pb-[111px]'>
        <div className="container">
            <div id='slider-row' className='bg-[#F4F4F4] rounded-[20px] text-center py-[45px]'>

                <div>

                {/* ------------ images */}
                <div className='flex justify-center'>
                <div className='w-[150px] h-[150px] rounded-full bg-black flex justify-center items-center'><img src="#" alt="slider-img" /></div>

                </div>
                {/* ------------- description */}
                <div className='w-[1313px] text-center py-[35px]'><p className='text-[25px] font-bold font-robot text-main '  >“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”</p></div>
                        

                        {/* ------- details */}
                        <div>
                            <h2 className='text-[20px] font-semibold font-robot text-main'>Jacqueline Miller</h2>
                            <p className='text-[16px] font-normal font-dm text-main'>CEO of an eduport</p>
                        </div>
            </div>
                </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Slider
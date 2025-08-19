import React from 'react'
import CommonHead from './common/CommonHead'

const Process = () => {
  return (
    <>
    
    
    <section id='process' className='pt-[110px] pb-[96px]'>
        <div className="container">
            <div><CommonHead comp={'Process'} comh2={'Process that moves things forward'} /></div>
            <div id='process-row' className='flex gap-[100px] items-center justify-center pt-[84px]'>

                {/* ----------- cart details */}
          
                    <div className='w-[228px] '>
                        <div className='flex items-center justify-end gap-[29px]'>

                        <div className='w-[82px] h-[82px] rounded-full bg-main'></div>
                        <h2 className='text-[30px] font-semibold font-robot text-main'>Ideate</h2>
                        </div>
                        <div className='w-[181px] pt-[32px]'><p className='text-[16px] font-normal font-dm text-main'>The ideation process is a crucial phase in the design process where creative thinking and brainstorming</p></div>
                    </div>

                      <div className='w-[275px] '>
                        <div className='flex items-center justify-end gap-[29px]'>
                        <div className='w-[82px] h-[82px] rounded-full bg-main'></div>
                        <h2 className='text-[30px] font-semibold font-robot text-main'>Reserach</h2>
                        </div>
                        <div className='w-[199px] pt-[32px]'><p className='text-[16px] font-normal font-dm text-main'>Research is a critical component of the design process, helping designers understand the problem</p></div>
                    </div>

                      <div className='w-[235px] '>
                        <div className='flex items-center justify-end gap-[29px]'>

                        <div className='w-[82px] h-[82px] rounded-full bg-main'></div>
                        <h2 className='text-[30px] font-semibold font-robot text-main'>Create</h2>
                        </div>
                        <div className='w-[185px] pt-[32px]'><p className='text-[16px] font-normal font-dm text-main'>Designing a process involves several key steps to ensure clarity, efficiency, successful
implementation</p></div>
                    </div>

                      <div className='w-[228px] '>
                        <div className='flex items-center justify-end gap-[29px]'>

                        <div className='w-[82px] h-[82px] rounded-full bg-main'></div>
                        <h2 className='text-[30px] font-semibold font-robot text-main'>Ideate</h2>
                        </div>
                        <div className='w-[201px] pt-[32px]'><p className='text-[16px] font-normal font-dm text-main'>Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements</p></div>
                    </div>




            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Process
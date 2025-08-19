import React from 'react'
import CommonHead from './common/CommonHead'
import ServiceCommon from './common/ServiceCommon'

const Services = () => {
  return (
    <>
    
    
    <section id='services' className='pt-[100px] pb-[93px]'>
        <div className='text-center'><CommonHead comp={'Our Services '} comh2={'High-impact services for your business'} /></div>
        <div className="container">
            <div id='service-row' className='pt-[80px] pb-[116px]'>
                <ServiceCommon />

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Services
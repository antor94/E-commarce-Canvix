import React from 'react'

const ProjectCommon = ({projectH2 , projectDis}) => {
  return (
    <>
    
    
    
    <div className='bg-black rounded-[15px]  text-center'>
        <div className='flex flex-col gap-[11px] py-[20px]'>
            <h2 className='text-[20px] font-semibold font-robot text-white'>{projectH2}</h2>
            <p className='text-[18px] font-normal font-dm text-white'>{projectDis}</p>
        </div>

    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ProjectCommon
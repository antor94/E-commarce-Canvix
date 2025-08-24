import React from 'react'
import projectImg from '../assets/images/projectbanner.png'
import ProjectCommon from '../components/common/ProjectCommon'
import projectimg1 from '../assets/images/project1.png'
import projectimg2 from '../assets/images/project2.png'
import projectimg3 from '../assets/images/project3.png'
import CommonHead from '../components/common/CommonHead'
import ShowcaseCoomon from '../components/common/ShowcaseCoomon'
import showImg1 from '../assets/images/Rectangle1.png'
import showImg2 from '../assets/images/Rectangle2.png'
import showImg3 from '../assets/images/Rectangle3.png'


const Project = () => {
  return (
    <>
    

    <section id='project' className='pt-[26px] pb-[100px]'>
        <div className="container">
            <div id='project-row'>

{/* --------- images-heading */}

                <div className=' pb-[154px] relative'>
                <div className='flex justify-center'><img src={projectImg} alt="project-img" /></div>
                <div className='flex gap-[45px] absolute top-[533px] left-[145px]'>
                <div className='w-[188px] rounded-[15px]'> <ProjectCommon projectDis={'Cloud solution'} projectH2={'Category : '} /></div>
                <div className='w-[253px] rounded-[15px]'> <ProjectCommon projectDis={'BrightMedia Solutions  '} projectH2={'Client '} /></div>
                <div className='w-[203px] rounded-[15px]'> <ProjectCommon projectDis={'August 23, 2023'} projectH2={'Date :'} /></div>
                <div className='w-[279px] rounded-[15px]'> <ProjectCommon projectDis={'489 Depot Road Midland'} projectH2={'Location:'} /></div>
                </div>
                </div>


                {/* -------------- description */}
                <div>
                    <h2 className='text-[20px] font-semibold font-robot text-main'> 01. The Challenge</h2>
                    <div className='pt-[24px]'><p className='text-[18px] font-normal font-dm text-main'>When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p></div>
                </div>

                <div className='py-[48px]'>
                    <h2 className='text-[20px] font-semibold font-robot text-main'> 01. The Challenge</h2>
                    <div className='pt-[24px] pb-[32px]'><p className='text-[18px] font-normal font-dm text-main'>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </div> 
                    <span className='w-[526px] inline-block text-[18px] font-normal font-dm text-main'>One who avoids a pain that produces no resultant pleasure.
laborious physical exercise.
One who avoids a pain that produces no resultant
which of us ever undertakes laborious
Avoids pleasure itself, because it is.</span>
                    
                </div>

                <div>
                    <h2 className='text-[20px] font-semibold font-robot text-main'>03. The Result</h2>
                    <div className='pt-[24px] pb-[32px]'><p className='text-[18px] font-normal font-dm text-main'>Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" </p>
                    </div> 
                    <p className=' text-[18px] font-normal font-dm text-main'>One who avoids a pain that produces no resultant pleasure.
When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.      </p>
                    
                </div>

                {/* -------- images */}
                <div className='flex gap-[74px] justify-center pt-[80px] pb-[100px]'>
                    <div className='w-[417px]'><img src={projectimg1} alt="project-img" /></div>
                    <div className='w-[417px]'><img src={projectimg2} alt="project-img" /></div>
                    <div className='w-[417px]'><img src={projectimg3} alt="project-img" /></div>
                </div>

{/* -------------- live project */}
    <div><CommonHead comh2={'Recent Projects '} /></div>
<div className='flex gap-[47px] justify-center pt-[80px]'>
    <div className='w-[442px]'><ShowcaseCoomon showimg={showImg1} showh2={'Web UI design'} showp={'Creative  UI design'} /> </div>
    <div className='w-[442px]'>
    <ShowcaseCoomon showimg={showImg2} showh2={'To design Digital Strategy'} showp={'Social Media Marketing'} />

    </div>
    <div className='w-[442px]'>
    <ShowcaseCoomon showimg={showImg3} showh2={'UI Design'} showp={'Creative Rebranding for logo'} />

    </div>

    </div>



            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Project
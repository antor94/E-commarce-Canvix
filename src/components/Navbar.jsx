import React from 'react'
import mainlogo from '../assets/images/mainlogo.png'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    
    <section id='navbar' className='pt-[27px]'>
        <div className="container">
            <div id='navbar-row' className='flex justify-between items-center'>

                {/* --------- logo  */}

                <Link to={'/'}><img className='w-[154px]' src={mainlogo} alt="main-logo" /></Link>

                {/* ----------- nav-items */}
                <div>
                    <ul className='flex gap-[35px] items-center'>
                        <li ><Link to={'/'} className='text-[20px] font-normal font-dm text-main'  >Home</Link></li>
                        <li ><Link to={'/'} className='text-[20px] font-normal font-dm text-main'  >About</Link></li>
                        <li ><Link to={'/'} className='text-[20px] font-normal font-dm text-main'  >Contact Us</Link></li>
                    </ul>
                </div>
                {/* ------------- button */}
                <button className='w-[140px] bg-[#0C0C0C] py-[12px] text-[18px] font-normal font-dm text-[#fff] rounded-[23px]'> Get in touch</button>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Navbar
import React, { useState } from "react";
import mainlogo from "../assets/images/mainlogo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <section id="navbar" className="pt-[27px]">
        <div className="container">
          <div id="navbar-row" className="flex justify-between items-center">
            {/* --------- logo  */}
            <Link to={"/"}> <img  className="w-[120px] sm:w-[154px]" src={mainlogo} alt="main-logo"/> </Link>
            {/* ----------- nav-items */}
            <div className="hidden sm:block">
              <ul className="flex gap-[35px] items-center">
                <li> <Link to={"/"}  className="text-[18px] lg:text-[20px] font-normal font-dm text-main">Home</Link> </li>
                <li> <Link to={"/about"}   className="text-[18px] lg:text-[20px] font-normal font-dm text-main" >  About </Link>  </li>
                <li> <Link to={"/contact"}  className="text-[18px] lg:text-[20px] font-normal font-dm text-main" >  Contact Us  </Link> </li>
              </ul>
            </div>
            {/* ------------- button */}
            <div className="hidden sm:block">
              <button className="w-[110px] lg:w-[140px] bg-[#0C0C0C] py-[10px] lg:py-[12px] text-[16px] lg:text-[18px] font-normal font-dm text-[#fff] rounded-[23px]">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

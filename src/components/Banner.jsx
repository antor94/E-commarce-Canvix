import React from "react";
import heroimg from "../assets/images/Hero Section.png";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import bannrborder from "../assets/images/bannerimgborder.png";
import bannrimg from "../assets/images/Ellipse.png";
import ornament from "../assets/images/Ornament.png";

const Banner = () => {
  return (
    <>
      <section
        style={{
          background: `URL(${heroimg})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
        id="banner"
        className="pt-[80px] md:pt-[120px] lg:pt-[162px] relative pb-[60px] md:pb-[90px] lg:pb-[123px]"
      >
        <div className="absolute top-[20px] md:top-[40px] lg:top-[60px] left-0 z-10">
          <img
            src={ornament}
            alt="side-logo"
            className="w-[60px] md:w-[90px] lg:w-auto"  />
        </div>
        <div className="container">
          <div
            id="banner-row"
            className="flex flex-col-reverse lg:flex-row items-center lg:items-start relative" >
            {/* ------------- left-side */}
            <div className="w-full lg:w-1/2 px-4 md:px-[30px] lg:pl-[50px] z-20">
              {/* ------------- heading */}
              <div className="w-[608px]">
                <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold font-robot text-[#fff] leading-tight">
                  Ready to take your{" "}
                  <span className="text-[#64CCC5]">Business Growth</span> to the
                  next level?
                </h1>
              </div>
              <div className="w-full max-w-[550px] pt-[16px] md:pt-[20px] lg:pt-[24px]">
                <p className="text-[15px] md:text-[17px] lg:text-[18px] font-dm font-normal text-[#fff]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
                  massa libero egestas malesuada viverra gravida libero cursus
                  nulla leo pulvinar.
                </p>
              </div>
              {/* ------------- button */}
              <Link to={'/project'} className="w-[248px] py-[11px] mt-[32px] mb-[181px] rounded-[23px] bg-[#fff] text-[20px] font-normal flex justify-center gap-[10px] font-dm text-main">
                <span className="w-[24px] h-[24px]  rounded-full flex justify-center items-center bg-main ">
                  <MdArrowForwardIos className="text-[#fff] text-[14px] md:text-[18px]" />
                </span>
                Start your Free Trial
              </Link>
              <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold font-robot text-[#64CCC5]">
                Trusted by Leading Brands
              </h2>
              <div className="w-[800px] flex flex-wrap items-center gap-[30px] mt-[5px]">
                <Link to={"/"}>  <img src={img1}  alt="img1" className="w-[70px] md:w-[90px] lg:w-auto" /> </Link>
                <Link to={"/"}>   <img  src={img2}  alt="img2"  className="w-[70px] md:w-[90px] lg:w-auto"   /> </Link>
                <Link to={"/"}>  <img src={img3} alt="img3" className="w-[70px] md:w-[90px] lg:w-auto" />  </Link>
                <Link to={"/"}>   <img  src={img4}  alt="img4"   className="w-[70px] md:w-[90px] lg:w-auto"   />  </Link>
              </div>
            </div>
            {/* ------------ right-side */}
            <div className="  flex justify-center items-center  ">    
                <img className="w-[1200px] absolute top-[-200px] left-[450px]"  src={bannrborder}  alt="banner-border" />
                <img className=" w-[550px] absolute top-[20px] left-[820px]" src={bannrimg}   alt="banner-main-img" />
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

import React from "react";
import footerlogo from "../assets/images/footerlogo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <section id="footer" className="bg-[#0C0C0C]">
        <div className="container">
          <div
            id="footer-row"
            className="py-[50px] md:py-[70px] lg:py-[100px] flex flex-col lg:flex-row gap-[40px] md:gap-[60px] lg:gap-0 justify-between"
          >
            {/* --------- logo-side */}
            <div className="flex flex-col items-start lg:items-start">
              <Link to={"/"}>
                <img
                  className="w-[150px] md:w-[180px] lg:w-[200px]"
                  src={footerlogo}
                  alt="footer-logo"
                />
              </Link>
              <div className="w-full max-w-[357px] mt-4">
                <p className="text-[16px] md:text-[17px] lg:text-[18px] font-normal font-dm text-[#fff]">
                  We’re a team of strategic creator and digital innovator,
                  united focus in our pursuit of mastery and joyful.
                </p>
              </div>
            </div>
            {/* ----------- pages-side */}
            <div className="flex flex-col">
              <h2 className="text-[18px] md:text-[19px] lg:text-[20px] font-semibold font-robot text-[#fff]">
                Pages{" "}
              </h2>
              <div className="flex flex-col mt-[18px] md:mt-[20px] lg:mt-[24px] gap-[10px] md:gap-[14px] lg:gap-[16px]">
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Home
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Home 2
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  About
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Conatct Us{" "}
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Portfolio
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Portfolio Single
                </Link>
              </div>
            </div>
            {/* ----------- Utility-side */}
            <div className="flex flex-col">
              <h2 className="text-[18px] md:text-[19px] lg:text-[20px] font-semibold font-robot text-[#fff]">
                Utility Pages{" "}
              </h2>
              <div className="flex flex-col mt-[18px] md:mt-[20px] lg:mt-[24px] gap-[10px] md:gap-[14px] lg:gap-[16px]">
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Style Guide{" "}
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Instruction
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  License
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Changelog{" "}
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Error 404{" "}
                </Link>
                <Link
                  to={"/"}
                  className="text-[15px] md:text-[16px] font-normal font-dm text-[#F4F4F4]"
                >
                  Password Protected{" "}
                </Link>
              </div>
            </div>
            {/* ------------ email-part */}
            <div className="flex flex-col items-start lg:items-start w-full max-w-[433px]">
              <h2 className="text-[18px] md:text-[19px] lg:text-[20px] font-semibold font-robot text-[#fff]">
                Subscribe{" "}
              </h2>
              <div className="w-full rounded-[30px] md:rounded-[35px] lg:rounded-[40px] mt-[14px] md:mt-[18px] lg:mt-[20px] bg-[#fff] flex flex-col md:flex-row items-stretch md:items-center">
                <input
                  className="w-full md:w-[60%] border-none outline-none text-[16px] md:text-[17px] lg:text-[18px] font-normal font-dm text-main py-[14px] md:py-[18px] lg:py-[22px] pl-[16px] md:pl-[20px] lg:pl-[23px] rounded-t-[30px] md:rounded-t-[0] md:rounded-l-[30px] lg:rounded-l-[40px]"
                  type="email"
                  placeholder="Enter your email here"
                />
                <button className="w-full md:w-[118px] bg-main py-[10px] md:py-[12px] text-[16px] md:text-[17px] lg:text-[18px] font-normal font-dm text-[#fff] md:ml-[20px] lg:ml-[40px] rounded-b-[30px] md:rounded-b-[0] md:rounded-r-[30px] lg:rounded-r-[20px] mt-2 md:mt-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

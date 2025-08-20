import React from "react";
import aboutimg from "../assets/images/about-img.png";
import { MdArrowForwardIos } from "react-icons/md";

const AboutPage = () => {
  return (
    <>
      <section id="about" className="bg-main">
        <div className="container">
          <div
            id="about-row"
            className="py-[50px] md:py-[70px] lg:py-[100px] flex flex-col lg:flex-row gap-[40px] md:gap-[50px] lg:gap-[70px] items-center"
          >
            {/* ------------ left-images */}
            <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[540px] flex-shrink-0 flex justify-center">
              <img
                src={aboutimg}
                alt="about-img"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* ------------ right-side */}
            <div className="w-full max-w-[700px]">
              <p className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-robot text-[#64CCC5]">
                About us{" "}
              </p>
              <div className="w-full max-w-[586px] my-[18px] md:my-[22px] lg:my-[25px]">
                <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold font-robot text-[#FBFBFB] leading-tight">
                  The core mission behind all our work
                </h2>
              </div>
              <div className="w-full max-w-[532px]">
                <p className="text-[15px] md:text-[17px] lg:text-[18px] font-normal font-dm text-[#F4F4F4]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit metus
                  ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt
                  id.
                </p>
              </div>
              {/* -------------- rating */}
              <div className="flex flex-col sm:flex-row gap-[20px] md:gap-[40px] lg:gap-[60px] pt-[18px] md:pt-[22px] lg:pt-[25px] pb-[18px] md:pb-[26px] lg:pb-[32px]">
                <div className="w-[120px] md:w-[147px]">
                  <h2 className="text-[32px] md:text-[38px] lg:text-[45px] font-semibold font-robot text-[#64CCC5]">
                    330 <span>+</span>
                  </h2>
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal font-dm text-[#F4F4F4]">
                    Companies helped
                  </p>
                </div>
                <div className="w-[120px] md:w-[147px]">
                  <h2 className="text-[32px] md:text-[38px] lg:text-[45px] font-semibold font-robot text-[#64CCC5]">
                    230 <span>+</span>
                  </h2>
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal font-dm text-[#F4F4F4]">
                    Revenue generated
                  </p>
                </div>
              </div>
              {/* ---------- button */}
              <button className="w-full max-w-[248px] mt-[22px] md:mt-[28px] lg:mt-[32px] mb-[40px] md:mb-[100px] lg:mb-[181px] rounded-[23px] bg-[#fff] text-[16px] md:text-[18px] lg:text-[20px] font-normal flex justify-center gap-[10px] font-dm text-main py-[10px] md:py-[11px]">
                <span className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] rounded-full flex justify-center items-center bg-main ">
                  <MdArrowForwardIos className="text-[#fff] text-[14px] md:text-[18px]" />
                </span>
                Start your Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

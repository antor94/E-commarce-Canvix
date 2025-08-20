import React from "react";

const Slider = () => {
  return (
    <>
      <section id="slider" className="pb-[50px] md:pb-[80px] lg:pb-[111px]">
        <div className="container">
          <div
            id="slider-row"
            className="bg-[#F4F4F4] rounded-[20px] text-center py-[24px] md:py-[35px] lg:py-[45px]"
          >
            <div>
              {/* ------------ images */}
              <div className="flex justify-center">
                <div className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] rounded-full bg-black flex justify-center items-center">
                  <img
                    src="#"
                    alt="slider-img"
                    className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-auto lg:h-auto object-contain"
                  />
                </div>
              </div>
              {/* ------------- description */}
              <div className="w-full max-w-[95vw] md:max-w-[700px] lg:w-[1313px] mx-auto text-center py-[18px] md:py-[25px] lg:py-[35px]">
                <p className="text-[16px] md:text-[20px] lg:text-[25px] font-bold font-robot text-main">
                  “Be genuine in your assessment, and provide constructive
                  feedback to benefit both potential customers and the company
                  providing the product or service.”
                </p>
              </div>
              {/* ------- details */}
              <div>
                <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold font-robot text-main">
                  Jacqueline Miller
                </h2>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal font-dm text-main">
                  CEO of an eduport
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;

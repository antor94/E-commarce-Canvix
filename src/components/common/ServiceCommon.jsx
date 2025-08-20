import React from "react";
import { LuPencil } from "react-icons/lu";

const ServiceCommon = () => {
  return (
    <>
      <div className="w-full max-w-[462px] h-auto min-h-[260px] md:h-[368px] px-6 md:pl-[45px] py-8 md:py-[45px] hover:bg-main hover:text-[#F4F4F4] duration-300 bg-[#F4F4F4] rounded-[20px] flex flex-col justify-between mx-auto">
        <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full hover:bg-[#F4F4F4] hover:text-black bg-[#000] flex justify-center items-center mb-6">
          <LuPencil className="text-[#fff] text-xl md:text-2xl" />
        </div>
        <div>
          <div className="pt-6 md:pt-[62px] pb-3 md:pb-[15px]">
            <h2 className="text-[20px] md:text-[25px] font-semibold font-robot text-main">
              Content Marketing
            </h2>
          </div>
          <div className="w-full max-w-[332px]">
            <p className="text-[16px] md:text-[18px] font-normal font-dm">
              Our team creates engaging and shareable content that resonates
              with your audience, drives organic traffic
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCommon;

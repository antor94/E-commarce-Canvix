import React from "react";
import { LuPencil } from "react-icons/lu";

const ServiceCommon = ({serviceH2 , serviceP , serviceLogo}) => {
  return (
    <>
    <div className=" group"> 

      <div className="w-[422px] bg-[#F4F4F4] rounded-[20px] py-[45px] pl-[45px] group-hover:bg-main duration-[.3s] group-hover:text-white">
        <div className="w-[60px] h-[60px]  rounded-full  bg-[#000] flex justify-center items-center ">  {serviceLogo} </div>
        <div>
          <div className="pt-[62px]">
            <h2 className="text-[20px] md:text-[25px] font-semibold font-robot text-main">{serviceH2}</h2>
          </div>
          <div className="w-full max-w-[332px]">
            <p className="text-[16px] md:text-[18px] font-normal font-dm">{serviceP}</p>
          </div>
        </div>
    </div>
      </div>
    </>
  );
};

export default ServiceCommon;

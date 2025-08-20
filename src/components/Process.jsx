import React from "react";
import CommonHead from "./common/CommonHead";

const Process = () => {
  return (
    <>
      <section
        id="process"
        className="pt-[60px] md:pt-[80px] lg:pt-[110px] pb-[50px] md:pb-[70px] lg:pb-[96px]"
      >
        <div className="container">
          <div>
            <CommonHead
              comp={"Process"}
              comh2={"Process that moves things forward"}
            />
          </div>
          <div
            id="process-row"
            className="flex flex-col lg:flex-row gap-[40px] md:gap-[60px] lg:gap-[100px] items-center justify-center pt-[40px] md:pt-[60px] lg:pt-[84px]"
          >
            {/* ----------- cart details */}
            <div className="w-full max-w-[300px] lg:w-[228px]">
              <div className="flex items-center justify-end gap-[18px] md:gap-[22px] lg:gap-[29px]">
                <div className="w-[60px] md:w-[70px] lg:w-[82px] h-[60px] md:h-[70px] lg:h-[82px] rounded-full bg-main"></div>
                <h2 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-robot text-main">
                  Ideate
                </h2>
              </div>
              <div className="w-full max-w-[220px] lg:w-[181px] pt-[18px] md:pt-[24px] lg:pt-[32px]">
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal font-dm text-main">
                  The ideation process is a crucial phase in the design process
                  where creative thinking and brainstorming
                </p>
              </div>
            </div>
            <div className="w-full max-w-[320px] lg:w-[275px]">
              <div className="flex items-center justify-end gap-[18px] md:gap-[22px] lg:gap-[29px]">
                <div className="w-[60px] md:w-[70px] lg:w-[82px] h-[60px] md:h-[70px] lg:h-[82px] rounded-full bg-main"></div>
                <h2 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-robot text-main">
                  Reserach
                </h2>
              </div>
              <div className="w-full max-w-[240px] lg:w-[199px] pt-[18px] md:pt-[24px] lg:pt-[32px]">
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal font-dm text-main">
                  Research is a critical component of the design process,
                  helping designers understand the problem
                </p>
              </div>
            </div>
            <div className="w-full max-w-[260px] lg:w-[235px]">
              <div className="flex items-center justify-end gap-[18px] md:gap-[22px] lg:gap-[29px]">
                <div className="w-[60px] md:w-[70px] lg:w-[82px] h-[60px] md:h-[70px] lg:h-[82px] rounded-full bg-main"></div>
                <h2 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-robot text-main">
                  Create
                </h2>
              </div>
              <div className="w-full max-w-[200px] lg:w-[185px] pt-[18px] md:pt-[24px] lg:pt-[32px]">
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal font-dm text-main">
                  Designing a process involves several key steps to ensure
                  clarity, efficiency, successful implementation
                </p>
              </div>
            </div>
            <div className="w-full max-w-[300px] lg:w-[228px]">
              <div className="flex items-center justify-end gap-[18px] md:gap-[22px] lg:gap-[29px]">
                <div className="w-[60px] md:w-[70px] lg:w-[82px] h-[60px] md:h-[70px] lg:h-[82px] rounded-full bg-main"></div>
                <h2 className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-robot text-main">
                  Ideate
                </h2>
              </div>
              <div className="w-full max-w-[220px] lg:w-[201px] pt-[18px] md:pt-[24px] lg:pt-[32px]">
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal font-dm text-main">
                  Testing is a crucial phase in the design process to ensure
                  that the product or system meets the specified requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;

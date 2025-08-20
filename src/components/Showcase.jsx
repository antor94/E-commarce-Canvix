import React from "react";
import proimg1 from "../assets/images/proimg4.png";
import proimg2 from "../assets/images/proimg1.png";
import proimg3 from "../assets/images/proimg2.png";
import proimg4 from "../assets/images/proimg3.png";
import CommonHead from "./common/CommonHead";
import ShowcaseCoomon from "./common/ShowcaseCoomon";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router";

const Showcase = () => {
  return (
    <>
      <section id="Showcase" className="pb-[50px] md:pb-[70px] lg:pb-[103px]">
        <div className="container">
          <div>
            {" "}
            <CommonHead comh2={"Recent Showcase"} />
          </div>
          <div
            id="Showcase-row"
            className="flex flex-col lg:flex-row gap-[30px] md:gap-[50px] lg:gap-[75px] justify-center"
          >
            <div className="mt-[40px] md:mt-[60px] lg:mt-[85px]">
              <ShowcaseCoomon
                showimg={proimg1}
                showh2={"Web UI design"}
                showp={"Creative  UI design"}
              />
              <div className="pt-[40px] md:pt-[60px] lg:pt-[88px]">
                <ShowcaseCoomon
                  showimg={proimg2}
                  showh2={"To design Digital Strategy"}
                  showp={"Social Media Marketing"}
                />
              </div>
            </div>
            <div className="mt-[60px] md:mt-[100px] lg:mt-[151px] flex flex-col justify-end">
              <div className="flex justify-end">
                <Link
                  to={"portfolio"}
                  className="w-full max-w-[248px] rounded-[23px] bg-main text-[16px] md:text-[18px] lg:text-[20px] font-normal flex justify-center gap-[10px] font-dm text-[#fff] py-[10px] md:py-[11px]"
                >
                  <span className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] rounded-full flex justify-center items-center bg-[#fff] ">
                    <MdArrowForwardIos className="text-[#000]" />
                  </span>
                  Start your Free Trial
                </Link>
              </div>
              <div className="pt-[30px] md:pt-[40px] lg:pt-[51px]">
                <ShowcaseCoomon
                  showimg={proimg3}
                  showh2={"UI Design"}
                  showp={"Creative Rebranding for logo"}
                />
                <div className="pt-[40px] md:pt-[60px] lg:pt-[93px]">
                  <ShowcaseCoomon
                    showimg={proimg4}
                    showh2={"UI Design"}
                    showp={"Creative Rebranding for logo"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;

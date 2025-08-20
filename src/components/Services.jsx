import React from "react";
import CommonHead from "./common/CommonHead";
import ServiceCommon from "./common/ServiceCommon";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[50px] md:pb-[70px] lg:pb-[93px]"
      >
        <div className="text-center">
          <CommonHead
            comp={"Our Services "}
            comh2={"High-impact services for your business"}
          />
        </div>
        <div className="container">
          <div
            id="service-row"
            className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[60px] md:pb-[80px] lg:pb-[116px] flex flex-col md:flex-row md:flex-wrap justify-center gap-8"
          >
            <ServiceCommon />
            {/* Add more <ServiceCommon /> here for more services, layout will remain responsive */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

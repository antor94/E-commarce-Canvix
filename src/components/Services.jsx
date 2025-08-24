import React from "react";
import CommonHead from "./common/CommonHead";
import ServiceCommon from "./common/ServiceCommon";

const Services = () => {
  return (
    <>
      <section id="services" className="py-[100px]" >
        <div className="text-center">
          <CommonHead comp={"Our Services "} comh2={"High-impact services for your business"} />
        </div>
        <div className="container">
          <div id="service-row"  className="flex flex-wrap justify-center gap-[66px]" >
            <ServiceCommon serviceH2={'Content Marketing '} serviceP={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'}  />
            <ServiceCommon serviceH2={'Graphic Design '} serviceP={'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.'}  />
            <ServiceCommon serviceH2={'Digital Marketing '} serviceP={'Elevate your brands online presence with our data-driven digital marketing strategies. From SEO and content marketing'}  />
            <ServiceCommon serviceH2={'Web Design'} serviceP={'We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.'} />
            <ServiceCommon serviceH2={'IT Consulting'} serviceP={'IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services'} />
            <ServiceCommon serviceH2={'Brand Identity '} serviceP={'It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.'} />

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

import React from "react";
import ServiceHeader from "./ServiceHeader";
import { servicesCard } from "@/db/data";
import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <section className="bg-[#000000]">
      <div className="services">
        <div className="container max-md:relative z-[1]">
          <div className="services-header text-center">
            <ServiceHeader />
          </div>
          <div className="services-inner pt-4 md:pt-12">
            <div className="service-cards flex flex-wrap justify-center gap-7 items-center">
              {servicesCard.map((item)=>{
                return <ServiceCards item={item} key={item.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

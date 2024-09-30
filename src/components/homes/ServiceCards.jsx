import React from "react";
import Image from "next/image";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const ServiceCards = ({ item }) => {
  return (
    <div className="card">
      <div className="card-img-top h-[140px]">
        <Image src={item.image} width={132} height={136} alt="" />
      </div>
      <h5 className={`${pacifico.className} card-title`}>{item.title}</h5>
      <p className="card-text h-[110px] flex justify-center items-center px-3">{item.desc}</p>
    </div>
  );
};

export default ServiceCards;

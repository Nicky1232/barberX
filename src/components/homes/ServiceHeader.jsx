import React from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import khur from "../../assets/Home/service-khur.png";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const ServiceHeader = () => {
  return (
    <div className={pacifico.className}>
      <h2 className="title">УСЛУГИ</h2>
      <p className={`${pacifico.className} subtitle`}>
        Фризьорство с класа и стил
      </p>
      <div className="w-full flex justify-center items-center pt-8 max-md:hidden">
        <Image
          src={khur}
          width={66}
          height={63}
          alt="khur"
        />
      </div>
    </div>
  );
};

export default ServiceHeader;

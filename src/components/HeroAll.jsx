import React from "react";
import { Oswald } from "next/font/google";
import "@/styles/home/home.scss";
import Image from "next/image";
import mobileFog from "../assets/about/mobile-hero-fog.png";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });

const HeroAll = ({ cls, title }) => {
  console.log(title);
  return (
    <section
      className={`${cls === "about-hero" ? "pt-0" : "pt-6"} md:h-screen`}
    >
      <div className={`hero ${cls} flex justify-center items-center relative`}>
        <div className="md:hidden absolute bottom-0 w-full">
          <Image src={mobileFog} alt="fog" width={768} height={247} />
        </div>
        <div className="rgba-bg">
          <div className="container">
            <div className="hero-content">
              <h1 className={`${oswald.className} hero-title`}>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAll;

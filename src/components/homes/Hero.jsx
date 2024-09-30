import React from "react";
import { Oswald } from "next/font/google";
import "@/styles/home/home.scss";
import Image from "next/image";
import heroFog from "../../assets/Home/mobile-hero.png"

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });

const Hero = ({ cls }) => {
  return (
    <section className="pt-10 md:h-screen max-md:h-[375px] max-md:relative">
      <div className={`home-hero ${cls}`}>
        <Image className="md:hidden absolute bottom-0 w-full" src={heroFog} alt="fog" />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Fade O&apos;clock Barbershop</h1>
            {!cls && (
              <p className="hero-para">
                Подарете си модерно мъжко подстригване и премиум барбър услуги в
                Ring Mall
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

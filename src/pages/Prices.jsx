import HeroAll from "@/components/HeroAll";
import Navbar from "@/components/Navbar";
import React from "react";
import "../styles/about/about.scss";
import "../styles/prices/prices.scss";
import { HairCutCategory, PriceOpen } from "@/components/prices";
import { Open } from "@/components/homes";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import OnlineBooking from "@/components/OnlineBooking";

const Prices = () => {
  return (
    <div>
      <Navbar eLogo={"eLogo"} />
      <div className="price-top relative">
        <div className="kusa h-[1634px]"></div>
        <HeroAll cls={"prices-hero"} title={"ЦЕНИ"} />
        <OnlineBooking />
        <HairCutCategory />
      </div>
      <Open cls={"price-open"} />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Prices;

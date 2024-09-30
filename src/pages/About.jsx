import Navbar from "@/components/Navbar";
import React from "react";
import "../styles/about/about.scss";
import HeroAll from "@/components/HeroAll";
import { HairStyleGallery, Mission, Passion, Review } from "@/components/abouts";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import OnlineBooking from "@/components/OnlineBooking";

const About = () => {
  return (
    <div>
      <Navbar eLogo={"eLogo"} />
      <HeroAll cls={"about-hero"} title={"Кой съм аз ?"} />
      <OnlineBooking />
      <Passion />
      <Mission />
      <Review />
      <HairStyleGallery />
      <Footer mobile={"footer-mobile"} />
      <FooterBottom />
    </div>
  );
};

export default About;

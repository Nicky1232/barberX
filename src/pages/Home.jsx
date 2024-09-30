import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import Navbar from "@/components/Navbar";
import {
  Expert,
  Hero,
  Open,
  Services,
  Testimonial,
  Welcome,
} from "@/components/homes";
import Map from "../components/homes/Map";
import React from "react";
import { Alumni_Sans } from "next/font/google";
import OnlineBooking from "@/components/OnlineBooking";

const alumni = Alumni_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Home = () => {
  return (
    <div className={alumni.className}>
      <Navbar eLogo={"eLogo"} />
      <Hero />
      <OnlineBooking />
      <Welcome />
      <Services />
      <Open cls={"home-open"} />
      <Expert />
      <Testimonial />
      <Map />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Home;

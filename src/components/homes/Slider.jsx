"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Alegreya_Sans_SC, Alumni_Sans } from "next/font/google";
import { MdStar } from "react-icons/md";
import man from "../../assets/Home/testimonial-image.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import { carouselItemsAll } from "@/db/data";

const alegreya = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["400"] });
const alumni = Alumni_Sans({ subsets: ["latin"], weight: [ "900"] });

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    items: 1,
  };

  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={4}
      animateIn={true}
      items={1}
      {...options}
    >
      {carouselItemsAll.map((item, index) => {
        return (
          <div key={`slider-item-${index}`} className="reviews flex items-center">
            <div className="reviews-image md:mr-10">
              <Image src={item.image} width={267} height={267} alt="man" />
            </div>
            <div className="reviews-content">
              <h4
                className={`${alegreya.className} reviews-head `}
              >
                {item.title}
              </h4>
              <p className="reviews-desc">{item.desc}</p>
              <div className="reviews-footer flex justify-between items-center pt-7">
                <div className="star flex text-[40px] space-x-[-5px] max-md:text-[30px]">
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </div>
                <div className={`${alegreya.className} reviews-footer-right`}>
                  <h5>{item.name}</h5>
                  <p>{item.passion}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </OwlCarousel>
  );
};
export default Slider;

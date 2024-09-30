import React from "react";
import { Alegreya_Sans_SC } from "next/font/google";
import Slider from "./Slider";
import shape from "../../assets/Home/reviews-bg.png";
import Image from "next/image";

const alegreya = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["400"] });

const Testimonial = () => {
  return (
    <section className="bg-[#000000]">

      <div className="testimonial relative">
        <div className="testimonial-kuasa-shape absolute bottom-[-5px] w-full">
          <Image className="w-full" src={shape} width={1640} height={900} alt="kuasa" />
        </div>
        <div className="container relative z-10">
          <div className="testimonial-header">
            <p className={`${alegreya.className} testimonial-text`}>
              Модерната прическа е един от най-ефективните начини да изразите
              себе си и своята индивидуалност
            </p>
          </div>
          <div className="testimonial-inner pb-40">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

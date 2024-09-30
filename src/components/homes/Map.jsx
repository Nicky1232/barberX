"use client";

import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import logo from "../../assets/logo.png";

const Map = ({ elogo }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 1980,
    height: 1200,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    handleResize();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <div className="relative map-logo w-full">
      {/* {elogo && (
        <Image
          src={logo}
          width={236}
          height={236}
          alt="logo"
          className="absolute"
        />
      )} */}
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.6148427219432!2d23.350514146407757!3d42.62498942719287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa81ac7520df8d%3A0xdcf0ecdc271321e2!2sBarber%20Ring%20Mall!5e0!3m2!1sbg!2sbg!4v1704653419094!5m2!1sbg!2sbg"
        width={windowDimensions.width}
        height="650"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <Image
        className="w-full max-w-[1600px] m-auto h-[400px] object-cover"
        src={map}
        width={1920}
        height={1080}
        alt="map-location"
        quality={100}
      /> */}
    </div>
  );
};

export default Map;

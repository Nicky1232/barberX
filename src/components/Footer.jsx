import Image from "next/image";
import React from "react";
import logo from "../assets/footer-logo.png";
import location from "../assets/icon/location.svg";
import phone from "../assets/icon/phone.svg";
import gmail from "../assets/icon/gmail.svg";
import "../styles/footer.scss"
import { Pacifico, Alegreya_Sans_SC } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const alegreya = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["400"] });

const Footer = ({mobile}) => {
  return (
    <footer className={`mt-[-5px] ${mobile}`}>
      <div className="footer">
        <div className="container">
          <div className="footer-inner flex justify-between items-center">
            <div className="footer-left">
              <Image src={logo} width={638} height={700} alt="logo" />
            </div>
            <div className="footer-right">
              <h3 className={pacifico.className}>Контакти</h3>
              <div className="flex items-center">
                <div className="icon">
                  <Image src={location} width={43} height={43} alt="location" />
                </div>
                <h4 className={`${alegreya.className}`}>
                  Околовръстен път <br />
                  217 - RING MALL
                </h4>
              </div>
              <div className="flex items-center">
                <div className="icon">
                  <Image src={phone} width={43} height={43} alt="phone" />
                </div>
                <h4 className={`${alegreya.className}`}>+359 89 420 6620</h4>
              </div>
              <div className="flex items-center">
                <div className="icon">
                  <Image src={gmail} width={43} height={43} alt="gmail" />
                </div>
                <h4 className={`${alegreya.className}`}>Atanas9776@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

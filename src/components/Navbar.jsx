"use client";
import React, { useState } from "react";
import { Alegreya_Sans_SC } from "next/font/google";
import "../styles/navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const alegreya = Alegreya_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const Navbar = ({ eLogo }) => {
  const [openBar, setOpenBar] = useState(false);
  return (
    <header className={`${alegreya.className} fixed w-full z-50`}>
      <nav>
        <div className="logo-humbarger justify-between items-center px-8">
          <Image src={logo} width={60} height={60} alt="Logo" />
          {!openBar && (
            <button
              className="hamburger-btn p-2"
              onClick={() => setOpenBar(true)}
            >
              <GiHamburgerMenu className="text-[25px]" />
            </button>
          )}
          {openBar && (
            <button
              className="hamburger-btn p-2"
              onClick={() => setOpenBar(false)}
            >
              <RxCross2 className="text-[25px]" />
            </button>
          )}
        </div>
        <ul className={`navbar-mobile ${openBar && "open-sidebar"}`}>
          <div className="flex justify-evenly w-full">
            <li>
              <Link href="/">Начало</Link>
            </li>
            <li>
              <Link href="/about">За мен</Link>
            </li>
          </div>
          <div className="flex justify-evenly w-full">
            <li>
              <Link href="/price">Цени</Link>
            </li>
            <li>
              <Link href="/contact">Контакти</Link>
            </li>
          </div>
        </ul>
      </nav>

      {eLogo && (
        <div className="extra-logo mt-[-65px]">
          <Image className="m-auto" src={logo} width={171} height={171} alt="logo" />
        </div>
      )}
    </header>
  );
};

export default Navbar;

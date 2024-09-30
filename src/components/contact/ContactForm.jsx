import React from "react";
import { Pacifico, Alegreya_Sans_SC } from "next/font/google";
import Image from "next/image";
import location from "@/assets/icon/location.svg";
import phone from "@/assets/icon/phone.svg";
import gmail from "@/assets/icon/gmail.svg";
import khur from "../../assets/Home/khur.png";
import ButtonGroup from "../ButtonGroup";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const alegreya = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["400"] });

const ContactForm = () => {
  return (
    <section>
      <div className="contact-form relative">
        <div className="khur-shape absolute right-0">
          <Image src={khur} width={670} height={370} alt="shape" />
        </div>
        <div className="container relative z-10">
          <div className="contact-form-inner flex justify-between items-center">
            <div className="contact-form-left w-full max-lg:w-[50%] max-lg:pr-5 max-md:!pr-0">
              <div className="contact-form-header">
                <h2 className="title max-md:hidden">Контакти</h2>
                <h2 className="title md:hidden">КОНТАКТИ</h2>
                <p className={`${pacifico.className} subtitle`}>
                  Свържи се с мен
                </p>
              </div>
              <form action="#" method="get" className={`${alegreya.className}`}>
                <input type="text" placeholder="Вашето име" />
                <input type="text" placeholder="Вашият имейл" />
                <input type="text" placeholder="Относно" />
                <textarea name="" id="" placeholder="Съобщение"></textarea>
                <ButtonGroup value={"Изпрати"} clsName={"flex m-auto max-md:hidden"} />
                <ButtonGroup value={"Запази час"} clsName={"flex m-auto contact-btn md:hidden"} />
              </form>
            </div>
            <div className="contact-form-right lg:w-[80%] lg:pt-[200px] max-md:w-[50%] max-md:space-y-4">
              <h2 className={`md:hidden ${pacifico.className}`}>Контакти</h2>
              <h3 className={pacifico.className}>Адрес</h3>
              <div className="flex items-center">
                <div className="icon">
                  <Image src={location} width={43} height={43} alt="location" />
                </div>
                <h4 className={`${alegreya.className}`}>
                  Околовръстен път <br />
                  217 - RING MALL
                </h4>
              </div>
              <h3 className={pacifico.className}>Телефон</h3>
              <div className="flex items-center">
                <div className="icon">
                  <Image src={phone} width={43} height={43} alt="location" />
                </div>
                <h4 className={`${alegreya.className}`}>+359 89 420 6620</h4>
              </div>
              <h3 className={pacifico.className}>Имейл</h3>
              <div className="flex items-center">
                <div className="icon">
                  <Image src={gmail} width={43} height={43} alt="location" />
                </div>
                <h4 className={`${alegreya.className}`}>
                  Atanas9776@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

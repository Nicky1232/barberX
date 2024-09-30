import React from "react";
import { Pacifico, Alegreya_Sans_SC, Alumni_Sans } from "next/font/google";
import Image from "next/image";
import man from "../../assets/Home/open-man.png";
import mobileMan from "../../assets/Home/mobile-open.png";
import ButtonGroup from "../ButtonGroup";
import mobileFog from "../../assets/about/mobile-hero-fog.png";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const alumni = Alumni_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const alegreya = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["400", "900"] });

const Open = ({ cls }) => {
  return (
    <section>
      <div className={`${cls} open relative`}>
        {cls === "price-open" && (
          <div className="md:hidden absolute top-[50px] w-full mobile-fog">
            <Image src={mobileFog} alt="fog" width={768} height={247} className="!max-w-[none]" />
          </div>
        )}
        <div className="container relative z-[5]">
          <div className="open-header relative z-[4]">
            <h2 className="title">ОТВОРЕНО</h2>
            <p className={`${pacifico.className} subtitle`}>Работно време</p>
            <p
              className={`${alegreya.className} header-text ${cls === "price-open" ? "max-md:hidden" : ""}`}
            >
              Добре дошли! Моят график е съобразен с вашите нужди. Заповядайте
              по всяко удобно време, за да ви осигуря професионално обслужване.
            </p>
          </div>
          <div className="open-inner flex justify-between items-center">
            <div className="open-left lg:pr-12">
              <ul className={alegreya.className}>
                <li>
                  <span>Понеделник</span>
                  <span>10:00 - 21:00</span>
                </li>
                <li>
                  <span>Вторник</span>
                  <span>10:00 - 21:00</span>
                </li>
                <li>
                  <span>Сряда</span>
                  <span>10:00 - 21:00</span>
                </li>
                <li>
                  <span>Четвъртък</span>
                  <span>10:00 - 21:00</span>
                </li>
                <li>
                  <span>Петък</span>
                  <span>10:00 - 21:00</span>
                </li>
                <li>
                  <span>Събота</span>
                  <span>10:00 - 21:00</span>
                </li>
                <li>
                  <span>Неделя</span>
                  <span>Почивен ден</span>
                </li>
              </ul>
              {/* {cls == "price-open" && (
                <ButtonGroup
                  href="https://beautyboutique.customer.fitsys.co/reservations/start?site=1"
                  value={"Запази час"}
                  clsName={"mt-[30px]"}
                />
              )} */}
            </div>
            {cls == "home-open" && (
              <div className="open-right">
                <div className="image">
                  <Image
                    className="max-lg:m-auto max-md:hidden"
                    src={man}
                    width={550}
                    height={750}
                    alt="man"
                  />
                  <Image
                    className="max-lg:m-auto md:hidden"
                    src={mobileMan}
                    width={550}
                    height={750}
                    alt="man"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Open;

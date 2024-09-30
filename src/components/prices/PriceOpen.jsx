import React from "react";
import { Pacifico, Alegreya_Sans_SC } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const alegreya = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["400"] });

const PriceOpen = () => {
  return (
    <div>
      <div className="open">
        <div className="container relative z-[5]">
          <div className="open-header relative z-[4]">
            <h2 className="title">ОТВОРЕНО</h2>
            <p className={`${pacifico.className} subtitle`}>Работно време</p>
            <p className={`${alegreya.className} header-text`}>
              Добре дошли! Моят график е съобразен с вашите нужди. Заповядайте
              по всяко удобно време, за да ви осигуря професионално обслужване.
            </p>
          </div>
          <div className="open-inner lg:flex justify-between items-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceOpen;

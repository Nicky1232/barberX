import React from "react";
import { Pacifico, Akshar, Alumni_Sans } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const alumni = Alumni_Sans({ subsets: ["latin"], weight: ["700"] });
const akshar = Akshar({ subsets: ["latin"], weight: ["400"] });

const Expert = () => {
  return (
    <section>
      <div className="expert">
        <div className="expert-bg">
          <div className="container relative z-10">
            <div className="expert-header pt-14">
              <h2 className={`${akshar.className} title`}>ЕКСПЕРТ</h2>
              <p className={`${pacifico.className} subtitle`}>
                Фризьор с доказан опит
              </p>
            </div>
            <div className="expert-inner">
              <p className="pb-16">
                Добре дошли в моя изключителен свят на стил! В моя салон за
                мъжко подстригване не само ще получите безупречно подстригване,
                но и персонализирано обслужване, което подчертава вашата
                уникалност.
              </p>
              <p className="pb-10">
                Експертен стил и прецизност във всяко подстригване.
              </p>
              <p className="pb-10">
                Индивидуално внимание и комфорт за всеки клиент.
              </p>
              <p className="pb-28">
                Персонализирано обслужване за безупречен външен вид.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expert;

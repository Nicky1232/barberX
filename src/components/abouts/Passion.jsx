import React from "react";
import { Pacifico, Alegreya_Sans_SC } from "next/font/google";
import Image from "next/image";
import man from "../../assets/about/passion.png";
import mobileMan from "../../assets/about/mobile-passion.png"
import btnImg from "../../assets/about/btnImg.png";
import logo from "../../assets/logo.png";
import khur from "../../assets/Home/khur.png";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const alegreya = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["400"] });

const Passion = () => {
  return (
    <section className="relative mt-[-25px]">
      {/* <div className="passion-logo absolute flex justify-center items-center w-full top-[-150px]">
        <Image src={logo} width={273} height={270} alt="logo" />
      </div> */}
      <div className="md:hidden absolute right-0 bottom-20">
        <Image src={khur} width={200} height={150} alt="khur" />
      </div>
      <div className="passion">
        <div className="container max-md:relative z-[1]">
          <div className="passion-header">
            <h2 className="title">СТРАСТ</h2>
            <p className={`${pacifico.className} subtitle`}>Моето призвание</p>
          </div>
          <div className="passion-inner flex justify-between items-center relative z-[1]">
            <div className="passion-left lg:w-[90%] lg:pr-10">
              <div className="passion-text">
                <p className="md:absolute top-[-100px]">
                  Здравейте, аз съм Атанас и искам да ти разкажа за своята
                  страст - бръсненето и оформянето на косата. В началото
                  започнах да подстригвам мои приятели и колеги, докато работех
                  в Холандия, а след това реших да го направя и моя професия.
                </p>
                <p className="max-md:hidden">
                  Започнах професионален път с 
                  <a target="_blank" href="https://head-hunters.net/">
                    Head Hunters
                  </a>
                  , придобивайки неоценими знания, но осъзнавах, че има области,
                  които бих искал да усъвършенствам. След това се присъединих
                  към един от най-престижните барбършопове в София - The
                  Barbershop. Там надградих уменията си с няколко месеца на
                  безплатни подстрижки, преди официално да започна работа с
                  клиенти. След две години преминах в 
                  <a
                    target="_blank"
                    href="https://sofiaring.bg/tenants/as-beauty-boutique/"
                  >
                    Beauty Boutique
                  </a>
                   в Ring Mall, новооткрит салон, където с нетърпение очаквам
                  вашето посещение. Все пак, най-добрият аксесоар на един мъж е,
                  без съмнение, неговата прическа!
                </p>
              </div>
            </div>
            <div className="passion-right lg:w-[110%] lg:pl-10">
              <Image
                className="max-lg:m-auto max-md:hidden"
                src={man}
                width={625}
                height={852}
                alt="berbar"
              />
              <Image
                className="max-lg:m-auto md:hidden"
                src={mobileMan}
                width={625}
                height={852}
                alt="berbar"
              />
            </div>
          </div>
          <p className="md:hidden font-bold">
            Започнах професионален път с 
            <a target="_blank" href="https://head-hunters.net/">
              Head Hunters
            </a>
            , придобивайки неоценими знания, но осъзнавах, че има области, които
            бих искал да усъвършенствам. След това се присъединих към един от
            най-престижните барбършопове в София - The Barbershop. Там надградих
            уменията си с няколко месеца на безплатни подстрижки, преди
            официално да започна работа с клиенти. След две години преминах в 
            <a
              target="_blank"
              href="https://sofiaring.bg/tenants/as-beauty-boutique/"
            >
              Beauty Boutique
            </a>
             в Ring Mall, новооткрит салон, където с нетърпение очаквам вашето
            посещение. Все пак, най-добрият аксесоар на един мъж е, без
            съмнение, неговата прическа!
          </p>
          <div className={`passion-btn ${pacifico.className}`}>
            <Image src={btnImg} width={168} height={168} alt="barber" />
            <button
              className={`${alegreya.className}`}
            >
              Атанас Георгиев
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passion;

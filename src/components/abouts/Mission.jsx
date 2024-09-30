import React from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import mission from "../../assets/about/mission.png";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const Mission = () => {
  return (
    <section className="bg-black">
      <div className="passion mission">
        <div className="container">
          <div className="passion-inner flex max-md:flex-col justify-between items-center">
            <div className="passion-right lg:w-[110%] lg:pr-10 max-lg:order-2 max-lg:m-auto">
              <Image src={mission} width={625} height={852} alt="berbar" className="max-md:w-[85%]" />
              {/* <img src={mission} alt="berbar" /> */}
            </div>
            <div className="passion-left lg:w-[90%] lg:pl-10 max-lg:order-1">
              <div className="passion-header">
                <h2 className="title">МИСИЯ</h2>
                <p className={`${pacifico.className} subtitle !ml-[40px]`}>Моята задача</p>
              </div>
              <div className="passion-text">
                <p>
                В моето барбър студио, аз не просто подстригвам косата ти - аз създавам уникални моменти. Моята цел е да те направя не просто привличащ, а неповторим. Затова, ако желаеш премиум подстригване, заповядай при мен. Гарантирам не само нова визия, а и връзка с твоята история и стил.
                </p>
                <p className="max-md:pt-6">
                Когато подстригвам, не просто отрязвам косата, аз създавам усещане за увереност и стил. Моята цел е да си тръгнеш с нещо повече от просто подстригване - с усмивка на лицето и чувство за уникалност.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

import Image from "next/image";
import React from "react";
import cut1 from "../../assets/prices/haircut1.png";
import cut2 from "../../assets/prices/haircut2.png";
import { Pacifico } from "next/font/google";
import { hairCutStyle } from "@/db/data";
import khur from "../../assets/Home/khur.png";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const HairCutCategory = () => {
  return (
    <section>
      <div className="haircut-category min-h-[800px] relative z-10 max-md:pb-5">
        <hr />
        <div className="md:hidden absolute right-0 -top-16">
          <Image src={khur} width={200} height={150} alt="khur" />
        </div>
        <div className="container">
          <div className="haircut-category-inner space-y-8 md:space-y-10">
            {hairCutStyle.map((item) => {
              return (
                <div key={item.id} className="card my-5 xl:my-8">
                  <div className="card-img">
                    <Image
                      src={item.image}
                      width={187}
                      height={200}
                      alt="style"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className={pacifico.className}>{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="md:hidden max-md:!-mt-4" />
      </div>
    </section>
  );
};

export default HairCutCategory;

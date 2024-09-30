import React from "react";
import { Pacifico, Alegreya_Sans_SC } from "next/font/google";
import Image from "next/image";
import image from "../../assets/Home/testimonial-image.png";
import { IoStarSharp } from "react-icons/io5";
import ButtonGroup from "../ButtonGroup";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const alegreya = Alegreya_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "900"],
});

const Review = () => {
  return (
    <section>
      <div className="review">
        <div className="container">
          <div className="review-header md:hidden">
            <h2 className="title">РЕВЮ</h2>
            <p className={`${pacifico.className} subtitle`}>
              Ревюта на клиентите ми
            </p>
            <p className="para">
              Модерната прическа е един от най-ефективните начини да изразите
              себе си и своята индивидуалност
            </p>
          </div>
          <div className="review-inner flex justify-between">
            <div className="review-left max-lg:flex justify-center items-center flex-col">
              <div className="review-header max-md:hidden">
                <h2 className="title">РЕВЮ</h2>
                <p className={`${pacifico.className} subtitle`}>
                  Ревюта на клиентите ми
                </p>
                <p className="para">
                  Модерната прическа е един от най-ефективните начини да
                  изразите себе си и своята индивидуалност
                </p>
              </div>
              <div className="card">
                <div className="card-img flex justify-center items-center">
                  <Image src={image} width={165} height={165} alt="image" />
                </div>
                <div className="star py-2 flex md:hidden justify-center items-center md:text-[30px] text-[20px]">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Аз съм изключително доволен от услугите на Атанас Георгиев
                    като бръснар.
                  </p>
                  <h5 className={alegreya.className}>Пресиян Илиев</h5>
                  <h6 className={alegreya.className}>дизайнер</h6>
                  <div className="star py-2 flex max-md:hidden justify-center items-center md:text-[30px] text-[20px]">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </div>
                </div>
              </div>
            </div>
            <div className="review-right flex flex-col justify-between items-center md:pt-40 md:pl-5">
              <div className="card max-md:mt-[-50px]">
                <div className="card-img flex justify-center items-center">
                  <Image src={image} width={165} height={165} alt="image" />
                </div>
                <div className="star py-2 flex md:hidden justify-center items-center md:text-[30px] text-[20px]">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Невероятен професионалист, който владее тенденциите в света
                    на модните прически.
                  </p>
                  <h5 className={alegreya.className}>Симеон Владимиров</h5>
                  <h6 className={alegreya.className}>ученик</h6>
                  <div className="star py-2 flex max-md:hidden justify-center items-center md:text-[30px] text-[20px]">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </div>
                </div>
              </div>
              <ButtonGroup value={"Още"} clsName={"max-lg:mt-10 max-md:!text-[12px]"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

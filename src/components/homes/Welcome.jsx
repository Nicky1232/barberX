import Image from "next/image";
import khur from "../../assets/Home/khur.png";
import man from "../../assets/Home/man.png";

const Welcome = () => {
  return (
    <section className="relative mt-[-40px]">
      <div className="welcome-right-image absolute right-0 top-[-100px]">
        <Image src={khur} width={570} height={270} alt="shape" />
      </div>
      <div className="home-welcome">
        <div className="container relative z-[5]">
          <div className="welcome-inner flex justify-between items-end">
            <div className="welcome-left w-full max-md:w-[200px]">
              <div className="image xl:ml-[-20px]">
                <Image src={man} width={550} height={750} alt="man" />
              </div>
            </div>
            <div className="welcome-right relative z-10">
              <p className="md:text-right lg:mb-20 mb-10 max-md:pl-10">
                Добре Дошли! <br /> Аз Съм Атанас Георгиев. <br /> Основател на
                Fade O&apos;clock Barbershop
              </p>
              <p className="text-justify max-md:hidden">
                Разкрийте уникалното решение за вашата прическа, където всяко
                подстригване се превръща в перфектен стил, оставяйки незабравимо
                впечатление!
              </p>
            </div>
          </div>
          <p className="text-center md:hidden pt-5">
            Разкрийте уникалното решение за вашата прическа, където всяко
            подстригване се превръща в перфектен стил, оставяйки незабравимо
            впечатление!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

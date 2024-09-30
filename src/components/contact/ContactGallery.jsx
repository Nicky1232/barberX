import Image from "next/image";
import React from "react";
import shop1 from "../../assets/contact/1.png";
import shop2 from "../../assets/contact/2.png";
import shop3 from "../../assets/contact/3.png";

const ContactGallery = () => {
  return (
    <section>
      <div className="contact-gallery">
        <div className="kuasa-bg py-[100px] max-md:pt-12">
          <div className="container flex flex-col items-center">
            <Image src={shop1} width={1188} height={711} alt="shop" />
            <Image src={shop2} width={1188} height={711} alt="shop" />
            <Image src={shop3} width={1188} height={711} alt="shop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactGallery;

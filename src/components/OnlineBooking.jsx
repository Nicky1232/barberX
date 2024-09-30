import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const OnlineBooking = () => {
  return (
    <button
      className={`${inter.className} online-booking-btn sticky top-[75vh] z-50`}
    >
      <Link
        href={"https://beautyboutique.customer.fitsys.co/reservations/create"}
        target="_blank"
      >
        online booking
      </Link>
    </button>
  );
};

export default OnlineBooking;

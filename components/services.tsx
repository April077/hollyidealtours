import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { DM_Serif_Display } from "next/font/google";

const lalezar = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


function Services() {
  return (
    <div
      id="service"
      className=" px-6 md:px-24 flex h-full   flex-col justify-center items-center py-40 w-full"
    >
      <div className="text-center pb-20  space-y-3">
        <h1 className={`text-5xl font-bold ${lalezar.className}`}> Why Choose Us ?</h1>
        <p className="text-gray-400 text-xl">
          We are professional and energetic experts.
        </p>
      </div>

      <div className=" text-center  grid md:grid-cols-3   grid-cols-1 justify-center items-center md:gap-8 gap-12">
        <div className="flex flex-col  space-y-3 justify-center items-center">
          {" "}
          <FaHome className="text-8xl text-orange-500" />
          <h1 className={`text-2xl font-bold ${lalezar.className}`}>Handpicked Hotels</h1>
          <p className="text-gray-500">
            Our travel agency always has good special offers.{" "}
          </p>
        </div>
        <div className="flex flex-col  space-y-3 justify-center items-center">
          {" "}
          <BsGlobeCentralSouthAsia className="text-8xl text-orange-500" />
          <h1 className={`text-2xl font-bold ${lalezar.className}`}> World Class Service</h1>
          <p className="text-gray-500">
            We will do everything necessary to organize your holiday.{" "}
          </p>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-center">
          {" "}
          <GiTakeMyMoney className="text-8xl text-orange-500" />
          <h1 className={`text-2xl font-bold ${lalezar.className}`}>Best Price Guarantee</h1>
          <p className="text-gray-500">
            You can leave feedback on our website hfbefh fgeyfg.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

import React from "react";
import { CarouselDemo } from "./ui/testimonials";
import { DM_Serif_Display } from "next/font/google";

const lalezar = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Reviews() {
  return (
    <div className="">
      <div className="flex flex-col md:justify-between md:flex-row    px-16 py-24">
        <div className=" flex  space-y-4 flex-col justify-center items-center  text-2xl">
          {" "}
          <div className={`font-bold text-5xl ${lalezar.className}`}>TESTIMONIALS</div>
          <div className=" flex text-gray-500 justify-center items-center text-center md:items-left text-xl">
            Here&apos;s what our customers have to say about us?
          </div>
        </div>
        <CarouselDemo />
      </div>
    </div>
  );
}

export default Reviews;

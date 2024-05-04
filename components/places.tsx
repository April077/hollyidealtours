import React from "react";
import Image from "next/image";
import Carousel from "@/components/movingCards";
import { Abril_Fatface } from "next/font/google";



const cookie = Abril_Fatface({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
  });

function SideHero() {
  return (
    <div className="w-full h-full relative pb-12">
      {/* White gradient overlay */}
      <div className="absolute -top-10 h-1/2  md:top-0 z-40 left-0 w-full md:h-1/2 bg-gradient-to-b from-white to-transparent"></div>

      {/* Original image */}
      <div className="-z-20   md:w-full md:h-full h-screen absolute -top-10  md:top-0 ">
        <Image
          className=" w-full h-full"
          src={"/herobg2.jpg"}
          alt="pic"
          width={2000}
          height={2000}
        ></Image>
      </div>

      {/* Content */}
      <div className="z-50  mt-10 md:mt-48 relative ">
        <h1
          className={`font-bold ${cookie.className} z-50   text-4xl md:text-5xl py-8  md:mb-20 pb-0 md:pb-16 text-center`}
        >
          Places to Explore
        </h1>
        <div className="py-12 ">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default SideHero;

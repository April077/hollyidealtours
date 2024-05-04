import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import Nav from "./navbar";

const lalezar = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});



function HeroSection() {
  return (
    <main className=" w-full h-full relative">
        <Nav/>
      <div
        className={`flex px-16 md:px-24 ${lalezar.className}  pb-28 md:pb-40  flex-col w-full h-full relative z-10 pt-16 md:pt-20`}
      >
        {" "}
        <h1 className="font-bold text-7xl">HOLLY</h1>
        <h1 className="  font-bold text-7xl ">IDEAL</h1>
        <h1 className=" font-bold text-7xl ">TOURS</h1>
        <label className="text-lg tracking-widest pt-4 pl-2 font-thin text-neutral-500">
          Discover. Dream. Desire
        </label>
      </div>
      <div className="-z-20 absolute  md:top-0  top-20 md:right-0">
        <Image src={"/pic.png"} alt="pic"  width={1000} height={1000}></Image>
      </div>
    </main>
  );
}

export default HeroSection;

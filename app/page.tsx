import Image from "next/image";
import { Lalezar } from "next/font/google";
import { Cookie } from "next/font/google";

import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className=" w-full flex flex-col  ">
      <Navbar />
      <main className=" w-full h-screen">
        <div
          className={`flex px-16 md:px-24 ${lalezar.className} pb-28 md:pb-40  flex-col w-full h-full relative z-10 pt-16 md:pt-20`}
        >
          {" "}
          <h1 className="font-bold text-7xl">HOLLY</h1>
          <h1 className="  font-bold text-7xl ">IDEAL</h1>
          <h1 className=" font-bold text-7xl ">TOURS</h1>
          <label className="text-lg tracking-widest pl-2 font-thin text-neutral-500">
            Discover. Dream. Explore
          </label>
          <div className="w-18 mt-4 pl-2 h-10">
            <button className="px-8 pt-2 pb-1 border-[1px] border-black text-center group rounded bg-blue-500">
              Explore{" "}
              <span className="inline-block pl-1 transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </div>
        </div>
        <div className="z-0 absolute  md:top-0 top-1/3 md:right-0">
          <Image src={"/pic.png"} alt="pic" width={1000} height={1000}></Image>
        </div>
      </main>
      <h1 className={`font-bold ${cookie.className} text-6xl md:text-8xl my-6 text-center`}>
        Places to Explore
      </h1>
      <div className="bg-rose-100   py-10">
        <div className="">
          <Carousel />
        </div>
      </div>
      <div>jii</div>
    </div>
  );
}

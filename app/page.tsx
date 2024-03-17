import Image from "next/image";
import { Lalezar } from "next/font/google";
import Navbar from "@/components/navbar";
import About from "./about/page";
import Card from "@/components/card";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className=" w-full flex flex-col  ">
      <Navbar />
      <main className="">
        <div
          className={`flex px-24 ${lalezar.className}  flex-col w-full h-screen relative z-10 pt-20`}
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
        <div className="z-0 absolute top-0 right-0">
          <Image src={"/pic.png"} alt="pic" width={1000} height={800}></Image>
        </div>
      </main>
      <div className="flex justify-center items-center  py-9">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5  z-50">
          <Card img="/varanasi.png" text="Varanasi" />
          <Card img="/prayagraj.jpg" text="Prayagraj" />
          <Card img="/lucknow.jpg" text="Lucknow" />
          <Card img="/ayodhya.jpg" text="Ayodhya" />{" "}
          <Card img="/bodh.avif" text="Bodh Gaya" />
        </div>
      </div>
    </div>
  );
}

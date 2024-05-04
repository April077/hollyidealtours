import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";

const lalezar = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type infoType = {
  img: string;
  title: string;
  text: string;
};

function InfoRev({ img, text, title }: infoType) {
  return (
    <div className="w-full h-auto ">
      <div className="md:flex flex-row-reverse    p-8  md:p-16">
        <div className="md:w-1/3 h-full ">
          {" "}
          <Image
            className="object-fit h-full w-full rounded-full "
            src={img}
            alt="img"
            height={200}
            width={200}
          ></Image>
        </div>
        <div className="md:w-2/3 order-2 flex flex-col md:justify-center md:items-start justify-center items-center py-5 md:py-0 px-5 ">
          <div className={`font-bold text-3xl  ${lalezar.className}`}>
            {title}
          </div>
          <div className="pt-2 text-center md:text-left">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoRev;

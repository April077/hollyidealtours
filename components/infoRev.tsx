import React from "react";
import Image from "next/image";

function InfoRev() {
  return (
    <div className="w-full h-auto ">
      <div className="md:flex flex-row-reverse    p-8  md:p-16">
        <div className="md:w-1/3 h-full ">
          {" "}
          <Image
            className="object-fit h-full w-full rounded-full "
            src={"/Bodh.png"}
            alt="img"
            height={200}
            width={200}
          ></Image>
        </div>
        <div className="md:w-2/3 order-2 flex flex-col md:justify-center md:items-start justify-center items-center py-5 md:py-0 px-5 ">
          <div className="font-semibold text-xl ">MAHABODHI TEMPLE</div>
          <div className="pt-2 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo
            nisi. Aliquam sed condimentum sem. Sed imperdiet felis at nulla
            sodales, sit amet sollicitudin magna volutpat. Nunc ullamcorper
            tellus a libero convallis ultrices. Fusce auctor lectus in magna
            dapibus, ultricies laoreet ex facilisis. Mauris dapibus auctor quam
            non consectetur. Suspendisse condimentum urna velit, nec tincidunt
            ante auctor a. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis bibendum erat ut facilisis vehicula. Aliquam id aliquet
            erat, nec tincidunt sem. Pellentesque eu libero vitae augue maximus
            vestibulum sit amet in nibh. Nulla metus urna, rutrum ut tellus eu,
            molestie tempor mauris. Nunc finibus diam quis nibh fermentum,
            gravida consequat nisl convallis. Suspendisse a nisl odio. Donec
            aliquam rhoncus leo at congue.
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoRev;

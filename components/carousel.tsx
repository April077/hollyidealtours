"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@/components/card";
import { useRouter } from "next/navigation";

function Carousel() {
  const router = useRouter();
  var settings = {
    speed: 8000,
    autoplaySpeed: 1000,
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,

    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" overflow-hidden w-auto">
      <div className="slider-container overflow-hidden ">
        <Slider {...settings}>
          <div
            onClick={() => {
              router.push("/about");
            }}
          >
            <Card img="/varanasi.png" text="Varanasi" />
          </div>
          <div>
            <Card img="/prayagraj.jpg" text="Prayagraj" />
          </div>
          <div>
            <Card img="/lucknow.jpg" text="Lucknow" />
          </div>
          <div>
            <Card img="/ayodhya.jpg" text="Ayodhya" />
          </div>
          <div>
            <Card img="/bodh.avif" text="Bodh Gaya" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;

"use client";import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomOffset = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / bottomOffset) * 100;

      if (scrollPercentage > 90) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="contact" className="bg-gray-800 px-6 md:px-24 w-full h-full">
      <div className="md:items-left py-20 flex flex-col md:flex-row space-x-8 h-full">
        <div className="flex pb-10 flex-col">
          <div className="flex items-center">
            <Image src={"/logo.png"} alt="logo" width={70} height={70} />
            <div className="pl-2">
              <h1 className="font-bold text-white text-2xl">
                HOLLY IDEAL TOURS
              </h1>
              <label className="tracking-widest text-white font-thin">
                Discover. Dream. Desire
              </label>
            </div>
          </div>
        </div>

        <div className="pb-10 space-y-6 pl-10">
          <h1 className="font-bold text-white text-2xl">Contact Us</h1>
          <div className="tracking-widest text-white pb-2 font-thin">
            Xyz Street, Varanasi, Uttar Pradesh <br />
          </div>
          <label className="tracking-widest text-white font-thin">
            +91 7137333333
          </label>
        </div>
        <div className="flex space-y-6 pl-10 flex-col">
          <h1 className="font-bold text-white text-2xl">Social Share</h1>
          <div className="flex space-x-8 ">
            <FaInstagram className="text-white text-2xl" />
            <FaFacebook className="text-white text-2xl" />
            <FaWhatsapp className="text-white text-2xl" />
          </div>
        </div>
      </div>
      {showScrollButton && (
        <button
          className="fixed bottom-10 right-10 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md transition-all duration-5000 ease-in"
          onClick={handleMoveToTop}
        >
          Move to Top
        </button>
      )}
    </div>
  );
}

export default Footer;

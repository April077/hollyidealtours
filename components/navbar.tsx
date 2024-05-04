"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Links = [
  { name: "ABOUT", link: "#about" },
  { name: "SERVICES", link: "#service" },
  { name: "CONTACT", link: "#contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Assuming md breakpoint is 768px
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run this effect only once on mount

  const handleClick = (link: string) => {
    setOpen(false); // Close the mobile menu after clicking a link
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full z-50 md:px-16 px-12">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-6">
        <div className="z-50  ">
          <Image src={"/logo.png"} alt="logo" width={70} height={70}></Image>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-12 top-12 cursor-pointer md:hidden"
        >
          <Image
            src={open ? "/close.png" : "/more.png"}
            width={30}
            height={30}
            alt="icon"
          ></Image>
        </div>

        <ul
          className={`md:flex w-full  md:items-center md:pb-6 pb-10 absolute md:static md:  md:z-auto z-[-1] left-0  md:w-auto md:pl-0 pl-20 pt-3 transition-all duration-500 ease-in ${
            open ? "top-20 bg-white" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 overflow-hidden  text-xl md:my-0 my-7"
            >
              <a
                href={link.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.link);
                }}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

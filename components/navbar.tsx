"use client";

import { useState } from "react";
import Image from "next/image";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full z-50 md:px-16 px-12">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-6">
        <div className="z-50 mt-4 ">
          <Image src={"/image.png"} alt="logo" width={80} height={80}></Image>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-12 top-12 cursor-pointer md:hidden"
        >
          <Image src={open ? "/close.png" : "/more.png"} width={30} height={30} alt="icon"></Image>
        </div>

        <ul
          className={`md:flex w-full  md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0  md:w-auto md:pl-0 pl-20 pt-3 transition-all duration-500 ease-in ${
            open ? "top-20 bg-white" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 overflow-hidden  text-xl md:my-0 my-7">
              <a
                href={link.link}
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

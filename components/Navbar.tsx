"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Demos",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Blog",
    },
    {
      id: 4,
      link: "Pages",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <header className="bg-[#F7EA68]  text-white">
      <div className="flex justify-between items-center  w-full  px-8 py-6 md:max-w-[85rem] mx-auto ">
        <div className="flex items-center justify-center gap-10">
          <Image
            src="/images/Logo (1).svg"
            alt="lgo img"
            width={80}
            height={24}
          />

          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-normal text-[16px] leading-[24px] text-[#12141D] hover:scale-105 hover:text-white duration-200"
              >
                <Link href={link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden  md:block">
          <Button variant="link" className="font-normal text-[16px] leading-[30px]">Login</Button>
          <button className="px-[30px] py-[16px] rounded-[3px] text-[16px]  font-normal bg-black">
           
              Get Started Free
            {/* </Link> */}
          </button>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;

"use client";

import HoverButton from "@/ui/sub/hoverButton/HoverButton";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import MobileNav from "../mobileNav/MobileNav";
import { IoCloseCircleSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const [popup, setPopup] = useState(false);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="w-[100%] h-[65px] fixed top-0 bg-[#03001417] backdrop-blur-md z-[50] px-2 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="https://saudi.idasummit.com/"
          className="h-auto flex flex-row items-center"
        >
          <Image
            data-aos="flip-right"
            data-aos-duration={600}
            src="/images/logos/logo.png"
            alt="logo"
            width={120}
            height={120}
            className="cursor-pointer hover:animate-slowspin rounded-lg"
          />

          {/* <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            GENFINITY GLOBAL
          </span> */}
        </a>

        <div className="w-2/4 h-full hidden md:flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href={pathname === "/" ? "#about-us" : "/"}
              className="cursor-pointer text-xs"
            >
              ABOUT
            </a>
            <a
              href={pathname === "/" ? "#happening" : "/"}
              className="cursor-pointer text-xs"
            >
              HAPPENINGS
            </a>
            <a
              href={pathname === "/" ? "#speakers" : "/"}
              className="cursor-pointer text-xs"
            >
              SPEAKERS
            </a>
            <a href="/agenda" className="cursor-pointer text-xs">
              AGENDA
            </a>
            <a
              href={pathname === "/" ? "#sponsors&partners" : "/#"}
              className="cursor-pointer text-xs"
            >
              SPONSORS & PARTNERS
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center h-full gap-3">
          {/* <div className="flex-row flex justify-center items-center p-5 w-full z-[999] gap-4"> */}
          <Link
            href={"/sponsors"}
            className="md:flex hidden cursor-pointer  w-autp px-2 py-2 text-white shadow-md shadow-[#7042f861]/50 border rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 text-[10px] hover:from-cyan-500 hover:to-purple-500"
          >
            SPONSORS ENQUIRY
          </Link>
          <Link
            href={"/delegates"}
            className="md:flex hidden cursor-pointer w-autp px-2 py-2 text-white shadow-md shadow-[#7042f861]/50 border rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 text-[10px] hover:from-cyan-500 hover:to-purple-500"
          >
            DELEGATES ENQUIRY
          </Link>
          {/* </div> */}
        </div>
        {popup ? (
          <button
            data-aos="flip-up"
            onClick={() => setPopup(false)}
            className="text-white md:hidden flex"
          >
            <IoCloseCircleSharp size={30} />
          </button>
        ) : (
          <button
            data-aos="flip-down"
            data-aos-duration={900}
            onClick={() => setPopup(true)}
            className="text-white md:hidden flex"
          >
            <BsFillMenuButtonWideFill size={30} />
          </button>
        )}
      </div>
      {popup && <MobileNav setPopup={setPopup} />}
    </div>
  );
}

export default Navbar;

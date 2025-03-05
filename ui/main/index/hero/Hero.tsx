"use client";

import React, { useRef, useEffect } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Counter from "@/ui/sub/counter/Counter";
import Link from "next/link";
import EventName from "../../event-name/EventName";

function IndexHeader() {
  const pageHeader = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window) {
      if (window.innerWidth > 991 && pageHeader.current) {
        const updateScroll = () => {
          const windowScrollTop = window?.pageYOffset / 3;
          if (pageHeader.current) {
            pageHeader.current.style.transform = `translate3d(0, ${windowScrollTop}px, 0)`;
          }
        };
        window.addEventListener("scroll", updateScroll);
        return () => {
          window.removeEventListener("scroll", updateScroll);
        };
      }
    }
  }, []);

  return (
    <div
      className="h-[100vh] relative md:overflow-hidden md:h-full flex justify-center"
      id="hero"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(60%)" }}
          ref={pageHeader}
        >
          <source
            // src="https://www.globalblockchainshow.com/wp-content/uploads/2024/03/GBS_Website-Cover-compressed.mp4"
            src="/videos/bg-vid01.mp4"
            type="video/webm"
          />
          {/* <source src="/videos/blackhole.webm" type="video/webm" /> */}
        </video>
        {/* <img src="/images/index/homebanner.jpg" className="object-cover w-full h-full" ref={pageHeader} alt="" /> */}
      </div>

      <div className="relative z-10 mt-[2rem] flex flex-col items-center justify-center pt-16 text-white">
        {/* <span className="flex justify-center font-extrabold text-transparent text-[24px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          INITIATIVE BY{" "}
          <img
            width={55}
            className="object-contain"
            height={10}
            src="/images/PNGs/dits.png"
            alt="DITS Logo"
          />
        </span> */}
        <p className="flex gap-x-3 justify-center items-center md:flex-row flex-col mb-5">
          <span className="flex items-center gap-3">
            <span className="md:font-bold md:text-5xl flex gap-x-2 font-semibold text-2xl justify-center items-center">
              <CiCalendarDate /> 2-3
            </span>{" "}
            July <br className="md:flex hidden" /> 2025
            {/* 7-8 MAY 2025 */}
          </span>
          <span className="flex items-center gap-3">
            <span className="font-bold text-4xl flex gap-x-2">
              <FaLocationDot /> RIYADH,
            </span>{" "}
            KINGDOM OF <br /> SAUDI ARABIA
          </span>
        </p>
        <div className="w-full h-auto flex md:flex-row flex-col justify-center items-center md:px-10">
          <div className="w-full md:w-1/3 h-full flex md:justify-end items-center md:p-5  justify-center">
            <img
              src="images/alts/Saudi.png"
              style={{ width: "250px" }}
              // className="md:w-[250px]"
            />
          </div>
          <div style={{ borderRight: "1px solid white", height: "60%" }}></div>
          {/* <EventName /> */}
          <img
            className="md:w-[500px] w-[400px]"
            src="/images/event/Event-Logo.png"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <h3 className="md:text-2xl font-semibold px-10 md:px-0 text-center mt-2">
            CREATING A DIGITAL LEGACY : DATA, AI & AUTOMATION AT THE HEART OF
            VISION 2030
            {/* <span className="mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
            </span> */}
          </h3>
          <Counter />
        </div>
        <div className="w-full text-s text-center md:px-28 md:mt-2 mt-[-2rem]">
          <div className="flex-row flex justify-center items-center p-5 w-full z-[999] gap-4">
            <Link
              href={"/sponsors"}
              className="cursor-pointer  w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500"
            >
              SPONSORS ENQUIRY
            </Link>
            <Link
              href={"/delegates"}
              className="cursor-pointer w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500"
            >
              DELEGATES ENQUIRY
            </Link>
            <Link
              href={"/speakers"}
              className="cursor-pointer w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500"
            >
              SPEAKERS ENQUIRY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexHeader;

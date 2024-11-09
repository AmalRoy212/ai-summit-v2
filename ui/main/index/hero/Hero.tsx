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
    <div className="relative md:overflow-hidden md:h-[110vh]" id="hero">
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
            src="https://www.globalblockchainshow.com/wp-content/uploads/2024/03/GBS_Website-Cover-compressed.mp4"
            type="video/webm"
          />
          {/* <source src="/videos/blackhole.webm" type="video/webm" /> */}
        </video>
        {/* <img src="/images/index/homebanner.jpg" className="object-cover w-full h-full" ref={pageHeader} alt="" /> */}
      </div>

      <div className="relative z-10 mt-[2rem] flex flex-col items-center justify-center pt-20 text-white">
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
        <p className="md:text-2xl flex gap-x-3 justify-center items-center md:flex-row flex-col">
          <span className="flex items-center gap-3">
            <CiCalendarDate />7 MAY 2025
          </span>
          <span className="flex items-center gap-3">
            <FaLocationDot size={18} />
            RIYADH, KINGDOM OF SAUDI ARABIA
          </span>
        </p>
        <div className="w-full h-auto flex md:flex-row flex-col justify-center items-center md:px-10">
          <div
            style={{ borderRight: "1px solid white" }}
            className="w-full md:w-1/3 h-full flex justify-end items-center p-5"
          >
            <img
              src="images/alts/Saudi.png"
              style={{ width: "250px", borderRadius: "10px" }}
              // className="md:w-[250px]"
            />
          </div>
          <EventName />
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <h3 className="md:text-2xl text-center mt-2">
            Creating a Digital Legacy: Data, AI & Automation at the Heart of
            Vision 2030
            {/* <span className="mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
            </span> */}
          </h3>
          <Counter />
        </div>
        <div className="w-full text-s text-center md:px-28 md:mt-2 mt-5">
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
            {/* <a className="cursor-pointer w-autp px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">
              Deleagtes
            </a>
            <a className="cursor-pointer  w-auto px-10 py-2 shadow-md shadow-[#7042f861]/50 border rounded-3xl border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 text-[10px] hover:from-cyan-500 hover:to-purple-500">
              Speakers
            </a> */}
          </div>
          {/* <p className="text-slate-300 py-5 md:px-10 px-2 rounded-2xl">
            The Global Future Education Summit is a premier business focussed
            event driven by visionary insights, delving into the most recent
            challenges and technological trends in the education technology
            innovation sectors of India and Bengaluru. This summit establishes a
            standard for technological advancement in the area, forging
            connections between global edtech experts, innovators, and emerging
            companies with a curated group of executives, encompassing CEOs,
            Directors, School Owners, Executive Principals, University Heads,
            Department Heads, Chief Technology Officers, Innovation Leaders,
            government officials, policy makers and tech investors in Bengaluru.
            The summit presents a diverse lineup of activities, featuring
            enlightening keynotes, demonstrations of real-world applications,
            product exhibitions, panel discussions, and educational tech talks.
            Participants will have the chance to observe state-of-the-art
            technological solutions presented by worldwide tech pioneers and
            assess their significance and influence on various organizations.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default IndexHeader;

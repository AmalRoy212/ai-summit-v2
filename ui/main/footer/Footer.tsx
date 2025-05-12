"use client";

import React from "react";
import { RxSewingPin, RxLinkedinLogo } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { HiArrowCircleRight } from "react-icons/hi";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={`w-full mx-auto max-w-7xl  bg-transparent text-gray-200 shadow-lg p-[15px]  mt-${
        pathname === "/delegates" ? 0 : 10
      } cursor-pointer`}
    >
      <div className="w-full rounded-xl p-10 flex flex-col items-center justify-center m-auto bg-slate-900">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Event Location</div>
            <p
              data-aos="fade-right"
              data-aos-duration={200}
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxSewingPin />
              <span className="text-[15px] ml-[6px]">Riyadh, Saudi Arabia</span>
            </p>
            {/* <div data-aos="fade-right" data-aos-duration={300} className="font-bold text-[16px]">GFES</div> */}
            <a data-aos="fade-right" data-aos-duration={400} href="#hero">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <IoHome />
                <span className="text-[15px] ml-[6px]">Home</span>
              </p>
            </a>
            <a data-aos="fade-right" data-aos-duration={500} href="#about-us">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FcAbout />
                <span className="text-[15px] ml-[6px]">About</span>
              </p>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Registrations</div>
            <a
              data-aos="fade-right"
              data-aos-duration={600}
              href="/delegates"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <HiArrowCircleRight />
                <span className="text-[15px] ml-[6px]">Delegates</span>
              </p>
            </a>
            <a
              data-aos="fade-right"
              data-aos-duration={700}
              href="/sponsors"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <HiArrowCircleRight />
                <span className="text-[15px] ml-[6px]">Sponsors</span>
              </p>
            </a>
            <a
              data-aos="fade-right"
              data-aos-duration={800}
              href="/speakers"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <HiArrowCircleRight />
                <span className="text-[15px] ml-[6px]">Speakers</span>
              </p>
            </a>
          </div>

          <div className="min-w-[200px] h-auto md:h-[185px] flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            {/* <a
              data-aos="fade-right"
              data-aos-duration={600}
              target="_blank"
              href="https://www.instagram.com/genfinityglobal/"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaInstagram />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </a>
            <a
              data-aos="fade-right"
              data-aos-duration={700}
              target="_blank"
              href="https://twitter.com/GenfinityGlobal"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaXTwitter />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </a> */}
            <a
              data-aos="fade-right"
              data-aos-duration={800}
              target="_blank"
              href="https://www.linkedin.com/company/capstonemena"
            >
              <p className="flex flex-row items-center my-[15px] justify-between w-full cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </a>
          </div>

          <div className="min-w-[200px] h-[215px] flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] font-bold ml-[6px]">Contact Us</span>
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration={900}
              className="flex flex-row items-center cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">
                {" "}
                harshad.Ibrahim@capstonemiddleeast.com
              </span>
            </p>
          </div>
        </div>

        <div className="text-[15px] mt-14 text-center">
          <a href="/privacy-policy">Privacy & Policy</a> and <a href="/terms-conditions">Terms & Conditions</a>
        </div>
        <div className="text-[12px] font-thin text-center">
          &copy; 2024 All rights reserved by Capstone
        </div>
      </div>
    </div>
  );
};

export default Footer;

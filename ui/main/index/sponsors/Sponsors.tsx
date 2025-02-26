"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsor.css";
import { sponsorsDataProvider } from "@/constants/sponsorsDataProvider";
import SponsordsData from "@/ui/sub/index/sponsors/SponsordsData";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

function Sponsors() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div id="sponsors&partners" className="mainContainer">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200 mb-10"
      >
        {/* Some of the  */}
        SPONSORS
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          &{" "}
        </span>
        PARTNERS
        {/* from the Recent Past */}
      </motion.div>
      <h3 className="text-transparent text-xl text-center text-white">
        GOLD SPONSOR
      </h3>
      <div className="w-full flex md:flex-row flex-col justify-center min-h-52">
        {sponsorsDataProvider.map(
          (img) => img && <SponsordsData imgSrc={img} />
        )}
      </div>
      <h3 className="text-transparent text-xl text-center text-white">
        HOST SPONSOR
      </h3>
      <div className="w-full flex md:flex-row flex-col justify-center min-h-52">
        <img className="object-cover md:w-[300px] md:h-[300px] w-[200px] h-[200px]" src="/images/sponsors/mena.jpg" />
      </div>
    </div>
  );
}

export default Sponsors;

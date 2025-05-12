"use client";

import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { LiaCompressArrowsAltSolid } from "react-icons/lia";

type MixBlendModeType =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

interface Props {
  src: string;
  title: string;
  description: string;
  index: number;
}

export default function BusinessCard({ src, title, description, index }: Props) {
  const [blendMode, setBlendMode] = useState<MixBlendModeType>("normal");

  const toggleBlendMode = () => {
    setBlendMode(blendMode === "normal" ? "difference" : "normal");
  };

  return (
    <div
      data-aos-duration={index * 300}
      data-aos="fade-right"
      className="mt-5 relative flex flex-col justify-center overflow-hidden z-[20] rounded-2xl"
      style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
    >
      <div className="group relative cursor-pointer overflow-hidden  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span
          style={{
            background:
              "linear-gradient(180deg, #8a34cc 0%, #6a34cc 50%, #345dcc 100%)",
          }}
          className="absolute top-10 z-[20] h-20 w-20 flex justify-center items-center rounded-full transition-all duration-300 group-hover:scale-[11]"
        >
          <LiaCompressArrowsAltSolid
            size={35}
            color="white"
            className="group-hover:scale-[0]"
          />
        </span>
        <div className="relative z-[20] mx-auto max-w-md">
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p className="opacity-0 group-hover:opacity-100 h-[400px] overflow-y-auto scrollbar-hidden">
              {description}.
            </p>
          </div>
          <p className="text-white inline-flex justify-start items-center gap-x-2 bg-[#000000bb] border-2 px-3 py-1 rounded-xl transition-all duration-300 group-hover:bg-[#000] group-hover:scale-[1.3]">
            {title} <FaRegArrowAltCircleRight />
          </p>
        </div>
      </div>
    </div>
  );
}

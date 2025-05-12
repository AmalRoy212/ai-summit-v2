"use client";

import React from "react";
import Props from "./IHeaders";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

export default function Typography({ first, middle, last }: Props) {
  return (
    <div className="w-full overflow-hidden flex flex-col justify-center items-center py-10">
      <motion.div
        variants={slideInFromTop}
        initial="visible"
        className="text-[40px] flex md:flex-row flex-col gap-4 font-medium text-center text-gray-200"
      >
        {first}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          <span>{middle}</span>{" "}
        </span>
        {last}
      </motion.div>
      <div className="border-b-2 border-slace-100 w-[300px] mt-2"></div>
    </div>
  );
}

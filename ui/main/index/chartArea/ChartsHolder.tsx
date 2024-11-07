"use client";
import SubHeadings from "@/ui/sub/headers/SubHeadings";
import JobFunctionCharts from "@/ui/sub/index/charts/PipeChart";
import ApexChart from "@/ui/sub/index/charts/PolarChart";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

function ChartsHolder() {
  return (
    <div>
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          BY{" "}
        </span>
        JOB TITLE
      </motion.div>
      <div className="md:w-full min-h-[500px] flex md:flex-row flex-col z-20 justify-center items-center mb-10 px-5">
        <div
          className="md:w-1/3 h-[400px] flex flex-col items-center md:bg-[#020524] shadow-2xl"
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        >
          <SubHeadings heading="BY SENIORITY" fontSize={8} />
          <ApexChart />
        </div>
        <div
          className="w-2/3 md:h-[400px] flex flex-col items-center md:bg-[#030621] shadow-lg"
          style={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <SubHeadings heading="BY JOB FUNCTION" fontSize={8} />
          <JobFunctionCharts />
        </div>
      </div>
    </div>
  );
}

export default ChartsHolder;

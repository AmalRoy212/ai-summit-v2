"use client";
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
      <div className="w-full min-h-[500px] flex md:flex-row flex-col z-20 justify-center items-center mb-10">
        <ApexChart />
        <JobFunctionCharts />
      </div>
    </div>
  );
}

export default ChartsHolder;

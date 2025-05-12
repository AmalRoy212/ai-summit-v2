import React from "react";
import CardsProvider from "@/ui/sub/cardsProvider/CardsProvider";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

export default function IndustryCards() {
  const progressData = [
    {
      value: 45,
      title: "SCHOOLS",
      color: "primary",
    },
    {
      value: 50,
      title: "GOVERNMENT",
      color: "warning",
    },
    {
      value: 45,
      title: `MINISTRY OF EDUCATION`,
      color: "success",
    },
    {
      value: 68,
      title: "ACADEMICS",
      color: "danger",
    },
  ];

  const progressBarData = [
    {
      title: "HEAD OF SCHOOL 45%",
      value: 45,
    },
    {
      title: "MINISTRIES & AUTHORITIES 40%",
      value: 40,
    },
    {
      title: "KEY STAKEHOLDERS 50%",
      value: 50,
    },
    {
      title: "INVESTORS & OWNERS 78%",
      value: 78,
    },
    {
      title: "ENTERPRISE COMPANIES 36%",
      value: 36,
    },
    {
      title: "HEAD OF DEPARTMENTS 46%",
      value: 46,
    },
  ];

  return (
    <>
      <motion.div
        variants={slideInFromTop}
        className="w-full mx-auto max-w-7xl flex justify-start"
      >
        <div className="w-[400px] shadow-xl bg-gradient-to-r from-[#1c0069] to-[#0000] ml-5 tracking-wider px-5 py-1 rounded-xl text-[30px] font-medium text-start mr-5 text-gray-200">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            BY{" "}
          </span>
          INDUSTRY
        </div>
      </motion.div>
      <CardsProvider />
    </>
  );
}

import React from "react";
import RoundCard from "./JobTitleCards";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import SectoralCard from "./SectoralCard";

interface data {
  bgColor: string;
  number: string;
  title: string;
  animation: string;
}
interface RoundHolderProps {
  data?: data[];
}
const dataTwo = [
  {
    bgColor: "bg-[#6666ff]",
    number: "~20%",
    title: "C-level / Founder",
    animation: "fade-right",
  },
  {
    bgColor: "bg-[#8080ff]",
    number: "~30%",
    title: "VP / SVP / EVP / Director",
    animation: "fade-right",
  },
  {
    bgColor: "bg-[#cc33ff]",
    number: "~22%",
    title: "Department / Division Head",
    animation: "fade-right",
  },
  {
    bgColor: "bg-[#ac00e6]",
    number: "~28%",
    title: "Senior & Other",
    animation: "fade-right",
  },
];

const dataOne = [
  {
    bgColor: "bg-[#6666ff]",
    number: "~54%",
    title: "Enterprises / Corporates",
    animation: "fade-left",
  },
  {
    bgColor: "bg-[#8080ff]",
    number: "~23%",
    title: "Technology & Startups",
    animation: "fade-left",
  },
  {
    bgColor: "bg-[#cc33ff]",
    number: "~14%",
    title: "Government, Investors, Advisory",
    animation: "fade-left",
  },
  {
    bgColor: "bg-[#ac00e6]",
    number: "~09%",
    title: "Academics, Media & Others",
    animation: "fade-left",
  },
];

export default function AttendiesCardHolder({ data }: RoundHolderProps) {
  return (
    <div className="w-full mx-auto max-w-7xl flex flex-col">
      <motion.div variants={slideInFromTop} className="flex justify-end py-5">
        <div className="w-[400px] shadow-2xl bg-gradient-to-r from-[#000] to-[#1c0069] tracking-wider px-5 py-1 rounded-xl text-[30px] font-medium text-end mr-5 text-gray-200">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            BY{" "}
          </span>
          JOB TITLE
        </div>
      </motion.div>
      <div className="w-full flex md:flex-row flex-col px-5 justify-evenly">
        <div className="w-full md:w-1/4 flex flex-col">
          {dataTwo?.map((item: data) => (
            <RoundCard
              bgColor={item.bgColor}
              number={item.number}
              title={item.title}
              animation={item.animation}
            />
          ))}
        </div>
        <div className="w-full md:w-2/4 flex flex-col px-5 mt-4">
          <SectoralCard />
        </div>
        <div className="w-full md:w-1/4 flex flex-col">
          {dataOne?.map((item: data) => (
            <RoundCard
              bgColor={item.bgColor}
              number={item.number}
              title={item.title}
              animation={item.animation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

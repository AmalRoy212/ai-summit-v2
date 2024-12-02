import React from "react";
import RoundCard from "./RoundCard";
import UnderLineCards from "./UnderLineCards";
import SubHeadings from "@/ui/sub/headers/SubHeadings";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

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

function RoundHolder({ data }: RoundHolderProps) {
  return (
    <div className="w-full flex flex-col py-10">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200 py-10"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          BY{" "}
        </span>
        JOB TITLE
      </motion.div>
      <div className="w-full flex md:flex-row flex-col">
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
        <div className="w-full md:w-2/4 flex flex-col px-5">
          <UnderLineCards />
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

export default RoundHolder;

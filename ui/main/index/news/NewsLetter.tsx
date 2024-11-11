import React from "react";
import Carousel from "./NewsCarousel";
import NewsTicker from "./NewsTicker";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const NewsLetter: React.FC = () => {
  return (
    <div className="md:w-[95%] flex flex-col bg-[#030621] md:mx-auto pt-5 md:px-5 rounded-2xl">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          NEWS & ARTICLES{" "}
        </span>
      </motion.div>
      <div className="flex flex-col md:flex-row px-5 md:my-20  z-10">
        <div className="w-2/3">
          <Carousel />
        </div>
        <div className="w-1/3">
          <NewsTicker />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

import React from "react";
import Carousel from "./NewsCarousel";
import NewsTicker from "./NewsTicker";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const NewsLetter: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          NEWS & ARTICLES{" "}
        </span>
      </motion.div>
      <div className="flex px-5 md:my-20">
        <div className="flex-1">
          <Carousel />
        </div>
        <div className="w-96">
          <NewsTicker />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

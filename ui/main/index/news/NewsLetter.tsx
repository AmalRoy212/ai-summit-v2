import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import NewCarousel from "./newCarousel";

export default function NewsLetter() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft < maxScrollLeft) {
          scrollRef.current.scrollLeft += 10;
        } else {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
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
      <div className="w-full  mx-auto max-w-7xl flex flex-col md:flex-row md:my-20 z-10 gap-x-5">
        <div className="w-full">
          <NewCarousel />
        </div>
      </div>
    </div>
  );
}

// another way to show newses through new letter

// import { Carousel } from "antd";
// import NewsTicker from "./NewsTicker";

// <div className="flex flex-col md:flex-row px-5 md:my-20  z-10">
//   <div className="w-2/3">
//     <Carousel />
//   </div>
//   <div className="w-1/3">
//     <NewsTicker />
//   </div>
// </div>;

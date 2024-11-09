import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

export default function EventName() {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      className="relative flex flex-col items-end gap-6 mt-6 text-5xl md:text-6xl text-bold text-white max-w-[600px] md:w-1/2 md:h-auto h-[220px] pl-5"
      style={{
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        letterSpacing: "-2px", // Adjust according to your preference
      }}
    >
      <span>
        {/* The Intelligent Data, AI & Automation Summit */}
        <span className="text-4xl">THE </span>
        <span className="mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 font-bold">
          {" "}
          INTELLIGENT DATA, AI &{" "}
        </span>
        <span className="text-4xl">AUTOMATION </span>

        <span className="text-5xl"> SUMMIT</span>
      </span>
    </motion.div>
  );
}

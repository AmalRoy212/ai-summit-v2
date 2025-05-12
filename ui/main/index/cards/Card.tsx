"use client";

import React from "react";
import { motion } from "framer-motion";
import TestCards from "../../cards/BusinessCard";
import { staggerContainer } from "@/utils/viewMotions";
import { cardsDataOne, cardsDataTwo } from "@/constants/cards";
import Typography from "@/ui/sub/headers/Typography";

const HappeningCard = () => {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center justify-center mb-20 px-2 md:px-10"
      id="happening"
    >
      <div className="mt-20">
        <Typography first="HAPPENINGS" middle="&" last="INSIGHTS" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center gap-x-4">
        {cardsDataOne.map((card, index) => (
          <TestCards
            key={index}
            index={index}
            src={card.src}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center gap-x-4">
        {cardsDataTwo.map((card, index) => (
          <TestCards
            key={index}
            index={index}
            src={card.src}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HappeningCard;

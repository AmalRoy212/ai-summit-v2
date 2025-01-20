"use client";

import React from "react";
import BgCards from "../bgCards/BgCards";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/viewMotions";
import FundBox from "./FundBox";

function Occation() {
  const cardsData = [
    {
      number: "$49.98 B",
      title: "2024 Market size",
      margin: 20,
    },
    {
      number: "$81.78 B",
      title: "Expected market growth by 2029",
    },
    {
      number: "10.35%",
      title: "CAGR 2029",
    },
  ];

  const fundData = [
    {
      amount: "14",
      description:
        "Regulations and policies related to data and AI published by SDAIA.",
      source: "SDAIA",
      year: "2024",
    },
    {
      amount: "245",
      description:
        "The total number of established data management offices in the public sector until 2024.",
      source: "SDAIA",
      year: "2024",
    },
    {
      amount: "$1.7 Billion",
      description: "The total attracted funds in AI Saudi companies in 2023.",
      source: "Crunchbase",
      year: "2024",
    },
    {
      amount: "75%",
      description:
        "Of the Saudi population is knowledgeable about AI's concept, and 64% knowledgeable about AI use cases and their applications.",
      source: "SDAIA Public Awareness Survey",
      year: "2024",
    },
    {
      amount: "320+",
      description:
        "Government systems integrated in NDB National Data Lake, resulting in 100TB+ of total stored data volume provided by 60+ government entities.",
      source: "SDAIA",
      year: "2024",
    },
    {
      amount: "8.7K+",
      description:
        "Datasets hosted in the NDB Open Data Platform from 249+ government and private entities.",
      source: "SDAIA",
      year: "2024",
    },
    {
      amount: "39%",
      description:
        "Of Saudi government entities are using or experimenting with AI.",
      source: "SDAIA Readiness & Adoption Survey",
      year: "2024",
    },
    {
      amount: "81%",
      description:
        "Of Saudi government entities using or experimenting AI reported that AI has significantly enhanced their service delivery.",
      source: "SDAIA Readiness & Adoption Survey",
      year: "2024",
    },
    {
      amount: "12%",
      description:
        "The estimated AI contribution to Saudi Arabia's GDP from AI by 2030.",
      source: "PwC",
      year: "2017",
    },
    {
      amount: "29%",
      description: "The CAGR of the AI market in Saudi Arabia until 2030.",
      source: "Statista",
      year: "2024",
    },
    {
      amount: "1st",
      description:
        "Place globally in the pillar of government strategy for AI.",
      source: "The Global AI Index - Tortoise",
      year: "2023",
    },
    {
      amount: "2nd",
      description:
        "Place in MENA government readiness for AI implementation in public services delivery.",
      source: "Oxford AI Readiness Index",
      year: "2023",
    },
    {
      amount: "Full Score",
      description:
        "In open government data along with 10 other countries—out of 193 countries—by United Nations.",
      source: "OGDI",
      year: "2022",
    },
    {
      amount: "2nd",
      description:
        "Place globally in terms of positivity and optimism towards AI products and services.",
      source: "Stanford AI Index",
      year: "2023",
    },
    {
      amount: "5",
      description:
        "Of Saudi Arabia's cities are among the top 100 smart cities around the world.",
      source: "IMD Smart City Index",
      year: "2024",
    },
  ];

  return (
    <div className="pb-10">
      <div className="relative h-full w-full flex justify-start px-10 md:mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          WHY SAUDI ?
        </h1>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-fill-transparent"></div>
      </div>

      <div className="md:flex flex-row w-full h-auto py-10 md:py-0">
        {cardsData.map((card, index) => (
          <BgCards key={index} data={card} index={index} />
        ))}
        <motion.div
          variants={zoomIn(0.5, 0.7)}
          initial="hidden"
          whileInView="show"
          className="relative flex flex-col md:w-1/4 w-full h-[50vh] justify-center items-center p-5 md:mt-[-5rem] mt-[-8rem]"
        >
          {/* <h1 className="md: absolute md:top-16 mt-[-9rem] text-5xl md:m-[-1rem] text-center font-bold text-slate-200 z-10">
            $28.50B
          </h1> */}
          <h1 className="font-bold text-6xl text-slate-200 absolute top-36 md:top-14 z-10">
            $28.50B
          </h1>
          <p className="font-bold text-1xl text-slate-300 absolute z-10">
            Current ICT Market value
          </p>
          <div className="absolute top-0 left-0 w-full h-full z-0 md:flex hidden">
            <video
              loop
              autoPlay
              muted
              className="flex transform rotate-90 h-full w-full object-contain"
              src="/videos/cards_bg.mp4/"
            ></video>
          </div>
        </motion.div>
      </div>
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent py-8">
        OVERVIEW
      </h1>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-fill-transparent"></div>
      <p className="text-white md:px-20 px-4 text-base text-center">
        Saudi Arabia, under its transformative Vision 2030, is rapidly
        positioning itself as a global leader in artificial intelligence (AI) by
        leveraging its potential to drive innovation, economic growth, and
        improved public services. Central to this effort is the Saudi Data & AI
        Authority (SDAIA), established in 2019, tasked with driving AI adoption
        across government entities, raising public awareness, and ensuring the
        strategic use of data and AI technologies to create a data-driven
        future. AI, which enables systems to perform tasks requiring human
        intelligence, has evolved significantly since its inception, driven by
        advancements in computing and data availability, and now plays a vital
        role in daily activities and business operations. Globally, AI is
        projected to contribute $15.7 trillion (SAR 58.9 trillion) to the
        economy by 2030, with transformative applications across sectors such as
        healthcare, where it could cut 5-10% of expenses, and smart cities,
        enhancing urban living through intelligent traffic management and
        optimized energy consumption. Recognizing these opportunities, Saudi
        Arabia launched its National Strategy for Data & AI (NSDAI) in 2020,
        aiming to establish itself as a leader in data-driven economies and
        harness AI to enhance economic performance, increase productivity, and
        improve the quality of life for its citizens.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 md:px-10">
        {fundData.map((data, index) => (
          <FundBox
            key={index}
            amount={data.amount}
            description={data.description}
            source={data.source}
            year={data.year}
          />
        ))}
      </div>
      <div className="w-full flex flex-row py-5 px-10">
        <div className="w-1/5 flex justify-center flex-col items-center">
          <h1 className="text-white text-tick text-6xl">
            25<span className="text-3xl">th</span>
          </h1>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-[5px] w-1/3 mb-2 rounded-2xl"></div>
          <p className="text-white text-tick">Riyadh</p>
        </div>
        <div className="w-1/5 flex justify-center flex-col items-center">
          <h1 className="text-white text-tick text-6xl">
            52<span className="text-3xl">ND</span>
          </h1>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-[5px] w-1/3 mb-2 rounded-2xl"></div>
          <p className="text-white text-tick">Makkah</p>
        </div>
        <div className="w-1/5 flex justify-center flex-col items-center">
          <h1 className="text-white text-tick text-6xl">
            55<span className="text-3xl">th</span>
          </h1>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-[5px] w-1/3 mb-2 rounded-2xl"></div>
          <p className="text-white text-tick">Jeddah</p>
        </div>
        <div className="w-1/5 flex justify-center flex-col items-center">
          <h1 className="text-white text-tick text-6xl">
            77<span className="text-3xl">th</span>
          </h1>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-[5px] w-1/3 mb-2 rounded-2xl"></div>
          <p className="text-white text-tick">Medina</p>
        </div>
        <div className="w-1/5 flex justify-center flex-col items-center">
          <h1 className="text-white text-tick text-6xl">
            99<span className="text-3xl">th</span>
          </h1>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-[5px] w-1/3 mb-2 rounded-2xl"></div>
          <p className="text-white text-tick">Al-Khobar</p>
        </div>
      </div>
    </div>
  );
}

export default Occation;

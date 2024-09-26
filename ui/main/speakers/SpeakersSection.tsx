"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThreeDCard } from "../index/3dCards/3D_Speaker";
// import "./App.css"; // Assuming Tailwind is imported here

// Profile data array
const profiles = [
  {
    name: "Dr. Salim Humaid Al-Shuaili",
    title:
      "Director of Artificial Intelligence and Advanced Technology Unit",
    company: " Ministry of Transport, Communication and Information Technology",
    organization: "OMAN",
    image: "/images/speakers/salim.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Dr.Jihad Al Wahshi",
    title: "Head of Data Management",
    company: "Central Bank of Oman",
    organization: "OMAN",
    image: "/images/speakers/img8 (2).png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Faris A Al Kharusi",
    title: "Chief Innovation & Transformation Officer",
    company: "Renaissance services",
    organization: "OMAN",
    image: "/images/speakers/speaker1211.png", // Add correct paths to images
    linkedIn: "#", // Replace with actual LinkedIn profile links
    marginTP: 0,
  },
];

const profilesTwo = [
  {
    name: "Dazza Camilo",
    title: "CEO - Founder",
    company: "Dazza Hodling Group LLC",
    organization: "OMAN",
    image: "/images/speakers/speaker91.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Amjid Ali",
    title: "Chief Information Officer",
    company: "Al Ansari Group",
    organization: "OMAN",
    image: "/images/speakers/img5 (3).png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Bhupendra Pant",
    title: "Chief Information officer & GM of Information Technology OTE Group",
    company: "",
    organization: "OMAN",
    image: "/images/speakers/img7.png",
    linkedIn: "#",
    marginTP: 0,
  },
];

const profilesThree = [
  {
    name: "Fouad Ibrahim",
    title: "CO - Founder & Technical Director",
    company: "Falcon Oilfield Services",
    organization: "OMAN",
    image: "/images/speakers/img6 (2).png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Nuwanka Kottegoda",
    title: "Executive Director BPOS Global ,Founder of ENKII AI Investment Advisor at Mays EV",
    company: "",
    organization: "OMAN",
    image: "/images/speakers/img-4.png",
    linkedIn: "#",
    marginTP: 0,
  },
];

const SpeakerProfiles: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center my-28">
      <div className="text-[40px] font-medium text-center text-gray-200">
        <span className="text-white">
          OUR ESTEAMED SPEAKERS{" "}
          {" "}
        </span>
      </div>

      <div className="flex justify-center gap-8 flex-wrap py-10 ">
        {profiles.map((profile, index) => (
          <ThreeDCard item={profile} index={index} />
        ))}
      </div>

      <div className="flex justify-center gap-8 flex-wrap mt-[-10rem]">
        {profilesTwo.map((profile, index) => (
          <ThreeDCard item={profile} index={index} />
        ))}
      </div>

      <div className="flex justify-center gap-8 flex-wrap mt-[-7.5rem]">
        {profilesThree.map((profile, index) => (
          <ThreeDCard item={profile} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SpeakerProfiles;

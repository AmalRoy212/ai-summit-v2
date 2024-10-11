"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThreeDCard } from "../index/3dCards/3D_Speaker";
import ProfileCard from "@/ui/sub/index/speakers/SpeakersCardComp";
import Headers from "@/ui/sub/headers/Headers";

// Profile data array
const profiles = [
  {
    name: "Talal Bin Ahmed Bin Amer Al Saadi",
    title: "Director of the Office of the Undersecretary",
    company: "Ministry of Interior",
    organization: "OMAN",
    image: "/images/speakers/speaker31111.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "DR. SALIM HUMAID AL-SHUAILI",
    title: "Director of Artificial Intelligence and Advanced Technology Unit",
    company: " Ministry of Transport, Communication and Information Technology",
    organization: "OMAN",
    image: "/images/speakers/salim.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Kawthar Ali Al Hinai",
    title: "Head of Digital Transformation Programs",
    company:
      "General Directorate of Digital Transformation and Empowerment Sector",
    com: "Ministry of Transport, Communication and Information Technology",
    organization: "",
    image: "/images/speakers/kawthar.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "DR.JIHAD AL WAHSHI",
    title: "Head of Data Management",
    company: "Central Bank of Oman",
    organization: "OMAN",
    image: "/images/speakers/img8 (2).png",
    linkedIn: "#",
    marginTP: 0,
  },
];

const profilesTwo = [
  {
    name: "DR.GHALIB ALHOSNI",
    title: "Chief People Officer",
    company: "Omantel",
    com:"Chairperson Omani Society for Human Resource Management (OSHRM)",
    organization: "OMAN",
    image: "/images/speakers/speaker21.jpeg", // Add correct paths to images
    linkedIn: "#", // Replace with actual LinkedIn profile links
    marginTP: 0,
  },
  {
    name: "FARIS A AL KHARUSI",
    title: "Chief Innovation & Transformation Officer",
    company: "Renaissance Services",
    organization: "OMAN",
    image: "/images/speakers/speaker1211.png", // Add correct paths to images
    linkedIn: "#", // Replace with actual LinkedIn profile links
    marginTP: 0,
  },
  {
    name: "Sanjeev Madavi",
    title: "Chief Innovation Officer",
    company: "Kale Logistics",
    organization: "OMAN",
    image: "/images/speakers/Sanjeev_Madavi.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Saud Al Zakwani",
    title: "Head of Digital Transformation Petroleum Development Oman",
    company: "",
    organization: "OMAN",
    image: "/images/speakers/speaker114.png",
    linkedIn: "#",
    marginTP: 0,
  },
];

const profilesThree = [
  {
    name: "DAZZA CAMILO",
    title: "CEO - Founder",
    company: "Dazza Hodling Group LLC",
    organization: "OMAN",
    image: "/images/speakers/speaker91.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "BHUPENDRA PANT",
    title: "Chief Information Officer & GM of Information Technology",
    company: "OTE Group",
    organization: "OMAN",
    image: "/images/speakers/img7.png",
    linkedIn: "#",
    marginTP: 10,
  },
  {
    name: "NUWANKA KOTTEGODA",
    title: "Executive Director BPOS Global ",
    company: "Founder of ENKII AI",
    com: "Investment Advisor at Mays EV",
    organization: "OMAN",
    image: "/images/speakers/img-4.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "AMJID ALI",
    title: "Chief Information Officer",
    company: "Al Ansari Group",
    organization: "OMAN",
    image: "/images/speakers/img5 (3).png",
    linkedIn: "#",
    marginTP: 10,
  },
  
];

const profilesFour = [
  {
    name: "Dr.Haitham Hilal Amur ALHajri",
    title: "Head - Cyber & Information Security",
    company: "Oman Housing Bank",
    organization: "OMAN",
    image: "/images/speakers/speaker121.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "FOUAD IBRAHIM",
    title: "CO - Founder & Technical Director",
    company: "Falcon Oilfield Services",
    organization: "OMAN",
    image: "/images/speakers/img6 (2).png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "RAMYA SANKARI",
    title: "Head of Information Technology",
    company: "Zawawi Powertech Engineering LLC",
    organization: "OMAN",
    image: "/images/speakers/remya.png",
    linkedIn: "#",
    marginTP: 0,
  },
];

const SpeakerProfiles: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="speakers"
      className="w-full flex flex-col justify-center items-center my-28 px-16 z-10"
    >
      <Headers first="OUR ESTEEMED" middle="SPEAKERS" last="" />

      <div className="flex mt-[-5rem] justify-center gap-2  py-10 md:flex-row flex-col">
        {profiles.map((profile, index) => (
          <ProfileCard item={profile} index={index} />
        ))}
      </div>

      <div className="flex mt-[-5rem] justify-center gap-2  py-10 md:flex-row flex-col">
        {profilesTwo.map((profile, index) => (
          <ProfileCard item={profile} index={index} />
        ))}
      </div>

      <div className="flex mt-[-5rem] justify-center gap-2  py-10 md:flex-row flex-col">
        {profilesThree.map((profile, index) => (
          <ProfileCard item={profile} index={index} />
        ))}
      </div>

      <div className="flex mt-[-5rem] justify-center gap-2  py-10 md:flex-row flex-col">
        {profilesFour.map((profile, index) => (
          <ProfileCard item={profile} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SpeakerProfiles;

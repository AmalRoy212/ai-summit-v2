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
    name: "Nezar Alturki",
    title: "Chief Information Officer",
    company: "Ministry of National Guard",
    organization: "OMAN",
    image: "/images/speakers/img1.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Ismail A. Almakrami",
    title: "Vice President of Data Management",
    company: "Emkan Finance",
    organization: "OMAN",
    image: "/images/speakers/img2.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Muqbil Almuqbil",
    title: "Director of Data Management",
    company:
      "Saudi Food & Drug Authority (SFDA)",
    com: "",
    organization: "",
    image: "/images/speakers/img3.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "DR.Jalal Alowibdi",
    title: "Director, Data Analysis & Business Intelligence Center",
    company: "Ministry of Hajj & Umrah",
    organization: "OMAN",
    image: "/images/speakers/img4.png",
    linkedIn: "#",
    marginTP: 0,
  },
];

const profilesTwo = [
  {
    name: "Ladle Patel",
    title: "Senior Advisor, Advanced Data Analytics",
    company: "Arab National Bank",
    com:"",
    organization: "OMAN",
    image: "/images/speakers/img5.png",
    linkedIn: "#", 
    marginTP: 0,
  },
  {
    name: "Ghadah Almalki",
    title: "Data Director",
    company: "State Properties General Authority",
    organization: "OMAN",
    image: "/images/speakers/img6.png", // Add correct paths to images
    linkedIn: "#", // Replace with actual LinkedIn profile links
    marginTP: 0,
  },
  {
    name: "Mushtaq Khan",
    title: "General Manager of Automation & Digital Transformation",
    company: "National Water Company(NWC)",
    organization: "OMAN",
    image: "/images/speakers/img7.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Sivakumar Seshadri",
    title: "Chief Digital Officer",
    company: "General organization of Social Insurance (GOSI)",
    organization: "OMAN",
    image: "/images/speakers/img8.png",
    linkedIn: "#",
    marginTP: 0,
  },
];

const profilesThree = [
  {
    name: "Waqar Afzal",
    title: "Head of Data Science",
    company: " Medgulf Saudi Arabia",
    organization: "OMAN",
    image: "/images/speakers/img9.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Dauaa Shalabi",
    title: "Digital Transformation Advisor",
    company: "Ministry of Transport and Logistic Services",
    organization: "OMAN",
    image: "/images/speakers/img10.png",
    linkedIn: "#",
    marginTP: 10,
  },
  {
    name: "Nawaf Alghamdi",
    title: "Director of Data and AI",
    company: "Council Of Health Insurance",
    com: "",
    organization: "OMAN",
    image: "/images/speakers/img11.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "AMJID ALITurki AlMukhlfi",
    title: "Director of Data Management",
    company: "National Center for Vegetation Cover",
    organization: "OMAN",
    image: "/images/speakers/img12.png",
    linkedIn: "#",
    marginTP: 10,
  },
  
];

// const profilesFour = [
//   {
//     name: "Dr.Haitham Hilal Amur ALHajri",
//     title: "Head - Cyber & Information Security",
//     company: "Oman Housing Bank",
//     organization: "OMAN",
//     image: "/images/speakers/speaker121.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "FOUAD IBRAHIM",
//     title: "CO - Founder & Technical Director",
//     company: "Falcon Oilfield Services",
//     organization: "OMAN",
//     image: "/images/speakers/img6 (2).png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "RAMYA SANKARI",
//     title: "Head of Information Technology",
//     company: "Zawawi Powertech Engineering LLC",
//     organization: "OMAN",
//     image: "/images/speakers/remya.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
// ];

const SpeakerProfiles: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="speakers" className="w-full flex flex-col items-center my-28 px-4 md:px-16 z-10">
      <Headers first="OUR ESTEEMED" middle="SPEAKERS" last="" />
      
      <div className="flex flex-wrap justify-center gap-4 py-10">
        {profiles.map((profile, index) => (
          <ProfileCard item={profile} index={index} />
        ))}
        {profilesTwo.map((profile, index) => (
          <ProfileCard item={profile} index={index} />
        ))}
        {profilesThree.map((profile, index) => (
          <ProfileCard item={profile} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SpeakerProfiles;

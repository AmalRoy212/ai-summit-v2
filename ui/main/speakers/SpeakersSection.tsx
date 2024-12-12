"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThreeDCard } from "../index/3dCards/3D_Speaker";
import ProfileCard from "@/ui/sub/index/speakers/SpeakersCardComp";
import Headers from "@/ui/sub/headers/Headers";
import NewProfileCard from "@/ui/sub/index/speakers/NewSpeaker";

// Profile data array
const profiles = [
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
    name: "Dr. Mohammed Al Dighriri",
    title: "General Director of Data Modeling and Analysis",
    company: "National Center for Environmental Compliance (NCECKSA)",
    organization: "OMAN",
    image: "/images/speakers/speaker33.png",
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
    name: "Neeti Khatri",
    title: "AVP Data & Insights",
    company: "Public Investment Fund (PIF)",
    organization: "OMAN",
    image: "/images/speakers/speaker34.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Muqbil Almuqbil",
    title: "Director of Data Management",
    company: "Saudi Food & Drug Authority (SFDA)",
    com: "",
    organization: "",
    image: "/images/speakers/img3.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Manal AlNemari",
    title: "Digital Technology Advisor",
    company: "Ministry of Health",
    com: "",
    organization: "OMAN",
    image: "/images/speakers/speaker45.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Turki AlMukhlfi",
    title: "Director of the Data Management",
    company: "Confidential",
    organization: "OMAN",
    image: "/images/speakers/img12.png",
    linkedIn: "#",
    marginTP: 10,
  },
  {
    name: "Dr. Jihad Al Wahshi ",
    title: "Head of Data Management",
    company: "Central Bank of Oman (CBO)",
    organization: "OMAN",
    image: "/images/speakers/speaker32.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Filip Nekvinda",
    title: "Chief Information & Digital Officer",
    company: "Abdul Latif Jameel Enterprises",
    organization: "OMAN",
    image: "/images/speakers/speaker31.png",
    linkedIn: "#",
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
    name: "DR. Louai Alarabi",
    title: "Chief Data Analytics Engineer",
    company: "SITE",
    organization: "OMAN",
    image: "/images/speakers/speaker36.png",
    linkedIn: "#",
    marginTP: 0,
    fit: "cover",
  },
  {
    name: "Abbasi Poonawala",
    title: "Executive Director Enterprise Architecture",
    company: "Alinma Bank",
    organization: "OMAN",
    image: "/images/speakers/speaker35.png",
    linkedIn: "#",
    marginTP: 0,
    fit: "cover",
  },
  {
    name: "Muhammad Zohaib",
    title: "Director BI & Data Analytics",
    company: "Salam Mobile",
    organization: "OMAN",
    image: "/images/speakers/speaker37.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Mushtaq Ahmed",
    title: "Director Enterprise Architecture & Digital Strategy",
    company: "Saudi Post (SPL)",
    organization: "OMAN",
    image: "/images/speakers/speaker43.png",
    linkedIn: "#",
    marginTP: 0,
    // fit: "cover",
  },
  {
    name: "Ayub Aldakael",
    title: "Director of Enterprise Management",
    company: "Confidential Government",
    organization: "OMAN",
    image: "/images/speakers/speaker42.png",
    linkedIn: "#",
    marginTP: 0,
    // fit: "cover",
  },
  {
    name: "Ángel Narciso",
    title: "Senior Director  Data , Analytics & AI",
    company: "Takamol Holding",
    organization: "OMAN",
    image: "/images/speakers/speaker40.png",
    linkedIn: "#",
    marginTP: 0,
    // fit: "cover",
  },
  {
    name: "Ali Hummadi",
    title: "Executive Director of Digitalization",
    company: "ARASCO",
    organization: "OMAN",
    image: "/images/speakers/speaker44.png",
    linkedIn: "#",
    marginTP: 0,
    // fit: "cover",
  },
  {
    name: "Mohammad Alomair",
    title: "Chief Data Officer",
    company: "Saudi Irrigation Orgnaization",
    organization: "OMAN",
    image: "/images/speakers/speaker41.png",
    linkedIn: "#",
    marginTP: 0,
    // fit: "cover",
  },
  {
    name: "MOHAMMAD SHALAN",
    title: "VP of Professional Development & Training",
    company: "PMI KSA Chapter",
    organization: "OMAN",
    image: "/images/speakers/speaker39.png",
    linkedIn: "#",
    marginTP: 0,
    fit: "cover",
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
  {
    name: "Ladle Patel",
    title: "Senior Advisor, Advanced Data Analytics",
    company: "Arab National Bank",
    com: "",
    organization: "OMAN",
    image: "/images/speakers/img5.png",
    linkedIn: "#",
    marginTP: 0,
  },
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
    name: "Dr. Debashis Dutta",
    title: "Senior Advisor -Risk Group",
    company: "Saudi EXIIM Bank",
    organization: "OMAN",
    image: "/images/speakers/speaker38.png",
    linkedIn: "#",
    marginTP: 0,
  },
];

// const profilesTwo = [
//   {
//     name: "Waqar Afzal",
//     title: "Head of Data Science",
//     company: " Medgulf Saudi Arabia",
//     organization: "OMAN",
//     image: "/images/speakers/img9.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Dauaa Shalabi",
//     title: "Digital Transformation Advisor",
//     company: "Ministry of Transport and Logistic Services",
//     organization: "OMAN",
//     image: "/images/speakers/img10.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "DR.Jalal Alowibdi",
//     title: "Director, Data Analysis & Business Intelligence Center",
//     company: "Ministry of Hajj & Umrah",
//     organization: "OMAN",
//     image: "/images/speakers/img4.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
// ];


const SpeakerProfiles: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="speakers"
      className="w-full flex flex-col items-center mb-28 px-4 md:px-16 z-10"
    >
      <Headers first="OUR ESTEEMED" middle="SPEAKERS" last="" />

      <div className="flex flex-wrap justify-center gap-4 py-10 shadow-2xl rounded-2xl">
        {profiles.map((profile, index) => (
          <ProfileCard item={profile} index={index} />
        ))}
        {/* {profilesTwo.map((profile, index) => (
          <ProfileCard item={profile} index={index} />
        ))} */}
      </div>
    </div>
  );
};

export default SpeakerProfiles;

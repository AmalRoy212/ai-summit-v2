"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./App.css"; // Assuming Tailwind is imported here

// Profile data array
const profiles = [
  {
    name: "Faris A Al Kharusi",
    title: "Chief Innovation & Transformation Officer Renaissance services",
    organization: "OMAN",
    image: "/images/speakers/speaker1211.png", // Add correct paths to images
    linkedIn: "#", // Replace with actual LinkedIn profile links
    marginTP: 0,
  },
  {
    name: "Dazza Camilo",
    title: "CEO - FOUNDER, DAZZA HOLDING GROUP LLC",
    organization: "OMAN",
    image: "/images/speakers/speaker91.png",
    linkedIn: "#",
    marginTP: 0,
  },
  {
    name: "Dr. Salim Humaid Al-Shuaili",
    title:
      "Director of Artificial Intelligence and Advanced Technology Unit & Ministry of Transport, Communication and Information Technology",
    organization: "OMAN",
    image: "/images/speakers/salim.png",
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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          SPEAKERS{" "}
        </span>
      </div>
      <div className="flex justify-center gap-8 flex-wrap py-10 ">
        {profiles.map((profile, index) => (
          <div
            style={{
              backgroundImage: 'url("images/statics/delegate.jpg")',
            }}
            key={index}
            className="w-72 bg-white shadow-md rounded-xl overflow-hidden"
            data-aos="zoom-in"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className={`h-[300px] w-full object-cover mt-${profile.marginTP}`}
            />
            <div className="p-4 text-center" style={{ borderTopWidth: 1 }}>
              <h3 className="text-lg font-bold">{profile.name}</h3>
              <p className="text-sm text-gray-800 mt-2">{profile.title}</p>
              {/* <p className="text-xl text-gray-700 mt-1">
                {profile.organization}
              </p> */}
              {/* <a
                  href={profile.linkedIn}
                  className="inline-block mt-4 bg-blue-500 text-white py-1 px-3 rounded-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerProfiles;

"use client";

import SpeakersEnquiryForm from "@/ui/main/speakers-form/SpeakersForm";
import Headers from "@/ui/sub/headers/Headers";
import React, { useEffect } from "react";

const sponsorsPage: React.FC = () => {

  useEffect(() => {
    localStorage.setItem("reloaded", "true");
  }, []);

  return (
    <div className="bg-contain bg-center flex flex-col justify-center items-center">
      <div
        style={{
          backgroundImage: 'url("images/bg/bg1.jpeg")',
          backgroundSize: 'cover',       // This will make the image cover the entire div
          backgroundPosition: 'center',  // This centers the background image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        }}
        className="bg-black md:h-[400px] h-[300px] bg-opacity-60 w-full  flex justify-center"
      >
        <div className="bg-black bg-opacity-60 w-full md:py-24 flex justify-center">
          <Headers first="" middle="SPEAKER" last="APPLICATION" />
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("images/statics/bg.jpg")',
          backgroundBlendMode: "overlay",
          backgroundColor:"rgba(0, 0, 0, 0.53)"
        }}
        className="w-full bg-contain py-20 flex flex-col md:flex-row justify-center items-start relative"
      >
        <SpeakersEnquiryForm/>
      </div>
    </div>
  );
};

export default sponsorsPage;

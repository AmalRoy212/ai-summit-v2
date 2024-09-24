"use client";

import SpeakersEnquiryForm from "@/ui/main/speakers-form/SpeakersForm";
import Headers from "@/ui/sub/headers/Headers";
import React from "react";

const sponsorsPage: React.FC = () => {
  return (
    <div className="bg-contain bg-center flex flex-col justify-center items-center">
      <div
        style={{
          // height: "400px",
          backgroundImage: 'url("images/statics/delegates-bg-1.jpg")',
        }}
        className="bg-black md:h-[400px] h-[300px] bg-opacity-60 w-full  flex justify-center"
      >
        <div className="bg-black bg-opacity-60 w-full md:py-24 flex justify-center">
          <Headers first="" middle="SPEAKERS" last="ENQUIRY" />
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

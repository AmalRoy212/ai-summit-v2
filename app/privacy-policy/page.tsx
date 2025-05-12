"use client";

import FooterHolder from "@/ui/main/footer/FooterHolder";
import PrivacyPage from "@/ui/main/privacy-policy/PrivacyPage";
import Headers from "@/ui/sub/headers/Typograpy";
import React, { useEffect } from "react";

const Page: React.FC = () => {

  useEffect(() => {
    localStorage.setItem("reloaded", "true");
  }, []);

  return (
    <div className="bg-contain bg-center flex flex-col justify-center items-center">
      <div
        style={{
          backgroundImage: 'url("images/bg/bg1.jpeg")',
          backgroundSize: "cover", // This will make the image cover the entire div
          backgroundPosition: "center", // This centers the background image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
        className="bg-black bg-opacity-60 w-full md:h-[400px] h-[300px] flex justify-center"
      >
        <div className="bg-black bg-opacity-60 w-full md:py-24 flex justify-center">
          <Headers first="" middle="Privacy " last="Policy" />
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("images/statics/bg.jpg")',
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.53)",
        }}
        className="w-full bg-contain py-20 flex flex-col md:flex-row justify-center items-start min-h-screen"
      >
       <PrivacyPage/>
      </div>
      <FooterHolder/>
    </div>
  );
};

export default Page;

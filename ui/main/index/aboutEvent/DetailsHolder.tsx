"use client";

import React from "react";
import DetailsProvider from "@/ui/sub/index/aboutEvent/DetailsProvider";
import Typography from "@/ui/sub/headers/Typography";

export default function AboutEvent() {
  return (
    <div
      id="about-us"
      className="w-full max-w-7xl mx-auto overflow-hidden mt-20"
    >
      <Typography first="ABOUT" middle="THE" last="CONFERENCE" />
      <DetailsProvider />
    </div>
  );
}

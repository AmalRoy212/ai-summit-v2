"use client";

import { useEffect } from "react";
import Cards from "@/ui/main/cards/Cards";
import AboutEvent from "@/ui/main/index/aboutEvent/DetailsHolder";
import Pricing from "@/ui/main/index/Pricing";
import AwardsProvider from "@/ui/main/index/awardSection/AwardsProvide";
import HappeningCard from "@/ui/main/index/cards/Card";
import ChartsHolder from "@/ui/main/index/chartArea/ChartsHolder";
import ContactUs from "@/ui/main/index/contactUs/ContactUs";
import End from "@/ui/main/index/end/End";
import Hero from "@/ui/main/index/hero/Hero";
import Sponsors from "@/ui/main/index/sponsors/Sponsors";
import StartUp from "@/ui/main/index/startUp/StartUp";
import StarsCanvas from "@/ui/main/starBackground/StarBackground";
import WhoIndustries from "@/ui/sub/index/WhyIndustries/WhyIndustries";
import SpeakerProfiles from "../ui/main/speakers/SpeakersSection";
import CaroselHolder from "@/ui/main/index/caroselHolder/CaroselHolser";
import NewsLetter from "@/ui/main/index/news/NewsLetter";
import WhitePaper from "@/ui/sub/round-table/RoundTableMeeting";
import EventName from "@/ui/main/event-name/EventName";
import Footer from "@/ui/main/footer/Footer";
import FooterHolder from "@/ui/main/footer/FooterHolder";
import IndustryCards from "@/ui/main/cards/Cards";
import AttedeesAndIndustries from "@/ui/main/index/Attends/Attendes&Industries";
import AttendiesCardHolder from "@/ui/main/who/AttendiesCardHolder";
import KeyTopics from "@/ui/main/index/topics/KeyTopics";
import ThemesGrid from "@/ui/main/theme/ThemeCardContainer";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
      window.location.reload();
    }
  }, []);

  return (
    <main className="h-full w-full overflow-hidden">
      {/* <StarsCanvas /> */}
      <div className="flex flex-col ">
        <Hero />
        <AboutEvent />
        <HappeningCard />
        {/* <SpeakerProfiles /> */}
        {/* <CaroselHolder /> */}
        <AttedeesAndIndustries />
        <IndustryCards />
        <AttendiesCardHolder />
        <ThemesGrid/>
        {/* <ChartsHolder /> */}
        {/* <AwardsProvider /> */}
        <KeyTopics />
        {/* <WhoIndustries /> */}
        {/* <Pricing /> */}
        {/* <Sponsors /> */}
        <WhitePaper />
        {/* <StartUp /> */}
        {/* <End /> */}
        <NewsLetter />
        {/* <div className="w-full flex justify-center items-center">
          <EventName />
        </div> */}
        {/* <ContactUs /> */}
        <FooterHolder />
      </div>
    </main>
  );
}

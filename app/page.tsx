import Cards from "@/ui/main/cards/Cards";
import Pricing from "@/ui/main/index/Pricing";
import DetailsHolder from "@/ui/main/index/aboutEvent/DetailsHolder";
import AwardsProvider from "@/ui/main/index/awardSection/AwardsProvide";
import Card from "@/ui/main/index/cards/Card";
import ChartsHolder from "@/ui/main/index/chartArea/ChartsHolder";
import ContactUs from "@/ui/main/index/contactUs/ContactUs";
import Encryption from "@/ui/main/index/encryption/Encryption";
import End from "@/ui/main/index/end/End";
import Hero from "@/ui/main/index/hero/Hero";
import Sponsors from "@/ui/main/index/sponsors/Sponsors";
import StartUp from "@/ui/main/index/startUp/StartUp";
import TopicsProvide from "@/ui/main/index/topics/TopicsProvide";
import StarsCanvas from "@/ui/main/starBackground/StarBackground";
import WhoIndustries from "@/ui/sub/index/WhyIndustries/WhyIndustries";
import SpeakerProfiles from "../ui/main/speakers/SpeakersSection";

export default function Home() {
  return (
    <main className="h-full w-full md:w-[100%] overflow-hidden">
      <StarsCanvas />
      <div className="flex flex-col ">
        <Hero />
        <DetailsHolder />
        <Card />
        <SpeakerProfiles/>
        <Encryption />
        <Cards />
        <ChartsHolder />
        {/* <AwardsProvider /> */}
        <TopicsProvide />
        <WhoIndustries />
        <Pricing />
        {/* <Sponsors /> */}
        <StartUp />
        <End />
        {/* <ContactUs /> */}
      </div>
    </main>
  );
}

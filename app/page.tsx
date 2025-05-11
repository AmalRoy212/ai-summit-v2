"use client";

import { useEffect } from "react";
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
import CaroselHolder from "@/ui/main/index/caroselHolder/CaroselHolser";
import NewsLetter from "@/ui/main/index/news/NewsLetter";
import WhitePaper from "@/ui/sub/round-table/RoundTableMeeting";
import EventName from "@/ui/main/event-name/EventName";
import RoundHolder from "@/ui/main/who/RoundHolder";
import Footer from "@/ui/main/footer/Footer";
import FooterHolder from "@/ui/main/footer/FooterHolder";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
      window.location.reload();
    }
  }, []);

  return (
    <main className="h-full w-full md:w-[100%] overflow-hidden">
      <StarsCanvas />
      <div className="flex flex-col ">
        <Hero />
        <DetailsHolder />
        <Card />
        {/* <SpeakerProfiles /> */}
        {/* <CaroselHolder /> */}
        <Encryption />
        <Cards />
        <RoundHolder />
        {/* <ChartsHolder /> */}
        {/* <AwardsProvider /> */}
        <TopicsProvide />
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
        <FooterHolder/>
      </div>
    </main>
  );
}

// "use client";
// import React, { useEffect, useState } from 'react';

// const GoogleSheetDataFetcher = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   const sheetId = '1EA4fO94ghldM-QZwIbaY5S0SDdgqh5Y29chCMkblcA4'; // Replace with your Google Sheet ID
//   const apiKey = 'AIzaSyBA-tUF-rsmevb1TJ-dfO-SdOAZcPTIeJ0';   // Replace with your API key

//   const fetchData = async () => {
//     const sheetRange = 'Sheet1!A1:E10'; // Adjust the range as needed
//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}?key=${apiKey}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Failed to fetch data from Google Sheets');
//       }
//       const result = await response.json();
//       console.log(result.values);
//       setData(result.values);  // Assuming the sheet data is in a 2D array
//     } catch (err : any) {
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className='bg-white h-screen w-full flex flex-col items-center justify-center p-4'>
//       <h2>Google Sheet Data</h2>
//       {error && <p>Error: {error}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>Column 1</th>
//             <th>Column 2</th>
//             <th>Column 3</th>
//             <th>Column 4</th>
//             <th>Column 5</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((row :any, index) => (
//               <tr key={index}>
//                 {row?.map((cell : any, cellIndex : any) => (
//                   <td key={cellIndex}>{cell}</td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={5}>No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GoogleSheetDataFetcher;

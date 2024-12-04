"use client"
import Topics from "@/ui/sub/index/topics/Topics";
import React from "react";
import DetailHeading from "../headings/DetailHeading";

function TopicsProvide() {
  const data = [
    {
      img: "/images/topics/image1.jpeg",
      title : "Digital Excellence",
      dis: "How Can Organizations Drive Digital Transformation to Enhance Customer Experience and Operational Efficiency?",
    },
    {
      img: "/images/topics/img2.jpeg",
      title : "Strategic Automation",
      dis: "How can Companies Leverage Intelligent Automation to Align Strategy, Navigate Technological Landscapes, Ensure Compliance, and Deliver Optimal Solutions?",
    },
    {
      img: "/images/topics/img3.jpeg",
      title : "Seamless Solutions",
      dis: "Transforming Backlog Chaos into Seamless Solutions with Low-Code and No-Code Magic",
    },
    {
      img: "/images/topics/img4.jpeg",
      title : "Agile Data",
      dis: "Data Management and Virtualization – Enhancing Data Access and Agility",
    },
    // {
    //   img: "/images/topics/img5.jpeg",
    //   title : "1.	Digital Excellence ",
    //   dis: "Generative AI in Innovation: The role of Generative AI in product development, creative processes, and innovation.",
    // },
  ];

  const dataTwo = [
    {
      img: "/images/topics/img6.jpeg",
      title : "AI Synergy",
      dis: "Seamlessly Connect, Intelligently Automate, and Powerfully Scale AI-Driven Experiences",
    },
    {
      img: "/images/topics/img7.jpeg",
      title : "Business Intelligence",
      dis: "Optimizing Decision-Making with Seamless AI and BI Integration: Empowering the Workforce with Actionable Insights and Governed, Secure Data",
    },
    {
      img: "/images/topics/img8.jpeg",
      title : "Real-Time Integration",
      dis: "Enterprise Integration: Harnessing the Power of a Real-Time, Composable Data Architecture",
    },
    {
      img: "/images/topics/img9.jpeg",
      title : "Generative Potential",
      dis: "Unlocking the Potential of Generative AI: Enhanced Interactivity, Market Growth, and Overcoming Implementation Barriers",
    },
    // {
    //   img: "/images/topics/img10.jpeg",
    //   dis: "AI and Automation in Emerging Markets: Opportunities and challenges in deploying AI and automation in developing regions.",
    // },
  ];

  // const dataThree = [
  //   {
  //     img: "/images/topics/img11.jpeg",
  //     dis: "Robotic Process Automation (RPA): Automating routine tasks to improve efficiency and reduce costs.",
  //   },
  //   {
  //     img: "/images/topics/img12.jpeg",
  //     dis: "Advanced Data Analytics: Transforming raw data into actionable insights for competitive advantage.",
  //   },
  //   {
  //     img: "/images/topics/img13.jpeg",
  //     dis: "Real-World AI Use Cases: Success stories and lessons learned from AI implementations across various industries.",
  //   },
  //   {
  //     img: "/images/topics/img14.jpeg",
  //     dis: "Future of Generative AI: Exploring the next frontier of AI creativity and its potential impact on multiple sectors.",
  //   },
  //   {
  //     img: "/images/topics/img15.jpeg",
  //     dis: "Business Intelligence (BI) Trends: Exploring current and emerging trends in BI, including advanced visualization tools, real-time analytics, and integrating BI with AI for deeper insights.",
  //   },
  // ];

  return (
    <div id="topics" className="mt-20">
      <DetailHeading
        nanoHeading=""
        mainHeading="KEY TOPICS OF DISCUSSION"
        miniHeading=""
      />
      <div className="flex  md:flex-row flex-col w-[100%] h-auto justify-center items-center px-10">
        {data.map((dat, index) => (
          <Topics key={index} data={dat} index={index} />
        ))}
      </div>
      <div className="flex mt-[] md:flex-row flex-col w-[100%] h-auto justify-center items-center p-10">
        {dataTwo.map((dat, index) => (
          <Topics key={index} data={dat} index={index} />
        ))}
      </div>
      {/* <div className="flex mt-[-5.4rem] md:flex-row flex-col w-[100%] h-auto justify-center items-center p-10">
        {dataThree.map((dat, index) => (
          <Topics key={index} data={dat} index={index} />
        ))}
      </div> */}
      {/* <div className="flex mt-[-5.5rem]  md:flex-row flex-col w-[100%] h-auto justify-center items-center p-10">
        <Topics key={90} index={3} data={dataThree} />
      </div> */}
    </div>
  );
}

export default TopicsProvide;

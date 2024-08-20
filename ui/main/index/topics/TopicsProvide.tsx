"use client"
import Topics from "@/ui/sub/index/topics/Topics";
import React from "react";
import DetailHeading from "../headings/DetailHeading";

function TopicsProvide() {
  const data = [
    {
      img: "/images/miniCards/img7.png",
      dis: "AI-Powered Decision Making: Leveraging AI to enhance strategic business decisions and operational efficiency.",
    },
    {
      img: "/images/miniCards/img5.png",
      dis: "Data-Driven Transformation: Utilizing big data analytics to drive business growth and innovation.",
    },
    {
      img: "/images/miniCards/img3.png",
      dis: "Future of Work with Automation: How automation is reshaping workforce dynamics and business processes.",
    },
    {
      img: "/images/miniCards/img8.png",
      dis: "AI in Predictive Analytics: Harnessing AI to predict market trends, customer behavior, and business outcomes.",
    },
    {
      img: "/images/miniCards/img4.png",
      dis: "Generative AI in Innovation: The role of Generative AI in product development, creative processes, and innovation.",
    },
  ];

  const dataTwo = [
    {
      img: "/images/miniCards/img11.png",
      dis: "Data Governance and Security: Ensuring data integrity and security in a rapidly evolving digital landscape.",
    },
    {
      img: "/images/miniCards/img10.png",
      dis: "AI and Automation Integration: Strategies for seamless integration of AI and automation technologies within enterprises.",
    },
    {
      img: "/images/miniCards/img9.png",
      dis: "Building Scalable Data Pipelines: Best practices in data engineering for reliable and scalable data infrastructure.",
    },
    {
      img: "/images/miniCards/img9.png",
      dis: "AI in Customer Experience: Enhancing customer engagement and satisfaction through AI-driven solutions.",
    },
    {
      img: "/images/miniCards/img2.png",
      dis: "AI and Automation in Emerging Markets: Opportunities and challenges in deploying AI and automation in developing regions.",
    },
  ];

  const dataThree = [
    {
      img: "/images/miniCards/img2.png",
      dis: "Robotic Process Automation (RPA): Automating routine tasks to improve efficiency and reduce costs.",
    },
    {
      img: "/images/miniCards/img2.png",
      dis: "Advanced Data Analytics: Transforming raw data into actionable insights for competitive advantage.",
    },
    {
      img: "/images/miniCards/img2.png",
      dis: "Real-World AI Use Cases: Success stories and lessons learned from AI implementations across various industries.",
    },
    {
      img: "/images/miniCards/img2.png",
      dis: "Future of Generative AI: Exploring the next frontier of AI creativity and its potential impact on multiple sectors.",
    },
    {
      img: "/images/miniCards/img2.png",
      dis: "Business Intelligence (BI) Trends: Exploring current and emerging trends in BI, including advanced visualization tools, real-time analytics, and integrating BI with AI for deeper insights.",
    },
  ];

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
      <div className="flex mt-[-3rem] md:flex-row flex-col w-[100%] h-auto justify-center items-center p-10">
        {dataTwo.map((dat, index) => (
          <Topics key={index} data={dat} index={index} />
        ))}
      </div>
      <div className="flex mt-[-5.4rem] md:flex-row flex-col w-[100%] h-auto justify-center items-center p-10">
        {dataThree.map((dat, index) => (
          <Topics key={index} data={dat} index={index} />
        ))}
      </div>
      {/* <div className="flex mt-[-5.5rem]  md:flex-row flex-col w-[100%] h-auto justify-center items-center p-10">
        <Topics key={90} index={3} data={dataThree} />
      </div> */}
    </div>
  );
}

export default TopicsProvide;

"use client";
import TrophyCard from "@/ui/sub/index/awards/Awards";

export default function AwardsProvider() {
  const dataOne = [
    {
      number: 1,
      title: "Trailblazer in AI Innovation",
      description:
        "Awarded to the company or individual leading the charge in AI, with solutions that have disrupted traditional practices and paved the way for future advancements.",
    },
    {
      number: 2,
      title: "Data Mastery Award",
      description:
        "Recognizes the organization that has harnessed the power of data with cutting-edge analytics to drive insightful and actionable business decisions.",
    },
    {
      number: 3,
      title: "Automation Vanguard",
      description:
        "Celebrates the entity that has most effectively utilized automation to revolutionize workflows, enhance operational efficiency, and reduce costs.",
    },
    {
      number: 4,
      title: "Creative AI Pioneer",
      description:
        "Honors the team or platform that has demonstrated exceptional innovation in Generative AI, pushing the boundaries of creativity and content creation.",
    },
    {
      number: 5,
      title: "Data Infrastructure Leader",
      description:
        "Awarded to the organization that has developed the most reliable, scalable, and innovative data infrastructure, enabling seamless data management and analytics.",
    },
    {
      number: 6,
      title: "Synergy Award for AI and Automation",
      description:
        "Recognizes the best integration of AI and automation technologies, creating a seamless, intelligent system that drives substantial improvements across the board.",
    },
    {
      number: 7,
      title: "AI-Enhanced Customer Experience Award",
      description:
        "Celebrates the platform or solution that has transformed customer interactions, delivering personalized and impactful experiences through AI.",
    },
    {
      number: 8,
      title: "Innovative Solutions for Emerging Markets",
      description:
        "Honors the company that has introduced groundbreaking AI or automation solutions tailored to the unique challenges and opportunities in emerging markets.",
    },
    {
      number: 9,
      title: "Data Infrastructure LeaderDigital Transformation Champion",
      description:
        "Recognizes the organization that has successfully driven comprehensive digital transformation, leveraging advanced technologies to stay ahead in a rapidly evolving landscape.",
    },
    {
      number: 10,
      title: "Leadership Excellence Award",
      description:
        "Awarded to a CTO, CIO, or CDO who has demonstrated exceptional leadership and strategic vision in implementing AI, data, or automation technologies within their organization.",
    },
    {
      number: 11,
      title: "Strategic Solutions Provider Award",
      description:
        "Celebrates the solutions provider that has delivered outstanding products or services, significantly impacting their clients' operational efficiency and technological advancement.",
    },
    {
      number: 12,
      title: "Excellence in Data-Driven Insights Award",
      description:
        "Honors the organization or individual that has demonstrated exceptional skill in leveraging data to generate actionable insights, driving strategic decisions and fostering business growth.",
    },
  ];

  const dataTwo = [
    {
      number: 5,
      title: "Data Infrastructure Leader",
      description:
        "Awarded to the organization that has developed the most reliable, scalable, and innovative data infrastructure, enabling seamless data management and analytics.",
    },
    {
      number: 6,
      title: "Synergy Award for AI and Automation",
      description:
        "Recognizes the best integration of AI and automation technologies, creating a seamless, intelligent system that drives substantial improvements across the board.",
    },
    {
      number: 7,
      title: "AI-Enhanced Customer Experience Award",
      description:
        "Celebrates the platform or solution that has transformed customer interactions, delivering personalized and impactful experiences through AI.",
    },
    {
      number: 8,
      title: "Innovative Solutions for Emerging Markets",
      description:
        "Honors the company that has introduced groundbreaking AI or automation solutions tailored to the unique challenges and opportunities in emerging markets.",
    },
  ];

  const dataThree = [
    {
      number: 9,
      title: "Data Infrastructure LeaderDigital Transformation Champion",
      description:
        "Recognizes the organization that has successfully driven comprehensive digital transformation, leveraging advanced technologies to stay ahead in a rapidly evolving landscape.",
    },
    {
      number: 10,
      title: "Leadership Excellence Award",
      description:
        "Awarded to a CTO, CIO, or CDO who has demonstrated exceptional leadership and strategic vision in implementing AI, data, or automation technologies within their organization.",
    },
    {
      number: 11,
      title: "Strategic Solutions Provider Award",
      description:
        "Celebrates the solutions provider that has delivered outstanding products or services, significantly impacting their clients' operational efficiency and technological advancement.",
    },
    {
      number: 12,
      title: "Excellence in Data-Driven Insights Award",
      description:
        "Honors the organization or individual that has demonstrated exceptional skill in leveraging data to generate actionable insights, driving strategic decisions and fostering business growth.",
    },
  ];

  return (
    <section id="attendies">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-[40px] font-medium text-center text-gray-200">
          AWARDS
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            CATEGORIES{" "}
          </span>
        </div>
        {/* <div className="flex mt-10 md:flex-row flex-col w-[100%] h-auto justify-center items-center overflow-x-auto"> */}
        <div className="w-full flex overflow-x-auto">

          {dataOne.map((dat) => (
            <TrophyCard
              number={dat.number}
              title={dat.title}
              description={dat.description}
            />
          ))}
        </div>
        {/* </div> */}
        {/* <div className="flex md:flex-row flex-col w-[100%] h-auto justify-center items-center">
          {dataTwo.map((dat) => (
            <TrophyCard
              number={dat.number}
              title={dat.title}
              description={dat.description}
            />
          ))}
        </div>
        <div className="flex md:flex-row flex-col w-[100%] h-auto justify-center items-center">
          {dataThree.map((dat) => (
            <TrophyCard
              number={dat.number}
              title={dat.title}
              description={dat.description}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}

import React from "react";
import SubHeadings from "../../headers/SubHeadings";

interface JobFunctionChartProps {
  jobFunction: string;
  percentage: number;
}


const JobFunctionChart: React.FC<JobFunctionChartProps> = ({
  jobFunction,
  percentage,
}) => {
  return (
    <div className="flex flex-col items-center ml-2">
      <div className="text-center text-white text-[10px] font-light mb-2 w-32">
        {jobFunction}
      </div>
      <div className="relative h-32 w-5 flex flex-col justify-end">
        {/* Grey Part */}
        <div className="bg-gray-300 h-full rounded-full"></div>
        {/* Pink Part */}
        <div
          className="rounded-full absolute bottom-0 w-full"
          style={{
            height: `${percentage}%`,
            background:
              "linear-gradient(180deg, #8a34cc 0%, #6a34cc 50%, #345dcc 100%)",
          }}
        ></div>

        {/* Black Circle at the bottom */}
        <div className="w-4 h-4 bg-black rounded-full absolute bottom-0 ml-[2px]"></div>
      </div>
    </div>
  );
};

const JobFunctionCharts: React.FC = () => {
  const jobFunctions = [
    { jobFunction: "CIOs, CTOs, CDOs, CMOs", percentage: 70 },
    {
      jobFunction: "Directors of AI, Data Machine Learning, Robotics",
      percentage: 60,
    },
    {
      jobFunction:
        "Integration architects, Data Engineers, Data Scientists, Data Architects, Data Privacy & Analysis",
      percentage: 80,
    },
    {
      jobFunction:
        "VPs & Heads of Integration, Enterprise Architecture, Data Analytics, Modelling & Mining, CRM",
      percentage: 50,
    },
    {
      jobFunction:
        "VPs & Heads of Marketing, Customer Experience, Digital & Strategy",
      percentage: 55,
    },
    { jobFunction: "Others", percentage: 40 },
  ];

  return (
    <div>
      <div className="flex w-full justify-evenly items-end mt-10 flex-col md:flex-row">
        {jobFunctions.map((job, index) => (
          <JobFunctionChart
            key={index}
            jobFunction={job.jobFunction}
            percentage={job.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default JobFunctionCharts;

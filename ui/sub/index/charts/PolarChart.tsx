import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the chart.js components
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChartComponent = () => {
  const data = {
    labels: ["Senior Managers", "VPs, Directors, Heads", "C-suite"],
    datasets: [
      {
        label: "Attendees in percentage",
        data: [35, 38, 27],
        backgroundColor: ["#8a34cc", "#6a34cc", "#345dcc"],
        borderColor: ["#8a34cc", "#6a34cc", "#345dcc"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        display: false, // Correctly sets display to a boolean
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const, // Ensures the type is exactly 'bottom'
      },
      tooltip: {
        enabled: true, // Correctly sets enabled to a boolean
      },
    },
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div
          data-aos="flip-down"
          className="w-full h-[10vh] flex justify-center items-center z-[19]"
        >
          <h1 className=" `md:text-[28px] lg:text-[38px] text-[21px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            INDUSTRY
          </h1>
        </div>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarChartComponent;

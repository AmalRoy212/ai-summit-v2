// import { ApexOptions } from 'apexcharts';
// import React, { useState, useEffect } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import SubHeadings from '../../headers/SubHeadings';

// const ApexChart = () => {
//   const [isBrowser, setIsBrowser] = useState(false);

//   useEffect(() => {
//     setIsBrowser(true); // Ensure this runs in the browser
//   }, []);

//   const [chartOptions] = useState({
//     series: [38, 35, 27],
//     options: {
//       chart: {
//         width: 380,
//         type: 'polarArea' as const,
//         animations: {
//           enabled: true,
//           easing: 'easeinout',
//           speed: 800,
//           animateGradually: {
//             enabled: true,
//             delay: 150,
//           },
//           dynamicAnimation: {
//             enabled: true,
//             speed: 350,
//           },
//         },
//       },
//       labels: ['VPs, Directors, Heads', 'Senior Managers', 'C-suite'],
//       fill: {
//         opacity: 1,
//       },
//       stroke: {
//         width: 1,
//         colors: undefined,
//       },
//       yaxis: {
//         show: false,
//       },
//       legend: {
//         position: 'bottom',
//       },
//       plotOptions: {
//         polarArea: {
//           rings: {
//             strokeWidth: 0,
//           },
//           spokes: {
//             strokeWidth: 0,
//           },
//         },
//       },
//       theme: {
//         monochrome: {
//           enabled: true,
//           shadeTo: 'light',
//           shadeIntensity: 0.6,
//         },
//       },
//     },
//   });

//   if (!isBrowser) return null; // Skip rendering during SSR

//   return (
//     <div className='mt-[-1.8rem]'>
//       <SubHeadings fontSize={10} heading="INDUSTRIES" />
//       <div id="chart">
//         <ReactApexChart options={chartOptions.options as ApexOptions} series={chartOptions.series} type="polarArea" width={380} />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default ApexChart;

import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import SubHeadings from '../../headers/SubHeadings';

// Register the chart.js components
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const colorOne = "linear-gradient(180deg, #8a34cc 0%, #6a34cc 50%, #345dcc 100%)"

const PolarChartComponent = () => {
  const data = {
    labels: ['Senior Managers', 'VPs, Directors, Heads', 'C-suite'],
    datasets: [
      {
        label: 'Attendees in percentage',
        data: [35, 38, 27],
        backgroundColor: [
          '#8a34cc',
          '#6a34cc',
          '#345dcc',
        ],
        borderColor: [
          '#8a34cc',
          '#6a34cc',
          '#345dcc',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,  // Position the legend at the bottom
      },
    },
  };


  return (
    <div className='flex flex-col gap-y-5'>
      <SubHeadings fontSize={10} heading="BY JOB TITLE" />
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarChartComponent;


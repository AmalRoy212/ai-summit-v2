"use client";

import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import SubHeadings from '../../headers/SubHeadings';

const ApexChart = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [45, 50, 45, 68],
    options: {
      chart: {
        width: 380,
        type: 'polarArea' as const,
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800, // Duration of the animation
          animateGradually: {
            enabled: true,
            delay: 150, // Delay between each data point animation
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350, // Speed of dynamic animations during data change
          },
        },
      },
      labels: ['Schools', 'Government', 'Ministry Of Education', 'Academics'],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: 'bottom',
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6,
        },
      },
    },
  });

  return (
    <div className='mt-[-2rem]'>
      <SubHeadings fontSize={10} heading="INDUSTRIES" />
      <div id="chart">
        <ReactApexChart options={chartOptions.options as ApexOptions} series={chartOptions.series} type="polarArea" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;

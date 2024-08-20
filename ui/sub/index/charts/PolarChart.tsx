// import { ApexOptions } from 'apexcharts';
// import React, { useState, useEffect } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import SubHeadings from '../../headers/SubHeadings';
"use client"
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

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


interface ApexChartState {
  series: number[];
  options: ApexOptions;
}

class ApexChart extends React.Component<{}, ApexChartState> {
   constructor(props : any) {
          super(props);

          this.state = {
          
            series: [42, 47, 52, 58, 65],
            options: {
              chart: {
                width: 380,
                type: 'polarArea'
              },
              labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
              fill: {
                opacity: 1
              },
              stroke: {
                width: 1,
                colors: undefined
              },
              yaxis: {
                show: false
              },
              legend: {
                position: 'bottom'
              },
              plotOptions: {
                polarArea: {
                  rings: {
                    strokeWidth: 0
                  },
                  spokes: {
                    strokeWidth: 0
                  },
                }
              },
              theme: {
                monochrome: {
                  enabled: true,
                  shadeTo: 'light',
                  shadeIntensity: 0.6
                }
              }
            },
          
          
          };
        }

      

        render() {
          return (
            <div>
              <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" width={380} />
              </div>
              <div id="html-dist"></div>
            </div>
          );
        }
      }

export default ApexChart;

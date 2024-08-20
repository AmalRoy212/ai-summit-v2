"use client"
import JobFunctionCharts from '@/ui/sub/index/charts/PipeChart'
import ApexChart from '@/ui/sub/index/charts/PolarChart'
import React from 'react'

function ChartsHolder() {
  return (
    <div className='w-full min-h-[500px] flex md:flex-row flex-col z-20 justify-center items-center'>
      {/* <ApexChart/> */}
      <JobFunctionCharts/>
    </div>
  )
}

export default ChartsHolder

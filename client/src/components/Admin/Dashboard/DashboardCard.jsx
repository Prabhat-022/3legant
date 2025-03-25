import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { FaArrowTrendUp } from "react-icons/fa6";


const DashboardCard = ({ title, value, icon, percentage }) => {
  return (

    <div className="flex flex-col p-4 shadow mt-4 w-[300px] h-[150px] border">
      <div className="flex gap-2 justify-between">
        <div>
          <h1 className="text-[#716e6e] text-xl">{title}</h1>
          <p className="font-bold text-3xl">{value}</p>
        </div>
        <div>
          <p className="text-[#ae58eb] text-3xl shadow p-4 rounded-full bg-[#e2e8f0]">{icon}</p>
        </div>
      </div>
      <div className="flex gap-2 mb-2 mt-2 items-center">
        <p className="text-[#47c870] font-bold"><FaArrowTrendUp /></p>
        <p>{percentage} Up from yesterday</p>
      </div>
    </div>

 
  )
}

export default DashboardCard

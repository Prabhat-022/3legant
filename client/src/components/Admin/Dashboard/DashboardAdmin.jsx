import { FaUsers } from "react-icons/fa";
import DashboardCard from "./DashboardCard";
import React from "react";
import { LineChart, Line, XAxis, YAxis } from 'recharts';


const data = [

    { name: '5K', uv: 400, pv: 2400, amt: 2400 },
    { name: '10K', uv: 300, pv: 1398, amt: 2210 },
    { name: '15K', uv: 200, pv: 9800, amt: 2290 },
    { name: '20K', uv: 278, pv: 3908, amt: 2000 },
    { name: '25K', uv: 189, pv: 4800, amt: 2181 },
    { name: '30K', uv: 349, pv: 4300, amt: 2100 },
    { name: '35K', uv: 200, pv: 2500, amt: 2181 },
    { name: '40K', uv: 200, pv: 2500, amt: 2181 },
    { name: '45K', uv: 200, pv: 2500, amt: 2181 },
    { name: '50K', uv: 200, pv: 2500, amt: 2181 },
    { name: '55K', uv: 200, pv: 2500, amt: 2181 },
    { name: '60K', uv: 200, pv: 2500, amt: 2181 },

];

const DashboardAdmin = () => {
    return (
        
        <>
            <div className="xl:bg-gray-100 xl:ml-32 md:bg-gray-100 md:ml-24">
                <div className=" flex  flex-wrap items-center justify-center xl:flex xl:flex-row xl:gap-4  xl:w-[100%] xl:h-[100%] xl:p-4 md:flex md:flex-row md:gap-4 md:w-[100%] md:h-[100%] md:p-4 ">
                    <DashboardCard title="Total Users" value="40,689" icon={<FaUsers />} percentage="8.5" />
                    <DashboardCard title="Total Orders" value="10,000" icon={<FaUsers />} percentage="8.5" />
                    <DashboardCard title="Total Sales" value="$10,000,000" icon={<FaUsers />} percentage="8.5" />
                    <DashboardCard title="Total Products" value="100,000" icon={<FaUsers />} percentage="8.5" />

                </div>
                <div className="mt-4 xl:mt-10 md:mt-10 xl:w-[100%] xl:h-[100%] md:w-[100%] md:h-[100%]">
                    <h1 className=" ml-2 pl-4 text-2xl font-bold">Sale Details </h1>

                    <LineChart width={800} height={400} data={data} className="bg-white">
                        <XAxis dataKey="name" percentage={20} />
                        <YAxis />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    </LineChart>

                </div>
            </div>



        </>
    )
}

export default DashboardAdmin

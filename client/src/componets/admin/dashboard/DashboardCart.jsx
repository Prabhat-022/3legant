import { FaArrowTrendUp } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

const DashboardCart = () => {
    return (
        <>
            <div className="flex flex-col p-4 shadow mt-4">
                <div className="flex gap-2 justify-between">
                    <div className="">
                        <h1 className="text-[#716e6e] text-xl">Total Users</h1>
                        <p className="font-bold text-3xl">40,689</p>
                    </div>
                    <div className="">
                        <p className="text-[#ae58eb] text-3xl shadow p-4 rounded-full bg-[#e2e8f0]"><FaUsers /></p>
                    </div>
                </div>
                <div className="flex gap-2 mb-2 mt-2 items-center">
                    <p className="text-[#47c870] font-bold "><FaArrowTrendUp /></p>
                    <p>8.5% Up fro yesterday</p>
                </div>
            </div>

        </>
    )
}

export default DashboardCart

import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import admin from '../../assets/admin.jpg'
import { FaAngleDown } from "react-icons/fa";

const AdminHeader = () => {
    return (
        <>
            <div className="">
                <div className="flex justify-between items-center m-2 px-4">

                    <div className="">
                        <Link to={"/"} className='text-xl font-bold'>3legant</Link>
                    </div>

                    <div className="flex gap-10 border-2 rounded-full p-2 items-center justify-center bg-[#f1f1f1]">
                        <IoSearchOutline />
                        <input type="text" className='bg-transparent outline-none' placeholder='Search' />
                    </div>

                    <div className="flex gap-2 items-center justify-between mx-2">
                        <img src={admin} alt="" className='w-[45px] h-[45px] rounded-full' />

                        <div className="">
                            <h1>Moni Roy</h1>
                            <p>Admin</p>
                        </div>
                        <FaAngleDown />
                    </div>

                </div>
            </div>

        </>
    )
}

export default AdminHeader

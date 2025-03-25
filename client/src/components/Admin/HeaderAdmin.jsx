

import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import admin from '../../assets/admin.jpg'
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import NavebarAdmin from './NavebarAdmin';

const HeaderAdmin = () => {

    const loginUser = useSelector(state => state.user?.loginuser)
    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown)
    }

    return (
        <>
            <div className="xl:mx-24 md:mx-24 ">
                <div className="flex justify-between items-center m-2 px-4">

                    <div className="">
                        <Link to={"/home"} className='text-2xl font-bold'>3legant</Link>
                    </div>

                    <div className="flex gap-10 border-2 rounded-full p-2 items-center justify-center bg-[#f1f1f1] hidden ">
                        <IoSearchOutline />
                        <input type="text" className='bg-transparent outline-none ' placeholder='Search' />
                    </div>

                    <div className=" flex gap-2 items-center justify-between mx-2">
                        <Link to={"/home/profile"}>
                            <div className="flex gap-2 items-center justify-between mx-2">
                                <img src={admin} alt="" className='w-[45px] h-[45px] rounded-full' />

                                <div className="">
                                    <h1>{loginUser?.fullName || "Mony Roy"}</h1>
                                    <p>Admin</p>
                                </div>
                            </div>
                        </Link>
                        <FaAngleDown size={20} onClick={(e) => {toggleDropdown(e)}}/>

                    </div>


                </div>
                {
                    showDropdown && window.innerWidth < 768 && (
                        <div className="absolute top-10 right-2 bg-white shadow-lg rounded-md">
                            <div className="p-2">
                                <NavebarAdmin />
                            </div>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default HeaderAdmin

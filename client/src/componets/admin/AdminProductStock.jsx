import { IoSearchOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import AdminHeader from "./AdminHeader";
import AdminLeftLayout from "./AdminLeftLayout";

import applewatch from '../../assets/appleWatch.jpg'

const AdminProductStock = () => {
    return (
        <>
            <AdminHeader />
            <div className="flex">
                <AdminLeftLayout />
                <div className="bg-[#f1f1f1] w-full  mx-2 p-8 h-[100vh]">
                    <div className="p-2 flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Product Stock</h1>

                        <div className="flex items-center justify-center bg-white p-2 rounded-full">
                            < IoSearchOutline />
                            <input type="text" name="" id="" className="bg-transparent outline-none px-2" placeholder="Search Product name" />

                        </div>

                    </div>

                    <div className="bg-white w-full h-full">

                        <table className="w-full ">
                            <thead className="border-2">
                                <tr className="">
                                    <th className="border-r-2 p-2">Image</th>
                                    <th className="border-r-2 p-2">Product Name</th>
                                    <th className="border-r-2 p-2">Category</th>
                                    <th className="border-r-2 p-2">Price</th>
                                    <th className="border-r-2 p-2">Piece</th>
                                    <th className="border-r-2 p-2">Available Color</th>
                                    <th className="border-r-2 p-2">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-2 px-4">

                                    <td><img src={applewatch} alt="" className="w-[80px] h-[80px]" /></td>
                                    <td>Apple watch Series 7</td>
                                    <td>Digital Product</td>
                                    <td>$19.99</td>
                                    <td>63</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <div className="bg-black w-[20px] h-[20px] rounded-full"></div>
                                            <div className="bg-red-600 w-[20px] h-[20px] rounded-full "></div>
                                            <div className="bg-green-600 w-[20px] h-[20px] rounded-full "></div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" border-2 flex items-center justify-center rounded-full">
                                            <button className="bg-transparent text-white p-2 rounded-full"><FiEdit color="green" /></button>
                                            <button className=" bg-transparent text-white p-2 rounded-full"><RiDeleteBinLine color="red" /></button>
                                        </div>
                                    </td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminProductStock

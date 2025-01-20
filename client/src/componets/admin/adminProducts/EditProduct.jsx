import { FaStar } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import traytable from '../../../assets/tray-table1.jpg'
import traytable2 from '../../../assets/tray-table2.jpg'
import AdminLeftLayout from "../AdminLeftLayout";
import AdminHeader from "../AdminHeader";
import { MdCancel } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";

const EditProduct = () => {

    const handleRemoveProduct = async (id) => {
        try {
            const res = await axios.delete(`/api/product/delete-product/${id}`)
            console.log(res.data)

        } catch (error) {
            console.log('Product not deleted', error)
        }
    }
    return (
        <>
            <AdminHeader />

            <div className="mx-14 flex">
                <AdminLeftLayout />


                <div className="w-full">
                    <div className="bg-slate-300 p-1">
                        <h1 className="text-3xl m-6">Edit Product</h1>

                    </div>
                    <div className="w-full flex gap-1">


                        <div className="w-[60%] flex flex-wrap m-2 p-4 gap-2">

                            <div className="relative">
                                <img src={traytable} alt="" className='w-[250px] h-[300px]' />
                                <FaPlusCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black text-white rounded-full" size={30} />
                            </div>

                            <div className="relative">
                                <img src={traytable} alt="" className='w-[250px] h-[300px]' />
                                <MdCancel className="absolute top-0 right-0 cursor-pointer" size={30} />
                            </div>  <div className="relative">
                                <img src={traytable} alt="" className='w-[250px] h-[300px]' />
                                <MdCancel className="absolute top-0 right-0 cursor-pointer" size={30} />
                            </div>  <div className="relative">
                                <img src={traytable} alt="" className='w-[250px] h-[300px]' />
                                <MdCancel className="absolute top-0 right-0 cursor-pointer" size={30} />
                            </div>

                            <div className="relative">
                                <img src={traytable} alt="" className='w-[250px] h-[300px]' />
                                <MdCancel className="absolute top-0 right-0 cursor-pointer" size={30} />
                            </div>

                            <div className="relative">
                                <img src={traytable} alt="" className='w-[250px] h-[300px]' />
                                <MdCancel className="absolute top-0 right-0 cursor-pointer" size={30} />
                            </div>


                        </div>

                        <div className="w-[50%] m-2 p-1">
                            <div className="flex gap-2 item-center ">
                                <div className="flex">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />

                                </div>
                                <div className="">
                                    <h1>11 Reviews</h1>

                                </div>
                            </div>

                            <div className="mb-2 mt-2">
                                <h1 className='font-bold text-3xl'>Tray Table</h1>
                            </div>

                            <div className="mb-2 mt-2 flex flex-warp">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, enim. Sed veniam dicta suscipit unde iste? Provident ipsa, consequuntur impedit tenetur in, ratione repudiandae similique odit voluptatem nulla aliquam excepturi!</p>
                            </div>

                            <div className="flex gap-4 my-2 text-xl">
                                <h1 className='font-bold'>$19.19</h1>
                                <h1 className='line-through'>$400.00</h1>
                            </div>

                            <hr />
                            <div className="my-3">
                                <h1>Measurements</h1>
                                <p className='text-sm'>17 1/2 x 17 1/2 x 19&quot; </p>
                            </div>

                            <div className="mb-3 mt-3">
                                <h1 className='flex gap-2 item-center' >Choose Color  <FaAngleRight /></h1>
                                <p>Black</p>
                                <div className="flex hover:cursor-pointer gap-2 ">

                                    <img src={traytable} alt="" className='w-[100px] h-[100px]  hover:border-2' />
                                    <img src={traytable} alt="" className='w-[100px] h-[100px]  hover:border-2' />

                                    <div className="relative border-2">
                                        <img src={traytable2} alt="" className='w-[100px] h-[100px] hover:border-2' />
                                        <FaPlusCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black text-white rounded-full" size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 justify-between mt-2 mb-3">
                                <div className="flex gap-2 border bg-[#f5f5f5] p-2 w-1/3 item-center justify-center font-bold rounded-md">
                                    <button>-</button>
                                    <h1>1</h1>
                                    <button>+</button>

                                </div>
                                <div className="flex border-2 gap-2 items-center justify-center p-2 w-full bg-black text-white rounder-md">
                                    <FaRegHeart />
                                    <button> Wishlist</button>
                                </div>
                            </div>

                            <div className="border-2 p-2 bg-black text-white rounded-md w-full flex items-center justify-center">
                                <button className='text-center font-bold cursor-pointer '>Add to Cart</button>
                            </div>

                            <div className="flex gap-4 my-2">
                                <p>SKU</p>
                                <p>111</p>
                            </div>
                            <div className="flex gap-4 my-2">
                                <p>CATEGORY</p>
                                <p>Living Room, Dining Room</p>
                            </div>

                            <div className="">
                                <div className="flex justify-between mb-2">
                                    <h1 className='font-bold'>Additional info</h1>
                                    <FaChevronDown />
                                </div>


                                <hr />

                                <div className="mt-2 mb-3">
                                    <h1 className='text-xl'>Details</h1>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum repellat nihil impedit sunt illo architecto maxime laudantium voluptas eos voluptate ea optio doloribus perferendis dicta eligendi, non sequi iste dolore.</p>
                                </div>

                                <h1 className='text-xl'>Packaging</h1>

                                <div className="">
                                    <p>Width: 20&quot; Height: 20&quot; Length:21&quot;</p>
                                    <p>Weight: 20 lbs</p>
                                    <p>Package(s): 1</p>
                                </div>

                                <div className="flex justify-between mt-3 mb-3">
                                    <h1>Questions</h1>
                                    <FaChevronDown />
                                </div>
                                <hr />

                                <div className="flex justify-between mt-3 mb-3">
                                    <h1>Reviews(11)</h1>
                                    <FaChevronDown />
                                </div>
                            </div>

                            <div className="my-5">
                                <h1 className="text-3xl font-serif text-red-600 underline cursor-pointer mb-4" onClick={handleRemoveProduct}>Remove this product</h1>

                                <div className="flex justify-between mx-8">
                                    <button className="p-4 px-4 border shadow bg-black text-white text-xl font-bold rounded-full">Save Changes</button>
                                    <button className="p-4 px-4 border shadow bg-slate-50 text-black text-xl font-bold rounded-full">Cancel</button>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>



            </div>
        </>
    )
}

export default EditProduct

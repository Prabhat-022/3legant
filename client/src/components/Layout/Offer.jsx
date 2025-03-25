import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Offer = () => {

    const handleCloser = (e) => {
        e.preventDefault()
        document.querySelector('.offer').style.display = 'none'

    }
    return (
        <>
            <div className="xl:mx-24 lg:mx-24 offer" >
                <div className="flex items-center justify-between bg-slate-300 p-1">
                    <div className="flex flex-col items-center justify-center w-full xl:flex-row lg:flex-row md:flex-row">
                        <p className="flex items-center justify-center text-2xl xl:text-xl">
                            <BiSolidOffer className=" text-2xl mx-1" />
                            30% off storewide --Limited time!
                        </p>

                        <span className='text-blue-600 underline flex items-center justify-center px-2 cursor-pointer '>Shop Now <FaArrowRightLong className="text-2xl px-1" />
                        </span>

                    </div>
                    <div className="px-4 cursor-pointer " >
                        <IoClose className='cursor-pointer' onClick={handleCloser}/>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Offer

import { FaArrowRightLong } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { CloseOutlined } from '@ant-design/icons';


const HeaderPopup = () => {
    return (
        <>
            <div className="">
                <div className="flex items-center justify-between bg-slate-300 p-1">
                    <div className="flex flex-row items-center justify-center w-full">
                        <p className="flex items-center justify-center">
                            <BiSolidOffer className=" text-2xl mx-1" />
                            30% off storewide --Limited time!
                        </p>

                            <span className='text-blue-600 underline flex items-center justify-center px-2 cursor-pointer '>Shop Now <FaArrowRightLong className="text-2xl px-1" />
                            </span>

                    </div>
                    <div className="px-4 cursor-pointer">
                        <CloseOutlined classID="cursor-pointer" />
                    </div>


                </div>
            </div>
        </>
    )
}

export default HeaderPopup

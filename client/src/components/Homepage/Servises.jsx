import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Servises = () => {
    return (
        <>
            <div className="flex gap-2 flex-wrap items-center justify-center p-4 mb-4 xl:flex-row md:flex-row">

                <div className="bg-[#e2e8f0] p-4 cursor-pointer xl:w-[250px] md:w-[250px]">
                    <FaShippingFast size={50} />
                    <h1 className="font-bold ">Free shipping</h1>
                    <p className="text-[#6b6c6e] font-light">order above $200</p>
                </div>

                <div className=" bg-[#e2e8f0] p-4 cursor-pointer xl:w-[250px] md:w-[250px]">
                    <FaMoneyBill size={50} />
                    <h1 className="font-bold ">Money-back</h1>
                    <p className="text-[#6b6c6e] font-light">30 days guarantee</p>
                </div>

                <div className=" bg-[#e2e8f0] p-4 cursor-pointer xl:w-[250px] md:w-[250px]">
                    <CiLock size={50} />
                    <h1 className="font-bold ">Secure Payments</h1>
                    <p className="text-[#6b6c6e] font-light">Secured by Stripe</p>
                </div>

                <div className=" bg-[#e2e8f0] p-4  cursor-pointer xl:w-[250px] md:w-[250px]">
                    <FaPhoneAlt size={50} />
                    <h1 className="font-bold ">24/7 Support</h1>
                    <p className="text-[#6b6c6e] font-light">Phone and Email Support</p>
                </div>

            </div>


        </>
    )
}

export default Servises

import Footer from "../../pages/Footer"
import Header from "../../pages/Header"
import CartNavigation from "./CartNavigation"
import OrderSummary from "./OrderSummary"

const CheckoutDetails = () => {
    return (
        <>
            <Header />
            <div className="mx-24">

                <h1 className='text-3xl font-bold text-center my-4 ' >Check Out</h1>

                <div className="">
                    <CartNavigation />
                </div>
                <div className="flex m-10 gap-2 w-[100%] ">
                    <div className="w-[50%]">

                        {/* contact infomation */}
                        <div className="border-2 border-[#898f98] p-4 mb-4">
                            <h1 className="text-xl font-bold mb-2">Contact information</h1>
                            <form action="">
                                <div className="flex gap-2 mb-2">
                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">FIRST NAME</label>
                                        <input type="text" placeholder="First Name" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                    </div>

                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">LAST NAME</label>
                                        <input type="text" placeholder="Last Name" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs mb-2">PHONE NUMBER</label>
                                    <input type="text" placeholder="Phone Number" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs mb-2">EMAIL ADDRESS</label>
                                    <input type="text" placeholder="Your Email " className="px-2 p-1 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                </div>

                            </form>
                        </div>

                        {/* shipping address */}
                        <div className=" border-2 border-[#898f98] p-4 mb-4">
                            <h1 className="text-xl font-bold mb-2">Shipping Address</h1>

                            <form action="" className="">
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="" className="text-xs mb-2">STREET ADDRESS*</label>
                                    <input type="text" placeholder="Street Address" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                </div>

                                <div className="flex flex-col mb-2">
                                    <label htmlFor="" className="text-xs mb-2">COUNTRY*</label>
                                    <input type="text" placeholder="Country" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                </div>

                                <div className="flex flex-col mb-2">
                                    <label htmlFor="" className="text-xs mb-2">CITY/TOWN*</label>
                                    <input type="text" placeholder="Town/City" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                </div>


                                <div className="flex gap-2">
                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">STATE</label>
                                        <input type="text" placeholder="State" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg mt-2" />
                                    </div>

                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">ZIP CODE</label>
                                        <input type="text" placeholder="zip Code" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg mt-2" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="cursor-pointer" />
                                    <p className="text-[#64748b]">Use a different billing address(optional)</p>

                                </div>
                            </form>
                        </div>

                        {/* Payment method */}
                        <div className="border-2 border-[#898f98] p-4">
                            <form action="">

                                <div className="flex items-center gap-2 border-2 rounded-lg p-2 mb-2">
                                    <input type="radio" />
                                    <p>Pay by Credit/Debit Card</p>
                                </div>

                                <div className="flex items-center gap-2 border-2 rounded-lg p-2 mb-2">
                                    <input type="radio" className="p-2" />
                                    <p>Pay by Paypal</p>
                                </div>
                                <div className="border-b-2 border-[#898f98] mt-2 mb-2"></div>

                                <div className="flex flex-col mt-2">

                                    <label htmlFor="" className="text-xs mb-2">CARD NUMBER</label>
                                    <input type="text" placeholder="1234 1234 1234" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                </div>

                                <div className="flex gap-2 mb-2 mt-2">

                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">EXPIRATION DATE</label>
                                        <input type="text" placeholder="MM/YY" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                    </div>

                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">CVV</label>
                                        <input type="text" placeholder="CVC code" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" />
                                    </div>
                                </div>

                            </form>



                        </div>

                        <div className="mt-4">
                            <button type="submit"
                                className="text-white bg-[#070808] hover:bg-[070808] p-3 rounded w-full">Place Order</button>

                        </div>

                    </div>
                    <div className="w-[40%]">
                        <OrderSummary />

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default CheckoutDetails

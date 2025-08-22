import { Link } from "react-router-dom"
import OrderSummary from './OrderSummary'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axiosInstance from "../../lib/axios"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"

const CheckoutDetails = () => {
    const [loading, setLoading] = useState(false)
    const loginUser = useSelector(state => state.user.user)
    const navigate = useNavigate();


    const { register, handleSubmit } = useForm({
        defaultValues: {
            Firstname: loginUser?.Firstname,
            Lastname: loginUser?.Lastname,
            Fullname: loginUser?.Fullname,
            username: loginUser?.username,
            email: loginUser?.email,
            phone: loginUser?.phone,
            address: [
                {
                    shoppingaddress: loginUser?.address[0]?.shoppingaddress,
                    streetaddress: loginUser?.address[0]?.streetaddress,
                    country: loginUser?.address[0]?.country,
                    towncity: loginUser?.address[0]?.towncity,
                    state: loginUser?.address[0]?.state,
                    zipCode: loginUser?.address[0]?.zipCode,
                }
            ],
            paymentDetails: {
                cardnumber: loginUser?.paymentDetails?.cardnumber,
                expirydate: loginUser?.paymentDetails?.expirydate,
                cvv: loginUser?.paymentDetails?.cvv,
            }
        },
    })

    const onSubmit = async (data) => {
        console.log('data', data)
        try {
            setLoading(true)
            const res = await axiosInstance.put(`/api/update-user-info`, data)
            console.log('Response:', res)


            if (res.data.success) {
                setLoading(false)
                toast.success(res.data.message)
                // navigate('/payment')
            }
        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.message)
            console.log(error)
        }
    }
    return (
        <>
            <div className="xl:mx-24 md:mx-24">

                <h1 className='text-3xl font-bold text-center my-4 ' >Check Out</h1>


                <div className="xl:flex xl:m-10 xl:gap-2 xl:w-[100%] md:flex md:m-10 md:gap-2 md:w-[100%] ">
                    <div className=" m-4 xl:w-[40%] md:w-[40%]">
                        <OrderSummary />

                    </div>

                    <div className="m-4 xl:w-[50%] md:w-[50%]">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* contact infomation */}
                            <div className="border-2 border-[#898f98] p-4 mb-4">
                                <h1 className="text-xl font-bold mb-2">Contact information</h1>
                                <div className="flex gap-2 mb-2">
                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">FIRST NAME</label>
                                        <input type="text" placeholder="First Name" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('Firstname')} />
                                    </div>

                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">LAST NAME</label>
                                        <input type="text" placeholder="Last Name" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('Lastname')} />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs mb-2">PHONE NUMBER</label>
                                    <input type="text" placeholder="Phone Number" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('phone')} />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs mb-2">EMAIL ADDRESS</label>
                                    <input type="text" placeholder="Your Email " className="px-2 p-1 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('email')} />
                                </div>

                            </div>

                            {/* shipping address */}
                            <div className=" border-2 border-[#898f98] p-4 mb-4">
                                <h1 className="text-xl font-bold mb-2">Shipping Address</h1>

                                <div className="flex flex-col mb-2">
                                    <label htmlFor="" className="text-xs mb-2">STREET ADDRESS*</label>
                                    <input type="text" placeholder="Street Address" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('address.streetaddress')} />
                                </div>

                                <div className="flex flex-col mb-2">
                                    <label htmlFor="" className="text-xs mb-2">COUNTRY*</label>
                                    <input type="text" placeholder="Country" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('address.country')} />
                                </div>

                                <div className="flex flex-col mb-2">
                                    <label htmlFor="" className="text-xs mb-2">CITY/TOWN*</label>
                                    <input type="text" placeholder="Town/City" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('address.towncity')} />
                                </div>


                                <div className="flex gap-2">
                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">STATE</label>
                                        <input type="text" placeholder="State" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg mt-2" {...register('address.state')} />
                                    </div>

                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">ZIP CODE</label>
                                        <input type="text" placeholder="zip Code" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg mt-2" {...register('address.zipCode')} />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="cursor-pointer" />
                                    <p className="text-[#64748b]">Use a different billing address(optional)</p>

                                </div>
                            </div>

                            {/* Payment method */}
                            <div className="border-2 border-[#898f98] p-4">

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
                                    <input type="text" placeholder="1234 1234 1234" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('paymentDetails.cardnumber')} />
                                </div>

                                <div className="flex gap-2 mb-2 mt-2">

                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">EXPIRATION DATE</label>
                                        <input type="text" placeholder="MM/YY" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('paymentDetails.expirydate')} />
                                    </div>

                                    <div className="">
                                        <label htmlFor="" className="text-xs mb-2">CVV</label>
                                        <input type="text" placeholder="CVC code" className="p-1 px-2 border-2 w-full mb-1 outline-none cursor-pointer rounded-lg" {...register('paymentDetails.cvv')} />
                                    </div>
                                </div>




                            </div>

                            <div className="mt-4">
                                <button type="submit"
                                    className="text-white bg-[#070808] hover:bg-[070808] p-3 rounded w-full">{loading ? 'Loading...' : 'Place Order'}</button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CheckoutDetails

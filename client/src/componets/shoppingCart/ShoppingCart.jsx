import Header from "../../pages/Header"
import Footer from "../../pages/Footer"
import { CiDiscount1 } from "react-icons/ci";
// import { CloseOutlined } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import CartNavigation from "./CartNavigation";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
    const products = useSelector((state) => state.cart.cart);
    const item = products.map((item) => item.product);
    return (
        <>
            <Header />

            <h1 className='text-3xl font-bold text-center my-4'>Cart</h1>
            <div className="">
                <CartNavigation />
            </div>

            <div className="flex justify-center items-center flex-col mt-6 mx-24 ">



                <div className="flex gap-4  mb-4 w items-center justify-center mx-4">
                    <table className="table-auto w-1/2 border-collapse">
                        <thead className="border-b-2">
                            <tr className="bg-[#e7e3e3c2]">
                                <th className="p-2">Product</th>
                                <th className="p-2">Quantity</th>
                                <th className="p-2">Price</th>
                                <th className="p-2">Subtotal</th>
                            </tr>
                        </thead >

                        <tbody>
                            {
                                item.map((item) => (
                                    <>
                                        <tr className="border-b-2">
                                            <td className="p-2">
                                                <img src={item.image[0].url} alt="" className="w-[100px] h-[100px]" />
                                            </td>
                                            <td className="p-2">
                                                <div className="flex flex-col">
                                                    <h1 className="font-bold">{item.title}</h1>
                                                    <p className="text-[#6d6c6c]">Color: {item.color}</p>
                                                    <button className="flex items-center text-[#6d6c6c]">
                                                        <AiOutlineClose />
                                                        remove</button>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="border flex justify-between">
                                                    <h1 className="bg-[#e7e3e3c2] p-2">-</h1>
                                                    <h1 className="p-2">{item.quantity}</h1>
                                                    <h1 className="bg-[#e7e3e3c2] p-2">+</h1>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <h1 className="font-bold">{item.price}</h1>
                                            </td>
                                            <td className="p-2">
                                                <h1 className="font-bold">{item.price * item.quantity}</h1>
                                            </td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>

                    </table>


                    <div className="border-2 p-4 w-1/2">

                        <h1 className="my-4">Cart summary</h1>
                        <div className=" ">
                            <div className="border-2 flex justify-between p-2 mb-3 bg-[#e7e3e3c2]">
                                <div className="">
                                    <input type="radio" name="" id="" value={'free'} />
                                    <label htmlFor="" className="px-2">Free Shopping</label>
                                </div>

                                <p>%10.00</p>
                            </div>
                            <div className="border-2 flex justify-between p-2 mb-3 bg-[#e7e3e3c2]">
                                <div className="">
                                    <input type="radio" name="" id="" value={'free'} />
                                    <label htmlFor="" className="px-2">Express Shopping</label>
                                </div>

                                <p>+$150.00</p>
                            </div>
                            <div className="border flex justify-between p-2 bg-[#e7e3e3c2] ">
                                <div className="">
                                    <input type="radio" name="" id="" value={'free'} />
                                    <label htmlFor="" className="px-2">Pick Up </label>
                                </div>

                                <p>%21.00</p>
                            </div>


                        </div>
                        <div className="flex justify-between my-2">
                            <h2>Subtotal</h2>
                            <h2>$38.19</h2>
                        </div>
                        <div className="flex justify-between mb-2 font-bold ">
                            <h1>Total</h1>
                            <h1>$1238.19</h1>
                        </div>

                        <button className="text-white bg-black p-2 w-full">Checkout</button>
                    </div>


                </div>

                <div className="mx-3 my-4">
                    <h1 className="font-bold font-serif">Have a coupon?</h1>
                    <p className="text-[#848586] font-serif mb-2">Add your code for an instant cart discount</p>
                    <div className="border flex justify-between p-2 w-[400px] items-center">
                        <div className="flex items-center ">
                            <CiDiscount1 />
                            <h1> coupon code</h1>
                        </div>
                        <h1 className="font-bold">Apply</h1>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default ShoppingCart

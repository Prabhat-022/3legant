
import { RiSubtractFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { useSelector } from 'react-redux';
const OrderSummary = () => {

    
    const products = useSelector((state) => state.cart.cart);

    return (
        <>
            <div className="w-full  ">
                <div className="border-2 border-[#898f98] p-4">
                    <h1 className="text-2xl font-bold m-2">Order Summary</h1>
                    <div style={{ height: "75vh", overflowY: "scroll" }}>
                        <table className="table-auto w-full h-full">
                            {
                                products?.map((item) => (
                                    <>
                                        <tr>
                                            <td className="flex gap-3 justify-between">
                                                <img src={item.image[0].url} alt="" className="w-[100px] h-[100px]" />
                                                <div className="">
                                                    <h1 className="font-bold font-mono m-1">{item.title}</h1>
                                                    <h1 className="text-[#898f98] m-1">Color:  {item.color}</h1>

                                                    <div className="border flex gap-3  items-center m-1 justify-center">
                                                        <button className="font-bold"><RiSubtractFill /></button>
                                                        <h1>2</h1>
                                                        <button><FiPlus /></button>
                                                    </div>

                                                </div>
                                                <h1 className="font-bold">{item.price}</h1>
                                            </td>


                                        </tr>
                                        <hr />
                                    </>))
                          }


                        </table>
                    </div>

                    <hr className='mb-2' />

                    <div className=" flex p-2 mt-2">
                        <input type="text" placeholder="Input" className='border-2 p-1' />
                        <button className='bg-black text-white  mx-1 rounded-md p-2'>Apply</button>
                    </div>

                    <div className="">
                        <div className="flex gap-2 justify-between mb-2 p-2">
                            <h1>  jenkatemv </h1>
                            <h1 className="text-green-500"> -$25.00[Remove] </h1>
                        </div>

                        <hr />

                        <div className="flex justify-between mb-2 p-2">
                            <h1>Shipping</h1>
                            <h1 className='font-bold'>Free</h1>
                        </div>

                        <hr />

                        <div className="flex justify-between mb-2 p-2">
                            <h1>Subtotal</h1>
                            <h1 className='font-bold'>$19.19</h1>
                        </div>

                        <hr />

                        <div className="flex justify-between mb-2 p-4 mt-2">
                            <h1>Total</h1>
                            <h1 className='font-bold'>$19.19</h1>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default OrderSummary

import { Link } from "react-router-dom"
import { RiSubtractFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../../redux/cartSlice";
import { useState } from "react";

const FlyoutCart = () => {
    const products = useSelector((state) => state.cart.cart);
    const [quantity, setQuantity] = useState(1);


    const statusTab = useSelector(state => state.cart.statusTab);
    const dispatch = useDispatch();

    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
    const AddQuantity = () => {

        setQuantity(quantity + 1)
    }

    const removeQuantity = () => {
        setQuantity(quantity - 1)
    }
    return (
        <>
            {/* <Index /> */}
            <div className={`fixed top-0 right-0 h-screen w-[400px] bg-white p-4 transform transition-transform ease-in-out duration-300
            ${statusTab === false ? 'translate-x-full' : ""}`}>

                <div className="flex flex-col h-full p-4 overflow-y-scroll scrollbar-hide">
                    <div className="flex justify-between items-center p-4 border-b-2 mb-4">
                        <h1>Cart</h1>
                        <p onClick={handleCloseTabCart}><RxCross2 /></p>
                    </div>

                    <table className="table-auto w-full h-full overflow-hidden scrollbar-hide ">

                        {
                            products?.map((item) => (
                                <>
                                    <tr key={item?._id}>
                                        <td className='flex gap-3 justify-between'>


                                            {/* <img src={item?.image[1].url} alt="" className='w-[100px] h-[100px]' /> */}

                                            <div className="">
                                                <h1 className='font-bold font-mono m-1'>{item?.title}</h1>
                                                <h1 className='text-[#898f98] m-1'>Color: {item?.color}</h1>

                                                <div className="border flex gap-3  items-center m-1 justify-center">
                                                    <button className="font-bold" onClick={removeQuantity}><RiSubtractFill /></button>

                                                    <h1>{products.quantity || quantity}</h1>

                                                    <button className="font-bold" onClick={AddQuantity}><FiPlus /></button>
                                                </div>
                                            </div>
                                            <h1 className='font-bold'>${item.price}</h1>
                                        </td>

                                    </tr>

                                    <hr />
                                </>
                            ))
                        }

                    </table>

                    <button className="bg-black text-white p-3 rounded-full w-full">Checkout</button>
                    <Link to={'/cart'} className="underline cursor-pointer w-full p-3 text-center">View Cart</Link>
                </div>
            </div>

        </>
    )
}

export default FlyoutCart

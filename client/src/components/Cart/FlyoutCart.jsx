import { Link } from "react-router-dom";
import { RiSubtractFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab, IncreaseCartItem, DecreaseCartItem } from "../../redux/CartSlice";
import axios from "axios";
import toast from "react-hot-toast";

const FlyoutCart = () => {
    const cartItem = useSelector((state) => state.cart?.item);

    const statusTab = useSelector(state => state.cart.statusTab);

    const dispatch = useDispatch();

    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }

    //click on button than remove the product from the cart
    const handleRemoveProduct = async (id) => {
        console.log('cart remove id', id)
        try {
            const response = await axios.delete(`/api/cart/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            )
            console.log('->Cart item deleted', response.data)
            if (response.data.success) {
                toast.success('Product removed from cart')
            }


        } catch (error) {
            console.log('->Error: cart item Not deleted', error)
            toast.error('Product not removed from cart')
        }
    }

    const IncreaseCartItemQuantity = async (productId) => {
        try {
            const response = await axios.post(`/api/cart/${productId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            )
            if (response.data.success) {
                dispatch(IncreaseCartItem(productId))
                toast.success('add quantity')
            }
        } catch (error) {
            console.log('->Error: quantity not added', error)
            toast.error('quantity not added')
        }
    }

    const DecreaseCartItemQuantity = async (productId) => {
        try {
            const response = await axios.put(`/api/cart/${productId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            )
            if (response.data.success) {
                dispatch(DecreaseCartItem(productId))
                toast.success('reduce quantity')
            }
        } catch (error) {
            console.log('->Error: quantity not reduced', error)
            toast.error('quantity not reduced')
        }
    }

    return (
        <>
            {/* <Index /> */}
            <div className={`fixed top-15 right-24 bottom-15  h-[90vh] w-[400px] bg-white p-4 transition-all duration-500 ease-in-out border
            ${statusTab === false ? 'translate-x-full opacity-0' : "translate-x-0 opacity-100"}
            `}>

                <div className="flex flex-col h-full p-4 overflow-y-scroll scrollbar-hide">
                    <div className="flex justify-between items-center p-4  mb-4">
                        <h1 className="text-3xl font-bold ">Cart</h1>

                        <div className="w-[25px] h-[25px] bg-black rounded-full flex items-center justify-center text-white cursor-pointer " onClick={handleCloseTabCart} >
                            <RxCross2 size={20} />
                        </div>
                    </div>

                    {
                        cartItem?.length > 0 ? (
                            <>

                                <table className="table-auto w-full h-full overflow-hidden scrollbar-hide ">

                                    {

                                        cartItem?.map((item) => (
                                            <>
                                                <tr key={item?._id}>
                                                    <td className='flex gap-3 justify-between border-b-1 p-1'>
                                                        <div className="flex gap-3">

                                                            <img src={item?.image[0].url} alt="" className='w-[100px] h-[100px]' />

                                                            <div className="">
                                                                <h1 className='font-bold font-mono m-1'>{item?.title.split(" ").slice(0, 2).join(" ")}</h1>
                                                                <h1 className='text-[#898f98] m-1'>Color: {item?.color}</h1>


                                                                <div className="border flex gap-3  items-center m-1 justify-center">
                                                                    <button className="font-bold cursor-pointer" onClick={() => DecreaseCartItemQuantity(item._id)}><RiSubtractFill /></button>

                                                                    <h1>{item.quantity}</h1>

                                                                    <button className="font-bold cursor-pointer" onClick={() => IncreaseCartItemQuantity(item._id)}><FiPlus /></button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col justify-between items-center py-4">
                                                            <h1 className='text-green-600 text-lg font-bold'>${item.price}</h1>
                                                            <button className="font-bold cursor-pointer" onClick={() => handleRemoveProduct(item._id)}><AiOutlineClose /></button>
                                                        </div>
                                                    </td>

                                                </tr>

                                            </>
                                        ))
                                    }

                                </table>

                                <button className="bg-black text-white p-3 rounded-full w-full">Checkout</button>
                                <Link to={'/cart'} className="underline cursor-pointer w-full p-3 text-center">View Cart</Link>
                            </>
                        ) : (
                            <div className="flex items-center justify-center h-full p-4">
                                <h1 className="text-xl font-bold text-[#898f98]">Your cart is empty</h1>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default FlyoutCart


import { Link } from "react-router-dom"
import { RiSubtractFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../../redux/CartSlice";
import axios from "axios";
import { removeProduct } from "../../redux/CartSlice";
import toast from "react-hot-toast";

const FlyoutCart = () => {
    const products = useSelector((state) => state.cart?.item);

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
            if(response.data.success){
                dispatch(removeProduct(id))
                toast.success('Product removed from cart')
            }


        } catch (error) {
            console.log('->Error: cart item Not deleted', error)
            toast.error('Product not removed from cart')
        }
    }

    const updateCartItemQuantity =async(productId, quantity)=>{
        console.log('cart update id', productId)
        try {
            const response = await axios.post(`/api/cart`, {productId, quantity})

            console.log('->Cart item updated', response.data)
        } catch (error) {
            console.log('->Error: cart item Not updated', error)
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

                    <table className="table-auto w-full h-full overflow-hidden scrollbar-hide ">

                        {
                            products?.map((item) => (
                                <>
                                    <tr key={item?._id}>
                                        <td className='flex gap-3 justify-between border-b-1 p-1'>
                                            <div className="flex gap-3">

                                                <img src={item?.image[0].url} alt="" className='w-[100px] h-[100px]' />

                                                <div className="">
                                                    <h1 className='font-bold font-mono m-1'>{item?.title.split(" ").slice(0, 2).join(" ")}</h1>
                                                    <h1 className='text-[#898f98] m-1'>Color: {item?.color}</h1>


                                                    <div className="border flex gap-3  items-center m-1 justify-center">
                                                        <button className="font-bold cursor-pointer" onClick={() => updateCartItemQuantity(item._id, item.quantity - 1)}><RiSubtractFill /></button>

                                                        <h1>{item.quantity}</h1>

                                                        <button className="font-bold cursor-pointer" onClick={() => updateCartItemQuantity(item._id, item.quantity + 1)}><FiPlus /></button>
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
                </div>
            </div>

        </>
    )
}

export default FlyoutCart


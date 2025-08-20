import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { DecreaseCartItem, removeProduct } from "../../redux/CartSlice";
import { IncreaseCartItem } from "../../redux/CartSlice";

const ShoppingCart = () => {
    const [orderCheck, setOrderChecks] = useState({
        freeshipping: false,
        expressshopping: false,
        pickup: false
    })
    const dispatch = useDispatch();


    const cartItem = useSelector((state) => state?.cart?.item);
    console.log('cartItem', cartItem)
    const price = cartItem.map((item) => Number(item.price) * item.quantity);

    const freeshipping = 10;
    const ExpressShopping = 150;
    const Pickup = 21;
    const subtotal = Number(price.reduce(getSum, 0));

    function getSum(total, num) {
        return total + Math.round(num);
    }

    let total = 0;
    if (orderCheck.freeshipping) {
        total += freeshipping;
    } else {
        total -= freeshipping;
    }
    if (orderCheck.expressshopping) {
        total += ExpressShopping;
    } else {
        total -= ExpressShopping;
    }
    if (orderCheck.pickup) {
        total += Pickup;
    } else {
        total -= Pickup;
    }
    total += subtotal;

    //increse the cart product quantity
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
                toast.success('Product added to cart')
            }
        } catch (error) {
            console.log('->Error: cart item Not deleted', error)
            toast.error('Product not added to cart')
        }
    }

    //decrease the cart product quantity
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
                toast.success('Product removed from cart')
            }
        } catch (error) {
            console.log('->Error: cart item Not deleted', error)
            toast.error('Product not removed from cart')
        }
    }

    //Remove products from the card 
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
            if (response.data.success) {
                dispatch(removeProduct(id))
                toast.success('Product removed from cart')
            }


        } catch (error) {
            console.log('->Error: cart item Not deleted', error)
            toast.error('Product not removed from cart')
        }
    }



    return (
        <>

            <h1 className='text-3xl font-bold text-center my-4'>Cart</h1>

            <div className=" mx-2 xl:flex  xl:flex-col xl:mt-6 xl:mx-24 md:flex md:mt-6 md:mx-24  ">

                <div className=" xl:flex mb-4 xl:items-center xl:justify-center xl:w-[100%] xl:h-[100%] xl:gap-2 md:flex md:items-center md:justify-center md:w-[100%] md:h-[100%] md:gap-2">
                    <div style={{ height: "75vh", overflowY: "scroll" }} className=" border xl:w-[40%] md:w-[40%] xl:border-2 md:border-2 xl:h-[75vh] md:h-[75vh] ">

                        <table className="table-auto w-full ">
                            <thead className="border-b-2 ">
                                <tr className="bg-[#e7e3e3c2]">
                                    <th className="p-2">Product</th>
                                    <th className="p-2">Quantity</th>
                                    <th className="p-2">Price</th>
                                    <th className="p-2">Total</th>
                                </tr>
                            </thead >

                            <tbody className="h-1/4 overflow-y-scroll scrollbar-hide w-full">
                                {
                                    cartItem?.map((item) => (
                                        <>
                                            <tr className="border-b-2 ">
                                                <td className="p-2">
                                                    <img src={item.image[0].url} alt="" className="w-[100px] h-[100px]" />
                                                </td>
                                                <td className="p-2">
                                                    <div className="flex flex-col">
                                                        <h1 className="font-bold">{item.title.split(" ").slice(0, 2).join(" ")}</h1>
                                                        <p className="text-[#6d6c6c]">Color: {item.color}</p>

                                                        {/* remove product from card */}
                                                        <div className="flex items-center justify-center text-[#6d6c6c]  border-1 rounded-md cursor-pointer p-1 hover:bg-red-900 hover:text-white my-2 " onClick={() => handleRemoveProduct(item._id)}>
                                                            <button className=" cursor-pointer flex items-center justify-center gap-2">
                                                                <AiOutlineClose size={15} />
                                                                Remove</button>
                                                        </div>

                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="border flex justify-between rounded-md">
                                                        <button className="cursor-pointer p-2 " onClick={() => DecreaseCartItemQuantity(item._id)}>-</button>
                                                        <h1 className="p-2">{item.quantity}</h1>
                                                        <button className="cursor-pointer p-2" onClick={() => IncreaseCartItemQuantity(item._id)}>+</button>
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <h1 className="font-bold">${item.price}</h1>
                                                </td>
                                                <td className="p-2">
                                                    <h1 className="font-bold">${Number(item.price) * item.quantity}</h1>
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>

                        </table>

                    </div>

                    <div className="xl:border-2 xl:p-4 xl:w-[40%] xl:h-[75vh] md:border-2 md:p-4 md:w-[40%] md:h-[75vh]">

                        <h1 className="my-4">Cart summary</h1>
                        <div className=" ">
                            <div className="border-2 flex justify-between p-2 mb-3 bg-[#e7e3e3c2]">
                                <div className="">
                                    <input type="radio" name="" id="" checked={orderCheck.freeshipping} onChange={(e) => setOrderChecks({ ...orderCheck, freeshipping: e.target.checked })} />
                                    <label htmlFor="" className="px-2">Free Shopping</label>
                                </div>

                                <p>%10.00</p>
                            </div>
                            <div className="border-2 flex justify-between p-2 mb-3 bg-[#e7e3e3c2]">
                                <div className="">
                                    <input type="radio" name="" id="" checked={orderCheck.expressshopping} onChange={(e) => setOrderChecks({ ...orderCheck, expressshopping: e.target.checked })} />
                                    <label htmlFor="" className="px-2">Express Shopping</label>
                                </div>

                                <p>+$150.00</p>
                            </div>
                            <div className="border flex justify-between p-2 bg-[#e7e3e3c2] ">
                                <div className="">
                                    <input type="radio" name="" id="" checked={orderCheck.pickup} onChange={(e) => setOrderChecks({ ...orderCheck, pickup: e.target.checked })} />
                                    <label htmlFor="" className="px-2">Pick Up </label>
                                </div>

                                <p>%21.00</p>
                            </div>


                        </div>
                        <div className="flex justify-between my-2">
                            <h2>Subtotal</h2>
                            <h2>${subtotal}</h2>
                        </div>
                        <div className="flex justify-between mb-2 font-bold ">
                            <h1>Total</h1>
                            <h1>${total}</h1>
                        </div>
                        <Link to={'/cart/checkout'}>
                            <button className="text-white bg-black p-2 w-full">Checkout</button>
                        </Link>
                    </div>


                </div>

                <div className=" xl:my-4 xl:mx-24 md:my-4 md:mx-24 ">
                    <h1 className="font-bold font-serif">Have a coupon?</h1>

                    <p className="text-[#848586] font-serif mb-2">Add your code for an instant cart discount</p>

                    <div className="border flex justify-between p-2 w-full items-center mb-4">

                        <div className="flex items-center ">
                            <CiDiscount1 />
                            <input type="text" placeholder="coupon code" className="outline-none p-2 w-full" />
                        </div>
                        <h1 className="font-bold">Apply</h1>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ShoppingCart

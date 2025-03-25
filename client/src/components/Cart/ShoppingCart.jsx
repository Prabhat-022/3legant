import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { removeProduct } from "../../redux/CartSlice";

const ShoppingCart = () => {
    const [orderCheck, setOrderChecks] = useState({
        freeshipping: false,
        expressshopping: false,
        pickup: false
    })
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState();

    const products = useSelector((state) => state.cart.item);
    console.log('products', products)
    const price = products.map((item) => Number(item.price) * item.quantity);

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

    const updateCartQuantity = async (product) => {
        const productId = product._id;

        try {
            setLoading(true)
            const res = await axios.post("/api/cart", { productId, quantity });
            console.log(res)
            console.log('quantity', res.data.cart.items)

            const qty = res.data.cart.items.map(item => item.quantity)
            console.log('qty', qty)
            setQuantity(qty)
            setLoading(false)

            if (res.data.success) {
                toast.success("Product added to cart");
            }
        } catch (error) {
            console.log(error)
        }

    }

    //Remove products from the card 
    const handleDeleteCartItem = async (id) => {
        console.log('id', id)
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
            dispatch(removeProduct(id))


        } catch (error) {
            console.log('->Error: cart item Not deleted', error)
        }

    }



    return (
        <>

            <h1 className='text-3xl font-bold text-center my-4'>Cart</h1>

            <div className=" mx-2 xl:flex  xl:flex-col xl:mt-6 xl:mx-24 md:flex md:mt-6 md:mx-24  ">

                <div className=" xl:flex mb-4 xl:items-center xl:justify-center xl:w-[100%] xl:h-[100%] xl:gap-2 md:flex md:items-center md:justify-center md:w-[100%] md:h-[100%] md:gap-2">
                    <div style={{ height: "75vh", overflowY: "scroll" }} className=" border xl:w-[40%] md:w-[40%] xl:border-2 md:border-2 xl:h-[75vh] md:h-[75vh] ">

                        <table className="table-auto w-full ">
                            <thead className="border-b-2">
                                <tr className="bg-[#e7e3e3c2]">
                                    <th className="p-2">Product</th>
                                    <th className="p-2">Quantity</th>
                                    <th className="p-2">Price</th>
                                    <th className="p-2">Total</th>
                                </tr>
                            </thead >

                            <tbody className="h-1/4 overflow-y-scroll scrollbar-hide w-full">
                                {
                                    products?.map((item) => (
                                        <>
                                            <tr className="border-b-2">
                                                <td className="p-2">
                                                    <img src={item.image[0].url} alt="" className="w-[100px] h-[100px]" />
                                                </td>
                                                <td className="p-2">
                                                    <div className="flex flex-col">
                                                        <h1 className="font-bold">{item.title.split(" ").slice(0, 2).join(" ")}</h1>
                                                        <p className="text-[#6d6c6c]">Color: {item.color}</p>

                                                        {/* remove product from card */}
                                                        <div className="flex items-center justify-center text-[#6d6c6c]  border-1 rounded  cursor-pointer p-1" onClick={() => handleDeleteCartItem(item._id)}>
                                                            <AiOutlineClose />
                                                            <button className=" cursor-pointer">remove</button>
                                                        </div>

                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="border flex justify-between">
                                                        <button className="bg-[#e7e3e3c2] p-2" onClick={() => updateCartQuantity(item)}>-</button>
                                                        <h1 className="p-2">{item.quantity || quantity}</h1>
                                                        <button className="bg-[#e7e3e3c2] p-2" onClick={() => updateCartQuantity(item)}>+</button>
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

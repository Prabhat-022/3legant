import axios from 'axios';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import toast from 'react-hot-toast';
import { addToCart } from '../../redux/CartSlice';
import { useDispatch } from 'react-redux';

const ProductCart = ({ product }) => {
    const img = product.image.map((img) => img?.url);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = async (product) => {
        const productId = product._id;
        const quantity = 1;
        try {
            setLoading(true)
            const res = await axios.post("/api/cart", { productId, quantity });
            console.log(res)

            if (res.data.success) {
                toast.success(res.data.message);
                setLoading(false)
                dispatch(addToCart([product]))

            }
            else {
                toast.error(res.data.message);
                setLoading(false)
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error)
        }

    }


    return (

        <div className="bg-white shadow-md rounded-lg overflow-hidden w-[250px] h-[430px] border-2 p-2">
            <div className="relative">
                {/* <img src={product.?imgage[0]} alt="" className='w-full h-[300px] object-cover' onClick={() => handleSingleProduct(product)} /> */}

                <img src={img[0]} alt="" className='w-full h-[300px] object-cover' />

                <div className="absolute top-2 left-2 p-1">
                    <h1 className="text-black font-bold">New</h1>
                    <p className="bg-green-600 text-white font-bold">-50%</p>
                </div>
            </div>

            <div className="p-1">
                <div className="flex gap-3 justify-between items-center">
                    <div className="flex gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <button className='bg-[#070808] text-white p-2 rounded-md hover:bg-[#162113] hover:text-white cursor-pointer' onClick={() => handleAddToCart(product)} disabled={loading}>Add to Cart {loading && "..."}</button>

                </div>
                <h1 className="text-sm font-bold">{product?.title.split(" ").slice(0, 4).join(" ")}</h1>



                <div className="flex justify-between mt-2 items-center">

                    <h1 className="text-sm font-bold">Price: <span className='text-green-600 text-lg font-bold'>${product?.price}</span></h1>
                    <h1 className='text-sm'>Off price: <span className='line-through text-red-700'>${product?.discountPrice}</span></h1>
                </div>

                <div className="">
                </div>
            </div>
        </div>
    )
}

export default ProductCart

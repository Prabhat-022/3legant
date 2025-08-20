import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSingleProduct } from '../../redux/ProductSlice';
import axios from 'axios';
import toast from 'react-hot-toast';

const ProductCart = ({ product }) => {
    const img = product.image.map((img) => img?.url);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSingleProduct = (product) => {
        dispatch(setSingleProduct(product))
        navigate(`/product/${product._id}`)
    }

    const addToCart = async (product, quantity) => {
        //save in database
        if (product) {
            try {
                setLoading(true)
                const res = await axios.post("/api/cart", { productId: product._id, quantity });

                if (res.data.success) {
                    toast.success(res.data.message);
                    setLoading(false)
                    //for update the ui
                    dispatch(addToCart([product]))
                }
            } catch (error) {
                console.log(error)
                toast.error("Something went wrong");
            }
        }
    }

    return (

        <div className="bg-white shadow-md rounded-lg overflow-hidden w-[250px] h-[430px] border-2 p-2 cursor-pointer">
            <div className="relative">
                <img src={img[0]} alt="" className='w-full h-[300px] object-cover' onClick={() => handleSingleProduct(product)} />

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
                    <button className='bg-[#070808] text-white p-2 rounded-md hover:bg-[#162113] hover:text-white cursor-pointer' disabled={loading} onClick={() => addToCart(product, "1")}>Add to Cart {loading && "..."}</button>

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

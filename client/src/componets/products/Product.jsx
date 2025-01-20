import { FaStar } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Product = () => {

    const product = { productId: 145215452, quantity: 1 };
    const { productId, quantity } = product;
    const productDetails = useSelector((state) => state.products?.singleProduct);

    const { image, title, description, price, discountPrice, size, color, additionalInfo, category } = productDetails


    const dispatch = useDispatch();

    const handleaddtocart = (e) => {
        e.preventDefault();
        dispatch(addToCart({ productId, quantity }));
    }

    return (
        <>
            <div className="">
                <div className="w-full flex gap-2 ">
                    <div className="w-1/2 flex gap-2 flex-wrap m-4 p-4">
                        <img src={image[0].url} alt="" className='w-[250px] h-[300px] ' />
                        <img src={image[1].url} alt="" className='w-[250px] h-[300px] ' />
                        <img src={image[2].url} alt="" className='w-[250px] h-[300px] ' />
                        <img src={image[3].url} alt="" className='w-[250px] h-[300px] ' />
                        <img src={image[4].url} alt="" className='w-[250px] h-[300px] ' />
                        <img src={image[5].url} alt="" className='w-[250px] h-[300px] ' />

                    </div>

                    <div className="w-1/2 m-4 p-4">
                        <div className="flex gap-2 item-center ">
                            <div className="flex">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />

                            </div>
                            <div className="">
                                <h1>11 Reviews</h1>

                            </div>
                        </div>

                        <div className="mb-2 mt-2">
                            <h1 className='font-bold text-3xl'>{title}</h1>
                        </div>

                        <div className="mb-2 mt-2 flex flex-warp">
                            <p>{description}</p>
                        </div>

                        <div className="flex gap-4 my-2 text-xl">
                            <h1 className='font-bold'>{price}</h1>
                            <h1 className='line-through'>{discountPrice}</h1>
                        </div>

                        <hr />
                        <div className="my-3">
                            <h1>Measurements</h1>
                            <p className='text-sm'>{size} </p>
                        </div>

                        <div className="mb-3 mt-3">
                            <div className="flex  items-center ">
                                <h1 className='' >Choose Color </h1>
                                <h1 >
                                    <FaAngleRight size={15} />

                                </h1>
                            </div>
                            <p>{color}</p>
                            <div className="flex hover:cursor-pointer gap-2  my-4">
                                <img src={image[0].url} alt="" className='w-[100px] h-[100px]  hover:border-2' />
                                <img src={image[1].url} alt="" className='w-[100px] h-[100px]  hover:border-2' />
                                <img src={image[2].url} alt="" className='w-[100px] h-[100px]  hover:border-2' />
                            </div>
                        </div>

                        <div className="flex gap-2 justify-between mt-4 mb-3 ">
                            <div className="flex gap-2 border bg-[#f5f5f5] p-2  px-10 w-1/3 item-center justify-between font-bold rounded-md ">
                                <button className="">-</button>
                                <h1>{quantity}</h1>
                                <button>+</button>

                            </div>
                            <div className="flex border-2 gap-2 items-center justify-center p-2 mx-6 w-full bg-black text-white rounded-3xl ">
                                <FaRegHeart />
                                <button className='reounded-md'> Wishlist</button>
                            </div>
                        </div>

                        <div className="border-2 p-2 bg-black text-white rounded-xl w-full flex items-center justify-center ">
                            <button className='text-center font-bold cursor-pointer ' onClick={handleaddtocart}>Add to Cart</button>
                        </div>

                        <div className="flex gap-4 my-2">
                            <p>SKU</p>
                            <p>111</p>
                        </div>
                        <div className="flex gap-4 my-2">
                            <p>CATEGORY</p>
                            <p>{category}</p>
                        </div>

                        <div className="">
                            <div className="flex justify-between mb-2">
                                <h1 className='font-bold'>Additional info</h1>
                                <FaChevronDown />
                            </div>


                            <hr />

                            <div className="mt-2 mb-3">
                                <h1 className='text-xl'>Details</h1>
                                <p>{additionalInfo}</p>

                            </div>

                            <h1 className='text-xl'>Packaging</h1>

                            <div className="">
                                <p>Width: 20&quot; Height:20" Length:21"</p>
                                <p>Weight: 20 lbs</p>
                                <p>Package(s): 1</p>
                            </div>

                            <div className="flex justify-between mt-3 mb-3">
                                <h1>Questions</h1>
                                <FaChevronDown />
                            </div>
                            <hr />

                            <div className="flex justify-between mt-3 mb-3">
                                <h1>Reviews(11)</h1>
                                <FaChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product

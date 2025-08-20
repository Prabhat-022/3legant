import React, { useState } from 'react'
import { FaChevronCircleDown } from 'react-icons/fa';
import { FaAngleRight, FaChevronDown, FaRegHeart, FaStar } from 'react-icons/fa6';
import { useSelector } from 'react-redux'
import NewArrivals from '../Homepage/NewArrivals';
import { IoStarHalfOutline } from "react-icons/io5";

const ProductPage = () => {
  const [oneImgShow, setOneImgShow] = useState(false)
  const { singleProduct } = useSelector((state) => state.product);


  if (!singleProduct) return;
  const { _id, image, title, description, price, discountPrice, size, color, additionalInfo, category, } = singleProduct

  const img = image.map((img) => img?.url);

  const handleOneImgShow = (index) => {
    setOneImgShow(index)
  }
  return (
    <>
      <div className="lg:mx-24">
        <div className="w-full xl:w-full xl:flex xl:gap-2">
          <div className="flex flex-wrap xl:w-1/2 xl:flex xl:gap-2 xl:flex-wrap xl:m-4 xl:p-4">
            {
              oneImgShow ? <div className='w-full h-full cursor-pointer border shadow '>
                <img src={img[oneImgShow]} alt="" className='w-full h-full ' />
              </div> : <>
                <img src={img[0]} alt="" className='w-[200px] h-[250px] ' />
                <img src={img[1]} alt="" className='w-[200px] h-[250px] ' />
                <img src={img[2]} alt="" className='w-[200px] h-[250px] ' />
                <img src={img[3]} alt="" className='w-[200px] h-[250px] ' />
                <img src={img[4]} alt="" className='w-[200px] h-[250px] ' />
                <img src={img[5]} alt="" className='w-[200px] h-[250px] ' />
              </>
            }

          </div>

          <div className="m-4 xl:w-1/2 xl:m-4 xl:p-4 lg:w-1/2 lg:m-4 lg:p-4  md:w-1/2 md:m-4 md:p-4">
            <div className="flex gap-2 item-center">
              <div className="flex items-center justify-center">
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <IoStarHalfOutline className='text-yellow-400' />
                <h1>11 Reviews</h1>

              </div>
              <div className="">

              </div>
            </div>

            <div className="xl:mb-2 xl:mt-2">
              <h1 className='font-bold text-3xl'>{title}</h1>
            </div>

            <div className="mb-2 mt-2 flex flex-warp">
              <p>{description}</p>
            </div>

            <div className="flex gap-4 my-2 text-xl">
              <h1 className='font-bold'> ₹ {price}</h1>
              <h1 className='line-through'>₹ {discountPrice}</h1>
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
                <img src={img[0]} alt="" className='w-[100px] h-[100px]  hover:border-2' onClick={() => handleOneImgShow(0)}/>
                <img src={img[1]} alt="" className='w-[100px] h-[100px]  hover:border-2' onClick={() => handleOneImgShow(1)}/>
                <img src={img[2]} alt="" className='w-[100px] h-[100px]  hover:border-2' onClick={() => handleOneImgShow(2)}/>
              </div>
            </div>

            <div className="flex gap-2 justify-between mt-4 mb-3 ">
              <div className="flex gap-2 border bg-[#f5f5f5] p-2  px-10 w-1/3 item-center justify-between font-bold rounded-md ">
                {/* <button className="font-bold" onClick={removeQuantity}><RiSubtractFill /></button> */}

                {/* <h1>{quantity}</h1> */}

                {/* <button className="font-bold" onClick={AddQuantity}><FiPlus /></button> */}

              </div>
              <div className="flex border-2 gap-2 items-center justify-center p-2 mx-6 w-full bg-black text-white rounded-3xl ">
                <FaRegHeart />
                <button className='reounded-md'> Wishlist</button>
              </div>
            </div>

            <div className="border-2 p-2 bg-black text-white rounded-xl w-full flex items-center justify-center ">
              {/* <button className='text-center font-bold cursor-pointer ' onClick={handleaddtocart}>Add to Cart</button> */}
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
                <FaChevronCircleDown />
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
                <FaChevronCircleDown />
              </div>
              <hr />

              <div className="flex justify-between mt-3 mb-3">
                <h1>Reviews(11)</h1>
                <FaChevronCircleDown />
              </div>
            </div>
          </div>
        </div>

        {/* newArrivals */}
        <div className="">
          <NewArrivals />
        </div>
      </div>

    </>
  )
}

export default ProductPage

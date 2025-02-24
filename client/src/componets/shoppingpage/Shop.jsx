import shopheader from '../../assets/shop-page-header.jpg'
import { FaAngleDown } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsFillHddStackFill } from "react-icons/bs";
import ProductCart from '../../pages/ProductCart';
import { UseGetAllTheProdut } from '../../hooks/UseGetAllTheProduct';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Shop = () => {

    UseGetAllTheProdut()
    const product = useSelector((state) => state.products.product)
    // console.log('cart product:', products[0].product);

    const getInitialState = () => {
        const value = "All";
        return value;
    };

    const [value, setValue] = useState(getInitialState);
    console.log('value:', value);

    const handleChange = (e) => {
        setValue(e.target.value);
    };


    return (
        <>

            <div className=" p-4">
                <div className="relative flex items-center justify-center w-full">
                    <img src={shopheader} alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-50">
                        <h1 className='p-1'>Home {'>'} Shop</h1>
                        <h1 className='font-bold text-4xl p-1'>Shop Page</h1>
                        <p className='text-[#6d6c6c]'>Let&apos;s desine the place you always imagined</p>
                    </div>
                </div>

                <div className="flex justify-between p-2 mx-24 my-4 gap-3">

                    <div className="">
                        <h1 className='font-serif text-[#716e6e] mb-2'>CATEGORIES</h1>
                        <div className="flex">
                            <select name="" id="" value={value} onChange={handleChange}>
                                <option value="All">All</option>
                                <option value="Living room">Living room</option>
                                <option value="table">Tabel</option>
                                <option value="sofa">Sofa</option>
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='font-serif text-[#716e6e] mb-2'>PRICE</h1>
                        <div className="">
                            <select name="" id="">
                                <option value="">All Price</option>
                                <option value="">Living room</option>
                                <option value="">Tabel</option>
                                <option value="">Sofa</option>
                            </select>

                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[200px]">
                        <div className="flex items-center">
                            <h1 className='font-serif text-[#716e6e]'>Sort by</h1>
                            <FaAngleDown />
                        </div>
                        <div className="flex gap-4">
                            <BsFillGrid3X3GapFill />
                            <BsFillGridFill />
                            <BsFillGrid1X2Fill />
                            <BsFillHddStackFill />

                        </div>

                    </div>

                </div>
                <div className="flex flex-wrap gap-3 items-center justify-center ">
                    {
                        product?.map((item) => (
                            <ProductCart product={item} key={item._id} />
                        ))

                    }
                </div>
                <div className="flex items-center justify-center ">
                    <button className='border cursor-pointer rounded-full p-4 px-10 text-bold text-xl shadow'>Show more</button>
                </div>

            </div>

        </>
    )
}

export default Shop

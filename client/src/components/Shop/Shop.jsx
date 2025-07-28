import shopheader from '../../assets/shop-page-header.jpg'
import { FaAngleDown } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsFillHddStackFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProductCart from '../ProductList/ProductCart';

const Shop = () => {
    const [category, setCategory] = useState('All');

    const product = useSelector((state) => state.product.product)
    console.log('product', product);

    const input = useSelector(state => state.user?.input)
    const serchPrduct = product.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const filteredProducts = serchPrduct.filter(product => {
        if (category === 'All') return true;
        if (category === 'Living room') return product.category === 'Living room';
        if (category === 'table') return product.category === 'table';
        if (category === 'sofa') return product.category === 'sofa';
        if (category === 'bed') return product.category === 'bed';
        if (category === 'chair') return product.category === 'chair';
        if (category === 'cloth') return product.category === 'cloth';
        return false;
    });


    return (
        <>

            <div className=" p-4">
                <div className="relative flex items-center justify-center w-full">
                    <img src={shopheader} alt="" className='w-full h-auto lg:mx-24' />
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
                            <select name="" id="" value={category} onChange={(e) => handleChange(e)}>
                                <option value="All">All</option>
                                <option value="Living room">Living room</option>
                                <option value="table">Tabel</option>
                                <option value="sofa">Sofa</option>
                                <option value="bed">Bed</option>
                                <option value="chair">Chair</option>
                                <option value="cloth">Cloth</option>
                            </select>
                        </div>

                    </div>
                    <div className="">
                        <h1 className='font-serif text-[#716e6e] mb-2'>PRICE</h1>
                        <div className="">
                            <select name="" id="">
                                <option value="">All Price</option>
                                <option value="">Low to High</option>
                                <option value="">High to Low</option>
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
                <div className="flex flex-wrap gap-4 w-full h-[80vh] overflow-y-scroll scrollbar-hide mx-24">
                    {
                        serchPrduct?.length > 0 ? serchPrduct?.map((item) => (
                            <ProductCart product={item} key={item._id} />
                        )) : <p>No products found.</p>
                    }
                    {
                        serchPrduct?.length > 0 ? serchPrduct?.map((item) => (
                            <ProductCart product={item} key={item._id} />
                        )) : <p>No products found.</p>
                    }
                    {
                        serchPrduct?.length > 0 ? serchPrduct?.map((item) => (
                            <ProductCart product={item} key={item._id} />
                        )) : <p>No products found.</p>
                    }
                    {
                        serchPrduct?.length > 0 ? serchPrduct?.map((item) => (
                            <ProductCart product={item} key={item._id} />
                        )) : <p>No products found.</p>
                    }

                </div>

                <div className="flex items-center justify-center my-10 ">
                    <button className='border cursor-pointer rounded-full p-4 px-10 text-bold text-xl shadow hover:bg-[#e2e8f0]'>Show more</button>
                </div>

            </div>

        </>
    )
}

export default Shop

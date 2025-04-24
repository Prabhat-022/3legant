import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
// import { toggleStatusTab } from '../redux/cartSlice';
// import { UseGetAllTheCartProducts } from '../hooks/useGetAllTheCartProducts';
import { AiOutlineBars } from "react-icons/ai";
import { toggleStatusTab } from '../../redux/CartSlice';
import { setInput } from '../../redux/UserSlice';

const Header = () => {
    const [search, setSearch] = useState(false)
    const [Input, setInputs] = useState("")
    const { user } = useSelector(state => state.user)


    const { Fullname, image } = user
    const dispatch = useDispatch();

    if (Input) {
        dispatch(setInput(Input))
    }
    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }
    return (
        <>
            <div className="xl:mx-24 lg:mx-24 md:mx-24">
                <div className="flex justify-between items-center px-2 max-w-full p-5 ">

                    <div className="flex items-center gap-2">
                        <AiOutlineBars size={25} className='xl:hidden lg:hidden md:hidden' />
                        <Link to={"/"} className='text-3xl font-bold'>3legant</Link>
                    </div>

                    <div className=" hidden  xl:flex lg:flex md:flex xl:gap-10">
                        <NavLink to={"/home"} className={({ isActive }) => isActive ? "text-black border-b-[2px]" : "text-gray-500"}>Home</NavLink>

                        <NavLink to={"shop"} className={({ isActive }) => (isActive ? "text-black border-b-[2px]" : "text-gray-500")}>Shop</NavLink>

                        <NavLink to={"product"} className={({ isActive }) => (isActive ? "text-black border-b-[2px]" : "text-gray-500")}>Product</NavLink>

                        <NavLink to={"about"} className={({ isActive }) => (isActive ? "text-black border-b-[2px]" : "text-gray-500")}>About</NavLink>

                    </div>

                    <div className="flex gap-2">
                        {
                            search ? <input type="text" placeholder='Search' className='border-2 px-1 outline-none rounded' value={Input} onChange={(e) => setInputs(e.target.value)} /> : ""
                        }
                        <h1 className='cursor-pointer'> <CiSearch size={25} onClick={() => setSearch(!search)} /></h1>

                        <div className="relative " onClick={handleOpenTabCart}>
                            <Link to={""} className='cursor-pointer ' ><CgShoppingCart size={25} /></Link>
                            {/* <p className='absolute  left-2.5 bottom-4 text-red-600 font-bold'>{product.length}</p> */}

                        </div>
                        <div className="flex gap-2">
                            {
                                user?.role === "user" ? (
                                    <>
                                        <Link to={"/profile"} className='cursor-pointer'>
                                            {image ? <img src={image} alt="" className="w-8 h-8 rounded-full" /> : <CgProfile size={25} />}
                                        </Link>
                                        {Fullname && <p>{Fullname}</p>}
                                    </>
                                ) : (
                                    <Link to={"/admin/admin-dashboard"} className='cursor-pointer'>
                                        <CgProfile size={25} />
                                    </Link>
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header

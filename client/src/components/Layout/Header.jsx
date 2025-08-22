import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
// import { toggleStatusTab } from '../redux/cartSlice';
// import { UseGetAllTheCartProducts } from '../hooks/useGetAllTheCartProducts';
import { AiOutlineBars } from "react-icons/ai";
import { addToCart, toggleStatusTab } from '../../redux/CartSlice';
import { setInput } from '../../redux/UserSlice';
import { IoCloseSharp } from "react-icons/io5";
import axiosInstance from '../../lib/axios';

const Header = () => {
    const [search, setSearch] = useState(false)
    const [Input, setInputs] = useState("")
    const[item,setItem]=useState([])
    const [toggleMenu, setToggleMenu] = useState(false)
    const { user, Fullname, image } = useSelector(state => state?.user) || {}
    console.log('user',user)


    const dispatch = useDispatch();

    if (Input) {
        dispatch(setInput(Input))
    }
    const handleOpenTabCart = async () => {
        dispatch(toggleStatusTab());

        try {
            const res = await axiosInstance.get("/api/cart", {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            if (res.data.success) {
                dispatch(addToCart(res.data.data))
                setItem(res.data.data)
                }
            console.log("-> Cart item fetch successfully", res.data);

        } catch (error) {
            console.log("-> Cart item fetch Error", error);
        }
    }

    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <>
            <div className="xl:mx-24 lg:mx-24 md:mx-24">
                <div className="flex justify-between items-center px-2 max-w-full p-5 ">

                    <div className="flex items-center justify-center gap-2">
                        <AiOutlineBars size={23} className='xl:hidden lg:hidden md:hidden' onClick={handleMenuToggle} />
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

                        {/*shopping  cart */}
                        <div className="relative cursor-pointer " onClick={handleOpenTabCart}>
                            <Link to={""} className='cursor-pointer ' ><CgShoppingCart size={25} /></Link>
                            {/* <p className='absolute  left-2.5 bottom-4 text-red-600 font-bold'>{product.length}</p> */}
                            <p className='absolute  left-2.5 bottom-4 text-red-600 font-bold'>{item.length}</p>    
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
                                    <Link to={"/login"} className='cursor-pointer'>
                                        <CgProfile size={25} />
                                    </Link>
                                )
                            }
                        </div>
                    </div>

                </div>


                {/* menu for mobile device */}
                {
                    toggleMenu && window.innerWidth < 768 && (
                        <div className="fixed top-16 left-0 bg-white shadow-lg rounded-md h-[500px] w-[240px] lg:hidden" onMouseLeave={handleMenuToggle}>
                            <div className="p-2 ">
                                <IoCloseSharp size={25} onClick={handleMenuToggle} className="absolute top-2 right-2 cursor-pointer" />
                                <ul>
                                    <li onClick={handleMenuToggle} className="cursor-pointer p-2 text-xl font-serif">
                                        <NavLink to={"/"}>Home</NavLink>
                                    </li>
                                    <li onClick={handleMenuToggle} className="cursor-pointer p-2 text-xl font-serif">
                                        <NavLink to={"shop"}>Shop</NavLink>
                                    </li>
                                    <li onClick={handleMenuToggle} className="cursor-pointer p-2 text-xl font-serif">
                                        <NavLink to={"product"}>Product</NavLink>
                                    </li>
                                    <li onClick={handleMenuToggle} className="cursor-pointer p-2 text-xl font-serif">
                                        <NavLink to={"about"}>About</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Header

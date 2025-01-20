import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTab } from '../redux/cartSlice';


const Header = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState(false)
  const loginUser = useSelector(state => state.user?.loginuser)


  const product = useSelector(state => state.cart?.cart)


  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  }

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center mx-24 m-4 px-6">

          <div className="">
            <Link to={"/"} className='text-3xl font-bold'>3legant</Link>
          </div>

          <div className="flex gap-10">
            <NavLink to={"/"} className={(isActive) => isActive ? "text-black border-b-[2px]" : "text-gray-500"}>Home</NavLink>
            <NavLink to={"/shop"} className={(isActive) => (isActive ? "text-black" : "text-gray-500")}>Shop</NavLink>
            <NavLink to={"/product-details"} className={(isActive) => (isActive ? "text-black" : "text-gray-500")}>Product</NavLink>
            <NavLink to={"/contact"} className={(isActive) => (isActive ? "text-black" : "text-gray-500")}>Contact Us</NavLink>

          </div>

          <div className="flex gap-2">
            {
              search ? <input type="text" placeholder='Search' className='border-2 px-1 outline-none rounded' /> : ""
            }
            <h1 className='cursor-pointer'> <CiSearch size={25} onClick={() => setSearch(!search)} /></h1>

            <div className="relative " onClick={handleOpenTabCart}>
              <Link to={""} className='cursor-pointer ' ><CgShoppingCart size={25} /></Link>
              <p className='absolute  left-2.5 bottom-4 text-red-600 font-bold'>{product.length}</p>

            </div>
            <div className="flex gap-2">
              <Link to={"/user-profile"} className='cursor-pointer'><CgProfile size={25} /></Link>
              <p>{loginUser?.fullName}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header

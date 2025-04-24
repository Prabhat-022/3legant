import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import signupImg from '../../assets/Left.jpg'
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/UserSlice'
import { UsegetAllTheCartItem } from '../../hooks/UsegetAllTheCartItem'

const Register = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user)


  const onSubmit = async (data) => {
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
    UsegetAllTheCartItem()
  }

  //check the user than switch to the appropriate page
  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin')
      }
      else if (user.role === 'user') {
        navigate('/home')
      }
    } else {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen ">
        <div className="flex items-center justify-center  border-2 flex-col xl:flex-row lg:flex-row md:flex-row">
          <div className="">
            <img src={signupImg} alt="" className="w-[400px] h-[350px]  xl:flex xl:w-[500px] xl:h-[600px] md:h-[600px] md:w-[500px] lx:flex xl:flex-row md:flex-row lg-flex" />
          </div>
          <div className="flex flex-col justify-center items-center ">

            <form action="" className="flex flex-col p-4 gap-4 w-[400px] " onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-bold">Sign up</h1>
              <p className="text-[#64748b]">
                Already have an account?
                <span className="text-green-600 font-bold px-2 cursor-pointer">
                  <Link to={'/login'}>
                    Sing in
                  </Link>
                </span></p>


              <input type="text" placeholder="Your name" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("Fullname")} />

              <input type="text" placeholder="Username" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("username")} />

              <input type="email" placeholder="Your email" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("email")} />

              <input type="password" placeholder="Your password" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("password")} />

              <div className="flex gap-4 ">
                <div className=" flex gap-2 items-center justify-center">
                  <input type="radio" name="role" id="admin" value="admin" {...register("role")} />
                  <p>Admin</p>

                  <input type="radio" name="role" id="user" value="user" {...register("role")} />
                  <p>User</p>
                </div>
              </div>


              <div className="flex items-center gap-2">
                <input type="checkbox" className="cursor-pointer" {...register("isagree")} />

                <p className="text-[#64748b] text-sm p-2">I agree to the <span className="font-bold cursor-pointer">Privacy Policy </span> and <span className="font-bold cursor-pointer">Terms of Service</span></p>
              </div>

              <button type="submit" className="text-white bg-[#070808] hover:bg-[070808] p-2 rounded" disabled={loading}>{loading ? "Loading..." : "Sign up"}</button>
            </form>


          </div>
        </div>
      </div>
    </>
  )
}

export default Register

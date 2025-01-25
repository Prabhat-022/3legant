import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assets/Left.jpg";
import axios from 'axios'
import { useState } from "react";
import { setloginUser } from "../redux/userSlice";
import { useDispatch } from 'react-redux'

import { useForm } from "react-hook-form"


const Signin = () => {



  // console.log(watch("example")) // watch input value by passing the name of it

  // const [loginUser, setLoginUser] = useState({
  //   email: "",
  //   password: "",
  //   role: "",
  // });

  // console.log('loginUser: ', loginUser)

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleLogin = async (e) => {
  //   e.preventDefault()

  //   try {
  //     const res = await axios.post('/api/user/login', loginUser, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       withCredentials: true
  //     })

  //     setLoading(true)
  //     console.log(res.data.user)

  //     if (res.data.success) {
  //       dispatch(setloginUser(res.data.user))
  //       localStorage.setItem('user', JSON.stringify(res.data.user))
  //       setLoginUser("")
  //       setLoading(false)

  //       if (res.data.user.role === "admin") {

  //         navigate('/admin')
  //         setLoading(false)
  //       } else {
  //         navigate('/')
  //         setLoading(false)
  //       }

  //     }


  //   } catch (error) {
  //     console.log('Login failed:', error)
  //     setLoading(false)
  //   }
  // }

  // react hooks form

  const {
    register,
    handleSubmit,
  } = useForm()


  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const res = await axios.post('/api/user/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      })

      setLoading(true)

      if (res.data.success) {
        dispatch(setloginUser(res.data.user))
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setLoading(false)

        if (res.data.user.role === "admin") {

          navigate('//admin-dashboard')
          setLoading(false)

        } else {
          navigate('/')
          setLoading(false)
        }

      }


    } catch (error) {
      console.log('Login failed:', error)
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex items-center justify-center  border-2">
          <div className="">
            <img src={signupImg} alt="" className="w-[500px] h-[600px]" />
          </div>
          <div className="flex flex-col justify-center items-center ">

            {/* <form action="" className="flex flex-col p-4 gap-4 w-[400px]" onSubmit={handleLogin}>
              <h1 className="text-2xl font-bold">Sign in</h1>

              <p className="text-[#64748b]">
                Don&apos;t have an account yet?
                <span className="text-green-600 text-bold  cursor-pointer px-2">
                  <Link to={'/signup'}>Sign up</Link>
                </span></p>


              <input type="text" placeholder="Your username or email address" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" value={loginUser.email} onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })} />

              <input type="password" placeholder="Your password" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" value={loginUser.password} onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })} />

              <div className="flex gap-4 ">

                <div className=" flex gap-2 items-center justify-center">
                  <input type="radio" name="role" id="admin" value="admin" onChange={(e) => setLoginUser({ ...loginUser, role: e.target.value })} checked={loginUser.role === "admin"} />
                  <p>Admin</p>

                  <input type="radio" name="role" id="user" value="user" onChange={(e) => setLoginUser({ ...loginUser, role: e.target.value })} checked={loginUser.role === "user"} />
                  <p>User</p>
                </div>

              </div>

              <div className="flex justify-between p-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p className="text-[#64748b]">Remember me</p>
                </div>
                <div className="">
                  <p className="font-bold cursor-pointer">Forgot password?</p>
                </div>
              </div>

              <button type="submit" className="text-white bg-[#070808] hover:bg-[070808] p-2 rounded" disabled={loading}>{loading ? "Loading..." : "Sign in"}</button>
            </form> */}


            <form action="" className="flex flex-col p-4 gap-4 w-[400px]" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-bold">Sign in</h1>

              <p className="text-[#64748b]">
                Don&apos;t have an account yet?
                <span className="text-green-600 text-bold  cursor-pointer px-2">
                  <Link to={'/signup'}>Sign up</Link>
                </span></p>


              <input type="text" placeholder="Your username or email address" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("email")} />

              <input type="password" placeholder="Your password" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("password")} />

              <div className="flex gap-4 ">

                <div className=" flex gap-2 items-center justify-center">
                  <input type="radio" name="role" id="admin" value="admin" {...register("role")} />
                  <p>Admin</p>

                  <input type="radio" name="role" id="user" value="user" {...register("role")} />
                  <p>User</p>
                </div>

              </div>

              <div className="flex justify-between p-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p className="text-[#64748b]">Remember me</p>
                </div>
                <div className="">
                  <p className="font-bold cursor-pointer">Forgot password?</p>
                </div>
              </div>

              <button type="submit" className="text-white bg-[#070808] hover:bg-[070808] p-2 rounded" disabled={loading}>{loading ? "Loading..." : "Sign in"}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin

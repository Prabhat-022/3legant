import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import signupImg from '../../assets/Left.jpg'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import { setuserLogin } from '../../redux/UserSlice'
import { useDispatch } from 'react-redux'
import { UsegetAllTheCartItem } from '../../hooks/UsegetAllTheCartItem'

const Login = () => {

    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
    } = useForm()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmit = async (data) => {
        data.email = data.email.toLowerCase()
        try {
            setLoading(true)
            const res = await axios.post('/api/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            })
            setLoading(false)

            if (res.data.success) {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setLoading(false)
                dispatch(setuserLogin(res.data.user))
                toast.success(res.data.message)


                if (res.data.user.role === 'admin') {
                    navigate('/admin')
                }
                else {
                    navigate('/home')
                }
                UsegetAllTheCartItem()

            }
            else {
                toast.error(res.data.message)
                setLoading(false)
            }

        } catch (error) {
            console.log('User Login  failed:', error)
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center w-full h-screen">
                <div className="flex items-center justify-center  border-2 xl:flex-row lg:flex-row md:flex-row flex-col">
                    <div className="">
                        <img src={signupImg} alt="" className=" w-[400px] h-[450px] xl:w-[500px] lg:w-[500px] md:w-[500px] xl:h-[600px] lg:h-[600px] md:h-[600px]" />
                    </div>
                    <div className="flex flex-col justify-center items-center ">

                        <form action="" className="flex flex-col p-4 gap-4 w-[400px]" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-2xl font-bold">Sign in</h1>

                            <p className="text-[#64748b]">
                                Don&apos;t have an account yet?
                                <span className="text-green-600 font-bold  cursor-pointer px-2">
                                    <Link to={'/'}>Sign up</Link>
                                </span></p>


                            <input type="text" placeholder="Your username or email address" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("email")} />

                            <input type="password" placeholder="Your password" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("password")} />

                            <div className="flex justify-between p-2">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p className="text-[#64748b]">Remember me</p>
                                </div>
                                <div className="">
                                    <Link to={'/forgot-password'}>
                                        <p className="font-bold cursor-pointer">Forgot password?</p>
                                    </Link>
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

export default Login

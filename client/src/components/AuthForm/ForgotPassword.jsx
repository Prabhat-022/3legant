
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signupImg from '../../assets/Left.jpg'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState('')
    const [userOtp, setuserOtp]= useState('')
    const [optMessage, setOtpMessage]=useState('')
    const {
        register,
        handleSubmit,
    } = useForm()
    const navigate = useNavigate()

    const onSubmit = async (data) => {

        console.log('data', data)

        try {
            setLoading(true)
            const res = await axios.post('/api/forgot-password', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            })
            console.log('Register res:', res.data)
            setLoading(false)

            if (res.data.success) {
                // dispatch(setloginUser(res.data.user))
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setLoading(false)
                toast.success(res.data.message)
                navigate('/home')
            }

        } catch (error) {
            console.log('Forgot Password Failed:', error)
            toast.error(error.response.data.message)
            setLoading(false)
        }

    }
    const generateOtp = async () => {

        try {
            const res = await axios.get('/api/generate-otp')
            setOtp(res.data.serverOtp)
            console.log('otp res:', res.data)

        } catch (error) {
            console.log("Otp error", error)
        }
    }
    const verifyOtp = async () => {

        try {
            const res = await axios.post('/api/verify-otp', {
                userOtp
            })
            setOtpMessage(res.data.message)
            console.log('otp res:', res.data)

        } catch (error) {
            setOtpMessage(error.response.data.message)
            console.log("Otp error", error)
        }
    }


    useEffect(() => {
        generateOtp()
    }, [])


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
                                <span className="text-green-600 text-bold  cursor-pointer px-2">
                                    <Link to={'/'}>Sign up</Link>
                                </span></p>


                            <input type="text" placeholder="Your username or email address" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("email")} />

                            <input type="password" placeholder="New password" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("password")} />

                            <div className="flex justify-between items-center gap-2 p-2">
                                <input type="text" placeholder="Enter OTP" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer w-[150px]" value={userOtp} onChange={(e) => setuserOtp(e.target.value)}/>

                                {/* displaying the server opt  */}
                                <div className='border-2 text-center p-1 font-bold text-xl m-1 text-red-500'>{otp}</div>

                                {/* displaying the server opt message  */}

                                <button type="button" className="text-white bg-[#070808] hover:bg-[#181c1c] p-2 px-3 rounded cursor-pointer hover:opacity-90 hover:scale-105 " disabled={loading} onClick={verifyOtp}>{loading ? "Loading..." : "Verify"}</button>

                            </div>
                            <div className='text-sm text-red-500'>{optMessage}</div>

                            <button type="submit" className="text-white bg-[#070808] hover:bg-[070808] p-2 rounded cursor-pointer hover:opacity-90" disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword

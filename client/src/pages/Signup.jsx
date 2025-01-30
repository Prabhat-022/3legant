import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assets/Left.jpg";
import axios from 'axios'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setadmin, setloginUser } from '../redux/userSlice';
import { useForm } from "react-hook-form"


const Signup = () => {

    const {
        register,
        handleSubmit,
    } = useForm()

    // const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const handlecheckbox = (e) => {

    //     setIsChecked(!isChecked);
    //     setUser({ ...user, isagree: e.target.checked })
    // }


    // const handleSignup = async (e) => {
    //     e.preventDefault()

    //     try {
    //         setLoading(true)

    //         const res = await axios.post('/api/user/register', user, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             withCredentials: true
    //         })

    //         console.log('Signup successful', res.data)

    //         if (res.data.success) {
    //             const { user } = res.data
    //             dispatch(setloginUser(user))
    //             setUser("")
    //             setLoading(false)
    //             navigate('/signin')
    //         }

    //     } catch (error) {
    //         setLoading(false)
    //         console.log("Signup failed", error)
    //     }
    // }


    // const handleRoleChange = (e) => {
    //     setUser({ ...user, role: e.target.value })
    // }

    const onSubmit = async (data) => {
        console.log('data', data)
        console.log('role', data.role)

        if (data.role === "admin") {

            try {
                setLoading(true)
                const res = await axios.post('/api/admin/register', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                })

                console.log('admin signup res', res.data);
                console.log('admin success', res.data.success);

                if (res.data.success) {

                    const { user } = res.data;
                    dispatch(setadmin(user))
                    data("")
                    setLoading(false)

                }
                navigate('/signin')

            } catch (error) {
                setLoading(false)
                console.log("Admin Signup failed", error)
            }

        } else if (data.role === "user") {

            try {
                setLoading(true)

                const res = await axios.post('/api/user/register', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                })
                console.log('user signup res', res.data);
                console.log('user signup res', res.data.success);


                if (res.data.success) {
                    const { user } = res.data
                    dispatch(setloginUser(user))
                    data("")
                    setLoading(false)
                }
                navigate('/signin')

            } catch (error) {
                setLoading(false)
                console.log(" User Signup failed", error)
            }
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
                        {/* <form action="" className="flex flex-col p-4 gap-4 w-[400px] " onSubmit={handleSignup}>
                            <h1 className="text-2xl font-bold">Sign up</h1>
                            <p className="text-[#64748b]">
                                Already have an account?
                                <span className="text-green-600 text-bold px-2 cursor-pointer">
                                    <Link to={'/signin'}>
                                        Sing in
                                        
                                    </Link>
                                </span></p>


                            <input type="text" placeholder="Your name" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })} />

                            <input type="text" placeholder="Username" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" value={user.userName} onChange={(e) => setUser({ ...user, userName: e.target.value })} />

                            <input type="email" placeholder="Your email" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

                            <input type="password" placeholder="Your password" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

                            <div className="flex gap-4 ">
                                <div className=" flex gap-2 items-center justify-center">
                                    <input type="radio" name="role" id="admin" value="admin" onChange={handleRoleChange} checked={user.role === "admin"} />
                                    <p>Admin</p>

                                    <input type="radio" name="role" id="user" value="user" onChange={handleRoleChange} checked={user.role === "user"} />
                                    <p>User</p>
                                </div>

                            </div>



                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="cursor-pointer" value={user.isagree} onChange={handlecheckbox} />

                                <p className="text-[#64748b] text-sm p-2">I agree to the <span className="font-bold cursor-pointer">Privacy Policy </span> and <span className="font-bold cursor-pointer">Terms of Service</span></p>
                            </div>

                            <button type="submit" className="text-white bg-[#070808] hover:bg-[070808] p-2 rounded" disabled={loading}>{loading ? "Loading..." : "Sign up"}</button>
                        </form> */}

                        <form action="" className="flex flex-col p-4 gap-4 w-[400px] " onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-2xl font-bold">Sign up</h1>
                            <p className="text-[#64748b]">
                                Already have an account?
                                <span className="text-green-600 text-bold px-2 cursor-pointer">
                                    <Link to={'/signin'}>
                                        Sing in

                                    </Link>
                                </span></p>


                            <input type="text" placeholder="Your name" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("fullName")} />

                            <input type="text" placeholder="Username" className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 focus:border-b-blue-500 focus:ring-0 outline-none p-2 cursor-pointer" {...register("userName")} />

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

export default Signup

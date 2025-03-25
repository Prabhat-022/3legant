import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setuserLogin } from '../../redux/UserSlice'
import toast from 'react-hot-toast'

const EditProfile = () => {
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(false)
    const [imgLoading, setImgLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log('img:', img);


    const users = JSON.parse(localStorage.getItem('user'))

    const { register, handleSubmit } = useForm({
        defaultValues: {
            Fullname: users.Fullname,
            email: users.email,
            username: users.username,
            role: users.role,
        },
    })

    const onSubmit = (data) => {
        console.log(data)
        try {
            setLoading(true)
            const res = axios.post('/api/update-user-info', data)
            console.log('Response:', res)


            if (res.data.success) {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setLoading(false)
                dispatch(setuserLogin(res.data.user))
                toast.success(res.data.message)
                navigate('/home/profile')
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const handleUpdateImage = async () => {
        try {
            setImgLoading(true)
            const res = await axios.post('/api/upload-profile-img', {
                image: img
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            })

            if(res.data.success){
                toast.success(res.data.message)
                setImgLoading(false)
            }

            console.log('Response:', res)
            setImgLoading(false)
        } catch (error) {
            setImgLoading(false)
            console.log(error)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Edit Profile</h1>
            <div className="flex items-center justify-center flex-col">
                <div className="mr-4">
                    <img src={users.image} alt="" className="w-40 h-40 rounded-full" />
                </div>
                <div>
                    <input type="file" className="mt-2" onChange={(e) => setImg(e.target.files[0])} />
                    <button onClick={handleUpdateImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={imgLoading}>{imgLoading ? "Loading..." : "Update Image"}</button>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  items-center justify-center m-4 w-full'>
                <div className="w-[400px]">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Fullname
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('Fullname')}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Firstname
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('Firstname')}
                    />
                </div>
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Lastname
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('Lastname')}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        username
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('username')}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('email')}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('phone')}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('address')}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Role
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('role')}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Submit"}
                </button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile

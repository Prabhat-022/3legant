import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const {_id, role, Fullname, email, address, phone,username, image,  } = user
    const navigate = useNavigate()

    const handleLogout= async()=>{
        try {
            const res = await axios.post('/api/logout')
            console.log(res)
            localStorage.removeItem('user')
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="flex flex-col items-center gap-4 h-[80vh] w-full">
        <div className="flex items-center gap-2">
            <img src={image} alt="" className="w-20 h-20 rounded-full" />
            <div>
                <h1 className="font-bold"> Full Name: {Fullname}</h1>
                <p> Username: {username}</p>
            </div>
        </div>
        <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded">
            <div className="flex items-center gap-2">
                <p className="font-bold">Email:</p>
                <p className="text-gray-600">{email}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-bold">Address:</p>
                <p className="text-gray-600">{address}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-bold">Phone:</p>
                <p className="text-gray-600">{phone}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-bold">Role:</p>
                <p className="text-gray-600">{role}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-bold">User ID:</p>
                <p className="text-gray-600">{_id}</p>
            </div>
        </div>
        <div className="flex gap-2">
            <Link to="/home/edit-profile" className="bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</Link>
            <button className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700" onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Profile

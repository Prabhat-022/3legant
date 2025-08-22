// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux'
// import { updateUserProfile, updateUserProfileInfo } from '../../redux/UserSlice'

// const EditProfile = () => {
//     const [img, setImg] = useState('')
//     const [loading, setLoading] = useState(false)
//     const [imgLoading, setImgLoading] = useState(false)

//     const dispatch = useDispatch()
//     console.log('img:', img);

//     const {user} = useSelector((state) => state.user)

//     const { register, handleSubmit } = useForm({
//         defaultValues: {
//             Fullname: user.Fullname,
//             email: user.email,
//             username: user.username,
//             role: user.role,
//         },
//     })

//     const onSubmit = (data) => {
//         console.log(data)
//         setLoading(true)
//         dispatch(updateUserProfileInfo(data))
//         setLoading(false)
//     }

//     const handleUpdateImage = async () => {
//         dispatch(updateUserProfile(img))
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-4 text-center">Edit Profile</h1>
//             <div className="flex items-center justify-center flex-col">
//                 <div className="mr-4">
//                     <img src={user.image} alt="" className="w-40 h-40 rounded-full" />
//                 </div>
//                 <div>
//                     <input type="file" className="mt-2" onChange={(e) => setImg(e.target.files[0])} />
//                     <button onClick={handleUpdateImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={imgLoading}>{imgLoading ? "Loading..." : "Update Image"}</button>
//                 </div>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  items-center justify-center m-4 w-full'>
//                 <div className="w-[400px]">
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Fullname
//                         </label>
//                         <input
//                             type="text"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             {...register('Fullname')}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Firstname
//                         </label>
//                         <input
//                             type="text"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             {...register('Firstname')}
//                         />
//                     </div>
//                     <div className="">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Lastname
//                         </label>
//                         <input
//                             type="text"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             {...register('Lastname')}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             username
//                         </label>
//                         <input
//                             type="text"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             {...register('username')}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             {...register('email')}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Phone
//                         </label>
//                         <input
//                             type="text"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             {...register('phone')}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Address
//                         </label>
//                         <input
//                             type="text"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             {...register('address')}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Role
//                         </label>
//                         <select
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             {...register('role')}
//                         >
//                             <option value="user">User</option>
//                             <option value="admin">Admin</option>
//                         </select>
//                     </div>

//                     <button
//                         type="submit"
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         disabled={loading}
//                     >
//                         {loading ? "Loading..." : "Submit"}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default EditProfile


import React, { useState } from 'react'
import {
    User,
    Mail,
    Shield,
    Camera,
    Save,
    ArrowLeft,
    Upload,
    X,
    Check
} from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axios';


const EditProfile = () => {
    // Mock data - replace with actual useSelector and useForm
    const [users] = useState({
        _id: "64f5b2c8e4b0f123456789ab",
        Fullname: "Alexandra Johnson",
        Firstname: "Alexandra",
        Lastname: "Johnson",
        email: "alexandra.johnson@example.com",
        phone: "+1 (555) 123-4567",
        username: "alexandra_j",
        address: "123 Main Street, San Francisco, CA 94105",
        role: "admin",
        image: "/api/placeholder/160/160"
    })
    const { user } = useSelector((state) => state.user)

    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(false)
    const [imgLoading, setImgLoading] = useState(false)
    const [showImagePreview, setShowImagePreview] = useState(false)
    const [imagePreview, setImagePreview] = useState('')
    // const [formData, setFormData] = useState({
    //     _id: user._id || '',
    //     Fullname: user.Fullname || '',
    //     Firstname: user.Firstname || '',
    //     Lastname: user.Lastname || '',
    //     username: user.username || '',
    //     email: user.email || '',
    //     phone: user.phone || '',
    //     address: user.address[0] || '',
    //     role: user.role || 'user'
    // })
    const [formData, setFormData] = useState(users)
    const [errors, setErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState('')
    const navigate = useNavigate()



    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImg(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
                setShowImagePreview(true)
            }
            reader.readAsDataURL(file)
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.Fullname.trim()) {
            newErrors.Fullname = 'Full name is required'
        }

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required'
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (formData.phone && !/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const onSubmit = async () => {
        if (!validateForm()) return

        setLoading(true)
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log('Updated profile:', formData)

            const res = await axiosInstance.put(`/api/update-user-info`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            })
            console.log(res.data)
            setSuccessMessage('Profile updated successfully!')
            setTimeout(() => setSuccessMessage(''), 3000)
        } catch (error) {
            console.error('Error updating profile:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleUpdateImage = async () => {
        if (!img) return

        setImgLoading(true)
        try {
            // Simulate image upload
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log('Image updated:', img)
            setShowImagePreview(false)
            setSuccessMessage('Profile image updated successfully!')
            setTimeout(() => setSuccessMessage(''), 3000)
        } catch (error) {
            console.error('Error updating image:', error)
        } finally {
            setImgLoading(false)
        }
    }

    const handleGoBack = () => {
        // Replace with actual navigation
        navigate('/profile')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={handleGoBack}
                        className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Edit Profile</h1>
                        <p className="text-gray-600">Update your personal information and preferences</p>
                    </div>
                </div>

                {/* Success Message */}
                {successMessage && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl mb-6 flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600" />
                        {successMessage}
                    </div>
                )}

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Profile Image Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                <Camera className="w-5 h-5 text-blue-600" />
                                Profile Photo
                            </h3>

                            <div className="text-center">
                                <div className="relative inline-block mb-6">
                                    <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                                        <img
                                            src={showImagePreview ? imagePreview : user.image}
                                            alt="Profile"
                                            className="w-full h-full rounded-full object-cover bg-white"
                                        />
                                    </div>
                                    {showImagePreview && (
                                        <button
                                            onClick={() => {
                                                setShowImagePreview(false)
                                                setImagePreview('')
                                                setImg('')
                                            }}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <label className="block">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                            <p className="text-sm text-gray-600">Choose new photo</p>
                                            <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                                        </div>
                                    </label>

                                    {img && (
                                        <button
                                            onClick={handleUpdateImage}
                                            disabled={imgLoading}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {imgLoading ? (
                                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                            ) : (
                                                <Camera className="w-4 h-4" />
                                            )}
                                            {imgLoading ? 'Uploading...' : 'Update Photo'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                            {/* Personal Information */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                    <User className="w-5 h-5 text-blue-600" />
                                    Personal Information
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="Fullname"
                                            value={formData.Fullname}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${errors.Fullname ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.Fullname && (
                                            <p className="text-red-500 text-sm mt-1">{errors.Fullname}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Username *
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Enter your username"
                                        />
                                        {errors.username && (
                                            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="Firstname"
                                            value={formData.Firstname}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                            placeholder="Enter your first name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="Lastname"
                                            value={formData.Lastname}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-green-600" />
                                    Contact Information
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Enter your email address"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Enter your phone number"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                            placeholder="Enter your address"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Account Settings */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-purple-600" />
                                    Account Settings
                                </h3>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Role
                                    </label>
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                        <option value="moderator">Moderator</option>
                                        <option value="premium">Premium User</option>
                                    </select>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                                    <button
                                        type="button"
                                        onClick={handleGoBack}
                                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onSubmit}
                                        disabled={loading}
                                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                        ) : (
                                            <Save className="w-4 h-4" />
                                        )}
                                        {loading ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
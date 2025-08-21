
// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../../redux/UserSlice'
// import { User, Mail, Phone, MapPin, Shield, Hash,
//      Calendar, Camera, Edit3, LogOut } from 'lucide-react'

// const Profile = () => {
//     const { user } = useSelector(state => state?.user)
//     console.log('user:', user);

//     const {
//         _id, 
//         role, 
//         Fullname, 
//         email, 
//         phone, 
//         username, 
//         image, 
//         dateOfBirth, 
//         bio, 
//         joinedDate, 
//         lastLogin,
//         isVerified
//     } = user || {}

//     const {shoppingaddress, streetaddress, country, towncity, state, zipCode} = user?.address[0] || {}
    
//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const handleLogout = async() => {
//         dispatch(logout())
//         navigate('/login')
//     }

//     const formatDate = (date) => {
//         if (!date) return 'Not specified'
//         return new Date(date).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         })
//     }

//     const getRoleColor = (role) => {
//         const colors = {
//             'admin': 'bg-red-100 text-red-800 border-red-200',
//             'moderator': 'bg-purple-100 text-purple-800 border-purple-200',
//             'premium': 'bg-gold-100 text-yellow-800 border-yellow-200',
//             'user': 'bg-blue-100 text-blue-800 border-blue-200'
//         }
//         return colors[role?.toLowerCase()] || 'bg-gray-100 text-gray-800 border-gray-200'
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
//             <div className="max-w-4xl mx-auto">
//                 {/* Header Card */}
//                 <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 relative overflow-hidden">
//                     {/* Background Pattern */}
//                     <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -mr-32 -mt-32"></div>
                    
//                     <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
//                         {/* Profile Image */}
//                         <div className="relative">
//                             <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
//                                 <img 
//                                     src={image || "/api/placeholder/128/128"} 
//                                     alt="Profile" 
//                                     className="w-full h-full rounded-full object-cover bg-white"
//                                     onError={(e) => {
//                                         e.target.src = "/api/placeholder/128/128"
//                                     }}
//                                 />
//                             </div>
//                             <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
//                                 <Camera className="w-5 h-5 text-gray-600" />
//                             </div>
//                             {isVerified && (
//                                 <div className="absolute top-0 right-0 bg-green-500 rounded-full p-1">
//                                     <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                     </svg>
//                                 </div>
//                             )}
//                         </div>

//                         {/* User Info */}
//                         <div className="flex-1 text-center md:text-left">
//                             <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
//                                 <h1 className="text-3xl font-bold text-gray-800">{Fullname || 'User Name'}</h1>
//                                 <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRoleColor(role)}`}>
//                                     {role || 'Member'}
//                                 </span>
//                             </div>
//                             <p className="text-lg text-gray-600 mb-2">@{username || 'username'}</p>
//                             {bio && (
//                                 <p className="text-gray-700 max-w-2xl">{bio}</p>
//                             )}
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-3">
//                             <Link 
//                                 to="/home/edit-profile" 
//                                 className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
//                             >
//                                 <Edit3 className="w-4 h-4" />
//                                 Edit Profile
//                             </Link>
//                             <button 
//                                 onClick={handleLogout}
//                                 className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
//                             >
//                                 <LogOut className="w-4 h-4" />
//                                 Logout
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Info Grid */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                     {/* Contact Information */}
//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//                             <User className="w-5 h-5 text-blue-600" />
//                             Contact Information
//                         </h3>
//                         <div className="space-y-4">
//                             <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
//                                 <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-sm font-medium text-gray-500">Email Address</p>
//                                     <p className="text-gray-800 break-all">{email || 'No email provided'}</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
//                                 <Phone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
//                                 <div className="flex-1">
//                                     <p className="text-sm font-medium text-gray-500">Phone Number</p>
//                                     <p className="text-gray-800">{phone || 'No phone number provided'}</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
//                                 <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
//                                 <div className="flex-1">
//                                     <p className="text-sm font-medium text-gray-500">Address</p>
//                                     <p className="text-gray-800">{[shoppingaddress, streetaddress, country, towncity, state, zipCode].join(', ') || 'No address provided'}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Account Details */}
//                     <div className="bg-white rounded-2xl shadow-lg p-6">
//                         <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//                             <Shield className="w-5 h-5 text-purple-600" />
//                             Account Details
//                         </h3>
//                         <div className="space-y-4">
//                             <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
//                                 <Hash className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-sm font-medium text-gray-500">User ID</p>
//                                     <p className="text-gray-800 font-mono text-sm break-all">{_id || 'N/A'}</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
//                                 <Calendar className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
//                                 <div className="flex-1">
//                                     <p className="text-sm font-medium text-gray-500">Date of Birth</p>
//                                     <p className="text-gray-800">{formatDate(dateOfBirth)}</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
//                                 <User className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
//                                 <div className="flex-1">
//                                     <p className="text-sm font-medium text-gray-500">Member Since</p>
//                                     <p className="text-gray-800">{formatDate(joinedDate)}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Activity Stats */}
//                 <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
//                     <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                         <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
//                             <div className="text-2xl font-bold text-blue-600">Active</div>
//                             <div className="text-sm text-gray-600">Account Status</div>
//                         </div>
//                         <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
//                             <div className="text-2xl font-bold text-green-600">{formatDate(lastLogin)}</div>
//                             <div className="text-sm text-gray-600">Last Login</div>
//                         </div>
//                         <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
//                             <div className="text-2xl font-bold text-purple-600">{isVerified ? 'Verified' : 'Pending'}</div>
//                             <div className="text-sm text-gray-600">Verification Status</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Profile

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/UserSlice'
import { useNavigate } from 'react-router-dom'
import { 
    User, Mail, Phone, MapPin, Shield, Hash, Calendar, Camera, Edit3, LogOut,
    Home, ShoppingCart, Heart, Package, Star, Settings, HelpCircle, 
    Bell, CreditCard, Truck, History, Gift, Menu, X, ChevronRight
} from 'lucide-react'

const Profile = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
        const { user } = useSelector(state => state?.user)
    // Mock user data for demonstration
    // const user = {
    //     _id: '507f1f77bcf86cd799439011',
    //     role: 'user',
    //     Fullname: 'John Doe',
    //     email: 'john.doe@example.com',
    //     phone: '+1-234-567-8900',
    //     username: 'johndoe',
    //     image: null,
    //     dateOfBirth: '1990-05-15',
    //     bio: 'Software developer and tech enthusiast',
    //     joinedDate: '2023-01-15',
    //     lastLogin: '2025-08-20',
    //     isVerified: true,
    //     address: [{
    //         shoppingaddress: '123 Main St',
    //         streetaddress: 'Apt 4B',
    //         country: 'USA',
    //         towncity: 'New York',
    //         state: 'NY',
    //         zipCode: '10001'
    //     }]
    // }

    const {
        _id, 
        role, 
        Fullname, 
        email, 
        phone, 
        username, 
        image, 
        dateOfBirth, 
        bio, 
        joinedDate, 
        lastLogin,
        isVerified
    } = user || {}

    const {shoppingaddress, streetaddress, country, towncity, state, zipCode} = user?.address[0] || {}
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async() => {
        dispatch(logout())
        navigate('/login')
    }

    const formatDate = (date) => {
        if (!date) return 'Not specified'
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const getRoleColor = (role) => {
        const colors = {
            'admin': 'bg-red-100 text-red-800 border-red-200',
            'moderator': 'bg-purple-100 text-purple-800 border-purple-200',
            'premium': 'bg-gold-100 text-yellow-800 border-yellow-200',
            'user': 'bg-blue-100 text-blue-800 border-blue-200'
        }
        return colors[role?.toLowerCase()] || 'bg-gray-100 text-gray-800 border-gray-200'
    }

    const menuItems = [
        { icon: Home, label: 'Home', path: '/home', active: false },
        { icon: Package, label: 'Orders', path: '/orders', active: false },
        { icon: Heart, label: 'Wishlist', path: '/wishlist', active: false },
        { icon: ShoppingCart, label: 'Cart', path: '/cart', active: false },
        { icon: User, label: 'Profile', path: '/profile', active: true },
        { icon: Star, label: 'Reviews', path: '/reviews', active: false },
        { icon: History, label: 'Order History', path: '/order-history', active: false },
        { icon: Truck, label: 'Track Orders', path: '/track-orders', active: false },
        { icon: CreditCard, label: 'Payment Methods', path: '/payment-methods', active: false },
        { icon: MapPin, label: 'Addresses', path: '/addresses', active: false },
        { icon: Gift, label: 'Rewards & Offers', path: '/rewards', active: false },
        { icon: Bell, label: 'Notifications', path: '/notifications', active: false },
        { icon: Settings, label: 'Settings', path: '/settings', active: false },
        { icon: HelpCircle, label: 'Help & Support', path: '/help', active: false },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex">
            {/* Mobile Menu Button */}
            <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-200"
            >
                <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Sidebar Overlay for Mobile */}
            {sidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed lg:static lg:ml-24 lg:mb-10 inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}>
                {/* Sidebar Header */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">Dashboard</h2>
                                <p className="text-sm text-gray-600">Welcome back!</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* User Info in Sidebar */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-0.5">
                            <img 
                                src={image || "/api/placeholder/48/48"} 
                                alt="Profile" 
                                className="w-full h-full rounded-full object-cover bg-white"
                                onError={(e) => {
                                    e.target.src = "/api/placeholder/48/48"
                                }}
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 truncate">{Fullname || 'User Name'}</p>
                            <p className="text-xs text-gray-600 truncate">@{username || 'username'}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 p-4">
                    <div className="space-y-2">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.path}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setSidebarOpen(false)
                                    // In real app: navigate to item.path
                                    navigate(item.path)
                                    console.log('Navigate to:', item.path)
                                }}
                                className={`flex items-center justify-between w-full px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                                    item.active 
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className={`w-5 h-5 ${
                                        item.active ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                                    }`} />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                <ChevronRight className={`w-4 h-4 transition-transform ${
                                    item.active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                                } group-hover:translate-x-1`} />
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Logout Button in Sidebar */}
                <div className="p-4 border-t border-gray-200">
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 lg:ml-0 lg:mr-14 p-4 lg:p-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 mb-6 relative overflow-hidden mt-16 lg:mt-0">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -mr-32 -mt-32"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            {/* Profile Image */}
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                                    <img 
                                        src={image || "/api/placeholder/128/128"} 
                                        alt="Profile" 
                                        className="w-full h-full rounded-full object-cover bg-white"
                                        onError={(e) => {
                                            e.target.src = "/api/placeholder/128/128"
                                        }}
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                                    <Camera className="w-5 h-5 text-gray-600" />
                                </div>
                                {isVerified && (
                                    <div className="absolute top-0 right-0 bg-green-500 rounded-full p-1">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* User Info */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-bold text-gray-800">{Fullname || 'User Name'}</h1>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRoleColor(role)}`}>
                                        {role || 'Member'}
                                    </span>
                                </div>
                                <p className="text-lg text-gray-600 mb-2">@{username || 'username'}</p>
                                {bio && (
                                    <p className="text-gray-700 max-w-2xl">{bio}</p>
                                )}
                            </div>

                            {/* Action Button */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a 
                                    href="/home/edit-profile"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        console.log('Navigate to edit profile')
                                    }}
                                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    <Edit3 className="w-4 h-4" />
                                    Edit Profile
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Contact Information */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-600" />
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                                    <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-500">Email Address</p>
                                        <p className="text-gray-800 break-all">{email || 'No email provided'}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                                    <Phone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500">Phone Number</p>
                                        <p className="text-gray-800">{phone || 'No phone number provided'}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                                    <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500">Address</p>
                                        <p className="text-gray-800">{[shoppingaddress, streetaddress, country, towncity, state, zipCode].filter(Boolean).join(', ') || 'No address provided'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Details */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-purple-600" />
                                Account Details
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                                    <Hash className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-500">User ID</p>
                                        <p className="text-gray-800 font-mono text-sm break-all">{_id || 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                                    <Calendar className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                                        <p className="text-gray-800">{formatDate(dateOfBirth)}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                                    <User className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500">Member Since</p>
                                        <p className="text-gray-800">{formatDate(joinedDate)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Activity Stats */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                                <div className="text-2xl font-bold text-blue-600">Active</div>
                                <div className="text-sm text-gray-600">Account Status</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                                <div className="text-2xl font-bold text-green-600">{formatDate(lastLogin)}</div>
                                <div className="text-sm text-gray-600">Last Login</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                                <div className="text-2xl font-bold text-purple-600">{isVerified ? 'Verified' : 'Pending'}</div>
                                <div className="text-sm text-gray-600">Verification Status</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

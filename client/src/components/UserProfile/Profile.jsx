
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/UserSlice'
import { User, Mail, Phone, MapPin, Shield, Hash, Calendar, Camera, Edit3, LogOut } from 'lucide-react'

const Profile = () => {
    const { user } = useSelector(state => state?.user)

    const {
        _id, 
        role, 
        Fullname, 
        email, 
        phone, 
        username, 
        image, 
        address, 
        dateOfBirth, 
        bio, 
        joinedDate, 
        lastLogin,
        isVerified
    } = user || {}
    
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 relative overflow-hidden">
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

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link 
                                to="/home/edit-profile" 
                                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                <Edit3 className="w-4 h-4" />
                                Edit Profile
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
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
                                    <p className="text-gray-800">{address || 'No address provided'}</p>
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
    )
}

export default Profile

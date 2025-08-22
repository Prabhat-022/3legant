// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import NavebarAdmin from './NavebarAdmin'
// import { Link } from 'react-router-dom'
// import { IoSearchOutline } from "react-icons/io5";
// import admin from '../../assets/admin.jpg'
// import { FaAngleDown } from "react-icons/fa";
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import {
//     LayoutDashboard,
//     Package,
//     Heart,
//     Mail,
//     ClipboardList,
//     Archive,
//     Settings,
//     LogOut,
//     User,
//     ChevronRight
// } from 'lucide-react'

// const LayoutAdmin = () => {
//     const loginUser = useSelector(state => state.user?.loginuser)
//     const [showDropdown, setShowDropdown] = useState(false)

//     const toggleDropdown = (e) => {
//         e.preventDefault();
//         setShowDropdown(!showDropdown)
//     }

//     const menuItems = [
//         { icon: LayoutDashboard, label: 'Dashboard', path: 'admin-dashboard' },
//         { icon: Package, label: 'Products', path: 'admin-product' },
//         { icon: Heart, label: 'Favorites', path: '#' },
//         { icon: Mail, label: 'Inbox', path: '#' },
//         { icon: ClipboardList, label: 'Order Lists', path: '#' },
//         { icon: Archive, label: 'Product Stock', path: '/product-stock' }
//     ]

//     const bottomMenuItems = [
//         { icon: Settings, label: 'Settings', path: '#' },
//         { icon: LogOut, label: 'Logout', path: '#' }
//     ]

//     return (
//         <>
//             {/* this is the header section */}
//             <div className="xl:mx-24 md:mx-24 shadow">
//                 <div className="flex justify-between items-center m-2 px-4">

//                     <div className="">
//                         <Link to={"/home"} className='text-2xl font-bold'>3legant</Link>
//                     </div>

//                     <div className="flex gap-10 border-2 rounded-full p-2 items-center justify-center bg-[#f1f1f1] hidden ">
//                         <IoSearchOutline />
//                         <input type="text" className='bg-transparent outline-none ' placeholder='Search' />
//                     </div>

//                     <div className=" flex gap-2 items-center justify-between mx-2">
//                         <Link to={"/home/profile"}>
//                             <div className="flex gap-2 items-center justify-between mx-2">
//                                 <img src={admin} alt="" className='w-[45px] h-[45px] rounded-full' />

//                                 <div className="">
//                                     <h1>{loginUser?.fullName || "Mony Roy"}</h1>
//                                     <p>Admin</p>
//                                 </div>
//                             </div>
//                         </Link>
//                         <FaAngleDown size={20} onClick={(e) => { toggleDropdown(e) }} />

//                     </div>


//                 </div>
//                 {
//                     showDropdown && window.innerWidth < 768 && (
//                         <div className="absolute top-10 right-2 bg-white shadow-lg rounded-md">
//                             <div className="p-2">
//                                 <NavebarAdmin />
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>


//             {/* this is the left menu */}
//             <div className="w-1/6 lg:mx-24 bg-gradient-to-b from-gray-50 to-gray-100 h-screen flex flex-col justify-between border-r border-gray-200 shadow-2xl" >
//                 {/* Header Section */}
//                 <div className="p-6 border-b border-gray-200">
//                     <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                             <User className="w-6 h-6 text-white" />
//                         </div>
//                         <div>
//                             <h2 className="text-lg font-bold text-gray-800">Admin Panel</h2>
//                             <p className="text-xs text-gray-600">Dashboard</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Main Navigation */}
//                 <div className="flex-1 px-4 py-6">
//                     <nav className="space-y-2">
//                         {menuItems.map((item, index) => (
//                             <a
//                                 key={index}
//                                 href={item.path}
//                                 onClick={(e) => {
//                                     e.preventDefault()
//                                     console.log('Navigate to:', item.path)
//                                 }}
//                                 className="group flex items-center justify-between w-full px-4 py-3 text-left rounded-xl font-medium transition-all duration-200 text-gray-700 hover:bg-gray-800 hover:text-white hover:shadow-lg hover:scale-105 transform"
//                             >
//                                 <div className="flex items-center gap-3">
//                                     <item.icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
//                                     <span className="text-sm">{item.label}</span>
//                                 </div>
//                                 <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
//                             </a>
//                         ))}
//                     </nav>
//                 </div>

//                 {/* Divider */}
//                 <div className="px-4">
//                     <hr className="border-gray-300" />
//                 </div>

//                 {/* Bottom Navigation */}
//                 <div className="p-4 space-y-2">
//                     {bottomMenuItems.map((item, index) => (
//                         <button
//                             key={index}
//                             onClick={() => console.log('Clicked:', item.label)}
//                             className={`group flex items-center justify-between w-full px-4 py-3 text-left rounded-xl font-medium transition-all duration-200 ${item.label === 'Logout'
//                                     ? 'text-red-600 hover:bg-red-50 hover:text-red-700'
//                                     : 'text-gray-700 hover:bg-gray-800 hover:text-white'
//                                 } hover:shadow-lg hover:scale-105 transform`}
//                         >
//                             <div className="flex items-center gap-3">
//                                 <item.icon className={`w-5 h-5 transition-colors ${item.label === 'Logout'
//                                         ? 'text-red-500 group-hover:text-red-600'
//                                         : 'text-gray-500 group-hover:text-white'
//                                     }`} />
//                                 <span className="text-sm">{item.label}</span>
//                             </div>
//                             <ChevronRight className={`w-4 h-4 transition-all ${item.label === 'Logout'
//                                     ? 'text-red-400 group-hover:text-red-600'
//                                     : 'text-gray-400 group-hover:text-white'
//                                 } group-hover:translate-x-1`} />
//                         </button>
//                     ))}
//                 </div>

//                 {/* Footer */}
//                 <div className="p-4 border-t border-gray-200 bg-gray-50">
//                     <div className="text-center">
//                         <p className="text-xs text-gray-500">Admin Panel v2.0</p>
//                         <p className="text-xs text-gray-400">© 2025 Company</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="xl:ml-48 xl:mt-16 xl:p-4 xl:h-[calc(100vh-4rem)] xl:overflow-y-auto md:ml-24 md:mt-16 md:p-4 md:h-[calc(100vh-4rem)] md:overflow-y-auto">
//                 <Outlet />
//             </div>
//         </>
//     )
// }

// export default LayoutAdmin

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { logout } from '../../redux/UserSlice';
import { Link } from 'react-router-dom';
import {
  Search,
  Bell,
  MessageSquare,
  Settings,
  ChevronDown,
  User,
  LogOut,
  UserCircle,
  Menu,
  X
} from 'lucide-react';
import {
  LayoutDashboard,
  Package,
  Heart,
  Mail,
  ClipboardList,
  Archive,
  ChevronRight
} from 'lucide-react'


const LayoutAdmin = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Mock user data - replace with your actual user state
  const loginUser = {
    fullName: "Mony Roy",
    email: "mony.roy@admin.com",
    avatar: "/api/placeholder/40/40" // Replace with actual admin image
  };

  const notifications = [
    { id: 1, title: "New order received", time: "2 min ago", unread: true },
    { id: 2, title: "Product stock low", time: "15 min ago", unread: true },
    { id: 3, title: "User feedback received", time: "1 hour ago", unread: false },
  ];

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/admin-dashboard' },
    { icon: Package, label: 'Products', path: '/admin/admin-product' },
    { icon: Heart, label: 'Favorites', path: '#' },
    { icon: Mail, label: 'Inbox', path: '/admin/admin-chat' },
    { icon: ClipboardList, label: 'Order Lists', path: '/admin/admin-order' },
    { icon: Archive, label: 'Product Stock', path: '/product-stock' }
  ]



  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleNavigation = (path) => {
    console.log(`Navigate to: ${path}`);
    navigate(path);
    // Replace with your actual navigation logic
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    dispatch(logout())
    navigate('/login')
    // Replace with your actual logout logic
  };

  const bottomMenuItems = [
    { icon: Settings, label: 'Settings', path: '#' },
    { icon: LogOut, label: 'Logout', path: '/login', },
  ]
  return (

    <div className="relative lg:mx-24 md:mx-24 ">
      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="xl:mx-10 md:mx-10mx-4">
          <div className="flex items-center justify-between h-16 px-4">

            {/* Left Section - Logo & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Logo */}
              <button
                onClick={() => handleNavigation('/home')}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                3legant
              </button>

              {/* Breadcrumb - Hidden on mobile */}
              <div className="hidden md:flex items-center text-sm text-gray-500 ml-4">
                <span>Admin</span>
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-medium">Dashboard</span>
              </div>
            </div>

            {/* Center Section - Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className={`relative w-full transition-all duration-200 ${searchFocused ? 'transform scale-105' : ''
                }`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`h-4 w-4 transition-colors ${searchFocused ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                </div>
                <input
                  type="text"
                  placeholder="Search products, orders, customers..."
                  className={`w-full pl-10 pr-4 py-2 rounded-full border-2 transition-all duration-200 bg-gray-50 focus:bg-white focus:outline-none ${searchFocused
                    ? 'border-blue-500 shadow-lg shadow-blue-100'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
            </div>

            {/* Right Section - Actions & Profile */}
            <div className="flex items-center gap-2">

              {/* Action Buttons - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-2">
                {/* Messages */}
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative group">
                  <MessageSquare size={20} className="text-gray-600 group-hover:text-blue-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
                </button>

                {/* Notifications */}
                <div className="relative">
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative group">
                    <Bell size={20} className="text-gray-600 group-hover:text-blue-600" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                      2
                    </span>
                  </button>
                </div>

                {/* Settings */}
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors group">
                  <Settings size={20} className="text-gray-600 group-hover:text-blue-600" />
                </button>
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <User size={16} className="text-white" />
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-semibold text-gray-800">
                        {loginUser?.fullName || "Mony Roy"}
                      </p>
                      <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                          <User size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{loginUser?.fullName || "Mony Roy"}</p>
                          <p className="text-sm text-gray-500">{loginUser?.email || "admin@3legant.com"}</p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <button
                        onClick={() => {
                          handleNavigation('/home/profile');
                          setShowDropdown(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
                      >
                        <UserCircle size={16} />
                        View Profile
                      </button>
                      <button
                        onClick={() => {
                          handleNavigation('/settings');
                          setShowDropdown(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
                      >
                        <Settings size={16} />
                        Account Settings
                      </button>
                      <hr className="my-2 border-gray-100" />
                      <button
                        className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                        onClick={() => {
                          setShowDropdown(false);
                          handleLogout();
                        }}
                      >
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex w-full h-screen">

        {/* Left Sidebar */}
        <div className="w-1/6 bg-gradient-to-b from-gray-50 to-gray-100 h-screen flex flex-col justify-between border-r border-gray-200 shadow-2xl hidden lg:block md:block">
          {/* Header Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="cursor-pointer">
                <Link to="/admin">
                <h2 className="text-lg font-bold text-gray-800">Admin Panel</h2>
                <p className="text-xs text-gray-600">Dashboard</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex-1 px-4 py-6">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(item.path)
                    console.log('Navigate to:', item.path)
                  }}
                  className="group flex items-center justify-between w-full px-4 py-3 text-left rounded-xl font-medium transition-all duration-200 text-gray-700 hover:bg-gray-800 hover:text-white hover:shadow-lg hover:scale-105 transform"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="px-4">
            <hr className="border-gray-300" />
          </div>

          {/* Bottom Navigation */}
          <div className="p-4 space-y-2">
            {bottomMenuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.label === 'Logout') {
                    handleLogout()
                  } else {
                    navigate(item.path)
                  }
                }}
                className={`group flex items-center justify-between w-full px-4 py-3 text-left rounded-xl font-medium transition-all duration-200 ${item.label === 'Logout'
                  ? 'text-red-600 hover:bg-red-50 hover:text-red-700'
                  : 'text-gray-700 hover:bg-gray-800 hover:text-white'
                  } hover:shadow-lg hover:scale-105 transform`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 transition-colors ${item.label === 'Logout'
                    ? 'text-red-500 group-hover:text-red-600'
                    : 'text-gray-500 group-hover:text-white'
                    }`} />
                  <span className="text-sm">{item.label}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-all ${item.label === 'Logout'
                  ? 'text-red-400 group-hover:text-red-600'
                  : 'text-gray-400 group-hover:text-white'
                  } group-hover:translate-x-1`} />
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="text-center">
              <p className="text-xs text-gray-500">Admin Panel v2.0</p>
              <p className="text-xs text-gray-400">© 2025 Company</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 h-screen overflow-auto">
          <Outlet />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleMobileMenu}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={toggleMobileMenu} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Mobile Navigation Items */}
              <nav className="space-y-2">
                {/* Main Navigation */}
                <div className="flex-1 px-4 py-6">
                  <nav className="space-y-2">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault()
                          navigate(item.path)
                          console.log('Navigate to:', item.path)
                        }}
                        className="group flex items-center justify-between w-full px-4 py-3 text-left rounded-xl font-medium transition-all duration-200 text-gray-700 hover:bg-gray-800 hover:text-white hover:shadow-lg hover:scale-105 transform"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                          <span className="text-sm">{item.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Divider */}
                <div className="px-4">
                  <hr className="border-gray-300" />
                </div>

                {/* Bottom Navigation */}
                <div className="p-4 space-y-2">
                  {bottomMenuItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        navigate(item.path)
                        console.log('Clicked:', item.label)
                      }}
                      className={`group flex items-center justify-between w-full px-4 py-3 text-left rounded-xl font-medium transition-all duration-200 ${item.label === 'Logout'
                        ? 'text-red-600 hover:bg-red-50 hover:text-red-700'
                        : 'text-gray-700 hover:bg-gray-800 hover:text-white'
                        } hover:shadow-lg hover:scale-105 transform`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 transition-colors ${item.label === 'Logout'
                          ? 'text-red-500 group-hover:text-red-600'
                          : 'text-gray-500 group-hover:text-white'
                          }`} />
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-all ${item.label === 'Logout'
                        ? 'text-red-400 group-hover:text-red-600'
                        : 'text-gray-400 group-hover:text-white'
                        } group-hover:translate-x-1`} />
                    </button>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Admin Panel v2.0</p>
                    <p className="text-xs text-gray-400">© 2025 Company</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for dropdown */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>

  );
};

export default LayoutAdmin;
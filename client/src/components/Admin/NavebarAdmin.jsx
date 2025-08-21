
// import { Link } from "react-router-dom"

// const NavebarAdmin = () => {
//     return (
//         <>
//             {/* <div className="w-1/4 bg-[#f1f1f1] h-[100vh] flex flex-col justify-between "> */}

//             <div className="w-1/6 bg-[#f1f1f1] h-[100vh] flex flex-col justify-between ">

//                 <div className="flex flex-col gap-5 p-4 font-bold ">
//                     <button className="hover:bg-[#070808] hover:text-white  p-2 rounded"><Link to={'admin-dashboard'}>Dashboard</Link></button>
//                     <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
//                         <Link to={'admin-product'}>Products</Link>
//                     </button>
//                     <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
//                         <Link>Favorites</Link>
//                     </button>

//                     <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">

//                         <Link>Inbox</Link>
//                     </button>

//                     <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
//                         <Link>Order Lists</Link>

//                     </button>
//                     <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">

//                         <Link to={'/product-stock'}>Product Stock</Link>
//                     </button>
//                 </div>

//                 <hr />

//                 <div className="flex flex-col gap-5 p-4 m-4 font-bold ">
//                     <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
//                         Settings
//                     </button>
//                     <button className="hover:bg-[#070808] hover:text-white  p-2 rounded">
//                         <Link>Logout</Link>
//                     </button>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default NavebarAdmin


import React from 'react'
import { 
    LayoutDashboard, 
    Package, 
    Heart, 
    Mail, 
    ClipboardList, 
    Archive, 
    Settings, 
    LogOut,
    User,
    ChevronRight
} from 'lucide-react'

const NavebarAdmin = () => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: 'admin-dashboard' },
        { icon: Package, label: 'Products', path: 'admin-product' },
        { icon: Heart, label: 'Favorites', path: '#' },
        { icon: Mail, label: 'Inbox', path: '#' },
        { icon: ClipboardList, label: 'Order Lists', path: '#' },
        { icon: Archive, label: 'Product Stock', path: '/product-stock' }
    ]

    const bottomMenuItems = [
        { icon: Settings, label: 'Settings', path: '#' },
        { icon: LogOut, label: 'Logout', path: '#' }
    ]

    return (
        <div className="w-1/6 bg-gradient-to-b from-gray-50 to-gray-100 h-screen flex flex-col justify-between shadow-xl border-r border-gray-200 shadow-2xl" >
            {/* Header Section */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">Admin Panel</h2>
                        <p className="text-xs text-gray-600">Dashboard</p>
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
                        onClick={() => console.log('Clicked:', item.label)}
                        className={`group flex items-center justify-between w-full px-4 py-3 text-left rounded-xl font-medium transition-all duration-200 ${
                            item.label === 'Logout' 
                                ? 'text-red-600 hover:bg-red-50 hover:text-red-700' 
                                : 'text-gray-700 hover:bg-gray-800 hover:text-white'
                        } hover:shadow-lg hover:scale-105 transform`}
                    >
                        <div className="flex items-center gap-3">
                            <item.icon className={`w-5 h-5 transition-colors ${
                                item.label === 'Logout' 
                                    ? 'text-red-500 group-hover:text-red-600' 
                                    : 'text-gray-500 group-hover:text-white'
                            }`} />
                            <span className="text-sm">{item.label}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-all ${
                            item.label === 'Logout' 
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
    )
}

export default NavebarAdmin
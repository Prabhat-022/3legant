// import React from "react";

// export default function Order() {
//   return (
//     <div className="p-6 space-y-6">
//       {/* Dashboard Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//         <StatCard title="Total Orders" value="152" />
//         <StatCard title="Pending Orders" value="25" />
//         <StatCard title="Delivered Orders" value="110" />
//         <StatCard title="Cancelled Orders" value="17" />
//         <StatCard title="Products in Stock" value="320" />
//         <StatCard title="Out of Stock" value="8" />
//       </div>

//       {/* Orders Table */}
//       <div className="bg-white shadow rounded-xl p-4">
//         <h2 className="text-xl font-semibold mb-4">Orders</h2>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2">Order ID</th>
//               <th className="p-2">Customer</th>
//               <th className="p-2">Products</th>
//               <th className="p-2">Total</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Payment</th>
//               <th className="p-2">Delivery Date</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b">
//               <td className="p-2">#ORD123</td>
//               <td className="p-2">John Doe</td>
//               <td className="p-2">iPhone 15 (x1), AirPods (x2)</td>
//               <td className="p-2">₹95,000</td>
//               <td className="p-2 text-yellow-500">Pending</td>
//               <td className="p-2 text-green-600">Paid</td>
//               <td className="p-2">2025-08-25</td>
//               <td className="p-2">
//                 <button className="bg-blue-500 text-white px-3 py-1 rounded">
//                   Update
//                 </button>
//               </td>
//             </tr>
//             {/* Repeat rows */}
//           </tbody>
//         </table>
//       </div>

//       {/* Product Stock Section */}
//       <div className="bg-white shadow rounded-xl p-4">
//         <h2 className="text-xl font-semibold mb-4">Product Stock</h2>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2">Product</th>
//               <th className="p-2">Category</th>
//               <th className="p-2">Stock</th>
//               <th className="p-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b">
//               <td className="p-2">iPhone 15</td>
//               <td className="p-2">Mobiles</td>
//               <td className="p-2">25</td>
//               <td className="p-2 text-green-600">In Stock</td>
//             </tr>
//             <tr className="border-b">
//               <td className="p-2">MacBook Pro</td>
//               <td className="p-2">Laptops</td>
//               <td className="p-2">0</td>
//               <td className="p-2 text-red-600">Out of Stock</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// function StatCard({ title, value }) {
//   return (
//     <div className="bg-white shadow rounded-xl p-4 text-center">
//       <h3 className="text-gray-500 text-sm">{title}</h3>
//       <p className="text-2xl font-bold">{value}</p>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { FiPackage, FiShoppingCart, FiCheckCircle, FiClock, FiAlertCircle, FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';

const Order = () => {
  // Sample data - in a real app, this would come from an API
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    lowStockProducts: 0
  });

  // Sample product data
  const products = [
    { id: 1, name: 'Wireless Headphones', stock: 15, price: 89.99 },
    { id: 2, name: 'Smart Watch', stock: 8, price: 199.99 },
    { id: 3, name: 'Bluetooth Speaker', stock: 22, price: 49.99 },
    { id: 4, name: 'Phone Case', stock: 3, price: 19.99 },
    { id: 5, name: 'USB-C Cable', stock: 45, price: 12.99 },
    { id: 6, name: 'Wireless Charger', stock: 18, price: 29.99 },
  ];

  // Initialize orders data
  useEffect(() => {
    const sampleOrders = [
      { id: 1001, customer: 'John Smith', date: '2023-04-15', status: 'completed', total: 129.98, items: [{ productId: 1, quantity: 1 }, { productId: 5, quantity: 2 }] },
      { id: 1002, customer: 'Emma Johnson', date: '2023-04-16', status: 'pending', total: 199.99, items: [{ productId: 2, quantity: 1 }] },
      { id: 1003, customer: 'Michael Brown', date: '2023-04-16', status: 'processing', total: 89.99, items: [{ productId: 1, quantity: 1 }] },
      { id: 1004, customer: 'Sarah Davis', date: '2023-04-17', status: 'pending', total: 69.98, items: [{ productId: 6, quantity: 1 }, { productId: 5, quantity: 3 }] },
      { id: 1005, customer: 'David Wilson', date: '2023-04-17', status: 'completed', total: 249.98, items: [{ productId: 3, quantity: 2 }, { productId: 4, quantity: 1 }] },
      { id: 1006, customer: 'Jennifer Taylor', date: '2023-04-18', status: 'processing', total: 29.99, items: [{ productId: 6, quantity: 1 }] },
    ];

    setOrders(sampleOrders);
    setFilteredOrders(sampleOrders);
    
    // Calculate stats
    const totalOrders = sampleOrders.length;
    const pendingOrders = sampleOrders.filter(order => order.status === 'pending').length;
    const completedOrders = sampleOrders.filter(order => order.status === 'completed').length;
    const lowStockProducts = products.filter(product => product.stock < 5).length;
    
    setStats({
      totalOrders,
      pendingOrders,
      completedOrders,
      lowStockProducts
    });
  }, []);

  // Filter orders based on search and filters
  useEffect(() => {
    let result = orders;
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(order => order.status === statusFilter);
    }
    
    // Apply date filter (simplified for demo)
    if (dateFilter === 'today') {
      result = result.filter(order => order.date === '2023-04-18');
    } else if (dateFilter === 'week') {
      result = result.filter(order => {
        const orderDate = new Date(order.date);
        return orderDate > new Date('2023-04-11');
      });
    }
    
    // Apply search term
    if (searchTerm) {
      result = result.filter(order => 
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toString().includes(searchTerm)
      );
    }
    
    setFilteredOrders(result);
  }, [orders, statusFilter, dateFilter, searchTerm]);

  // Get product name by ID
  const getProductName = (id) => {
    const product = products.find(p => p.id === id);
    return product ? product.name : 'Unknown Product';
  };

  // Get status badge style
  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Order Management Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <FiShoppingCart className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-900">Total Orders</h2>
                <p className="text-2xl font-bold">{stats.totalOrders}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <FiClock className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-900">Pending Orders</h2>
                <p className="text-2xl font-bold">{stats.pendingOrders}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <FiCheckCircle className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-900">Completed Orders</h2>
                <p className="text-2xl font-bold">{stats.completedOrders}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 text-red-600">
                <FiAlertCircle className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-900">Low Stock Items</h2>
                <p className="text-2xl font-bold">{stats.lowStockProducts}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Order List */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
              </div>
              
              {/* Filters and Search */}
              <div className="px-6 py-4 bg-gray-50 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search orders or customers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2">
                  <select
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                  </select>
                  
                  <select
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  >
                    <option value="all">All Dates</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                  </select>
                </div>
              </div>
              
              {/* Orders Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                          <button className="text-green-600 hover:text-green-900">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {filteredOrders.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No orders found matching your criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Stock Overview */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Stock Overview</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {products.map((product) => (
                  <div key={product.id} className="px-6 py-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${product.stock < 5 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {product.stock} in stock
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${product.stock < 5 ? 'bg-red-600' : 'bg-green-600'}`}
                          style={{ width: `${Math.min(100, (product.stock / 50) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Quick Actions</h2>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-200">
                  New Order
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-200">
                  Add Product
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-200">
                  Generate Report
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-200">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

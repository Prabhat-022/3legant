import React, { useState } from 'react';
import { Users, Package, ShoppingCart, TrendingUp, AlertTriangle, Eye, Edit, Trash2, Plus } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = {
    totalProducts: 1247,
    totalUsers: 8432,
    totalOrders: 3621,
    lowStockItems: 23,
    revenue: 142850,
    pendingOrders: 45
  };

  const products = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', stock: 45, price: 99.99, status: 'Active' },
    { id: 2, name: 'Running Shoes', category: 'Sports', stock: 3, price: 129.99, status: 'Low Stock' },
    { id: 3, name: 'Coffee Maker', category: 'Appliances', stock: 0, price: 79.99, status: 'Out of Stock' },
    { id: 4, name: 'Smartphone Case', category: 'Accessories', stock: 156, price: 24.99, status: 'Active' },
    { id: 5, name: 'Desk Lamp', category: 'Furniture', stock: 12, price: 45.99, status: 'Active' }
  ];

  const orders = [
    { id: 1001, customer: 'John Smith', total: 299.97, status: 'Pending', date: '2024-08-21' },
    { id: 1002, customer: 'Sarah Johnson', total: 149.98, status: 'Shipped', date: '2024-08-20' },
    { id: 1003, customer: 'Mike Davis', total: 79.99, status: 'Delivered', date: '2024-08-19' },
    { id: 1004, customer: 'Emily Brown', total: 199.95, status: 'Processing', date: '2024-08-21' }
  ];

  const users = [
    { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Customer', joinDate: '2024-01-15', orders: 12 },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Customer', joinDate: '2024-02-20', orders: 8 },
    { id: 3, name: 'Mike Davis', email: 'mike@example.com', role: 'Admin', joinDate: '2023-12-01', orders: 0 },
    { id: 4, name: 'Emily Brown', email: 'emily@example.com', role: 'Customer', joinDate: '2024-03-10', orders: 15 }
  ];

  const StatCard = ({ icon: Icon, title, value, subtitle, color = 'blue' }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
          {subtitle && <p className="text-gray-400 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 bg-${color}-100 rounded-full`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 font-medium rounded-lg transition-colors ${active
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, Administrator</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Package}
            title="Total Products"
            value={stats.totalProducts}
            subtitle="Active listings"
            color="blue"
          />
          <StatCard
            icon={Users}
            title="Total Users"
            value={stats.totalUsers}
            subtitle="Registered accounts"
            color="green"
          />
          <StatCard
            icon={ShoppingCart}
            title="Total Orders"
            value={stats.totalOrders}
            subtitle="All time orders"
            color="purple"
          />
          <StatCard
            icon={AlertTriangle}
            title="Low Stock Items"
            value={stats.lowStockItems}
            subtitle="Need restocking"
            color="red"
          />
        </div>

        {/* Revenue & Pending Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Revenue Overview</h3>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-green-600">${stats.revenue.toLocaleString()}</p>
            <p className="text-gray-500 text-sm">Total revenue this month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Pending Orders</h3>
              <ShoppingCart className="h-5 w-5 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-orange-600">{stats.pendingOrders}</p>
            <p className="text-gray-500 text-sm">Require immediate attention</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-6 bg-white p-2 rounded-lg shadow-md">
          <TabButton id="overview" label="Overview" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="products" label="Products" active={activeTab === 'products'} onClick={setActiveTab} />
          <TabButton id="orders" label="Orders" active={activeTab === 'orders'} onClick={setActiveTab} />
          <TabButton id="users" label="Users" active={activeTab === 'users'} onClick={setActiveTab} />
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">System Overview</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm">New order #1004 received</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Product "Wireless Headphones" updated</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-sm">Low stock alert for "Running Shoes"</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Add New Product
                  </button>
                  <button className="w-full p-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                    Process Pending Orders
                  </button>
                  <button className="w-full p-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Product Management</h3>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Stock</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{product.name}</td>
                      <td className="py-3 px-4">{product.category}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-sm ${product.stock === 0 ? 'bg-red-100 text-red-800' :
                            product.stock <= 5 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                          }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="py-3 px-4">${product.price}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-sm ${product.status === 'Active' ? 'bg-green-100 text-green-800' :
                            product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                          }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-green-600 hover:bg-green-100 rounded">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:bg-red-100 rounded">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Order Management</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono">#{order.id}</td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4 font-semibold">${order.total}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-sm ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                          }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">{order.date}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-green-600 hover:bg-green-100 rounded">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">User Management</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Role</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Join Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Orders</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{user.name}</td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-sm ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">{user.joinDate}</td>
                      <td className="py-3 px-4">{user.orders}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-green-600 hover:bg-green-100 rounded">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:bg-red-100 rounded">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
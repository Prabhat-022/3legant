import React from 'react';
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Package,
  TrendingUp,
  TrendingDown,
  Truck,
  AlertTriangle,
  Star,
  Eye,
  BarChart3,
  PieChart
} from 'lucide-react';

export default function Dashboard() {
  // Sample data
  const mainStats = [
    { 
      title: 'Total Earnings', 
      value: '$124,563', 
      change: '+15.3%', 
      trend: 'up', 
      icon: DollarSign,
      color: 'bg-green-500'
    },
    { 
      title: 'Total Users', 
      value: '8,549', 
      change: '+8.7%', 
      trend: 'up', 
      icon: Users,
      color: 'bg-blue-500'
    },
    { 
      title: 'Pending Orders', 
      value: '127', 
      change: '+23.4%', 
      trend: 'up', 
      icon: ShoppingCart,
      color: 'bg-orange-500'
    },
    { 
      title: 'Product Stock', 
      value: '2,847', 
      change: '-2.1%', 
      trend: 'down', 
      icon: Package,
      color: 'bg-purple-500'
    }
  ];

  const deliveryStats = [
    { status: 'Delivered', count: 1456, percentage: 78, color: 'bg-green-500' },
    { status: 'In Transit', count: 284, percentage: 15, color: 'bg-blue-500' },
    { status: 'Processing', count: 89, percentage: 5, color: 'bg-yellow-500' },
    { status: 'Cancelled', count: 37, percentage: 2, color: 'bg-red-500' }
  ];

  const recentOrders = [
    { id: '#ORD-1024', customer: 'John Smith', amount: '$125.50', status: 'pending', time: '2 mins ago' },
    { id: '#ORD-1023', customer: 'Emma Davis', amount: '$89.99', status: 'processing', time: '5 mins ago' },
    { id: '#ORD-1022', customer: 'Mike Johnson', amount: '$234.75', status: 'confirmed', time: '12 mins ago' },
    { id: '#ORD-1021', customer: 'Sarah Wilson', amount: '$67.25', status: 'pending', time: '18 mins ago' },
    { id: '#ORD-1020', customer: 'David Brown', amount: '$156.80', status: 'processing', time: '25 mins ago' }
  ];

  const lowStockProducts = [
    { name: 'iPhone 15 Pro', stock: 5, minStock: 20, sales: 145 },
    { name: 'Samsung Galaxy S24', stock: 8, minStock: 15, sales: 89 },
    { name: 'MacBook Air M3', stock: 3, minStock: 10, sales: 67 },
    { name: 'AirPods Pro', stock: 12, minStock: 25, sales: 234 }
  ];

  const weeklyEarnings = [
    { day: 'Mon', amount: 12500 },
    { day: 'Tue', amount: 15800 },
    { day: 'Wed', amount: 18200 },
    { day: 'Thu', amount: 16900 },
    { day: 'Fri', amount: 21300 },
    { day: 'Sat', amount: 19600 },
    { day: 'Sun', amount: 14700 }
  ];

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      confirmed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const StatCard = ({ stat }) => {
    const Icon = stat.icon;
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <div className="flex items-center mt-3">
              {stat.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
              <span className="text-gray-500 text-sm ml-1">vs last month</span>
            </div>
          </div>
          <div className={`${stat.color} p-4 rounded-xl`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    );
  };

  const maxEarning = Math.max(...weeklyEarnings.map(d => d.amount));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's your store overview</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Today</p>
              <p className="text-lg font-semibold text-gray-900">August 21, 2025</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainStats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Earnings Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Weekly Earnings</h3>
                <BarChart3 className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-end space-x-2 h-64">
                {weeklyEarnings.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                      style={{ 
                        height: `${(data.amount / maxEarning) * 200}px`,
                        minHeight: '20px'
                      }}
                    ></div>
                    <p className="text-xs font-medium text-gray-600 mt-2">{data.day}</p>
                    <p className="text-xs text-gray-500">${(data.amount / 1000).toFixed(1)}k</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Delivery Status</h3>
                <Truck className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {deliveryStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 ${stat.color} rounded-full mr-3`}></div>
                      <span className="text-sm font-medium text-gray-700">{stat.status}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{stat.count}</p>
                      <p className="text-xs text-gray-500">{stat.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Visual Progress Bars */}
              <div className="mt-6 space-y-2">
                {deliveryStats.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className={`${stat.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600 w-8">{stat.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Pending Orders</h3>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                  {recentOrders.length} Active
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{order.amount}</p>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Low Stock Report */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Low Stock Alert</h3>
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {lowStockProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                      <p className="text-xs text-gray-600">
                        Stock: <span className="font-semibold text-red-600">{product.stock}</span> / Min: {product.minStock}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600">Sales: {product.sales}</p>
                      <div className="flex items-center">
                        <div className="w-12 bg-red-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: `${(product.stock / product.minStock) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium text-red-600">
                          {Math.round((product.stock / product.minStock) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react'
import { Star } from "lucide-react";

const Special_product = () => {

    // Sample product data
    const products = [
        {
            id: 1,
            title: "Wireless Bluetooth Headphones",
            price: "$129.99",
            originalPrice: "$179.99",
            image: [{ url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" }],
            rating: 4.8,
            reviews: 324,
            badge: "Best Seller"
        },
        {
            id: 2,
            title: "Smart Fitness Watch",
            price: "$249.99",
            originalPrice: "$299.99",
            image: [{ url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" }],
            rating: 4.6,
            reviews: 198,
            badge: "New"
        },
        {
            id: 3,
            title: "Portable Bluetooth Speaker",
            price: "$89.99",
            originalPrice: "$119.99",
            image: [{ url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop" }],
            rating: 4.7,
            reviews: 156,
            badge: "Sale"
        },
        {
            id: 4,
            title: "Wireless Charging Pad",
            price: "$39.99",
            originalPrice: "$59.99",
            image: [{ url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop" }],
            rating: 4.5,
            reviews: 89,
            badge: "Hot"
        },
        {
            id: 5,
            title: "Premium Laptop Stand",
            price: "$79.99",
            originalPrice: "$99.99",
            image: [{ url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop" }],
            rating: 4.9,
            reviews: 267,
            badge: "Premium"
        },
        {
            id: 6,
            title: "USB-C Hub Adapter",
            price: "$49.99",
            originalPrice: "$69.99",
            image: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" }],
            rating: 4.4,
            reviews: 123,
            badge: "Deal"
        }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 relative inline-block">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Special Products
                        </span>
                        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </h1>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover our latest collection of trendy and stylish products. From fashion to home essentials, we've got you covered.
                    </p>

                </div>

            </div>

            {/* //product grid */}
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        products.map((product) => (
                            <div key={product.id} className='bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 '>
                                <img src={product.image[0].url} alt={product.title} />
                                <h2 className='text-lg font-semibold p-4'>{product.title}</h2>

                                {/* Rating */}
                                <div className="flex items-center justify-between gap-2 mb-4 px-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <p>({product.rating})</p>
                                    </div>

                                    {/* reviews */}
                                    <div className="flex items-center gap-2">
                                        <p>reviews</p>
                                        <p>({product.reviews})</p>
                                    </div>
                                </div>

                                <div className="flex justify-between px-6">
                                    <p className=''> Price: {product.price}</p>
                                    <p>Discount: {product.originalPrice}</p>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default Special_product


import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Plus, Minus } from 'lucide-react';

const Trending_collection = () => {
    const [cart, setCart] = useState({});
    const [favorites, setFavorites] = useState(new Set());

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

    const addToCart = (productId) => {
        setCart(prev => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1
        }));
    };

    const removeFromCart = (productId) => {
        setCart(prev => ({
            ...prev,
            [productId]: Math.max(0, (prev[productId] || 0) - 1)
        }));
    };

    const toggleFavorite = (productId) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(productId)) {
                newFavorites.delete(productId);
            } else {
                newFavorites.add(productId);
            }
            return newFavorites;
        });
    };

    const getBadgeColor = (badge) => {
        const colors = {
            "Best Seller": "bg-gradient-to-r from-yellow-400 to-orange-500",
            "New": "bg-gradient-to-r from-green-400 to-emerald-500",
            "Sale": "bg-gradient-to-r from-red-500 to-pink-600",
            "Hot": "bg-gradient-to-r from-orange-500 to-red-500",
            "Premium": "bg-gradient-to-r from-purple-500 to-indigo-600",
            "Deal": "bg-gradient-to-r from-blue-500 to-cyan-500"
        };
        return colors[badge] || "bg-gray-500";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 relative inline-block">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Trending Collection
                        </span>
                        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </h1>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover our latest collection of trendy and stylish products. From fashion to home essentials, we've got you covered.
                    </p>

                    <div className="flex gap-6 px-12 py-4 items-center justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 cursor-pointer">
                            New Products
                        </button>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 cursor-pointer">
                            Featured Products
                        </button>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 cursor-pointer">
                            Best Seller
                        </button>
                    </div>
                </div>


                <div className="max-w-7xl mx-auto">
                 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => {
                            const cartQuantity = cart[product.id] || 0;
                            const isFavorited = favorites.has(product.id);

                            return (
                                <div
                                    key={product.id}
                                    className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200"
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image[0].url}
                                            alt={product.title}
                                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Badge */}
                                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${getBadgeColor(product.badge)} shadow-lg`}>
                                            {product.badge}
                                        </div>

                                        {/* Favorite Button */}
                                        <button
                                            onClick={() => toggleFavorite(product.id)}
                                            className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${isFavorited
                                                ? 'bg-red-500 text-white shadow-lg'
                                                : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
                                                }`}
                                        >
                                            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                                        </button>

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {product.title}
                                        </h3>

                                        {/* Rating */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                                            </div>
                                            <span className="text-sm text-slate-500">({product.reviews} reviews)</span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                {product.price}
                                            </span>
                                            <span className="text-lg text-slate-400 line-through">
                                                {product.originalPrice}
                                            </span>
                                        </div>

                                        {/* Cart Controls */}
                                        <div className="flex items-center justify-between">
                                            {cartQuantity === 0 ? (
                                                <button
                                                    onClick={() => addToCart(product.id)}
                                                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold"
                                                >
                                                    <ShoppingCart className="w-5 h-5" />
                                                    Add to Cart
                                                </button>
                                            ) : (
                                                <div className="flex items-center gap-3 bg-slate-100 rounded-2xl p-1">
                                                    <button
                                                        onClick={() => removeFromCart(product.id)}
                                                        className="p-2 rounded-xl bg-white hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors duration-200 shadow-sm"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="px-4 py-2 font-bold text-slate-800 min-w-[3rem] text-center">
                                                        {cartQuantity}
                                                    </span>
                                                    <button
                                                        onClick={() => addToCart(product.id)}
                                                        className="p-2 rounded-xl bg-white hover:bg-green-50 text-green-500 hover:text-green-600 transition-colors duration-200 shadow-sm"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            )}

                                            {/* Total Items in Cart */}
                                            {cartQuantity > 0 && (
                                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                                    <ShoppingCart className="w-4 h-4" />
                                                    <span>{cartQuantity} in cart</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Cart Summary */}
                    {Object.values(cart).some(qty => qty > 0) && (
                        <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-4 border border-slate-200">
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                                    <ShoppingCart className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">
                                        {Object.values(cart).reduce((sum, qty) => sum + qty, 0)} items in cart
                                    </p>
                                    <p className="text-sm text-slate-600">Ready to checkout</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>

    )
}

export default Trending_collection;
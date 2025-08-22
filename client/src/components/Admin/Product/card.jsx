

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaRegHeart, FaStar, FaRegStar, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleEditProduct = () => {
    console.log('Clicked product:', product);
    navigate(`/admin/edit-product/${product._id}`, { state: { product } });
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < product.image.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Generate star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-yellow-400" />);
    }
    
    for (let i = stars.length; i < 5; i++) {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <div 
      className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl mt-10 w-[200px] h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-56 w-[200px] overflow-hidden">
        <img 
          src={product.image[currentImageIndex].url} 
          alt={product.title} 
          className=" object-cover transition-transform duration-500 ease-in-out hover:scale-105 w-[200px] h-[200px]" 
        />
        
        {/* Image Navigation Arrows */}
        {product.image.length > 1 && (
          <>
            <button 
              onClick={handlePreviousImage}
              disabled={currentImageIndex === 0}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-opacity duration-200 ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-90 hover:opacity-100'}`}
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button 
              onClick={handleNextImage}
              disabled={currentImageIndex === product.image.length - 1}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-opacity duration-200 ${currentImageIndex === product.image.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-90 hover:opacity-100'}`}
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </>
        )}
        
        {/* Image Indicator Dots */}
        {product.image.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5">
            {product.image.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
              />
            ))}
          </div>
        )}
        
        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors duration-200">
          <FaRegHeart className="text-gray-600 hover:text-red-500 transition-colors duration-200" />
        </button>
      </div>
      
      {/* Product Info Section */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 truncate mb-1">{product.title}</h3>
        
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-indigo-600">${product.price}</span>
          <span className={`text-sm font-medium px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {renderStars(4.3)}
          </div>
          <span className="text-[12px] text-gray-500">(131 reviews)</span>
        </div>
        
        <button 
          onClick={handleEditProduct}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
        >
          <FaEdit className="mr-2" />
          Edit Product
        </button>
      </div>
      
      {/* Category Tag */}
      {product.category && (
        <div className="absolute top-2 left-2 bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">
          {product.category}
        </div>
      )}
    </div>
  );
};

export default Card;

import React, { useRef } from 'react';
import { 
  Armchair, 
  Shirt, 
  Crown, 
  Laptop, 
  Smartphone, 
  Watch, 
  Headphones, 
  Camera, 
  Book, 
  Coffee, 
  Gamepad2, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const topcategory = [
  {
    name: "Chair",
    icon: Armchair
  },
  {
    name: "Shirt",
    icon: Shirt
  },
  {
    name: "Saree",
    icon: Crown
  },
  {
    name: "Laptop",
    icon: Laptop
  },
  {
    name: "Phone",
    icon: Smartphone
  },
  {
    name: "Watch",
    icon: Watch
  },
  {
    name: "Headphones",
    icon: Headphones
  },
  {
    name: "Camera",
    icon: Camera
  },
  {
    name: "Books",
    icon: Book
  },
  {
    name: "Coffee",
    icon: Coffee
  },
  {
    name: "Gaming",
    icon: Gamepad2
  }
];

const Topcategory = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 relative inline-block">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Top Categories
          </span>
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </h1>
      </div>

      {/* Navigation and Category Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:bg-gray-50"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:bg-gray-50"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Scrollable Category Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12 py-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
          {topcategory.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 min-w-[140px] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Topcategory;
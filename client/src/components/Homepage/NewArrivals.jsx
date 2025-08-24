// import { useSelector } from "react-redux"
// import ProductCart from "../ProductList/ProductCart"
// import { FaArrowRight } from "react-icons/fa6";

// const NewArrivals = () => {
//   const { product } = useSelector((state) => state?.product.product);

//   return (
//     <>
//       <div className="p-2 my-4">

//         <div className="flex items-center justify-between m-4 ">

//           <div className="">
//             <h1 className="text-2xl font-bold font-serif">New Arrivals</h1>
//           </div>
//           <div className="flex items-center justify-center cursor-pointer">

//             <p className="text-sm font-semibold">More Products</p>
//             <FaArrowRight className="text-xl" color="black" size={15} />
//           </div>
//         </div>

//         <div className="flex overflow-x-auto">
//           <div className="flex gap-1 flex-nowrap">

//             {
//               product?.map((item) => (
//                 <ProductCart product={item} key={item._id} />
//               ))
//             }

//           </div>
//         </div>


//       </div>

//     </>
//   )
// }

// export default NewArrivals


import { useSelector } from "react-redux"
import ProductCart from "../ProductList/ProductCart"
import { FaArrowRight } from "react-icons/fa6";

const NewArrivals = () => {
  const { product } = useSelector((state) => state?.product.product);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div className="mb-4 sm:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                New Arrivals
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-md">
              Discover our latest collection of premium products, carefully curated just for you
            </p>
          </div>
          
          {/* More Products Button */}
          <button className="group relative inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-full px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-md">
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
              More Products
            </span>
            <FaArrowRight 
              className="text-gray-500 group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-300" 
              size={14} 
            />
            
            {/* Hover effect background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>

        {/* Products Container */}
        <div className="relative">
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrollable Products */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {product?.length > 0 ? (
                product.map((item, index) => (
                  <div 
                    key={item._id}
                    className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <ProductCart product={item} />
                  </div>
                ))
              ) : (
                /* Loading skeleton or empty state */
                <div className="flex gap-6">
                  {[...Array(4)].map((_, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-64 h-80 bg-white rounded-2xl shadow-sm animate-pulse"
                    >
                      <div className="h-48 bg-gray-200 rounded-t-2xl"></div>
                      <div className="p-4 space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default NewArrivals
import shopheader from '../../assets/shop-page-header.jpg'
import { FaAngleDown } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsFillHddStackFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProductCart from '../ProductList/ProductCart';

const Shop = () => {
    const [category, setCategory] = useState('All');

    const product = useSelector((state) => state.product.product)
    console.log('product', product);

    const input = useSelector(state => state.user?.input)
    const serchPrduct = product.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const filteredProducts = serchPrduct.filter(product => {
        if (category === 'All') return true;
        if (category === 'Living room') return product.category === 'Living room';
        if (category === 'table') return product.category === 'table';
        if (category === 'sofa') return product.category === 'sofa';
        if (category === 'bed') return product.category === 'bed';
        if (category === 'chair') return product.category === 'chair';
        if (category === 'cloth') return product.category === 'cloth';
        return false;
    });


    return (
        <>

            <div className=" p-4">
                <div className="relative flex items-center justify-center w-full">
                    <img src={shopheader} alt="" className='w-full h-auto lg:mx-24' />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-50">
                        <h1 className='p-1'>Home {'>'} Shop</h1>
                        <h1 className='font-bold text-4xl p-1'>Shop Page</h1>
                        <p className='text-[#6d6c6c]'>Let&apos;s desine the place you always imagined</p>
                    </div>
                </div>

                <div className="flex justify-between p-2 mx-24 my-4 gap-3">

                    <div className="">
                        <h1 className='font-serif text-[#716e6e] mb-2'>CATEGORIES</h1>
                        <div className="flex">
                            <select name="" id="" value={category} onChange={(e) => handleChange(e)}>
                                <option value="All">All</option>
                                <option value="Living room">Living room</option>
                                <option value="table">Tabel</option>
                                <option value="sofa">Sofa</option>
                                <option value="bed">Bed</option>
                                <option value="chair">Chair</option>
                                <option value="cloth">Cloth</option>
                            </select>
                        </div>

                    </div>
                    <div className="">
                        <h1 className='font-serif text-[#716e6e] mb-2'>PRICE</h1>
                        <div className="">
                            <select name="" id="">
                                <option value="">All Price</option>
                                <option value="">Low to High</option>
                                <option value="">High to Low</option>
                            </select>

                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[200px]">
                        <div className="flex items-center">
                            <h1 className='font-serif text-[#716e6e]'>Sort by</h1>
                            <FaAngleDown />
                        </div>
                        <div className="flex gap-4">
                            <BsFillGrid3X3GapFill />
                            <BsFillGridFill />
                            <BsFillGrid1X2Fill />
                            <BsFillHddStackFill />
                        </div>

                    </div>

                </div>
                <div className="flex flex-wrap gap-4 w-full h-[80vh] overflow-y-scroll scrollbar-hide mx-24">
                    {
                        serchPrduct?.length > 0 ? serchPrduct?.map((item) => (
                            <ProductCart product={item} key={item._id} />
                        )) : <p>No products found.</p>
                    }
                    {
                        serchPrduct?.length > 0 ? serchPrduct?.map((item) => (
                            <ProductCart product={item} key={item._id} />
                        )) : <p>No products found.</p>
                    }
                    {
                        serchPrduct?.length > 0 ? serchPrduct?.map((item) => (
                            <ProductCart product={item} key={item._id} />
                        )) : <p>No products found.</p>
                    }
                    {
                        serchPrduct?.length > 0 ? serchPrduct?.map((item) => (
                            <ProductCart product={item} key={item._id} />
                        )) : <p>No products found.</p>
                    }

                </div>

                <div className="flex items-center justify-center my-10 ">
                    <button className='border cursor-pointer rounded-full p-4 px-10 text-bold text-xl shadow hover:bg-[#e2e8f0]'>Show more</button>
                </div>

            </div>

        </>
    )
}

export default Shop



// import shopheader from '../../assets/shop-page-header.jpg'
// import { useSelector } from 'react-redux';  

// import React, { useState, useMemo } from 'react';
// import { ChevronDown, Grid3x3, Grid, LayoutGrid, List, Search } from 'lucide-react';

// // Mock data for demonstration
// const mockProducts = [
//   { _id: '1', title: 'Modern Sofa Set', category: 'sofa', price: 899, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', rating: 4.5 },
//   { _id: '2', title: 'Dining Table', category: 'table', price: 649, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400', rating: 4.2 },
//   { _id: '3', title: 'Office Chair', category: 'chair', price: 299, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400', rating: 4.7 },
//   { _id: '4', title: 'King Size Bed', category: 'bed', price: 1299, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400', rating: 4.8 },
//   { _id: '5', title: 'Living Room Set', category: 'Living room', price: 1899, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', rating: 4.4 },
//   { _id: '6', title: 'Cotton T-Shirt', category: 'cloth', price: 49, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', rating: 4.1 },
//   { _id: '7', title: 'Coffee Table', category: 'table', price: 399, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400', rating: 4.3 },
//   { _id: '8', title: 'Recliner Chair', category: 'chair', price: 799, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400', rating: 4.6 },
//   { _id: '9', title: 'Queen Bed Frame', category: 'bed', price: 899, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400', rating: 4.5 },
//   { _id: '10', title: 'Designer Jeans', category: 'cloth', price: 129, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', rating: 4.0 },
//   { _id: '11', title: 'Sectional Sofa', category: 'sofa', price: 1499, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', rating: 4.9 },
//   { _id: '12', title: 'Modern Living Room', category: 'Living room', price: 2499, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', rating: 4.7 }
// ];

// const ProductCard = ({ product, viewMode }) => {
//     console.log("product",product)
//   const cardClasses = {
//     grid: 'w-72 h-96',
//     list: 'w-full h-32 flex-row',
//     compact: 'w-56 h-80'
//   };

//   const isListView = viewMode === 'list';

//   return (
//     <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${cardClasses[viewMode] || cardClasses.grid} ${isListView ? 'flex' : ''}`}>
//       <div className={`${isListView ? 'w-32 h-32' : 'w-full h-48'} overflow-hidden`}>
//         <img 
//           src={product.image[0].url} 
//           alt={product.title}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
//       </div>
//       <div className={`p-4 ${isListView ? 'flex-1 flex flex-col justify-between' : ''}`}>
//         <div>
//           <h3 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">{product.title}</h3>
//           <p className="text-gray-500 text-xs mb-2 capitalize">{product.category}</p>
//           <div className="flex items-center mb-2">
//             <div className="flex text-yellow-400 text-sm">
//               {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
//             </div>
//             <span className="text-gray-500 text-xs ml-1">({product.rating})</span>
//           </div>
//         </div>
//         <div className={`${isListView ? 'flex items-center justify-between' : ''}`}>
//           <p className="text-2xl font-bold text-gray-900">${product.price}</p>
//           {!isListView && (
//             <button className="w-full mt-3 bg-black text-white py-2 px-4 rounded-md hover:bg-black transition-colors duration-200">
//               Add to Cart
//             </button>
//           )}
//           {isListView && (
//             <button className="bg-black text-white py-1 px-4 rounded-md hover:bg-black transition-colors duration-200">
//               Add to Cart
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Shop = () => {
//   const [category, setCategory] = useState('All');
//   const [priceSort, setPriceSort] = useState('');
//   const [searchInput, setSearchInput] = useState('');
//   const [viewMode, setViewMode] = useState('grid');
//   const [showFilters, setShowFilters] = useState(false);

//     const product = useSelector((state) => state.product.product) 

//   const categories = [
//     { value: 'All', label: 'All Products' },
//     { value: 'Living room', label: 'Living Room' },
//     { value: 'table', label: 'Tables' },
//     { value: 'sofa', label: 'Sofas' },
//     { value: 'bed', label: 'Beds' },
//     { value: 'chair', label: 'Chairs' },
//     { value: 'cloth', label: 'Clothing' }
//   ];

//   const filteredAndSortedProducts = useMemo(() => {
//     let filtered = product;

//     // Search filter
//     if (searchInput.trim()) {
//       filtered = filtered.filter(product =>
//         product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
//         product.category.toLowerCase().includes(searchInput.toLowerCase())
//       );
//     }

//     // Category filter
//     if (category !== 'All') {
//       filtered = filtered.filter(product => product.category === category);
//     }

//     // Price sorting
//     if (priceSort === 'low-to-high') {
//       filtered = [...filtered].sort((a, b) => a.price - b.price);
//     } else if (priceSort === 'high-to-low') {
//       filtered = [...filtered].sort((a, b) => b.price - a.price);
//     } else if (priceSort === 'rating') {
//       filtered = [...filtered].sort((a, b) => b.rating - a.rating);
//     }

//     return filtered;
//   }, [searchInput, category, priceSort]);

//   const getGridClasses = () => {
//     switch (viewMode) {
//       case 'list':
//         return 'flex flex-col gap-4';
//       case 'compact':
//         return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4';
//       default:
//         return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 mx-24">
//       {/* Header Section */}
//       <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
//         <div className="absolute inset-0 bg-opacity-30">
//             <img src={shopheader} alt="" className="w-full h-full object-cover" />
//         </div>
//         <div className="relative container mx-auto px-4 py-20 text-center">
//           <div className="flex items-center justify-center mb-4 text-sm">
//             <span className="opacity-80 text-black">Home</span>
//             <ChevronDown className="w-4 h-4 mx-2 rotate-[-90deg]" color="black"/>
//             <span className="text-black">Shop</span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">Shop Page</h1>
//           <p className="text-xl opacity-90 text-black">Let's design the place you always imagined</p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         {/* Search Bar */}
//         <div className="mb-8">
//           <div className="relative max-w-md mx-auto">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//         </div>

//         {/* Filters and Controls */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
//             {/* Mobile Filter Toggle */}
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg"
//             >
//               Filters <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
//             </button>

//             {/* Filters */}
//             <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
//               <div className="flex flex-col sm:flex-row gap-4">
                
//                 {/* Category Filter */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">CATEGORY</label>
//                   <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                   >
//                     {categories.map(cat => (
//                       <option key={cat.value} value={cat.value}>{cat.label}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Price Sort */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">SORT BY</label>
//                   <select
//                     value={priceSort}
//                     onChange={(e) => setPriceSort(e.target.value)}
//                     className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">Default</option>
//                     <option value="low-to-high">Price: Low to High</option>
//                     <option value="high-to-low">Price: High to Low</option>
//                     <option value="rating">Highest Rated</option>
//                   </select>
//                 </div>

//               </div>
//             </div>

//             {/* View Mode and Results Count */}
//             <div className="flex items-center justify-between gap-4">
//               <span className="text-gray-600 text-sm">
//                 Showing {filteredAndSortedProducts.length} products
//               </span>
              
//               {/* View Mode Toggles */}
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setViewMode('grid')}
//                   className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
//                 >
//                   <Grid3x3 className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode('compact')}
//                   className={`p-2 rounded ${viewMode === 'compact' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
//                 >
//                   <Grid className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode('list')}
//                   className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
//                 >
//                   <List className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Active Filters */}
//         {(category !== 'All' || searchInput || priceSort) && (
//           <div className="mb-6">
//             <div className="flex flex-wrap items-center gap-2">
//               <span className="text-sm text-gray-600">Active filters:</span>
//               {category !== 'All' && (
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                   Category: {category}
//                   <button onClick={() => setCategory('All')} className="ml-1 hover:text-blue-600">×</button>
//                 </span>
//               )}
//               {searchInput && (
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                   Search: "{searchInput}"
//                   <button onClick={() => setSearchInput('')} className="ml-1 hover:text-blue-600">×</button>
//                 </span>
//               )}
//               {priceSort && (
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                   Sort: {priceSort.replace('-', ' to ')}
//                   <button onClick={() => setPriceSort('')} className="ml-1 hover:text-blue-600">×</button>
//                 </span>
//               )}
//               <button
//                 onClick={() => {
//                   setCategory('All');
//                   setSearchInput('');
//                   setPriceSort('');
//                 }}
//                 className="text-sm text-red-600 hover:text-red-800 underline"
//               >
//                 Clear all
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Products Grid */}
//         <div className={getGridClasses()}>
//           {filteredAndSortedProducts.length > 0 ? (
//             filteredAndSortedProducts.map((product) => (
//               <ProductCard key={product._id} product={product} viewMode={viewMode} />
//             ))
//           ) : (
//             <div className="col-span-full text-center py-12">
//               <div className="text-gray-400 mb-4">
//                 <Search className="w-16 h-16 mx-auto mb-4" />
//               </div>
//               <h3 className="text-xl font-medium text-gray-600 mb-2">No products found</h3>
//               <p className="text-gray-500">Try adjusting your search or filter criteria</p>
//               <button
//                 onClick={() => {
//                   setCategory('All');
//                   setSearchInput('');
//                   setPriceSort('');
//                 }}
//                 className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Load More Button */}
//         {filteredAndSortedProducts.length > 0 && (
//           <div className="text-center mt-12">
//             <button className="px-8 py-3 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
//               Show More Products
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;
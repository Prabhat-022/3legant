// import { CiEdit } from "react-icons/ci";
// import { BiSolidImageAdd } from "react-icons/bi";
// import { FaCirclePlus } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleDown } from "react-icons/fa6";
// import { useState } from "react";
// import axiosInstance from "../../../lib/axios";
// import { useLocation } from "react-router-dom";

// const EditExistingProduct = () => {
//     const { products } = useLocation().state;



//     const [qty, setQty] = useState(1)

//     const [product, setProduct] = useState({
//         title: products.title,
//         description: products.description,
//         price: products.price,
//         discountPrice: products.discountPrice,
//         mesurement: products.mesurement,
//         color: products.color,
//         categories: products.categories,
//         additionalDetails: products.additionalDetails,
//         image: products.image,
//         packaging: products.packaging,
//         size: products.size,
//         rating: products.rating,
//         reviews: products.reviews,
//         question: products.question,
//     });


//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct((prevState) => ({ ...prevState, [name]: value }));
//     };


//     const handleFileChange = (e) => {
//         setProduct({ ...product, image: e.target.files }); // Update avatar with the selected file
//     };


//     const handleAddProduct = async (e) => {
//         e.preventDefault();


//         const formData = new FormData();

//         // Object.keys(product).forEach(key => {
//         //   formData.append(key, product[key]);
//         // });

//         formData.append('title', product.title);
//         formData.append('description', product.description);
//         formData.append('price', product.price);
//         formData.append('discountPrice', product.discountPrice);
//         formData.append('size', product.size);
//         formData.append('color', product.color);
//         formData.append('categories', product.categories);
//         formData.append('additionalDetails', product.additionalDetails);
//         formData.append('image', product.image);
//         formData.append('packaging', product.packaging);
//         formData.append('rating', product.rating);
//         formData.append('reviews', product.reviews);
//         formData.append('question', product.question);
//         formData.append('quantity', qty);

//         for (let i = 0; i < product.image.length; i++) {
//             formData.append('image', product.image[i]);
//         }


//         try {
//             const res = await axiosInstance.put(`/api/products/${products._id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//                 withCredentials: true
//             })

//             console.log(res.data)

//         }
//         catch (error) {
//             console.log('Product not created', error)
//         }

//     }
//     return (
//         <>

//             <div className="bg-[#f1f1f1] w-full   p-8 h-[100vh] ml-24">
//                 <form action="" className="flex flex-col gap-2 m-10 " onSubmit={handleAddProduct}>

//                     <div className="h-[50px] bg-slate-300 p-2">
//                         <h1 className="text-3xl">Add Product</h1>
//                     </div>

//                     <div className="flex gap-2 p-4 m-4">
//                         <div className="flex flex-col w-1/2">
//                             <div className="flex gap-2 items-center mb-10">
//                                 {/* <h1 className="text-xl font-bold">Add label </h1> */}
//                                 <input type="text" name="lavel" value={product.lavel} onChange={handleChange} className=" placeholder:text-xl placeholder:font-bold placeholder:text-black bg-transparent outline-none border-black " placeholder="Add label" />

//                                 <CiEdit size={30} className="cursor-pointer" />
//                             </div>

//                             <div>

//                                 <input
//                                     type="file" multiple
//                                     className="appearance-none rounded-lg relative block w-full px-4 py-3 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     onChange={handleFileChange}
//                                     accept="image/*"
//                                 />

//                                 <BiSolidImageAdd size={100} className="m-6 my-10" />

//                             </div>

//                         </div>

//                         <div className="">

//                             <div className="flex items-center gap-2 my-5 ">
//                                 <input type="text" name="title" value={product.title} onChange={handleChange} className=" placeholder:text-xl  placeholder:text-black bg-transparent outline-none border-black " placeholder="ADD PRODUCT TITLE" />
//                                 <CiEdit size={20} />
//                             </div>

//                             {/* //discription */}
//                             <input type="text" name="description" value={product.description} onChange={handleChange} className=" placeholder:text-xl  placeholder:text-[#a2a3a4]  bg-transparent outline-none border-black mb-3 " placeholder="Add description " />

//                             <div className="flex justify-between gap-2 w-full mt-4 mb-2">
//                                 <div className="flex items-center ">
//                                     <FaCirclePlus size={20} />
//                                     <input type="Number" name="price" value={product.price} onChange={handleChange} className=" placeholder:text-xl placeholder:font-bold  placeholder:text-black bg-transparent outline-none border-black px-2 " placeholder="Add Price " />
//                                 </div>

//                                 <div className="flex items-center ">
//                                     <FaCirclePlus size={20} />
//                                     <input type="text" name="discountPrice" value={product.discountPrice} onChange={handleChange} className=" placeholder:text-xl placeholder:font-bold  placeholder:text-black bg-transparent outline-none border-black px-2 " placeholder=" Add MRP or Price Before Discount " />

//                                 </div>
//                             </div>
//                             <hr className=" border-black my-4" />

//                             <div className="flex flex-col">
//                                 <input type="text" name="size" value={product.size} onChange={handleChange} className="  placeholder:text-[#a2a3a4]  bg-transparent outline-none border-black  " placeholder=" Measurement " />
//                                 <h1 className="text-xl mb-4">Add details</h1>
//                             </div>

//                             <div className="flex gap-2 items-center mb-4">
//                                 <input type="text" name="color" value={product.color} onChange={handleChange} className="  placeholder:text-[#a2a3a4]  bg-transparent outline-none border-black mb-3 " placeholder="Add color " />
//                                 <FaAngleRight />
//                             </div>

//                             <div className="mb-2">
//                                 <div className="flex items-center mb-2">
//                                     <input type="textarea" name="rating" value={product.rating} onChange={handleChange} className=" placeholder:text-xl  placeholder:text-[#a2a3a4] bg-transparent outline-none border-black " placeholder="Rating" />
//                                     <FaCirclePlus />

//                                 </div>
//                                 <hr className="border-black mb-2" />

//                                 <div className="flex justify-between mb-2 my-4">
//                                     <input type="textarea" name="additionalInfo" value={product.additionalInfo} onChange={handleChange} className=" placeholder:text-xl  placeholder:text-black bg-transparent outline-none border-black " placeholder="Additional info" />
//                                     <FaAngleDown />
//                                 </div>
//                                 <hr className="border-black" />
//                             </div>


//                             <div className="flex gap-2 items-center my-5 ">
//                                 <FaCirclePlus />
//                                 <input type="textarea" name="moreInfo" value={product.moreInfo} onChange={handleChange} className="   placeholder:text-black bg-transparent outline-none border-black " placeholder="Add More information " />
//                             </div>

//                             <div className="flex gap-2 border-2 bg-[#f5f5f5] p-2  px-10 w-1/3 item-center justify-between font-bold rounded-md ">
//                                 <button className="" onClick={() => setQty(qty - 1)}>-</button>

//                                 <h1>{qty}</h1>

//                                 <button className="" onClick={() => setQty(qty + 1)}>+</button>
//                             </div>
//                             <div className="my-4">
//                                 <button type="submit" className=" p-4 px-16 bg-[#070808] text-xl text-white font-bold rounded-full my-4">Add Product</button>
//                             </div>
//                         </div>

//                     </div>
//                 </form>

//             </div>
//         </>
//     )
// }
// export default 



import { useState } from "react";
import { Upload, Plus, Minus, Image, Star, Package, Tag, Info, DollarSign, Palette, Ruler } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../../lib/axios";

const EditExistingProduct = () => {
    const [qty, setQty] = useState(1);
    const [dragActive, setDragActive] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { product } = state || {};

    const [newProduct, setNewProduct] = useState({
        title: product.title || "",
        description: product.description || "",
        price: product.price || "",
        discountPrice: product.discountPrice || "",
        measurement: product.measurement || "",
        color: product.color || "",
        categories: product.categories || "",
        additionalDetails: product.additionalDetails || "",
        image: product.image || [],
        packaging: product.packaging || [],
        size: product.size || "",
        rating: product.rating || "",
        reviews: product.reviews || "",
        question: product.question || [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setNewProduct({ ...newProduct, image: e.target.files });

        // Create preview URLs
        const imageUrls = files.map(file => ({
            file,
            url: URL.createObjectURL(file),
            name: file.name
        }));
        setUploadedImages(prev => [...prev, ...imageUrls]);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const files = Array.from(e.dataTransfer.files);
            // setProduct({ ...product, image: e.dataTransfer.files });

            const imageUrls = files.map(file => ({
                file,
                url: URL.createObjectURL(file),
                name: file.name
            }));
            setUploadedImages(prev => [...prev, ...imageUrls]);
        }
    };

    const removeImage = (index) => {
        const newImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(newImages);
    };


    const handleUpdateProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        // Append all product data
        Object.keys(newProduct).forEach(key => {

            if (key === 'image') {
                for (let i = 0; i < newProduct.image.length; i++) {
                    formData.append('image', newProduct.image[i]);
                }
            } else {
                formData.append(key, newProduct[key]);
            }
        });

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }



        try {
            const res = await axiosInstance.put(`/api/product/${product._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            })

            console.log(res.data)

            if (res.data.success) {
                navigate('/admin/product')
            }


        }
        catch (error) {
            console.log('Product not created', error)
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <Package className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Edit Product</h1>
                            <p className="text-gray-500 mt-1">Edit product listing for your store</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column - Image Upload */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                <Image className="w-5 h-5" />
                                Product Images
                            </h2>

                            {/* File Upload Area */}
                            <div
                                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${dragActive
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                                    }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload Product Images</h3>
                                <p className="text-gray-500 mb-4">Drag and drop your images here, or click to browse</p>
                                <div className="bg-blue-600 text-white px-6 py-2 rounded-lg inline-block hover:bg-blue-700 transition-colors">
                                    Choose Files
                                </div>
                            </div>

                            {/* Image Previews */}
                            {uploadedImages.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="text-sm font-medium text-gray-700 mb-3">Uploaded Images</h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        {uploadedImages.map((image, index) => (
                                            <div key={index} className="relative group">
                                                <img
                                                    src={image.url}
                                                    alt={`Preview ${index}`}
                                                    className="w-full h-24 object-cover rounded-lg border"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Product Details */}
                        <div className="space-y-6">
                            {/* Basic Information */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    Basic Information
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Product Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={newProduct.title}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Enter product title"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                        <textarea
                                            name="description"
                                            value={newProduct.description}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Describe your product"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5" />
                                    Pricing
                                </h2>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Sale Price</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                            <input
                                                type="number"
                                                name="price"
                                                value={newProduct.price}
                                                onChange={handleChange}
                                                className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Original Price (MRP)</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                            <input
                                                type="number"
                                                name="discountPrice"
                                                value={newProduct.discountPrice}
                                                onChange={handleChange}
                                                className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Specifications */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                            <Tag className="w-5 h-5" />
                            Product Specifications
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                    <Ruler className="w-4 h-4" />
                                    Size/Measurement
                                </label>
                                <input
                                    type="text"
                                    name="size"
                                    value={newProduct.size}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="e.g., Medium, 250ml"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                    <Palette className="w-4 h-4" />
                                    Color
                                </label>
                                <input
                                    type="text"
                                    name="color"
                                    value={newProduct.color}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="e.g., Red, Blue"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    name="categories"
                                    value={newProduct.categories}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                >
                                    <option value="">Select Category</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="clothing">Clothing</option>
                                    <option value="home">Home & Garden</option>
                                    <option value="sports">Sports</option>
                                    <option value="books">Books</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                    <Star className="w-4 h-4" />
                                    Rating
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    value={newProduct.rating}
                                    onChange={handleChange}
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="4.5"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Additional Information</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                                <textarea
                                    name="additionalDetails"
                                    value={newProduct.additionalDetails}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Any additional product details or specifications"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quantity and Submit */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Stock Quantity</label>
                                <div className="flex items-center bg-gray-50 rounded-lg p-1 w-fit">
                                    <button
                                        type="button"
                                        onClick={() => setQty(Math.max(1, qty - 1))}
                                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="mx-4 text-lg font-semibold min-w-[3rem] text-center">{qty}</span>
                                    <button
                                        type="button"
                                        onClick={() => setQty(qty + 1)}
                                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
                                >
                                    Save Draft
                                </button>
                                <button
                                    onClick={handleUpdateProduct}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Update Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditExistingProduct;

import { CiEdit } from "react-icons/ci";
import { BiSolidImageAdd } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";

const AddNewProduct = () => {

    const [qty, setQty] = useState(1)

    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        discountPrice: "",
        mesurement: "",
        color: "",
        categories: "",
        additionalDetails: "",
        image: [],
        packaging: [],
        size: "",
        rating: "",
        reviews: "",
        question: [],
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({ ...prevState, [name]: value }));
    };


    const handleFileChange = (e) => {
        setProduct({ ...product, image: e.target.files }); // Update avatar with the selected file
    };


    const handleAddProduct = async (e) => {
        e.preventDefault();


        const formData = new FormData();

        // Object.keys(product).forEach(key => {
        //   formData.append(key, product[key]);
        // });

        formData.append('title', product.title);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('discountPrice', product.discountPrice);
        formData.append('size', product.size);
        formData.append('color', product.color);
        formData.append('categories', product.categories);
        formData.append('additionalDetails', product.additionalDetails);
        formData.append('image', product.image);
        formData.append('packaging', product.packaging);
        formData.append('rating', product.rating);
        formData.append('reviews', product.reviews);
        formData.append('question', product.question);
        formData.append('quantity', qty);

        for (let i = 0; i < product.image.length; i++) {
            formData.append('image', product.image[i]);
        }


        try {
            const res = await axios.post('/api/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            })

            console.log(res.data)

        }
        catch (error) {
            console.log('Product not created', error)
        }

    }
    return (
        <>

                    <div className="bg-[#f1f1f1] w-full   p-8 h-[100vh] ml-24">
                        <form action="" className="flex flex-col gap-2 m-10 " onSubmit={handleAddProduct}>

                            <div className="h-[50px] bg-slate-300 p-2">
                                <h1 className="text-3xl">Add Product</h1>
                            </div>

                            <div className="flex gap-2 p-4 m-4">
                                <div className="flex flex-col w-1/2">
                                    <div className="flex gap-2 items-center mb-10">
                                        {/* <h1 className="text-xl font-bold">Add label </h1> */}
                                        <input type="text" name="lavel" value={product.lavel} onChange={handleChange} className=" placeholder:text-xl placeholder:font-bold placeholder:text-black bg-transparent outline-none border-black " placeholder="Add label" />

                                        <CiEdit size={30} className="cursor-pointer" />
                                    </div>

                                    <div>

                                        <input
                                            type="file" multiple
                                            className="appearance-none rounded-lg relative block w-full px-4 py-3 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                        />

                                        <BiSolidImageAdd size={100} className="m-6 my-10" />

                                    </div>

                                </div>

                                <div className="">

                                    <div className="flex items-center gap-2 my-5 ">
                                        <input type="text" name="title" value={product.title} onChange={handleChange} className=" placeholder:text-xl  placeholder:text-black bg-transparent outline-none border-black " placeholder="ADD PRODUCT TITLE" />
                                        <CiEdit size={20} />
                                    </div>

                                    {/* //discription */}
                                    <input type="text" name="description" value={product.description} onChange={handleChange} className=" placeholder:text-xl  placeholder:text-[#a2a3a4]  bg-transparent outline-none border-black mb-3 " placeholder="Add description " />

                                    <div className="flex justify-between gap-2 w-full mt-4 mb-2">
                                        <div className="flex items-center ">
                                            <FaCirclePlus size={20} />
                                            <input type="Number" name="price" value={product.price} onChange={handleChange} className=" placeholder:text-xl placeholder:font-bold  placeholder:text-black bg-transparent outline-none border-black px-2 " placeholder="Add Price " />
                                        </div>

                                        <div className="flex items-center ">
                                            <FaCirclePlus size={20} />
                                            <input type="text" name="discountPrice" value={product.discountPrice} onChange={handleChange} className=" placeholder:text-xl placeholder:font-bold  placeholder:text-black bg-transparent outline-none border-black px-2 " placeholder=" Add MRP or Price Before Discount " />

                                        </div>
                                    </div>
                                    <hr className=" border-black my-4" />

                                    <div className="flex flex-col">
                                        <input type="text" name="size" value={product.size} onChange={handleChange} className="  placeholder:text-[#a2a3a4]  bg-transparent outline-none border-black  " placeholder=" Measurement " />
                                        <h1 className="text-xl mb-4">Add details</h1>
                                    </div>

                                    <div className="flex gap-2 items-center mb-4">
                                        <input type="text" name="color" value={product.color} onChange={handleChange} className="  placeholder:text-[#a2a3a4]  bg-transparent outline-none border-black mb-3 " placeholder="Add color " />
                                        <FaAngleRight />
                                    </div>

                                    <div className="mb-2">
                                        <div className="flex items-center mb-2">
                                            <input type="textarea" name="rating" value={product.rating} onChange={handleChange} className=" placeholder:text-xl  placeholder:text-[#a2a3a4] bg-transparent outline-none border-black " placeholder="Rating" />
                                            <FaCirclePlus />

                                        </div>
                                        <hr className="border-black mb-2" />

                                        <div className="flex justify-between mb-2 my-4">
                                            <input type="textarea" name="additionalInfo" value={product.additionalInfo} onChange={handleChange} className=" placeholder:text-xl  placeholder:text-black bg-transparent outline-none border-black " placeholder="Additional info" />
                                            <FaAngleDown />
                                        </div>
                                        <hr className="border-black" />
                                    </div>


                                    <div className="flex gap-2 items-center my-5 ">
                                        <FaCirclePlus />
                                        <input type="textarea" name="moreInfo" value={product.moreInfo} onChange={handleChange} className="   placeholder:text-black bg-transparent outline-none border-black " placeholder="Add More information " />
                                    </div>

                                    <div className="flex gap-2 border-2 bg-[#f5f5f5] p-2  px-10 w-1/3 item-center justify-between font-bold rounded-md ">
                                        <button className="" onClick={() => setQty(qty - 1)}>-</button>

                                        <h1>{qty}</h1>

                                        <button className="" onClick={() => setQty(qty + 1)}>+</button>
                                    </div>
                                    <div className="my-4">
                                        <button type="submit" className=" p-4 px-16 bg-[#070808] text-xl text-white font-bold rounded-full my-4">Add Product</button>
                                    </div>
                                </div>

                            </div>
                        </form>

                    </div>


        </>
    )
}
export default AddNewProduct

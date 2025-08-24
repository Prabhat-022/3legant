import { Product } from "../model/product.Model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import mongoose from 'mongoose'

// get all the products 
export const getAllTheProducts = async (req, res) => {
    try {
        const product = await Product.find();

        if (!product) {
            return res.status(400).json({
                message: "-> Not found any products ",
                success: false,

            })
        }

        res.status(200).json({
            message: "->successful fetch the all products",
            success: true,
            product
        })


    } catch (error) {
        console.log("cant get all the product bro", error);

        res.status(400).json({
            message: "-> All product not found ",
            success: false,
            error
        })
    }
}

//get single products 

export const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id);

        if (!product) {
            return res.status(400).json({
                message: "-> Not found any products ",
                success: false,

            })
        }

        res.status(200).json({
            message: "->successful fetch the one products",
            success: true,
            product
        })

    } catch (error) {
        console.log("cant get all the product bro", error);

        res.status(400).json({
            message: "-> All product not found ",
            success: false,
            error
        })
    }
}

//add new products 

export const addNewProducts = async (req, res) => {
    console.log('req body:', req.body)
    try {
        const user = req.user.userId;
        const { title, description, price, discountPrice, color, addtionalDetails } = req.body

        // if (!title || !description || !price || !discountPrice || !color || !addtionalDetails) {
        //     res.status(400).json({
        //         message: "-> Please fill all the details ",
        //         success: false,

        //     })
        // }

        // check product already exist or not
        const product = await Product.findOne({
            $or: [{ title }, { description }]
        })

        if (product) {
            return res.status(400).json({
                message: "->This product is already exist",
                success: false,

            })
        }

        // const productImgLocalPath = req.files?.image[0]?.path;
        const productImgLocalPaths = req.files?.map((file) => file.path);


        if (!productImgLocalPaths || productImgLocalPaths.length === 0) {

            return res.status(401).json({
                message: "Prodct Img is required",
                success: false
            })
        }

        const img = await Promise.all(
            productImgLocalPaths.map((imgLocalPath) => uploadOnCloudinary(imgLocalPath))
        )

        if (!img) {
            return res.status(401).json({
                message: "Img file is required",
                success: false
            })
        }

        //implement image upload 

        const newProduct = await Product.create({
            user,
            title,
            description,
            price,
            discountPrice,
            color,
            image: img.map(imgObj => ({ url: imgObj.url })),
            addtionalDetails
        })


        //send the message for user 
        res.status(201).json({
            message: "-> wow, Product created successfully",
            success: true,
            newProduct
        })

    } catch (error) {
        console.log("cant create a new products", error);

        res.status(400).json({
            message: "-> Product not created",
            success: false,
            error
        })
    }
}

// update existing product 


export const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user?.userId;

        console.log('\n--- Update Product Request ---');
        console.log('User ID:', userId);
        console.log('Product ID:', id);
        console.log('Request Body:', req.body);
        console.log('Files:', req.files);
        console.log('-----------------------------\n');

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid product ID",
                success: false
            });
        }

        // Get form data
        const { title, description, price, discountPrice, color, additionalDetails, categories, size, rating } = req.body;

        // Basic validation
        // if (!title || !description || !price || !discountPrice || !color || !additionalDetails) {
        //     return res.status(400).json({
        //         message: "Please fill all the required details",
        //         success: false,
        //         missingFields: {
        //             title: !title,
        //             description: !description,
        //             price: !price,
        //             discountPrice: !discountPrice,
        //             color: !color,
        //             additionalDetails: !additionalDetails
        //         }
        //     });
        // }

        // Check if the product exists and belongs to the user
        const existingProduct = await Product.findOne({
            _id: id,
            user: userId
        });

        if (!existingProduct) {
            return res.status(404).json({
                message: "Product not found or you don't have permission to update it",
                success: false
            });
        }

        // Handle file uploads if any
        let imageUpdates = [];
        if (req.files && req.files.length > 0) {
            // Upload new images to Cloudinary
            const uploadPromises = req.files.map(file =>
                uploadOnCloudinary(file.path).catch(err => {
                    console.error('Error uploading image to Cloudinary:', err);
                    return null;
                })
            );

            const uploadResults = await Promise.all(uploadPromises);
            imageUpdates = uploadResults
                .filter(result => result !== null)
                .map(img => ({ url: img.secure_url, public_id: img.public_id }));
        }

        // prepare update data safely
        const updateData = {};
        if (title) updateData.title = title;
        if (description) updateData.description = description;
        if (price) updateData.price = price;
        if (discountPrice) updateData.discountPrice = discountPrice;
        if (color) updateData.color = color;
        if (additionalDetails) updateData.additionalDetails = additionalDetails;
        if (categories) updateData.categories = categories;
        if (size) updateData.size = size;
        if (rating) updateData.rating = rating;
        if (imageUpdates.length > 0) updateData.image = imageUpdates;

        console.log('Updating with:', updateData);

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
        );


        if (!updatedProduct) {
            return res.status(404).json({
                message: "Failed to update product",
                success: false
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            success: true,
            data: updatedProduct
        });

    } catch (error) {
        console.error("Error updating product:", error);

        // Handle specific error types
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: "Validation error: " + error.message,
                success: false,
                error: error.message
            });
        }

        if (error.name === 'CastError') {
            return res.status(400).json({
                message: "Invalid data format",
                success: false,
                error: error.message
            });
        }

        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred' : error.message
        });
    }
};


// delete the  existing product 
export const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params

        // check product already exist or not
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            res.status(400).json({
                message: "->This product does not exist",
                success: false,

            })
        }


        //send the message for user 
        res.status(201).json({
            message: "-> Product delete successfully",
            success: true,
            product
        })


    } catch (error) {
        console.log("cant delete products", error);

        res.status(400).json({
            message: "-> Product not deleted",
            success: false,
            error
        })
    }
}
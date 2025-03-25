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
           return  res.status(400).json({
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
          return  res.status(400).json({
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
        const { id } = req.params
        const product = await Product.findById(id);

        const { title, description, price, discountPrice, color, addtionalDetails } = req.body;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "-> Invalid product ID",
                success: false
            });
        }

        // Check if the product exists
        if (!product) {
            return res.status(404).json({
                message: "-> This product does not exist",
                success: false
            });
        }

        // Update the product
        const updatedProduct = await Product.findByIdAndUpdate(
            id, 
            { title, description, price, discountPrice, color, addtionalDetails },
            { new: true }
        );

        res.status(200).json({
            message: "-> Wow, Product updated successfully",
            success: true,
            updatedProduct
        });

    } catch (error) {
        console.error("Can't update the products", error);

        res.status(500).json({
            message: "-> Product not updated",
            success: false,
            error: error.message
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
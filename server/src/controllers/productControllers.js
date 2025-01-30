import { Product } from "../models/productModel.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const AddProduct = async (req, res) => {

    try {

        const { level, title, description, price, category, color, additionalInfo, size, discountPrice, moreInfo, rating } = req.body;


        if (!title || !description || !price || !color || !discountPrice) {

            return res.status(401).json({
                message: "All fields are required",
                success: false
            })

        }

        const existingProduct = await Product.findOne({ $or: [{ title }, { description }] })

        if (existingProduct) {
            return res.status(401).json({
                message: "Product already exists",
                success: false
            })
        }

        // const productImgLocalPath = req.files?.image[0]?.path;
        const productImgLocalPaths = req.files?.map((file) => file.path);

        console.log("productImgLocalPaths: ", productImgLocalPaths);

        if (!productImgLocalPaths || productImgLocalPaths.length === 0) {

            return res.status(401).json({
                message: "Prodct Img is required",
                success: false
            })
        }

        const img = await Promise.all(
            productImgLocalPaths.map((imgLocalPath) => uploadOnCloudinary(imgLocalPath))
        )
        console.log("img: ", img)

        if (!img) {
            return res.status(401).json({
                message: "Img file is required",
                success: false
            })
        }

        // file has been uploaded successfull
        const newProduct = await Product.create({
            level,
            title,
            description,
            price,
            category,
            color,
            additionalInfo,
            size,
            image: img.map(imgObj => ({ url: imgObj.url })),
            discountPrice,
            moreInfo,
            rating
        })

        return res.status(201).json({
            message: "Product created successfully",
            success: true,
            newProduct
        });

    }
    catch (error) {

        console.log('Product not created', error);

        return res.status(500).json({

            message: "Product creation failed",
            success: false,
            error: error.message,

        })
    }

}

export const UpdateProduct = async (req, res) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not found'
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        product
    })
}

export const DeleteProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not found'
        })
    }
    await product.remove;

    res.status(200).json({
        success: true,
        message: " Product is deleted successfully"
    })
}

export const GetAllProducts = async (req, res) => {

    try {
        const product = await Product.find({})
        
        return res.status(200).json({
            message: "Products fetched successfully",
            success: true,
            product
        })

    } catch (error) {
        console.log('Products not fetched', error)
    }

}

export const GetProductById = async (req, res) => {
    try {
        const id = req.params.id
       
        const product = await Product.findById(id)
        return res.status(200).json({
            message: "Product fetched successfully",
            success: true,
            product

        })
    } catch (error) {
        console.log('Error fetching product', error)
    }
}

export const updateProductQuantity = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Product.findByIdAndUpdate(productId, { quantity }, { new: true });
        return res.status(200).json({
            message: "Product quantity updated successfully",
            success: true,
            product
        })
    } catch (error) {
        console.log('Error updating product quantity', error)
    }
}
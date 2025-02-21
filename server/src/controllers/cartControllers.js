import Cart from "../models/cart.model.js";
import { Product } from "../models/productModel.js";
//Retrieve the user's shopping cart 
export const getAllShoppingCart = async (req, res) => {

    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({
                message: "User ID is required",
                success: false
            })
        }
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found",
                success: false
            })
        }

        const product = await cart.products.map(item => item.productId);
        console.log('product: ', product)

        const products = await Product.find({ _id: { $in: product } });

        console.log('products: ', products)

            return res.status(200).json({
                message: "Cart fetched successfully",
                success: true,
                products})

        } catch (error) {
            console.log(`Error fetching cart: ${error}`)
            return res.status(500).json({
                message: "Error fetching cart",
                success: false,
                error
            });
        }
    }
export const AddItemToCart = async (req, res) => {

        try {
            const { userId, productId } = req.body;
            console.log("userId", userId);
            console.log("productId", productId);
            // Validate required fields
            if (!userId || !productId) {
                return res.status(400).json({
                    message: "UserId and product details are required",
                    success: false
                });
            }

            // Find the user's cart
            let cart = await Cart.findOne({ userId });
            console.log("cart", cart);

            // If the cart doesn't exist, create a new one
            if (!cart) {
                cart = await Cart.create({ userId, products: [{ productId }] });
                return res.status(200).json({
                    message: "Item added to cart successfully",
                    success: true,
                    cart
                });
            }

            // Check if the product already exists in the cart
            const productIndex = cart.products.findIndex(item => item.productId.toString() === productId.toString());

            if (productIndex > -1) {
                // If the prod uct exists, increment its quantity
                cart.products[productIndex].quantity += 1;
            } else {
                // If the product doesn't exist, add it to the cart
                cart.products.push({ productId });
            }

            // Save the updated cart
            const updatedCart = await cart.save();

            return res.status(200).json({
                message: "Cart updated successfully",
                success: true,
                cart: updatedCart
            });

        } catch (error) {
            console.error('Error adding item to cart:', error);
            return res.status(500).json({
                message: "Internal server error",
                success: false
            });
        }
    };

    export const removeItemFromCart = async (req, res) => {
        try {
            const { productId } = req.params;
            const { userId } = req.body;

            console.log('userId: ', userId)
            console.log('productId: ', productId)

            if (!userId || !productId) {
                return res.status(400).json({
                    message: "All fields are required",
                    success: false
                })
            }
            const existingCart = await Cart.findOne({ userId, "products.productId": productId })

            if (!existingCart) {
                return res.status(400).json({
                    message: "Item not found in cart",
                    success: false
                })
            }
            else {
                Cart.updateOne({ userId, "products.productId": productId }, { $pull: { products: { productId } } })
            }

            return res.status(200).json({
                message: "Item removed from cart successfully",
            })

        } catch (error) {
            console.log('Item not removed from cart', error)
        }
    }
import Cart from "../models/cart.model.js";

//Retrieve the user's shopping cart 
export const getAllShoppingCart = async (req, res) => {

    try {
        const { userId } = req.params;
        console.log('userId: ', req.params);

        const cartItem = await Cart.find({ userId })
        console.log('cartItem: ', cartItem);

        return res.status(200).json({
            message: "Cart fetched successfully",
            success: true,
            cartItem
        });

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
        const { userId, products } = req.body;
        console.log('userId: ', userId)
        console.log('products: ', products)

        if (!userId || !products) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }

        const existingCart = await Cart.findOne({ userId })

        if (!existingCart) {

            await Cart.create({ userId, products })
        }
        
        else {
            Cart.updateOne({ userId, }, { $inc: { quantity: 1 } })
        }

        return res.status(200).json({
            message: "Item added to cart successfully",
            success: true,
            existingCart
        })

    } catch (error) {
        console.log('Item not added to cart', error)
    }
}

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
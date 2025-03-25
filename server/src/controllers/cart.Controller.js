import { Cart } from "../model/cart.Model.js"
import { Product } from "../model/product.Model.js"

export const getAllTheCartItem = async (req, res) => {
    try {
    
        let cartItem = await Cart.findOne({ userId: req.user.userId });

        if (!cartItem) {
            return res.status(400).json({
                message: "-> Not cart item exist",
                success: false,

            })
        }

        const productIds = cartItem.items.map((item) => {
            return {
                productId: item.productId.toString(),
                quantity: item.quantity
            }
        });


        const productDetails = await Product.find({ _id: { $in: productIds.map(item => item.productId) } });

        res.status(200).json({
            message: "-> Cart item fetch successfully",
            success: true,
            data: productDetails.map(product => ({
                ...product.toObject(),
                quantity: productIds.find(item => item.productId === product._id.toString()).quantity
            }))
        })

    } catch (error) {
        console.log("-> Error: cart item Not fetch", error)

        res.status(400).json({
            message: "-> Error Cart Item not fetch",
            success: false,
            error
        })
    }
}

//add cart item in cart 
export const addItemInCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        console.log('-> Cart item added', req.body)

        let cart = await Cart.findOne({ userId: req.user.userId });

        if (!cart) {
            cart = await Cart.create({
                userId: req.user.userId,
                items: [{ productId, quantity }]
            });
        } else {
            //find cart item and add
            let existingItem = cart.items.find(item => item.productId.toString() === productId);

            if (existingItem) {

                existingItem.quantity += quantity;
            } else {

                cart.items.push({ productId, quantity });
            }

            await cart.save();
        }

        res.status(200).json({
            message: "->  Cart Item is Added successfully",
            success: true,
            cart
        })


    } catch (error) {
        console.log("->Error: cart item Not Added", error)

        res.status(400).json({
            message: "->  Cart Item not Added",
            success: false,
            error
        })
    }
}

// const deleteCartItem = async (req, res) => {
//     const { id } = req.params; // Get the product ID from the request parameters
//     console.log('id', id);

//     // Find the cart for the user
//     let cart = await Cart.findOne({ userId: req.user.userId });

//     if (!cart) {
//         return res.status(404).json({ message: 'Cart not found' });
//     }

//     // Use findByIdAndDelete to remove the item directly
//     const deletedItem = await cart.items.id(id); // Find the item by ID within the cart items

//     if (!deletedItem) {
//         return res.status(404).json({ message: 'Item not found in cart' });
//     }

//     deletedItem.remove(); // Remove the item from the cart
//     await cart.save(); // Save the updated cart

//     console.log('-> Cart item deleted', cart);
//     res.status(200).json({
//         message: "-> Cart Item is deleted successfully",
//         success: true,
//         cart
//     });
// };

//delete cart item 
export const deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('id', id)
        let cart = await Cart.findOne({ userId: req.user.userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        //find cart item and delete
        cart.items = cart.items.filter(item => item.productId.toString() !== id);

        await cart.save();

        console.log('->Cart item deleted', cart)
        res.status(200).json({
            message: "->  Cart Item is delete successfully",
            success: true,
            cart
        })


    } catch (error) {
        console.log("->Error: cart item Not deleted", error)

        res.status(400).json({
            message: "->  Cart Item not deleted",
            success: false,
            error
        })
    }
}
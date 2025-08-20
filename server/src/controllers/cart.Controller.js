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
        console.log('-> Cart body', req.body)

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

//update product quantity in cart 
export const updateProductQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const productId = id;
        let cart = await Cart.findOne({ userId: req.user.userId, items: { $elemMatch: { productId } } });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        //find cart item and update
        cart.items = cart.items.map(item => item.productId.toString() === productId ? { ...item, quantity: item.quantity + 1 } : item);

        await cart.save();

        console.log('->Cart item updated', cart)
        res.status(200).json({
            message: "->  Cart Item is updated successfully",
            success: true,
            cart
        })
    } catch (error) {
        console.log("->Error: cart item Not updated", error)

        res.status(400).json({
            message: "->  Cart Item not updated",
            success: false,
            error
        })
    }
}

//decrement the product quantity
export const decrementProductQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const productId = id;
        let cart = await Cart.findOne({ userId: req.user.userId, items: { $elemMatch: { productId } } });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        //find cart item and update
        cart.items = cart.items.map(item => {
            if (item.productId.toString() === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }
            } else {
                return item
            }
        });

        await cart.save();

        console.log('->Cart item updated', cart)
        res.status(200).json({
            message: "->  Cart Item is updated successfully",
            success: true,
            cart
        })
    } catch (error) {
        console.log("->Error: cart item Not updated", error)

        res.status(400).json({
            message: "->  Cart Item not updated",
            success: false,
            error
        })
    }
}

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
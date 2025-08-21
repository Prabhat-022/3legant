import {Order} from "../model/order.Model.js";

// -------------------- USER ROUTES --------------------

// Create new order
export const createOrder = async (req, res) => {
    try {
        const {products, totalAmount, address, paymentDetails} = req.body
        
        console.log("body", req.body)

        
        const order = new Order({
            userId: req.user.userId,  // coming from auth/session ideally
            products,
            totalAmount,
            address,
            paymentDetails
        });
        await order.save();
        res.status(201).json({ message: "Order placed successfully", order });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all orders for a specific user
export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.userId })
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Cancel an order (only if not shipped)
export const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (!order) return res.status(404).json({ message: "Order not found" });

        if (order.status === 'shipped' || order.status === 'delivered') {
            return res.status(400).json({ message: "Cannot cancel after shipping" });
        }

        order.status = 'cancelled';
        await order.save();

        res.json({ message: "Order cancelled successfully", order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// -------------------- ADMIN ROUTES --------------------

// Get all orders (admin only)
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('userId')
            .populate('products.product');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update order status (admin only)
export const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body; // e.g., processing, shipped, delivered
        const order = await Order.findByIdAndUpdate(
            req.params.orderId,
            { status },
            { new: true }
        );
        if (!order) return res.status(404).json({ message: "Order not found" });

        res.json({ message: "Order status updated", order });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete order (admin only)
export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);
        if (!order) return res.status(404).json({ message: "Order not found" });

        res.json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


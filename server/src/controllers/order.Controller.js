import { Order } from "../model/order.Model";


export const createOrder = async (req, res) => {
    try {
        const { userId, items } = req.body;
        const order = await Order.create({ userId, items });
        res.status(201).json({ order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
import express from "express";
import { createOrder, getOrders, getAllOrders, cancelOrder, updateOrderStatus, deleteOrder } from "../controllers/order.Controller.js";
import authenticate from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post('/user/create', authenticate, createOrder);
router.get('/user', authenticate, getOrders);

router.put('/user/update/:orderId', authenticate, updateOrderStatus);
router.delete('/user/delete/:orderId', authenticate, deleteOrder);

router.get('/admin/all', getAllOrders);
router.get('/admin/cancel/:orderId', cancelOrder);

export default router;
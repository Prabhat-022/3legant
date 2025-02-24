import express from "express";
import { AddItemToCart, getAllShoppingCart, removeItemFromCart } from '../controllers/cartControllers.js';

const router = express.Router();

router.route('/').post(AddItemToCart)
router.route('/:userId').post(getAllShoppingCart)
router.route('/:productId').delete(removeItemFromCart)

export default router
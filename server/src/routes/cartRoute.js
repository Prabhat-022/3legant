import express from 'express';
import { addItemInCart, deleteCartItem, getAllTheCartItem } from '../controllers/cart.Controller.js';
import authenticate from '../middleware/isAuthenticated.js';
const router = express.Router();

router.route('/cart').get(authenticate, getAllTheCartItem);

//this cart routes is not working 
router.route('/cart').post(authenticate, addItemInCart);
router.route('/cart/:id').delete(authenticate, deleteCartItem);


export default router; 
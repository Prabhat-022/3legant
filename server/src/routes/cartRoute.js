import express from 'express';
import { addItemInCart, deleteCartItem, getAllTheCartItem, decrementProductQuantity, updateProductQuantity } from '../controllers/cart.Controller.js';
import authenticate from '../middleware/isAuthenticated.js';
const router = express.Router();

router.route('/cart').get(authenticate, getAllTheCartItem);

router.route('/cart').post(authenticate, addItemInCart);
router.route('/cart/:id').delete(authenticate, deleteCartItem);
router.route('/cart/:id').post(authenticate, updateProductQuantity);
router.route('/cart/:id').put(authenticate, decrementProductQuantity);


export default router; 
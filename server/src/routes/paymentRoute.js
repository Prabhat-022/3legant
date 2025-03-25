import express from 'express';
import payment from '../controllers/payment.controller.js';
import authenticate from '../middleware/isAuthenticated.js';
const router = express.Router();


router.route('/payment').post(authenticate, payment);


export default router;
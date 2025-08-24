import express from 'express';

import authenticate from '../middleware/isAuthenticated.js';
import { upload } from '../middleware/multer.middleware.js';
import { addNewProducts, deleteProducts, getAllTheProducts, getSingleProduct, updateProducts, } from '../controllers/product.Controller.js';
import isAdmin from '../middleware/isAdmin.js';

const router = express.Router();

router.route('/products').get(getAllTheProducts);
router.route('/products/:id').get(getSingleProduct);

router.route("/product").post(
    upload.array('image', 10), authenticate, isAdmin, addNewProducts)
//these routes is not working 
router.route('/product/:id').put(authenticate, isAdmin, updateProducts);
router.route('/product/:id').delete(authenticate, isAdmin, deleteProducts);

export default router;
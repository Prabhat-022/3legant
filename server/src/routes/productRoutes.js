import express from "express";
import { AddProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct } from "../controllers/productControllers.js";

import { upload } from "../middleware/multer.js";

const router = express.Router();

router.route("/add-product").post(
    upload.array('image', 10), AddProduct)

router.route("/").get(GetAllProducts)
router.route("/update-product/:id").post(UpdateProduct)
router.route("/delete-product?id").delete(DeleteProduct)
router.route("/get-product-by-id").post(GetProductById)

export default router
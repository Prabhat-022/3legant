import express from "express";
import { AddProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct, updateProductQuantity } from "../controllers/productControllers.js";

import { upload } from "../middleware/multer.js";

const router = express.Router();

router.route("/add-product").post(
    upload.array('image', 10), AddProduct)

router.route("/").get(GetAllProducts)
router.route("/:id").post(GetProductById)
router.route("/:id").put(UpdateProduct)
router.route("/:id").delete(DeleteProduct)
router.route("/update-quantity").patch(updateProductQuantity)

export default router
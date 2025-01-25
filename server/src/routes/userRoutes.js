import { Login, logOut, Register } from "../controllers/userControllers.js";
import express from "express";
// import {upload} from "../middleware/multer.js";

const router = express.Router()
// router.route("/register").post(
//     upload.fields([
//         {
//             name: "avatar",
//             maxCount: 1
//         },
//         {
//             name: "coverImage",
//             maxCount: 1
//         }
//     ]),
//     Register);

router.route("/register").post(Register);
router.route("/login").post(Login);

router.route('/logout').get(logOut)

export default router;
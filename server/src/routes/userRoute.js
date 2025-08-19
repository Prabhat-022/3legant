import express from 'express';
import { updateUserInformations, setProfilePicture, userLogin, userRegister, userLogOut,setnewslatterEmail } from '../controllers/user.Controller.js'
import authenticate from '../middleware/isAuthenticated.js';
import { generateOtp } from '../controllers/user.Controller.js';
import { forgotPassword } from '../controllers/user.Controller.js';
import { upload } from '../middleware/multer.middleware.js';
import { verifyOtp } from '../controllers/user.Controller.js';
import { apiRateLimit } from '../middleware/api_rate_limit.js';
const router = express.Router();


router.route('/register').post(userRegister);
router.route('/login').post(apiRateLimit, userLogin)

router.route('/upload-profile-img').put(
  upload.single(
    "image"
  ),
  authenticate, setProfilePicture);
router.route('/update-user-info').put(authenticate, updateUserInformations)
router.route('/generate-otp').get(generateOtp)
router.route('/verify-otp').post(verifyOtp)
router.route('/forgot-password').post(forgotPassword)
router.route('/logout').post(authenticate, userLogOut)
router.route('/set-newslatter-email').post(authenticate, setnewslatterEmail)

export default router;
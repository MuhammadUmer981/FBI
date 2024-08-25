const express = require('express');
const { signup } = require('../controller/signupController');
const { login } = require('../controller/loginController');
const { resetPassword } = require('../controller/passwordResetController');
const { uploadImages } = require('../controller/userController');
const { verifyOtp } = require('../controller/otpController');
const upload = require('../middleware/multerConfig')

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/reset-password', resetPassword);
router.post('/verify-otp', verifyOtp);
router.post('/upload-images/:userId', upload.array('images', 5), uploadImages);

module.exports = router;

const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const uploadMiddleware = require('../middleware/upload-middleware');
const { uploadImage } = require('../controller/image');

const router = express.Router();


router.get('/welcome', authMiddleware, (req, res) => {
    const {name,userId,role } = req.userInfo;
    res.json({
        message: 'Welcome to Home',
        user: {
            _id: userId,
            name,
            role
        }
    })
});


router.post("/upload",authMiddleware,uploadMiddleware.single("image"), uploadImage);


module.exports = router;
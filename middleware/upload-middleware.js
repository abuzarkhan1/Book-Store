const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const checkFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
         cb(null,true);
    }else{
        cb(new Error('Only image files are allowed!'));
    }
    
}

module.exports = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: checkFilter,
 });
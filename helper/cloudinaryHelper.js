const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = async (filePath) => {
    try{
        const result = await cloudinary.v2.uploader.upload(filePath);
        return {
            url: result.secure_url,
            public_id: result.public_id,
        }
    }catch(err){
        console.log(err);
    }
};

module.exports = {uploadToCloudinary};
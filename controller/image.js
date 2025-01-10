const { uploadToCloudinary } = require("../helper/cloudinaryHelper");
const Image = require("../models/Image");

const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            console.log("No file uploaded");
            return res.status(400).json({
                success: false,
                message: "No image provided",
            });
        }

        console.log("File uploaded: ", req.file);

        const { url, publicId } = await uploadToCloudinary(req.file.path);
        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId,
        });

        await newlyUploadedImage.save();

        res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
            data: newlyUploadedImage,
        });
    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to upload image",
        });
    }
};

module.exports = {uploadImage};
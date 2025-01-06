const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true , "Book title is required"],
        trim: true,
        maxLenghth: [100, "Book title cannot be more than 100 characters"]
    },
    author: {
        type: String,
        required: [true, "Author name is required"],
        trim: true,
    },
    year:{
        type: Number,
        required: [true, "Year of publication is required"],
        min: [1000, " Year must be at least 1000"],
        max: [new Date().getFullYear(), "Year cannot be in future"]
    },
    createdAt:
    {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', BookSchema);
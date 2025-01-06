const Book = require("../models/book");
const addBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "New Book created successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const getAllBook = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    res.json({
      success: true,
      message: "All books fetched successfully",
      data: allBooks,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.json({
      success: true,
      message: "Book fetched successfully",
      data: book,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.json({
      success: true,
      message: "Book deleted successfully",
      data: book
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllBook, getSingleBook, addBook, updateBook, deleteBook };

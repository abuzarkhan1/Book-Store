const express = require('express');
const { getAllBook, getSingleBook, addBook, updateBook, deleteBook } = require('../controller/book');

const router = express.Router();

// all routes defined for books

router.post('/add', addBook);
router.get('/get',getAllBook);
router.get('/get/:id',getSingleBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id',deleteBook);


module.exports = router;
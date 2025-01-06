require('dotenv').config()
const express = require('express');
const connectDB = require('./database/db');
const bookRoutes = require('./routes/book-routes');
const userRoutes = require('./routes/user-routes');


const app = express();

const port = process.env.PORT;


connectDB();
app.use(express.json());



// All routes
app.use("/api/users", userRoutes);
app.use('/api/books', bookRoutes);






app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
const express = require("express");
const {
  addUser,
  getAllUsers,
  getSingleUserById,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
} = require("../controller/user.js");

const router = express.Router();

// auth routes
router.post('/register',registerUser);
router.post('/login',loginUser);

// // user routes
// router.post("/add", addUser);
// router.get("/get", getAllUsers);
// router.get("/get/:id", getSingleUserById);
// router.get("/update/:id", updateUser);
// router.get("/delete/:id", deleteUser);

module.exports = router;

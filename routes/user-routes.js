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

router.post('/register',registerUser);
router.put('/login',loginUser);
router.post("/add", addUser);
router.post("/get", getAllUsers);
router.get("/get/:id", getSingleUserById);
router.get("/update/:id", updateUser);
router.get("/delete/:id", deleteUser);

module.exports = router;

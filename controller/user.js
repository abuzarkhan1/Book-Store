// register user
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const checkExistingUser = await User.findOne({
      $or: [{ name }, { email }],
    });
    if (checkExistingUser) {
      return res.json({
        success: false,
        message:
          "User already exists either with same name or email . Please try another name or email",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newUser.save();

    if (newUser) {
      return res.json({
        success: true,
        message: "User registered successfully",
        data: newUser,
      });
    } else {
      return res.json({ success: false, message: "Failed to register user" });
    }
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message || "Registration Failed" });
  }
};

// login
const loginUser = async (req,res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if(!isPasswordMatched) {
      return res
      .status(404)
      .json({ success: false, message: "Password Not Matched" });
    }

    const accessToken =  jwt.sign({
      userId: user._id,
      name: user.name,
      role: user.role,
    },process.env.JWT_SECRET_KEY,{
      expiresIn: "15m",
    });

    res.status(200).json({
      success: true,
      message: "Login Successful",
      accessToken,

    });
    
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message || "login Failed" });
  }
};

const addUser = async () => {

};

const getAllUsers = async () => {};

const getSingleUserById = async () => {};

const updateUser = async () => {};

const deleteUser = async () => {};

module.exports = {
  registerUser,
  loginUser,
  addUser,
  getAllUsers,
  getSingleUserById,
  updateUser,
  deleteUser,
};

const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const asyncHandler = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Please provide email and password" });
    return;
  }

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  jwt.sign({ id: user.id }, "secret_key", (err, token) => {
    if (err) {
      next(err);
      return;
    }
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({ message: "Login successful" });
  });
});

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const hashPsw = await bcrypt.hash(password, 10);
  console.log(hashPsw);
  await User.create({ name, email, phone, password: hashPsw });
  res.status(201).json({
    message: "User registered successfully",
    user: {
      name,
      email,
      phone,
    },
  });
});

module.exports = {
  loginUser,
  registerUser,
};

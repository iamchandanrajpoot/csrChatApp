const asyncHandler = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const autherizeUser = asyncHandler(async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "you are not logged in",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "fail",
        message: "you are not logged in",
      });
    }
    const user = User.findByPk(decoded.id);
    req.user = user;
    next();
  });
});

module.exports = {
  autherizeUser,
};

const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
//   console.log("headersss", authHeader);

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Acess Denied. Token is not provided" });
  }

  // decoded this token
  try {
    const extractTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(extractTokenInfo);

    req.userInfo = extractTokenInfo;
    next();
  } catch (err) {
    return res
      .status(500) 
      .json({ success: false,
              message: "Acess Denied. Token is not provided" });
  }
  next();
};

module.exports = middleware;

const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(403).json({ message: "Token is required for authentication!" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token!" });
  }
};

module.exports = verifyToken;
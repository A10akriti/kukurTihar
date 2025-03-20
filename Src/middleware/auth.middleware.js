const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get the token from headers
  if (!token) return res.status(401).json({ msg: "Unauthorized: No token provided" });

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ msg: "Forbidden: Invalid token" });

    req.user = decoded; // Attach user info to request
    next();
  });
};

const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Forbidden: Admins only" });
  }
  next();
};

module.exports = { verifyToken, verifyAdmin };

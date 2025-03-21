const jwtToken = require("jsonwebtoken");
const usersrv = require("../service/auth.service");

const AuthCheck = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    if (!token) throw { msg: "Token not provided" };

    token = token.split(" ").pop();

    let response = jwtToken.verify(token, process.env.JWT_KEY);
    let UserDetails = await usersrv.findUserById(response.id);

    if (UserDetails) {
      req.user = UserDetails;
      next();
    } else {
      throw { msg: "Unauthorized" };
    }
  } catch (error) {
    next({ msg: "AuthCheck failed", error });
  }
};

module.exports = AuthCheck;

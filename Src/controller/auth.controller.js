const usersrv = require("../service/auth.service");
const bcrypt = require("bcryptjs");
const jwtToken = require("jsonwebtoken");

class AuthController {
  login = async (req, res, next) => {
    try {
      let payload = req.body;
      await usersrv.login(payload);

      let response = await usersrv.findUserByEmail(payload.email);
      
      if (response) {
        let checkPass = bcrypt.compareSync(payload.password, response.password);
        if (!checkPass) throw { msg: "Credential does not match" };

        let accessToken = jwtToken.sign(
          { id: response._id, role: response.role }, 
          process.env.JWT_KEY,
          { expiresIn: "1 day" }
        );

        res.json({
          data: {
            AccessToken: accessToken,
            data: response,
          },
          msg: "Login successful",
        });
      } else {
        throw { msg: "Credential does not match" };
      }
    } catch (error) {
      console.log("login", error);
      next({ msg: error, code: 401, meta: null });
    }
  };

  register = async (req, res, next) => {
    try {
      let data = req.body;
      await usersrv.registerValidation(data);

      data.role = data.role || "user"; 

      let response = await usersrv.createUser(data);
      if (response) {
        res.json({
          data: response,
          msg: "Registered Successfully",
          code: 200,
          meta: null,
        });
      }
    } catch (error) {
      console.log("register", error);
      next({ msg: error });
    }
  };

  getAllUsers = async (req, res, next) => {
    try {
      let users = await usersrv.findAllUsers();
      res.json({ data: users, msg: "Users retrieved successfully" });
    } catch (error) {
      next({ msg: error });
    }
  };
}

const authctrl = new AuthController();
module.exports = authctrl;

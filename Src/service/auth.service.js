const bcrypt = require("bcryptjs");
const UserModel = require("../model/auth.model");
const Joi = require("joi");

class AuthService {
  registerValidation = (data) => {
    try {
      let rules = Joi.object({
        fname: Joi.string().required(),
        lname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        phone: Joi.number().optional(),
        role: Joi.string().valid("user", "admin").optional(),
      });

      let response = rules.validate(data);
      if (!response.error) {
        return response;
      } else {
        throw response.error;
      }
    } catch (exception) {
      throw exception;
    }
  };

  findUserByEmail = async (email) => {
    try {
      return await UserModel.findOne({ email });
    } catch (exception) {
      throw exception;
    }
  };

  createUser = async (data) => {
    try {
      data.password = bcrypt.hashSync(data.password, 10);
      const newUser = new UserModel(data);
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  };

  findAllUsers = async () => {
    try {
      return await UserModel.find({}, { password: 0 });
    } catch (exception) {
      throw exception;
    }
  }
}

const usersrv = new AuthService();
module.exports = usersrv;

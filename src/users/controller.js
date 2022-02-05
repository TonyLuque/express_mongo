const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const APP_SECRET = process.env.SECRET;
const User = require("./model");

async function create(req) {
  try {
    console.log(req.body);
    let user = new User({
      email: req.body.email,
      password: req.body.password,
    });
    let result = await user.save();
    return result;
  } catch (error) {
    console.error("Error: ", error.message);
    throw new Error(error);
  }
}

async function login(req) {
  try {
    console.log(req.body);
    return "logueo correcto";
  } catch (error) {
    console.error("Error: ", error.message);
    throw new Error(error);
  }
}

async function getAll(req) {
  try {
    const result = await User.find({});
    return result;
  } catch (error) {
    console.error("Error: ", error.message);
    throw new Error(error);
  }
}

module.exports = {
  login,
  create,
  getAll,
};

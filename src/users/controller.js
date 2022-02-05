const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const APP_SECRET = process.env.SECRET;
const User = require("./model");
const Profile = require("../profile/model");

async function create(req) {
  try {
    let profile = await Profile.create({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      lastName: req.body.lastName,
      secondLastName: req.body.secondLastName,
    });
    let user = await User.create({
      email: req.body.email,
      password: req.body.password,
      profile: profile._id,
    });
    console.log("Se creo el usuario: ", {
      id: user._id,
      nombre: profile.firstName,
      email: user.email,
    });
    return "User create success";
  } catch (error) {
    console.error("Error create controller | ", error.message);
    throw new Error(error.message);
  }
}

async function login(req) {
  try {
    const { user_email, user_password } = req.body;
    console.log(req.body);
    const user = await User.get({ email: user_email });
    if (user.password === user_password) {
      return true;
    } else {
      return false;
    }
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

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

async function login(req, res) {
  try {
    console.log(req.body);
    res.status(200).json("logueo correcto");
  } catch (error) {
    console.error(error);
    // throw new Error(error);
  }
}

async function getAll(req, res) {
  try {
    const result = await User.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

module.exports = {
  login,
  create,
  getAll,
};

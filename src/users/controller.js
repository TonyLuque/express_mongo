const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const APP_SECRET = process.env.SECRET;
const User = require("./model");
const Profile = require("../profile/model");

async function create(req) {
  try {
    console.log(req.body);
    const userExist = User.findOne({ email: req.body.email });
    if (userExist) {
      throw new Error("User already exist");
    }

    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log("====", hashPassword);
    let profile = await Profile.create({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      lastName: req.body.lastName,
      secondLastName: req.body.secondLastName,
    });
    let user = await User.create({
      email: req.body.email,
      password: hashPassword,
      profile: profile._id,
    });
    console.log("Se creo el usuario: ", {
      id: user._id,
      nombre: profile.firstName,
      email: user.email,
    });
    return "User create success";
  } catch (error) {
    console.error("Error create controller | ", error);
    throw new Error(error.message);
  }
}

async function login(req, res) {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const samePassword = await bcrypt.compare(password, user.password);

    if (samePassword) {
      console.log("estas logueado");
      return "token";
    } else {
      console.log("los pass no coinciden");
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
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

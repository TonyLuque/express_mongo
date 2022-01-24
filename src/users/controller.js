const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const APP_SECRET = process.env.SECRET;
const User = require("./model");

async function create(req, res) {
  try {
    console.log(req.body);
    let user = new User({
      email: req.body.email,
      password: req.body.password,
    });
    let result = await user.save();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    console.log(req.body);
    res.status(200).json("logueo correcto");
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
}

async function getAll(req, res) {
  try {
    const result = await User.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  login,
  create,
  getAll,
};

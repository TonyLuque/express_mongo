const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const APP_SECRET = process.env.SECRET;
const User = require("./model");
const Profile = require("../profile/model");

async function create(req) {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      throw new Error("User already exist");
    }

    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
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

async function login(req) {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) throw new Error("Las credenciales no coincides");

    const samePassword = await bcrypt.compare(password, user.password);

    if (samePassword) {
      const payload = {
        email: user.email,
      };
      const token = jwt.sign(payload, APP_SECRET, {
        expiresIn: 1440,
      });
      console.log(`El usuario con el email ${user.email} se logueo con exito`);
      return token;
    } else {
      console.log(`Las credenciales del usuario ${user.email} no coinciden`);
      throw new Error("Las credenciales no coinciden");
    }
  } catch (error) {
    console.error("Error controller login |", error);
    throw new Error(error.message);
  }
}

async function changePassword(req) {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    const userExist = await User.findOneAndUpdate(
      { email: req.body.email },
      { password: hashPassword }
    );

    if (userExist) {
      return "Passwor change succes";
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error controller change password |", error);
    throw new Error(error.message);
  }
}

async function getAll(req) {
  try {
    return await User.getAll({});
  } catch (error) {
    console.error("Error controller getAll |", error);
    throw new Error(error);
  }
}

async function get(req) {
  try {
    return await User.get(req.params.id);
  } catch (error) {
    console.error("Error controller get |", error);
    throw new Error(error);
  }
}

module.exports = {
  login,
  create,
  getAll,
  changePassword,
  get,
};

const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const APP_SECRET = process.env.SECRET;
const User = require("./model");
const Profile = require("../profile/model");

async function create(req) {
  try {
    const userExist = User.findOne({ email: req.body.email });
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
      console.log(`Las credenciales del usuario ${user.email} no coincides`);
      throw new Error("Las credenciales no coincides");
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
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

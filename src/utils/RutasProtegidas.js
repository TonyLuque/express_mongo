const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const APP_SECRET = process.env.SECRET;

const rutasProtegidas = express.Router();

rutasProtegidas.use((req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, APP_SECRET, (err, decoded) => {
      if (err) {
        return res.json({ mensaje: "Token not valid" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: "Token not found.",
    });
  }
});

module.exports = rutasProtegidas;

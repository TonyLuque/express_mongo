const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

require("./database");

const userRoutes = require("./users/view");

app.use("/user", userRoutes);

app.get("/*", (req, res) => {
  res.send("Hola Juy");
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

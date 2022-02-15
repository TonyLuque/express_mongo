const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("dotenv").config();
require("./database");

const PORT = process.env.PORT;
const userRoutes = require("./users/view");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/"));
app.use("/user", userRoutes);

// app.get("/", function (req, res) {
//   res.render("index.html");
// });

app.get("/*", (req, res) => {
  res.send("Hola Juy");
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

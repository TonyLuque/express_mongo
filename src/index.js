const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const RutasProtegidas = require("./utils/RutasProtegidas");
const path = require("path");

require("dotenv").config();
require("./database");

// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API para aprender Exprres-Mongo",
      description: "Es un proyecto de aprendizaje",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://express-mo.herokuapp.com/api/",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./*/view.js")}`],
};

const PORT = process.env.PORT;
const userRoutes = require("./users/view");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

app.use("/api/user", userRoutes);

app.get("/", RutasProtegidas, function (req, res) {
  console.log(req.decoded);
  res.json("oa");
});

app.get("/*", (req, res) => {
  res.send("Hola Juy");
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

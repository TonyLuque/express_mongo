const { Router } = require("express");
const router = Router();

const { login } = require("./controller");

router.get("/", (req, res) => {
  res.send("raiz user");
});

router.post("/login", login);

module.exports = router;

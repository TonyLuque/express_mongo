const { Router } = require("express");
const router = Router();

const { login, create, getAll } = require("./controller");

router.get("/", getAll);

router.post("/create", create);
router.post("/login", login);

module.exports = router;

const { Router } = require("express");
const router = Router();

const { login, create, getAll } = require("./controller");

router.get("/", (req, res) => {
  try {
    const result = getAll(req);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
});

router.get("/login", (req, res) => {
  //res.render("login.html");
  res.status(200).json('get login')
});

router.post("/login", async (req, res) => {
  const result = await login(req.body);
  res.status(200).json("login success");
});

router.post("/create", async (req, res) => {
  try {
    const result = await create(req);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error /create view (users) | ", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

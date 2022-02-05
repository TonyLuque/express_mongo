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

router.post("/create", (req, res) => {
  const result = create(req.body);
  res.status(201).json(result);
});

router.post("/login", (req, res) => {
  const result = login(req.body);
  res.status(200).json(result);
});

module.exports = router;

const { Router } = require("express");
const router = Router();

const { login, create, getAll } = require("./controller");

router.get("/", getAll);

router.post("/create", async (req, res) => {
  try {
    const result = await create(req);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error /create view (users) | ", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await login(req);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error /login view (users) | ", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

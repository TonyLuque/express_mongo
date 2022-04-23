const { Router } = require("express");
const router = Router();
const RutasProtegidas = require("../utils/RutasProtegidas");
const { login, create, getAll, changePassword, get } = require("./controller");

router.get("/", async (req, res) => {
  try {
    const result = await getAll(req);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error view getAll |", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await get(req);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error /:id view (user) |", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const result = await create(req);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error /create view (users) |", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await login(req);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error /login view (users) |", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/change_password", async (req, res) => {
  try {
    const result = await changePassword(req);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error /change_password view (users) |", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

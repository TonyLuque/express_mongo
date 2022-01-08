const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("raiz user");
});

module.exports = router;

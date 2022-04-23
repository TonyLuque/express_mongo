const { Router } = require("express");
const rutasProtegidas = require("../utils/RutasProtegidas");
const router = Router();

router.put("/:id", rutasProtegidas, async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.status(200).json("profile update");
});

module.exports = router;

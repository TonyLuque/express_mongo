const { Router } = require("express");
const router = Router();
const RutasProtegidas = require("../utils/RutasProtegidas");
const { login, create, getAll, changePassword } = require("./controller");

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: User's name
 *        age:
 *          type: number
 *          description: User's age
 */

/**
 * @swagger
 * /api/user/:
 *  get:
 *    summary: Get all users
 *    tags: [User]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
router.get("/", RutasProtegidas, async (req, res) => {
  try {
    const result = await getAll(req);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error view getAll | ", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/login", (req, res) => {
  //res.render("login.html");
  res.status(200).json("get login");
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

/**
 * @swagger
 * /api/user/login:
 *  post:
 *    summary: Get all users
 *    tags: [User]
 *    requestBody:
 *      description: Optional description in *Markdown*
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               description: User email
 *             password:
 *               type: string
 *               description: User password
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                token:
 *                  type: string
 *                  description: Token
 */
router.post("/login", async (req, res) => {
  try {
    const result = await login(req);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error /login view (users) | ", error);
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

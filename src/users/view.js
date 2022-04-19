const { Router } = require("express");
const router = Router();
const RutasProtegidas = require("../utils/RutasProtegidas");
const { login, create, getAll, changePassword, get } = require("./controller");

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
router.get("/", async (req, res) => {
  try {
    const result = await getAll(req);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error view getAll |", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/user/{id}:
 *  get:
 *    summary: Get all users
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
router.get("/:id", async (req, res) => {
  try {
    const result = await get(req);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error /:id view (user) |", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/user/create:
 *  post:
 *    summary: Create a user
 *    tags: [User]
 *    requestBody:
 *      description: Create a user
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
 *             firstName:
 *               type: string
 *               description: User name
 *             lastName:
 *               type: string
 *               description: User lastname
 *           example:
 *             email: cosme@example.com
 *             password: pass1234
 *             firstName: cosme
 *             lastName: fulanito
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
router.post("/create", async (req, res) => {
  try {
    const result = await create(req);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error /create view (users) |", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/user/login:
 *  post:
 *    summary: Login
 *    tags: [User]
 *    requestBody:
 *      description: Login
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
    console.error("Error /login view (users) |", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/user/change_password:
 *  post:
 *    summary: Change user's password
 *    tags: [User]
 *    requestBody:
 *      description: Change user's password
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
 *        description: Change password success
 *        content:
 *          text/plain:
 *            schema:
 *              type: string
 *              example: "Passwor change succes"
 *
 */
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

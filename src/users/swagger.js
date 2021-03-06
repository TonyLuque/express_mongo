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

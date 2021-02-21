/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *    tags:
 *      - User
 *    name: Signup
 *    summary: Signup a user in a system
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          type: object
 *          properties:
 *            firstName:
 *              type: string
 *            lastName:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *              format: password
 *            required:
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 */

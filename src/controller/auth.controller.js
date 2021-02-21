/**
 * Auth controller class
 */
class AuthController {
	/**
	 * * Signup a user
	 * @param  {object} req
	 * @param  {object} res
	 * @returns {object} object
	 */
	static async signup(req, res) {
		res.send('signup');
	}
}

export default AuthController;

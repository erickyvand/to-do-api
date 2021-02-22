import { CREATED, OK } from 'http-status';
import BcryptService from '../services/bcrypt.service';
import ResponseService from '../services/response.service';
import TokenService from '../services/token.service';
import UserService from '../services/user.service';

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
		const { firstName, lastName, email, password } = req.body;

		const user = await UserService.createUser({
			firstName,
			lastName,
			email,
			password: BcryptService.hashPassword(password),
		});

		const userData = { ...user.dataValues };
		delete userData.password;

		ResponseService.setSuccess(CREATED, 'Created successfully', userData);
		return ResponseService.send(res);
	}

	/**
	 * * Login a user
	 * @param  {object} req
	 * @param  {object} res
	 * @returns {object} object
	 */
	static async login(req, res) {
		ResponseService.setSuccess(OK, 'Successfully logged in', {
			user: req.userInfo,
			token: TokenService.generateToken(req.userInfo),
		});
		return ResponseService.send(res);
	}
}

export default AuthController;

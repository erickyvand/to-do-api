import { CONFLICT, UNAUTHORIZED } from 'http-status';
import BcryptService from '../services/bcrypt.service';
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

/**
 * * Check if user exists
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @returns {object} object
 */
export const checkUserExist = async (req, res, next) => {
	const user = await UserService.findUserByProperty({ email: req.body.email });

	if (user) {
		ResponseService.setError(CONFLICT, 'User with this email already exists');
		return ResponseService.send(res);
	}
	next();
};

/**
 * * Check user credentials
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @returns {object} object
 */
export const checkUserCredentials = async (req, res, next) => {
	const { email, password } = req.body;
	const user = await UserService.findUserByProperty({ email });

	if (!user || !BcryptService.comparePassword(password, user.password)) {
		ResponseService.setError(UNAUTHORIZED, 'Invalid email or password');
		return ResponseService.send(res);
	}
	const userData = { ...user.dataValues };
	delete userData.password;
	req.userInfo = userData;
	next();
};

import { CONFLICT } from 'http-status';
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

export const checkUserExist = async (req, res, next) => {
	const user = await UserService.findUserByProperty({ email: req.body.email });

	if (user) {
		ResponseService.setError(CONFLICT, 'User with this email already exists');
		return ResponseService.send(res);
	}
	next();
};

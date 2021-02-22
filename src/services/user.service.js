import model from '../database/models';

const { User } = model;

/**
 * User Service class
 */
class UserService {
	/**
	 * Create a user
	 * @param  {object} data
	 * @returns {object} object
	 */
	static createUser(data) {
		return User.create(data);
	}

	static findUserByProperty(property) {
		return User.findOne({ where: property });
	}
}

export default UserService;

import faker from 'faker';
import BcryptService from '../../services/bcrypt.service';
import UserService from '../../services/user.service';

const password = faker.internet.password();
export const user = {
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	email: faker.internet.email(),
	password,
	confirmPassword: password,
};

const newUser = {
	id: faker.random.number({ min: 90, max: 100 }),
	firstName: faker.name.findName(),
	lastName: faker.name.lastName(),
	email: faker.internet.email(),
	password: BcryptService.hashPassword(password),
};

export const userToLogin = {
	email: newUser.email,
	password,
};

export const invalidCredentials = {
	email: faker.internet.email(),
	password,
};

export const createUsers = async () => {
	await UserService.createUser(newUser);
};

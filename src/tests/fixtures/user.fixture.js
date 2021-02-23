import faker from 'faker';
import BcryptService from '../../services/bcrypt.service';
import TokenService from '../../services/token.service';
import UserService from '../../services/user.service';

const password = faker.internet.password();
export const user = {
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	email: faker.internet.email(),
	password,
	confirmPassword: password,
};

export const newUser = {
	id: faker.random.number({ min: 90, max: 100 }),
	firstName: faker.name.findName(),
	lastName: faker.name.lastName(),
	email: faker.internet.email(),
	password: BcryptService.hashPassword(password),
};

export const loggedInToken = TokenService.generateToken(newUser);
export const expiredToken =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTQsImZpcnN0TmFtZSI6Ikxlb25hIERhcmUiLCJsYXN0TmFtZSI6Ild5bWFuIiwiZW1haWwiOiJLYXNzYW5kcmEuU2NoYW1iZXJnZXI1OUB5YWhvby5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ4R1QwU0l4blFNc2FaYnd2MzBVNFUuSlovMVM4Q243NlNVeVp0TC42elNybkEzUWxuRG9RUyIsImlhdCI6MTYxNDA2NjMzOSwiZXhwIjoxNjE0MDY2Mzk5fQ.RLlCh3qQrv79OjLmCnyac_HBWIsnVhbBMVw-7ER6F5I';

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

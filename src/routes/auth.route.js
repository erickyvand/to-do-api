import { Router } from 'express';
import AuthController from '../controller/auth.controller';
import {
	checkUserCredentials,
	checkUserExist,
} from '../middlewares/user.middleware';
import {
	validateLoginBody,
	validateSignupBody,
} from '../validations/user.validation';

const router = Router();

router.post(
	'/signup',
	validateSignupBody,
	checkUserExist,
	AuthController.signup
);
router.post(
	'/login',
	validateLoginBody,
	checkUserCredentials,
	AuthController.login
);

export default router;

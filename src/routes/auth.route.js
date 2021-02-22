import { Router } from 'express';
import AuthController from '../controller/auth.controller';
import { checkUserExist } from '../middlewares/user.middleware';
import { validateSignupBody } from '../validations/user.validation';

const router = Router();

router.post(
	'/signup',
	validateSignupBody,
	checkUserExist,
	AuthController.signup
);

export default router;

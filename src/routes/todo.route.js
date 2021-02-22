import { Router } from 'express';
import TodoController from '../controller/todo.controller';
import authorization from '../middlewares/autorization.middleware';
import { validateTodoBody } from '../validations/todo.validation';

const router = Router();

router.post(
	'/',
	authorization,
	validateTodoBody,
	TodoController.createTodoItem
);

export default router;

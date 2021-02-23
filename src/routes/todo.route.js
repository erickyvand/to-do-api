import { Router } from 'express';
import TodoController from '../controller/todo.controller';
import authorization from '../middlewares/autorization.middleware';
import { checkTodoExists } from '../middlewares/todo.middleware';
import {
	validateTodoBody,
	validateTodoParam,
} from '../validations/todo.validation';

const router = Router();

router.post(
	'/',
	authorization,
	validateTodoBody,
	TodoController.createTodoItem
);
router.get(
	'/:todoId',
	authorization,
	validateTodoParam,
	checkTodoExists,
	TodoController.viewTodo
);
router.get('/', authorization, TodoController.viewManyTodos);

export default router;

import { Router } from 'express';
import TodoController from '../controller/todo.controller';
import authorization from '../middlewares/autorization.middleware';
import { checkTodoExists } from '../middlewares/todo.middleware';
import {
	validateTodoBody,
	validateTodoParam,
	validateUpdateTodoBody,
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
router.patch(
	'/:todoId',
	authorization,
	validateUpdateTodoBody,
	checkTodoExists,
	TodoController.updateTodoItem
);
router.delete(
	'/:todoId',
	authorization,
	checkTodoExists,
	TodoController.deleteTodoItem
);

export default router;

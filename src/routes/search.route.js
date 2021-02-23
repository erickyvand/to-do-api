import { Router } from 'express';
import authorization from '../middlewares/autorization.middleware';
import TodoController from '../controller/todo.controller';

const router = Router();

router.get('/', authorization, TodoController.searchTodoItem);

export default router;

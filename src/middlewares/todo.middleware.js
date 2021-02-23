import { NOT_FOUND, UNAUTHORIZED } from 'http-status';
import ResponseService from '../services/response.service';
import TodoService from '../services/todo.service';

/**
 * * Check if todo item exists
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @return {object} object
 */
export const checkTodoExists = async (req, res, next) => {
	const todo = await TodoService.findTodoItemByProperty({
		id: req.params.todoId,
	});

	if (!todo) {
		ResponseService.setError(NOT_FOUND, 'To do item does not exists');
		return ResponseService.send(res);
  }
  
  if (req.userData.id !== todo.userId) {
    ResponseService.setError(UNAUTHORIZED, 'Not authorized to view other\'s todo');
		return ResponseService.send(res);
  }
	req.todoItem = todo;
	next();
};

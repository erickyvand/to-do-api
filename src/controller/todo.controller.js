import { CREATED, OK } from 'http-status';
import ResponseService from '../services/response.service';
import TodoService from '../services/todo.service';

/**
 * To do controller class
 */
class TodoController {
	/**
	 * * Create to do item
	 * @param  {object} req
	 * @param  {object} res
	 * @returns {object} object
	 */
	static async createTodoItem(req, res) {
		const { title, description, priority } = req.body;
		const todo = await TodoService.createTodoItem({
			userId: req.userData.id,
			title,
			description,
			priority,
		});
		ResponseService.setSuccess(CREATED, 'To do item created', todo);
		return ResponseService.send(res);
	}

	/**
	 * * View a to item
	 * @param  {object} req
	 * @param  {object} res
	 * @returns {object} object
	 */
	static async viewTodo(req, res) {
		ResponseService.setSuccess(OK, 'To do item', req.todoItem);
		return ResponseService.send(res);
	}
}

export default TodoController;

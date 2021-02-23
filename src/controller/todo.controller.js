import { CREATED, OK } from 'http-status';
import ResponseService from '../services/response.service';
import TodoService from '../services/todo.service';
import { paginationHelper } from '../utils';

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
	 * * View a to do item
	 * @param  {object} req
	 * @param  {object} res
	 * @returns {object} object
	 */
	static async viewTodo(req, res) {
		ResponseService.setSuccess(OK, 'To do item', req.todoItem);
		return ResponseService.send(res);
	}

	/**
	 * * View many to do items
	 * @param  {object} req
	 * @param  {object} res
	 * @returns {object} object
	 */
	static async viewManyTodos(req, res) {
		const { page = 1, limit = 10 } = req.query;
		const offset = (page - 1) * limit;

		const results = await TodoService.findAndCountTodos(
			{ userId: req.userData.id },
			{ offset, limit }
		);

		ResponseService.setSuccess(OK, 'My To do items', {
			pageMeta: paginationHelper({
				count: results.count,
				rows: results.rows,
				offset,
				limit,
			}),
			rows: results.rows,
		});
		return ResponseService.send(res);
	}
}

export default TodoController;

import models from '../database/models';

const { Todo } = models;

/**
 * To do service class
 */
class TodoService {
	/**
	 * * Create to do item
	 * @param  {object} item
	 * @returns {object} object
	 */
	static createTodoItem(item) {
		return Todo.create(item);
	}

	/**
	 * * Find a to do item
	 * @param  {object} item
	 * @returns {object} object
	 */
	static findTodoItemByProperty(property) {
		return Todo.findOne({ where: property });
	}
}

export default TodoService;

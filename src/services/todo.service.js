import models from '../database/models';

const { Todo, User } = models;

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

	/**
	 * * Get and count all todo items per user
	 * @param  {object} id
	 * @param  {inter} {offset
	 * @param  {object} limit}
	 * @returns {object} object
	 */
	static findAndCountTodos(id, { offset, limit }) {
		return Todo.findAndCountAll({
			where: id,
			order: [['id', 'DESC']],
			include: {
				model: User,
				attributes: ['id', 'firstName', 'lastName'],
			},
			offset,
			limit,
		});
	}

	/**
	 * * Update to do item
	 * @param  {object} id
	 * @param  {object} property
	 * @returns {object} object
	 */
	static updateTodo(id, property) {
		return Todo.update(property, { where: id });
	}

	/**
	 * * Delete to do item
	 * @param  {object} id
	 * @returns {object} object
	 */
	static destroyTodo(id) {
		return Todo.destroy({ where: id });
	}
}

export default TodoService;

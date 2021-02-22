import models from '../database/models';

const { Todo } = models;

/**
 * To do service class
 */
class TodoService {
	static createTodoItem(item) {
		return Todo.create(item);
	}
}

export default TodoService;

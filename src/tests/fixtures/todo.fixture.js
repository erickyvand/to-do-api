import faker from 'faker';
import TodoService from '../../services/todo.service';
import { newUser } from './user.fixture';

export const todoItem = {
	title: faker.random.word(),
	description: faker.lorem.sentence(),
	priority: 'LOW',
};

const newTodoItem = {
	id: faker.random.number({ min: 90, max: 100 }),
	userId: newUser.id,
	title: faker.random.word(),
	description: faker.lorem.sentence(),
	priority: 'LOW',
};

const othersTodo = {
	id: faker.random.number({ min: 50, max: 53 }),
	userId: faker.random.number({ min: 50, max: 53 }),
	title: faker.random.word(),
	description: faker.lorem.sentence(),
	priority: 'LOW',
};

export const todoId = newTodoItem.id;
export const title = newTodoItem.title;
export const othersTodoId = othersTodo.id;

export const createTodoItems = async () => {
	await TodoService.createTodoItem(newTodoItem);
	await TodoService.createTodoItem(othersTodo);
};

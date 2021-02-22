import faker from 'faker';

export const todoItem = {
	title: faker.random.word(),
	description: faker.lorem.sentence(),
	priority: 'LOW',
};

import models from '../../database/models';

const { User, Todo } = models;

const cleanAllTables = async () => {
	await User.destroy({ where: {} });
	await Todo.destroy({ where: {} });
};

export default cleanAllTables;

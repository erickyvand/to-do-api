import models from '../../database/models';

const { User } = models;

const cleanAllTables = async () => {
	await User.destroy({ where: {} });
};

export default cleanAllTables;

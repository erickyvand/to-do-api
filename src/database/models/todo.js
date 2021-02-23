const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	/**
	 * * To do class model
	 */
	class Todo extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 * @param {object} models
		 */
		static associate(models) {
			Todo.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
		}
	}
	Todo.init(
		{
			userId: DataTypes.INTEGER,
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
			priority: DataTypes.ENUM('LOW', 'MEDIUM', 'HIGH'),
		},
		{
			sequelize,
			modelName: 'Todo',
		}
	);
	return Todo;
};

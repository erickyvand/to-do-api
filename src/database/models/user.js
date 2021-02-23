const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 * @param {object} models
		 */
		static associate(models) {
			User.hasMany(models.Todo, {
				foreignKey: 'userId',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
		}
	}
	User.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};

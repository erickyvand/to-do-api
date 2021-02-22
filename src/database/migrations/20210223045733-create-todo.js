export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('Todos', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		userId: {
			type: Sequelize.INTEGER,
		},
		title: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.TEXT,
		},
		priority: {
			type: Sequelize.ENUM('LOW', 'MEDIUM', 'HIGH'),
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
}
export async function down(queryInterface, Sequelize) {
	await queryInterface.dropTable('Todos');
}

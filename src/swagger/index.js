import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'To Do API',
		version: '1.0.0',
		description: 'This is a REST API application made with Express',
	},
	servers: [
		{
			url: 'http://localhost:4000',
			description: 'Development server',
		},
		{
			url: 'https://to-do-api-stage.herokuapp.com/',
			description: 'Production server',
		},
	],
	apis: ['./src/routes/*.js'],
};

const options = {
	swaggerDefinition,
	apis: ['./src/swagger/*.swagger.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

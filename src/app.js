import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import swaggerSpec from './swagger.json';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', routes);

export default app;

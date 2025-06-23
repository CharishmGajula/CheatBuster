// backend/swagger.js
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cheater Detection API',
      version: '1.0.0',
      description: 'API to detect if a partner is listed as a cheater',
    },
    servers: [
      {
        url: 'http://localhost:5001/api',
      },
    ],
  },
  apis: ['./backend/routes/*.js'], // IMPORTANT: adjust if needed
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

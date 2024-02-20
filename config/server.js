const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('../swagger/swagger');
const _ = require('../services/mongo');
const routes = require('../app/routes');

const app = express();

// accepting json in body
app.use(express.json());

// initializing spec
const specs = swaggerJSDoc(swaggerConfig);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', routes);



module.exports = app;

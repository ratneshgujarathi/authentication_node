const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('../swagger/swagger');
const _ = require('../services/mongo');
const routes = require('../app/routes');
const logger = require('morgan');

const app = express();

// accepting json in body
app.use(express.json());


logger.token('date', function () {
    return new Date().toString();
});
app.use(
    logger(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms'
    )
);

app.use(express.static('logs'));

const specs = swaggerJSDoc(swaggerConfig);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', routes);



module.exports = app;

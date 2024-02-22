const pathParameters = require('./parameters/path');
const queryParameters = require('./parameters/query');
const bodyParameters = require('./parameters/body');
const formDataParameters = require('./parameters/formdata');
const headersParameters = require('./parameters/headers');
const securityParameters = require('./parameters/security');

const userApis = require('./docs/userApiDocs');

const path = require('path');
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API Documentation',
    },
    paths: {
      ...userApis
    },
    components: {
      parameters: {
        pathParameters,
        queryParameters,
        bodyParameters,
        formDataParameters,
        headersParameters,
      },
      securitySchemes: securityParameters,
    },
    basePath: '/api'
  },
  // API files to include
  apis: [`${path.join(__dirname + '/../app/routes/')}*.js`, `${path.join(__dirname + '/docs/')}*.js`],
};

module.exports = swaggerOptions;


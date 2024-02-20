const path = require('path');
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Your API',
        version: '1.0.0',
        description: 'API Documentation',
      },
      basePath: '/api'
    },
    // API files to include
    apis: [`${path.join(__dirname+'/../app/routes/')}*.js`, `${path.join(__dirname+'/docs/')}*.js`],
  };

  module.exports = swaggerOptions;

  
const pathParameters = require('../parameters/path');
const queryParameters = require('../parameters/query');
const bodyParameters = require('../parameters/body');
const formDataParameters = require('../parameters/formdata');
const headersParameters = require('../parameters/headers');
const securityParameters = require('../parameters/security');

const { getSwaggerComponents } = require('../swagger-utils');

module.exports = {
    '/api/user/user': {
        get: {
            summary: 'Get all users',
            security: [{
                bearerAuth: []
              }],
            parameters: [
                ...getSwaggerComponents(queryParameters, ['search', 'limit', 'sort'])
            ],
            responses: {
                '200': {
                    description: 'List of users',
                },
            },
        },
    },
    '/api/user/user/{id}': {
        parameters: [...getSwaggerComponents(pathParameters, ['id'])],
        get: {
            summary: 'Get user details',
            security: [{
                bearerAuth: []
              }],
            responses: {
                '200': {
                    description: 'Detail of user',
                },
            },
        },
    },



}
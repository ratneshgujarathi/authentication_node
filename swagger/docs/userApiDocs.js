const pathParameters = require('../parameters/path');
const queryParameters = require('../parameters/query');
const bodyParameters = require('../parameters/body');
const formDataParameters = require('../parameters/formdata');
const headersParameters = require('../parameters/headers');
const securityParameters = require('../parameters/security');

const { getSwaggerComponents, postSwaggerComponents } = require('../swagger-utils');

module.exports = {
    '/api/user/user': {
        get: {
            summary: 'Get all users',
            tags: ['User'],
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
            tags: ['User'],
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
        put: {
            tags: ['User'],
            summary: 'Update user details',
            security: [{
                bearerAuth: []
            }],
            parameters: [],
            requestBody: { ...postSwaggerComponents(bodyParameters, 'updateUser') },
            responses: {
                '200': {
                    description: 'Aknowledgment of user details',
                },
            },

        },
        delete: {
            tags: ['User'],
            summary: 'Deactivate user',
            security: [{
                bearerAuth: []
            }],
            responses: {
                '200': {
                    description: 'Aknowledgment of user details',
                },
            },

        }
    },
    "/api/user/register": {
        post: {
            tags: ['User'],
            summary: 'Create User',
            parameters: [],
            requestBody: { ...postSwaggerComponents(bodyParameters, 'createUser') },
            responses: {
                '200': {
                    description: 'Tokens with User details',
                },
            },

        }

    },
    "/api/user/login": {
        post: {
            tags: ['User'],
            summary: 'Login User',
            parameters: [],
            requestBody: { ...postSwaggerComponents(bodyParameters, 'loginUser') },
            responses: {
                '200': {
                    description: 'Tokens with User details',
                },
            },

        }

    },



}
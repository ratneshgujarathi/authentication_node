module.exports = {
  createUser: {
    content: {
      "application/json": {
        description: 'New user details',
        required: ['firstname', 'lastname', 'username', 'email', 'password'],
        schema: {
          type: 'object',
          properties: {
            firstname: {
              type: 'string',
            },
            lastname: {
              type: 'string',
            },
            username: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            password: {
              type: 'string',
            },

          },
        },
      }
    }
  },
  updateUser: {
    content: {
      'application/json': {
        description: 'Update user details',
        schema: {
          type: 'object',
          properties: {
            firstname: {
              type: 'string',
            },
            lastname: {
              type: 'string',
            },
            username: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
          },
        },
      }
    }
  },
  loginUser: {
    content: {
      "application/json": {
        description: 'Login User',
        required: true,
        schema: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
            email: {
              type: 'string'
            }
          },
        },
      }
    }
  }
}
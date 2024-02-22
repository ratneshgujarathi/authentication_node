module.exports = {
    name: 'user',
    in: 'body',
    description: 'New user details',
    required: true,
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
      },
    },
  };
  
module.exports = [
    {
      name: 'authorization',
      in: 'header',
      description: 'API key for authentication',
      required: true,
      schema: {
        type: 'string',
        format: 'Bearer [token]'
      },
    },
  ];
  
module.exports = [
    {
        name: 'search',
        in: 'query',
        description: 'Search term for filtering',
        required: false,
        schema: {
            type: 'string',
        },
    },
    {
        name: 'sort',
        in: 'query',
        description: 'Sort by for ordering',
        required: false,
        schema: {
            type: 'string',
        },
    },
    {
        name: 'limit',
        in: 'query',
        description: 'limit for pagination',
        required: false,
        schema: {
            type: 'string',
        },
    },
];

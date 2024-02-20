const config = {
    development: {
        port: 9724,
        env: "dev",
        mongoURI: 'mongodb://localhost:27017',
        db: 'authentication'

    },
    production: {
        port: 800,
        env: "prod",
        mongoURI: ''
    },
}

module.exports = config;
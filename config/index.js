const config = {
    development: {
        port: 9724,
        env: "dev",
        mongoURI: 'mongodb://localhost:27017',
        db: 'authentication',
        secretKey: 'sjakFSHVAscnambv@kwgVXBA309873=12107FSHCA'
    },
    production: {
        port: 800,
        env: "prod",
        mongoURI: ''
    },
}

const env = process.env.NODE_ENV || 'development';

module.exports = config[env];
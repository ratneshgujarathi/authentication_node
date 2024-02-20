const mongodb = require('mongodb');
const conf = require('../config');
const env =  process.env.NODE_ENV || 'development'

function db_init(mongoUrl, dbName){
    try {
      const mongo = new mongodb.MongoClient(mongoUrl);
      console.log('Connected to db');
      return mongo.db(dbName);
    } catch (error) {
      console.log('Error in connection', error);
      process.exit(1)
    }
  }
const db = db_init(conf.mongoURI, conf.db);
module.exports = db
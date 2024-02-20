const db = require('../services/mongo');
const collections = {
    userCollection : db.collection('users')
}
module.exports = collections;
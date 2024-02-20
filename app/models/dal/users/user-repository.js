const db = require('../../../../services/mongo');
const utils = require('./utils');
const valid = require('../../../../common/validations');
const collections = require('../../../../common/collection-constants');
const { HTTP400Error, APIError, InternalError } = require('../../../../helpers/error-helper/Error');

async function createUser(params) {
    let results = {};
    const rules = {
        firstname: 'required|string',
        lastname: 'required|string',
        email: 'required|string|email',
        password: 'required|string',
        username: 'required|string'
    }
    let finaldata = await valid.validation(rules, params);
    if (finaldata.error == 1) {
        throw finaldata.data;
    }
    const data = finaldata.data;
    let userCheck = await collections.userCollection.findOne({ '$or': [{ username: data.username }, { email: data.email }] });
    if (userCheck) {
        throw new APIError('already exist');
    } else {
        const hashedPassword = await utils.hashPassword(data.password);
        const user = await collections.userCollection.insertOne({ ...data, password: hashedPassword });
        if (user.acknowledged) {
            const token = utils.createTokens({ uid: user.insertedId.toString() });
            results = token;
        }

    }
    return results

}

const verifyUser = async (params) => {
    let results = {};
    const rules = {
        email: 'required|string|email',
        password: 'required|string',
        username: 'string'
    }
    let finaldata = await valid.validation(rules, params);
    if (finaldata.error == 1) {
        throw finaldata.data;
    }
    const data = finaldata.data;
    let userCheck = await collections.userCollection.findOne({ '$or': [{ username: data.username }, { email: data.email }] });
    if (userCheck) {
        const isVerifiedPassword = await utils.verifyPassword(data.password, userCheck.password);
        if (isVerifiedPassword){
            const token = utils.createTokens({ uid: userCheck._id.toString() });
            results = token;
        }else {
            throw new APIError("Wrong Attempt", description="Attempted Password is Wrong");
        }
    } else {
        throw new APIError("not found", description="User Not Found")
    }

    return results;

}

module.exports = {
    createUser,verifyUser
}

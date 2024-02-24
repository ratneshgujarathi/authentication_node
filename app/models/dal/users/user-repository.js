const db = require('../../../../services/mongo');
const utils = require('./utils');
const valid = require('../../../../common/validations');
const collections = require('../../../../common/collection-constants');
const { APIError, ValidationError } = require('../../../../helpers/error-helper/Error');
const { ObjectId } = require('mongodb');

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
        throw new ValidationError(finaldata.data);
    }
    const data = finaldata.data;
    let userCheck = await collections.userCollection.findOne({ '$or': [{ username: data.username }, { email: data.email }] });
    if (userCheck) {
        throw new APIError('already exist');
    } else {
        const hashedPassword = await utils.hashPassword(data.password);
        const user = await collections.userCollection.insertOne({ ...data, password: hashedPassword, deactivated: 0 });
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
        email: 'string|email',
        password: 'required|string',
        username: 'string'
    }
    let finaldata = await valid.validation(rules, params);
    if (finaldata.error == 1) {
        throw new ValidationError(finaldata.data);;
    }
    const data = finaldata.data;
    let userCheck = await collections.userCollection.findOne({ '$or': [{ username: data.username }, { email: data.email }] });
    if (userCheck) {
        const isVerifiedPassword = await utils.verifyPassword(data.password, userCheck.password);
        if (isVerifiedPassword) {
            const token = utils.createTokens({ uid: userCheck._id.toString() });
            results = token;
        } else {
            throw new APIError("Wrong Attempt", description = "Attempted Password is Wrong");
        }
    } else {
        throw new APIError("not found", description = "User Not Found")
    }

    return results;

}

const getUserList = async (params) => {
    const rules = {
        sort: "string",
        search: "string",
        limit: "string"
    }
    let finaldata = await valid.validation(rules, params);
    if (finaldata.error == 1) {
        throw ValidationError(finaldata.data);;
    }
    // add other feat later
    const results = await collections.userCollection.aggregate([{$match: {}}, {$project: {password: 0}}]).toArray();
    return results;
}

const getUser = async (params) => {
    const rules = {
        id: 'required|string'
    }
    let finaldata = await valid.validation(rules, params);
    if (finaldata.error == 1) {
        throw ValidationError(finaldata.data);;
    }
    
    const results =  await collections.userCollection.findOne({_id: new ObjectId(finaldata.data.id)}, {projection: {password: 0}});
    return results;
}

const updateUser = async (params) => {
    let response;
    const rules = {
        id: 'required|string',
        firstname: 'string',
        lastname: 'string',
        username: 'string',
        email: 'string',
    }
    let finaldata = await valid.validation(rules, params);
    if (finaldata.error == 1) {
        throw ValidationError(finaldata.data);;
    }
    const {id, ...data} = finaldata.data;
    const result = await collections.userCollection.updateOne({_id: new ObjectId(finaldata.data.id)}, {$set: data});
    if (result?.acknowledged){
        response = {
            msg: "Data Updated Sucessfully"
        }
    }else{
        response = {
            msg: "Data Not Updated Sucessfully"
        }
    }
    return response;
}

const deactivateUser = async (params) => {
    let response;
    const rules = {
        id: 'required|string',
    }
    let finaldata = await valid.validation(rules, params);
    if (finaldata.error == 1) {
        throw ValidationError(finaldata.data);;
    }
    const result = await collections.userCollection.updateOne({_id: new ObjectId(finaldata.data.id)}, {$set: {deactivated: 1}});
    if (result?.acknowledged){
        response = {
            msg: "Data Updated Sucessfully"
        }
    }else{
        response = {
            msg: "Data Not Updated Sucessfully"
        }
    }
    return response;
}

module.exports = {
    createUser,
    verifyUser,
    getUserList,
    getUser,
    updateUser,
    deactivateUser
}

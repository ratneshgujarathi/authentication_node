const userDAL =  require('../../models/dal/users/user-repository');
const utility = require('../../../common/utils');

async function createUser(req, res) {
    try {
        const token = await userDAL.createUser(req.body);
        const response = utility.successResponse(token);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        const response = utility.errorResponse(error)
        res.status(error.httpCode?error.httpCode:400).json(response);
    }
}

async function loginUser(req, res) {
    try {
        const tokens =  await userDAL.verifyUser(req.body);
        const response = utility.successResponse(tokens);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        const response = utility.errorResponse({error})
        res.status(error.httpCode?error.httpCode:400).json(response);
    }
}

module.exports = {
    createUser,
    loginUser
}
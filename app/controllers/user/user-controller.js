const userDAL = require('../../models/dal/users/user-repository');
const utility = require('../../../common/utils');

async function createUser(req, res) {
    try {
        const token = await userDAL.createUser(req.body);
        const response = utility.successResponse(token);
        res.status(200).json(response);
    } catch (error) {
        utility.logWriter({ err: error.stack, params: req.body, url: req.originalUrl }, 'user_error_log');
        const response = utility.errorResponse(error)
        res.status(error.httpCode ? error.httpCode : 400).json(response);
    }
}

async function loginUser(req, res) {
    try {
        const tokens = await userDAL.verifyUser(req.body);
        const response = utility.successResponse(tokens);
        res.status(200).json(response);
    } catch (error) {
        utility.logWriter({ err: error.stack, params: req.body, url: req.originalUrl }, 'user_error_log');
        const response = utility.errorResponse(error)
        res.status(error.httpCode ? error.httpCode : 400).json(response);
    }
}

async function getUserList(req, res) {
    try {
        const tokens = await userDAL.getUserList(req.query);
        const response = utility.successResponse(tokens);
        res.status(200).json(response);
    } catch (error) {
        utility.logWriter({ err: error.stack, params: req.query, url: req.originalUrl }, 'user_error_log');
        const response = utility.errorResponse(error)
        res.status(error.httpCode ? error.httpCode : 400).json(response);
    }
}

async function getUser(req, res) {
    try {
        const tokens = await userDAL.getUser({...req.query, ...req.params});
        const response = utility.successResponse(tokens);
        res.status(200).json(response);
    } catch (error) {
        utility.logWriter({ err: error.stack, params: req.query, url: req.originalUrl }, 'user_error_log');
        const response = utility.errorResponse(error)
        res.status(error.httpCode ? error.httpCode : 400).json(response);
    }
}

async function updateUser(req, res) {
    try {
        const tokens = await userDAL.updateUser({...req.body, ...req.params});
        const response = utility.successResponse(tokens);
        res.status(200).json(response);
    } catch (error) {
        utility.logWriter({ err: error.stack, params: req.body, url: req.originalUrl }, 'user_error_log');
        const response = utility.errorResponse(error)
        res.status(error.httpCode ? error.httpCode : 400).json(response);
    }
}

async function deactivateUser(req, res) {
    try {
        const tokens = await userDAL.deactivateUser({...req.body, ...req.params});
        const response = utility.successResponse(tokens);
        res.status(200).json(response);
    } catch (error) {
        utility.logWriter({ err: error.stack, params: req.body, url: req.originalUrl }, 'user_error_log');
        const response = utility.errorResponse(error)
        res.status(error.httpCode ? error.httpCode : 400).json(response);
    }
}

module.exports = {
    createUser,
    loginUser,
    getUserList,
    getUser,
    updateUser,
    deactivateUser,
}
const authDAL = require('../../models/dal/auth/auth-repository');
const utility = require('../../../common/utils');

async function validateToken(req, res) {
    try {
        const isValid = await authDAL.validateToken(req.body);
        const response = utility.successResponse({validity: isValid});
        res.status(200).json(response);
    } catch (error) {
        utility.logWriter({ err: error.stack, params: req.body, url: req.originalUrl }, 'auth_error_log');
        const response = utility.errorResponse(error)
        res.status(error.httpCode?error.httpCode:400).json(response);
    }
}

async function refreshToken(req, res) {
    try {
        const token = await authDAL.refreshToken(req.body);
        const response = utility.successResponse(token);
        res.status(200).json(response);
    } catch (error) {
        utility.logWriter({ err: error.stack, params: req.body, url: req.originalUrl }, 'auth_error_log');
        const response = utility.errorResponse(error)
        res.status(error.httpCode?error.httpCode:400).json(response);
    }
}

module.exports = {validateToken, refreshToken}


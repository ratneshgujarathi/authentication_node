const valid = require('../../../../common/validations');
const userUtils = require('../users/utils');
const {ValidationError} = require('../../../../helpers/error-helper/Error');

const validateToken = async (params) => {
    let results = {}
    const rules = {
        token : "required|string"
    }
    let finaldata = await valid.validation(rules, params);
    if (finaldata.error == 1) {
        throw ValidationError(finaldata.data);;
    }
    const data = finaldata.data;
    const validity = userUtils.validateToken(data.token);
    if (validity){
        results.valid = true;
        results.data = validity
    }else{
        results.valid = false;
    }
    return results;
}

const refreshToken = async (params) => {
    const rules = {
        token : "required|string"
    } 
    let finaldata = await valid.validation(rules, params);
    if (finaldata.error == 1) {
        throw ValidationError(finaldata.data);;
    }
    const data = finaldata.data;
    const tokens = userUtils.createTokensUsingRefreshToken(data.token);
    return tokens;

}

module.exports = {validateToken, refreshToken}
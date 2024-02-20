const jwt = require('jsonwebtoken');
const config = require('../../../../config');
const bcrypt = require('bcrypt')
const { InternalError } = require('../../../../helpers/error-helper/Error');


const createTokens = (params) => {
    const token = jwt.sign({ params }, config.secretKey, { expiresIn: "1h" });
    const refreshToken = jwt.sign({ params }, config.secretKey, { expiresIn: "7d" });
    return { token, refreshToken };
}

const validateToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, config.secretKey);
        if (decodedToken) {
            return decodedToken;
        }else{
            return false;
        }
    } catch (error) {
        console.log(error);
        throw new InternalError(error.message?error.message:'Error In Validity Checking')
    }
}

const createTokensUsingRefreshToken = (token) => {
    const decodedRefreshToken = jwt.verify(token, config.secretKey);
    const uid = decodedRefreshToken.uid;
    const tokens = createTokens({ uid: uid });
    return tokens;
}


const hashPassword = async (password, SALT_ROUNDS = 10) => {
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        return hashedPassword;
    } catch (error) {
        throw new InternalError('Error hashing password');
    }
};

const verifyPassword = async (password, hashedPassword) => {
    try {
        const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
        return isPasswordCorrect;
    } catch (error) {
        throw new InternalError('Error hashing password');
    }
};


module.exports = { createTokens, hashPassword, createTokensUsingRefreshToken, verifyPassword, validateToken };
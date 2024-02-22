const config = require('../config');
const jwt = require('jsonwebtoken');
const utilty = require('../common/utils');

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.replace('Bearer ','');
    if (!token) return res.status(401).json(utilty.errorResponse({ name: 'Unauthorized', message: "No token provided" }));

    jwt.verify(token, config.secretKey, (err, user) => {
        if (err) return res.status(403).json(utilty.errorResponse({ name: 'Forbidden', message: "Forbidden Access" }));

        req.user = user;
        next();
    });
};

module.exports = authenticateJWT;
const express = require('express');
const authController = require('../controllers/auth/auth-controller');

const router =express.Router();

router.route("/checkValidity").post(authController.validateToken);
router.route("/refreshToken").post(authController.refreshToken);

module.exports = router;
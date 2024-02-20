const express = require('express');
const userController = require('../controllers/user/user-controller');

const router =express.Router();

router.route("/create").post(userController.createUser);
router.route("/login").post(userController.loginUser);

module.exports = router;
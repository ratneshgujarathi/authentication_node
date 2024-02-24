const express = require('express');
const userController = require('../controllers/user/user-controller');
const jwtMiddleWare = require('../../middleware/jwt-middleware');

const router = express.Router();

router.route("/register").post(userController.createUser);
router.route("/login").post(userController.loginUser);

router.get("/user", jwtMiddleWare, userController.getUserList);
router.get("/user/:id", jwtMiddleWare, userController.getUser);
router.put("/user/:id", jwtMiddleWare, userController.updateUser);
router.delete("/user/:id", jwtMiddleWare, userController.deactivateUser);

module.exports = router;
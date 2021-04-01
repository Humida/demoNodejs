const express = require('express');
const userController = require('../app/controller/user.controller');

const user_router = express.Router();
user_router.get('/', userController.home);


module.exports = user_router;
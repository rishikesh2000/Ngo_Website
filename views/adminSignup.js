const express = require('express');
const Router=express.Router();


const singupController = require('../controllers/adminController');

Router.post('/adminSingup', singupController.singup);
Router.post('/adminLogin',singupController.login);

module.exports = Router;
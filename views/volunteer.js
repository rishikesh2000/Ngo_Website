const express = require('express');
const volunteerController = require('../controllers/volunteerController');
const Router=express.Router();


Router.post('/volunteerRegistration',volunteerController.addVounteer);

module.exports = Router;
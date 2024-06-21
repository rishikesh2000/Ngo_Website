const express = require('express');
const {upload} = require('../config/multerConfig');
const { uploadFile } = require('../controllers/animalsPhotoController');
const animalsPhotoController = require("../controllers/animalsPhotoController")
const Router=express.Router();

Router.post('/animalPhoto', upload, uploadFile);
Router.delete('/animalDelete/:id', animalsPhotoController.deleteDetails);
Router.get('/getAnimalDetails',animalsPhotoController.getAnimalDetails );

module.exports = Router;

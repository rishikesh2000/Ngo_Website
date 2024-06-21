const multer = require("multer");
const cloudinary = require('cloudinary').v2;


const storage=multer.diskStorage({});
const upload=multer({storage:storage}).single('animalPhoto');

//couldnary config

const cloudNaryConfig = cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET
  });

  
module.exports= {upload,cloudNaryConfig};
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Mongo_URL = process.env.Mongo_URL

const db = mongoose.connect(Mongo_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("DataBase Connected")
}).catch(()=>{
    console.log("DataBase Connection Error");
});


module.exports = { db }

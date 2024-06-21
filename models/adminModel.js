const mongoose = require("mongoose");

const{Schema}=mongoose;

const signup= new Schema({

    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
    

},{collection: "Admin"});

module.exports = mongoose.model("Admin", signup);


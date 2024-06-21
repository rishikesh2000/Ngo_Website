const mongoose = require("mongoose");

const{Schema}=mongoose;

const animal = new Schema({
    animalId: {
        type: String,
        required: true
    },

    animalName: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true

    }

},{collection: "Animals"});

module.exports = mongoose.model("Animals", animal);

 
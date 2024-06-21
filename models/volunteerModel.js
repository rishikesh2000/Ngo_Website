const mongoose = require('mongoose');

const {Schema}= mongoose;

const volunteerSchema = new Schema({

    fullName:{

        type: String,
        required: true
    },
    email:{

        type: String,
        required: true
    },

    phoneNumber:{

        type: Number,
        required: true
    },

    age:{
        type: Number,
        required: true
    },

    gender:{
        type: String,
        required: true
    }

},{collection: "Volunteer"});

module.exports = mongoose.model("Volunteer",volunteerSchema ) ;  


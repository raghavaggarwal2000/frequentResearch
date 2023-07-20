const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    gender:{
        type: String
    },
    dob:{
        type: Date
    },
    age:{
        type: Number
    }
}, {timestamps: true});

const Information = mongoose.model('information',informationSchema);

module.exports = Information;
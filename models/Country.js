const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    country:{
        type: String,
        required:true
    }
});

const Country = mongoose.model('country',countrySchema);

module.exports = Country;
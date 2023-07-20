const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    stateId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'state',
        required:true
    },
    city: {
        type: "String"
    }
});

const City = mongoose.model('city',citySchema);

module.exports = City;
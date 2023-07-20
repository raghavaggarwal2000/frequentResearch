const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    countryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'countries',
        required:true
    },
    state: {
        type: "String"
    }
});

const State = mongoose.model('state',stateSchema);

module.exports = State;
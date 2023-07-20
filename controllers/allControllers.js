
const Country = require("../models/Country");
const State = require("../models/State");
const City = require("../models/City");
const Information = require("../models/Information");

const home = async (req, res) =>{

    const information = await Information.find({}).sort({createdAt: -1});
    res.render('home', {title : "Home Page", information})
};

const getUploadData = async (req, res) =>{
    
    const countries = await Country.find();

    let states = {};
    let cities = {};

    for(let i = 0; i< countries.length; ++i){
        states[countries[i]._id] = await State.find({countryId: countries[i]._id}).select("state");
    }

    const tempStates = await State.find();
    for(let i =0 ; i< tempStates.length; ++i){
        cities[tempStates[i]._id] = await City.find({stateId: tempStates[i]._id}).select("city");
    }
 

    res.render('uploadData', {title: "Upload Data", countries : countries, states: states, cities: cities});
};

const postUploadData = async (req, res) =>{
    const {
        firstName,
        lastName,
        email,
        country,
        state,
        city,
        gender,
        dob
    } = req.body;
    
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const countryData = await Country.findById(country);
    const stateData = await State.findById(state);
    const cityData = await City.findById(city);
    const information = Information({firstName, lastName, email, country: countryData.country, state: stateData.state, city: cityData.city, gender, dob, age})
    await information.save();

    res.redirect('/uploadData');
    // res.render('home', {title : "Home Page"})
};

module.exports = {
    home,
    getUploadData,
    postUploadData
};
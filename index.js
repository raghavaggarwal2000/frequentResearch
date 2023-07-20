require("dotenv").config();

const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require('express');
const mongoose = require("mongoose");

const allRoutes = require("./routes/allRoutes");

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("./public"));


const start = () =>{
    try{
        mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result =>{
            console.log("Listening on PORT 3000")
            app.listen(process.env.PORT || 3000)
        })
    }
    catch(err){
        console.log(err);
    }
}

app.use(allRoutes);

start();
const express = require("express");
const router = express.Router();

const {
    home,
    getUploadData,
    postUploadData
} = require("../controllers/allControllers");

router.get('/', home);

router.get('/uploadData', getUploadData);

router.post('/uploadData', postUploadData);


module.exports = router;
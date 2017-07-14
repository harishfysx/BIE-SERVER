// yarn downloaded modules
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');
const _ = require('lodash');


var {
    mongoose
} = require('./../db/mongoose');
var {
    Student
} = require('./../models/student');


//POST /todos handle
router.post('/students', (req, res) => {
 res.send('success');

});


//export the router
module.exports = router;

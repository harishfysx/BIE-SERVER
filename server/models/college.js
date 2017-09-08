const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

//User schema
var CollegeSchema = new mongoose.Schema({
  ticket: {
    type: String,
    minlength: 1,
    unique : true,
    required: true,
    dropDups: true,
    trim : true,
    validate : {
      isAsync: true,
      validator: validator.isNumeric
    }
  },
  district: {
    type: String,
    trim : true
  },
  stdntname: {
    type: String,
    minlength: 1,
    trim : true
  },
  subjects:[{
    subjectName:{
      type: String,
      trim : true
    },
    marksGained:{
      type: String
    },
    passType:{
      type: String
    },
    outcome:{
      type: String
    }
  }],
grandtotal: {
    type: String,
    trim : true
  },
grandresult: {
      type: String,
      trim : true
    },
addflag: {
        type: String,
        trim : true
   },
 link:{
   type: String,
   trim : true
 }

});

//User Model
var College = mongoose.model('College',CollegeSchema);

module.exports = {College};

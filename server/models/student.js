const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

//User schema
var StudentSchema = new mongoose.Schema({
  ticket: {
    type: Number,
    minlength: 1,
    trim : true
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
var Student = mongoose.model('Student',StudentSchema);

module.exports = {Student};

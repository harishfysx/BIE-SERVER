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
  colgyear: {
    type: String,
    minlength: 1
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
grandTotal: {
    type: String,
    trim : true
  },
grandoutocme: {
      type: String,
      trim : true
    }

});

//User Model
var Student = mongoose.model('Student',StudentSchema);

module.exports = {Student};

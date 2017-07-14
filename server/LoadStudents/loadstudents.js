// yarn downloaded modules
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');
const _ = require('lodash');
const S = require('string');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');


var {
    mongoose
} = require('./../db/mongoose');
var {
    Student
} = require('./../models/student');
//local imports
var districts = require('./districts');
var subjects = require('./subjects')

var testLine ="173011043330KANUKA RANAPRATAP             0135 *P0338 *P3730 *P3825  P4128 *P4226  P182D     9999999999";
    var ticket = testLine.substring(0, 10).trim();
    var district = _.find(districts.districts, { 'code':parseInt(testLine.substring(10, 12))}).name.trim();
    var stdntname = testLine.substring(12,42).trim();
    var subjectMarksList = [];
    //var subject1Name = testLine.substring(42,44);
    var subject1 = {};
        subject1.name =  _.find(subjects.subjects,  { 'code':parseInt(testLine.substring(42, 44))}).name.trim();
        subject1.marks =  testLine.substring(44,47).trim();
        subject1.passType =  testLine.substring(47,48).trim();
        subject1.outCome = testLine.substring(48,49).trim();

    subjectMarksList.push(subject1);

    console.log('ticket : '+ticket + ' district :' + district + ' stdntname :' + stdntname + ' subject1',subjectMarksList);
/*
var student = new Student({ ticket: 1760129469 ,dist});
student.save().then((doc) =>{
  console.log('student saved')
},(err) =>{
  console.log('error saving student',err)
})
*/


function processFile(inputFile) {

        var instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);

    rl.on('line', function (line) {
      if(S(line).length == 103){
        var student = new Student({ ticket: line.substring(1, 9), });
        student.save().then((doc) =>{
          console.log('student saved')
        },(err) =>{
          console.log('error saving student')
        })

      }
        //console.log(S(line).length);
    });


}

//processFile('/harinodeapps/studdata/YR1WEB.TXT');

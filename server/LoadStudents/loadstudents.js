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
    var candidate ={};
    var subject = {};
    var lineSub;
  candidate.ticket = testLine.substring(0, 10).trim();
  candidate.district = _.find(districts.districts, { 'code':parseInt(testLine.substring(10, 12))}).name.trim();
  candidate.stdntname = testLine.substring(12,42).trim();
  candidate.subjects = [];
    //var subject1

      lineSub = subjects.subjectFnctn(testLine.substring(42,44));
        subject.subjectName =  _.find(subjects.subjectList,  { 'code':lineSub}).name.trim();
        subject.marksGained =  testLine.substring(44,47).trim();
        subject.passType =  testLine.substring(47,48).trim();
        subject.outcome = testLine.substring(48,49).trim();
      candidate.subjects.push(subject);
        //var subject2
            subject = {};
            var lineSub = subjects.subjectFnctn(testLine.substring(49,51));
            subject.subjectName =  _.find(subjects.subjectList,  { 'code':lineSub}).name.trim();
            subject.marksGained =  testLine.substring(51,54).trim();
            subject.passType =  testLine.substring(54,55).trim();
            subject.outcome = testLine.substring(55,56).trim();
          candidate.subjects.push(subject);

            //var subject3
           subject = {};
                 lineSub = subjects.subjectFnctn(testLine.substring(56,58));
                subject.subjectName =  _.find(subjects.subjectList,  { 'code':lineSub}).name.trim();
                subject.marksGained =  testLine.substring(58,61).trim();
                subject.passType =  testLine.substring(61,62).trim();
                subject.outcome = testLine.substring(62,63).trim();
              candidate.subjects.push(subject);
                //var subject4
                 subject = {};
                     lineSub = subjects.subjectFnctn(testLine.substring(63,65));
                    subject.subjectName =  _.find(subjects.subjectList,  { 'code':lineSub}).name.trim();
                    subject.marksGained =  testLine.substring(65,68).trim();
                    subject.passType =  testLine.substring(68,69).trim();
                    subject.outcome = testLine.substring(69,70).trim();
                  candidate.subjects.push(subject);
                    //var subject5
                   subject = {};
                     lineSub = subjects.subjectFnctn(testLine.substring(70,72));
                        subject.subjectName =  _.find(subjects.subjectList,  { 'code':lineSub}).name.trim();
                        subject.marksGained =  testLine.substring(72,75).trim();
                        subject.passType =  testLine.substring(75,76).trim();
                        subject.outcome = testLine.substring(76,77).trim();
                      candidate.subjects.push(subject);
                        //var subject6
                     subject = {};
                         lineSub = subjects.subjectFnctn(testLine.substring(77,79));
                            subject.subjectName =  _.find(subjects.subjectList,  { 'code':lineSub}).name.trim();
                            subject.marksGained =  testLine.substring(79,82).trim();
                            subject.passType =  testLine.substring(82,83).trim();
                            subject.outcome = testLine.substring(83,84).trim();
                          candidate.subjects.push(subject);

                  candidate.grandtotal = testLine.substring(84,87).trim();
                  candidate.grandresult= testLine.substring(87,93).trim();
                  candidate.addflag= testLine.substring(93,94).trim();
                  candidate.link= testLine.substring(94,103).trim();

    console.log('student ',student);

var student = new Student(candidate);
student.save().then((doc) =>{
  console.log('student saved')
},(err) =>{
  console.log('error saving student',err)
})



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

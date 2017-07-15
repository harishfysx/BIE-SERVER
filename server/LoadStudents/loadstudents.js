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



function processFile(inputFile) {

        var instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);

    rl.on('line', function (line) {
      if(S(line).length == 103){
        //start
        var candidate ={};
var subject = {};
var lineSub;
candidate.ticket = line.substring(0, 10).trim();
candidate.district = _.find(districts.districts, { 'code':parseInt(line.substring(10, 12))}).name.trim();
candidate.stdntname = line.substring(12,42).trim();
candidate.subjects = [];
//var subject1
    subject.subjectName =  subjects.subjectFnctn(line.substring(42,44)).trim();
    subject.marksGained =  line.substring(44,47).trim();
    subject.passType =  line.substring(47,48).trim();
    subject.outcome = line.substring(48,49).trim();
    candidate.subjects.push(subject);
    //var subject2
        subject = {};
        subject.subjectName =  subjects.subjectFnctn(line.substring(49,51)).trim();
        subject.marksGained =  line.substring(51,54).trim();
        subject.passType =  line.substring(54,55).trim();
        subject.outcome = line.substring(55,56).trim();
      candidate.subjects.push(subject);

        //var subject3
       subject = {};
            subject.subjectName = subjects.subjectFnctn(line.substring(56,58)).trim();
            subject.marksGained =  line.substring(58,61).trim();
            subject.passType =  line.substring(61,62).trim();
            subject.outcome = line.substring(62,63).trim();
          candidate.subjects.push(subject);
            //var subject4
             subject = {};
                subject.subjectName = subjects.subjectFnctn(line.substring(63,65)).trim();
                subject.marksGained =  line.substring(65,68).trim();
                subject.passType =  line.substring(68,69).trim();
                subject.outcome = line.substring(69,70).trim();
              candidate.subjects.push(subject);
                //var subject5
               subject = {};
                 subject.subjectName = subjects.subjectFnctn(line.substring(70,72)).trim();
                    subject.marksGained =  line.substring(72,75).trim();
                    subject.passType =  line.substring(75,76).trim();
                    subject.outcome = line.substring(76,77).trim();
                  candidate.subjects.push(subject);
                    //var subject6
                 subject = {};
                     subject.subjectName = subjects.subjectFnctn(line.substring(77,79)).trim();
                        subject.marksGained =  line.substring(79,82).trim();
                        subject.passType =  line.substring(82,83).trim();
                        subject.outcome = line.substring(83,84).trim();
                      candidate.subjects.push(subject);

              candidate.grandtotal = line.substring(84,87).trim();
              candidate.grandresult= line.substring(87,93).trim();
              candidate.addflag= line.substring(93,94).trim();
              candidate.link= line.substring(94,103).trim();

//  console.log('student ',student);

var student = new Student(candidate);
student.save().then((doc) =>{
console.log('student saved')
},(err) =>{
console.log('error saving student',err)
})


        //end

      }

    });

    rl.on('close', function (line) {
      //  console.log(line);
        console.log('done reading file.');
    });
}

//processFile('/harinodeapps/studdata/YR1WEB_sample.TXT');
processFile('/harinodeapps/studdata/YR1WEB.TXT');

// yarn downloaded modules
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {
    ObjectId
} = require('mongodb');
const _ = require('lodash');


var {
    mongoose
} = require('./../db/mongoose');
var {
    College
} = require('./../models/college');


//get Students
router.get('/sampleStudents',(req, res) =>{
    College.find({}).limit(100).then((students) =>{
        res.send(students);

    },(err) =>{
        res.status(400).send(err);
    })

});
//POST /student handle
router.post('/student', (req, res) => {
//  console.log(req.body.student.subjects.length);

  var subjectsPosted = [];
  for(var i = 0; i < req.body.student.subjects.length; i++){
    let subject = {};
    subject.subjectName = req.body.student.subjects[i].subjectName;
    subject.marksGained = req.body.student.subjects[i].marksGained;
    subject.passType = req.body.student.subjects[i].passType;
    subject.outcome = req.body.student.subjects[i].outcome;
    subjectsPosted.push(subject);
  }
  var college = new College({
ticket: req.body.student.ticket,
district: req.body.student.district,
stdntname: req.body.student.stdntname,
grandtotal: req.body.student.grandtotal,
grandresult: req.body.student.grandresult,
subjects: subjectsPosted

  });
  college.save().then((doc) => {
      res.send(doc)
  }, (e) => {
      console.log(e.code);
      if(e.code === 11000){
        return res.status(500).send({ succes: false, message: '11000' });
      }
        res.status(400).send(e)




  });

});
//DELETE /student/:id
router.delete('/student/:id',(req,res) =>{
  var id = req.params.id;
  console.log('to be deleted' + id);
  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }
  College.findOneAndRemove({_id:id}).then((student) =>{
    if(!student){
      return  res.status(404).send()
    }
    res.send({student})
  }).catch((e) =>{
    res.status(404).send();
  })

});

//export the router
module.exports = router;

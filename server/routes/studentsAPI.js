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
    Student
} = require('./../models/student');


//POST
/*
router.post('/students', (req, res) => {
 res.send('success');
});
*/
router.get('/students/:id', (req, res) => {
    var id = req.params.id;
    console.log('searched id ' + id);
    Student.findOne({
        ticket: id
    }).then((student) => {
        if (!student) {
            return res.status(404).send();
        }
        res.send({
            student
        })
    }).catch((e) => {
        res.status(404).send();
    })

});
//
router.get('/sampleStudents',(req, res) =>{
    Student.find({$and : [{"subjects.subjectName": "MATHEMATICS PAPER-I(B)"},{"subjects.subjectName": "PHYSICS PAPER-I"},{"subjects.subjectName": "CHEMISTRY PAPER-I"}]}).limit(100).then((students) =>{
        res.send(students);

    },(err) =>{
        res.status(400).send(err);
    })

});

//export the router
module.exports = router;

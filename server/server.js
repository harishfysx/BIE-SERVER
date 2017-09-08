//environment set up
require('./config/config');
//user define environment variables
// yarn downloaded modules
const express = require('express');
const bodyParser = require('body-parser');

//local imports
const todo = require('./routes/todoAPI');
const user = require('./routes/userAPI');
//const studentsDataLoad = require('./LoadStudents/loadstudents'); //un comment this line to load students
const student = require('./routes/studentsAPI');
const college = require('./routes/collegeAPI');


//initialize app
var app = express();

//Middleware
app.use(bodyParser.json());

//enabling cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next();
});
//routes
app.use('/api/todo',todo);
app.use('/api/user',user);
app.use('/api/student',student);
app.use('/api/college',college);


//start server
app.listen(process.env.PORT, function() {
    console.log(`Example app listening on port ${process.env.PORT}!`)
});
//export the app for testing
module.exports = {
    app
};

var express = require('express');

var app = express();

require('./config/middleware.js')(app, express);

var db = require('../db_config/db_config.js');
var Users = require('../db_config/collections/users.js');
var Quizzes = require('../db_config/collections/quizzes.js');
var User = require('../db_config/models/user.js');
var Quiz = require('../db_config/models/quiz.js');
var QuizInvitees = require('../db_config/models/quizInvitees.js');
var Topic = require('../db_config/models/topic.js');
var Questions = require('../db_config/models/questions.js');
var Answers = require('../db_config/models/answers.js');
var UserAnswers = require('../db_config/models/userAnswers.js');
var UserAttempts = require('../db_config/models/userAttempts.js');


app.post('/api/users/signup', function(req, res){
  //this server request needs an object assigned to req.body
  //that contains: {username: 'Davy', password: 'kittens', name: 'Dave Grohl',
  //email: 'dave@gmail.com, active: true'}
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    active: req.body.active
  });

  user.save().then(function(newUser){
    Users.add(newUser);
  });

});


module.exports = app;

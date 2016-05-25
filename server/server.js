var express = require('express');

var app = express();

require('./config/middleware.js')(app, express);

var userController = require('./controllers/userController.js');
var db = require('../db_config/db_config.js');
var Users = require('../db_config/collections/users.js');
var Quizzes = require('../db_config/collections/quizzes.js');
var Quiz = require('../db_config/models/quiz.js');
var QuizInvitees = require('../db_config/models/quizInvitees.js');
var Topic = require('../db_config/models/topic.js');
var Questions = require('../db_config/models/questions.js');
var Answers = require('../db_config/models/answers.js');
var UserAnswers = require('../db_config/models/userAnswers.js');
var UserAttempts = require('../db_config/models/userAttempts.js');

app.post('/api/users/signup', userController.signup);
app.post('/api/users/signin', userController.signin);

module.exports = app;

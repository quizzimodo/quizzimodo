var bookshelf = require('../db_config.js');
var Quiz = require('../models/quiz.js');

var Quizzes = new bookshelf.Collection();

Quizzes.model = Quiz;

module.exports = Quizzes;

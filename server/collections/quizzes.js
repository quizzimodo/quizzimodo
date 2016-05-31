var bookshelf = require('../db/db_config/db_config.js');
var Quiz = require('../models/quiz.js');

var Quizzes = bookshelf.Collection.extend({
  model: Quiz
});

module.exports = bookshelf.collection('Quizzes', Quizzes);

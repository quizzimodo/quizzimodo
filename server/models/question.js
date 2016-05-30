var bookshelf = require('../db/db_config/db_config.js');
var Quiz = require('./quiz.js');
var UserAnswer = require('./user_answer.js');
var AnswerOption = require('./answer_option.js');

var Question = bookshelf.Model.extend({
  tableName: 'question',
  hasTimestamps: true,
  quiz: function () { return this.belongsTo(Quiz) },
  user_answers: function () { return this.hasMany(UserAnswer) },
  answer_options: function () { return this.hasMany(AnswerOption) }
});

module.exports = Question;

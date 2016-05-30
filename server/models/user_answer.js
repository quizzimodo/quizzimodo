var bookshelf = require('../db/db_config/db_config.js');
var Quiz = require('./quiz.js');
var AnswerOption = require('./answer_option.js');
var Attempt = require('./attempt.js');

var UserAnswer = bookshelf.Model.extend({
  tableName: 'user_answer',
  hasTimestamps: true,
  quiz: () => this.belongsTo(Quiz),
  answer_option: () => this.belongsTo(AnswerOption),
  attempt: () => this.belongsTo(Attempt)
});

module.exports = UserAnswer;

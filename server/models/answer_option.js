var bookshelf = require('../db/db_config/db_config.js');
var Question = require('./question.js');
var UserAnswer = require('./user_answer.js');

var Answer = bookshelf.Model.extend({
  tableName: 'answer_option',
  hasTimestamps: true,
  user_answers: () => this.hasMany(UserAnswer),
  question: () => this.belongsTo(Question)
});

module.exports = Answer;

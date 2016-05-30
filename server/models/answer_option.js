var bookshelf = require('../db/db_config/db_config.js');
require('./question.js');
require('./user_answer.js');

var AnswerOption = bookshelf.Model.extend({
  tableName: 'answer_option',
  hasTimestamps: true,
  question: function () { return this.belongsTo('Question') },
  user_answers: function () { return this.hasMany('UserAnswer') }
});

module.exports = bookshelf.model('AnswerOption', AnswerOption);

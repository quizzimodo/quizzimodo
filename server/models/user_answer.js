var bookshelf = require('../db/db_config/db_config.js');
require('./question.js');
require('./answer_option.js');
require('./attempt.js');

var UserAnswer = bookshelf.Model.extend({
  tableName: 'user_answer',
  hasTimestamps: true,
  question: function () { return this.belongsTo('Question') },
  answer_option: function () { return this.belongsTo('AnswerOption') },
  attempt: function () { return this.belongsTo('Attempt') }
});

module.exports = bookshelf.model('UserAnswer', UserAnswer);

var bookshelf = require('../db_config.js');

var UserAnswers = bookshelf.Model.extend({
  tablename: 'user_answers',
  hasTimestamps: true
});

module.exports = UserAnswers;

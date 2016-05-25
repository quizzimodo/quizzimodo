var bookshelf = require('../db_config.js');

var Quiz = bookshelf.Model.extend({
  tablename: 'quizzes',
  hasTimestamps: true
});

module.exports = Quiz;

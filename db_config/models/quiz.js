var bookshelf = require('../db_config.js');

var Quiz = bookshelf.Model.extend({
  tablename: 'quiz',
  hasTimestamps: true
});

module.exports = Quiz;

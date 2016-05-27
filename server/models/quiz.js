var bookshelf = require('../db/db_config/db_config.js');

var Quiz = bookshelf.Model.extend({
  tablename: 'quiz'
});

module.exports = Quiz;

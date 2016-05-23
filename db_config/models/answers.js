var bookshelf = require('../db_config.js');

var Answers = bookshelf.Model.extend({
  tablename: 'answers',
  hasTimestamps: true
});

module.exports = Answers;

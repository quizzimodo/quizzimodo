var bookshelf = require('../db_config.js');

var Questions = bookshelf.Model.extend({
  tablename: 'questions',
  hasTimestamps: true
});

module.exports = Questions;

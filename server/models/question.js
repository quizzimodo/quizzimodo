var bookshelf = require('../db/db_config/db_config.js');

var Question = bookshelf.Model.extend({
  tablename: 'question'
});

module.exports = Question;

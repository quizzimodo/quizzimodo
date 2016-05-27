var bookshelf = require('../db/db_config/db_config.js');

var Answer = bookshelf.Model.extend({
  tablename: 'answer_option'
});

module.exports = Answer;

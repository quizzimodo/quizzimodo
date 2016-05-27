var bookshelf = require('../db/db_config/db_config.js');

var Topic = bookshelf.Model.extend({
  tablename: 'topic'
});

module.exports = Topic;

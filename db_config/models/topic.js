var bookshelf = require('../db_config.js');

var Topic = bookshelf.Model.extend({
  tablename: 'topic',
  hasTimestamps: true
});

module.exports = Topic;

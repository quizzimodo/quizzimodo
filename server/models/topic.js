var bookshelf = require('../db/db_config/db_config.js');
var Subtopic = require('./subtopic.js');

var Topic = bookshelf.Model.extend({
  tableName: 'topic',
  hasTimestamps: true,
  subtopics: () => this.hasMany(Subtopic)
});

module.exports = Topic;

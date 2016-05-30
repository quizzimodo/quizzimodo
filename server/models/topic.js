var bookshelf = require('../db/db_config/db_config.js');
require('./subtopic.js');

var Topic = bookshelf.Model.extend({
  tableName: 'topic',
  hasTimestamps: true,
  subtopics: function () { return this.hasMany('Subtopic') }
});

module.exports = bookshelf.model('Topic', Topic);

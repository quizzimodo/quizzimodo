var bookshelf = require('../db/db_config/db_config.js');
var Topic = require('./topic.js');
var Quiz = require('./quiz.js');

var Subtopic = bookshelf.Model.extend({
  tableName: 'subtopic',
  hasTimestamps: true,
  topic: function () { return this.belongsTo(Topic) },
  quizzes: () => this.hasMany(Quiz)
});

module.exports = Subtopic;

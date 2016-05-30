var bookshelf = require('../db/db_config/db_config.js');
require('./topic.js');
require('./quiz.js');

var Subtopic = bookshelf.Model.extend({
  tableName: 'subtopic',
  hasTimestamps: true,
  topic: function () { return this.belongsTo('Topic') },
  quizzes: function () { return this.hasMany('Quiz') }
});

module.exports = bookshelf.model('Subtopic', Subtopic);

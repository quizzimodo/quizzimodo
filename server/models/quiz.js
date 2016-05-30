var bookshelf = require('../db/db_config/db_config.js');
require('./subtopic.js');
require('./user.js');
require('./question.js');
require('./attempt.js');
require('./invitee.js');

var Quiz = bookshelf.Model.extend({
  tableName: 'quiz',
  hasTimestamps: true,
  subtopic: function () { return this.belongsTo('Subtopic') },
  user: function () { return this.belongsTo('User') },
  questions: function () { return this.hasMany('Question') },
  attempts: function () { return this.hasMany('Attempt') },
  invitees: function () { return this.hasMany('Invitee') }
});

module.exports = bookshelf.model('Quiz', Quiz);

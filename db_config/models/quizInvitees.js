var bookshelf = require('../db_config.js');

var QuizInvites = bookshelf.Model.extend({
  tablename: 'quiz_invites',
  hasTimestamps: true
});

module.exports = QuizInvites;

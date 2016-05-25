var bookshelf = require('../db_config.js');

var QuizInvitees = bookshelf.Model.extend({
  tablename: 'quiz_invites',
  hasTimestamps: true
});

module.exports = QuizInvitees;

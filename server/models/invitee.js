var bookshelf = require('../db/db_config/db_config.js');
var Quiz = require('./quiz.js');
var User = require('./user.js');

var Invitee = bookshelf.Model.extend({
  tableName: 'invitee',
  hasTimestamps: true,
  quiz: () => this.belongsTo(Quiz),
  user: () => this.belongsTo(User)
});

module.exports = Invitee;

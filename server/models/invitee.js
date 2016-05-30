var bookshelf = require('../db/db_config/db_config.js');
require('./quiz.js');
require('./user.js');

var Invitee = bookshelf.Model.extend({
  tableName: 'invitee',
  hasTimestamps: true,
  quiz: function () { return this.belongsTo('Quiz') },
  user: function () { return this.belongsTo('User') }
});

module.exports = bookshelf.model('Invitee', Invitee);

var bookshelf = require('../db/db_config/db_config.js');

var Invitee = bookshelf.Model.extend({
  tablename: 'invitee',
  hasTimestamps: true
});

module.exports = Invitee;

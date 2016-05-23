var bookshelf = require('../db_config.js');

var UserAttempts = bookshelf.Model.extend({
  tablename: 'user_attempts',
  hasTimestamps: true
});

module.exports = UserAttempts;

var bookshelf = require('../db_config.js');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});


module.exports = User;

var bookshelf = require('../db_config.js');

var User = bookshelf.Model.extend({
  tableName: 'user',
  hasTimestamps: true
});


module.exports = User;

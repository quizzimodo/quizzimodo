var bookshelf = require('../db/db_config/db_config.js');

var Attempt = bookshelf.Model.extend({
  tablename: 'attempt',
  hasTimestamps: true
});

module.exports = Attempt;

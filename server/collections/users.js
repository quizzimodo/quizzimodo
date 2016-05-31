var bookshelf = require('../db/db_config/db_config.js');
var User = require('../models/user.js');

var Users = bookshelf.Collection.extend({
  model: User
});

module.exports = bookshelf.collection('Users', Users);

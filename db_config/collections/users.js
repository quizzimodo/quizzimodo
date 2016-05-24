var bookshelf = require('../db_config.js');
var User = require('../models/user.js');

var Users = new bookshelf.Collection();

Users.model = User;

module.exports = Users;

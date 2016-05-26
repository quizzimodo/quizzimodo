var bookshelf = require('../db_config.js');
var bcrypt = require('bcrypt-nodejs');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.on('creating', this.hashPassword, this);
  },
  hashPassword: function(model, attrs, options) {
    return new Promise(function(res, rej) {
      bcrypt.hash(model.attributes.password, 10, function(err, hash) {
        if (err) rej(err);
        model.set('password', hash);
        res(hash);
      });
    });
  },
  comparePasswords: function (candidatePassword) {
    var savedPassword = this.password;
    return new Promise(function(res, rej) {
      bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
        if (err) rej(err);
        res(isMatch);
      });
    });
  }
});


module.exports = User;

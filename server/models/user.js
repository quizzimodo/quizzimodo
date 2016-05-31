var bookshelf = require('../db/db_config/db_config.js');
var bcrypt = require('bcrypt-nodejs');
require('./quiz.js');
require('./invitee.js');
require('./attempt.js');

var User = bookshelf.Model.extend({
  tableName: 'user',
  hasTimestamps: true,
  quizzes: function () { return this.hasMany('Quiz', 'created_by') },
  invitees: function () { return this.hasMany('Invitee') },
  attempts: function () { return this.hasMany('Attempt') },
  initialize: function() {
    this.on('creating', this.hashPassword, this);
  },
  hashPassword: function(model, attrs, options) {
    return new Promise(function(res, rej) {
      bcrypt.hash(model.attributes.password, bcrypt.genSaltSync(10), null, function(err, hash) {
        if (err) rej(err);
        model.set('password', hash);
        res(hash);
      });
    });
  },
  comparePasswords: function (candidatePassword) {
    var savedPassword = this.attributes.password;
    return new Promise(function(res, rej) {
      bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
        if (err) rej(err);
        res(isMatch);
      });
    });
  }
});


module.exports = bookshelf.model('User', User);

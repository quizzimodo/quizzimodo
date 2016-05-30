var bookshelf = require('../db/db_config/db_config.js');
var Subtopic = require('./subtopic.js');
var Question = require('./question.js');
var Invitee = require('./invitee.js');
var User = require('./user.js');

var Quiz = bookshelf.Model.extend({
  tableName: 'quiz',
  hasTimestamps: true,
  subtopic: function () { return this.belongsTo(Subtopic) },
  user: function () { return this.belongsTo(User) },
  questions: function () { return this.hasMany(Question) },
  invitees: function () { return this.hasMany(Invitee) }
});

module.exports = Quiz;

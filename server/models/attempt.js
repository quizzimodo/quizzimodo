var bookshelf = require('../db/db_config/db_config.js');
var Quiz = require('./quiz.js');
var User = require('./user.js');
var UserAnswer = require('./user_answer.js');

var Attempt = bookshelf.Model.extend({
  tableName: 'attempt',
  hasTimestamps: true,
  quiz: () => this.belongsTo(Quiz),
  user: () => this.belongsTo(User),
  user_answers: () => this.hasMany(UserAnswer)
});

module.exports = Attempt;

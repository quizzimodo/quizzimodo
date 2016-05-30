var bookshelf = require('../db/db_config/db_config.js');
require('./quiz.js');
require('./user.js');
require('./user_answer.js');

var Attempt = bookshelf.Model.extend({
  tableName: 'attempt',
  hasTimestamps: true,
  quiz: function () { return this.belongsTo('Quiz') },
  user: function () { return this.belongsTo('User') },
  user_answers: function () { return this.hasMany('UserAnswer') }
});

module.exports = bookshelf.model('Attempt', Attempt);
